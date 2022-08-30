# A5: Sierpenski

Refer back to A1 for information on running the development server, and with running tests locally.

<img src="https://user-images.githubusercontent.com/207651/187332099-b3f5116c-f45d-4d21-8b6d-e61dbc8f1f62.gif" width="500">

The [Sierpenski Triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) is a popular mathematical fractal which recursively subdivides an equilateral triangle. As with a fractal, it is a generated pattern than can be infinitely subdivided and zoomed in on.

The way a Sierpenski Triangle is created is quite simple, though the implementation a bit more challenging. In essence, these are the steps:

1. Start with an equilateral triangle
2. Subdivide it into four equal parts and remove the center triangle
3. Repeat step 2 with each of the remaining triangles ad infinitium

In this assignment, you will write the code to recreate this famous triangle through recursion and the HTML `<canvas>`. We’ll also brush up on the math required to generate an equilateral triangle. 

## Canvas
The HTML canvas is a powerful tool, letting you create both 2D and 3D objects within it. For our case, we will be sticking with 2D rendering. Normally, the origin of the canvas begins at the top left corner. However, since we are dealing with cartesian coordinates, we will begin my resetting the origin to the center of the canvas by calling `translate()` in the constructor:

<img src="https://user-images.githubusercontent.com/207651/187335011-9700c7d9-72c4-41be-b618-9f9aacd63d95.png" width="500">

Note that even if we do this, the y-axis still increases going downwards.

To draw in a canvas, you must access its [context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D). This exists as part of the canvas which lets you draw shapes. You’ve actually used it in the N-Body assignment, though it was abstracted for you. This time, you’ll be accessing it directly. You can access the context of a canvas by calling `let ctx = canvas.getContext('2d');`. From here, you can do many different operations including:

```js
ctx.fillRect(0, 100, 50, 50) // Draws a square with width and height 50 where its top left corner is at (0, 100).
ctx.fillRect(25, 30, 100, 10) // Draws a rectangle with width 100 and height 10 where its top left corner is at (25, 30).

// Draw a path from (20, 20) to (50, 30) to (50, 50)
ctx.beginPath(); // Tells canvas to begin drawing the path
ctx.moveTo(20, 20); // Moves the drawing pencil to (20, 20)
ctx.lineTo(50, 30); // Draws a line from (20, 20) to (50, 30)
ctx.lineTo(50, 50); // Draws a line from (50, 30) to (50, 50)
ctx.endPath(); // Tells canvas to finish drawing the path
```

## Drawing an equilateral triangle

<img src="https://user-images.githubusercontent.com/207651/187336794-5967bae5-6c5d-4a51-93bc-a032070c4d22.png" width="500">

To draw an equilateral triangle with with length $L$ around the origin, we first calculate out its three vertices:

