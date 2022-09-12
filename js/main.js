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
// bookImg object & array
class BookImg {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }
}

const bookImgList = new Array();

function createAndPush(imgSrc) {
  const book = new BookImg(imgSrc);
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

animationBox[0].classList.add('to-left');
animationBox[1].classList.add('to-right');
animationBox[1].classList.add('self-end');
animationBox[2].classList.add('to-left');

// section3
// 스크롤 일부 허용
const bookInfo = document.querySelector('.book-info');
const bookList = document.querySelector('.book-list');

bookInfo.addEventListener("wheel", function(e){
  e.preventDefault = false;
  e.stopImmediatePropagation();
  e.stopPropagation();
});
bookList.addEventListener("wheel", function(e){
  e.preventDefault = false;
  e.stopImmediatePropagation();
  e.stopPropagation();
});

// book list와 book info 연동
// book info list 생성
let bookLists = document.querySelector('.book-list li');

class BookInfo {
  constructor(bookImg, bookTitle, bookAuthor, bookPrice, bookSubcopy, bookStory) {
    this.bookImg = bookImg;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookPrice = bookPrice;
    this.bookSubcopy = bookSubcopy;
    this.bookStory = bookStory;
  }
}

const book1 = new BookInfo('./img/section2-1.jpeg', '예언자', '칼릴 지브란 / 오강남', '8,900원', '노스트라다무스를 뛰어넘는 명수트라다무스의 예언', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book2 = new BookInfo('./img/section2-2.jpeg', '여름비', '마르그리트 뒤라스 / 백수린', '8,900원', '추적이는 여름비 처럼 스며든다', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book3 = new BookInfo('./img/section2-3.jpeg', '지금, 명상', '오기노 준야 / 김지연', '8,900원', '무심코 무리하는 당신에게 전하는 메시지', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book4 = new BookInfo('./img/section2-4.jpeg', '몸짓들', '빌렘 플루서 / 장지철', '8,900원', '숫자 속에 사는 우리들의 처절함', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book5 = new BookInfo('./img/section2-5.jpeg', '우리는 이별을 떠나기로 했어', '천선란 외 4인', '8,900원', '여자들은 이곳이 아닌 다른 별에서, 다른 이야기를 꿈꾼다', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book6 = new BookInfo('./img/section2-6.jpeg', '나를 살리는 말들', '이서원 지음', '8,900원', '너무너무 힘들 때 듣고 싶은 그 한마디', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');

const bookInfoList = [book1, book2, book3, book4, book5, book6];

function makeListCopy() {
  let copy = bookLists.cloneNode(true);
  bookList.appendChild(copy);
}

let l = 0;

while(l < bookInfoList.length - 1) {
  makeListCopy();
  l++;
}

bookLists = document.querySelectorAll('.book-list li a');

// book info list, book list 연동
let bookListImg = document.querySelectorAll('.book-list-img');
let bookListSubcopy = document.querySelectorAll('.book-list-subcopy');

for (let i = 0; i < bookInfoList.length; i++) {
  bookListImg[i].src = bookInfoList[i].bookImg;
  bookListSubcopy[i].textContent = bookInfoList[i].bookSubcopy;
}

// book info list, book list, book info 연동
const bookImg = document.querySelector('.book-img');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPrice = document.querySelector('.book-price');
const bookSubcopy = document.querySelector('.book-subcopy');
const bookStory = document.querySelector('.book-story');

bookImg.src = bookInfoList[0].bookImg;
bookTitle.textContent = bookInfoList[0].bookTitle;
bookAuthor.textContent = bookInfoList[0].bookAuthor;
bookPrice.textContent = bookInfoList[0].bookPrice;
bookSubcopy.textContent = bookInfoList[0].bookSubcopy;
bookStory.textContent = bookInfoList[0].bookStory;

bookLists[0].classList.remove('opacity-50')
bookLists[0].classList.remove('border-l')

for (let i = 0; i < bookLists.length; i++) {
  bookLists[i].addEventListener('mouseover', () => {
    for (let j = 0; j < bookLists.length; j++) {
      bookLists[j].classList.add('opacity-50');
      bookLists[j].classList.add('border-l');
    }
    bookImg.src = bookInfoList[i].bookImg;
    bookTitle.textContent = bookInfoList[i].bookTitle;
    bookAuthor.textContent = bookInfoList[i].bookAuthor;
    bookPrice.textContent = bookInfoList[i].bookPrice;
    bookSubcopy.textContent = bookInfoList[i].bookSubcopy;
    bookStory.textContent = bookInfoList[i].bookStory;
    bookLists[i].classList.remove('opacity-50');
    bookLists[i].classList.remove('border-l');
  })
}