function draw_triangle(triangle_set) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set the fill color for the point
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.moveTo(triangle_set[0][0], triangle_set[0][1]);
  ctx.lineTo(triangle_set[1][0], triangle_set[1][1]);
  
  ctx.moveTo(triangle_set[1][0], triangle_set[1][1]);
  ctx.lineTo(triangle_set[2][0], triangle_set[2][1]);

  ctx.moveTo(triangle_set[2][0], triangle_set[2][1]);
  ctx.lineTo(triangle_set[0][0], triangle_set[0][1]);

  ctx.stroke();
}

function reset_canvas() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.reset();
}

function midpoint(point1, point2) {
  // (xᵧ, yᵧ) = ((x₁ + x₂)/2, (y₁ + y₂)/2
  return [(point1[0]+point2[0])/2, (point1[1]+point2[1])/2]
}

function sierpinski(vertices, n){
  /* vertices look like this:
     [[[x11, y11], ..., [x13, y13]],
     ...,
     [[xn1, yn1], ..., [xn3, yn3]]]
  */
  if (n == 0){
    draw_triangle(vertices);
  }
  else {

    n--;
    
    let p01 = midpoint(vertices[0], vertices[1])
    let p12 = midpoint(vertices[1], vertices[2])
    let p20 = midpoint(vertices[2], vertices[0])

    draw_triangle([vertices[0], p01, p20]);
    sierpinski([vertices[0], p01, p20], n);

    draw_triangle([vertices[1], p01, p12]);
    sierpinski([vertices[1], p01, p12], n);

    draw_triangle([vertices[2], p12, p20]);
    sierpinski([vertices[2], p12, p20], n);
  }
}

function sierpinski_wrapper(vertices){
  reset_canvas();
  const depth = document.getElementById("depth");
  sierpinski(vertices, depth.value)
}

function depth_change(){
  const depth = document.getElementById("depth");
  depth.value = Number(depth.value) + 1
  if (depth.value > 5) {
    depth.value = 0
  }
}

const vertices = [[0, 500], [500, 500], [250, 0]];

window.addEventListener("DOMContentLoaded", (event) => {
  sierpinski(vertices, 0);
  const depth = document.getElementById("depth")
  depth.addEventListener("click",  function() {
    depth_change();
    sierpinski_wrapper(vertices)
  });
});

