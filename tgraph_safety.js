
TopicModel = {};


var material =  '[{"prob":[0.00632927079265329,0.00471478367701397,0.00372575579756795,0.00365025120644119,0.00364463395216892,0.00359808784209107,0.00310132642559519,0.00298469420078765,0.00294812302241372,0.00279519995703327,0.00277629025463881,0.0026495865052525,0.00262100608911546,0.0025839881397999,0.0025261860938328,0.00242517787885734,0.00241134868821397,0.0023458706907789,0.00219607810364118,0.00218394657903981],"word":["minutes","rhubarb","heat","water","calle","butter","black","sauce","city","peeled","couple","good","ground","simmer","gently","stock","remove","daily","serve","well"]},{"prob":[0.0139790530964537,0.0132754637012214,0.00803204985294426,0.00741902291822805,0.00655355213968973,0.00640055731180597,0.00616243747025469,0.00605435596990592,0.00557913657662458,0.00514366231009646,0.00453207167986629,0.00450716866215978,0.00341631372998913,0.00339051783843018,0.00330108407811991,0.00325837716651099,0.00322006689697643,0.00320685803382876,0.00319605704293881,0.003059310677816],"word":["french","said","mali","troops","town","president","today","last","military","forces","army","malian","islamist","france","fighting","groups","reports","rebels","soldiers","islamists"]},{"prob":[0.00530040819511812,0.00480552705461786,0.00472190054303574,0.00449545900239313,0.00391732889652761,0.00379420889253035,0.00352093732587097,0.00324417910697083,0.00307757786331739,0.00304865064279928,0.00289084033148274,0.00285008380500148,0.00274839146125834,0.00248138984150815,0.00240538513898154,0.002289406437708,0.00219291778274724,0.00218259027401723,0.00217917315383368,0.00217620199631124],"word":["including","february","flights","road","route","hotel","trip","includes","offers","family","south","week","price","person","heathrow","gatwick","north","airport","national","doubles"]},{"prob":[0.0110914723083525,0.010066633717283,0.00771873672616696,0.00703869504746136,0.00663725303360775,0.00615448068485698,0.00519275578597659,0.00512790996878338,0.00507100300793615,0.00486506755877024,0.00395561731417067,0.00391372947743261,0.00385890996700951,0.00377671865896223,0.00369697824811803,0.00369319679381557,0.00366376280615986,0.00345159877612498,0.00343020293904998,0.00303906003207852],"word":["will","snow","said","manchester","airport","east","weather","london","north","england","across","south","travel","conditions","stansted","rescue","passengers","fire","week","airports"]},{"prob":[0.0122292341752943,0.0119410244872518,0.0113340722056078,0.0102177180437571,0.00969060571435769,0.00968082987674352,0.00865777931334659,0.00861646223378658,0.00811492038557059,0.0076924010362842,0.00691201399032829,0.00634199064879776,0.00571927868868827,0.00571044830826438,0.00570007008879512,0.00563308761475729,0.0055336157974618,0.00526843654468339,0.00516940289197763,0.00503127781162598],"word":["people","will","also","just","last","time","said","first","years","like","back","much","think","year","around","london","many","even","says","take"]},{"prob":[0.0137531278957545,0.0108269403384596,0.00809709325420665,0.00710572898461391,0.00684248865349919,0.00671105266148281,0.00646229254970801,0.00616089254626431,0.00538447002801819,0.0050996995034993,0.00467571262076614,0.00456436147971792,0.00451573771036026,0.0039542030622422,0.00345016188208675,0.00344262213821673,0.00342382768074646,0.00336134521890335,0.00328663775284647,0.00301432778406114],"word":["bank","banks","barclays","businesses","financial","companies","will","business","small","firms","rates","interest","review","rate","annuity","executive","pension","money","inflation","industry"]},{"prob":[0.0146147596753638,0.012239068871014,0.0119284580727651,0.00680613590491305,0.00644972834650483,0.00531087153350125,0.00496069710609891,0.0047079338199428,0.00460747266935029,0.00422778961663543,0.00409530081126014,0.003763424238273,0.00342213116473837,0.00340371265401661,0.00337684300025306,0.00333143988234146,0.00324644310537117,0.00321619709285453,0.00321166536888666,0.00314460389074892],"word":["said","will","government","secretary","minister","plans","cameron","budget","david","defence","conservative","spending","ministers","vote","party","commitment","future","plan","statement","george"]},{"prob":[0.0264642357084197,0.0208192558676081,0.0095641323320876,0.00687947567213691,0.00655340973584196,0.00624808970698858,0.00494172642560628,0.00456265839466787,0.00438809086273434,0.00412947788621177,0.00387960217675757,0.00377291350216057,0.00369988107724872,0.00368203706106709,0.00361866385888289,0.00355462792830656,0.00342597904427818,0.00331097305956584,0.00328314004163483,0.00324972507585304],"word":["police","said","court","public","officers","told","information","case","chief","alleged","investigation","child","women","arrested","today","crime","legal","abuse","senior","security"]},{"prob":[0.0185941950680967,0.00751446465914726,0.00549130504536048,0.0049163696552402,0.00475871719722759,0.00447934119108503,0.00432915442717256,0.0043096383262772,0.00429681694626191,0.00410484350597619,0.0040396677963853,0.00364461045207691,0.00356561719360619,0.00345826450114349,0.00339072202244456,0.00316877693205822,0.00311983808025898,0.00309402896386149,0.00302457066506176,0.00294833708885124],"word":["said","building","people","found","died","killed","shot","helicopter","children","yearold","pemex","shooting","workers","attack","nearby","scene","theatre","city","explosion","polio"]},{"prob":[0.00989494339616245,0.00751959030122922,0.00555813176083462,0.00508032536827609,0.00503390420408766,0.00400750663570117,0.00383092758430945,0.00352152217435903,0.0034983191854818,0.00345300104602229,0.00342718921392664,0.00338571682143563,0.00325905648408108,0.0028577954463708,0.00285559379444452,0.00284924700629998,0.00283553772750417,0.00283285988711523,0.00270249018671568,0.00267471833904575],"word":["language","welsh","english","jessie","london","wales","road","scotland","languages","state","gaelic","minority","family","cornish","southall","alec","england","northern","ireland","main"]},{"prob":[0.0185886430175615,0.0142762124732242,0.0092467697990979,0.00867781209180849,0.0076877656445279,0.00713279294832637,0.00631121053229775,0.00580740524932359,0.00514270930828435,0.00471026948151417,0.00468390621252898,0.00453225907617907,0.00448297745901686,0.00423755939764632,0.00420239380534503,0.00416003552792791,0.00414817694044936,0.00378489126926856,0.00376373868326901,0.00355157473964369],"word":["said","algerian","british","hostages","militants","plant","workers","terrorists","attack","foreign","algeria","died","reported","people","crisis","minister","group","killed","still","amenas"]},{"prob":[0.00613014736183123,0.00571966254273675,0.00562697584508787,0.0049831061953618,0.0042904960698129,0.00428770344174074,0.00405740618053352,0.00403329967508547,0.0037556249103874,0.00342748128206757,0.00340867143170387,0.00298489192391643,0.00292158276993663,0.00288694037180662,0.0028363845094913,0.00281300920410228,0.00278550092160993,0.00269123235874317,0.00245897637425472,0.0024525359471046],"word":["players","final","liverpool","match","wisdom","murray","league","team","game","played","djokovic","winning","grand","season","robson","playing","tickets","football","slam","chelsea"]},{"prob":[0.00626876416282145,0.00557208435530023,0.00454758902217158,0.00377113671598269,0.00345610392362547,0.00336331969539153,0.0033559307360956,0.00310963475945634,0.00309134500666187,0.00305127005445889,0.00303790669291353,0.00303454973369594,0.00300157985788415,0.0028969932356025,0.00271298543441733,0.00257256050006163,0.00238090654579121,0.00230284042241964,0.00209883253212289,0.00203598016171028],"word":["batteries","google","said","battery","migrants","aircraft","lithium","treacy","data","fire","safety","experts","hats","skin","boeing","planes","make","airbus","moisturiser","users"]},{"prob":[0.0111869576655309,0.008892990453395,0.00812878277281924,0.00427645466925534,0.00401632118589225,0.00388975364493353,0.00315227161366447,0.00309271965601402,0.0030650390632752,0.00285518662055667,0.00256495442743534,0.00243667839229592,0.00237676840889795,0.00212360623903419,0.0020843461047008,0.00204508971542791,0.0020354667774001,0.0019985284014028,0.00199845002847924,0.00198409384241184],"word":["party","golden","dawn","violence","members","toys","children","partys","rise","greek","leader","youth","nationalist","youths","elections","immigrants","schools","teachers","became","political"]},{"prob":[0.00454734337317938,0.00327059452443294,0.00319379586582181,0.00318812671820237,0.00312943577984399,0.00303203782687393,0.0029838428573783,0.00291586223670922,0.00285809041262343,0.00283476722869156,0.00283300544389885,0.00278442430790227,0.00271785495599091,0.00270302263738721,0.00262384804750812,0.00257375236381356,0.00249965807537851,0.00235837334223206,0.00231600950088487,0.00226193669230071],"word":["trust","book","jane","hunt","special","twitter","unit","ampe","christmas","serious","decision","darcy","care","department","south","lewisham","pride","lizzie","local","books"]},{"prob":[0.00838563529977121,0.00646605754030633,0.00634386863595058,0.00596631327749204,0.00543153734993281,0.00502877762026879,0.00422712603445174,0.00379798307626161,0.00329940603359644,0.00308333962783968,0.00301921639989167,0.00285009917892944,0.00283059067223273,0.00261475265692675,0.00237415439240125,0.0023439133657766,0.0023078047814922,0.00224314101091927,0.00221103756863332,0.00218861800097394],"word":["news","media","television","world","channel","former","interview","american","sports","countries","football","armstrong","british","editor","modern","qatar","broadcast","deal","religion","evidence"]},{"prob":[0.0233097246435289,0.0146695199821287,0.0110733357089895,0.00833275541356144,0.00787840822529123,0.00744784508547138,0.00726550440522359,0.00717828175865156,0.00598212034486446,0.00597649906398144,0.00595680163789997,0.00559463520278074,0.00485460600108118,0.00465846955463346,0.00460768284381147,0.00427945494427225,0.0039481222446455,0.00384922313965082,0.00373365251821896,0.00353667007506757],"word":["cent","year","shares","sales","last","said","group","company","executive","business","market","chief","will","investors","price","share","target","growth","trading","stock"]},{"prob":[0.0162895697851347,0.0134210111199883,0.0108226762618467,0.00842484053426133,0.00630683230851285,0.00573202698187199,0.00541140624071881,0.00508939742176474,0.00491288595480718,0.00481765932616602,0.00439908652430182,0.00414436547498066,0.00406670853577481,0.00351887384841767,0.00327404545692544,0.00321701336183756,0.00313345092495527,0.00308019995001823,0.00290369529843504,0.00279930615831637],"word":["food","said","products","meat","horse","used","ireland","beef","tesco","also","found","supplier","will","company","burgers","issue","including","standards","tests","traces"]},{"prob":[0.00514049735843388,0.00503851637510428,0.00444338709129825,0.00422829907342404,0.00401116518342766,0.00338735657472754,0.00321332742032569,0.00316209915167626,0.00304098954769169,0.00291260752321926,0.00290490812235955,0.00286215440531676,0.00271731483903071,0.00267079132954527,0.00262494279559403,0.00238142618839528,0.00234442831053381,0.00231954976360515,0.00230935236403663,0.00229914231832361],"word":["love","music","year","women","album","queen","phillips","died","band","name","born","married","girls","star","friend","father","show","vidler","female","live"]},{"prob":[0.0101106441003494,0.00832471826702488,0.00752604793439218,0.00738252739636147,0.00695284494387417,0.00662885410198863,0.00580724578130695,0.0034525882707648,0.00344649586361582,0.00344585520987091,0.00339225743124046,0.00338524600705462,0.00321848252063683,0.00317247422819397,0.00310986128124621,0.0029308759519529,0.00288766192561869,0.0028009936424427,0.00275801088949568,0.00274252848274718],"word":["cent","said","areas","children","local","report","prices","childcare","families","species","britain","cost","national","number","increase","evidence","will","agency","found","school"]}]';


TopicModel.Sample = function()
{
this.new_list = [];
this.mega_list = [];


var self = this;



this.create_list = function()
    {
    var list = ["Martin", "Ferdinand", "Konrad", "Peter", "Paul", "Anton", "Wilhelm", "Kurt", "Anja", "Petra", "Sabina", "Anna", "Lisa"];
    var second = [];

    for (var i = 0; i < list.length; i++)
        {
        var o = {};
        o.str         = list[i];
        o.weight     = Math.random() * 160 + 10;

        second.push(o);

        }

    return second;
    }

this.init = function()
    {
    for (var i = 0; i < 20; i++)
        {
        self.mega_list.push ( self.create_list() );
        }
    }

self.init();
}



/////////////////////////////////////////////////////////////////////////////////////////////////
var tmGraph;

TopicModel.Graph = function(config)
{
var self = this;
this.div = "body";
this.width     = 800;
this.height = 600;

this.iterator = 0;

this.list = [];

this.timestep = 1000;


this.initial_values = function()
    {
    if (config.div)
        {
        self.div = "#" + config.div;

        self.width =  $(self.div).width() ;
        self.height = $(self.div).height() ;
        

        
        
        }
      
    if (config.timestep) self.timestep = config.timestep;
    }


this.pid = null;

this.start_loop = function()
	{
	var s = "tm.play()";
	self.pid = window.setInterval(s, self.timestep);	
	}


this.play = function()
    {
	self.iterator ++;

	var list = self.list[self.iterator];
	
	for (var i = 0; i < list.length; i++)
		{
		var w = list[i].weight;
		console.log(w);
		
		var id = "#t_0_" + i;	

		console.log(id);	
		
		$(id).animate({
			fontSize: w
		}, self.timestep*0.96);
		
		}
	
	console.log(self.iterator);
    }


this.stop = function()
    {

    }


this.random_position = function()
    {

    obj = {};
    obj.x = Math.random() * self.width;
    
    console.log(obj.x);
    
    obj.y = Math.random() * self.height;
    return obj;    
    }



this.position_check = function()
	{
		
	}


this.grid_position = function(topic_id)
	{
	var line = 0; 
	var size = 5;

	if (topic_id >= size) line = Math.floor( topic_id / size);
	

	var x_elem = topic_id % size;
	var y_elem = line;
	
	
	var grid_w 	= self.width / 5;
	var grid_h = self.height / 4;
	 
	var grid = {};
	grid.x 		= grid_w * x_elem;
	grid.y 		= grid_h * line;
	grid.width	= grid_w;
	grid.height = grid_h;
	
 	return grid;	
	}


this.t_random_position = function(topic_id)
    {
	var grid = self.grid_position(topic_id);
	

    obj = {};
    obj.x = Math.random() * grid.width*0.9 + grid.x;
    
    console.log(obj.x);
    
    obj.y = Math.random() * grid.height*0.9 + grid.y;
    return obj;    
    }



this.display = function(topic_id, list)
    {   	
    for (var i = 0; i < list.length; i++)
        {
		o = self.random_position(topic_id);
		
		
		var id = "t_" + topic_id + "_" + i;
		
		var s = '<div id = "' + id + '" class = "word">' + list[i].str + '</div>';
		
		$(self.div).append(s);
		
		var w = parseInt(list[i].weight);

		
		$("#" + id).css({
			left: o.x,
			top:  o.y,
			fontSize: w,
		});
		
        }
            
    }

////////////////////////////////////////////////////////////////
this.topics = [];


this.random_color = function()
	{
	var r = parseInt( Math.random() * 128) + 127;
	var g = parseInt( Math.random() * 128) + 127;	
	var b = parseInt( Math.random() * 128) + 127;
	
	var col = "rgb(" + r + "," + g + "," + b + ")";
	return col;	
	}

this.morph_topic = function(no)
	{
	// for (var i = 0; i <  self.topics[no].prob.length; i++)
	for (var i = 0; i <  self.topics[no].prob.length; i++)
		 {
		 var id 			= "t_" + no + "_" + i;	
		 var weight 		= 6 + self.topics[no].prob[i]*2000;
		 
		 var opacity = 1;
		
		 var font_family = "Impact";
		
		 if (weight < 20) opacity = 0.8;
		
		 if (weight < 15)
			{ 
			opacity = 0.6;
			font_family = "Arial";
			} 	
		 	
		
		 
		 
		 $("#" + id).animate({
			fontSize: weight,
			opacity: opacity
		 }, 1500);	
		 
		 	
		 }	
	}




this.paint_topic  = function(no)
	{	
	var color = self.random_color();
		
	for (var i = 0; i <  self.topics[no].prob.length; i++)
		{
		o = self.t_random_position(no);
		
		var id = "t_" + no + "_" + i;	
		var word 		= self.topics[no].word[i];
		var weight 		= 6 + self.topics[no].prob[i]*2000;
		
		
		
		var opacity = 1;
		
		var font_family = "Arial";
		
		if (weight < 20) opacity = 0.66;
		
		if (weight < 15)
			{ 
			opacity = 0.4;
			font_family = "Arial";
			} 
		
		
		var topic_name = "topic_" + no;
		
		
		var s = '<div id = "' + id + '" class = "word">' + word + '</div>';
		
		$(self.div).append(s);
		
		
		
		if (weight < 20) $("#" + id).addClass(topic_name);
		
		
		if (weight < 15) $("#" + id).addClass("mabuse");
		
		
		$("#" + id).css({
			left: o.x,
			top:  o.y,
			fontSize: weight,
			color: color,
			fontFamily: font_family,
		});		
		

		}
	
	}


this.paint_grid = function(topic_id)
	{
	var topic_name = "grid" + topic_id;	
	
	var line = 0; 
	var size = 5;

	if (topic_id >= size) line = Math.floor( topic_id / size);
	

	var x_elem = topic_id % size;
	var y_elem = line;
	
	
	var grid_w 	= self.width / 5;
	var grid_h = self.height / 4;
	
	
	grid_x 		= grid_w * x_elem;
	grid_y 		= grid_h * line;
	
	
	var s = '<div class = "grid" id = "' + topic_name + '"></div>';
	
	$(self.div).append(s);
	
	
	var grid = self.grid_position(topic_id);
	
	$("#" + topic_name).css({
		
		width: 		grid_w,
		height:  	grid_h,
		top: 		grid_y,
		left:		grid_x,
		
	});
	
	
	var tp = ".topic_" + topic_id;
	
	$("#" + topic_name).mouseover(function(){

		$(tp).animate({
			opacity: 1
		}, 300)
	  	
	});


	$("#" + topic_name).mouseout(function(){

		$(tp).animate({
			opacity: 0.22
		}, 800)
		
	});


	
	}






this.target_topics = null;

this.target_topics = function()
	{
	self.target_topics = JSON.parse( material );	
		
	for (var i = 0; i < self.target_topics.length; i++)
		{
		topic = self.topics[i];
		var x = parseInt(Math.random()* 20);	
		self.target_topics[i].prob =  self.topics[x].prob; 			
		}	
		
	}




this.read_topics = function()
	{
	self.topics = JSON.parse( material );
	
	for (var i = 0; i < self.topics.length; i++)
		{
		self.paint_topic(i);
		self.paint_grid(i);
		}
	
	}



this.next_topics = function()
	{
	self.topics = self.target_topics;	
		
	for (var i = 0; i < self.topics.length; i++)
		{		
		self.morph_topic(i);

		}		
	}



this.init = function()
    {
	
    tmGraph = this;

    t = new TopicModel.Sample();
    self.list = t.mega_list;

    self.initial_values();
    
    self.read_topics();
    
    
    
    // self.target_topics();
    // self.next_topics();
    
    // self.display( 0, self.list[0] )
	// self.start_loop();

    }

self.init();
}




///////////////////////////////////////////////////////////////////////////////////////////////////////

TopicModel.Helper = function()
{
var self = this;	
	
this.random_color = function()
	{
	var r = parseInt( Math.random() * 128) + 127;
	var g = parseInt( Math.random() * 128) + 127;	
	var b = parseInt( Math.random() * 128) + 127;
	
	var col = "rgb(" + r + "," + g + "," + b + ")";
	return col;	
	}
	
	

	
	
this.arc = function(center, radius, startAngle, endAngle) {
      angle = startAngle;
      coords = obj.toCoords(center, radius, angle);
      path = "M " + coords[0] + " " + coords[1];
      while(angle<=endAngle) {
          coords = obj.toCoords(center, radius, angle);
          path += " L " + coords[0] + " " + coords[1];
          angle += 1;
      }
      
      return path;
  }


this.toCoords = function(center, radius, angle) {
      var radians = (angle/180) * Math.PI;
      var x = center[0] + Math.cos(radians) * radius;
      var y = center[1] + Math.sin(radians) * radius;
      return [x, y];
  }

	
this.random_position = function(x, y, radius, angle)
	{	
	var p = self.toCoords([x,y], radius, angle)

	return p;
	}
	
	
	
}



TopicModel.SpatialGraph = function(config)
{
var self = this;
this.mega_list = [];

this.helper;


this.clean_docs = function()
	{
	for (var i = 0; i < 1; i++)
		{
		var docs = tm.mega_list[i].docs;
		for (var j = 0; j < docs.length; j++)
			{
			var title = docs[j].title;
			var title = title.replace(/'/g, "\\'");
			console.log(str);
			}
		}	
	}


this.paint_word = function(topic_id, word_id, word)
	{
	var name = "t_" + topic_id + "_" + word_id;

	pos = self.helper.random_position([attributes.left, attributes.top])
		
	}



this.topic_list = [];
this.word_list = [];



this.hide_document_view = function()
	{
	var x = document.getElementById("Dokumente");
	if (x)
		{
			
		$("#Dokumente").slideUp();	
		}	
	}


this.background_click = function(cond)
	{
	if(cond == true)
		{
		$(self.div).bind('click', function() {
  			
  			self.hide_document_view();
  			
		});
		
		
		
		}
	else
		{
		$(tm.div).unbind('click');
		}
	
	}



this.paint_topics = function()
	{
	var topic_total = 0;
	for (var i = 0; i < self.mega_list.length; i++)
		{
		// topic_total += 	self.mega_list[i].no_docs;
		topic_total += 	self.mega_list[i].docs.length;
		}		
		
		
	for (var i = 0; i < self.mega_list.length; i++)
		{
		var name = "topic_" + i;	
		
		var s = '<div class = "topic_grid" id = "' + name + '"></div>';
		$(self.div).append(s);
		
		
		self.topic_list.push("#" + name);

		
		
		var left = self.mega_list[i].x * $(self.div).width();
		var top  = self.mega_list[i].y * $(self.div).height();
		
		var color = self.helper.random_color();

		self.mega_list[i].weight = 0.01 + (self.mega_list[i].docs.length / topic_total);

		// KONTROLLE
		// alert("Aktuell " + i + " Gewicht " + self.mega_list[i].weight + " Anzahl Docs" + self.mega_list[i].no_docs + " Gesamt " + topic_total);


		var size = self.mega_list[i].weight*1500 + "px";
		var sz = self.mega_list[i].weight*1500*0.5;
		
		var topic_weight = sz / 10;
		
		
		var bColor = color.replace(")", ",0.5)");
		bColor = bColor.replace("rgb", "rgba");

		
		$("#" + name).attr("topic_id", i);
		
		
		$("#" + name).css({
		left: left - sz,	
		top: top - sz,		
		background: bColor,
		width: size,
		height: size,
		})		


		$("#" + name).mouseover(function(){
			var id = $(this).attr("topic_id");
			console.log("Topic " + id);

			var tclass = ".topic_" + id;
			$(tclass).addClass("active_element");

			var d = new Date().getTime();
			$(this).attr("timestamp", d);

			var scale = 'scale(2,2)';	
			$(this).animate({
  				transform: scale
			}, function(){
				
				self.background_click(false);
			});

		});

		
		$("#" + name).mouseout(function(){
			var id = $(this).attr("topic_id");
			var tclass = ".topic_" + id;
			$(tclass).removeClass("active_element");


			var scale = 'scale(1,1)';	
			$(this).animate({
  				transform: scale
			}, function(){
				
			 self.background_click(true);	
			});

		});		
		
		
		
		
		
		
		
		
		
		$("#" + name).click(function(){
			var id = $(this).attr("topic_id");
			self.show_documents(id);
		});
		
		
		
		// Die Wörter
		
		for (var j = 0; j < self.mega_list[i].words.length; j++)
			{
			var w = self.mega_list[i].words[j];
			w.topic_weight = topic_weight;
			
			
			var wname = "t_" + i + "_" + j;

			var twidth = $("#" + name).width();


			var p = self.helper.toCoords([twidth*0.42, twidth*0.37], sz*1.5, j*47);
			var weight = (Math.pow(w.prob, 0.5) * 1000) + topic_weight + 3;

			
			var tclass = "topic_" + i;
			
			
			var s = '<div class = "word ' + tclass + '" id = "' + wname + '">' + w.word + '</div>';
			// $(self.div).append(s);
			$("#" + name).append(s);
			
			
			this.word_list.push("#" + wname);
			
			
			
			$("#" + wname).css({
				left: p[0],
				top:  p[1],
				color: color,
				fontSize: weight,
			})
			

		    // self.paint_word(i, j, w);
			
			
			}
		


		for (var j = 0; j < self.mega_list[i].words.length; j++)
			{
			var w = self.mega_list[i].words[j];
			var wname = "t_" + i + "_" + j;	
			var wd = $("#" + wname).width();
			
			var pos = parseInt( $("#" + wname).position().left );
			pos -= wd*0.5;
			
			$("#" + wname).css( "left", pos);
			}
	
			
		}	
	}




this.old_paint_topics = function()
	{
	var topic_total = 0;
	for (var i = 0; i < self.mega_list.length; i++)
		{
		// topic_total += 	self.mega_list[i].no_docs;
		topic_total += 	self.mega_list[i].docs.length;
		}		
		
		
	for (var i = 0; i < self.mega_list.length; i++)
		{
		var name = "topic_" + i;	
		
		var s = '<div class = "topic_grid" id = "' + name + '"></div>';
		$(self.div).append(s);
		
		var left = self.mega_list[i].x * $(self.div).width();
		var top  = self.mega_list[i].y * $(self.div).height();
		
		var color = self.helper.random_color();

		self.mega_list[i].weight = 0.01 + (self.mega_list[i].docs.length / topic_total);

		// KONTROLLE
		// alert("Aktuell " + i + " Gewicht " + self.mega_list[i].weight + " Anzahl Docs" + self.mega_list[i].no_docs + " Gesamt " + topic_total);


		var size = self.mega_list[i].weight*1500 + "px";
		var sz = self.mega_list[i].weight*1500*0.5;
		
		var topic_weight = sz / 10;
		
		
		var bColor = color.replace(")", ",0.5)");
		bColor = bColor.replace("rgb", "rgba");

		
		$("#" + name).attr("topic_id", i);
		
		
		
		
		$("#" + name).css({
		left: left - sz,	
		top: top - sz,		
		background: bColor,
		width: size,
		height: size,
		})		


		$("#" + name).mouseover(function(){
			var id = $(this).attr("topic_id");
			console.log("Topic " + id);

			var tclass = ".topic_" + id;
			$(tclass).addClass("active_element");

		});

		
		$("#" + name).mouseout(function(){
			var id = $(this).attr("topic_id");
			var tclass = ".topic_" + id;
			$(tclass).removeClass("active_element");

		});		
		
		
		
		$("#" + name).click(function(){
			var id = $(this).attr("topic_id");
			self.show_documents(id);
		});
		
		
		for (var j = 0; j < self.mega_list[i].words.length; j++)
			{
			var w = self.mega_list[i].words[j];
			w.topic_weight = topic_weight;
			
			
			var name = "t_" + i + "_" + j;


			var p = self.helper.toCoords([left,top], sz*1.5, j*47);
			var weight = (Math.pow(w.prob, 0.5) * 1000) + topic_weight + 3;

			
			var tclass = "topic_" + i;
			
			
			var s = '<div class = "word ' + tclass + '" id = "' + name + '">' + w.word + '</div>';
			$(self.div).append(s);
			
			
			
			$("#" + name).css({
				left: p[0],
				top:  p[1],
				color: color,
				fontSize: weight,
			})
			

		    // self.paint_word(i, j, w);
			
			
			}
		


		for (var j = 0; j < self.mega_list[i].words.length; j++)
			{
			var w = self.mega_list[i].words[j];
			var name = "t_" + i + "_" + j;	
			var wd = $("#" + name).width();
			
			var pos = parseInt( $("#" + name).position().left );
			pos -= wd*0.5;
			
			$("#" + name).css( "left", pos);
			}
	
			
		}	
	}



this.show_documents = function(id)
	{

	docs = self.mega_list[id].docs;
	
	var x = document.getElementById("Dokumente");
	var s = "";
	
	if (!x)
		{
		s = '<div id = "Dokumente">';
		  s += '<div id = "DokumenteHeader">';
			s += '<div class = "dexit">X</div>';		
		  s += '</div>';
		  
		  
		  s += '<div id = "DokumentePreview">';			  
		  s += '<div id = "DokumentePreviewContainer"></div>';		
		  s += '</div>';
		  
		  s += '<div id = "DokumenteContainer"></div>';		
		  
		  // s += '<div id = "DokumenteHandler"></div>';		  
		  
		s += '</div>';
		
		
		s += '<div id = "DocumentView">';
		s += '<div id = "DocumentViewHeader">';

		s += '<div class = "doc_exit">X</div>';		
		s += '</div>';		
		
		
		s += '<div id = "DocumentViewContainer"></div>';
		s += '</div>';
		$(self.div).append(s);	
		
		$(".doc_exit").click(function(){
			$("#DocumentView").hide();	
		});
		
		$(".dexit").click(function(){
			$("#DocumentView").hide();	
			$("#Dokumente").slideUp();	
		});		
		
		
		$("#Dokumente").mouseout(function(){
			console.log("verschwinde");
		});		
		
		$("#DokumenteHeader").click(function(){
			$("#Dokumente").slideUp();	
		});			
		
		
		
		
		$("#DokumenteHandler").click(function(){
			var  w = window.innerWidth;
			
			if ($("#Dokumente").position().left < window.innerWidth  )
				{
				/// 	
				$("#Dokumente").animate({
					left: w	
				});
				
				
				/// 
				}
				else
				{
				$("#Dokumente").animate({
					left: w*0.75
					
					});	
				}
				
			
		});			
		
		
		
		}
	
	
	var tx = "";
	for (var i = 0; i < docs.length; i++)
		{
		var js 		= 'javascript:tm.show_doc(\'' + docs[i].url + '\',\''   + docs[i].title + '\')';
		var js2 	= 'javascript:tm.preview_doc(\'' + docs[i].url + '\',\''   + docs[i].title + '\')';		
		
		
		
		// alert(js);	
		tx += '<div onmouseover = "' + js2 + '" onclick = "' + js + '" class = "doklink">' + docs[i].title + '</div>';	
		}		
		

	$("#DokumenteContainer").html(tx);
	
	// $("#DocumentView").show();
	 // $("#Dokumente").css("width", window.innerWidth*0.75);
	 $("#Dokumente").slideDown();	
	
	}



this.preview_doc = function(url, title)
	{
	$("#DokumentePreviewContainer").html(title);
	}

this.show_doc = function(url, title)
	{	
	$("#DocumentView").show();
		
	var s = '<iframe src="' +  url + '" width= "100%" height= "100%"></iframe>';
	$("#DocumentViewContainer").html(s);
	}


this.monthNames =  ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

this.forward = function()
	{
	self.empty_screen();	
		
	self.start_time = self.start_time + 86400000;
	self.setTime();	
	}


this.setTime = function()
	{
	var d = new Date(self.start_time);
	var day = d.getDate();
	var month = d.getMonth();
	month = self.monthNames[month];
	
	var year = d.getFullYear();
	
	
	$("#actual_day").html(day);
	$("#actual_month").html(month);	
	$("#actual_year").html(year);		
	}


this.backward = function()
	{
	self.start_time = self.start_time - 86400000;
	self.setTime(); 
	}


this.navigation = function()
	{
	$("#left_arrow").click(function(){	
	 self.backward();
	});
	
	$("#right_arrow").click(function(){	
	self.forward();	
	});		


	$("#search").click(function(){	
	self.search();	
	});
		
	}


this.search = function()
	{
	alert("sollte eine Suche starten");	
	}


this.background_design = function()
	{
	var spalten = 12;
	var counter = 0;

    var toff = 30;
    var loff = 20;
    var w = window.innerWidth / spalten;
    var lines = Math.floor( window.innerHeight / w);

     
    var zeile = 0; 
        
    // alert(lines);
	var s = "";
	
	for (var i = 0; i < w*lines; i++)
		{
		var name = "gridno_" + i;
		var s = '<div id = "' + name + '" class = "crosshair">+</div>';
		$(self.div).append(s);	

		
		counter ++;
		
		if (i % spalten == 0 && i != 0) 
			{
			counter = 0;
			zeile ++;
			}


		
		var left = (counter * w) + loff;		
		var top  = (zeile * w) + toff; 
		
		$("#" + name).css({
		 left: left,	
		 top: top,
		});
		
		}	
	}


this.get_random_element = function()
	{
	var s = ["sensation.txt", "prism.txt", "crisis.txt"];
	var i =parseInt(  Math.random() * s.length);
	
	return s[i];	
	}


this.empty_screen = function()
	{	
	for (var i = 0; i < self.topic_list.length; i++)
		{
		$(self.topic_list[i]).remove();	
		}	
		
		
	self.topic_list.length 	= 0;
	self.mega_list.length 	= 0;
	
	
	text = self.get_random_element();
	
	var jason = $.getJSON(text, function(data) {
  		console.log( "success" );
	
		self.mega_list = data;
		self.paint_topics();
	})
	
	}



this.word_display = function(cond)
	{		
	for (var i = 0; i < self.word_list.length; i++)
		{
		if (cond == true) $(self.word_list[i]).show();	
		else 			  $(self.word_list[i]).hide() ;	
		}	
	}


this.filter = function(type)
	{
	switch(type)
		{
		case "words":
			var w = self.word_list[0];
			if (  $(w).css("display") == "block") 
				{
				self.word_display(false);	
				}
			else self.word_display(true);
			
		break;	
		}	
	}



this.start_time = 0;

this.init_time = function()
	{
	self.start_time = new Date("1/31/2013").getTime();	
	}


this.init = function()
	{
	self.helper = new TopicModel.Helper();	
	self.div = "#" + config.div;	
	
	self.background_design();
	self.navigation();

	self.init_time();
	
	
	
	
	
	

	var jason = $.getJSON( "prism.txt", function(data) {
  		console.log( "success" );
	
		self.mega_list = data;
		self.paint_topics();
	})
	
		
		

		
		
	}





self.init();	
}











var tm;

$(document).ready(function() {

var config = {};
config.div = "testfield";
config.timestep = 2000;

tm = new TopicModel.SpatialGraph( config );


});





