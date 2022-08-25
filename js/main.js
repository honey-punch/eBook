// wheel event
history.scrollRestoration = "manual";

window.onresize = function () {
  document.location.reload();
}

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

const sections = document.querySelectorAll("section");
const clientHeight = window.innerHeight;


let targetScrollY = 0;

window.addEventListener('wheel', (e) => {
  const isUp = Math.sign(e.wheelDelta) < 0;

  if (Math.abs(e.deltaY) > 30 && window.scrollY == targetScrollY) {
    

    isUp ? wheelDown() : wheelUp();

    isActiveWheel = false;
  }
});

function wheelDown() {
  const lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 1; i < sections.length; i++) {
    if (lastElementTop === clientHeight * (sections.length - i)) {
      scrollTo({ top: clientHeight * i, behavior: 'smooth' });

      targetScrollY += clientHeight;
    }
  }
}

function wheelUp() {
  const lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 0; i < sections.length - 1; i++) {
    if (lastElementTop === clientHeight * i) {
      scrollTo({
        top: clientHeight * (sections.length - 2 - i),
        behavior: 'smooth',
      });

      targetScrollY -= clientHeight;
    }
  }
}

// section2 scroll허용
const scrollBox = document.querySelector('.scroll-box');

scrollBox.addEventListener("wheel", function(e){
  e.preventDefault = false;
  e.stopImmediatePropagation();
  e.stopPropagation();
});





// // 내가 짠거
// window.addEventListener('wheel', (e) => {
//   if(e.deltaY > 30) {
//     wheelDown();
//   } else if(e.deltaY < -30) {
//     wheelUp();
//   }
// })

// function wheelDown() {
//   const lastElementTop = sections[sections.length - 1].getBoundingClientRect().top;

//   for (let i = 1; i < sections.length; i++) {
//     if (lastElementTop === clientHeight * (sections.length - i)) {
//       scrollTo({ top: clientHeight * i, behavior: "smooth" });
//     }
//   }
// }
// function wheelUp() {
//   const lastElementTop = sections[sections.length - 1].getBoundingClientRect().top;

//   for (let i = 0; i < sections.length - 1; i++) {
//     if (lastElementTop === clientHeight * i) {
//       scrollTo({ top: clientHeight * (sections.length - 2 - i), behavior: "smooth" });
//     }
//   }
// }

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