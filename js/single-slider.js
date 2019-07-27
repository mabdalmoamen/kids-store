$(document).ready(function (){
    let imgs=Array.from($('.single-page .slider img')),
        imgsLength=imgs.length;
      let current =0;
  if($('.single-page .slider img').hasClass('active')){
    let src=$('.single-page .slider .active').attr('src')
    $('.single-page .product-view> .single').attr('src',src)
   
  }

  $('.single-page .nxt').click(function(){
     if($('.single-page .slider img').hasClass('active')){
        $('.single-page .active').prev().addClass('active').siblings().removeClass('active')
         let src=$('.single-page .slider .active').attr('src')
         $('.single-page .product-view > .single').attr('src',src);
     // $('.single-page .right').css({'background-image':'url('+src+')'});
      }
      
  });
  $('.single-page .prev').click(function(){
    if($('.single-page .slider img').hasClass('active')){
        $('.single-page .slider .active').next().addClass('active').siblings().removeClass('active')
         let src=$('.single-page .slider .active').attr('src')
         $('.single-page .product-view > .single').attr('src',src);
        // $('.single-page .right').css({'background-image':'url('+src+')'});
      }
  });
  $('.single-page .slider img').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    let src=$('.single-page .slider .active').attr('src');
    $('.single-page .product-view > .single').attr('src',src);
    // $('.single-page .right').css({'background-image':'url('+src+')'});
  });
  $('.single-page .colors>div').click(function(){
    
    $(this).addClass('Chosen').siblings().removeClass('Chosen');
    $('.single-page h5 span').text($(this).text());
    if($(this).hasClass('Black')){
      let clas=$(this).attr('class').split(' ')[0];
      $('.single-page .Chosen').css({'color':'#fff','background-color':clas});
    }else{
      $('.single-page .Chosen').css('color','#222');
       let clas=$(this).attr('class').split(' ')[0];
      $('.single-page .Chosen').css({'background-color':clas});
    }
  })
 
});