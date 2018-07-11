"use strict"

const build = {
	title : null,
	dev   : null,
}

;(function () {

	const el = document.querySelector("#head")

	build.title = el.attributes["title"].value
	build.dev   = el.hasAttribute("dev")

	// create(name String, attrs Object, text String) Object
	const create = function (name, attrs, text) {
		const el = document.createElement(name)
		for (const key in attrs) {
			if (attrs.hasOwnProperty(key)) {
				el.setAttribute(key, attrs[key])
			}
		}
		if (!text) { return el }
		el.appendChild(document.createTextNode(text))
		return el
	}

	const dependencies = [
		create("title", null, build.title),
		create("meta", {name: "viewport", content: "width=device-width, initial-scale=1"}, null),
		create("link", {rel: "stylesheet", href: "stylesheets/reset.css"}, null),
		create("link", {rel: "stylesheet", href: "stylesheets/debug.css"}, null),
		create("link", {rel: "stylesheet", href: "stylesheets/style.css"}, null)
	]

	const head = document.querySelector("head")
	for (const x in dependencies) {
		head.appendChild(dependencies[x])
	}

	el.parentNode.removeChild(el)

}())