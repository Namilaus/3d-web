import * as THREE from '/node_modules/three/src/Three.js';

const canvas = document.querySelector(".canvas")

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(1500,700); //size of canvas and window.innerWidth,window.innerHeight can take the whole page 

// document.body.appendChild(renderer.domElement)  add a canvas

camera.position.z = 50;


//created tous

function torus () {
    const geometry = new THREE.TorusKnotGeometry(13,2.5,100,16);
    const material = new THREE.MeshBasicMaterial({color: "white",fog:true,wireframe:true});
    const stuff = new THREE.Mesh(geometry,material);
    
    stuff.position.set(-30,0,0)

    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
        stuff.rotation.x += 0.01;
        stuff.rotation.y += 0.01;
        stuff.rotation.z += 0.01;


    }
    animate()
    
    return {
        stuff
    }
}

// create moon
function moon(){
    const geometry = new THREE.SphereGeometry(20,10,10);
    
    // texture mapping the moon 
    const moon = new THREE.TextureLoader().load('/images/moon.jpg');
    const material = new THREE.MeshBasicMaterial({map:moon});

    const stuff = new THREE.Mesh(geometry,material);
        stuff.position.set(20,0,0)
//add a light



function animate(){
        requestAnimationFrame(animate)
        stuff.rotation.x += 0.00;
        stuff.rotation.y += 0.01;
        stuff.rotation.z += 0.00;
    }
    animate()

    return{
        stuff
    }
}

function bg(){
    const geometry  = new THREE.SphereGeometry(50,10,10);
    //texture
    const stars = new THREE.TextureLoader().load('/images/glaxy.jpg')
    const material = new THREE.MeshBasicMaterial({
        map:stars,
        side:THREE.BackSide,
        transparent:true
    })

    const stuff = new THREE.Mesh(geometry,material)

    function animate(){
        requestAnimationFrame(animate)
        stuff.rotation.x += 0.0;
        stuff.rotation.y += 0.01;
        stuff.rotation.z += 0.0;
    }
    animate()

    return {
        stuff
    }
}


// add scenes


scene.add(torus().stuff);
scene.add(moon().stuff);
scene.add(bg().stuff);


