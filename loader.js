const date = document.getElementById('fullYear');
const loader = document.getElementById('loader'),
	background = document.querySelector('.bg');

date.innerHTML = new Date().getFullYear();

let load = 0;

const blurring = () => {
	load++;

	if (load > 99) {
		clearInterval(int);
	}
	loader.innerHTML = `${load}%`;
	loader.style.opacity = scale(load, 0, 100, 1, 0);
	background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

let int = setInterval(blurring, 30);
function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// window.alert('hello');
// window.alert('hello')
