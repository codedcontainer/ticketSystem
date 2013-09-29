$(document).ready(function()
{
	$(function()
	{
    	$( "#sortable" ).sortable();
    	$( "#sortable" ).disableSelection();
    });
	var toggleHeight = $('.ui-state-default').height();
	$('#expand').click(function()
	{
		var clicks = $(this).data('clicks');
		if (clicks)
		{
			$('.content').fadeIn('slow');
			$(this).siblings('div').slideDown();
			$('#expand').html('&#9660;');
	  	} 
	  	else
	  	{
			$('.content').hide();
			$(this).siblings('div').slideUp();
			$('#expand').html('&#9650;');
	  	}
	  	$(this).data("clicks", !clicks);
	});
	$('input').click(function(){
		$(this).siblings().css('text-decoration','sline-through');
	});
//Make AJAX request to config.php and make sure everything has been set up
	var db_test;
	$.ajax({ url: 'config.php',
			data:{db_test:1},
			type: "POST",
			success: function(data)
			{
				console.log(data);
			}
	});
	function projectBox()
	{
		$('.icon-plus-sign').click(function()
		{
			//Get the documents inner height and width
			$(window).resize(function()
			{
				$('#lightsout').css({
				'width': document.height,
				'height': document.width
			});
		});
			$('#lightsout, #lightbox').show();
		});

		//Pressing 'esc' will remove lights out
		$(document).keypress(function(e)
		{
			if(e.keyCode == 27)
			{
				$('#lightsout').fadeOut();
			}
		});
	}
	projectBox();
  });