(() => {
	const menuBtnRef = document.querySelector("[data-menu-open]");
	const mobileMenuRef = document.querySelector("[data-menu-close]");
	const pageBody = document.querySelector(".body");

	menuBtnRef.addEventListener("click", () => {
		const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		pageBody.classList.toggle("no-scroll");
	});
})();