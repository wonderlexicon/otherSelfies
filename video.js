
const video = document.getElementById('Vid');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= -17) {
      video.play();
    } else {
      video.pause();
    }
  }
});



AFRAME.registerComponent('weirdness-video-handler',{
    init: function () {
     let el = this.el;
     let vid = document.querySelector("#weirdnessVid");
     vid.pause();
     el.addEventListener('mouseenter',function(){
       console.log ("hearing?");
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  });
  
  
  
  AFRAME.registerComponent('thefeels-video-handler',{
    init: function () {
     let el = this.el;
     let vid = document.querySelector("#thefeelsVid");
     vid.pause();
     el.addEventListener('mouseenter',function(){
       console.log ("hearing?");
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  })




AFRAME.registerComponent('overit-video-handler',{
  init: function () {
   let el = this.el;
   let vid = document.querySelector("#overitVid");
   vid.pause();
   el.addEventListener('mouseenter',function(){
     console.log ("hearing?");
      vid.play();
   });
   el.addEventListener('mouseleave',function(){
      vid.pause();
   });
  }
});


AFRAME.registerComponent('overit-video-handler',{
  init: function () {
   let el = this.el;
   let vid = document.querySelector("#overit");
   vid.pause();
   el.addEventListener('mouseenter',function(){
     console.log ("hearing?");
      vid.play();
   });
   el.addEventListener('mouseleave',function(){
      vid.pause();
   });
  }
});
  AFRAME.registerComponent('coffee-video-handler',{
    init: function () {
     let el = this.el;
     let vid = document.querySelector("#coffeeVid");
     vid.pause();
     el.addEventListener('mouseenter',function(){
       console.log ("hearing?");
        vid.play();
     });
     el.addEventListener('mouseleave',function(){
        vid.pause();
     });
    }
  })




AFRAME.registerComponent('bday-video-handler',{
  init: function () {
   let el = this.el;
   let vid = document.querySelector("#bdayVid");
   vid.pause();
   el.addEventListener('mouseenter',function(){
     console.log ("hearing?");
      vid.play();
   });
   el.addEventListener('mouseleave',function(){
      vid.pause();
   });
  }
});


AFRAME.registerComponent('teetha-video-handler',{
  init: function () {
   let el = this.el;
   let vid = document.querySelector("#teethaVid");
   vid.pause();
   el.addEventListener('mouseenter',function(){
     console.log ("hearing?");
      vid.play();
   });
   el.addEventListener('mouseleave',function(){
      vid.pause();
   });
  }
});
// Workaround for mobile video
// uses the splash screen button to trigger video play/pause 
// const enterButton = document.querySelector('.splash__button')
// const splash = document.querySelector('.splash');

// enterButton.addEventListener('click', () => {
//   video.play();
//   video.pause();
//   splash.style.display = 'none';
// });
