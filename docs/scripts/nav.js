const toggleMenuButton = document.querySelector('#toggleMenu')

const disableMenu = () => {
	const menuModal = document.querySelector('#menuModal')
	const modalFilter = document.querySelector('#modalFilter')

	menuModal
		.classList
		.add('hidden')
	modalFilter
		.classList
		.add('hidden')
}

const enableMenu = () => {
	const menuModal = document.querySelector('#menuModal')
	const modalFilter = document.querySelector('#modalFilter')

	menuModal
		.classList
		.remove('hidden')
	modalFilter
		.classList
		.remove('hidden')
}

toggleMenuButton.onclick = () => menuModal
	.classList
	.contains('hidden')
	? enableMenu()
	: disableMenu()

const dismissMenu = document
	.querySelectorAll('.dismiss-menu')
	.forEach(element => element.onclick = disableMenu)