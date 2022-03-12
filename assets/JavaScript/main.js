const ButtonMenu = document.querySelector('#button-bars')
const Menu= document.querySelector('#menu')
const ButtonClose=document.querySelector('#button-bars2')

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



// aqui se hace para eliminar el menu
const links= document.querySelectorAll('.menu-item-link')

links.forEach(element => {
	element.addEventListener('click', toggleMenu )
});

//para el fondo animado
particlesJS.load('particles-js', './assets/JavaScript/particles.json', function() {
	console.log('callback - particles.js config loaded');
  });