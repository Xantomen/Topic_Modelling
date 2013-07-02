Zoomer = {};

Zoomer.Zoom = function(config)
{
var self = this;
this.div = "body";

this.zoom = 1;

this.translationAccX = 0;
this.translationAccY = 0;

this.testfieldBeforeX = 0;
this.testfieldBeforeY = 0;
this.dragCounter = 0;


this.init_wheel = function()
	{

	this.centreX = $(self.div).width()/2;
	this.centreY = $(self.div).height()/2;
	
	this.posLeft = $(self.div).position().left;
	this.posTop = $(self.div).position().top;
	
	//alert(this.centreX +','+this.centreY);	
	
	
	$(self.div).bind('mousemove', function(event)
	{
		$("#info").append().text("mouseX = "+event.clientX+","+"mouseY = "+event.clientY+"\n"
		+"this.centreX = "+self.centreX+","+"this.centreY = "+self.centreY
		+"$(self.div).position().left = "+$(self.div).position().left+","+"$(self.div).position().top = "+$(self.div).position().top
		+"self.translationAccX = "+self.translationAccX+","+"this.translationAccY = "+self.translationAccY
		);
		
		
		
		
		
			
	}
	);
	
		
	$(self.div).bind('mousewheel', function(event, delta) {
	
		// alert("x, " + event.clientX + " y: " + event.clientY);
		
		// they have to be converted to relative positions, relating to the div



		// these values are supposed to be the vector between 
		// the centre of the image and where you want to zoom from
		// in non-zoomed screen pixels
//		var pos = $(self.div).position();
		var x = event.clientX;
		var y = event.clientY;
		//alert("x="+x+"y="+y);
		
		// for testing, force all zooms to be top left corner
		// x = 300;
		// y = 160;
		
		// //alert(pos.left);
		// console.log(pos.left);
		// console.log(pos.top);
		
		
		// var a =$(self.div).width();
		// alert($(self.div).width());
		// alert($(self.div).height());
		
		//alert(pos.left +','+ pos.right +','+ pos.top +','+ pos.bottom);
		

		// alert(self.zoom);	
		
		
		
		// Z vector is in the coordinate system
		// of the original image
		// (obviously, when you zoom around one point
		// it remains where it was in the original image!)
		
		// more generally (i.e. if you move the cursor between zooms)
		// we need to translate from the screen pixel to
		// the original image pixel position
		
		// x in original image pixels
		// y in original image pixels
		// x->x'     :     (x-self.centreX) + self.centreX + self.posLeft                (x=0 -> x'= self.posLeft)
		// x'->x''   :     (x-self.centreX) * self.zoom + self.centreX + self.posLeft  
		// x''->x''' : y = (x-self.centreX) * self.zoom + self.centreX + self.posLeft + self.translationAccX
		
		// ((y - self.translationAccX - self.centreX - self.posLeft)/self.zoom) + self.centreX
		// y = self.posLeft; self.translationAccX = 0; self.zoom=1 -> x = 0
		
		// add a final self.posLeft to get to original screen pixels from original image pixels
		
		x = ((x - self.translationAccX - self.centreX - self.posLeft)/self.zoom) + self.centreX + self.posLeft;
		y = ((y - self.translationAccY - self.centreY - self.posTop)/self.zoom) + self.centreY + self.posTop;
		
		self.testfieldBeforeX = x;
		self.testfieldBeforeY = y;

		var Zx = (x - self.centreX - self.posLeft); // 400
		var Zy = (y - self.centreY - self.posTop); // 200
	//	alert(Zx +','+ Zy);
		
	//	alert("x, " + x + " y: " + y);		
			
			if(delta > 0)
			{
				self.zoom_in(Zx,Zy);
			}
			else
			{
				self.zoom_out(Zx,Zy);
			}

		});
			
	}


this.zoom_in = function(Zx,Zy)
	{
		// console.log("Zoom In");
		var scaling = 1; // 100% increase
	
		self.translationAccX -= Zx*scaling;
	
		self.translationAccY -= Zy*scaling;
	
		if(self.zoom < 6) 
		{
	
			var translate = 'translate('+self.translationAccX+'px, '+self.translationAccY+'px)';
			
			self.zoom += scaling;	
		
			
			var scale = 'scale(' + self.zoom + ',' + self.zoom + ')';	
			//console.log(scale);
		
		
		
			$(testbed.div).css('transform', translate+scale);
		}
		
	}


this.zoom_out = function(Zx,Zy)
	{
		// console.log("Zoom Out");	
		var scaling = -self.zoom*0.5;
		// var translateX = (Zx*-scaling);
		// var translateY = (Zy*-scaling);
	
		self.translationAccX -= Zx*scaling;
	
		self.translationAccY -= Zy*scaling;	
	
		if(self.zoom > 1) 
		{
	
			var translate = 'translate('+self.translationAccX+'px, '+self.translationAccY+'px)';
			
			self.zoom += scaling;	
			
			var scale = 'scale(' + self.zoom + ',' + self.zoom + ')';	
		
		
			// self.centreX += Zx*-scaling;
			// self.centreY += Zy*-scaling;
	
			$(testbed.div).css('transform', translate+ scale);
		}

	}



this.zoom_event = function(event)
	{
		
		var x = event.clientX;
		var y = event.clientY;
		
		x = ((x - self.translationAccX - self.centreX - self.posLeft)/self.zoom) + self.centreX + self.posLeft;
		y = ((y - self.translationAccY - self.centreY - self.posTop)/self.zoom) + self.centreY + self.posTop;
		
		self.testfieldBeforeX = x;
		self.testfieldBeforeY = y;

		var Zx = (x - self.centreX - self.posLeft); // 400
		var Zy = (y - self.centreY - self.posTop); // 200
		
		// now event.clientX and event.clientY are absolute screen positions
		//alert("x, " + event.clientX + " y: " + event.clientY);
		
		// they have to be converted to relative positions, relating to the div
				
		if(self.zoom < 2.5) 
		{
			
			// console.log("Zoom In");
			var scaling = 5.9 - self.zoom; // 100% increase
		
			self.translationAccX -= Zx*scaling;
		
			self.translationAccY -= Zy*scaling;
		
			if(self.zoom < 6) 
			{
		
				self.zoom += scaling;
		
				var translate = 'translate('+self.translationAccX+'px, '+self.translationAccY+'px)';
				
				var scale = 'scale(' + self.zoom + ',' + self.zoom + ')';	
				//console.log(scale);
			
			
			
				$(testbed.div).css('transform', translate+scale);
							
			}
		}
		else
		{
			
			// console.log("Zoom In");
			var scaling = -self.zoom + 0.9; // 100% increase
		
			self.translationAccX -= Zx*scaling;
		
			self.translationAccY -= Zy*scaling;
		
			if(self.zoom > 1) 
			{
		
				self.zoom += scaling;
		
				var translate = 'translate('+self.translationAccX+'px, '+self.translationAccY+'px)';
				
				var scale = 'scale(' + self.zoom + ',' + self.zoom + ')';	
				//console.log(scale);
			
			
				$(testbed.div).css('transform', translate+scale);
							
			}
			
		}

		
		
	
	/*self.testfieldBeforeX = x;
	self.testfieldBeforeY = y;*/
	
	//alert("x, " + x + " y: " + y);	
	}


this.init = function()
	{
	testbed = this;
		
	if (config.div) self.div = "#" + config.div;
	if (config.wheel) self.init_wheel();

		
	$(self.div).dblclick(function(event){
		self.zoom_event(event);	
		});	
		

	}	
	
self.init();	
}






var testbed;

$(document).ready(function () {
	
 /*	
 config = {};
 config.div = "testbed";	
 config.wheel = true;
	
	
		
 testbed = new Zoomer.Zoom(config);	
 */
	
});	