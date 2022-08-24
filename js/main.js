window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

history.scrollRestoration = "manual";

const sections = document.querySelectorAll("section");
const clientHeight = window.innerHeight;

window.addEventListener('wheel', (e) => {
  if(e.deltaY > 30) {
    wheelDown();
  } else if(e.deltaY < -30) {
    wheelUp();
  }
})

function wheelDown() {
  const lastElementTop = sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 1; i < sections.length; i++) {
    if (lastElementTop === clientHeight * (sections.length - i)) {
      scrollTo({ top: clientHeight * i, behavior: "smooth" });
    }
  }
}
function wheelUp() {
  const lastElementTop = sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 0; i < sections.length - 1; i++) {
    if (lastElementTop === clientHeight * i) {
      scrollTo({ top: clientHeight * (sections.length - 2 - i), behavior: "smooth" });
    }
  }
}

// 디바운싱
// let timer;
// window.addEventListener("wheel", function(e) {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(function () {
//     if(e.deltaY < 0) {
//       wheelUp();
//     } else if (e.deltaY > 0) {
//       wheelDown();
//     }
//   }, 40)
// });

//스로틀링
// let timer;
// window.addEventListener("wheel", function(e) {
//   if (!timer) {
//     timer = setTimeout(function () {
//       timer = null;
//       if(e.deltaY < 0) {
//         wheelUp();
//       } else if (e.deltaY > 0) {
//         wheelDown();
//       }
//     }, 500)
//   }
// });

// 또다른 디바운싱 함수
// let curIndex = 0;
// let wheelTimer;
// window.addEventListener("wheel", function(e) {
//   clearTimeout(wheelTimer);
//   wheelTimer = setTimeout(function() {
//   	if(e.deltaY < 0) {
//       doScroll(--curIndex);
//     } else {
//       doScroll(++curIndex);
//     }
//   }, 50);
// });

// function doScroll(i) {
//   console.log(i);
//   i < 0 ? i = 0 : i = i;
//   i > sections.length - 1 ? i = sections.length - 1 : i = i;

//   curIndex = i;
  
//   sections[curIndex].scrollIntoView({
//     block: "start", inline: "start", behavior: "smooth"
//   });  	
// }

// 박현우1
// let a = true;
// let timeoutId;

// window.addEventListener('wheel', (e) => {
//   if (a) {
//     clearTimeout(timeoutId);

//     a = false;
    
//     if(e.deltaY > 0) {
//       wheelDown();
//     } else if(e.deltaY < 0) {
//       wheelUp();
//     }

//     timeoutId = setTimeout(() => {
//       a = true;
//     }, 1400);
//   }
// });

// 박현우2
// let a = true;
// let timeoutId;

// function clearWheelEvent(id) {
//   clearTimeout(id);
// }

// function ignoreWheelEvent() {
//   timeoutId = setTimeout(() => {
//     console.log('change a.');
//     a = true;
//   }, 1500);
// }

// window.addEventListener('wheel', (e) => {
//   if (a) {
//     console.log(`a=${a}`);

//     a = false;

//     clearWheelEvent(timeoutId);
//     ignoreWheelEvent();

//     if (e.deltaY > 0) {
//       console.log(`down=${e.deltaY}`);
//       wheelDown();
//     } else if (e.deltaY < 0) {
//       wheelUp();
//     }
//   }
// });

// 박현우3
// let prevDeltaY = 0;

// window.addEventListener('wheel', (e) => {
//   if (Math.abs(prevDeltaY - e.deltaY) > 30) {
//     const isScrollingDown = Math.sign(e.deltaY);

//     const isUp = isScrollingDown > 0;

//     console.log(`isUp=${isUp ? 'up' : 'down'}`);

//     isUp ? wheelUp() : wheelDown();
//   }
// });


// 스크롤시 header 안보이게
// const header = document.querySelector('header');

// window.addEventListener('wheel', () => {
//   let top = window.scrollY;
//   if (top != 0) {
//     header.classList.add('hidden')
//   } else {
//     header.classList.remove('hidden');
//   }
// });