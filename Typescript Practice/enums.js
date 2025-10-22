var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));

var myDirection = Directions.North;
console.log(myDirection); // the output is 0 and the value will increase by 1 for each direction.
var Direction;
(function (Direction) {
    Direction["North"] = "north";
    Direction["South"] = "south";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West"; // the value will be 3 because the prvious value is 2
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
console.log(currentDirection);
