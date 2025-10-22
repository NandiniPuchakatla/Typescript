enum Directions {
    North, South, East, West
}

let myDirection = Directions.North;
console.log(myDirection);  // the output is 0 and the value will increase by 1 for each direction.


enum Direction {
    North = "north",
    South = "south",
    East = 2, // here i initialized the value as 2
    West   // the value will be 3 because the prvious value is 2
}

let currentDirection = Direction.North;
console.log(currentDirection); 