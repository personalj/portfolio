
$( document ).ready(function() {

	$('.welcome-overlay').addClass('animated');

    AOS.init({
        easing: 'ease-in-out-sine'
    });

    (function(){

        $('.header__social').add('.header__tel').add('.header__nav').add('.hero__elem').addClass('animated');

    	var lastScrollTop = 0,
    		heroInfo = $('.hero__info'),
    		infoElem = $('.about__info-elem');


    	$(window).scroll(function(event){
    	   var st = $(this).scrollTop(),
    	   	   bgOffset = $('.about__info-pic').offset().top ;
    	       heroInfo.css("top", +(st*0.2)+'px');
    	       if(bgOffset > st ) {
    	            infoElem.css("top", +(st*0.1)+'px');
    	         }
    	   lastScrollTop = st;
    	});

        $('[data-opener]').click(function() {
            $this = $(this);
            if($this.is('.active')) {
                $this.removeClass('active');
                $('[data-target="'+$this.data('opener')+'"]').removeClass('active');
            }else{
                $this.addClass('active');
                $('[data-target="'+$this.data('opener')+'"]').addClass('active');
            }
        });




        $('.nav__link').click( function(e){
            e.preventDefault();
            var href = $(this).attr('href'),
                section = $('.section[data-section='+href+']');
           $('html, body').animate({
                scrollTop:  section.offset().top
            }, 500);
           if ($(window).width() < 768) {
                $('.nav__list').add('.nav__burger').removeClass('active');
                    
           }
        });

        $('.arrow-down').on('click',function(){
           var parent = $(this).closest('.hero');
            $('html, body').animate({ scrollTop: parent.height() + 300 }, 500);
        })

    }());


    (function(){
        $(window).on('load scroll resize', function() {

            var $this = $(this),
                offsetTop = $this.scrollTop(),
                btn = $('.btn-top');

                if(offsetTop > 200) {
                    btn.fadeIn(300).removeClass('hidden');
                }else {
                    btn.fadeOut(300).addClass('hidden');
                }
        });
        $('.btn-top').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }) 

    }());


    (function(){
    	$('#form').on('submit', function(e) {
    		var items = $(this).find('.contact-form__input');
    		e.preventDefault();
            var form_data = $(this).serialize();
            $.ajax({
            url: "send.php", 
            type: "POST",
            data: form_data,
            success: function() {
            $('.contact-pop-up').fadeIn(300).addClass('active');
            setTimeout(function(){ $('.contact-pop-up.active').fadeOut(300).removeClass('active') }, 3000);
                $('.contact-form__input').val('');
                $('.contact-form__textarea').val('');
            }
        });
    		items.each(function(){
    			

    			if($(this).val() === '') {
    				$(this).addClass('error');
    				e.preventDefault();
 

    			}else {
    				$(this).removeClass('error')
  
    			}
    		})
    		
    	})
        $(document).click( function(event){
        if( $(event.target).closest('.contact-pop-up').length ) 
            return;
        $('.contact-pop-up').fadeOut(300).removeClass('active');
            event.stopPropagation();
        });

        $('.contact-pop-up').click(function(){
            $(this).fadeOut(300).removeClass('active');
        });

    }());

    (function(){
    	var show = true;
    	    // var countbox = ".features";
    	   $(window).on("scroll load resize", function(){


    	       if(!show) return false;
    	       if($('.skills').length){
    	       	 var e_top = $(".skills").offset().top;
    	       	 var e_height = $(".skills").outerHeight();
    	       }                
    	       var w_top = $(window).scrollTop();       
    	         
    	       var w_height = $(window).height();       
    	       var d_height = $(document).height();


    	      if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
    	  
    	           $('.progress-bar__inner').each(function()  {
    	           	  var $this = $(this), 
    	           	      // numberText = number.text(),
    	           	  numberData = $this.find('.progress-bar__percentage').data('skills'),
    	           	  number =$this.find('.progress-bar__percentage'),

    	           	  width,
    	           	  x = 0;
    	           	 $this.css('width', numberData +"%");;
    	           	  var timerId = setInterval(function() {
    	           	  if (x <= numberData) { 
    	           	    number.html(x++ +"%");
    	           	  }else {   
    	           	    clearInterval(timerId);

    	           	  }    
    	           	 }, 40);

    	           	});	
    	           show = false;
    	       }
    	});
    }());
   
    (function(){
    	if (!Modernizr['object-fit']) {
    		  background($('.works__img-item'));
    		  background($('.works__controllers-item'));
    		}
    		  function background(items) {
    		  	items.each(function () {
    			    var $container = $(this),
    			        imgUrl = $container.find('img').prop('src');
    			    if (imgUrl) {
    			      $container
    			        .css('backgroundImage', 'url(' + imgUrl + ')')
    			        .addClass('compat-object-fit');
    			    }  
    			  });
    		
    		  }

    }());
    
    (function(){

    	(function(){

    	
  
    	  $('.works__controllers-btn').on('click',function(e) {

    	  	e.preventDefault();

 			var $this = $(this),
    	 	imgUpActiveNext = $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item.active').next(),
    	 	imgUpActivePrev = $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item.active').prev(),
    	 	imgDownActiveNext = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item.active').next(),
    	 	imgDownActivePrev = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item.active').prev(),
    	 	   
    	 	picActivePrev = $this.closest('.works__inner').find('.works__img-item.active').prev(),
    	 	picActiveNext = $this.closest('.works__inner').find('.works__img-item.active').next(),
    	 	picFirst = $this.closest('.works__inner').find('.works__img-item').first(),
    	 	picLast = $this.closest('.works__inner').find('.works__img-item').last(),
    	 	   
    	 	descrActivePrev = $this.closest('.works__inner').find('.works__info-item.active').prev(),
    	 	descrActiveNext = $this.closest('.works__inner').find('.works__info-item.active').next(),
    	 	descrFirst = $this.closest('.works__inner').find('.works__info-item').first(),
    	 	descrLast = $this.closest('.works__inner').find('.works__info-item').last(),
    	 	   
    	 	btnNextFirst = $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item').first(),
    	 	btnNextLast = $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item').last(),
    	 	btnPrevFirst = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item').first(),
    	 	btnPrevLast = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item').last(),
    	 	nextImg =   $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item'),
    	 	prevImg = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item');

    	  
    	  if($this.hasClass('btn-next')) {

    	  	animationEnd($this, nextImg);
    	  	btnLength(imgUpActiveNext, btnNextFirst );
    	  	btnLength(imgDownActiveNext, btnPrevFirst );
    	  	btnLength(picActiveNext, picFirst);
    	  	btnLength(descrActiveNext, descrFirst);

    	   }else {

    	   	animationEnd($this, prevImg)
    	    btnLength(imgUpActivePrev, btnNextLast );
    	    btnLength(imgDownActivePrev, btnPrevLast );
    	    btnLength(picActivePrev, picLast);
    	    btnLength(descrActivePrev, descrLast);
    	   
    	   }

    	   function animationEnd(elem, elemTransition) {
    	   	elem.addClass("btn-disabled");
    	   	elemTransition.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    	         elem.removeClass("btn-disabled")

    	     });
    	   }

    	   function btnLength(el, slide) {
    	       if(el.length ) {
    	           el.addClass('active').siblings().removeClass('active');
    	         }else {
    	            slide.addClass('active').siblings().removeClass('active');
    	     }
    	     
    	   }


    	})
    	
    	})();

    }());
});