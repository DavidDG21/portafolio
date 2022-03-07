const ButtonMenu = document.querySelector('#button-bars')
const Menu= document.querySelector('#menu')

const toggleMenu = () => {
	if (Menu.classList.contains('active')) {
		Menu.classList.remove('active')
	} else {
		Menu.classList.add('active')
	}
}

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

ButtonMenu.addEventListener('click', toggleMenu)

// para hacer el menu

const links= document.querySelectorAll('.menu-item-link')

links.forEach(element => {
	element.addEventListener('click', toggleMenu )
});


