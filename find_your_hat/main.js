const prompt = require('prompt-sync')({sigint: true});
const term = require('terminal-kit').terminal;
const colors = require('colors');

const hat = '^'.magenta;
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*'.green;
const actualPathChar = '*'.brightMagenta;

class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
    }

    static posX = 0;
    static posY = 0;
    static end = false;
    static badChar = false;
    static hatX
    static hatY

    static hatPos = (width, height) => {
        Field.hatX = Math.floor(Math.random() * (width - 1));
        console.log("hat x: ", Field.hatX)
        Field.hatY = Math.floor(Math.random() * (height - 1));
        console.log("hat y: ", Field.hatY)
        if (Field.hatX === 0 && Field.hatY === 0) {
            Field.hatY++;
            Field.hatX++;
        }
    }

    // DO A SETUP TO GENERATE POSIBLE MAPS 
    static generateField(width, height) {
        const matrix = [];
        this.hatPos(width, height) 
        let symbol = (num) => {
            let result;
            switch (num) {
                case 0:
                    result = fieldCharacter;
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
        for (let index = 0; index < height; index++) {
            const row = new Array(width);
            for (let w = 0; w < width; w++) {
                let num = Math.floor(Math.random() * 3);
                if (w == 0 && index == 0) {
                    row[w] = fieldCharacter;
                } else if (w === Field.hatX && index === Field.hatY) {
                    row[w] = fieldCharacter;
                }
                else {
                    row[w] = symbol(num);
                } 
            }
            matrix.push(row);
        } 
        //matrix[Field.hatY][Field.hatX] = fieldCharacter;
        return matrix;
    }

    start() {
        term.slowTyping(
            'Find your Hat!\n\n' ,
            { 
                flashStyle: term.brightWhite, 
                delay: 50,
                style: term.bold.magenta
            } 
        );
        setTimeout(() => {
            this.print();
        }, 1500)
    }

    checkPlay() {
        if (Field.posX === 0 && Field.posY === 0) {
            this.field[0][0] = pathCharacter;
        } else if (Field.posX < 0 || Field.posY < 0 || this.field[Field.posY][Field.posX] === undefined) {
            term.brightRed.bold("Out of bounds. You lost ☠️\n\n");
            Field.end = true;
            questionLine(Field.end);
        } else if (this.field[Field.posY][Field.posX] === hole) {
            term.brightRed.bold("You fell in a hole. You lost ☠️\n\n");
            this.field[Field.posY][Field.posX] = hole.red;
            Field.end = true;
            this.print()
            //questionLine(Field.end);
        } else if (Field.posY === Field.hatY  && Field.posX === Field.hatX) {
            console.log("Congrats! You found your hat 🎩\n".green.bold);
            setTimeout(() => {
                term.brightYellow.bold.blink("\t🏆 You win! 🏆\n\n");
            }, 1000)
        
            this.field[Field.posY][Field.posX] = hat;
            Field.end = true;
            this.print()
        } else {
            this.field[Field.posY][Field.posX] = pathCharacter.red;
        }
    }

    print() {
        if (!Field.end) {
            this.field[Field.posY][Field.posX] = actualPathChar;
        }
        this.field.map(item => {
            console.log(item.join(' '))
        })
        this.field[Field.posY][Field.posX] = pathCharacter;
        console.log("\n")
        questionLine(Field.end);
    }
    
    situation(direction) {
        if (direction === "right" || direction === "r") {
            Field.posX += 1;
            console.log("➡️\n");
        } else if (direction === "left" || direction === "l") {
            Field.posX -= 1;
            console.log("\n⬅️\n");
        } else if (direction === "up" || direction === "u") {
            Field.posY -= 1;
            console.log("\n ⬆️\n");
        } else if (direction === "down" || direction === "d") {
            Field.posY += 1;
            console.log("\n⬇️\n");
        } else {
            term.red.bold.blink("\nError!");
            term.red.bold("\nYou can use right, left, up and down. Or just the initials.\n");
            term.yellow.bold("Please try again\n\n")
            Field.badChar = true; 
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const questionLine = (end) => {
    if (end) {
        /*  **SETUP TO PLAY AGAIN**

        term("Do you want to play again? [Y|n]\n")
        term.yesOrNo( {yes: ['y' , 'ENTER'], no: ['n']}, function(error, result) {
            if (result) {
                term.green("Let's play again!");
                Field.end = false;
                term.clear()
                console.log(field3.start())
            } else {
                readline.close();
            }
        } ) */
        readline.close();
    } else {
        readline.question('☝️ Which way?\n'.green.bold, direction => {
            field2.situation(direction);
            if (Field.badChar) {
                setTimeout(() => {
                    Field.badChar = false;
                    field2.checkPlay()
                    if (!Field.end) {
                        field2.print()
                    }
                }, 2000);
            } else {
                field2.checkPlay()
                if (!Field.end) {
                    field2.print()
                }
            }
            
        })
    }
} 

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
//let field3 = new Field(Field.generateField(9, 8));
console.log(field2.start())
//console.log(testGen)