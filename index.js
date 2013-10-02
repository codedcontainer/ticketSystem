$(document).ready(function()
{
	var dataBool;

	tsk_sortable();
	tsk_toggle();
	projectBox();
	config(); // Returns Bool //Make AJAX request to config.php and make sure everything has been set up
	if(dataBool == 1)
	{
		prj_create();
	}
	function prj_create()
	{
		$('#frm_prj .submit').click(function(){
			var prjName = $('#frm_prj input').val();
			if(prjName == "")
			{
				jQuery('.empty').text('You must submit a project name');
			}
			else
			{
				$.ajax({async: false,
					url: 'prjSubmit.php',
					data:{prjName: prjName},
					type: "POST",
					success: function(data)
					{
						console.log(data);
					}
				});

			}


		});
	}
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
	// Check to see if there has been a connection to the database and that it has been set up.
	function config()
	{
		var db_test;
		$.ajax({async: false,
				url: 'dbtest.php',
				dataType: "text",
				data:{db_test:1},
				type: "POST",
				success: function(data)
				{
					dataBool = data;
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
			//$('form #frm_prj').css({'display':'block'});
		});
			$('#frm_prj').show();
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