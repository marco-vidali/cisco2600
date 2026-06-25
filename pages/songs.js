let vinyl = document.getElementById("vinyl");
let action = document.getElementById("action");

let song;

function vinylOff() {
	vinyl.src = "/images/vinyl-off.png";

	action.innerHTML = `
	take the vinyl of

	<select id="songs">
		<option value="Hormone Cemetery.mp3">Hormone Cemetery</option>
		<option value="Brioche.mp3">Brioche</option>
		<option value="Cianuro.mp3">Cianuro</option>
		<option value="Girasoli.mp3">Girasoli</option>
		<option value="Strega.mp3">Strega</option>
	</select>

	and <button id="put-on">put it on</button>`;

	let putOn = document.getElementById("put-on");

	putOn.addEventListener("click", () => {
		song = document.getElementById("songs").value;
		vinylLoaded();
	});
}

function vinylLoaded() {
	vinyl.src = "/images/vinyl-loaded.png";

	action.innerHTML = `
    <button id="start">start</button> the vinyl or
    <button id="take-off">take it off</button>
    `;

	let start = document.getElementById("start");
	start.addEventListener("click", vinylRunning);

	let takeOff = document.getElementById("take-off");
	takeOff.addEventListener("click", vinylOff);
}

function vinylRunning() {
	vinyl.src = "/images/vinyl-running.gif";
	action.innerHTML = `<button id="stop">stop</button> the vinyl`;

	let stop = document.getElementById("stop");

	stop.addEventListener("click", () => {
		vinylDust.pause();
		songAudio.pause();
		clearTimeout(songTimeout);
		vinylLoaded();
	});

	let vinylDust = new Audio("/sounds/vinyl-dust.mp3");
	vinylDust.play();

	let songAudio = new Audio("/sounds/" + song);

	songAudio.addEventListener("ended", () => {
		vinylLoaded();
	});

	let songTimeout = setTimeout(() => {
		songAudio.play();
	}, 3000);
}

vinylOff();
