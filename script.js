console.log("me");

AFRAME.registerComponent('query-selector-example', {
    init: function () {
      this.entities = document.querySelectorAll('.box');
    },
    
    tick: function () {
      // Don't call query selector in here, query beforehand.
      for (let i = 0; i < this.entities.length; i++) {
        // Do something with entities.
      }
    }
  });


  window.addEventListener("wheel", event=>{
    let myCamera = document.getElementById("camera");
    const delta=Math.sign(event.wheelDelta);
    const currentZoom = Number(myCamera.getAttribute("zoom"));
    const zoomRate = 0.01;
    let newZoom = delta * zoomRate + currentZoom;
   
    const closestZoom = 5; 
    const farthestZoom =0.01;

    if (newZoom > closestZoom){
        newZoom= closestZoom
    }
    if (newZoom < farthestZoom){
        newZoom = farthestZoom
    }

    myCamera.setAttribute("zoom", newZoom);
    console.log({newZoom})
})









