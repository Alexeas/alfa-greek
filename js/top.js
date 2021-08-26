/* Прокручивает страницу вверх при нажатии на кнопку */
var scrollPos = 0;
$(window).scroll(function(){
   var st = $(this).scrollTop();
   if (st > scrollPos){
     $('#toTop').fadeOut();
   } else {
     $('#toTop').fadeIn();
   }
   scrollPos = st;

       $('#toTop').click(()=>{
           setTimeout(function(){
           	document.getElementById('toTop').style.display = 'none';
        }, 2000,);
    });
});
