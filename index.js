const toggleButton = document.querySelector('.theme-toggle');

toggleButton.addEventListener('click', () => {
	toggleButton.classList.toggle('theme-toggle--toggled');
	document.body.classList.toggle('dark-theme');
});
