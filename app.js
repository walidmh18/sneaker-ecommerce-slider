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
   let navBtnTop = navBtn.offsetTop -250
   let navBtnArrow = navBtn.querySelector('p')
   navBtn.addEventListener('mouseover',() => {
      navBtn.style.height = '500px'
      navBtn.style.width = '500px'
      navBtn.addEventListener('mousemove',(e)=>{
         
         let mouseY = e.clientY - navBtnTop 
         let mouseX =Math.min( e.clientX+ (screen.width *10/100), screen.width - e.clientX + (screen.width *10/100))
         navBtnArrow.style.top = mouseY + 'px'
         if (navBtn.classList.contains('navigationPrevious')) {
            navBtnArrow.style.left = mouseX + 'px'
            navBtn.style.left = '-10%'
            
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
      }
   })
   
})

function nextSlide() {
   
}


function previousSlide() {
   
}