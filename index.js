const gui = require('./gui')
const dialog = require('./dialog')
const THREE = require('three')

// HACK: globals
window.g = {}


window.onload = function() {
     gui.init()
     dialog.init()
    debugger

    mock_data = function() {
    	return [
    	    {'name': 'velocity', 'value': Math.random()},
    	    {'name': 'altitude', 'value': Math.random()},
    	    {'name': 'heading', 'value': Math.random()},
    	    {'name': 'heat', 'value': Math.random()},
    	    {'name': 'fuel', 'value': Math.random()},
    	    {'name': 'distance', 'value': Math.random()}
    	]
    }

    data = mock_data()

    let d = dialog.create({data: data})

    // Mock changing data
    window.setInterval(() => {
    	data = mock_data()
    	d.update(d, {data: data})
    }, 500)

    let canvas = document.getElementById('renderer') 
    var camera, scene, renderer;
    var mesh;
    init();
    animate();
    function init() {
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;
	scene = new THREE.Scene();
	var texture = new THREE.TextureLoader().load( 'crate.gif' );
	var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	canvas.appendChild( renderer.domElement );
	//
	window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function animate() {
	requestAnimationFrame( animate );
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
    }

}

