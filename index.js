// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     },
// };

// circle.draw()

// Factory Function 
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    };
}

const circle = createCircle(1);

 
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}
const another = new Circle(1);














// codewars problem


/*Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
var countSheep = function (num){
    let str = ''
    for(let i =1; i <= num; i++){
      str += `${i} sheep...`
    }
    return str
  }