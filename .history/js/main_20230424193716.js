// wheel common
// 페이지 이동이나 새로고침시 스크롤 위치가 맨위로 오게
history.scrollRestoration = "manual";

// 윈도우가 리사이징되면 재로드 되게
window.onresize = function () {
  document.location.reload();
}

// 휠이벤트 발생 시 스크롤 되지 않게
window.addEventListener("wheel", (e) => {
	e.preventDefault();
},{passive : false});

let sections = document.querySelectorAll(".section");
const windowHeight = window.innerHeight;
const body = document.querySelector('body')

// wheel event
window.addEventListener('wheel', (e) => {
  const isUp = e.wheelDelta < 0;
  const isBottom = windowHeight + window.scrollY === body.offsetHeight;

  if (Math.abs(e.deltaY) > 25) {
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
  let lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 0; i < sections.length; i++) {
    if (lastElementTop === windowHeight * (sections.length - (i + 1))) {
      scrollTo({
        top: sections[i + 1].offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

function wheelUp() {
  const lastElementTop =
    sections[sections.length - 1].getBoundingClientRect().top;

  for (let i = 1; i < sections.length; i++) {
    if (lastElementTop === windowHeight * (sections.length - (i + 1))) {
      scrollTo({
        top: sections[i - 1].offsetTop,
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

// section2
// bookImg object & array
class BookImg {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }
}

const bookImgList = [];

function createAndPush(imgSrc) {
  const book = new BookImg(imgSrc);
  bookImgList.push(book);
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

for (let i = 0; i < bookImgList.length - 1; i++) {
  makeTempCopy();
}

let bookImgSrc = document.querySelectorAll('.book-img-src');

bookImgSrc.forEach((e, i) => {
  e.src = bookImgList[i].imgSrc;
})

function makeBoxCopy() {
  let copy = animationBox.cloneNode(true);
  hiddenBox.appendChild(copy);
}

for (let i = 0; i < 2; i++) {
  makeBoxCopy();
}

animationBox = document.querySelectorAll('.animation-box');

animationBox[0].classList.add('to-left');
animationBox[1].classList.add('to-right');
animationBox[1].classList.add('self-end');
animationBox[2].classList.add('to-left');

// section3
// 스크롤 일부 허용
const bookList = document.querySelector('.book-list');

bookList.addEventListener("wheel", (e) => {
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

const book1 = new BookInfo('./img/section2-1.jpeg', '예언자', '칼릴 지브란 / 오강남', '8,900원', "노스트라다무스를 뛰어넘는 '명수트라다무스'의 예언", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book2 = new BookInfo('./img/section2-2.jpeg', '여름비', '마르그리트 뒤라스 / 백수린', '8,900원', "'추적이는 여름비 처럼 스며든다!' - 평론가 장지철", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book3 = new BookInfo('./img/section2-3.jpeg', '지금, 명상', '오기노 준야 / 김지연', '8,900원', "무심코 무리하는 당신에게 전하는 메시지", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book4 = new BookInfo('./img/section2-4.jpeg', '몸짓들', '빌렘 플루서 / 장지철', '8,900원', "차가운 숫자들 속에 사는 우리들의 처절함", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book5 = new BookInfo('./img/section2-5.jpeg', '우리는 이별을 떠나기로 했어', '천선란 외 4인', '8,900원', "이곳이 아닌 다른 별에서, 다른 이야기를 꿈꾼다", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book6 = new BookInfo('./img/section2-6.jpeg', '나를 살리는 말들', '이서원 지음', '8,900원', "너무너무 힘들 때 듣고 싶은 그 한마디 - 이서원", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book7 = new BookInfo('./img/section2-7.jpeg', '우리 나무 이름 사전', '박상진 지음', '8,900원', "나무에게서 찾는 삶의 용기『물고기 사전』 박상진 신작!", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book8 = new BookInfo('./img/section2-8.jpeg', '불안이라는 위안', '장지철 지음', '8,900원', "마음이 도망칠 때 되뇌이는 다정한 주문 '마음껏 불안해 하자'", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book9 = new BookInfo('./img/section2-9.jpeg', 'GREEN ENERY', '박현우 지음', '8,900원', "초록색, 노란색, 하늘색 다시 초록색, 노란색, 하늘색", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');
const book10 = new BookInfo('./img/section2-10.jpeg', '사라지는 것은 아쉬움을 남긴다', '김두얼 지음', '8,900원', "경제, 역사, 제도에 대한 단상, 사라지는 것에 대한 고찰", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus pariatur asperiores labore consequatur rem amet repudiandae eum. Enim, id. Eveniet veniam illo temporibus maiores dolorum quam quibusdam tempora odio.');

const bookInfoList = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

function makeListCopy() {
  let copy = bookLists.cloneNode(true);
  bookList.appendChild(copy);
}

for (let i = 0; i < bookInfoList.length - 1; i++) {
  makeListCopy();
}

bookLists = document.querySelectorAll('.book-list li a');

// book info list, book list 연동
let bookListImg = document.querySelectorAll('.book-list-img');
let bookListSubcopy = document.querySelectorAll('.book-list-subcopy');

bookInfoList.forEach((e, i) => {
  bookListImg[i].src = e.bookImg;
  bookListSubcopy[i].textContent = e.bookSubcopy;
})

// book info list, book list, book info 연동
const bookImg = document.querySelector('.book-img');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPrice = document.querySelector('.book-price');
const bookSubcopy = document.querySelector('.book-subcopy');
const bookStory = document.querySelector('.book-story');

// 처음 보여지는 book info
bookImg.src = bookInfoList[0].bookImg;
bookTitle.textContent = bookInfoList[0].bookTitle;
bookAuthor.textContent = bookInfoList[0].bookAuthor;
bookPrice.textContent = bookInfoList[0].bookPrice;
bookSubcopy.textContent = bookInfoList[0].bookSubcopy;
bookStory.textContent = bookInfoList[0].bookStory;

// 처음 활성화된 book list
bookLists[0].classList.remove('opacity-40')
bookLists[0].classList.remove('border-l')

bookLists.forEach((e, i) => {
  e.addEventListener('mouseover', () => {
    bookLists.forEach(v => {
      v.classList.add('opacity-40');
      v.classList.add('border-l');
    })
    bookImg.src = bookInfoList[i].bookImg;
    bookTitle.textContent = bookInfoList[i].bookTitle;
    bookAuthor.textContent = bookInfoList[i].bookAuthor;
    bookPrice.textContent = bookInfoList[i].bookPrice;
    bookSubcopy.textContent = bookInfoList[i].bookSubcopy;
    bookStory.textContent = bookInfoList[i].bookStory;
    e.classList.remove('opacity-40');
    e.classList.remove('border-l');
  })
})

// section4
const ratePlanArea = document.querySelector('.rate-plan-area');

ratePlanArea.addEventListener("wheel", function(e){
  e.stopPropagation();
});
console.log(ratePlanArea);

const ratePlanBox = document.querySelectorAll('.rate-plan-box');
const ratePlanBtn = document.querySelectorAll('.rate-plan-btn');
const ratePlanName = document.querySelectorAll('.rate-plan-box h2')

ratePlanBox.forEach((e, i) => {
  e.addEventListener('mouseover', () => {
    ratePlanBtn[i].classList.remove('opacity-0');
    ratePlanBtn[i].classList.add('opacity-100');
    ratePlanName[i].classList.add('main-color');
  });
});
ratePlanBox.forEach((e, i) => {
  e.addEventListener('mouseout', () => {
    ratePlanBtn[i].classList.remove('opacity-100');
    ratePlanBtn[i].classList.add('opacity-0');
    ratePlanName[i].classList.remove('main-color');
  });
});

ratePlanBtn.forEach(e => {
  e.addEventListener('mouseover', () => {
    e.classList.add('bg-main-color');
  });
});
ratePlanBtn.forEach(e => {
  e.addEventListener('mouseout', () => {
    e.classList.remove('bg-main-color');
  });
});

// section5
const qnaList = document.querySelector('.qna-list');

qnaList.addEventListener("wheel", function(e){
  e.preventDefault = false;
  e.stopImmediatePropagation();
  e.stopPropagation();
});

const qnaLists = document.querySelectorAll('.qna-list li');
const qnaIcon = document.querySelectorAll('.qna-list i');

qnaLists.forEach((e, i) => {
  e.addEventListener('click', () => {
    e.classList.toggle('h-56');
    qnaIcon[i].classList.toggle('fa-angle-up');
  })
});