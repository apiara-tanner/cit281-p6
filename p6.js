
class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  perimeter = () => this.sides.length > 0 ? this.sides.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
}

/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape{
  constructor(length = 0, width = 0) {
    let shapeArray = [length, width, length, width];
    super(shapeArray);
    this.length = length;
    this.width = width;
  }
  area(){
    return this.length * this.width;
  }
}

/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/


class Triangle extends Shape{
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    let triangleArray = [sideA, sideB, sideC];
    super(triangleArray);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area(){
    let halfPer = ((this.sideA + this.sideB + this.sideC)/2);
    let areaCalc = (Math.sqrt(halfPer * (halfPer-this.sideA)*(halfPer-this.sideB)*(halfPer-this.sideC)))
    return areaCalc;
  }
}

/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (let i = 0; i <= data.length; i++){
  if(i == 0){
    let rect = data[i];
    let areaOne = new Rectangle(rect[0], rect[1]).area();
    let perimeterOne = new Rectangle(rect[0], rect[1]).perimeter();
    console.log(`A rectangle with sides ${rect[0]},  ${rect[1]} has a perimeter of ${perimeterOne} and an area of ${areaOne}`)
  }
  if(i == 1){
    let rectwo = data[i];
    let areaTwo = new Rectangle(rectwo[0], rectwo[1]).area();
    let perimeterTwo = new Rectangle(rectwo[0], rectwo[1]).perimeter();
    console.log(`A square with sides ${rectwo[0]},  ${rectwo[1]} has a perimeter of ${perimeterTwo} and an area of ${areaTwo}`)
  }
  if(i == 2){
    let tri = data[i];
    let areaThree = new Triangle(tri[0], tri[1],tri[2]).area();
    let perimeterThree = new Triangle(tri[0], tri[1],tri[2]).perimeter();
    console.log(`A triangle with sides ${tri[0]}, ${tri[1]}, ${tri[2]} has a perimeter of ${perimeterThree} and an area of ${areaThree}`)
  }
  if(i == 3){
    let noneOne = data[i];
    console.log(`Shape with ${noneOne.length} side not supported`)
  }
  if(i == 4){
    let noneTwo = data[i];
    console.log(`Shape with ${noneTwo.length} sides not supported`)
  }
}
