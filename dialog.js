var $ = require("jquery");

module.exports.init = function() {
    window.g.root = document.getElementById('gui')
}

module.exports.create = function (opts) {
    let outer_div = document.createElement('div')
    outer_div.className = "resize-drag"

    update(outer_div, opts)

    window.g.root.appendChild(outer_div)

    outer_div.update = update

    return outer_div
}

function clear(div) {
while (div.firstChild) {
    div.removeChild(div.firstChild);
}

}

function update (div, opts) {
    clear(div)
    let inner_div = document.createElement('div')

    for (let i=0; i< opts.data.length; i++) {
	let div = document.createElement('div')

	let name = document.createElement('p')
	let value = document.createElement('p')

	name.innerHTML = opts.data[i]['name']
	value.innerHTML = opts.data[i]['value']

	div.appendChild(name)
	div.appendChild(value)
	
	inner_div.appendChild(div)
    }

    div.appendChild(inner_div)
}
