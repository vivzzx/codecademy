const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    static generateField(width, height) {
        const matrix = [];
        const widthField = width;
        const heightField = height;

        let symbol = (num) => {
            let result;
            switch (num) {
                case 0:
                    result = hat;
                    break;
                case 1: 
                    result = hole;
                    break;
                case 2:
                    result = fieldCharacter;
                    break;
                default:
                    result = "?"
                    break;
            }
            return result;
        }
        //console.log("num here", num)
        for (let index = 0; index < height; index++) {
            const row = new Array(width);
            for (let w = 0; w < width; w++) {
                let num = Math.floor(Math.random() * 3);
                if (w == 0 && index == 0) {
                    row[w] = fieldCharacter;
                } else {
                    row[w] = symbol(num);
                } 
            }
            matrix.push(row);
        }
        let pos = 0;
        return matrix;
    }
    static posX = 0;
    static posY = 0;
    static end = false;

    constructor(fieldArray) {
        this.field = fieldArray;
        //this.posX = posX;
        //this.posY = posY;
    }
/*
    set field(x, y, symbol) {
        this.field[x][y].push(symbol);
    }
*/

    checkPlay() {
        //console.log("\tcheck play: ", this.field[Field.posY][Field.posX])
        if (Field.posX === 0 && Field.posY === 0) {
            this.field[0][0] = pathCharacter;
        } else if (Field.posX < 0 || Field.posY < 0 || this.field[Field.posY][Field.posX] === undefined) {
            console.log("Out of bounds. You lost ☠️\n\n");
            Field.end = true;
            questionLine(Field.end);
        } else if (this.field[Field.posY][Field.posX] === hole) {
            console.log("\nYou fell in a hole. You lost ☠️\n\n");
            Field.end = true;
            questionLine(Field.end);
        } else if (this.field[Field.posY][Field.posX] === hat) {
            console.log("Congrats! You found your hat 🎩\n\n");
            Field.end = true;
            questionLine(Field.end);
        } else {
            console.log("end status: ", Field.end)
        }
    }

    print() {
        //this.checkPlay()
        //console.log("pos x: ", Field.posX, "pos y: ", Field.posY)
        this.field[Field.posY][Field.posX] = pathCharacter;
        
        if (!Field.end) {
            this.field.map(item => {
                console.log(item.join(' '))
            })
            //console.log("entrou no if\n")
            questionLine(Field.end);
        }
    }
    
    situation(direction) {
        if (direction === "right" || direction === "r") {
            Field.posX += 1;
            console.log("\nGoing right *->\n");
        } else if (direction === "left" || direction === "l") {
            Field.posX -= 1;
            console.log("\nGoing left <-*\n");
        } else if (direction === "up" || direction === "u") {
            Field.posY -= 1;
            console.log("\nGoing up \n");
        } else if (direction === "down" || direction === "d") {
            Field.posY += 1;
            console.log("\nGoing down\n");
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const questionLine = (end) => {
    if (end) {
        //console.log("\n fechou readline")
        readline.close();
    } else {
        readline.question(`\tWhich way?\n`, direction => {
            field2.situation(direction);
            field2.checkPlay()
            if (!Field.end) {
                field2.print()
            }
        })
    }
} 
//questionLine(Field.end)

let field1 = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
])

/** tests **/
//console.log(field1)
//console.log(field1.print())
//console.log(Field.print())

//let testGen = Field.generateField(3, 5)
let field2 = new Field(Field.generateField(5, 8));
console.log(field2.print())
//console.log(testGen)