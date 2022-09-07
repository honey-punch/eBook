// wheel common
history.scrollRestoration = "manual";

window.onresize = function () {
  document.location.reload();
}

window.addEventListener("wheel", (e) => {
	e.preventDefault();
},{passive : false});

const sections = document.querySelectorAll(".section");
const windowHeight = window.innerHeight;
const body = document.querySelector('body')

// wheel event

window.addEventListener('wheel', (e) => {
  const isUp = Math.sign(e.wheelDelta) < 0;
  const isBottom = windowHeight + window.scrollY === body.offsetHeight;

  if (Math.abs(e.deltaY) > 30) {
    if (isUp) {
      wheelDown();
    } else if (isBottom) {
      wheelUpFooter();
    } else {
      wheelUp();
    }
  }
});

function wheelDown() {
  const lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 1; i < sections.length; i++) {
    if (lastElementTop === windowHeight * (sections.length - i)) {
      scrollBy({
        top: sections[i].clientHeight,
        behavior: 'smooth'
      });
      console.log();
    }
  }
}

function wheelUp() {
  const lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 0; i < sections.length; i++) {
    if (lastElementTop === windowHeight * i) {
      scrollBy({
        top: -sections[i].clientHeight,
        behavior: 'smooth',
      });
    }
  }
}

function wheelUpFooter() {
  scrollTo({
  top: sections[sections.length - 2].offsetTop,
  behavior: 'smooth'
  });
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

// section2
// bookInfo object & array
class BookInfo {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }
}

const bookImgList = new Array();

function createAndPush(imgSrc) {
  const book = new BookInfo(imgSrc);
  bookImgList.push(book);
  return bookImgList;
}

createAndPush('./img/section2-1.jpeg');
createAndPush('./img/section2-2.jpeg');
createAndPush('./img/section2-3.jpeg');
createAndPush('./img/section2-4.jpeg');
createAndPush('./img/section2-5.jpeg');
createAndPush('./img/section2-6.jpeg');
createAndPush('./img/section2-7.jpeg');
createAndPush('./img/section2-8.jpeg');
createAndPush('./img/section2-9.jpeg');
createAndPush('./img/section2-10.jpeg');
createAndPush('./img/section2-1.jpeg');
createAndPush('./img/section2-2.jpeg');
createAndPush('./img/section2-3.jpeg');
createAndPush('./img/section2-4.jpeg');
createAndPush('./img/section2-5.jpeg');
createAndPush('./img/section2-6.jpeg');
createAndPush('./img/section2-7.jpeg');
createAndPush('./img/section2-8.jpeg');
createAndPush('./img/section2-9.jpeg');
createAndPush('./img/section2-10.jpeg');

// bookInfo copy & imgSrc
const hiddenBox = document.querySelector('.hidden-box');
let animationBox = document.querySelector('.animation-box');
const bookTemplate = document.querySelector('.book-template');

function makeTempCopy() {
  let copy = bookTemplate.cloneNode(true);
  animationBox.appendChild(copy);
}

let i = 0;

while(i < bookImgList.length - 1) {
  makeTempCopy();
  i++;
}

let bookImgSrc = document.querySelectorAll('.book-img-src');

for (let i = 0; i < bookImgList.length; i++) {
  bookImgSrc[i].src = bookImgList[i].imgSrc;
}

function makeBoxCopy() {
  let copy = animationBox.cloneNode(true);
  hiddenBox.appendChild(copy);
}

let j = 0;
while(j < 2) {
  makeBoxCopy();
  j++;
}

animationBox = document.querySelectorAll('.animation-box');

animationBox[1].classList.remove('to-left');
animationBox[1].classList.add('to-right');
animationBox[1].classList.add('self-end');

// scroll 일부 허용 코드
// const scrollBox = document.querySelector('.animation-box');

// scrollBox.addEventListener("wheel", function(e){
//   e.preventDefault = false;
//   e.stopImmediatePropagation();
//   e.stopPropagation();
// });

// section3