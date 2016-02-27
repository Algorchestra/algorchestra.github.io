// Enable pusher logging - don't include this in production
Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};


$(document).ready(function(){


	var pusher = new Pusher('63d59e4d863d6c327df0', {
	  encrypted: true,
	  authTransport: 'client',
	    clientAuth: {
	      key: '63d59e4d863d6c327df0',
	      secret: '3f3f9b3c99eaa688e16b',
	      user_id: 1,
	      user_info: {}
	    }
	});



	var channel = pusher.subscribe('private-global');
	channel.bind('music_keystroke', function(data) {
		t = new track();
		t.beat(4);
	});

	$(document).keypress(function(event) {
		channel.trigger('client-music_keystroke', {
		  "message": "hello world"
		});
	});
});
