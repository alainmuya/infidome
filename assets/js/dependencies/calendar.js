	$(document).ready(function() {	
//		if (window.location.protocol != "https:")
  //  		window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

		console.log("rien ne marche");
		$('#calendar').fullCalendar({			
			header: {
		        left: '',
		        center: 'prev title next',
		        right: ''
		    },
			defaultDate: '2016-01-12 00:00:00',
		  	height: 500,		  	
			selectable: true,
			selectHelper: true,
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			theme: true,
			events : [
			{
				title: 'All Day Event',
				start: '2016-01-01'
			},
			{
				title: 'Long Event',
				start: '2016-01-07',
				end: '2016-01-07'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-01-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-01-16T16:00:00'
			},
		
			{
				title: 'Meeting',
				start: '2016-01-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-01-12T17:30:00'
			},
		
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-01-28'
			}
		],
							    	
			select: function(start, end, event) {
										//var title = "Please enter your namearry Potter";		
										var start = $.fullCalendar.moment(start).format();
										var end   = $.fullCalendar.moment(end).format();
												  console.log(start+'---'+end);
												   console.log(event.start);											
												},
			eventClick: function(event) {
											//supersonic.logger.log(event);
											 console.log(event.title);
					 	 				},			
			

			 // allow "more" link when too many events			
			
			
		});
		
	});
