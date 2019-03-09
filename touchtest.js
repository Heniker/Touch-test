document.body.style.touchAction = 'none'

let touches = {}

function onStart(event) {
  var d = document.createElement('div');
  d.style.position = "absolute";
	d.style['border-radius'] = '100%';
	d.style.width = (~~(event.changedTouches[0].force * 100) - 10) + 'vmin';
	d.style.height = (~~(event.changedTouches[0].force * 100) - 10) + 'vmin';
	d.style.backgroundColor = 'blue'
  d.style.left = event.changedTouches[0].clientX+'px';
	d.style.top = event.changedTouches[0].clientY+'px';

	touches[event.changedTouches[0].identifier] = d


	document.body.appendChild(d)
}
window.ontouchstart = onStart


function onEnd(event) {
	document.body.removeChild(touches[event.changedTouches[0].identifier])
}
window.ontouchend = onEnd


function onMove(event) {
	Array.from(event.changedTouches).forEach( (e) => {
		touches[e.identifier].style.left = e.clientX + 'px'
		touches[e.identifier].style.top = e.clientY + 'px'
	})
}
window.ontouchmove = onMove