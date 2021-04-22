var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
}

function draw () {
  background(250);
  
  grid.draw();
}

class Grid {
  constructor (cellSize) {
    this.cellSize = cellSize;
    // update the contructor to take cellSize as a parameter

    // use cellSize to calculate and assign values for numberOfColumns and numberOfRows
    //Step 1
    this.numberOfColumns = width / cellSize;
    this.numberOfRows = height / cellSize;
    // This probably isn't the right way, but it works, so if it ain't broke, don't fix it!
    
    //Step 2
    this.cells = new Array(this.numberOfColumns);

    for (var i = 0; i < this.numberOfColumns; i++) {
      this.cells[i] = new Array(this.numberOfRows)
    }
    
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
      }   
    }

    print(this.cells)
  }

  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].draw()
      }
    }
  }

  randomize () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(floor(random(2)));
      }
    }
    print(random(2));
    print(floor(random(2)));
  }
}

//Step 3

class Cell {
  constructor(column, row, size){
      this.column = column;
      this.row = row;
      this.size = size;
      this.isAlive = false;
  }
  
  //Step 4
  draw() {
    fill(240);
    if (this.isAlive == false) {
      fill(240);
    } else {
      fill(200, 0, 200);
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }

 
 setIsAlive(value) {
    if (value == true) {
      this.isAlive = true
    } else {
      this.isAlive = false
    }
  }

}