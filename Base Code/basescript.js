const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const lineWidthInput = document.getElementById("lineWidth");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = lineWidthInput.value;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
})

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
})




/*
|                     /\    /\
|                    /  \  /  \
|                   ___________
|                  /__      __ \
|                 //  \    /  \ \
|              ___| \__/    \__/ |
|            /                   |
|           |____/               |
|            \__________________/
|                 \             \  
|                  |             |     /\
|                  | /      |    |     \ \
|                  |/    /  |    |      | |
|                  /    /   |    |      / /
|             ___ /    /  __|    |_____/ /
|           /         / /        |______/
|           \________/--\________|
|                  ze doggy 
*/
