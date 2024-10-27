export default class Sierpenski {
  constructor(canvas) {
    this.canvas = canvas;
    this.length = Math.min(this.canvas.width, this.canvas.height);
    
    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
    this.ctx.fillStyle = 'black';
  }

  render(iterations) {
    this.ctx.clearRect (-1*this.canvas.width/2, -1*this.canvas.height/2, this.canvas.width, this.canvas.height);

    let ax = -1*this.length/2;
    let ay = this.length * (Math.sqrt(3))/4;

    this.draw(ax, ay, this.length, iterations);
  }

  draw (x, y, length, iterations){
    let i = iterations
    let l = length

    if (i === 0){
      const ax = x;
      const ay = y;
      // a = {x:x, y:y};
      const bx = x + l/2;
      const by = y - (l * Math.sqrt(3))/2;
      const cx = x + l;
      const cy = y;

      this.ctx.beginPath ();
      this.ctx.moveTo (ax, ay);
      this.ctx.lineTo (bx, by);
      this.ctx.lineTo (cx, cy);
      this.ctx.closePath();
      this.ctx.fill ()
    } else {
      this.draw (x, y, l/2, i - 1);
      this.draw (x + l/4, y - (l * (Math.sqrt (3)))/4, l/2, i - 1)
      this.draw (x + l/2, y, l/2, i - 1)
    }
  }
}


//ctx.lineTo (l/2) not (-1 * l/2)
// all functions start from bottom left corner; point A

//calculate a from the center (based on the translate)

//draw (x, y, length, interactions) {}



// constructor - ALREADY DONE
// CANVAS, length, context (ctx), moves origin to center, fills black triangles

// render
  // number of iterations, clear canvas, draw the triangles

// when i = 0, the triangle fills up the canvas - L is the width and height of the canvas
// instead of starting from origin, you start from ax,ay - point A which is bottom left corner
// coordinates rewritten in reference to point A (ax, ay)

// i = 1 means subdivided by 1 - which means, three new black triangles are drawn so the center triangle remains white
// calculating new origin points for each of the triangle - bottom left to draw the new triangles
  // however all origin points for the new generated triangles are the three points of one triangle - the bottom left
// dividing it will make sure the math is the same


// render (iterations)
  // this.ctx.clearRect (x, y, width, height) -> move it back to the top left corner (this.canvas.width/2, this.canvas.height/2, this.canvas.width, this.canvas.height)
  // draw triangles:
    // draw (x, y, length, number of iterations (i)) - bottom left coordinates of the trangle (x,y) -> draw (x, y, l, i)
  
      // ax = -1 * this.length/2
      // ay = this.length * math.sqrt (3)/4
      // draw (ax, ay, this.length, iterations)
    
  // if (i === 0) {
  // draw triangle (x,y,l)
  // ax = x
  // ay = y
  // a = {x:x, y:y}
  // bx = x + l/2
  // by = y - l sqrt (2)....
  // cx = x + l/2
  // cy = y
      // line from point a to point b to point c to point a -> 
          // this.ctz.beginPath ()
          // moveTo (ax, ay)
          // lineTo (bx, by) to c to a
          // fill ()
          // closePath()
  // else { 
  // this.draw (x, y, l/2, i - 1)
  // this.draw (x + l/4, y - l sqrt (3)/4, l/2, i - 1)
  // this.draw (x + l/2, y, l/2, i - 1)
  // }