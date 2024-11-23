const makeDark = () => {
	const themeIcon = document.querySelector('#themeIcon')
	const logoImage = document.querySelector('#logoImage')
	localStorage.setItem('theme', 'dark');
	document.documentElement.classList.add('dark')
	themeIcon && (themeIcon.outerHTML = '<span><i data-lucide="moon-star" id="themeIcon" class="h-7 w-7"></i></span>')
	logoImage && (logoImage.src = 'https://noticias.digiton.tech/images/full-logo-white.svg')
	window.lucideClient.createIcons({ icons: window.lucideClient.icons })
}

const makeLight = () => {
	const themeIcon = document.querySelector('#themeIcon')
	const logoImage = document.querySelector('#logoImage')
	localStorage.setItem('theme', 'light');
	document.documentElement.classList.remove('dark')
	themeIcon?.setAttribute('data-lucide', 'sun')
	themeIcon && (themeIcon.outerHTML = '<span><i data-lucide="sun" id="themeIcon" class="h-7 w-7"></i></span>')
	logoImage && (logoImage.src = 'https://noticias.digiton.tech/images/full-logo.svg')
	window.lucideClient.createIcons({ icons: window.lucideClient.icons })
}

const setThemeByButton = () => {
	const savedTheme = localStorage.getItem('theme')

	if (savedTheme !== 'dark')
		makeDark()
	else
		makeLight()
}

const setThemeByBrowserPreference = () => {
	const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')

	if (darkTheme)
		makeDark()
	else
		makeLight()
}

const setThemeByLocalStorage = () => {
	const savedTheme = localStorage.getItem('theme')

	if (savedTheme === 'dark')
		makeDark()
	else
		makeLight()
}

const handleThemeOnLoad = () => {
	const savedTheme = localStorage.getItem('theme')

	if (savedTheme)
		setThemeByLocalStorage()
	else
		setThemeByBrowserPreference()
}

document.addEventListener('DOMContentLoaded', handleThemeOnLoad)
document.querySelector('#theme').addEventListener('click', setThemeByButton)