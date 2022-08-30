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
The HTML canvas is a powerful tool, letting you create both 2D and 3D objects within it. For our case, we will be sticking with 2D rendering. Normally, the origin of the canvas begins at the top left corner. However, since we are dealing with cartesian coordinates, we will begin my resetting the origin to the center of the canvas:
