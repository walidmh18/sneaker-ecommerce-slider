const facebookLogoContainer = document.querySelector('#facebookContainer')
const instagramLogoContainer = document.querySelector('#instagramContainer')
const dribbbleLogoContainer = document.querySelector('#dribbbleContainer')
console.log(facebookLogoContainer);

let facebookAnim = lottie.loadAnimation({
   container: facebookLogoContainer, // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'facebook.json' // the path to the animation json
});

let instagramAnim = lottie.loadAnimation({
   container: instagramLogoContainer, // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'instagram.json' // the path to the animation json
});

let dribbbleAnim = lottie.loadAnimation({
   container: dribbbleLogoContainer, // the dom element that will contain the animation
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'dribbble.json' // the path to the animation json
});

facebookLogoContainer.addEventListener('mouseenter', () => {
   facebookAnim.setDirection(1)
   facebookAnim.play()
})
facebookLogoContainer.addEventListener('mouseleave', () => {
   facebookAnim.setDirection(-1)
   facebookAnim.play()
})


instagramLogoContainer.addEventListener('mouseenter', () => {
   instagramAnim.setDirection(1)
   instagramAnim.play()
})
instagramLogoContainer.addEventListener('mouseleave', () => {
   instagramAnim.setDirection(-1)
   instagramAnim.play()
})


dribbbleLogoContainer.addEventListener('mouseenter', () => {
   dribbbleAnim.setDirection(1)
   dribbbleAnim.play()
})
dribbbleLogoContainer.addEventListener('mouseleave', () => {
   dribbbleAnim.setDirection(-1)
   dribbbleAnim.play()
})









// navigation buttons animation
const navigationBtn = [...document.querySelectorAll('.navigationBtn')]
const slidesArr = [...document.querySelectorAll('.slide')]

navigationBtn.forEach(navBtn =>{
   let navBtnArrow = navBtn.querySelector('p')
   let navBtnTop = navBtn.offsetTop -250
   navBtn.addEventListener('mouseover',() => {
      navBtn.style.height = '500px'
      navBtn.style.width = '500px'
      navBtn.addEventListener('mousemove',(e)=>{
         
         let mouseY = e.clientY - navBtnTop  
         let mouseX =Math.min( e.clientX+ (screen.width *10/100), screen.width  - e.clientX + (screen.width *10/100) )
         navBtnArrow.style.top = mouseY + 'px'
         if (navBtn.classList.contains('navigationPrevious')) {
            navBtnArrow.style.left = mouseX + 'px'
            navBtn.style.left = '-10%'
            // console.log(mouseY);
            
         } else {
            navBtnArrow.style.right = mouseX + 'px'
            navBtn.style.right = '-10%'
         }
      })






      
   })
   navBtn.addEventListener('mouseleave', () => {
      navBtn.style.height = '300px'
      navBtn.style.width = '300px'
      navBtnArrow.style.top = '50%'
      if (navBtn.classList.contains('navigationPrevious')) {
         navBtnArrow.style.left = '50%'
         navBtn.style.left = '-5%'

      } else {
         navBtnArrow.style.right = '50%'
         navBtn.style.right = '-5%'
      }
   })
   navBtn.addEventListener('click', ()=>{
      if (navBtn.classList.contains('navigationPrevious')) {
         previousSlide()
      } else {
         nextSlide()
         console.log(activeSlideIndex);
      }
      
   })
   
})

let Temp = {}
let activeSlideIndex = 0
slidesArr[activeSlideIndex].querySelector('.slideNameContainer').style.left = 0
slidesArr[activeSlideIndex].querySelector('.slideShoeImgContainer').style.left = 0
function nextSlide() {
   
   activeSlideIndex ++
   backgroundChange()
   console.log(activeSlideIndex);
   let activeSlideName = slidesArr[activeSlideIndex].querySelector('.slideNameContainer') 
   let activeSlideShoe = slidesArr[activeSlideIndex].querySelector('.slideShoeImgContainer') 

   let disActivatedSlideName = activeSlideIndex!==0 ? slidesArr[activeSlideIndex-1].querySelector('.slideNameContainer') : slidesArr[3].querySelector('.slideNameContainer')
   let disActivatedSlideShoe = activeSlideIndex!==0 ?  slidesArr[activeSlideIndex-1].querySelector('.slideShoeImgContainer') : slidesArr[3].querySelector('.slideShoeImgContainer')

   console.log(activeSlideIndex,'/', activeSlideName,'/',activeSlideShoe,'/',disActivatedSlideName,'/',disActivatedSlideShoe);
   activeSlideName.style.left = 0
   activeSlideShoe.style.left = 0
   disActivatedSlideName.style.left = '-100%'
   disActivatedSlideShoe.style.left = '100%'
   let timeout1 = setTimeout(() => {
      disActivatedSlideName.style.transition = 'none'
      disActivatedSlideShoe.style.transition = 'none'
      disActivatedSlideName.style.left = '100%'
      disActivatedSlideShoe.style.left = '-100%'
      setTimeout(() => {
         disActivatedSlideShoe.style.transition = '1.5s cubic-bezier(.66,.25,.23,.99)'
         disActivatedSlideName.style.transition = '1.5s cubic-bezier(.66,.25,.23,.99)'
         
      }, 200);

   }, 1500);
   function clearInterval1() {
      clearTimeout(timeout1)
      
   }
   // Temp.fn1 = clearInterval1()
}

function previousSlide() {
   
   activeSlideIndex --
   if (activeSlideIndex == -1) {
      activeSlideIndex = 3
   }
   console.log(activeSlideIndex);
   backgroundChange()

   // Temp.fn1
   let activeSlideName = slidesArr[activeSlideIndex].querySelector('.slideNameContainer') 
   let activeSlideShoe = slidesArr[activeSlideIndex].querySelector('.slideShoeImgContainer') 

   let disActivatedSlideName = activeSlideIndex!==3 ? slidesArr[activeSlideIndex+1].querySelector('.slideNameContainer') : slidesArr[0].querySelector('.slideNameContainer')
   let disActivatedSlideShoe = activeSlideIndex!==3 ?  slidesArr[activeSlideIndex+1].querySelector('.slideShoeImgContainer') : slidesArr[0].querySelector('.slideShoeImgContainer')

   console.log(activeSlideIndex,'/', activeSlideName,'/',activeSlideShoe,'/',disActivatedSlideName,'/',disActivatedSlideShoe);
   activeSlideName.style.left = 0
   activeSlideShoe.style.left = 0
   disActivatedSlideName.style.left = '-100%'
   disActivatedSlideShoe.style.left = '100%'
   // setTimeout(() => {
   //    disActivatedSlideName.style.transition = 'none'
   //    disActivatedSlideShoe.style.transition = 'none'
   //    disActivatedSlideName.style.left = '100%'
   //    disActivatedSlideShoe.style.left = '-100%'
   //    setTimeout(() => {
   //       disActivatedSlideShoe.style.transition = '1.5s cubic-bezier(.66,.25,.23,.99)'
   //       disActivatedSlideName.style.transition = '1.5s cubic-bezier(.66,.25,.23,.99)'
         
   //    }, 1500);

   // }, 2000);
}


function backgroundChange(){
    if (activeSlideIndex == 1) {
      document.querySelector('.bg1').style.opacity = 0 
      document.querySelector('.bg2').style.opacity = 1 
      document.querySelector('.bg3').style.opacity = 1 
      document.querySelector('.bg4').style.opacity = 1
      
   } else if (activeSlideIndex == 2) {
      // document.querySelector('.bg1').style.opacity = 1
      document.querySelector('.bg2').style.opacity = 0 
      document.querySelector('.bg3').style.opacity = 1 
      document.querySelector('.bg4').style.opacity = 1 

   }else if (activeSlideIndex == 3) {
      document.querySelector('.bg3').style.opacity = 0 
      document.querySelector('.bg4').style.opacity = 1 
      document.querySelector('.bg1').style.opacity = 0 

   }else if (activeSlideIndex == 4 || activeSlideIndex == 0) {
      document.querySelector('.bg4').style.opacity = 0 
      document.querySelector('.bg1').style.opacity = 1 
      document.querySelector('.bg2').style.opacity = 1
      document.querySelector('.bg3').style.opacity = 1
      activeSlideIndex = 0
   }
}

// shoe animation
const shoesImages = [...document.querySelectorAll('.slideShoeImg')]
addEventListener('mousemove',(e) => {
   let yMoveValue =Math.round(( e.pageY - screen.height /2) / 40)
   let xMoveValue = Math.round((e.pageX - screen.width / 2) / 40)
   // console.log(yMoveValue, xMoveValue);
   shoesImages.forEach(img =>{
      img.style.transform = `translate(calc(-50% - ${xMoveValue}px), calc(-50% - ${yMoveValue}px))`
   })
})