
$( document ).ready(function() {

	$('.welcome-overlay').addClass('animated');

    (function(){

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

    // (function(){
    // 	if ( ! Modernizr.objectfit ) {
    // 		  background($('.works__img-item'));
    // 		  background($('.works__controllers-item'));
    // 		}
    // 		  function background(items) {
    // 		  	items.each(function () {
    // 			    var $container = $(this),
    // 			        imgUrl = $container.find('img').prop('src');
    // 			    if (imgUrl) {
    // 			      $container
    // 			        .css('backgroundImage', 'url(' + imgUrl + ')')
    // 			        .addClass('compat-object-fit');
    // 			    }  
    // 			  });
    // 		  }

    // }());
    
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



    	   
    	   // var   
    	     
    	   //      nextImg =   $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item'),
    	        // nextImgActive = $this.closest('.works__inner').find('.works__controllers-list_next .works__controllers-item.active'),
    	        // nextImgFirst = nextImg.first(),
    	        // nextImgLast = nextImg.last(),

    	        // prevImg = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item')
    	        // flag =true;
    	        // prevImgActive = $this.closest('.works__inner').find('.works__controllers-list_prev .works__controllers-item.active'),
    	        // prevImgFirst = prevImg.first(),
    	        // prevImgLast = prevImg.last();
    	  
    	  if($this.hasClass('btn-next')) {

    	  	animationEnd($this, nextImg);
    	  	btnLength(imgUpActiveNext, btnNextFirst );
    	  	btnLength(imgDownActiveNext, btnPrevFirst );
    	  	btnLength(picActiveNext, picFirst);
    	  	btnLength(descrActiveNext, descrFirst);
    	  	// directionPic("forward");

 


    	   }else {

    	   	animationEnd($this, prevImg)
    	    btnLength(imgUpActivePrev, btnNextLast );
    	    btnLength(imgDownActivePrev, btnPrevLast );
    	    btnLength(picActivePrev, picLast);
    	    btnLength(descrActivePrev, descrLast);
    	    // directionPic("backward");
    	   
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

    	   

    	   // function directionPic(direction) {
    	     

    	         

    	     // if(direction === 'forward') {
	    	    //    if(nextImg.length ) {
	    	    //       nextImg.css({top: "100" + "%"});
	    	    //       nextImgActive.css({top: "50" + "%"});
	    	    //       // imgUpActivePrev.css({top: "-100" + "%"} );
	    	    //    }else {
	    	    //      nextImgFirst.css({top: "50" + "%"} );
	    	    //    }
	    	    //    if(prevImg.length ) {
	    	    //       prevImg.css({top: "-100" + "%"} );
	    	    //       prevImgActive.css({top: "50" + "%"} );
	    	    //    }else {
	    	    //      prevImgLast.css({top: "50" + "%"} );
	    	    //    }
	    	    //    console.log(1);
    	     // }else {
	    	    //  	if(nextImg.length ) {
	    	    //  	   nextImg.css({top: "-100" + "%"} );
	    	    //  	   nextImgActive.css({top: "50" + "%"} );
	    	    //  	}else {
	    	    //  	  nextImgLast.css({top: "50" + "%"} );
	    	    //  	}
	    	    //  	if(prevImg.length ) {
	    	    //  	   prevImg.css({top: "100" + "%"} );
	    	    //  	   prevImgActive.css({top: "50" + "%"} );
	    	    //  	}else {
	    	    //  	  prevImgLast.css({top: "-100" + "%"} );
	    	    //  	}
	    	    //  	console.log(2);
    	     // }
    	       

    	   // }


    	})
    	

    	})();

    }());
});