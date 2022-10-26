const hamburguerIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__overlay");
let currentDropdown = navOverlay;

hamburguerIcon.addEventListener("click", () => {
	hamburguerIcon.classList.toggle("nav__hamburguer--open");

	navOverlay.classList.toggle("nav__overlay--show");
});

/*Escucho constantemenete en que elementos del nav estoy dando click */
navOverlay.addEventListener("click", (e) => {
	e.preventDefault();
	//El elemento actual al que le doy click
	const currentElement = e.target;
	// console.log(e.target.classList.value);

	if (isActive(currentElement, "nav__parent")) {
		//Estamos dentro de un nav__parent;

		//del nav__parent accedemos a su elemento padre y sus hijos osea el span y ul, y seleccionamos el ul [1]
		const subMenu = currentElement.parentElement.children[1];
		console.log(subMenu);

		if (window.innerWidth < 768) {
			//console.log(subMenu.clientHeight);

			//clientHeigth devuelve el height actual de este elemento (inner: 0)
			// Si el height del sub menu es 0 hacemos que se muestre con su alto minimo con el metodo scrollHeight
			let height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0;

			subMenu.style.height = `${height}px`;
		} else {
			if (!isActive(subMenu, "nav__inner--show")) {
				closeDropdown(currentDropdown);
			}
			subMenu.classList.toggle("nav__inner--show");

			currentDropdown = subMenu;
		}
	}
});

function isActive(element, string) {
	/*Quiero ver si el elemento incluye al string que le estoy mostrando*/
	/*Existe la clase (string) dentro del elemento que estoy observando (string)*/
	return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
	if (isActive(currentDropdown, "nav__inner--show")) {
		currentDropdown.classList.remove("nav__inner--show");
	}
}

window.addEventListener("resize", () => {
	//Cada vez que entramos a un tamaño mayor a 768 se cierran los sub menu
	closeDropdown(currentDropdown);

	if (window.innerWidth > 768) {
		const navInners = document.querySelectorAll(".nav__inner");

		navInners.forEach((navInner) => {
			navInner.style.height = "";
		});
	}
});
