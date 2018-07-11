"use strict"

;(function () {

	const version = function () {
			return build.dev ? "" : ".min"
	}

	document.write(
		'<div id="app"></div>' +
		'<script src="https://unpkg.com/vue@2.x/dist/vue' + version() + '.js"></script>' +
		'<script src="scripts/main.js"></script>'
	)

	const el = document.querySelector("#body")
	el.parentNode.removeChild(el)

}())