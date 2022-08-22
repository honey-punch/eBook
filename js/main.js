window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

// const sections = document.querySelectorAll("section");
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



// window.onload = function(){
//   const sections = document.querySelectorAll('section');
//   const count  = sections.length;
  
//   sections.forEach(function(item, index) {
//     item.addEventListener('wheel', function(event){
//       event.preventDefault();
      
//       let delta = 0;

//       if (!event) {
//         event = window.event;
//       }

//       if (event.wheelDelta) {
//           delta = event.wheelDelta / 120;
//           if (window.opera) {
//             delta = -delta;
//           }
//       } else if (event.detail) {
//         delta = -event.detail / 3;
//       }

//       let moveTop = window.scrollY;
//       let sectionSelector = sections[index];

//       // wheel down : move to next section
//       if (delta < 0){
//         if (sectionSelector !== count - 1){
//           try{
//             moveTop = window.pageYOffset + sectionSelector.nextElementSibling.getBoundingClientRect().top;
//           } catch(e) {}
//         }
//       }
      
//       // wheel up : move to previous section
//       else{
//         if (sectionSelector !== 0){
//           try{
//             moveTop = window.pageYOffset + sectionSelector.previousElementSibling.getBoundingClientRect().top;
//           }catch(e){}
//         }
//       }

//       const body = document.querySelector('html');
//       window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
//     });
//   });
// }

const sections = document.querySelectorAll("section");

history.scrollRestoration = "manual";

document.addEventListener("wheel", (event) => {
  const clientHeight = window.innerHeight;
  const lastElementTop = sections[sections.length - 1].getBoundingClientRect().top;

  if (event.deltaY > 0) {
    wheelDown(sections, lastElementTop, clientHeight);
  } else if (event.deltaY < 0) {
    wheelUp(sections, lastElementTop, clientHeight);
  }
});

function wheelDown(sections, lastElementTop, clientHeight) {
  for (let i = 1; i < sections.length; i++) {
    if (lastElementTop === clientHeight * (sections.length - i)) {
      scrollTo({ top: clientHeight * i, behavior: "smooth" });
    }
  }
}
function wheelUp(sections, lastElementTop, clientHeight) {
  for (let i = 0; i < sections.length - 1; i++) {
    if (lastElementTop === clientHeight * i) {
      scrollTo({ top: clientHeight * (sections.length - 2 - i), behavior: "smooth" });
    }
  }
}




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