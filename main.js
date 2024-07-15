import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Bender from './bender.js';
import { myFunction, myFunction2, addmug, addbottle, addwatch, addkeychain, addshirt,addchoco, addpurse, addwallet, addpassport, addpen1, addeyewear, addrose} from './importelement.js';
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

//loading manager
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	//console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};
// loading manager ends
const fov = 75;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const color = 0xffffff;
const intensity = 10;
const light = new THREE.DirectionalLight(color, intensity);
const light2 = new THREE.DirectionalLight(color, intensity);
const light3 = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 2, 3);
light2.position.set(2, -2, -3);
light3.position.set(-2, -2, -3);
scene.add(light);
scene.add(light2);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.minDistance = 1.7;
controls.maxDistance = 3;

controls.update();

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}


function degreesToRadians(degrees) {
  return (Math.PI / 180) * degrees;
}
//don't touch anything above this point

const axesHelper = new THREE.AxesHelper(10);
//scene.add( axesHelper );
//The X axis is red. The Y axis is green. The Z axis is blue.

//populate the view gift box

var dataList = [];

// Function to populate the table
function populateTable(dataList) {
  let charmlst = ['india', 'Heart', 'luck']
  var tableBody = document.querySelector("#myTable tbody");
  var total = 0;
  tableBody.innerHTML = "";
  dataList.forEach(function(item, index) {
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.textContent = index + 1;
    cell2.textContent = item.itemName;
    cell3.textContent = charmlst[item.charm1];
    cell4.textContent = item.name;
    cell5.textContent = item.price;
  });
  var totalRow = tableBody.insertRow();
  var totalCell1 = totalRow.insertCell(0);
  totalCell1.colSpan = 4;
  var totalCell2 = totalRow.insertCell(1);
  totalCell2.textContent = "$" + total.toFixed(2);
}

document.getElementById("populateButton").addEventListener("click", function() {
  populateTable(dataList);
});
//----------------------------------------------------------------

let lst;
let color1;
let color2;
let text = 'text'
let name1;
let price1;
//thiss is for the color change  
document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".options div");
  options.forEach(option => {
      option.addEventListener("click", function () {
          //console.log(option.id);
          fetch('data2.json')
              .then(response => response.json())
              .then(data => {
                  // Get the dropdown menu element
                  lst = data[option.id]['color'];
                  price1 = data[option.id]['price'];
                  console.log(data[option.id]['charm'])
                  //console.log("this is for the god sake", lst);
                  const dropdownMenu = document.getElementById('dropdownMenu');
                  dropdownMenu.innerHTML = "";
                  for(let i = 0; i<lst.length; i++){
                    const option = document.createElement('li');
                    option.innerHTML = `<a class="dropdown-item" id="${i}">${lst[i].c}</a>`;
                    dropdownMenu.appendChild(option);
                  }
                  //console.log(data[option.id]['name']);
                  name1 = data[option.id]['name'];
                  color1 = data[option.id]['color'][0].hex;
                  color2 = data[option.id]['color'][0].c;
                  //console.log(data[option.id]['colr'][0])
                  if (name1 == 'Mug'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addmug(scene, manager, data[option.id]['color'][0].hex, text);
                  }
                  else if (name1 == 'Bottle'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addbottle(scene, manager, data[option.id]['color'][0].hex, text);
                  }
                  else if (name1 == 'Wallet'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "block";
                    addwallet(scene, manager, data[option.id]['color'][0].hex, text, 0);
                  }
                  else if (name1 == 'Watch'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addwatch(scene, manager, data, option.id);
                  }
                  else if (name1 == 'Purse'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "block";
                    addpurse(scene, manager, data[option.id]['color'][0].hex, text, 0);
                  }
                  else if (name1 == 'passport Cover'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "block";
                    addpassport(scene, manager, data[option.id]['color'][0].hex, text, 0);
                  }
                  else if (name1 == 'Pen'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addpen1(scene, manager, data, option.id);
                  }
                  else if (name1 == 'Eyewear'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "block";
                    addeyewear(scene, manager, data[option.id]['color'][0].hex, text, 0);
                  }
                  else if (name1 == 'Eyewear'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "block";
                    addeyewear(scene, manager, data[option.id]['color'][0].hex, text, 0);
                  }
                  else if (name1 == 'Rose'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addrose(scene, manager);
                  }
                  else if (name1 == 'Shirt'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addshirt(scene, manager, data[option.id]['color'][0].hex);
                  }
                  else if (name1 == 'Chocolate'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addchoco(scene, manager);
                  }
                  else if (name1 == 'Keychain'){
                    var hiddenButton = document.getElementById("invisible");
                    hiddenButton.style.display = "none";
                    addkeychain(scene, manager,0,'name');
                  }
              })
              .catch(error => console.error('Error fetching JSON:', error));
      });
  });
});


let lastcharm = 0

// for color
dropdownMenu.addEventListener('click', function (event) {
  if (event.target.classList.contains('dropdown-item')) {
      console.log("Mesh has material", name1);
      console.log("Mesh has material", lst);
      color1 = lst[event.target.id].hex;
      color2 = lst[event.target.id].c;
      if (name1 == 'Bottle'){
        addbottle(scene, manager, lst[event.target.id].hex, text);
      }
      else if (name1 == 'Mug'){
        addmug(scene, manager, lst[event.target.id].hex, text);
      }
      else if (name1 == 'Wallet'){
        addwallet(scene, manager, lst[event.target.id].hex, text, lastcharm);
      }
      else if (name1 == 'passport Cover'){
        addpassport(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'Eyewear'){
        addeyewear(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'Purse'){
        addpurse(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'Shirt'){
        addshirt(scene, manager, color1);
      }
      else if (name1 == 'Keychain'){
        addkeychain(scene, manager,color1,'name');
      }
  }
});

// for charm


dropdownMenu2.addEventListener('click', function (event) {
  if (event.target.classList.contains('dropdown-item')) {
      //console.log(event.target.id);
      lastcharm = event.target.id;
      if (name1 == 'Wallet'){
        addwallet(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'passport Cover'){
        addpassport(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'Eyewear'){
        addeyewear(scene, manager, color1, text, lastcharm);
      }
      else if (name1 == 'Purse'){
        addpurse(scene, manager, color1, text, lastcharm);
      }
  }
});



//name area 

document.getElementById('submitButton').addEventListener('click', function () {
  // Get the input value
  const inputValue = document.getElementById('exampleFormControlInput1').value;
  console.log('Input Value:', inputValue);
  text = inputValue;
  if (name1 == 'Bottle'){
    addbottle(scene, manager, color1, text);
  }
  else if (name1 == 'Mug'){
    addmug(scene, manager, color1, text);
  }
  else if (name1 == 'Wallet'){
    addwallet(scene, manager, color1, text, lastcharm);
  }
  else if (name1 == 'passport Cover'){
    addpassport(scene, manager, color1, text, lastcharm);
  }
  else if (name1 == 'Eyewear'){
    addeyewear(scene, manager, color1, text, lastcharm);
  }
  else if (name1 == 'Purse'){
    addpurse(scene, manager, color1, text, lastcharm);
  }
});

//this add to cart

document.getElementById("addtocart").addEventListener("click", function() {
  let final = name1.concat(" ", color2);
  var newItem = { itemName: final, charm1: lastcharm, name: text, price: price1};
  dataList.push(newItem);
  //window.parent.postMessage("Message from iframe", "*");
  window.top.postMessage(newItem, '*')
});


// this control the animation

function render(time) {
  time *= 0.001;
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  if (scene.children.length > 2) {
    let t1 = scene.children[2];
    //console.log(t1.position);
    if(canvas.clientWidth < 550){
      t1.scale.set(0.5, 0.5, 0.5);
    }
    else{
      t1.scale.set(0.8,0.8,0.8);
    }
    t1.rotation.z = Math.cos(time * 1.5) / 20;
    t1.rotation.x = Math.cos(time * 1.5) / 20;
    t1.position.y = Math.cos(time * 1.5) / 20;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  //console.log(canvas.clientWidth);
}
requestAnimationFrame(render);

