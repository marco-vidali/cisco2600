const writings = document.getElementsByClassName("writing");
const bookCursor = document.getElementById("book-cursor");

for (let i = 0; i < writings.length; i++) {
	writings[i].addEventListener("mouseenter", (e) => {
		bookCursor.style.display = "block";
	});

	writings[i].addEventListener("mousemove", (e) => {
		bookCursor.style.left = e.clientX - 14 + "px";
		bookCursor.style.top = e.clientY - 6 + "px";
	});

	writings[i].addEventListener("mouseleave", (e) => {
		bookCursor.style.display = "none";
	});
}
