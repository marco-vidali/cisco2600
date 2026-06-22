const paper = document.getElementById("paper");
const ctx = paper.getContext("2d");

let isMouseDown = false;
let lastX = 0;
let lastY = 0;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.strokeStyle = "#f1f1e6";

ctx.lineWidth = 2;
ctx.lineCap = "round";

document.addEventListener("mousedown", (e) => {
	isMouseDown = true;

	lastX = e.clientX;
	lastY = e.clientY;
});

document.addEventListener("mouseup", (e) => {
	isMouseDown = false;
});

document.addEventListener("mousemove", (e) => {
	if (!isMouseDown) return;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();

	lastX = e.clientX;
	lastY = e.clientY;
});
