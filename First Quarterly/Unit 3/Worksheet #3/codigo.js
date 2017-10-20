class Casilla {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.clicked = false;
    }

    click() {
        this.clicked = true;
    }
}

class Vecino extends Casilla {
    constructor(game, x, y) {
        super(game, x, y);
        this.nei_mines = 0;
    }

    click() {
        super.click();
        if (this.nei_mines === 0) this.game.update_neighbour_white(this.x, this.y);
        this.game.draw();
    }
}

class Mina extends Casilla {
    constructor(game, x, y) {
        super(game, x, y);
        this.exploded = false;
    }

    click() {
        super.click();
        this.exploded = true;
        this.game.explode_bombs();
    }

    explode() {
        this.clicked = true;
        this.exploded = true;
    }
}

class BuscaMinas {
    constructor(grid_size = 8, mines_count = 10, gameplay_time = 240) {
        this.grid_size = grid_size;
        if (mines_count <= 0) this.mines_count = 1;
        else if (mines_count >= Math.floor((grid_size ** 2) / 3)) this.mines_count = Math.floor((grid_size ** 2) / 3);
        else this.mines_count = mines_count;
        this.gameplay_time = gameplay_time;
        this.ended = false;
        this.grid = new Array(this.grid_size).fill(0);
        this.grid.forEach((x, i) => this.grid[i] = new Array(this.grid_size).fill(0));
        this.init_game();
    }

    get_random_pos() {
        return Math.floor(Math.random() * this.grid_size);
    }

    add_random_mine() {
        let x = this.get_random_pos();
        let y = this.get_random_pos();
        if (this.grid[x][y] instanceof Mina) this.add_random_mine();
        else this.add_mine(x, y);
    }

    update_neighbour_mine(x, y) {
        for (let x2 = x - 1; x2 <= x + 1; x2++) {
            for (let y2 = y - 1; y2 <= y + 1; y2++) {
                if (x2 >= 0 && x2 < this.grid_size && y2 >= 0 && y2 < this.grid_size) {
                    if (this.grid[x2][y2] instanceof Vecino) {
                        this.grid[x2][y2].nei_mines = this.grid[x2][y2].nei_mines + 1;
                    }
                }
            }
        }
    }

    update_neighbour_white(x, y) {
        for (let x2 = x - 1; x2 <= x + 1; x2++) {
            for (let y2 = y - 1; y2 <= y + 1; y2++) {
                if (x2 >= 0 && x2 < this.grid_size && y2 >= 0 && y2 < this.grid_size) {
                    if (!this.grid[x2][y2].clicked) {
                        if (this.grid[x2][y2] instanceof Vecino) {
                            this.grid[x2][y2].click();
                            if (this.grid[x2][y2].nei_mines === 0) this.update_neighbour_white(x2, y2);
                        }
                    }
                }
            }
        }
    }

    add_mine(x, y) {
        this.grid[x][y] = new Mina(this, x, y);
        this.update_neighbour_mine(x, y);
        console.log('Mina añadida en [' + x + ',' + y + ']');
    }

    clear_board() {
        this.grid.forEach((x, i) => x.forEach((y, j) => x[j] = new Vecino(this, i, j)));
    }

    add_mines() {
        for (let i = 1; i <= this.mines_count; i++) this.add_random_mine();
    }

    click(row, column) {
        if (!this.grid[row][column].clicked) {
            this.grid[row][column].click();
        } else {
            console.log('La partida ya ha terminado!');
        }
    }

    explode_bombs() {
        this.grid.forEach(row => row.forEach(column => {
            if (column instanceof Mina) column.explode();
        }));
        this.end_game(false);
    }

    draw() {
        let grid_obj = document.getElementById("bmgrid");

        let grid_html = "<table>";
        this.grid.forEach(row => {
            grid_html += "<tr>";
            row.forEach(column => {
                if (column.clicked) {
                    if (column instanceof Vecino) grid_html += "<td class='vecino' data-mines='" + column.nei_mines + "'>" + (column.nei_mines > 0 ? column.nei_mines : '') + '</td>';
                    else if (column instanceof Mina) grid_html += "<td class='mina'>💣</td>";
                    else grid_html += "<td class='" + typeof column + "'></td>";
                } else {
                    grid_html += "<td class='not-clicked' data-row='" + column.x + "' data-column='" + column.y + "' onclick='cellClick(this)'></td>";
                }
            });
            grid_html += "</tr>";
        });
        grid_html += "</table>";

        grid_obj.innerHTML = grid_html;
    }

    update_counter() {
        let counter_obj = document.getElementById('bmgpcounter');
        counter_obj.innerHTML = 'Tiempo restante: ' + this.gameplay_time;
    }

    init_game() {
        this.clear_board();
        this.add_mines();
        this.draw();
        this.update_counter();

        this.timer = setInterval(() => {
            this.gameplay_time--;
            this.update_counter();
            if (this.gameplay_time <= 0) this.end_game(false);
        }, 1000)
    }

    end_game(win = false) {
        this.ended = true;
        clearInterval(this.timer);
        let counter_obj = document.getElementById('bmgpcounter');
        counter_obj.innerHTML = '¡Has ' + (win ? 'ganado' : 'perdido') + '!';
        this.draw();
    }
}

const bmgame = new BuscaMinas(8, 10, 240);

cellClick = (obj) => {
    if (!bmgame.ended) {
        [x, y] = [obj.getAttribute('data-row'), obj.getAttribute('data-column')];
        bmgame.click(x, y);
    } else {
        console.log('La partida ya ha terminado!');
    }
};