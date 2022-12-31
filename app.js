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

const slidesDescriptions = document.querySelector('.slidesDescriptionsContainer')
const slideDescription = [...document.querySelectorAll('.slideDescription')]
function nextSlide() {
   
   activeSlideIndex ++
   backgroundChange()
   console.log(activeSlideIndex);
   let activeSlideName = slidesArr[activeSlideIndex].querySelector('.slideNameContainer') 
   let activeSlideShoe = slidesArr[activeSlideIndex].querySelector('.slideShoeImgContainer') 

   let disActivatedSlideName = activeSlideIndex!==0 ? slidesArr[activeSlideIndex-1].querySelector('.slideNameContainer') : slidesArr[3].querySelector('.slideNameContainer')
   let disActivatedSlideShoe = activeSlideIndex!==0 ?  slidesArr[activeSlideIndex-1].querySelector('.slideShoeImgContainer') : slidesArr[3].querySelector('.slideShoeImgContainer')

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
   changeDescription(activeSlideIndex)
   
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

   activeSlideName.style.left = 0
   activeSlideShoe.style.left = 0
   disActivatedSlideName.style.left = '-100%'
   disActivatedSlideShoe.style.left = '100%'
   changeDescription(activeSlideIndex)
   
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

function changeDescription(n) {
   slidesDescriptions.style.top = (-n*slideDescription[n].offsetHeight ) + 'px'
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

const cartComponents = document.querySelector('.cartComponents')
const totalPriceContainer = document.querySelector('.totalPrice').querySelector('span')
const taxPriceContainer = document.querySelector('.taxPrice').querySelector('span')
const totalTaxPriceContainer = document.querySelector('.totalTaxPrice').querySelector('span')
const cartOpenBtn = document.querySelector('.cartOpenBtn')

let prices = []
function addToCart(index) {
   console.log(document.querySelector(`.slide${index+1}Description`).querySelector('.slidePrice').querySelector('span').innerText);
   let itemPrice = document.querySelector(`.slide${index+1}Description`).querySelector('.slidePrice').querySelector('span').innerText
   let itemName = [...slidesArr[index].querySelectorAll('.slideName')][0].innerText
   let newItem = document.createElement('div')
   newItem.classList.add('item')
   newItem.innerHTML = `
   <div class="itemPicture">
               <img src="images/shoe${index+1}.png" alt="">
            </div>
            <div class="itemDescription">
               <div class="itemName">${itemName}</div>
               <div class="itemQuantity">Quantity: x<span class="quantity">1</span></div>
               <div class="itemUnitPrice">price : $<span class="unitPrice">${itemPrice}</span></div>
                
            </div>
   
   `
   prices.push(1*(itemPrice))
   cartComponents.append(newItem)
   let totalPrice = prices.reduce((a, b) => a + b, 0)
   let taxPrice = Math.round(totalPrice*0.15*100)/100 
   let totalTaxPrice = totalPrice + taxPrice
   totalPriceContainer.innerText = totalPrice
   taxPriceContainer.innerText = taxPrice
   totalTaxPriceContainer.innerText = totalTaxPrice
   let itemsArr = [...document.querySelectorAll('.item')]
   cartOpenBtn.querySelector('span').innerText = itemsArr.length
}
const cart = document.querySelector('.cart')
function openCart() {
   cart.classList.add('open')
}
function closeCart() {
   cart.classList.remove('open')
}


addEventListener('click',(e) => {
   if (!cart.contains(e.target) && !cartOpenBtn.contains(e.target) && cart.classList.contains('open')) {
      closeCart()
      console.log('object');
   }
})





















// <div class="item">
//             <div class="itemPicture">
//                <img src="images/shoe1.png" alt="">
//             </div>
//             <div class="itemDescription">
//                <div class="itemName">Lorem</div>
//                <div class="itemQuantity">Quantity: x<span class="quantity">2</span></div>
//                <div class="itemUnitPrice">price : $<span class="unitPrice">749</span></div>
//                <div class="itemTotalPrice">price : $<span class="totalPrice">1498</span></div>
//             </div>
            
//          </div>