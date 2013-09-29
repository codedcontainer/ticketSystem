$(document).ready(function()
{
	var config_bool;

	tsk_sortable();
	tsk_toggle();
	projectBox();
	config(); // Returns Bool //Make AJAX request to config.php and make sure everything has been set up

	function tsk_sortable()
	{
    	$( "#sortable" ).sortable();
    	$( "#sortable" ).disableSelection();
 	};
 	function tsk_toggle()
 	{
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
	}	
	function config()
	{
		var dataBool;
		var db_test;
		$.ajax({ url: 'config.php',
				data:{db_test:1},
				type: "POST",
				success: function(data)
				{
					//return the data value to global variable.
				}
		});
	}
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
	
  });