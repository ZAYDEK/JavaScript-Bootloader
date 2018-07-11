"use strict"

Vue.component("hello", {
	template: "<p>hello, <slot></slot>!</p>"
})

// ! var is preferred for Safari: stackoverflow.com/a/41195385
var app = new Vue({
	el: "#app",
	template: "<hello>world</hello>",
	data: function () {
		return {
			msg: "test"
		}
	}
})