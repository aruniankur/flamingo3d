import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Bender from './bender.js';


let charmlst = ['3dmodel/charm/1.gltf', '3dmodel/charm/2.gltf', '3dmodel/charm/3.gltf']

function myFunction() {
    console.log("This is the exported function.");
}

function myFunction2() {
    console.log("This is the exported function2.");
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
  }

function addwatch(scene, manager, data, option){
    var gltfmodel;
    const loader = new GLTFLoader(manager);
    const bender = new Bender();
    const fontLoader = new FontLoader(manager);
    loader.load(
        "3dmodel/watch.gltf", function(gltf){
            gltfmodel = gltf.scene;
            if (scene.children.length > 2){
                let t1 = scene.children[2];
                scene.remove(t1);
              }
              console.log(scene.children.length);
              scene.add(gltf.scene);
              gltfmodel.rotation.set(0,0 ,0);
        }
    )
}

function addchoco(scene, manager){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/chocolate1.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            gltfmodel.rotation.set(degreesToRadians(0),degreesToRadians(0),0);
            //gltfmodel.scale.set(40,40,40);
      }
  )
}

function addrose(scene, manager){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/rose.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            gltfmodel.rotation.set(0,0,0);
      }
  )
}

function addshirt(scene, manager, data){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/shirt.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            gltfmodel.rotation.set(0,0,0);
            scene.traverse(function(node) {
              if (node.isMesh) {
                  const material = node.material;
                  //console.log(material.name);
                  if (material.name == 'shirt'){
                      material.color.set(data);
                  }
              }
            });
            //gltfmodel.scale.set(40,40,40);
      }
  )
}

function addeyewear(scene, manager, data, text, num){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/eyewear.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            gltfmodel.rotation.set(0,0 ,0);
            if (text.length > 10) {
              text = text.substring(0, 10);
          }
          loader.load(
            charmlst[num], function(gltf2){
              let gltfmodel2 = gltf2.scene;
              gltfmodel.add(gltf2.scene);
              scene.traverse(function(node) {
                if (node.isMesh) {
                    const material = node.material;
                    if (material.name == 'eyewear'){
                        material.color.set(data);
                    }
                }
              });
              gltfmodel2.rotation.set(0,-degreesToRadians(90),degreesToRadians(30));
              gltfmodel2.position.set(0.6,0.18,0.18);
              gltfmodel2.scale.set(4,4,4);
            });
          fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
              const textGeometry = new TextGeometry(text, {font: font,size: 0.22/4,height: 0.1,curveSegments: 6,bevelEnabled: true,bevelThickness: 0.01,bevelSize: 0.005,bevelSegments: 12,});
              const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
              let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
              textMesh1.rotation.set(0, 0, 0);
              textMesh1.position.set(0.47,-0.07,0.22);
              //bender.bend(textGeometry,"x",degreesToRadians(0));
              gltfmodel.add(textMesh1);
            });
      }
  )
}

function addpurse(scene, manager, data, text, num){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/purse.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            scene.traverse(function(node) {
              if (node.isMesh) {
                  const material = node.material;
                  if (material.name == 'pusre'){
                      material.color.set(data);
                  }
              }
            });
            gltfmodel.rotation.set(0,0 ,0);
            if (text.length > 10) {
              text = text.substring(0, 10);
          }
          loader.load(
            charmlst[num], function(gltf2){
              let gltfmodel2 = gltf2.scene;
              gltfmodel.add(gltf2.scene);
              gltfmodel2.rotation.set(0,-degreesToRadians(90),degreesToRadians(90));
              gltfmodel2.position.set(0,0.1,-0.1);
              gltfmodel2.scale.set(4,4,4);
            });
          fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
              const textGeometry = new TextGeometry(text, {font: font,size: 0.3/4,height: 0.05,curveSegments: 6,bevelEnabled: true,bevelThickness: 0.01,bevelSize: 0.005,bevelSegments: 12,});
              const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
              let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
              textMesh1.rotation.set(-degreesToRadians(90), 0, 0);
              textMesh1.position.set(0.21,0.05,0.5);
              //bender.bend(textGeometry,"x",degreesToRadians(0));
              gltfmodel.add(textMesh1);
            });

      }
  )
}

function addwallet(scene, manager, data, text, num){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/wallet.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            scene.traverse(function(node) {
              if (node.isMesh) {
                  const material = node.material;
                  if (material.name == 'walletcolor'){
                      material.color.set(data);
                  }
              }
            });
            gltfmodel.rotation.set(0,degreesToRadians(90),0);
            //console.log(text.length);
            if (text.length > 10) {
                text = text.substring(0, 10);
            }
            loader.load(
              charmlst[num], function(gltf2){
                let gltfmodel2 = gltf2.scene;
                gltfmodel.add(gltf2.scene);
                gltfmodel2.rotation.set(0,-degreesToRadians(90),degreesToRadians(90));
                gltfmodel2.position.set(0.5,0.055,0.12);
                gltfmodel2.scale.set(4,4,4);
              });
            fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
                const textGeometry = new TextGeometry(text, {font: font,size: 0.3/4,height: 0.1,curveSegments: 6,bevelEnabled: true,bevelThickness: 0.01,bevelSize: 0.005,bevelSegments: 12,});
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
                textMesh1.rotation.set(-degreesToRadians(90), 0.07, 0);
                textMesh1.position.set(0.21,-0.01,0.5);
                //bender.bend(textGeometry,"x",degreesToRadians(0));
                gltfmodel.add(textMesh1);
              });
      }
  )
}

function addpassport(scene, manager, data, text, num){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/passportcover.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            scene.traverse(function(node) {
              if (node.isMesh) {
                  const material = node.material;
                  //console.log(material.name);
                  if (material.name == 'passportcover'){
                      material.color.set(data);
                  }
              }
            });
            gltfmodel.rotation.set(0,degreesToRadians(90),0);
            if (text.length > 10) {
              text = text.substring(0, 10);
          }
          loader.load(
            charmlst[num], function(gltf2){
              let gltfmodel2 = gltf2.scene;
              gltfmodel.add(gltf2.scene);
              gltfmodel2.rotation.set(0,-degreesToRadians(90),degreesToRadians(90));
              gltfmodel2.position.set(0,0.22,0);
              gltfmodel2.scale.set(4,4,4);
            });
          fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
              const textGeometry = new TextGeometry(text, {font: font,size: 0.3/4,height: 0.1,curveSegments: 6,bevelEnabled: true,bevelThickness: 0.01,bevelSize: 0.005,bevelSegments: 12,});
              const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
              let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
              textMesh1.rotation.set(-degreesToRadians(90), 0, 0);
              textMesh1.position.set(-0.25,0.16,0.5);
              //bender.bend(textGeometry,"x",degreesToRadians(0));
              gltfmodel.add(textMesh1);
            });
      }
  )
}

function addpen1(scene, manager, data, option){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager);
  loader.load(
      "3dmodel/pen1.gltf", function(gltf){
          gltfmodel = gltf.scene;
          if (scene.children.length > 2){
              let t1 = scene.children[2];
              scene.remove(t1);
            }
            console.log(scene.children.length);
            scene.add(gltf.scene);
            gltfmodel.rotation.set(0,degreesToRadians(90),0);
      }
  )
}

function addmug(scene, manager, data, text){
    var gltfmodel;
    const loader = new GLTFLoader(manager);
    const bender = new Bender();
    const fontLoader = new FontLoader(manager);
    loader.load(
        "3dmodel/cup.gltf", function(gltf){
            gltfmodel = gltf.scene;
            if (scene.children.length > 2){
                let t1 = scene.children[2];
                scene.remove(t1);
              }
              console.log(scene.children.length);
              scene.add(gltf.scene);
              gltfmodel.rotation.set(0,-degreesToRadians(90),0);
              gltfmodel.traverse(function (child) {
                if (child.isMesh) {
                  console.log("Mesh has material");
                  child.material = new THREE.MeshPhongMaterial({ color: data }); // Change color to red
                }
              });
              console.log(text.length);
              if (text.length > 10) {
                text = text.substring(0, 10);
            }
              fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
                const textGeometry = new TextGeometry(text, {
                  font: font,
                  size: 1.5/text.length,
                  height: 0.1,
                  curveSegments: 6,
                  bevelEnabled: true,
                  bevelThickness: 0.01,
                  bevelSize: 0.005,
                  bevelSegments: 12,
                });
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
                textMesh1.rotation.set(0, degreesToRadians(-20), 0);
                textMesh1.position.set(-0.5,0.25,0.42);
                bender.bend(textGeometry,"y",degreesToRadians(-40));
                gltfmodel.add(textMesh1);
              });
        }
    )
}

function addbottle(scene, manager, data, text){
    var gltfmodel;
    const loader = new GLTFLoader(manager);
    const bender = new Bender();
    const fontLoader = new FontLoader(manager); 
    loader.load(
        "3dmodel/bottle.gltf", function(gltf){
            gltfmodel = gltf.scene;
            if (scene.children.length > 2){
                let t1 = scene.children[2];
                scene.remove(t1);
              }
              //console.log(scene.children.length);
              scene.add(gltf.scene);
              gltfmodel.rotation.set(0,-degreesToRadians(90),0); // Change color to red
              gltfmodel.traverse(function (child) {
                if (child.isMesh) {
                  console.log("Mesh has material");
                  child.material = new THREE.MeshPhongMaterial({ color: data }); // Change color to red
                }
              });
              console.log(text.length);
              if (text.length > 10) {
                text = text.substring(0, 10);
            }
              fontLoader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (font) {
                const textGeometry = new TextGeometry(text, {
                  font: font,
                  size: 1.5/text.length,
                  height: 0.1,
                  curveSegments: 6,
                  bevelEnabled: true,
                  bevelThickness: 0.01,
                  bevelSize: 0.005,
                  bevelSegments: 12,
                });
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                let textMesh1 = new THREE.Mesh(textGeometry, textMaterial);
                textMesh1.rotation.set(0, degreesToRadians(90), -degreesToRadians(90));
                textMesh1.position.set(0.28, 0.4, 0.15+(0.002*text.length));
                bender.bend(textGeometry,"x",degreesToRadians(0));
                gltfmodel.add(textMesh1);
              });
        }
    )
}


function addkeychain(scene, manager, data, text){
  var gltfmodel;
  const loader = new GLTFLoader(manager);
  const bender = new Bender();
  const fontLoader = new FontLoader(manager); 
  let lst = ['3dmodel/keychain1.gltf', '3dmodel/keychain2.gltf','3dmodel/keychain3.gltf'];
  loader.load(
    lst[data], function(gltf){
      gltfmodel = gltf.scene;
      if (scene.children.length > 2){
        let t1 = scene.children[2];
        scene.remove(t1);
      }
      gltfmodel.scale.set(0.5,0.5,0.5);
      scene.add(gltfmodel);
      gltfmodel.rotation.set(0, 0, 0);
      
    }
  )
}


// Export the function
export { myFunction, myFunction2, addmug, addkeychain, addbottle, addshirt, addwatch, addpurse, addwallet, addpassport, addpen1, addeyewear, addrose,addchoco};


