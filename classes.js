/*1. Copy and paste your prototype in here and refactor into class
 syntax.*/
    class KuboidMaker {
       constructor(length, width, height) {
         this.length = length;
        this.width = width;
        this.height = height;
      }
   Volume() {
   return this.length * this.width * this.height;
     }
     surfaceArea() {
       return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

    }
}
    
var kuboid = new KuboidMaker(4, 5, 5)

 console.log(kuboid.Volume()); // 100
console.log(kuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class
// called CubeMaker.  Find out the formulas for volume and
// surface area for cubes and create those methods using the dimension
// properties from CuboidMaker.  Test your work by logging out your
// volume and surface area.

class CubeMaker extends KuboidMaker{
        constructor(length, width, height, material) {
         super(length, width, height)  
         this.material = material;         
        }   
        dimension() {
       console.log(`I am a box made of ${this.material} with a volume
        of ${this.Volume()} and a surface area of ${this.surfaceArea()}.`);
                  }
                }        

                var box = new CubeMaker(4, 5, 5, 'cardboard');          

console.log(box.dimension());
