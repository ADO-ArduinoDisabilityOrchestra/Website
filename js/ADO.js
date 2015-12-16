$(document).ready(function(){
    
 
$('.oneone').click(function(){
    $('.threethree, .twotwo').slideToggle('500',function(){
        $('.w1').fadeIn();
        $('.w1').toggle();
    }); });
    
$('.twotwo').click(function(){
    $('.threethree, .oneone').slideToggle('500',function(){
        $('.w2').fadeIn();
        $('.w2').toggle();            
    }); });
    
$('.threethree').click(function(){
    $('.oneone, .twotwo').slideToggle('500',function(){
        $('.w3').fadeIn();
        $('.w3').toggle();         
    }); }); 
    
    
var open = false;
$('.dream').click(function(){
    open = !open;
    $('.wanna, .play, .pics').slideToggle('500',function(){     
        if(open) {
        $('.w4').fadeIn();
        } else {
        $('.w4').fadeOut();
        }       
        }); });
        
    
$('.wanna').click(function(){
    open = !open;
    $('.dream, .play, .pics').slideToggle('500',function(){
        
        
        if(open) {
        $('.w5').fadeIn();
        } else {
        $('.w5').fadeOut();
        }       
        }); });
    
$('.play').click(function(){
    open = !open;
    $('.wanna, .dream, .pics').slideToggle('500',function(){
        if(open) {
        $('.w6').fadeIn();
        } else {
        $('.w6').fadeOut();
        }       
        }); });
    
$('.pics').click(function(){
    open = !open;
    $('.wanna, .play, .dream').slideToggle('500',function(){
        if(open) {
        $('.w7').fadeIn();
        } else {
        $('.w7').fadeOut();
        }       
        }); });
    
    
    

$(".button.expand").on("click" ,function(){
  		$('html, body').animate({scrollTop : 700},800);
		return false;

});
    
    
if (screen.width <= 400) {
     $('.row.but').remove();
    $('.credits').remove();
    $('.lastmail').remove();
  }


    
    
    
});