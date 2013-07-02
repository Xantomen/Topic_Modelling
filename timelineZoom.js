Zoomer = {};

Zoomer.TimelineZoom = function(config)
{
var self = this;
this.div = "body";

this.zoom = 1;


this.init_wheel = function()
	{
	alert("ZOOM " + self.div);


	$(self.div).bind('mousewheel', function(event, delta) {

		/*if(delta > 0) self.zoom_in(delta);
		else self.zoom_out(delta);*/
		
		alert("something");
		
		timeline.updateZoom(delta);

	});

	}


this.init = function()
	{
	if (config.div) self.div = "#" + config.div;
	if (config.wheel) self.init_wheel();


	/*$(self.div).dblclick(function(event){
			
		self.zoom_event(event);	
		});	
		*/
	}

self.init();	
}






var testbed;

$(document).ready(function () {

/*
 config = {};
 config.div = "timeline";	
 config.wheel = true;	



 testbed = new Zoomer.TimelineZoom(config);	
*/

});