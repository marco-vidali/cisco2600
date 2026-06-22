const paper = document.getElementById("paper");
const pencilCursor = document.getElementById("pencil-cursor");
const ctx = paper.getContext("2d");

let isMouseDown = false;
let lastX = 0;
let lastY = 0;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.strokeStyle = "#f1f1e6";

ctx.lineWidth = 2;
ctx.lineCap = "round";

paper.addEventListener("mousedown", (e) => {
	isMouseDown = true;

	lastX = e.clientX;
	lastY = e.clientY;
});

paper.addEventListener("mouseup", (e) => {
	isMouseDown = false;
});

paper.addEventListener("mouseenter", (e) => {
	pencilCursor.style.display = "block";
});

paper.addEventListener("mouseleave", (e) => {
	pencilCursor.style.display = "none";
});

paper.addEventListener("mousemove", (e) => {
	pencilCursor.style.left = e.clientX - 4 + "px";
	pencilCursor.style.top = e.clientY - 31 + "px";

	if (!isMouseDown) return;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();

	lastX = e.clientX;
	lastY = e.clientY;
});
