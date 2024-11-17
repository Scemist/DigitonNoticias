import { createIcons, icons } from 'lucide';

const lucideIcons = {
	MoonStar: icons.MoonStar,
	Code: icons.Code,
	Menu: icons.Menu,
	PencilLine: icons.PencilLine,
	Presentation: icons.Presentation,
	Play: icons.Play,
	Dot: icons.Dot,
	Brain: icons.Brain,
	X: icons.X,
	Sun: icons.Sun,
}

createIcons({ icons: lucideIcons })

window.lucideClient = { createIcons, icons: lucideIcons }
