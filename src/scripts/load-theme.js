// tailwind.config = { darkMode: 'class' }

function makeDark() {
	const themeIcon = document.querySelector('#themeIcon')
	const logoImage = document.querySelector('#logoImage')
	document.documentElement.classList.add('dark')
	localStorage.setItem('theme', 'dark')
	themeIcon && (themeIcon.outerHTML = '<span><i data-lucide="moon-star" id="themeIcon" class="h-7 w-7"></i></span>')
	logoImage && (logoImage.src = 'https://noticias.digiton.tech/images/full-logo-white.svg')
}

const makeLight = () => {
	const themeIcon = document.querySelector('#themeIcon')
	const logoImage = document.querySelector('#logoImage')
	document.documentElement.classList.remove('dark')
	localStorage.setItem('theme', 'dark')
	themeIcon?.setAttribute('data-lucide', 'sun')
	themeIcon && (themeIcon.outerHTML = '<span><i data-lucide="sun" id="themeIcon" class="h-7 w-7"></i></span>')
	logoImage && (logoImage.src = 'https://noticias.digiton.tech/images/full-logo.svg')
}

if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches)
	makeDark()
else
	makeLight()