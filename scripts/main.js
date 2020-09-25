const canvas = document.getElementById("ufo-canvas");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 150, 75);

ctx.font = '38px Arial';
ctx.fillStyle = 'red'
ctx.fillText("trekky", 30, 130);
ctx.strokeText("UFO", 130, 130)

