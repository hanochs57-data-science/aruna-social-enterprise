document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector(".hamburger, .menu-button, [aria-label='Menu']");
	const menu = document.querySelector(".mobile-menu, .nav-menu, nav");

	if (!menuButton || !menu) return;

	menuButton.addEventListener("click", () => {
		const isOpen = menu.classList.toggle("open");

		menuButton.classList.toggle("active", isOpen);
		menuButton.setAttribute("aria-expanded", String(isOpen));
		menu.setAttribute("aria-hidden", String(!isOpen));
	});
});

