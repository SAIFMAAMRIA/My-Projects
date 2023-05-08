// Best viewed in full screen mode: https://codepen.io/jackiezen/full/MWBBawb

// Jackie Zen in collaboration with Daniel Wong

// DOM elements
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
	{
		album: "Starboy",
		emblem: "I'm a motherfuckin' starboy",
		"bg-color": ["#001BFF", "#ff0000"],
		"accent-color": "#FFF700",
		url:
			"https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
		spotify:
			"https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator&theme=0"
	},
	{
		album: "Blinding by the lights",
		emblem: "No one's around to judge me",
		"bg-color": ["#000", "#FF0000"],
		"accent-color": "#000",
		url: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
		spotify:
			"https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator"
	},
	{
		album: "I Was Never There",
		emblem: "It won't matter",
		"bg-color": ["#4D2604", "#000"],
		"accent-color": "#4D2604",
		url: "https://media.pitchfork.com/photos/5ac234a8ad9bce569e0acf13/1:1/w_320/My%20Dear%20Melancholy,.jpg",
		spotify:
			"https://open.spotify.com/embed/track/1cKHdTo9u0ZymJdPGSh6nq?utm_source=generator&theme=0"
	},
	{
		album: "The Hills",
		emblem: "Keep our business on the low-low",
		"bg-color": ["#fff", "#000"],
		"accent-color": "#CCCCCC",
		url:
			"https://cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/264x264.jpg",
		spotify:
			"https://open.spotify.com/embed/track/7fBv7CLKzipRk6EC6TWHOB?utm_source=generator"
	},
	{
		album: "Gasoline",
		emblem: "It's 5 a.m., I'm high again",
		"bg-color": ["#000", "#001BFF"],
		"accent-color": "#001BFF",
		url:
			"https://media.glamour.com/photos/61d88e76fb51b5359c910f55/1:1/pass/the-weeknd.png",
		spotify:
			"https://open.spotify.com/embed/track/3KyKxJ4P3pVCgaZwaq2rUC?utm_source=generator"
	},
	{
		album: "Call out my name",
		emblem: "I want you to stay",
		"bg-color": ["#ff0000", "#FF6C00"],
		"accent-color": "#FF6C00",
		url: "data:image/jpeg;base64,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",
		spotify:
			"https://open.spotify.com/embed/track/09mEdoA6zrmBPgTEN5qXmN?utm_source=generator"
	},
	{
		album: "Creepin",
		emblem: "Keep it on the low",
		"bg-color": ["#fff", "#373532"],
		"accent-color": "#373532",
		url: "https://i.scdn.co/image/ab67616d0000b27313e54d6687e65678d60466c2",
		spotify:
			"https://open.spotify.com/embed/track/2dHHgzDwk4BJdRwy9uXhTO?utm_source=generator"
	},
	{
		album: "Out of time",
		emblem: "I look back now and I realize",
		"bg-color": ["#000", "#05148D"],
		"accent-color": "#05148D",
		url:
			"https://www.rap-up.com/wp-content/uploads/2022/04/the-weeknd-glasses-2.jpg",
		spotify:
			"https://open.spotify.com/embed/track/25C86uEjQ0fjj3bvsxIusO?utm_source=generator"
	},
	{
		album: "Heartless",
		emblem: "I've been runnin' through the pussy",
		"bg-color": ["#a8834a", "#644323"],
		"accent-color": "#CEA766",
		url: "https://www.radiofrance.fr/s3/cruiser-production/2021/10/f0335a24-8f0b-4a12-b4f3-19a3f64abe94/1200x680_the-weeknd.jpg",
		spotify:
			"https://open.spotify.com/embed/track/6bnF93Rx87YqUBLSgjiMU8?utm_source=generator&theme=0"
	},

	{
		album: "Nothing Is Lost",
		emblem: "it's war we're facing",
		"bg-color": ["#FF9900", "#000"],
		"accent-color": "#FF9900",
		url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC1TDzxtVg_GcGt9nM0GpBcZbQsH3mOpqJw&usqp=CAU",
		spotify:
			"https://open.spotify.com/embed/track/1DzJbVkBELu6jDu6q0T0tk?utm_source=generator"
	}
];

// Add Event Listeners
scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

// Event Listeners
const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
	}
};

// Main Function
let index = 0;

const updateDisplay = (index) => {
	// SET DELIMITER
	let DELIMITER = "";

	// delcare album specified by index
	const album = albums[index];

	// reset all animations and disable button
	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	// add css classes, texts, and styles
	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	spotifyWidget.src = album.spotify;

	const number = albums.length - index;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	// hide arrows
	if (index === 0) scrollLeft.classList.add("hide-arrow");
	else scrollLeft.classList.remove("hide-arrow");

	if (index === 9) scrollRight.classList.add("hide-arrow");
	else scrollRight.classList.remove("hide-arrow");

	// create emblem
	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	// add final animations
	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

// Start Script
updateDisplay(index);
