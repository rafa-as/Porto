const audio = document.getElementById("myAudio");
const volumeSlider = document.getElementById("volume");

// set awal
audio.volume = 0.5;

// ubah volume pas slider digeser
volumeSlider.addEventListener("input", () => {
	audio.volume = volumeSlider.value;
});