const audio = document.getElementById("myAudio");
const volumeSlider = document.getElementById("volume");
const btn = document.getElementById("controlButton");


// set awal
audio.volume = 0.5;

// ubah volume pas slider digeser
volumeSlider.addEventListener("input", () => {
	audio.volume = volumeSlider.value;
});

btn.addEventListener("click", () => {
if (audio.paused) {
	audio.play();
} else {
	audio.pause();
}
});