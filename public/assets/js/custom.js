

$(document).ready(function(){    
    $('.jsTabMenu').click(function(){
        $('.navBox').toggleClass('opened');
        $('.tab-overlay').toggleClass('show-overlay');
        $('body').toggleClass('tab-hidden');        
    })
    $('.tab-overlay').click(function(){
        $('.navBox').removeClass('opened');
        $('.tab-overlay').removeClass('show-overlay');
        $('body').removeClass('tab-hidden');        
    })

})

$(window).scroll(function(){
         
})

$(window).resize(function(){    
        
}) 
$(window).bind('resize load', function(){    
        
}) 




  