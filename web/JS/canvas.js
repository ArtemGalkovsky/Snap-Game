const canv = document.querySelector(".canvas")
const c = canv.getContext("2d")

const w = canv.width = canv.offsetWidth
const h = canv.height = canv.offsetHeight

function createFigure (type, color) {
	c.clearRect(0, 0, w, h)

	c.beginPath()

	c.fillStyle = color
	c.strokeStyle = color

	if (type === "circle") {
		c.arc(w / 2, h / 2, 150, 0, Math.PI * 2, false)
	} else if (type === "rect") {
		c.fillRect(w / 4, h / 4, w / 2, h / 2)
	} else if (type === "triangle") {
		c.moveTo(w / 2, h / 4)
		c.lineTo(w / 4, h - h / 4)
		c.lineTo(w - w / 4, h - h / 4)
	} else if (type === undefined) {
		let max = 50
		let min = 5

		let sides = Math.random() * (max - min + 1) + min

		c.moveTo(w - w / 4, h - h / 4)

		for (let i = 0; i < sides; i++) {
			c.lineTo(Math.random() * (w - w / 4 - w / 4 + 1) + w / 4, Math.random()* (h - h / 4 - h / 4 + 1) + h / 4)
		}
	}

	c.font = "60px Arial"
	c.textAlign = 'center'
	c.fillText(points, 60, 90)

	c.closePath()
	c.fill()
	c.stroke()
	
}

var points = 0
var colorsList = []
var isColorsSame = false

const colors = ["silver", "grey", "black", "blue", "cyan", "green", "yellow", "orange", "brown", "red", "pink", "magenta", "purple"]
	const figures = ["circle", "rect", "triangle", undefined]

const cnangeFigureInterval = setInterval(() => {
	
	let figure = figures[Math.floor(Math.random() * (figures.length))]
	let color = colors[Math.floor(Math.random() * (colors.length))]//colors[Math.floor(Math.random() * (colors.length - 1))]

	createFigure(figure, color)
	console.log(color, figure)

	isColorsSame = color === colorsList[colorsList.length - 1] ? true : false

	colorsList.push(color)

}, 2000)

const snapBtn = document.querySelector(".snap")

snapBtn.addEventListener("click", () => {
	isColorsSame ? ++points : --points
	console.log(points)

	c.clearRect(0, 0, 120, 120)
	c.font = "60px Arial"
	c.textAlign = 'center'
	c.fillText(points, 60, 90)
})