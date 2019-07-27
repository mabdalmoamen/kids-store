$(document).ready(function (){
 $('.navbar ul li ').click(function (){
  $(this).addClass('active').siblings().removeClass('active');
 })
 

  });
 
//getAll Image Slider
let slider = document.querySelectorAll('.sliderImgs img'),
  sliderArr= Array.from(slider);
let sliderLength = sliderArr.length;
  //Creat Bullets
let currentSlide = 1;
  //set Dynamic Slider number
let sliderNumber = document.getElementById('sliderCount');
  
  //Create Bullets
  let bulletsUl = document.createElement('ul');
    bulletsUl.setAttribute('id','bullets');
    for(let i=1; i<=sliderLength;i++){
     let bulletsLi = document.createElement('li');
        bulletsLi.setAttribute('data-slide',i);
    bulletsLi.appendChild(document.createTextNode(i));
    bulletsUl.append(bulletsLi)
    }
  let bullestContainer =document.getElementById('bullets-container');
  bullestContainer.append(bulletsUl);
  //Get all Bullets Array
  let bullet = document.querySelectorAll('#bullets li'),
  allbullet= Array.from(bullet);
  //Get all Counter Array
  let sliderCounts = document.querySelectorAll('#sliderCount'),
  sliderCount= Array.from(sliderCounts);
  //Get all removeActiveDeal Array
  let sliderDeal = document.querySelectorAll('.deal'),
  dealCount= Array.from(sliderDeal);
  //Get all removeActiveDeal Array
  let sliderSale = document.querySelectorAll('.sale'),
  salesCount= Array.from(sliderSale);

  
  //get Buttons
  let nextBtn = document.getElementById('nextBtn'),
  prevBtn = document.getElementById('prevBtn');
  
  theSlider();
  setInterval(function(){ 
    if(currentSlide != sliderLength ){
      nextFunction();
      theSlider();
    }else{
      return currentSlide = 1 ;
    }
    
   }, 5000);
    //add Events
    nextBtn.onclick = nextFunction;
    prevBtn.onclick = prevFunction;
    
    function nextFunction(){
      if(nextBtn.classList.contains('disabled') ){
        return false;
      }else{
        
        currentSlide++ ;
        theSlider();  
  
      }
        

    };
     function prevFunction (){
      if(prevBtn.classList.contains('disabled')){
        return false;
      }else{
        currentSlide-- ;
        theSlider();
        
      }
        
      
    }
    //The slider Function 
    function theSlider(){
      // sliderNumber.textContent ='Product Title  # ' + (currentSlide) +' of ' + (sliderLength);
      removeActivecount();
      sliderCounts[currentSlide - 1].classList.add('active')
       // sliderNumber.textContent ='Product Title  # ' + (currentSlide) +' of ' + (sliderLength);
      removeActiveDeal();
      sliderDeal[currentSlide - 1].classList.add('active')
      // sliderNumber.textContent ='Product Title  # ' + (currentSlide) +' of ' + (sliderLength);
      removeActiveSale();
      sliderSale[currentSlide - 1].classList.add('active')
      removeActiveImg();
      slider[currentSlide - 1].classList.add('active');
      removeActiveLi();
      bulletsUl.children[currentSlide - 1].classList.add('active');
      if(currentSlide == 1){
        prevBtn.classList.add('disabled');
      }else{
        prevBtn.classList.remove('disabled');
        
      };
      if(currentSlide == sliderLength){
        nextBtn.classList.add('disabled');
      }else{
        nextBtn.classList.remove('disabled');
            
      
      }
    }
    
    // remove CLass Active From Image
    function removeActiveImg(){
      slider.forEach( function (img){
        img.classList.remove('active');
      })
    }
    // remove CLass Active From bullets li
    function removeActiveLi(){
      allbullet.forEach( function (bulletsLi){
        bulletsLi.classList.remove('active');
      })
    }
    // remove CLass Active From Counters li
    function removeActivecount(){
      sliderCount.forEach( function (count){
        count.classList.remove('active');
      })
    } 
    // remove CLass Active From deal li
    function removeActiveDeal(){
      dealCount.forEach( function (deal){
        deal.classList.remove('active');
      })
    } 
    // remove CLass Active From deal li
    function removeActiveSale(){
      salesCount.forEach( function (sale){
        sale.classList.remove('active');
      })
    }
