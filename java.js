
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
 
        var id  = $(this).attr('href'),

            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 500);
    });
});





$(document).ready(function(){
	$('.next').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(200);
        currentImage.removeClass('curry');

        if (nextImageIndex == ($('.img:last').index()+1)) {
        	$('.img').eq(0).fadeIn(200);
        	$('.img').eq(0).addClass('curry');
        }
        else{
        	nextImage.fadeIn(200);
        	nextImage.addClass('curry'); 
        }

	});

     $('.prev').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(200);
        currentImage.removeClass('curry');
        prevImage.fadeIn(200);
        prevImage.addClass('curry');


     });

});

$(document).ready(function(){
	$('.next1').click(function(){
        var currentImage1 = $('.img2.curry1');
        var currentImageIndex1 = $('.img2.curry1').index();
        var nextImageIndex1 = currentImageIndex1 + 1;
        var nextImage1 = $('.img2').eq(nextImageIndex1);
        currentImage1.fadeOut(1);
        currentImage1.removeClass('curry1');

        if (nextImageIndex1 == ($('.img2:last').index()+1)) {
        	$('.img2').eq(0).fadeIn(1);
        	$('.img2').eq(0).addClass('curry1');
        }
        else{
        	nextImage1.fadeIn(1);
        	nextImage1.addClass('curry1'); 
        }

	});

     $('.prev1').click(function(){
        var currentImage1 = $('.img2.curry1');
        var currentImageIndex1 = $('.img2.curry1').index();
        var prevImageIndex1 = currentImageIndex1 - 1;
        var prevImage1 = $('.img2').eq(prevImageIndex1);

        currentImage1.fadeOut(1);
        currentImage1.removeClass('curry1');
        prevImage1.fadeIn(1);
        prevImage1.addClass('curry1');


     });

});

