const touches = new Map()

document.body.style.touchAction = 'none'

window.ontouchstart = onStart
window.ontouchend = onEnd
window.ontouchmove = onMove

function onStart(event) {
	const d = document.createElement('div')
	const size = ~~(event.changedTouches[0].force * 100) - 10

	d.size = size
	d.style.position = 'absolute'
	d.style.borderRadius = '100%'
	d.style.width = size + 'vmin'
	d.style.height = size + 'vmin'
	d.style.backgroundColor = getRandomColor()
	d.style.left = `calc(${event.changedTouches[0].clientX}px - ${size/2}vmin)`
	d.style.top = `calc(${event.changedTouches[0].clientY}px - ${size/2}vmin)`

	touches.set(event.changedTouches[0].identifier, d)

	document.body.appendChild(d)

}

function onEnd(event) {
	console.log(event.changedTouches[0].identifier)
	document.body.removeChild(touches.get(event.changedTouches[0].identifier))
	touches.delete(event.changedTouches[0].identifier)
}

function onMove(event) {
	Array.from(event.changedTouches).forEach((e) => {
		const elem = touches.get(e.identifier)
		elem.style.left = `calc(${e.clientX}px - ${elem.size/2}vmin)`
		elem.style.top = `calc(${e.clientY}px - ${elem.size/2}vmin)`
	})
}

function getRandomColor() {
	const colors = [
		'lightsalmon',
		'salmon',
		'darksalmon',
		'lightcoral',
		'indianred',
		'crimson',
		'firebrick',
		'red',
		'darkred',
		'coral',
		'tomato',
		'orangered',
		'gold',
		'orange',
		'darkorange',
		'lightyellow',
		'lemonchiffon',
		'lightgoldenrodyellow',
		'papayawhip',
		'moccasin',
		'peachpuff',
		'palegoldenrod',
		'khaki',
		'darkkhaki',
		'yellow',
		'lawngreen',
		'chartreuse',
		'limegreen',
		'lime',
		'forestgreen',
		'green',
		'darkgreen',
		'greenyellow',
		'yellowgreen',
		'springgreen',
		'mediumspringgreen',
		'lightgreen',
		'palegreen',
		'darkseagreen',
		'mediumseagreen',
		'seagreen',
		'olive',
		'darkolivegreen',
		'olivedrab',
		'lightcyan',
		'cyan',
		'aqua',
		'aquamarine',
		'mediumaquamarine',
		'paleturquoise',
		'turquoise',
		'mediumturquoise',
		'darkturquoise',
		'lightseagreen',
		'cadetblue',
		'darkcyan',
		'teal',
		'powderblue',
		'lightblue',
		'lightskyblue',
		'skyblue',
		'deepskyblue',
		'lightsteelblue',
		'dodgerblue',
		'cornflowerblue',
		'steelblue',
		'royalblue',
		'blue',
		'mediumblue',
		'darkblue',
		'navy',
		'midnightblue',
		'mediumslateblue',
		'slateblue',
		'darkslateblue',
		'lavender',
		'thistle',
		'plum',
		'violet',
		'orchid',
		'fuchsia',
		'magenta',
		'mediumorchid',
		'mediumpurple',
		'blueviolet',
		'darkviolet',
		'darkorchid',
		'darkmagenta',
		'purple',
		'indigo',
		'pink',
		'lightpink',
		'hotpink',
		'deeppink',
		'palevioletred',
		'mediumvioletred',
		'white',
		'snow',
		'honeydew',
		'mintcream',
		'azure',
		'aliceblue',
		'ghostwhite',
		'whitesmoke',
		'seashell',
		'beige',
		'oldlace',
		'floralwhite',
		'ivory',
		'antiquewhite',
		'linen',
		'lavenderblush',
		'mistyrose',
		// 'gainsboro',
		// 'lightgray',
		// 'silver',
		// 'darkgray',
		// 'gray',
		// 'dimgray',
		// 'lightslategray',
		// 'slategray',
		// 'darkslategray',
		// 'black',
		'cornsilk',
		'blanchedalmond',
		'bisque',
		'navajowhite',
		'wheat',
		'burlywood',
		'tan',
		'rosybrown',
		'sandybrown',
		'goldenrod',
		'peru',
		'chocolate',
		'saddlebrown',
		'sienna',
		'brown',
		'maroon',
	]

	return colors[Math.floor(Math.random() * colors.length)]
}
