/*
2013 October 23
*/



/* DHX DEPEND FROM FILE 'assert.js'*/


if (!window.dhtmlx) 
	dhtmlx={};

//check some rule, show message as error if rule is not correct
dhtmlx.assert = function(test, message){
	if (!test)	dhtmlx.error(message);
};
dhtmlx.assert_enabled=function(){ return false; };

//register names of event, which can be triggered by the object
dhtmlx.assert_event = function(obj, evs){
	if (!obj._event_check){
		obj._event_check = {};
		obj._event_check_size = {};
	}
		
	for (var a in evs){
		obj._event_check[a.toLowerCase()]=evs[a];
		var count=-1; for (var t in evs[a]) count++;
		obj._event_check_size[a.toLowerCase()]=count;
	}
};
dhtmlx.assert_method_info=function(obj, name, descr, rules){
	var args = [];
	for (var i=0; i < rules.length; i++) {
		args.push(rules[i][0]+" : "+rules[i][1]+"\n   "+rules[i][2].describe()+(rules[i][3]?"; optional":""));
	}
	return obj.name+"."+name+"\n"+descr+"\n Arguments:\n - "+args.join("\n - ");
};
dhtmlx.assert_method = function(obj, config){
	for (var key in config)
		dhtmlx.assert_method_process(obj, key, config[key].descr, config[key].args, (config[key].min||99), config[key].skip);
};
dhtmlx.assert_method_process = function (obj, name, descr, rules, min, skip){
	var old = obj[name];
	if (!skip)
		obj[name] = function(){
			if (arguments.length !=	rules.length && arguments.length < min) 
				dhtmlx.log("warn","Incorrect count of parameters\n"+obj[name].describe()+"\n\nExpecting "+rules.length+" but have only "+arguments.length);
			else
				for (var i=0; i<rules.length; i++)
					if (!rules[i][3] && !rules[i][2](arguments[i]))
						dhtmlx.log("warn","Incorrect method call\n"+obj[name].describe()+"\n\nActual value of "+(i+1)+" parameter: {"+(typeof arguments[i])+"} "+arguments[i]);
			
			return old.apply(this, arguments);
		};
	obj[name].describe = function(){	return dhtmlx.assert_method_info(obj, name, descr, rules);	};
};
dhtmlx.assert_event_call = function(obj, name, args){
	if (obj._event_check){
		if (!obj._event_check[name])
			dhtmlx.log("warn","Not expected event call :"+name);
		else if (dhtmlx.isNotDefined(args))
			dhtmlx.log("warn","Event without parameters :"+name);
		else if (obj._event_check_size[name] != args.length)
			dhtmlx.log("warn","Incorrect event call, expected "+obj._event_check_size[name]+" parameter(s), but have "+args.length +" parameter(s), for "+name+" event");
	}		
};
dhtmlx.assert_event_attach = function(obj, name){
	if (obj._event_check && !obj._event_check[name]) 
			dhtmlx.log("warn","Unknown event name: "+name);
};
//register names of properties, which can be used in object's configuration
dhtmlx.assert_property = function(obj, evs){
	if (!obj._settings_check)
		obj._settings_check={};
	dhtmlx.extend(obj._settings_check, evs);		
};
//check all options in collection, against list of allowed properties
dhtmlx.assert_check = function(data,coll){
	if (typeof data == "object"){
		for (var key in data){
			dhtmlx.assert_settings(key,data[key],coll);
		}
	}
};
//check if type and value of property is the same as in scheme
dhtmlx.assert_settings = function(mode,value,coll){
	coll = coll || this._settings_check;

	//if value is not in collection of defined ones
	if (coll){
		if (!coll[mode])	//not registered property
			return dhtmlx.log("warn","Unknown propery: "+mode);
			
		var descr = "";
		var error = "";
		var check = false;
		for (var i=0; i<coll[mode].length; i++){
			var rule = coll[mode][i];
			if (typeof rule == "string")
				continue;
			if (typeof rule == "function")
				check = check || rule(value);
			else if (typeof rule == "object" && typeof rule[1] == "function"){
				check = check || rule[1](value);
				if (check && rule[2])
					dhtmlx["assert_check"](value, rule[2]); //temporary fix , for sources generator
			}
			if (check) break;
		}
		if (!check )
			dhtmlx.log("warn","Invalid configuration\n"+dhtmlx.assert_info(mode,coll)+"\nActual value: {"+(typeof value)+"} "+value);
	}
};

dhtmlx.assert_info=function(name, set){ 
	var ruleset = set[name];
	var descr = "";
	var expected = [];
	for (var i=0; i<ruleset.length; i++){
		if (typeof rule == "string")
			descr = ruleset[i];
		else if (ruleset[i].describe)
			expected.push(ruleset[i].describe());
		else if (ruleset[i][1] && ruleset[i][1].describe)
			expected.push(ruleset[i][1].describe());
	}
	return "Property: "+name+", "+descr+" \nExpected value: \n - "+expected.join("\n - ");
};


if (dhtmlx.assert_enabled()){
	
	dhtmlx.assert_rule_color=function(check){
		if (typeof check != "string") return false;
		if (check.indexOf("#")!==0) return false;
		if (check.substr(1).replace(/[0-9A-F]/gi,"")!=="") return false;
		return true;
	};
	dhtmlx.assert_rule_color.describe = function(){
		return "{String} Value must start from # and contain hexadecimal code of color";
	};
	
	dhtmlx.assert_rule_template=function(check){
		if (typeof check == "function") return true;
		if (typeof check == "string") return true;
		return false;
	};
	dhtmlx.assert_rule_template.describe = function(){
		return "{Function},{String} Value must be a function which accepts data object and return text string, or a sting with optional template markers";
	};
	
	dhtmlx.assert_rule_boolean=function(check){
		if (typeof check == "boolean") return true;
		return false;
	};
	dhtmlx.assert_rule_boolean.describe = function(){
		return "{Boolean} true or false";
	};
	
	dhtmlx.assert_rule_object=function(check, sub){
		if (typeof check == "object") return true;
		return false;
	};
	dhtmlx.assert_rule_object.describe = function(){
		return "{Object} Configuration object";
	};
	
	
	dhtmlx.assert_rule_string=function(check){
		if (typeof check == "string") return true;
		return false;
	};
	dhtmlx.assert_rule_string.describe = function(){
		return "{String} Plain string";
	};
	
	
	dhtmlx.assert_rule_htmlpt=function(check){
		return !!dhtmlx.toNode(check);
	};
	dhtmlx.assert_rule_htmlpt.describe = function(){
		return "{Object},{String} HTML node or ID of HTML Node";
	};
	
	dhtmlx.assert_rule_notdocumented=function(check){
		return false;
	};
	dhtmlx.assert_rule_notdocumented.describe = function(){
		return "This options wasn't documented";
	};
	
	dhtmlx.assert_rule_key=function(obj){
		var t = function (check){
			return obj[check];
		};
		t.describe=function(){
			var opts = [];
			for(var key in obj)
				opts.push(key);
			return  "{String} can take one of next values: "+opts.join(", ");
		};
		return t;
	};
	
	dhtmlx.assert_rule_dimension=function(check){
		if (check*1 == check && !isNaN(check) && check >= 0) return true;
		return false;
	};
	dhtmlx.assert_rule_dimension.describe=function(){
		return "{Integer} value must be a positive number";
	};
	
	dhtmlx.assert_rule_number=function(check){
		if (typeof check == "number") return true;
		return false;
	};
	dhtmlx.assert_rule_number.describe=function(){
		return "{Integer} value must be a number";
	};
	
	dhtmlx.assert_rule_function=function(check){
		if (typeof check == "function") return true;
		return false;
	};
	dhtmlx.assert_rule_function.describe=function(){
		return "{Function} value must be a custom function";
	};
	
	dhtmlx.assert_rule_any=function(check){
		return true;
	};
	dhtmlx.assert_rule_any.describe=function(){
		return "Any value";
	};
	
	dhtmlx.assert_rule_mix=function(a,b){
		var t = function(check){
			if (a(check)||b(check)) return true;
			return false;
		};
		t.describe = function(){
			return a.describe();
		};
		return t;
	};

}


/* DHX DEPEND FROM FILE 'dhtmlx.js'*/


/*DHX:Depend assert.js*/

/*
	Common helpers
*/
dhtmlx.version="3.0";
dhtmlx.codebase="./";

//coding helpers

dhtmlx.copy = function(source){
	var f = dhtmlx.copy._function;
	f.prototype = source;
	return new f();
};
dhtmlx.copy._function = function(){};

//copies methods and properties from source to the target
dhtmlx.extend = function(target, source){
	for (var method in source)
		target[method] = source[method];
		
	//applying asserts
	if (dhtmlx.assert_enabled() && source._assert){
		target._assert();
		target._assert=null;
	}
	
	dhtmlx.assert(target,"Invalid nesting target");
	dhtmlx.assert(source,"Invalid nesting source");
	//if source object has init code - call init against target
	if (source._init)	
		target._init();
				
	return target;	
};
dhtmlx.proto_extend = function(){
	var origins = arguments;
	var compilation = origins[0];
	var construct = [];
	
	for (var i=origins.length-1; i>0; i--) {
		if (typeof origins[i]== "function")
			origins[i]=origins[i].prototype;
		for (var key in origins[i]){
			if (key == "_init") 
				construct.push(origins[i][key]);
			else if (!compilation[key])
				compilation[key] = origins[i][key];
		}
	};
	
	if (origins[0]._init)
		construct.push(origins[0]._init);
	
	compilation._init = function(){
		for (var i=0; i<construct.length; i++)
			construct[i].apply(this, arguments);
	};
	compilation.base = origins[1];
	var result = function(config){
		this._init(config);
		if (this._parseSettings)
			this._parseSettings(config, this.defaults);
	};
	result.prototype = compilation;
	
	compilation = origins = null;
	return result;
};
//creates function with specified "this" pointer
dhtmlx.bind=function(functor, object){ 
	return function(){ return functor.apply(object,arguments); };  
};

//loads module from external js file
dhtmlx.require=function(module){
	if (!dhtmlx._modules[module]){
		dhtmlx.assert(dhtmlx.ajax,"load module is required");
		
		//load and exec the required module
		dhtmlx.exec( dhtmlx.ajax().sync().get(dhtmlx.codebase+module).responseText );
		dhtmlx._modules[module]=true;	
	}
};
dhtmlx._modules = {};	//hash of already loaded modules

//evaluate javascript code in the global scoope
dhtmlx.exec=function(code){
	if (window.execScript)	//special handling for IE
		window.execScript(code);
	else window.eval(code);
};

/*
	creates method in the target object which will transfer call to the source object
	if event parameter was provided , each call of method will generate onBefore and onAfter events
*/
dhtmlx.methodPush=function(object,method,event){
	return function(){
		var res = false;
		//if (!event || this.callEvent("onBefore"+event,arguments)){ //not used anymore, probably can be removed
			res=object[method].apply(object,arguments);
		//	if (event) this.callEvent("onAfter"+event,arguments);
		//}
		return res;	//result of wrapped method
	};
};
//check === undefined
dhtmlx.isNotDefined=function(a){
	return typeof a == "undefined";
};
//delay call to after-render time
dhtmlx.delay=function(method, obj, params, delay){
	setTimeout(function(){
		var ret = method.apply(obj,params);
		method = obj = params = null;
		return ret;
	},delay||1);
};

//common helpers

//generates unique ID (unique per window, nog GUID)
dhtmlx.uid = function(){
	if (!this._seed) this._seed=(new Date).valueOf();	//init seed with timestemp
	this._seed++;
	return this._seed;
};
//resolve ID as html object
dhtmlx.toNode = function(node){
	if (typeof node == "string") return document.getElementById(node);
	return node;
};
//adds extra methods for the array
dhtmlx.toArray = function(array){ 
	return dhtmlx.extend((array||[]),dhtmlx.PowerArray);
};
//resolve function name
dhtmlx.toFunctor=function(str){ 
	return (typeof(str)=="string") ? eval(str) : str; 
};

//dom helpers

//hash of attached events
dhtmlx._events = {};
//attach event to the DOM element
dhtmlx.event=function(node,event,handler,master){
	node = dhtmlx.toNode(node);
	
	var id = dhtmlx.uid();
	dhtmlx._events[id]=[node,event,handler];	//store event info, for detaching
	
	if (master) 
		handler=dhtmlx.bind(handler,master);	
		
	//use IE's of FF's way of event's attaching
	if (node.addEventListener)
		node.addEventListener(event, handler, false);
	else if (node.attachEvent)
		node.attachEvent("on"+event, handler);

	return id;	//return id of newly created event, can be used in eventRemove
};

//remove previously attached event
dhtmlx.eventRemove=function(id){
	
	if (!id) return;
	dhtmlx.assert(this._events[id],"Removing non-existing event");
		
	var ev = dhtmlx._events[id];
	//browser specific event removing
	if (ev[0].removeEventListener)
		ev[0].removeEventListener(ev[1],ev[2],false);
	else if (ev[0].detachEvent)
		ev[0].detachEvent("on"+ev[1],ev[2]);
		
	delete this._events[id];	//delete all traces
};


//debugger helpers
//anything starting from error or log will be removed during code compression

//add message in the log
dhtmlx.log = function(type,message,details){
	if (window.console && console.log){
		type=type.toLowerCase();
		if (window.console[type])
			window.console[type](message||"unknown error");
		else
			window.console.log(type +": "+message);
		if (details) 
			window.console.log(details);
	}	
};
//register rendering time from call point 
dhtmlx.log_full_time = function(name){
	dhtmlx._start_time_log = new Date();
	dhtmlx.log("Info","Timing start ["+name+"]");
	window.setTimeout(function(){
		var time = new Date();
		dhtmlx.log("Info","Timing end ["+name+"]:"+(time.valueOf()-dhtmlx._start_time_log.valueOf())/1000+"s");
	},1);
};
//register execution time from call point
dhtmlx.log_time = function(name){
	var fname = "_start_time_log"+name;
	if (!dhtmlx[fname]){
		dhtmlx[fname] = new Date();
		dhtmlx.log("Info","Timing start ["+name+"]");
	} else {
		var time = new Date();
		dhtmlx.log("Info","Timing end ["+name+"]:"+(time.valueOf()-dhtmlx[fname].valueOf())/1000+"s");
		dhtmlx[fname] = null;
	}
};
//log message with type=error
dhtmlx.error = function(message,details){
	dhtmlx.log("error",message,details);
};
//event system
dhtmlx.EventSystem={
	_init:function(){
		this._events = {};		//hash of event handlers, name => handler
		this._handlers = {};	//hash of event handlers, ID => handler
		this._map = {};
	},
	//temporary block event triggering
	block : function(){
		this._events._block = true;
	},
	//re-enable event triggering
	unblock : function(){
		this._events._block = false;
	},
	mapEvent:function(map){
		dhtmlx.extend(this._map, map);
	},
	//trigger event
	callEvent:function(type,params){
		if (this._events._block) return true;
		
		type = type.toLowerCase();
		dhtmlx.assert_event_call(this, type, params);
		
		var event_stack =this._events[type.toLowerCase()];	//all events for provided name
		var return_value = true;

		if (dhtmlx.debug)	//can slowdown a lot
			dhtmlx.log("info","["+this.name+"] event:"+type,params);
		
		if (event_stack)
			for(var i=0; i<event_stack.length; i++)
				/*
					Call events one by one
					If any event return false - result of whole event will be false
					Handlers which are not returning anything - counted as positive
				*/
				if (event_stack[i].apply(this,(params||[]))===false) return_value=false;
				
		if (this._map[type] && !this._map[type].callEvent(type,params))
			return_value =	false;
			
		return return_value;
	},
	//assign handler for some named event
	attachEvent:function(type,functor,id){
		type=type.toLowerCase();
		dhtmlx.assert_event_attach(this, type);
		
		id=id||dhtmlx.uid(); //ID can be used for detachEvent
		functor = dhtmlx.toFunctor(functor);	//functor can be a name of method

		var event_stack=this._events[type]||dhtmlx.toArray();
		//save new event handler
		event_stack.push(functor);
		this._events[type]=event_stack;
		this._handlers[id]={ f:functor,t:type };
		
		return id;
	},
	//remove event handler
	detachEvent:function(id){
		if(this._handlers[id]){
			var type=this._handlers[id].t;
			var functor=this._handlers[id].f;
			
			//remove from all collections
			var event_stack=this._events[type];
			event_stack.remove(functor);
			delete this._handlers[id];
		}
	} 
};

//array helper
//can be used by dhtmlx.toArray()
dhtmlx.PowerArray={
	//remove element at specified position
	removeAt:function(pos,len){
		if (pos>=0) this.splice(pos,(len||1));
	},
	//find element in collection and remove it 
	remove:function(value){
		this.removeAt(this.find(value));
	},	
	//add element to collection at specific position
	insertAt:function(data,pos){
		if (!pos && pos!==0) 	//add to the end by default
			this.push(data);
		else {	
			var b = this.splice(pos,(this.length-pos));
  			this[pos] = data;
  			this.push.apply(this,b); //reconstruct array without loosing this pointer
  		}
  	},  	
  	//return index of element, -1 if it doesn't exists
  	find:function(data){ 
  		for (i=0; i<this.length; i++) 
  			if (data==this[i]) return i; 	
  		return -1; 
  	},
  	//execute some method for each element of array
  	each:function(functor,master){
		for (var i=0; i < this.length; i++)
			functor.call((master||this),this[i]);
	},
	//create new array from source, by using results of functor 
	map:function(functor,master){
		for (var i=0; i < this.length; i++)
			this[i]=functor.call((master||this),this[i]);
		return this;
	}
};

dhtmlx.env = {};

//environment detection
if (navigator.userAgent.indexOf('Opera') != -1)
	dhtmlx._isOpera=true;
else{
	//very rough detection, but it is enough for current goals
	dhtmlx._isIE=!!document.all;
	dhtmlx._isFF=!document.all;
	dhtmlx._isWebKit=(navigator.userAgent.indexOf("KHTML")!=-1);
	if (navigator.appVersion.indexOf("MSIE 8.0")!= -1 && document.compatMode != "BackCompat") 
		dhtmlx._isIE=8;
	if (navigator.appVersion.indexOf("MSIE 9.0")!= -1 && document.compatMode != "BackCompat") 
		dhtmlx._isIE=9;
}

dhtmlx.env = {};

// dhtmlx.env.transform 
// dhtmlx.env.transition
(function(){
	dhtmlx.env.transform = false;
	dhtmlx.env.transition = false;
	var options = {};
	options.names = ['transform', 'transition'];
	options.transform = ['transform', 'WebkitTransform', 'MozTransform', 'oTransform','msTransform'];
	options.transition = ['transition', 'WebkitTransition', 'MozTransition', 'oTransition'];
	
	var d = document.createElement("DIV");
	var property;
	for(var i=0; i<options.names.length; i++) {
		while (p = options[options.names[i]].pop()) {
			if(typeof d.style[p] != 'undefined')
				dhtmlx.env[options.names[i]] = true;
		}
	}
})();
dhtmlx.env.transform_prefix = (function(){
		var prefix;
		if(dhtmlx._isOpera)
			prefix = '-o-';
		else {
			prefix = ''; // default option
			if(dhtmlx._isFF) 
				prefix = '-moz-';
			if(dhtmlx._isWebKit) 
					prefix = '-webkit-';
		}
		return prefix;
})();
dhtmlx.env.svg = (function(){
		return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
})();

//store maximum used z-index
dhtmlx.zIndex={ drag : 10000 };

//html helpers
dhtmlx.html={
	create:function(name,attrs,html){
		attrs = attrs || {};
		var node = document.createElement(name);
		for (var attr_name in attrs)
			node.setAttribute(attr_name, attrs[attr_name]);
		if (attrs.style)
			node.style.cssText = attrs.style;
		if (attrs["class"])
			node.className = attrs["class"];
		if (html)
			node.innerHTML=html;
		return node;
	},
	//return node value, different logic for different html elements
	getValue:function(node){
		node = dhtmlx.toNode(node);
		if (!node) return "";
		return dhtmlx.isNotDefined(node.value)?node.innerHTML:node.value;
	},
	//remove html node, can process an array of nodes at once
	remove:function(node){
		if (node instanceof Array)
			for (var i=0; i < node.length; i++)
				this.remove(node[i]);
		else
			if (node && node.parentNode)
				node.parentNode.removeChild(node);
	},
	//insert new node before sibling, or at the end if sibling doesn't exist
	insertBefore: function(node,before,rescue){
		if (!node) return;
		if (before)
			before.parentNode.insertBefore(node, before);
		else
			rescue.appendChild(node);
	},
	//return custom ID from html element 
	//will check all parents starting from event's target
	locate:function(e,id){
		e=e||event;
		var trg=e.target||e.srcElement;
		while (trg){
			if (trg.getAttribute){	//text nodes has not getAttribute
				var test = trg.getAttribute(id);
				if (test) return test;
			}
			trg=trg.parentNode;
		}	
		return null;
	},
	//returns position of html element on the page
	offset:function(elem) {
		if (elem.getBoundingClientRect) { //HTML5 method
			var box = elem.getBoundingClientRect();
			var body = document.body;
			var docElem = document.documentElement;
			var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
			var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
			var clientTop = docElem.clientTop || body.clientTop || 0;
			var clientLeft = docElem.clientLeft || body.clientLeft || 0;
			var top  = box.top +  scrollTop - clientTop;
			var left = box.left + scrollLeft - clientLeft;
			return { y: Math.round(top), x: Math.round(left) };
		} else { //fallback to naive approach
			var top=0, left=0;
			while(elem) {
				top = top + parseInt(elem.offsetTop,10);
				left = left + parseInt(elem.offsetLeft,10);
				elem = elem.offsetParent;
			}
			return {y: top, x: left};
		}
	},
	//returns position of event
	pos:function(ev){
		ev = ev || event;
        if(ev.pageX || ev.pageY)	//FF, KHTML
            return {x:ev.pageX, y:ev.pageY};
        //IE
        var d  =  ((dhtmlx._isIE)&&(document.compatMode != "BackCompat"))?document.documentElement:document.body;
        return {
                x:ev.clientX + d.scrollLeft - d.clientLeft,
                y:ev.clientY + d.scrollTop  - d.clientTop
        };
	},
	//prevent event action
	preventEvent:function(e){
		if (e && e.preventDefault) e.preventDefault();
		dhtmlx.html.stopEvent(e);
	},
	//stop event bubbling
	stopEvent:function(e){
		(e||event).cancelBubble=true;
		return false;
	},
	//add css class to the node
	addCss:function(node,name){
        node.className+=" "+name;
    },
    //remove css class from the node
    removeCss:function(node,name){
        node.className=node.className.replace(RegExp(name,"g"),"");
    }
};

//autodetect codebase folder
(function(){
	var temp = document.getElementsByTagName("SCRIPT");	//current script, most probably
	dhtmlx.assert(temp.length,"Can't locate codebase");
	if (temp.length){
		//full path to script
		temp = (temp[temp.length-1].getAttribute("src")||"").split("/");
		//get folder name
		temp.splice(temp.length-1, 1);
		dhtmlx.codebase = temp.slice(0, temp.length).join("/")+"/";
	}
})();

if (!dhtmlx.ui)
	dhtmlx.ui={};


/* DHX DEPEND FROM FILE 'date.js'*/


/*DHX:Depend dhtmlx.js*/

dhtmlx.Date={
	Locale: {
		month_full:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		month_short:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		day_full:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    	day_short:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },

	date_part:function(date){
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);	
		return date;
	},
	time_part:function(date){
		return (date.valueOf()/1000 - date.getTimezoneOffset()*60)%86400;
	},
	week_start:function(date){
			var shift=date.getDay();
			if (this.config.start_on_monday){
				if (shift===0) shift=6;
				else shift--;
			}
			return this.date_part(this.add(date,-1*shift,"day"));
	},
	month_start:function(date){
		date.setDate(1);
		return this.date_part(date);
	},
	year_start:function(date){
		date.setMonth(0);
		return this.month_start(date);
	},
	day_start:function(date){
			return this.date_part(date);
	},
	add:function(date,inc,mode){
		var ndate=new Date(date.valueOf());
		switch(mode){
			case "day": ndate.setDate(ndate.getDate()+inc); break;
			case "week": ndate.setDate(ndate.getDate()+7*inc); break;
			case "month": ndate.setMonth(ndate.getMonth()+inc); break;
			case "year": ndate.setYear(ndate.getFullYear()+inc); break;
			case "hour": ndate.setHours(ndate.getHours()+inc); break;
			case "minute": ndate.setMinutes(ndate.getMinutes()+inc); break;
			default:
				return dhtmlx.Date["add_"+mode](date,inc,mode);
		}
		return ndate;
	},
	to_fixed:function(num){
		if (num<10)	return "0"+num;
		return num;
	},
	copy:function(date){
		return new Date(date.valueOf());
	},
	date_to_str:function(format,utc){
		format=format.replace(/%[a-zA-Z]/g,function(a){
			switch(a){
				case "%d": return "\"+dhtmlx.Date.to_fixed(date.getDate())+\"";
				case "%m": return "\"+dhtmlx.Date.to_fixed((date.getMonth()+1))+\"";
				case "%j": return "\"+date.getDate()+\"";
				case "%n": return "\"+(date.getMonth()+1)+\"";
				case "%y": return "\"+dhtmlx.Date.to_fixed(date.getFullYear()%100)+\""; 
				case "%Y": return "\"+date.getFullYear()+\"";
				case "%D": return "\"+dhtmlx.Date.Locale.day_short[date.getDay()]+\"";
				case "%l": return "\"+dhtmlx.Date.Locale.day_full[date.getDay()]+\"";
				case "%M": return "\"+dhtmlx.Date.Locale.month_short[date.getMonth()]+\"";
				case "%F": return "\"+dhtmlx.Date.Locale.month_full[date.getMonth()]+\"";
				case "%h": return "\"+dhtmlx.Date.to_fixed((date.getHours()+11)%12+1)+\"";
				case "%g": return "\"+((date.getHours()+11)%12+1)+\"";
				case "%G": return "\"+date.getHours()+\"";
				case "%H": return "\"+dhtmlx.Date.to_fixed(date.getHours())+\"";
				case "%i": return "\"+dhtmlx.Date.to_fixed(date.getMinutes())+\"";
				case "%a": return "\"+(date.getHours()>11?\"pm\":\"am\")+\"";
				case "%A": return "\"+(date.getHours()>11?\"PM\":\"AM\")+\"";
				case "%s": return "\"+dhtmlx.Date.to_fixed(date.getSeconds())+\"";
				case "%W": return "\"+dhtmlx.Date.to_fixed(dhtmlx.Date.getISOWeek(date))+\"";
				default: return a;
			}
		});
		if (utc) format=format.replace(/date\.get/g,"date.getUTC");
		return new Function("date","return \""+format+"\";");
	},
	str_to_date:function(format,utc){
		var splt="var temp=date.split(/[^0-9a-zA-Z]+/g);";
		var mask=format.match(/%[a-zA-Z]/g);
		for (var i=0; i<mask.length; i++){
			switch(mask[i]){
				case "%j":
				case "%d": splt+="set[2]=temp["+i+"]||1;";
					break;
				case "%n":
				case "%m": splt+="set[1]=(temp["+i+"]||1)-1;";
					break;
				case "%y": splt+="set[0]=temp["+i+"]*1+(temp["+i+"]>50?1900:2000);";
					break;
				case "%g":
				case "%G":
				case "%h": 
				case "%H":
							splt+="set[3]=temp["+i+"]||0;";
					break;
				case "%i":
							splt+="set[4]=temp["+i+"]||0;";
					break;
				case "%Y":  splt+="set[0]=temp["+i+"]||0;";
					break;
				case "%a":					
				case "%A":  splt+="set[3]=set[3]%12+((temp["+i+"]||'').toLowerCase()=='am'?0:12);";
					break;					
				case "%s":  splt+="set[5]=temp["+i+"]||0;";
					break;
			}
		}
		var code ="set[0],set[1],set[2],set[3],set[4],set[5]";
		if (utc) code =" Date.UTC("+code+")";
		return new Function("date","var set=[0,0,1,0,0,0]; "+splt+" return new Date("+code+");");
	},
		
	getISOWeek: function(ndate) {
		if(!ndate) return false;
		var nday = ndate.getDay();
		if (nday === 0) {
			nday = 7;
		}
		var first_thursday = new Date(ndate.valueOf());
		first_thursday.setDate(ndate.getDate() + (4 - nday));
		var year_number = first_thursday.getFullYear(); // year of the first Thursday
		var ordinal_date = Math.floor( (first_thursday.getTime() - new Date(year_number, 0, 1).getTime()) / 86400000); //ordinal date of the first Thursday - 1 (so not really ordinal date)
		var week_number = 1 + Math.floor( ordinal_date / 7);	
		return week_number;
	},
	
	getUTCISOWeek: function(ndate){
   	return this.getISOWeek(ndate);
   }
};



/* DHX DEPEND FROM FILE 'destructor.js'*/


/*
	Behavior:Destruction
	
	@export
		destructor
*/

/*DHX:Depend dhtmlx.js*/

dhtmlx.Destruction = {
	_init:function(){
		//register self in global list of destructors
		dhtmlx.destructors.push(this);
	},
	//will be called automatically on unload, can be called manually
	//simplifies job of GC
	destructor:function(){
		this.destructor=function(){}; //destructor can be called only once
		
		//html collection
		this._htmlmap  = null;
		this._htmlrows = null;
		
		//temp html element, used by toHTML
		if (this._html)
			document.body.appendChild(this._html);	//need to attach, for IE's GC

		this._html = null;
		if (this._obj) {
			this._obj.innerHTML="";
			this._obj._htmlmap = null;
		}
		this._obj = this._dataobj=null;
		this.data = null;
		this._events = this._handlers = {};
	}
};
//global list of destructors
dhtmlx.destructors = [];
dhtmlx.event(window,"unload",function(){
	//call all registered destructors
	if (dhtmlx.destructors){
		for (var i=0; i<dhtmlx.destructors.length; i++)
			dhtmlx.destructors[i].destructor();
		dhtmlx.destructors = [];
	}
	
	//detach all known DOM events
	for (var a in dhtmlx._events){
		var ev = dhtmlx._events[a];
		if (ev[0].removeEventListener)
			ev[0].removeEventListener(ev[1],ev[2],false);
		else if (ev[0].detachEvent)
			ev[0].detachEvent("on"+ev[1],ev[2]);
		delete dhtmlx._events[a];
	}
});


/* DHX DEPEND FROM FILE 'math.js'*/


dhtmlx.math = {};
dhtmlx.math._toHex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
dhtmlx.math.toHex = function(number, length){
	number=parseInt(number,10);
	str = "";
		while (number>0){
			str=this._toHex[number%16]+str;
			number=Math.floor(number/16);
		}
		while (str.length <length)
			str = "0"+str;
	return str;
};
dhtmlx.math.hexToDec = function(hex){
   	return parseInt(hex, 16);
};
dhtmlx.math.toRgb = function(rgb){
   	var r,g,b,rgbArr;
   	if (typeof(rgb) != 'string') {
    	r = rgb[0];
       	g = rgb[1];
       	b = rgb[2];
   	} else if (rgb.indexOf('rgb')!=-1) {
		rgbArr = rgb.substr(rgb.indexOf("(")+1,rgb.lastIndexOf(")")-rgb.indexOf("(")-1).split(",");
	   	r = rgbArr[0];
	   	g = rgbArr[1];
	   	b = rgbArr[2];
   	} else {
       	if (rgb.substr(0, 1) == '#') {
        	rgb = rgb.substr(1);
       	}
       	r = this.hexToDec(rgb.substr(0, 2));
       	g = this.hexToDec(rgb.substr(2, 2));
       	b = this.hexToDec(rgb.substr(4, 2));
   	}
   	r = (parseInt(r,10)||0);
   	g = (parseInt(g,10)||0);
   	b = (parseInt(b,10)||0);
   	if (r < 0 || r > 255)
      	r = 0;
   	if (g < 0 || g > 255)
      	g = 0;
   	if (b < 0 || b > 255)
      	b = 0;
   	return [r,g,b];
}
dhtmlx.math.hsvToRgb = function(h, s, v){
	var hi,f,p,q,t,r,g,b;
   	hi = Math.floor((h/60))%6;
   	f = h/60-hi;
   	p = v*(1-s);
   	q = v*(1-f*s);
   	t = v*(1-(1-f)*s);
   	r = 0;
   	g = 0;
   	b = 0;
   	switch(hi) {
    	case 0:
        	r = v; g = t; b = p;
         	break;
      	case 1:
        	r = q; g = v; b = p;
         	break;
      	case 2:
        	r = p; g = v; b = t;
        	 break;
      	case 3:
        	r = p; g = q; b = v;
        	break;
      	case 4:
        	r = t; g = p; b = v;
        	break;
      	case 5:
        	r = v; g = p; b = q;
         	break;
   	}
    r = Math.floor(r*255);
    g = Math.floor(g*255);
    b = Math.floor(b*255);
    return [r, g, b];
};
dhtmlx.math.rgbToHsv = function(r, g, b){
   	var r0,g0,b0,min0,max0,s,h,v;
   	r0 = r/255;
   	g0 = g/255;
   	b0 = b/255;
   	var min0 = Math.min(r0, g0, b0);
   	var max0 = Math.max(r0, g0, b0);
   	h = 0;
   	s = max0==0?0:(1-min0/max0);
   	v = max0;
   	if (max0 == min0) {
   		h = 0;
   	} else if (max0 == r0 && g0>=b0) {
    	h = 60*(g0 - b0)/(max0 - min0)+0;
   	} else if (max0 == r0 && g0 < b0) {
    	h = 60*(g0 - b0)/(max0 - min0)+360;
   	} else if (max0 == g0) {
      	h = 60*(b0 - r0)/(max0-min0)+120;
   	} else if (max0 == b0) {
      	h = 60*(r0 - g0)/(max0 - min0)+240;
   	}
   	return [h, s, v];
}




/* DHX DEPEND FROM FILE 'ext/chart/presets.js'*/


/*chart presents*/
if(!dhtmlx.presets)
    dhtmlx.presets = {};
dhtmlx.presets.chart = {
    "simple":{
        item:{
            borderColor: "#ffffff",
            color: "#2b7100",
            shadow: false,
            borderWidth:2
        },
		line:{
			color:"#8ecf03",
            width:2
		}
    },
    "plot":{
        color:"#1293f8",
        item:{
            borderColor:"#636363",
            borderWidth:1,
            color: "#ffffff",
            type:"r",
            shadow: false
        },
	    line:{
			color:"#1293f8",
            width:2
	    }
    },
    "diamond":{
        color:"#b64040",
        item:{
			borderColor:"#b64040",
			color: "#b64040",
            type:"d",
            radius:3,
            shadow:true
        },
		line:{
			color:"#ff9000",
            width:2
		}
    },
    "point":{
        color:"#fe5916",
		disableLines:true,
        fill:false,
        disableItems:false,
        item:{
            color:"#feb916",
            borderColor:"#fe5916",
            radius:2,
            borderWidth:1,
            type:"r"
	    },
        alpha:1
    },
    "line":{
        line:{
            color:"#3399ff",
            width:2
        },
        item:{
            color:"#ffffff",
            borderColor:"#3399ff",
            radius:2,
            borderWidth:2,
            type:"d"
        },
        fill:false,
        disableItems:false,
        disableLines:false,
        alpha:1
    },
    "area":{
        fill:"#3399ff",
        line:{
            color:"#3399ff",
            width:1
        },
        disableItems:true,
        alpha: 0.2,
        disableLines:false
    },
    "round":{
        item:{
            radius:3,
            borderColor:"#3f83ff",
            borderWidth:1,
            color:"#3f83ff",
            type:"r",
            shadow:false,
            alpha:0.6
        }
    },
    "square":{
         item:{
            radius:3,
            borderColor:"#447900",
            borderWidth:2,
            color:"#69ba00",
            type:"s",
            shadow:false,
            alpha:1
        }
    },
    /*bar*/
    "column":{
        color:"RAINBOW",
        gradient:false,
        width:45,
        radius:0,
        alpha:1,
        border:true
    },
    "stick":{
        width:5,
        gradient:false,
		color:"#67b5c9",
        radius:2,
        alpha:1,
        border:false
    },
    "alpha":{
        color:"#b9a8f9",
        width:70,
        gradient:"falling",
        radius:0,
        alpha:0.5,
        border:true
    }
};



/* DHX DEPEND FROM FILE 'map.js'*/


/*DHX:Depend dhtmlx.js*/
	
dhtmlx.ui.Map = function(key){
	this.name = "Map";
	this._id = "map_"+dhtmlx.uid();
	this._key = key;
	this._map = [];
};
dhtmlx.ui.Map.prototype = {
	addRect: function(id,points,userdata) {
		this._createMapArea(id,"RECT",points,userdata);
	},
	addPoly: function(id,points,userdata) {
		this._createMapArea(id,"POLY",points,userdata);
	},
	_createMapArea:function(id,shape,coords,userdata){
		var extra_data = "";
		if(arguments.length==4) 
			extra_data = "userdata='"+userdata+"'";
		this._map.push("<area "+this._key+"='"+id+"' shape='"+shape+"' coords='"+coords.join()+"' "+extra_data+"></area>");
	},
	addSector:function(id,alpha0,alpha1,x,y,R,ky,userdata){
		var points = [];
		points.push(x);
		points.push(Math.floor(y*ky)); 
		for(var i = alpha0; i < alpha1; i+=Math.PI/18){
			points.push(Math.floor(x+R*Math.cos(i)));
			points.push(Math.floor((y+R*Math.sin(i))*ky));
		}
		points.push(Math.floor(x+R*Math.cos(alpha1)));
		points.push(Math.floor((y+R*Math.sin(alpha1))*ky));
		points.push(x);
		points.push(Math.floor(y*ky)); 
		
		return this.addPoly(id,points,userdata);
	},
	render:function(obj){
		var d = dhtmlx.html.create("DIV");
		d.style.cssText="position:absolute; width:100%; height:100%; top:0px; left:0px;";
		obj.appendChild(d);
		var src = dhtmlx._isIE?"":"src='data:image/gif;base64,R0lGODlhEgASAIAAAP///////yH5BAUUAAEALAAAAAASABIAAAIPjI+py+0Po5y02ouz3pwXADs='";
		d.innerHTML="<map id='"+this._id+"' name='"+this._id+"'>"+this._map.join("\n")+"</map><img "+src+" class='dhx_map_img' usemap='#"+this._id+"'>";
		
		obj._htmlmap = d; //for clearing routine
		
		this._map = [];
	}
};


/* DHX DEPEND FROM FILE 'ext/chart/chart_base.js'*/


/*DHX:Depend map.js*/
dhtmlx.chart = {};


/* DHX DEPEND FROM FILE 'ext/chart/chart_scatter.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.scatter = {

	/**
	*   renders a graphic
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: point0  - top left point of a chart
	*   @param: point1  - right bottom point of a chart
	*   @param: sIndex - index of drawing chart
    *   @param: map - map object
	*/
	pvt_render_scatter:function(ctx, data, point0, point1, sIndex, map){
        if(!this._settings.xValue)
            return dhtmlx.log("warning","Undefined propery: xValue");
        /*max in min values*/
        var limitsY = this._getLimits();
        var limitsX = this._getLimits("h","xValue");
        /*render scale*/
        if(!sIndex){
	        this.canvases["x"] = new dhtmlx.ui.Canvas(this._obj,"axis_x");
	        this.canvases["y"] = new dhtmlx.ui.Canvas(this._obj,"axis_y");
            this._drawYAxis(this.canvases["y"].getCanvas(),data,point0,point1,limitsY.min,limitsY.max);
		    this._drawHXAxis(this.canvases["x"].getCanvas(),data,point0,point1,limitsX.min,limitsX.max);
        }
        limitsY = {min:this._settings.yAxis.start,max:this._settings.yAxis.end};
        limitsX = {min:this._settings.xAxis.start,max:this._settings.xAxis.end};
        var params = this._getScatterParams(ctx,data,point0,point1,limitsX,limitsY);
		this._mapStart = point0;
	    for(var i=0;i<data.length;i++){
            this._drawScatterItem(ctx,map,point0, point1, params,limitsX,limitsY,data[i],sIndex);
        }
    },
    _getScatterParams:function(ctx, data, point0, point1,limitsX,limitsY){
        var params = {};
		/*available space*/
		params.totalHeight = point1.y-point0.y;
        /*available width*/
        params.totalWidth = point1.x-point0.x;
		/*unit calculation (y_position = value*unit)*/
        this._calcScatterUnit(params,limitsX.min,limitsX.max,params.totalWidth,"X");
        this._calcScatterUnit(params,limitsY.min,limitsY.max,params.totalHeight,"Y");
		return params;
    },
    _drawScatterItem:function(ctx,map,point0, point1,params,limitsX,limitsY,obj,sIndex){
        var x0 = this._calculateScatterItemPosition(params, point1, point0, limitsX, obj, "X");
        var y0 = this._calculateScatterItemPosition(params, point0, point1, limitsY, obj, "Y");
        this. _drawItem(ctx,x0,y0,obj,this._settings.label.call(this,obj),sIndex,map);
    },
    _calculateScatterItemPosition:function(params, point0, point1, limits, obj, axis){
		/*the real value of an object*/
		var value = this._settings[axis=="X"?"xValue":"value"].call(this,obj);
		/*a relative value*/
        var valueFactor = params["valueFactor"+axis];
		var v = (parseFloat(value||0) - limits.min)*valueFactor;
		/*a vertical coordinate*/
        var unit = params["unit"+axis];
		var pos = point1[axis.toLowerCase()] - (axis=="X"?(-1):1)*Math.floor(unit*v);
		/*the limit of the minimum value is  the minimum visible value*/
		if(v<0)
			pos = point1[axis.toLowerCase()];
		/*the limit of the maximum value*/
		if(value > limits.max)
			pos = point0[axis.toLowerCase()];
		/*the limit of the minimum value*/
		if(value < limits.min)
			pos = point1[axis.toLowerCase()];
        return pos;
    },
    _calcScatterUnit:function(p,min,max,size,axis){
        var relativeValues = this._getRelativeValue(min,max);
        axis = (axis||"");
		p["relValue"+axis] = relativeValues[0];
		p["valueFactor"+axis] = relativeValues[1];
		p["unit"+axis] = (p["relValue"+axis]?size/p["relValue"+axis]:10);
    }
};



/* DHX DEPEND FROM FILE 'ext/chart/chart_radar.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.radar = {
	pvt_render_radar:function(ctx,data,x,y,sIndex,map){
		this._renderRadarChart(ctx,data,x,y,sIndex,map);
		
	}, 
	/**
	*   renders a pie chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: ky - value from 0 to 1 that defines an angle of inclination (0<ky<1 - 3D chart)
	*/
	_renderRadarChart:function(ctx,data,point0,point1,sIndex,map){
		if(!data.length)
			return;
		var coord = this._getPieParameters(point0,point1);
		/*scale radius*/
		var radius = (this._settings.radius?this._settings.radius:coord.radius);
    	/*scale center*/
		var x0 = (this._settings.x?this._settings.x:coord.x);
		var y0 = (this._settings.y?this._settings.y:coord.y);
        /*angles for each unit*/
		var ratioUnits = [];
        for(var i=0;i<data.length;i++)
           ratioUnits.push(1)
		var ratios = this._getRatios(ratioUnits,data.length);
		this._mapStart = point0;
		if(!sIndex)
            this._drawRadarAxises(ratios,x0,y0,radius,data);
        this._drawRadarData(ctx,ratios,x0,y0,radius,data,sIndex,map);
	},
     _drawRadarData:function(ctx,ratios,x,y,radius,data,sIndex,map){
        var alpha0 ,alpha1, config, i, min, max, pos0, pos1, posArr,
	        r0, r1, relValue, startAlpha, value, value0, value1, valueFactor,
	        unit, unitArr;
        config = this._settings;
		/*unit calculation (item_radius_pos = value*unit)*/
        min = config.yAxis.start;
        max = config.yAxis.end;
		unitArr = this._getRelativeValue(min,max);
        relValue = unitArr[0];
		unit = (relValue?radius/relValue:radius/2);
        valueFactor = unitArr[1];

        startAlpha = -Math.PI/2;
        alpha0 =  alpha1 = startAlpha;
        posArr = [];
	    pos1 = 0;
        for(i=0;i<data.length;i++){
            if(!value1){
                value = config.value(data[i]);
                /*a relative value*/
                value0 = (parseFloat(value||0) - min)*valueFactor;
            }
            else
                value0 = value1;
            r0 = Math.floor(unit*value0);

            value = config.value((i!=(data.length-1))?data[i+1]:data[0]);
            value1 = (parseFloat(value||0) - min)*valueFactor;
            r1 = Math.floor(unit*value1);
            alpha0 = alpha1;
            alpha1 = ((i!=(data.length-1))?(startAlpha+ratios[i]-0.0001):startAlpha);
            pos0 = (pos1||this._getPositionByAngle(alpha0,x,y,r0));
            pos1 = this._getPositionByAngle(alpha1,x,y,r1);
            /*creates map area*/
			/*areaWidth  = (config.eventRadius||(parseInt(config.item.radius.call(this,data[i]),10)+config.item.borderWidth));
		    map.addRect(data[i].id,[pos0.x-areaWidth,pos0.y-areaWidth,pos0.x+areaWidth,pos0.y+areaWidth],sIndex);*/
            //this._drawLine(ctx,pos0.x,pos0.y,pos1.x,pos1.y,config.line.color.call(this,data[i]),config.line.width)
            posArr.push(pos0);
        }
         if(config.fill)
             this._fillRadarChart(ctx,posArr,data);
         if(!config.disableLines)
            this._strokeRadarChart(ctx,posArr,data);
         if(!config.disableItems)
             this._drawRadarItemMarkers(ctx,posArr,data,sIndex,map);
         posArr = null;
    },
    _drawRadarItemMarkers:function(ctx,points,data,sIndex,map){
        for(var i=0;i < points.length;i++){
            this._drawItem(ctx,points[i].x,points[i].y,data[i],this._settings.label.call(this,data),sIndex,map);
        }
    },
     _fillRadarChart:function(ctx,points,data){
        var pos0,pos1;
        ctx.globalAlpha= this._settings.alpha.call(this,{});

		ctx.beginPath();
        for(var i=0;i < points.length;i++){
            ctx.fillStyle = this._settings.fill.call(this,data[i]);
            pos0 = points[i];
            pos1 = (points[i+1]|| points[0]);
            if(!i){

                ctx.moveTo(pos0.x,pos0.y);
            }
            ctx.lineTo(pos1.x,pos1.y)
        }
         ctx.fill();
         ctx.globalAlpha=1;
    },
    _strokeRadarChart:function(ctx,points,data){
        var pos0,pos1;
        for(var i=0;i < points.length;i++){
            pos0 = points[i];
            pos1 = (points[i+1]|| points[0]);
            this._drawLine(ctx,pos0.x,pos0.y,pos1.x,pos1.y,this._settings.line.color.call(this,data[i]),this._settings.line.width)
        }
    },
    _drawRadarAxises:function(ratios,x,y,radius,data){
        var configY = this._settings.yAxis;
        var configX = this._settings.xAxis;
        var start = configY.start;
        var end = configY.end;
        var step = configY.step;
        var scaleParam= {};
        var config = this._configYAxis;
        if(typeof config.step =="undefined"||typeof config.start=="undefined"||typeof config.end =="undefined"){
            var limits = this._getLimits();
			scaleParam = this._calculateScale(limits.min,limits.max);
			start = scaleParam.start;
			end = scaleParam.end;
			step = scaleParam.step;
			configY.end = end;
			configY.start = start;
		}
        var units = [];
        var i,j,p;
        var c=0;
        var stepHeight = radius*step/(end-start);
        /*correction for small step*/
        var power,corr;
        if(step<1){
			power = Math.min(this._log10(step),(start<=0?0:this._log10(start)));
			corr = Math.pow(10,-power);
        }
        var angles = [];
	    this.canvases["scale"] =  new dhtmlx.ui.Canvas(this._obj,"radar_scale");
	    var ctx = this.canvases["scale"].getCanvas();
        for(i = end; i>=start; i -=step){
			if(scaleParam.fixNum)  i = parseFloat((new Number(i)).toFixed(scaleParam.fixNum));
            units.push(Math.floor(c*stepHeight)+ 0.5);
            if(corr){
				i = Math.round(i*corr)/corr;
			}
            var unitY = y-radius+units[units.length-1];

            this.canvases["scale"].renderTextAt("middle","left",x,unitY,
				configY.template(i.toString()),
				"dhx_axis_item_y dhx_radar"
			);
            if(ratios.length<2){
                this._drawScaleSector(ctx,"arc",x,y,radius-units[units.length-1],-Math.PI/2,3*Math.PI/2,i);
                return;
            }
            var startAlpha = -Math.PI/2;/*possibly need  to moved in config*/
            var alpha0 = startAlpha;
            var alpha1;
            for(j=0;j< ratios.length;j++){
                if(i==end)
                   angles.push(alpha0);
                alpha1 = startAlpha+ratios[j]-0.0001;
                this._drawScaleSector(ctx,(config.lineShape||"line"),x,y,radius-units[units.length-1],alpha0,alpha1,i,j,data[i]);
                alpha0 = alpha1;
            }
            c++;
        }
         /*renders radius lines and labels*/
        for(i=0;i< angles.length;i++){
            p = this._getPositionByAngle(angles[i],x,y,radius);
	        if(configX.lines.call(this,data[i],i))
                this._drawLine(ctx,x,y,p.x,p.y,(configX?configX.lineColor.call(this,data[i]):"#cfcfcf"),1);
            this._drawRadarScaleLabel(ctx,x,y,radius,angles[i],(configX?configX.template.call(this,data[i]):"&nbsp;"));
        }

    },
    _drawScaleSector:function(ctx,shape,x,y,radius,a1,a2,i,j){
         var pos1, pos2;
         if(radius<0)
            return false;
         pos1 = this._getPositionByAngle(a1,x,y,radius);
         pos2 = this._getPositionByAngle(a2,x,y,radius);
         var configY = this._settings.yAxis;
         if(configY.bg){
             ctx.beginPath();
             ctx.moveTo(x,y);
             if(shape=="arc")
                 ctx.arc(x,y,radius,a1,a2,false);
             else{
                 ctx.lineTo(pos1.x,pos1.y);
                 ctx.lineTo(pos2.x,pos2.y);
             }
             ctx.fillStyle =  configY.bg(i,j);
             ctx.moveTo(x,y);
             ctx.fill();
             ctx.closePath();
         }
         if(configY.lines.call(this,i)){
             ctx.lineWidth = 1;
             ctx.beginPath();
              if(shape=="arc")
                 ctx.arc(x,y,radius,a1,a2,false);
             else{
                 ctx.moveTo(pos1.x,pos1.y);
                 ctx.lineTo(pos2.x,pos2.y);
             }
             ctx.strokeStyle = configY.lineColor.call(this,i);
             ctx.stroke();
         }
    },
    _drawRadarScaleLabel:function(ctx,x,y,r,a,text){
         var t = this.canvases["scale"].renderText(0,0,text,"dhx_axis_radar_title",1);
         var width = t.scrollWidth;
         var height = t.offsetHeight;
         var delta = 0.001;
         var pos =  this._getPositionByAngle(a,x,y,r+5);
         var corr_x=0,corr_y=0;
         if(a<0||a>Math.PI){
             corr_y = -height;
         }
         if(a>Math.PI/2){
             corr_x = -width;
         }
         if(Math.abs(a+Math.PI/2)<delta||Math.abs(a-Math.PI/2)<delta){
            corr_x = -width/2;
         }
         else if(Math.abs(a)<delta||Math.abs(a-Math.PI)<delta){
            corr_y = -height/2;
         }
         t.style.top  = pos.y+corr_y+"px";
	     t.style.left = pos.x+corr_x+"px";
		 t.style.width = width+"px";
		 t.style.whiteSpace = "nowrap";
    }
};




/* DHX DEPEND FROM FILE 'ext/chart/chart_area.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.area = {
	/**
	*   renders an area chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: width - the width of the container
	*   @param: height - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_area:function(ctx, data, point0, point1, sIndex, map){
		var align, config, i, mapRect, obj, params, path, x, y;

		params = this._calculateLineParams(ctx,data,point0,point1,sIndex);
		config = this._settings;

		//the size of map area
		mapRect = (config.eventRadius||Math.floor(params.cellWidth/2));

		if (data.length) {

			// area points
			path = [];

			//the x position of the first item
			x = (!config.offset?point0.x:point0.x+params.cellWidth*0.5);

			/*
				iterates over all data items:
			    calculates [x,y] for area path, adds rect to chart map and renders labels
			*/
			for(i=0; i < data.length;i ++){
				obj = data[i];

				if(!i){
					path.push([x,point1.y]);
				}
				else{
					x += params.cellWidth ;
				}

				y = this._getPointY(obj,point0,point1,params);

				if(y){
					path.push([x,y]);

					//map
					map.addRect(obj.id,[x-mapRect-point0.x,y-mapRect-point0.y,x+mapRect-point0.x,y+mapRect-point0.y],sIndex);

					//labels
					if(!config.yAxis){
						align = (!config.offset&&(i == data.length-1)?"left":"center");
						this.canvases[sIndex].renderTextAt(false, align, x, y-config.labelOffset,config.label(obj));
					}
				}
				else if(!i){
					path.push([x,point1.y]);
				}
			}
			path.push([x,point1.y]);
			path.push([path[0][0],point1.y]);


			//filling area
			ctx.globalAlpha = this._settings.alpha.call(this,data[0]);
			ctx.fillStyle = this._settings.color.call(this,data[0]);
			ctx.beginPath();
			this._path(ctx,path);
			ctx.fill();

			//border
			if(config.border){
				ctx.lineWidth = config.borderWidth||1;
				if(config.borderColor)
					ctx.strokeStyle =  config.borderColor.call(this,data[0]);
				else
					this._setBorderStyles(ctx,ctx.fillStyle);

				ctx.beginPath();
				this._path(ctx,path);
				ctx.stroke();

			}
			ctx.lineWidth = 1;
			ctx.globalAlpha =1;

		}
	}
};
dhtmlx.chart.stackedArea ={
	/**
	*   renders an area chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: width - the width of the container
	*   @param: height - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_stackedArea:function(ctx, data, point0, point1, sIndex, map){
		var a0, a1, align, config, i, j, lastItem, mapRect, obj, params, path, x, y, yPos;

		params = this._calculateLineParams(ctx,data,point0,point1,sIndex);

		config = this._settings;

		/*the value that defines the map area position*/
		mapRect = (config.eventRadius||Math.floor(params.cellWidth/2));

	
		/*drawing all items*/
		if (data.length) {

			// area points
			path = [];

			// y item positions
			yPos = [];

			//the x position of the first item
			x = (!config.offset?point0.x:point0.x+params.cellWidth*0.5);


			var setOffset = function(i,y){
				return sIndex?(data[i].$startY?y-point1.y+data[i].$startY:0):y;
			};

			var solveEquation  = function(x,p0,p1){
				var k = (p1.y - p0.y)/(p1.x - p0.x);
				return  k*x + p0.y - k*p0.x;
			};

			/*
			 iterates over all data items:
			 calculates [x,y] for area path, adds rect to chart map and renders labels
			 */

			for(i=0; i < data.length;i ++){
				obj = data[i];

				if(!i){
					y =  setOffset(i,point1.y);
					path.push([x,y]);
				}
				else{
					x += params.cellWidth ;
				}

				y = setOffset(i,this._getPointY(obj,point0,point1,params));

				yPos.push((isNaN(y)&&!i)?(data[i].$startY||point1.y):y);

				if(y){
					path.push([x,y]);

					//map
					map.addRect(obj.id,[x-mapRect-point0.x,y-mapRect-point0.y,x+mapRect-point0.x,y+mapRect-point0.y],sIndex);

					//labels
					if(!config.yAxis){
						align = (!config.offset&&lastItem?"left":"center");
						this.canvases[sIndex].renderTextAt(false, align, x, y-config.labelOffset,config.label(obj));
					}
				}
			}

			// bottom right point
			path.push([x,setOffset(i-1,point1.y)]);

			// lower border from the end to start
            if(sIndex){
				for(i=data.length-2; i > 0; i --){
				    x -= params.cellWidth ;
					y =  data[i].$startY;
					if(y)
						path.push([x,y]);
				}
			}

			// go to start point
			path.push([path[0][0],path[0][1]]);

			// filling path
			ctx.globalAlpha = this._settings.alpha.call(this,data[0]);
			ctx.fillStyle = this._settings.color.call(this,data[0]);
			ctx.beginPath();
			this._path(ctx,path);
			ctx.fill();

			// set y positions of the next series
			for(i=0; i < data.length;i ++){
				y =  yPos[i];

				if(!y){
					if(i == data.length-1){
						y = data[i].$startY;
					}
					for(j =i+1; j< data.length; j++){
						if(yPos[j]){
							a0 =  {x:point0.x,y:yPos[0]};
							a1 =  {x:(point0.x+params.cellWidth*j),y:yPos[j]};
							y = solveEquation(point0.x+params.cellWidth*i,a0,a1);
							break;
						}

					}
				}

				data[i].$startY = y;
			}


		}
	}
};



/* DHX DEPEND FROM FILE 'ext/chart/chart_spline.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.spline = {
	/**
	*   renders a spline chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: width - the width of the container
	*   @param: height - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_spline:function(ctx, data, point0, point1, sIndex, map){

		var config,i,items,j,params,sparam,x,x0,x1,x2,y,y1,y2;
		params = this._calculateLineParams(ctx,data,point0,point1,sIndex);
		config = this._settings;
		this._mapStart = point0;

		/*array of all points*/
		items = [];

		/*drawing all items*/
		if (data.length) {

			/*getting all points*/
			x0 = (config.offset?point0.x+params.cellWidth*0.5:point0.x);
			for(i=0; i < data.length;i ++){
				y = this._getPointY(data[i],point0,point1,params);
				if(y){
					x = ((!i)?x0:params.cellWidth*i - 0.5 + x0);
					items.push({x:x,y:y,index:i});
				}
			}
			sparam = this._getSplineParameters(items);

			for(i =0; i< items.length; i++){
				x1 = items[i].x;
				y1 = items[i].y;
				if(i<items.length-1){
					x2 = items[i+1].x;
					y2 = items[i+1].y;
					for(j = x1; j < x2; j++){
						var sY1 = this._getSplineYPoint(j,x1,i,sparam.a,sparam.b,sparam.c,sparam.d);
						if(sY1<point0.y)
							sY1=point0.y;
						if(sY1>point1.y)
							sY1=point1.y;
						var sY2 = this._getSplineYPoint(j+1,x1,i,sparam.a,sparam.b,sparam.c,sparam.d);
						if(sY2<point0.y)
							sY2=point0.y;
						if(sY2>point1.y)
							sY2=point1.y;
						this._drawLine(ctx,j,sY1,j+1,sY2,config.line.color(data[i]),config.line.width);

					}
					this._drawLine(ctx,x2-1,this._getSplineYPoint(j,x1,i,sparam.a,sparam.b,sparam.c,sparam.d),x2,y2,config.line.color(data[i]),config.line.width);
				}
				this._drawItem(ctx,x1,y1,data[items[i].index],config.label(data[items[i].index]), sIndex, map);
				/*creates map area*/
				/*radius = (parseInt(config.item.radius.call(this,data[i-1]),10)||2);
			    areaPos = (config.eventRadius||radius+1);
				map.addRect(data[i].id,[x1-areaPos,y1-areaPos,x1+areaPos,y1+areaPos],sIndex); */

			}
			//this._drawItemOfLineChart(ctx,x2,y2,data[i],config.label(data[i]));

		}
	},
	/*gets spline parameter*/
	_getSplineParameters:function(points){
		var i,u,v,s,a,b,c,d,
		h = [],
	    m = [],
		n = points.length;
		
		for(i =0; i<n-1;i++){
			h[i] = points[i+1].x - points[i].x;
			m[i] = (points[i+1].y - points[i].y)/h[i];
		}
		u = [];	v = [];
		u[0] = 0;
		u[1] = 2*(h[0] + h[1]);
		v[0] = 0;
		v[1] = 6*(m[1] - m[0]);
		for(i =2; i < n-1; i++){
			u[i] = 2*(h[i-1]+h[i]) - h[i-1]*h[i-1]/u[i-1];
	    	v[i] = 6*(m[i]-m[i-1]) - h[i-1]*v[i-1]/u[i-1];
		}
		
		s = [];
		s[n-1] = s[0] = 0;
		for(i = n -2; i>=1; i--)
	   		s[i] = (v[i] - h[i]*s[i+1])/u[i];
	
        a = []; b = []; c = [];	d = []; 
		
		for(i =0; i<n-1;i++){
			a[i] = points[i].y;
			b[i] = - h[i]*s[i+1]/6 - h[i]*s[i]/3 + (points[i+1].y-points[i].y)/h[i];
			c[i] = s[i]/2;
			d[i] = (s[i+1] - s[i])/(6*h[i]);
		}
		return {a:a,b:b,c:c,d:d};
	},
	/*returns the y position of the spline point */
	_getSplineYPoint:function(x,xi,i,a,b,c,d){
		return a[i] + (x - xi)*(b[i] + (x-xi)*(c[i]+(x-xi)*d[i])); 
	}
};


/* DHX DEPEND FROM FILE 'ext/chart/chart_barh.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.barH = {
	/**
	*   renders a bar chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_barH:function(ctx, data, point0, point1, sIndex, map){
	     var barOffset, barWidth, cellWidth, color, gradient, i, limits, maxValue, minValue,
		     innerGradient, valueFactor, relValue, radius, relativeValues,
		     startValue, totalWidth,value,  unit, x0, y0, yax;

		/*an available width for one bar*/
		cellWidth = (point1.y-point0.y)/data.length;

		limits = this._getLimits("h");

		maxValue = limits.max;
		minValue = limits.min;

		totalWidth = point1.x-point0.x;
		
		yax = !!this._settings.yAxis;
		
		/*draws x and y scales*/
		if(!sIndex)
			this._drawHScales(ctx,data,point0, point1,minValue,maxValue,cellWidth);
		
		/*necessary for automatic scale*/
		if(yax){
		    maxValue = parseFloat(this._settings.xAxis.end);
			minValue = parseFloat(this._settings.xAxis.start);
		}
		
		/*unit calculation (bar_height = value*unit)*/
		relativeValues = this._getRelativeValue(minValue,maxValue);
		relValue = relativeValues[0];
		valueFactor = relativeValues[1];
		
		unit = (relValue?totalWidth/relValue:10);
		if(!yax){
			/*defines start value for better representation of small values*/
			startValue = 10;
			unit = (relValue?(totalWidth-startValue)/relValue:10);
		}
		
		
		/*a real bar width */
		barWidth = parseInt(this._settings.width,10);
		if((barWidth*this._series.length+4)>cellWidth) barWidth = cellWidth/this._series.length-4;
		/*the half of distance between bars*/
		barOffset = Math.floor((cellWidth - barWidth*this._series.length)/2);
		/*the radius of rounding in the top part of each bar*/
		radius = (typeof this._settings.radius!="undefined"?parseInt(this._settings.radius,10):Math.round(barWidth/5));
		
		innerGradient = false;
		gradient = this._settings.gradient;
	
		if (gradient&&typeof(gradient) != "function"){
			innerGradient = gradient;
			gradient = false;
		} else if (gradient){
			gradient = ctx.createLinearGradient(point0.x,point0.y,point1.x,point0.y);
			this._settings.gradient(gradient);
		}
		/*draws a black line if the horizontal scale isn't defined*/
		if(!yax){
			this._drawLine(ctx,point0.x-0.5,point0.y,point0.x-0.5,point1.y,"#000000",1); //hardcoded color!
		}
		
		
		
		for(i=0; i < data.length;i ++){
			
			
			value =  parseFloat(this._settings.value(data[i]||0));
			if(value>maxValue) value = maxValue;
			value -= minValue;
			value *= valueFactor;
			
			/*start point (bottom left)*/
			x0 = point0.x;
			y0 = point0.y+ barOffset + i*cellWidth+(barWidth+1)*sIndex;
			
			if((value<0&&this._settings.origin=="auto")||(this._settings.xAxis&&value===0&&!(this._settings.origin!="auto"&&this._settings.origin>minValue))){
				this.canvases[sIndex].renderTextAt("middle", "right", x0+10,y0+barWidth/2+barOffset,this._settings.label(data[i]));
				continue;
			}
			if(value<0&&this._settings.origin!="auto"&&this._settings.origin>minValue){
				value = 0;
			}
			
			/*takes start value into consideration*/
			if(!yax) value += startValue/unit;
			color = gradient||this._settings.color.call(this,data[i]);
			
			/*drawing the gradient border of a bar*/
			if(this._settings.border){
				this._drawBarHBorder(ctx,x0,y0,barWidth,minValue,radius,unit,value,color);
			}

			/*drawing bar body*/
			ctx.globalAlpha = this._settings.alpha.call(this,data[i]);
			var points = this._drawBarH(ctx,point1,x0,y0,barWidth,minValue,radius,unit,value,color,gradient,innerGradient);
			if (innerGradient!=false){
				this._drawBarHGradient(ctx,x0,y0,barWidth,minValue,radius,unit,value,color,innerGradient);

			}
			ctx.globalAlpha = 1;
			
			
			/*sets a bar label and map area*/
	
			if(points[3]==y0){
				this.canvases[sIndex].renderTextAt("middle", "left", points[0]-5,points[3]+Math.floor(barWidth/2),this._settings.label(data[i]));
				map.addRect(data[i].id,[points[0]-point0.x,points[3]-point0.y,points[2]-point0.x,points[3]+barWidth-point0.y],sIndex);
			
			}else{
				this.canvases[sIndex].renderTextAt("middle", false, points[2]+5,points[1]+Math.floor(barWidth/2),this._settings.label(data[i]));
				map.addRect(data[i].id,[points[0]-point0.x,y0-point0.y,points[2]-point0.x,points[3]-point0.y],sIndex);
			}
			  
		}
	},
	/**
	*   sets points for bar and returns the position of the bottom right point
	*   @param: ctx - canvas object
	*   @param: x0 - the x position of start point
	*   @param: y0 - the y position of start point
	*   @param: barWidth - bar width 
	*   @param: radius - the rounding radius of the top
	*   @param: unit - the value defines the correspondence between item value and bar height
	*   @param: value - item value
	*   @param: offset - the offset from expected bar edge (necessary for drawing border)
	*/
	_setBarHPoints:function(ctx,x0,y0,barWidth,radius,unit,value,offset,skipLeft){
		/*correction for displaing small values (when rounding radius is bigger than bar height)*/
		var angle_corr = 0;
		if(radius>unit*value){
			var sinA = (radius-unit*value)/radius;
			angle_corr = -Math.asin(sinA)+Math.PI/2;
		}
		/*start*/
		ctx.moveTo(x0,y0+offset);
		/*start of left rounding*/
		var x1 = x0 + unit*value - radius - (radius?0:offset);
		if(radius<unit*value)
			ctx.lineTo(x1,y0+offset);
   		/*left rounding*/
		var y2 = y0 + radius;
		if (radius&&radius>0)
			ctx.arc(x1,y2,radius-offset,-Math.PI/2+angle_corr,0,false);
   		/*start of right rounding*/
		var y3 = y0 + barWidth - radius - (radius?0:offset);
		var x3 = x1 + radius - (radius?offset:0);
		ctx.lineTo(x3,y3);
		/*right rounding*/
		if (radius&&radius>0)
			ctx.arc(x1,y3,radius-offset,0,Math.PI/2-angle_corr,false);
   		/*bottom right point*/
		var y5 = y0 + barWidth-offset;
        ctx.lineTo(x0,y5);
		/*line to the start point*/
		if(!skipLeft){
   			ctx.lineTo(x0,y0+offset);
   		}
	//	ctx.lineTo(x0,0); //IE fix!
		return [x3,y5];
	},
	 _drawHScales:function(ctx,data,point0,point1,start,end,cellWidth){
		 var x = 0;
		 if(this._settings.xAxis){
			 this.canvases["x"] =  new dhtmlx.ui.Canvas(this._obj);
			 x = this._drawHXAxis(this.canvases["x"].getCanvas(),data,point0,point1,start,end);
		 }
		 if (this._settings.yAxis){
			 this.canvases["y"] =  new dhtmlx.ui.Canvas(this._obj);
		    this._drawHYAxis(this.canvases["y"].getCanvas(),data,point0,point1,cellWidth,x);
		 }
	},
	_drawHYAxis:function(ctx,data,point0,point1,cellWidth,yAxisX){
		if (!this._settings.yAxis) return;
		var unitPos;
		var x0 = parseInt((yAxisX?yAxisX:point0.x),10)-0.5;
		var y0 = point1.y+0.5;
		var y1 = point0.y;
		this._drawLine(ctx,x0,y0,x0,y1,this._settings.yAxis.color,1);



		for(var i=0; i < data.length;i ++){

			/*scale labels*/
			var right = ((this._settings.origin!="auto")&&(this._settings.view=="barH")&&(parseFloat(this._settings.value(data[i]))<this._settings.origin));
			unitPos = y1+cellWidth/2+i*cellWidth;
			this.canvases["y"].renderTextAt("middle",(right?false:"left"),(right?x0+5:x0-5),unitPos,
				this._settings.yAxis.template(data[i]),
				"dhx_axis_item_y",(right?0:x0-10)
			);
			if(this._settings.yAxis.lines.call(this,data[i]))
				this._drawLine(ctx,point0.x,unitPos,point1.x,unitPos,this._settings.yAxis.lineColor.call(this,data[i]),1);
		}
		this._drawLine(ctx,point0.x+0.5,y1+0.5,point1.x,y1+0.5,this._settings.yAxis.lineColor.call(this,{}),1);
		this._setYAxisTitle(point0,point1);
	},
	_drawHXAxis:function(ctx,data,point0,point1,start,end){
		var step;
		var scaleParam= {};
		var axis = this._settings.xAxis;
		if (!axis) return;
		
		var y0 = point1.y+0.5;
		var x0 = point0.x-0.5;
		var x1 = point1.x-0.5;
		var yAxisStart = point0.x;
		this._drawLine(ctx,x0,y0,x1,y0,axis.color,1);
		
		if(axis.step)
		     step = parseFloat(axis.step);
		
		if(typeof this._configXAxis.step =="undefined"||typeof this._configXAxis.start=="undefined"||typeof this._configXAxis.end =="undefined"){
			scaleParam = this._calculateScale(start,end);
			start = scaleParam.start;
			end = scaleParam.end;
			step = scaleParam.step;
			this._settings.xAxis.end = end;
			this._settings.xAxis.start = start;
			this._settings.xAxis.step = step;
		}
		
		if(step===0) return;
		var stepHeight = (x1-x0)*step/(end-start);
		var c = 0;
		for(var i = start; i<=end; i += step){
			if(scaleParam.fixNum)  i = parseFloat((new Number(i)).toFixed(scaleParam.fixNum));
			var xi = Math.floor(x0+c*stepHeight)+ 0.5;/*canvas line fix*/
			if(!(i==start&&this._settings.origin=="auto") &&axis.lines.call(this,i))
				this._drawLine(ctx,xi,y0,xi,point0.y,this._settings.xAxis.lineColor.call(this,i),1);
			if(i == this._settings.origin) yAxisStart = xi+1;
			this.canvases["x"].renderTextAt(false, true,xi,y0+2,axis.template(i.toString()),"dhx_axis_item_x");
			c++;
		}
		this.canvases["x"].renderTextAt(true, false, x0,point1.y+this._settings.padding.bottom-3,
			this._settings.xAxis.title,
			"dhx_axis_title_x",
			point1.x - point0.x
		);
		/*the right border in lines in scale are enabled*/
		if (!axis.lines.call(this,{})){
			this._drawLine(ctx,x0,point0.y-0.5,x1,point0.y-0.5,this._settings.xAxis.color,0.2);
		}
		return yAxisStart;
	},
	_correctBarHParams:function(ctx,x,y,value,unit,barWidth,minValue){
		var yax = this._settings.yAxis;
		var axisStart = x;
		if(!!yax&&this._settings.origin!="auto" && (this._settings.origin>minValue)){
			x += (this._settings.origin-minValue)*unit;
			axisStart = x;
			value = value-(this._settings.origin-minValue);
			if(value < 0){
				value *= (-1);
			 	ctx.translate(x,y+barWidth);
				ctx.rotate(Math.PI);
				x = 0.5;
				y = 0;
			}
			x += 0.5;
		}
		
		return {value:value,x0:x,y0:y,start:axisStart}
	},
	_drawBarH:function(ctx,point1,x0,y0,barWidth,minValue,radius,unit,value,color,gradient,inner_gradient){
		ctx.save();
		var p = this._correctBarHParams(ctx,x0,y0,value,unit,barWidth,minValue);	
		ctx.fillStyle = color;
		ctx.beginPath();
		var points = this._setBarHPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,(this._settings.border?1:0));
		if (gradient&&!inner_gradient) ctx.lineTo(point1.x,p.y0+(this._settings.border?1:0)); //fix gradient sphreading
   		ctx.fill();
		ctx.restore();
		var y1 = p.y0;
		var y2 = (p.y0!=y0?y0:points[1]);
		var x1 = (p.y0!=y0?(p.start-points[0]):p.start);
		var x2 = (p.y0!=y0?p.start:points[0]);
		
		return [x1,y1,x2,y2];
	},
	_drawBarHBorder:function(ctx,x0,y0,barWidth,minValue,radius,unit,value,color){
		ctx.save();
		var p = this._correctBarHParams(ctx,x0,y0,value,unit,barWidth,minValue);	
		
		ctx.beginPath();
		this._setBorderStyles(ctx,color);
		ctx.globalAlpha =0.9;
		this._setBarHPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,ctx.lineWidth/2,1);
		
		ctx.stroke();	
	    ctx.restore();
	},
	_drawBarHGradient:function(ctx,x0,y0,barWidth,minValue,radius,unit,value,color,inner_gradient){
		ctx.save();
		//y0 -= (dhx.env.isIE?0:0.5);
		var p = this._correctBarHParams(ctx,x0,y0,value,unit,barWidth,minValue);	
		var gradParam = this._setBarGradient(ctx,p.x0,p.y0+barWidth,p.x0+unit*p.value,p.y0,inner_gradient,color,"x");
		ctx.fillStyle = gradParam.gradient;
		ctx.beginPath();
		this._setBarHPoints(ctx,p.x0,p.y0+gradParam.offset,barWidth-gradParam.offset*2,radius,unit,p.value,gradParam.offset);
		ctx.fill();
		ctx.globalAlpha = 1;
	    ctx.restore();
	}
};



/* DHX DEPEND FROM FILE 'ext/chart/chart_stackedbarh.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
/*DHX:Depend ext/chart/chart_barh.js*/

dhtmlx.assert(dhtmlx.chart.barH);
dhtmlx.chart.stackedBarH = {
/**
	*   renders a bar chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: sIndex - index of drawing chart
	*   @param: map - map object
	*/
	pvt_render_stackedBarH:function(ctx, data, point0, point1, sIndex, map){
	   var maxValue,minValue;
		/*necessary if maxValue - minValue < 0*/
		var valueFactor;
		/*maxValue - minValue*/
		var relValue;
		
		var total_width = point1.x-point0.x;
		
		var yax = !!this._settings.yAxis;
		
		var limits = this._getStackedLimits(data);
		maxValue = limits.max;
		minValue = limits.min;
		
		/*an available width for one bar*/
		var cellWidth = Math.floor((point1.y-point0.y)/data.length);
	
		/*draws x and y scales*/
		if(!sIndex)
			this._drawHScales(ctx,data,point0, point1,minValue,maxValue,cellWidth);
		
		/*necessary for automatic scale*/
		if(yax){
		    maxValue = parseFloat(this._settings.xAxis.end);
			minValue = parseFloat(this._settings.xAxis.start);      
		}
		
		/*unit calculation (bar_height = value*unit)*/
		var relativeValues = this._getRelativeValue(minValue,maxValue);
		relValue = relativeValues[0];
		valueFactor = relativeValues[1];
		
		var unit = (relValue?total_width/relValue:10);
		if(!yax){
			/*defines start value for better representation of small values*/
			var startValue = 10;
			unit = (relValue?(total_width-startValue)/relValue:10);
		}
		
		/*a real bar width */
		var barWidth = parseInt(this._settings.width,10);
		if((barWidth+4)>cellWidth) barWidth = cellWidth-4;
		/*the half of distance between bars*/
		var barOffset = (cellWidth - barWidth)/2;
		/*the radius of rounding in the top part of each bar*/
		var radius = 0;

		var inner_gradient = false;
		var gradient = this._settings.gradient;
		if (gradient){
			inner_gradient = true;
		}
		/*draws a black line if the horizontal scale isn't defined*/
		if(!yax){
			this._drawLine(ctx,point0.x-0.5,point0.y,point0.x-0.5,point1.y,"#000000",1); //hardcoded color!
		}

		var seriesNumber = 0;
		var seriesIndex = 0;
		for(i=0; i<this._series.length; i++ ){
			if(i == sIndex){
				seriesIndex  = seriesNumber;
			}
			if(this._series[i].view == "stackedBarH")
				seriesNumber++;
		}

		for(var i=0; i < data.length;i ++){
			
			if(!seriesIndex)
			   data[i].$startX = point0.x;
			
			var value =  parseFloat(this._settings.value(data[i]||0));
			if(value>maxValue) value = maxValue;
			value -= minValue;
			value *= valueFactor;
			
			/*start point (bottom left)*/
			var x0 = point0.x;
			var y0 = point0.y+ barOffset + i*cellWidth;
			
			if(!seriesIndex)
                data[i].$startX = x0;
			else
			    x0 = data[i].$startX;
			
			if(value<0||(this._settings.yAxis&&value===0)){
				this.canvases["y"].renderTextAt("middle", true, x0+10,y0+barWidth/2,this._settings.label(data[i]));
				continue;
			}
			
			/*takes start value into consideration*/
			if(!yax) value += startValue/unit;
			var color = this._settings.color.call(this,data[i]);
			
			
			/*drawing bar body*/
			ctx.globalAlpha = this._settings.alpha.call(this,data[i]);
			ctx.fillStyle = this._settings.color.call(this,data[i]);
			ctx.beginPath();
			var points = this._setBarHPoints(ctx,x0,y0,barWidth,radius,unit,value,(this._settings.border?1:0));
			if (gradient&&!inner_gradient) ctx.lineTo(point0.x+total_width,y0+(this._settings.border?1:0)); //fix gradient sphreading
   			ctx.fill();
			
			if (inner_gradient!=false){
				var gradParam = this._setBarGradient(ctx,x0,y0+barWidth,x0,y0,inner_gradient,color,"x");
				ctx.fillStyle = gradParam.gradient;
				ctx.beginPath();
				points = this._setBarHPoints(ctx,x0,y0, barWidth,radius,unit,value,0);
				ctx.fill();
			}
			/*drawing the gradient border of a bar*/
			if(this._settings.border){
				this._drawBarHBorder(ctx,x0,y0,barWidth,minValue,radius,unit,value,color);
			}
			
			ctx.globalAlpha = 1;
			
			/*sets a bar label*/
			this.canvases[sIndex].renderTextAt("middle",true,data[i].$startX+(points[0]-data[i].$startX)/2-1, y0+(points[1]-y0)/2, this._settings.label(data[i]));
			/*defines a map area for a bar*/
			map.addRect(data[i].id,[data[i].$startX-point0.x,y0-point0.y,points[0]-point0.x,points[1]-point0.y],sIndex);
			/*the start position for the next series*/
			data[i].$startX = points[0];
		}
	}
};


/* DHX DEPEND FROM FILE 'ext/chart/chart_stackedbar.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.stackedBar = {
	/**
	*   renders a bar chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_stackedBar:function(ctx, data, point0, point1, sIndex, map){
	     var maxValue,minValue;
		/*necessary if maxValue - minValue < 0*/
		var valueFactor;
		/*maxValue - minValue*/
		var relValue;
		
		var total_height = point1.y-point0.y;
		
		var yax = !!this._settings.yAxis;
		var xax = !!this._settings.xAxis;
		
		var limits = this._getStackedLimits(data);
		maxValue = limits.max;
		minValue = limits.min;
		
		/*an available width for one bar*/
		var cellWidth = Math.floor((point1.x-point0.x)/data.length);
		
		/*draws x and y scales*/
		if(!sIndex)
			this._drawScales(data,point0, point1,minValue,maxValue,cellWidth);
		
		/*necessary for automatic scale*/
		if(yax){
		    maxValue = parseFloat(this._settings.yAxis.end);
			minValue = parseFloat(this._settings.yAxis.start);      
		}
		
		/*unit calculation (bar_height = value*unit)*/
		var relativeValues = this._getRelativeValue(minValue,maxValue);
		relValue = relativeValues[0];
		valueFactor = relativeValues[1];
		
		var unit = (relValue?total_height/relValue:10);
		
		/*a real bar width */
		var barWidth = parseInt(this._settings.width,10);
		if(barWidth+4 > cellWidth) barWidth = cellWidth-4;
		/*the half of distance between bars*/
		var barOffset = Math.floor((cellWidth - barWidth)/2);
		
		
		var inner_gradient = (this._settings.gradient?this._settings.gradient:false);
		
		/*draws a black line if the horizontal scale isn't defined*/
		if(!xax){
			//scaleY = y-bottomPadding;
			this._drawLine(ctx,point0.x,point1.y+0.5,point1.x,point1.y+0.5,"#000000",1); //hardcoded color!
		}
		
		for(var i=0; i < data.length;i ++){
			var value =  parseFloat(this._settings.value(data[i]||0));

			if(!value){
				if(!sIndex||!data[i].$startY)
					data[i].$startY = point1.y;
				continue;
			}
			/*adjusts the first tab to the scale*/
			if(!sIndex)
				value -= minValue;

			value *= valueFactor;
			
			/*start point (bottom left)*/
			var x0 = point0.x + barOffset + i*cellWidth;
			var y0 = point1.y;
			if(!sIndex)
                data[i].$startY = y0;
			else
			    y0 = data[i].$startY;

			/*the max height limit*/
			if(y0 < (point0.y+1)) continue;
			
			if(value<0||(this._settings.yAxis&&value===0)){
				this.canvases["y"].renderTextAt(true, true, x0+Math.floor(barWidth/2),y0,this._settings.label(data[i]));
				continue;
			}
			
			var color = this._settings.color.call(this,data[i]);
			
			
			
			/*drawing bar body*/
			ctx.globalAlpha = this._settings.alpha.call(this,data[i]);
			ctx.fillStyle = this._settings.color.call(this,data[i]);
			ctx.beginPath();
			var points = this._setStakedBarPoints(ctx,x0-(this._settings.border?0.5:0),y0,barWidth+(this._settings.border?0.5:0),unit,value,0,point0.y);
   			ctx.fill();
			
			/*gradient*/
			if (inner_gradient){
			  	ctx.save();
				var gradParam = this._setBarGradient(ctx,x0,y0,x0+barWidth,points[1],inner_gradient,color,"y");
				ctx.fillStyle = gradParam.gradient;
				ctx.beginPath();
				points = this._setStakedBarPoints(ctx,x0+gradParam.offset,y0,barWidth-gradParam.offset*2,unit,value,(this._settings.border?1:0),point0.y);
				ctx.fill();
				ctx.restore()
			}
			/*drawing the gradient border of a bar*/
			if(this._settings.border){
				ctx.save();
				this._setBorderStyles(ctx,color);
				ctx.beginPath();
				
				this._setStakedBarPoints(ctx,x0-0.5,y0,barWidth+1,unit,value,0,point0.y,1);
				ctx.stroke();
				ctx.restore();
			}
			ctx.globalAlpha = 1;
			
			/*sets a bar label*/
			this.canvases[sIndex].renderTextAt(false, true, x0+Math.floor(barWidth/2),(points[1]+(y0-points[1])/2)-7,this._settings.label(data[i]));
			/*defines a map area for a bar*/
			map.addRect(data[i].id,[x0-point0.x,points[1]-point0.y,points[0]-point0.x,(data[i].$startY||y0)-point0.y],sIndex);
			
			/*the start position for the next series*/
			data[i].$startY = (this._settings.border?(points[1]+1):points[1]);
		}
	},
	/**
	*   sets points for bar and returns the position of the bottom right point
	*   @param: ctx - canvas object
	*   @param: x0 - the x position of start point
	*   @param: y0 - the y position of start point
	*   @param: barWidth - bar width 
	*   @param: radius - the rounding radius of the top
	*   @param: unit - the value defines the correspondence between item value and bar height
	*   @param: value - item value
	*   @param: offset - the offset from expected bar edge (necessary for drawing border)
	*   @param: minY - the minimum y position for the bars ()
	*/
	_setStakedBarPoints:function(ctx,x0,y0,barWidth,unit,value,offset,minY,skipBottom){
		/*start*/
		ctx.moveTo(x0,y0);
		/*start of left rounding*/
		var y1 = y0 - unit*value+offset;
		/*maximum height limit*/
		if(y1<minY) 
			y1 = minY;
		ctx.lineTo(x0,y1);
   		var x3 = x0 + barWidth;
		var y3 = y1; 
		ctx.lineTo(x3,y3);
		/*right rounding*/
   		/*bottom right point*/
		var x5 = x0 + barWidth;
        ctx.lineTo(x5,y0);
		/*line to the start point*/
		if(!skipBottom){
   			ctx.lineTo(x0,y0);
   		}
		//	ctx.lineTo(x0,0); //IE fix!
		return [x5,y3-2*offset];
	}
};



/* DHX DEPEND FROM FILE 'ext/chart/chart_line.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.line = {

	/**
	*   renders a graphic
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: width - the width of the container
	*   @param: height - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_line:function(ctx, data, point0, point1, sIndex, map){
			var config,i,items,params,x0,x1,x2,y1,y2;
		    params = this._calculateLineParams(ctx,data,point0,point1,sIndex);
			config = this._settings;
			if (data.length) {
				x0 = (config.offset?point0.x+params.cellWidth*0.5:point0.x);
				//finds items with data (excludes scale units)
				items= [];
				for(i=0; i < data.length;i ++){
					y1 = this._getPointY(data[i],point0,point1,params);
					if(y1){
						x1 = ((!i)?x0:params.cellWidth*i - 0.5 + x0);
						items.push({x:x1,y:y1,index:i});
					}
				}
				var t = (new Date()).valueOf();
				this._mapStart = point0;
				for(i = 1; i <= items.length; i++){
					//line start position
					x1 = items[i-1].x;
					y1 = items[i-1].y;
					if(i<items.length){
						//line end position
						x2 = items[i].x;
						y2 = items[i].y;
						//line
						this._drawLine(ctx,x1,y1,x2,y2,config.line.color.call(this,data[i-1]),config.line.width);
						//line shadow
						if(config.line&&config.line.shadow){
							ctx.globalAlpha = 0.3;
							this._drawLine(ctx,x1+2,y1+config.line.width+8,x2+2,y2+config.line.width+8,"#eeeeee",config.line.width+3);
							ctx.globalAlpha = 1;
						}
					}
					//item
					this._drawItem(ctx,x1,y1,data[items[i-1].index],config.label(data[items[i-1].index]), sIndex, map, point0);
				}

			}
		},
	/**
	*   draws an item and its label
	*   @param: ctx - canvas object
	*   @param: x0 - the x position of a circle
	*   @param: y0 - the y position of a circle
	*   @param: obj - data object 
	*   @param: label - (boolean) defines wherether label needs being drawn 
	*/
	_drawItem:function(ctx,x0,y0,obj,label,sIndex,map){
		var config = this._settings.item;

		var R = parseInt(config.radius.call(this,obj),10)||0;
		var mapStart = this._mapStart;
		if(R){
			ctx.save();
			if(config.shadow){
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#bdbdbd";
				ctx.fillStyle = "#bdbdbd";
				var alphas = [0.1,0.2,0.3];
				for(var i=(alphas.length-1);i>=0;i--){
					ctx.globalAlpha = alphas[i];
					ctx.strokeStyle = "#d0d0d0";
					ctx.beginPath();
					this._strokeChartItem(ctx,x0,y0+2*R/3,R+i+1,config.type);
					ctx.stroke();
				}
				ctx.beginPath();
				ctx.globalAlpha = 0.3;
				ctx.fillStyle = "#bdbdbd";
				this._strokeChartItem(ctx,x0,y0+2*R/3,R+1,config.type);
				ctx.fill();
			}
			ctx.restore();
			ctx.lineWidth = config.borderWidth;
			ctx.fillStyle = config.color.call(this,obj);
			ctx.strokeStyle = config.borderColor.call(this,obj);
			ctx.globalAlpha = config.alpha.call(this,obj);
			ctx.beginPath();
			this._strokeChartItem(ctx,x0,y0,R+1,config.type);
			ctx.fill();
			ctx.stroke();
			ctx.globalAlpha = 1;
		}
		/*item label*/
		if(label)
			this.canvases[sIndex].renderTextAt(false, true, x0,y0-R-this._settings.labelOffset,this._settings.label.call(this,obj));

		var areaPos = (this._settings.eventRadius||R+1);
		//this._addMapRect(map,obj.id,[{x:x0-areaPos,y:y0-areaPos},{x0+areaPos,y:y0+areaPos}],point0,sIndex);
		map.addRect(obj.id,[x0-areaPos-mapStart.x,y0-areaPos-mapStart.y,x0+areaPos-mapStart.x,y0+areaPos-mapStart.y],sIndex);
	},
    _strokeChartItem:function(ctx,x0,y0,R,type){
	    var p=[];
        if(type && (type=="square" || type=="s")){
		    R *= Math.sqrt(2)/2;
	        p = [
		        [x0-R-ctx.lineWidth/2,y0-R],
		        [x0+R,y0-R],
		        [x0+R,y0+R],
		        [x0-R,y0+R],
		        [x0-R,y0-R]
	        ];
		}
        else if(type && (type=="diamond" || type=="d")){
		    var corr = (ctx.lineWidth>1?ctx.lineWidth*Math.sqrt(2)/4:0);
	        p = [
		        [x0,y0-R],
		        [x0+R,y0],
		        [x0,y0+R],
		        [x0-R,y0],
		        [x0+corr,y0-R-corr]
	        ];
        }
        else if(type && (type=="triangle" || type=="t")){
	        p = [
		        [x0,y0-R],
		        [x0+Math.sqrt(3)*R/2,y0+R/2],
		        [x0-Math.sqrt(3)*R/2,y0+R/2],
		        [x0,y0-R]
	        ];
        }
		else
            p = [
	            [x0,y0,R,0,Math.PI*2,true]
            ]
	    this._path(ctx,p);
    },
	/**
	*   gets the vertical position of the item
	*   @param: data - data object
	*   @param: y0 - the y position of chart start
	*   @param: y1 - the y position of chart end
	*   @param: params - the object with elements: minValue, maxValue, unit, valueFactor (the value multiple of 10) 
	*/
	_getPointY: function(data,point0,point1,params){
		var minValue = params.minValue;
		var maxValue = params.maxValue;
		var unit = params.unit;
		var valueFactor = params.valueFactor;
		/*the real value of an object*/
		var value = this._settings.value(data);
		/*a relative value*/
		var v = (parseFloat(value||0) - minValue)*valueFactor;
		if(!this._settings.yAxis)
			v += params.startValue/unit;
		/*a vertical coordinate*/
		var y = point1.y - unit*v;
		/*the limit of the minimum value is  the minimum visible value*/
		if(v<0) 
			y = point1.y;
		/*the limit of the maximum value*/
		if(value > maxValue) 
			y = point0.y;
		/*the limit of the minimum value*/
		if(value < minValue) 
			y = point1.y;
		return y;
	},
	_calculateLineParams: function(ctx,data,point0,point1,sIndex){
		var params = {};
		
		/*maxValue - minValue*/
		var relValue;
		
		/*available height*/
		params.totalHeight = point1.y-point0.y;
		
		/*a space available for a single item*/
		//params.cellWidth = Math.round((point1.x-point0.x)/((!this._settings.offset&&this._settings.yAxis)?(data.length-1):data.length)); 
		params.cellWidth = (point1.x-point0.x)/((!this._settings.offset)?(data.length-1):data.length);
		
		/*scales*/
		var yax = !!this._settings.yAxis;
		
		var limits = (this._settings.view.indexOf("stacked")!=-1?this._getStackedLimits(data):this._getLimits());
		params.maxValue = limits.max;
		params.minValue = limits.min;
		
		/*draws x and y scales*/
		if(!sIndex)
			this._drawScales(data, point0, point1,params.minValue,params.maxValue,params.cellWidth);
		
		/*necessary for automatic scale*/
		if(yax){
		    params.maxValue = parseFloat(this._settings.yAxis.end);
			params.minValue = parseFloat(this._settings.yAxis.start);      
		}
		
		/*unit calculation (y_position = value*unit)*/
		var relativeValues = this._getRelativeValue(params.minValue,params.maxValue);
		relValue = relativeValues[0];
		params.valueFactor = relativeValues[1];
		params.unit = (relValue?params.totalHeight/relValue:10);
		
		params.startValue = 0;
		if(!yax){
			/*defines start value for better representation of small values*/
			params.startValue = 10;
			if(params.unit!=params.totalHeight)
				params.unit = (relValue?(params.totalHeight - params.startValue)/relValue:10);
		}
		return params;
	}
};



/* DHX DEPEND FROM FILE 'ext/chart/chart_bar.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.bar = {
	/**
	*   renders a bar chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: sIndex - index of drawing chart
	*/
	pvt_render_bar:function(ctx, data, point0, point1, sIndex, map){
	    var barWidth, cellWidth,
		    i,
		    limits, maxValue, minValue,
		    relValue, valueFactor, relativeValues,
		    startValue, unit,
		    xax, yax,
		    totalHeight = point1.y-point0.y;


		

		
		yax = !!this._settings.yAxis;
		xax = !!this._settings.xAxis;
		
		limits = this._getLimits();
		maxValue = limits.max;
		minValue = limits.min;
		
		/*an available width for one bar*/
		cellWidth = (point1.x-point0.x)/data.length;
		
		/*draws x and y scales*/
		if(!sIndex&&!(this._settings.origin!="auto"&&!yax)){
			this._drawScales(data,point0, point1,minValue,maxValue,cellWidth);
		}
		
		/*necessary for automatic scale*/
		if(yax){
		    maxValue = parseFloat(this._settings.yAxis.end);
			minValue = parseFloat(this._settings.yAxis.start);      
		}
		
		/*unit calculation (bar_height = value*unit)*/
		relativeValues = this._getRelativeValue(minValue,maxValue);
		relValue = relativeValues[0];
		valueFactor = relativeValues[1];
		
		unit = (relValue?totalHeight/relValue:relValue);

		if(!yax&&!(this._settings.origin!="auto"&&xax)){
			/*defines start value for better representation of small values*/
			startValue = 10;
			unit = (relValue?(totalHeight-startValue)/relValue:startValue);
		}
		/*if yAxis isn't set, but with custom origin */
		if(!sIndex&&(this._settings.origin!="auto"&&!yax)&&this._settings.origin>minValue){
			this._drawXAxis(ctx,data,point0,point1,cellWidth,point1.y-unit*(this._settings.origin-minValue));
		}
		
		/*a real bar width */
		barWidth = parseInt(this._settings.width,10);
		var seriesNumber = 0;
		var seriesIndex = 0;
		for(i=0; i<this._series.length; i++ ){
			if(i == sIndex){
				seriesIndex  = seriesNumber;
			}
			if(this._series[i].view == "bar")
				seriesNumber++;
		}
		if(this._series&&(barWidth*seriesNumber+4)>cellWidth) barWidth = parseInt(cellWidth/seriesNumber-4,10);

		/*the half of distance between bars*/
		var barOffset = (cellWidth - barWidth*seriesNumber)/2;

		/*the radius of rounding in the top part of each bar*/
		var radius = (typeof this._settings.radius!="undefined"?parseInt(this._settings.radius,10):Math.round(barWidth/5));

		var inner_gradient = false;
		var gradient = this._settings.gradient;
		
		if(gradient && typeof(gradient) != "function"){
			inner_gradient = gradient;
			gradient = false;
		} else if (gradient){
			gradient = ctx.createLinearGradient(0,point1.y,0,point0.y);
			this._settings.gradient(gradient);
		}
		/*draws a black line if the horizontal scale isn't defined*/
		if(!xax){
			this._drawLine(ctx,point0.x,point1.y+0.5,point1.x,point1.y+0.5,"#000000",1); //hardcoded color!
		}
		
		for(i=0; i < data.length;i ++){

			var value =  parseFloat(this._settings.value(data[i])||0);
			if(isNaN(value))
				continue;
			if(value>maxValue) value = maxValue;
			value -= minValue;
			value *= valueFactor;
			
			/*start point (bottom left)*/
			var x0 = point0.x + barOffset + i*cellWidth+(barWidth+1)*seriesIndex;
			var y0 = point1.y;
		
			if(value<0||(this._settings.yAxis&&value===0&&!(this._settings.origin!="auto"&&this._settings.origin>minValue))){
				this.canvases[sIndex].renderTextAt(true, true, x0+Math.floor(barWidth/2),y0,this._settings.label(data[i]));
				continue;
			}
			
			/*takes start value into consideration*/
			if(!yax&&!(this._settings.origin!="auto"&&xax)) value += startValue/unit;
			
			var color = gradient||this._settings.color.call(this,data[i]);
	
			
			/*drawing bar body*/
			ctx.globalAlpha = this._settings.alpha.call(this,data[i]);
			var points = this._drawBar(ctx,point0,x0,y0,barWidth,minValue,radius,unit,value,color,gradient,inner_gradient);
			if (inner_gradient){
				this._drawBarGradient(ctx,x0,y0,barWidth,minValue,radius,unit,value,color,inner_gradient);
			}
			/*drawing the gradient border of a bar*/
			if(this._settings.border)
				this._drawBarBorder(ctx,x0,y0,barWidth,minValue,radius,unit,value,color);
			
			ctx.globalAlpha = 1;
			
			/*sets a bar label*/
			if(points[0]!=x0)
				this.canvases[sIndex].renderTextAt(false, true, x0+Math.floor(barWidth/2),points[1],this._settings.label(data[i]));
			else
				this.canvases[sIndex].renderTextAt(true, true, x0+Math.floor(barWidth/2),points[3],this._settings.label(data[i]));
			/*defines a map area for a bar*/
			map.addRect(data[i].id,[x0-point0.x,points[3]-point0.y,points[2]-point0.x,points[1]-point0.y],sIndex);
			//this._addMapRect(map,data[i].id,[{x:x0,y:points[3]},{x:points[2],y:points[1]}],point0,sIndex);
		}
	},
	_correctBarParams:function(ctx,x,y,value,unit,barWidth,minValue){
		var xax = this._settings.xAxis;
		var axisStart = y;
		if(!!xax&&this._settings.origin!="auto" && (this._settings.origin>minValue)){
			y -= (this._settings.origin-minValue)*unit;
			axisStart = y;
			value = value-(this._settings.origin-minValue);
			if(value < 0){
				value *= (-1);
			 	ctx.translate(x+barWidth,y);
				ctx.rotate(Math.PI);
				x = 0;
				y = 0;
			}
			y -= 0.5;
		}
		
		return {value:value,x0:x,y0:y,start:axisStart}
	},
	_drawBar:function(ctx,point0,x0,y0,barWidth,minValue,radius,unit,value,color,gradient,inner_gradient){
		ctx.save();
		ctx.fillStyle = color;
		var p = this._correctBarParams(ctx,x0,y0,value,unit,barWidth,minValue);
		var points = this._setBarPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,(this._settings.border?1:0));
		if (gradient&&!inner_gradient) ctx.lineTo(p.x0+(this._settings.border?1:0),point0.y); //fix gradient sphreading
   		ctx.fill();
	    ctx.restore();
		var x1 = p.x0;
		var x2 = (p.x0!=x0?x0+points[0]:points[0]);
		var y1 = (p.x0!=x0?(p.start-points[1]-p.y0):p.y0);
		var y2 = (p.x0!=x0?p.start-p.y0:points[1]);

		return [x1,y1,x2,y2];
	},
	_setBorderStyles:function(ctx,color){
		var hsv,rgb;
		rgb = dhtmlx.math.toRgb(color);
		hsv = dhtmlx.math.rgbToHsv(rgb[0],rgb[1],rgb[2]);
		hsv[2] /= 2;
		color = "rgb("+dhtmlx.math.hsvToRgb(hsv[0],hsv[1],hsv[2])+")";
		ctx.strokeStyle = color;
		if(ctx.globalAlpha==1)
			ctx.globalAlpha = 0.9;
	},
	_drawBarBorder:function(ctx,x0,y0,barWidth,minValue,radius,unit,value,color){
	    var p;
		ctx.save();
		p = this._correctBarParams(ctx,x0,y0,value,unit,barWidth,minValue);
		this._setBorderStyles(ctx,color);
		this._setBarPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,ctx.lineWidth/2,1);
		ctx.stroke();
		/*ctx.fillStyle = color;
		this._setBarPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,0);
		ctx.lineTo(p.x0,0);
		ctx.fill()
	   
				
		ctx.fillStyle = "#000000";
		ctx.globalAlpha = 0.37;
		
		this._setBarPoints(ctx,p.x0,p.y0,barWidth,radius,unit,p.value,0);
		ctx.fill()
		*/
	    ctx.restore();
	},
	_drawBarGradient:function(ctx,x0,y0,barWidth,minValue,radius,unit,value,color,inner_gradient){
		ctx.save();
		//y0 -= (dhtmlx._isIE?0:0.5);
		var p = this._correctBarParams(ctx,x0,y0,value,unit,barWidth,minValue);
		var gradParam = this._setBarGradient(ctx,p.x0,p.y0,p.x0+barWidth,p.y0-unit*p.value+2,inner_gradient,color,"y");
		var borderOffset = this._settings.border?1:0;
		ctx.fillStyle = gradParam.gradient;
		this._setBarPoints(ctx,p.x0+gradParam.offset,p.y0,barWidth-gradParam.offset*2,radius,unit,p.value,gradParam.offset+borderOffset);
		ctx.fill();
	    ctx.restore();
	},
	/**
	*   sets points for bar and returns the position of the bottom right point
	*   @param: ctx - canvas object
	*   @param: x0 - the x position of start point
	*   @param: y0 - the y position of start point
	*   @param: barWidth - bar width 
	*   @param: radius - the rounding radius of the top
	*   @param: unit - the value defines the correspondence between item value and bar height
	*   @param: value - item value
	*   @param: offset - the offset from expected bar edge (necessary for drawing border)
	*/
	_setBarPoints:function(ctx,x0,y0,barWidth,radius,unit,value,offset,skipBottom){
		/*correction for displaing small values (when rounding radius is bigger than bar height)*/
		ctx.beginPath();
		//y0 = 0.5;
		var angle_corr = 0;
		if(radius>unit*value){
			var cosA = (radius-unit*value)/radius;
			if(cosA<=1&&cosA>=-1)
				angle_corr = -Math.acos(cosA)+Math.PI/2;
		}
		/*start*/
		ctx.moveTo(x0+offset,y0);
		/*start of left rounding*/
		var y1 = y0 - Math.floor(unit*value) + radius + (radius?0:offset);
		if(radius<unit*value)
			ctx.lineTo(x0+offset,y1);
   		/*left rounding*/
		var x2 = x0 + radius;
		if (radius&&radius>0)
			ctx.arc(x2,y1,radius-offset,-Math.PI+angle_corr,-Math.PI/2,false);
   		/*start of right rounding*/
		var x3 = x0 + barWidth - radius - offset;
		var y3 = y1 - radius + (radius?offset:0);
		ctx.lineTo(x3,y3);
		/*right rounding*/
		if (radius&&radius>0)
			ctx.arc(x3,y1,radius-offset,-Math.PI/2,0-angle_corr,false);
   		/*bottom right point*/
		var x5 = x0 + barWidth-offset;
        ctx.lineTo(x5,y0);
		/*line to the start point*/
		if(!skipBottom){
   			ctx.lineTo(x0+offset,y0);
		}
   	//	ctx.lineTo(x0,0); //IE fix!
		return [x5,y3];
	}
};


/* DHX DEPEND FROM FILE 'ext/chart/chart_pie.js'*/


/*DHX:Depend ext/chart/chart_base.js*/
dhtmlx.chart.pie = {
	pvt_render_pie:function(ctx,data,x,y,sIndex,map){
		this._renderPie(ctx,data,x,y,1,map,sIndex);
		
	},
	/**
	*   renders a pie chart
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: x - the width of the container
	*   @param: y - the height of the container
	*   @param: ky - value from 0 to 1 that defines an angle of inclination (0<ky<1 - 3D chart)
	*/
	_renderPie:function(ctx,data,point0,point1,ky,map,sIndex){
		if(!data.length)
			return;
		var coord = this._getPieParameters(point0,point1);
		/*pie radius*/
		var radius = (this._settings.radius?this._settings.radius:coord.radius);
		if(radius<0)
			return;
		
		/*real values*/
		var values = this._getValues(data);

        var totalValue = this._getTotalValue(values);

        /*weighed values (the ratio of object value to total value)*/
		var ratios = this._getRatios(values,totalValue);

		/*pie center*/
		var x0 = (this._settings.x?this._settings.x:coord.x);
		var y0 = (this._settings.y?this._settings.y:coord.y);
		/*adds shadow to the 2D pie*/
		if(ky==1&&this._settings.shadow)
			this._addShadow(ctx,x0,y0,radius);
		
		/*changes vertical position of the center according to 3Dpie cant*/
		y0 = y0/ky;
		/*the angle defines the 1st edge of the sector*/
		var alpha0 = -Math.PI/2;
        var angles = [];
		/*changes Canvas vertical scale*/
		ctx.scale(1,ky); 
		/*adds radial gradient to a pie*/
		if (this._settings.gradient){
			var x1 = (ky!=1?x0+radius/3:x0);
			var y1 = (ky!=1?y0+radius/3:y0);
			this._showRadialGradient(ctx,x0,y0,radius,x1,y1);
		}
		for(var i = 0; i < data.length;i++){
			if (!values[i]) continue;
			/*drawing sector*/
			//ctx.lineWidth = 2;
            ctx.strokeStyle = this._settings.lineColor.call(this,data[i]);
			ctx.beginPath(); 
	    	ctx.moveTo(x0,y0);
            angles.push(alpha0);
			/*the angle defines the 2nd edge of the sector*/
			alpha1 = -Math.PI/2+ratios[i]-0.0001;
			ctx.arc(x0,y0,radius,alpha0,alpha1,false);
			ctx.lineTo(x0,y0);

			var color = this._settings.color.call(this,data[i]);
			ctx.fillStyle = color;
			ctx.fill();

			/*text that needs being displayed inside the sector*/
			if(this._settings.pieInnerText)
				this._drawSectorLabel(x0,y0,5*radius/6,alpha0,alpha1,ky,this._settings.pieInnerText(data[i],totalValue),true);
			/*label outside the sector*/
			if(this._settings.label)
				this._drawSectorLabel(x0,y0,radius+this._settings.labelOffset,alpha0,alpha1,ky,this._settings.label(data[i]));
			/*drawing lower part for 3D pie*/
			if(ky!=1){
               	this._createLowerSector(ctx,x0,y0,alpha0,alpha1,radius,true);
              	ctx.fillStyle = "#000000";
				ctx.globalAlpha = 0.2;
				this._createLowerSector(ctx,x0,y0,alpha0,alpha1,radius,false);
				ctx.globalAlpha = 1;
				ctx.fillStyle = color;
            }
			/*creats map area (needed for events)*/
			map.addSector(data[i].id,alpha0,alpha1,x0-point0.x,y0-point0.y/ky,radius,ky,sIndex);
			
			alpha0 = alpha1;
		}
        /*renders radius lines and labels*/
       	ctx.globalAlpha = 0.8;
        var p;
        for(i=0;i< angles.length;i++){
            p = this._getPositionByAngle(angles[i],x0,y0,radius);
            this._drawLine(ctx,x0,y0,p.x,p.y,this._settings.lineColor.call(this,data[i]),2);
        }
        if(ky==1){
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ffffff";
			ctx.beginPath();
	    	ctx.arc(x0,y0,radius+1,0,2*Math.PI,false);
			ctx.stroke();
        }
		ctx.globalAlpha =1;

		ctx.scale(1,1/ky); 
	},
     /**
	*   returns list of values
	*   @param: data array
	*/
    _getValues:function(data){
        var v = [];
        for(var i = 0; i < data.length;i++)
           v.push(parseFloat(this._settings.value(data[i])||0));
        return v;
    },
    /**
	*   returns total value
	*   @param: the array of values
	*/
    _getTotalValue:function(values){
        var t=0;
        for(var i = 0; i < values.length;i++)
           t += values[i];
        return  t;
    },
     /**
	*   gets angles for all values
	*   @param: the array of values
    *   @param: total value (optional)
	*/
    _getRatios:function(values,totalValue){
        var value;
        var ratios = [];
        var prevSum = 0;
        totalValue = totalValue||this._getTotalValue(values);
		for(var i = 0; i < values.length;i++){
			value = values[i];

			ratios[i] = Math.PI*2*(totalValue?((value+prevSum)/totalValue):(1/values.length));
			prevSum += value;
		}
        return ratios;
    },
	/**
	*   returns calculated pie parameters: center position and radius
	*   @param: x - the width of a container
	*   @param: y - the height of a container
	*/
	_getPieParameters:function(point0,point1){
		/*var offsetX = 0;
		var offsetY = 0;
		if(this._settings.legend &&this._settings.legend.layout!="x")
			offsetX = this._settings.legend.width*(this._settings.legend.align=="right"?-1:1);
		var x0 = (x + offsetX)/2;
		if(this._settings.legend &&this._settings.legend.layout=="x")
			offsetY = this._settings.legend.height*(this._settings.legend.valign=="bottom"?-1:1);
		var y0 = (y+offsetY)/2;*/
		var width = point1.x-point0.x;
		var height = point1.y-point0.y;
		var x0 = point0.x+width/2;
		var y0 = point0.y+height/2;
		var radius = Math.min(width/2,height/2);
		return {"x":x0,"y":y0,"radius":radius};
	},
	/**
	*   creates lower part of sector in 3Dpie
	*   @param: ctx - canvas object
	*   @param: x0 - the horizontal position of the pie center
	*   @param: y0 - the vertical position of the pie center
	*   @param: a0 - the angle that defines the first edge of a sector
	*   @param: a1 - the angle that defines the second edge of a sector
	*   @param: R - pie radius
	*   @param: line (boolean) - if the sector needs a border
	*/
	_createLowerSector:function(ctx,x0,y0,a1,a2,R,line){
		ctx.lineWidth = 1;
		/*checks if the lower sector needs being displayed*/
		if(!((a1<=0 && a2>=0)||(a1>=0 && a2<=Math.PI)||(Math.abs(a1-Math.PI)>0.003&&a1<=Math.PI && a2>=Math.PI))) return;
		
		if(a1<=0 && a2>=0){
			a1 = 0;
			line = false;
			this._drawSectorLine(ctx,x0,y0,R,a1,a2);
		}
		if(a1<=Math.PI && a2>=Math.PI){
			a2 = Math.PI;
			line = false;
			this._drawSectorLine(ctx,x0,y0,R,a1,a2);
		}
		/*the height of 3D pie*/
		var offset = (this._settings.height||Math.floor(R/4))/this._settings.cant;
		ctx.beginPath(); 
		ctx.arc(x0,y0,R,a1,a2,false);
		ctx.lineTo(x0+R*Math.cos(a2),y0+R*Math.sin(a2)+offset);
		ctx.arc(x0,y0+offset,R,a2,a1,true);
		ctx.lineTo(x0+R*Math.cos(a1),y0+R*Math.sin(a1));
		ctx.fill();
		if(line)
			ctx.stroke();
	},
	/**
	*   draws a serctor arc
	*/
	_drawSectorLine:function(ctx,x0,y0,R,a1,a2){
		ctx.beginPath(); 
		ctx.arc(x0,y0,R,a1,a2,false);
		ctx.stroke();
	},
	/**
	*   adds a shadow to pie
	*   @param: ctx - canvas object
	*   @param: x - the horizontal position of the pie center
	*   @param: y - the vertical position of the pie center
	*   @param: R - pie radius
	*/
	_addShadow:function(ctx,x,y,R){
        ctx.globalAlpha = 0.5;
		var shadows = ["#c4c4c4","#c6c6c6","#cacaca","#dcdcdc","#dddddd","#e0e0e0","#eeeeee","#f5f5f5","#f8f8f8"];
		for(var i = shadows.length-1;i>-1;i--){
			ctx.beginPath();
			ctx.fillStyle = shadows[i]; 
			ctx.arc(x+1,y+1,R+i,0,Math.PI*2,true);
			ctx.fill();  
		}
         ctx.globalAlpha = 1
	},
	/**
		*   returns a gray gradient
		*   @param: gradient - gradient object
	*/
	_getGrayGradient:function(gradient){
		gradient.addColorStop(0.0,"#ffffff");
		gradient.addColorStop(0.7,"#7a7a7a");
		gradient.addColorStop(1.0,"#000000");
		return gradient;
	},
	/**
	*   adds gray radial gradient
	*   @param: ctx - canvas object
	*   @param: x - the horizontal position of the pie center
	*   @param: y - the vertical position of the pie center
	*   @param: radius - pie radius
	*   @param: x0 - the horizontal position of a gradient center
	*   @param: y0 - the vertical position of a gradient center
	*/
	_showRadialGradient:function(ctx,x,y,radius,x0,y0){
			//ctx.globalAlpha = 0.3;
			ctx.beginPath();
			var gradient; 
			if(typeof this._settings.gradient!= "function"){
				gradient = ctx.createRadialGradient(x0,y0,radius/4,x,y,radius);
				gradient = this._getGrayGradient(gradient);
			}
			else gradient = this._settings.gradient(gradient);
			ctx.fillStyle = gradient;
			ctx.arc(x,y,radius,0,Math.PI*2,true);
			ctx.fill();
			//ctx.globalAlpha = 1;
			ctx.globalAlpha = 0.7;
	},
	/**
	*   returns the calculates pie parameters: center position and radius
	*   @param: ctx - canvas object
	*   @param: x0 - the horizontal position of the pie center
	*   @param: y0 - the vertical position of the pie center
	*   @param: R - pie radius
	*   @param: alpha1 - the angle that defines the 1st edge of a sector
	*   @param: alpha2 - the angle that defines the 2nd edge of a sector
	*   @param: ky - the value that defines an angle of inclination
	*   @param: text - label text
	*   @param: in_width (boolean) - if label needs being displayed inside a pie
	*/
	_drawSectorLabel:function(x0,y0,R,alpha1,alpha2,ky,text,in_width){
		var t = this.canvases[0].renderText(0,0,text,0,1);
		if (!t) return;

		//get existing width of text
		var labelWidth = t.scrollWidth;
		t.style.width = labelWidth+"px";	//adjust text label to fit all text
		if (labelWidth>x0) labelWidth = x0;	//the text can't be greater than half of view

		//calculate expected correction based on default font metrics
		var width = (alpha2-alpha1<0.2?4:8);
		if (in_width) width = labelWidth/1.8;
		var alpha = alpha1+(alpha2-alpha1)/2;

		//position and its correction
		R = R-(width-8)/2;
		var corr_x = - width;
		var corr_y = -8;
		var align = "right";

		//for items in left upper and lower sector
		if(alpha>=Math.PI/2 && alpha<Math.PI || alpha<=3*Math.PI/2 && alpha>=Math.PI){
			corr_x = -labelWidth-corr_x+1;/*correction for label width*/
			align = "left";
		}

		//calculate position of text
		//basically get point at center of pie sector
		var offset = 0;

		if(!in_width&&ky<1&&(alpha>0&&alpha<Math.PI))
			offset = (this._settings.height||Math.floor(R/4))/ky;

		var y = (y0+Math.floor((R+offset)*Math.sin(alpha)))*ky+corr_y;
		var x = x0+Math.floor((R+width/2)*Math.cos(alpha))+corr_x;
		
		//if pie sector starts in left of right part pie, related text
		//must be placed to the left of to the right of pie as well
		var left_end = (alpha2 < Math.PI/2+0.01);
		var left_start = (alpha1 < Math.PI/2);
		if (left_start && left_end){
			x = Math.max(x,x0+3);	//right part of pie
			/*if(alpha2-alpha1<0.2)
				x = x0;*/
		}
		else if (!left_start && !left_end)
			x = Math.min(x,x0-labelWidth);	//left part of pie
		else if (!in_width&&(alpha>=Math.PI/2 && alpha<Math.PI || alpha<=3*Math.PI/2 && alpha>=Math.PI)){
			x += labelWidth/3;
		}
		

		//we need to set position of text manually, based on above calculations
		t.style.top  = y+"px";
		t.style.left = x+"px";
		t.style.width = labelWidth+"px";
		t.style.textAlign = align;
		t.style.whiteSpace = "nowrap";
	}
};

dhtmlx.chart.pie3D = {
	pvt_render_pie3D:function(ctx,data,x,y,sIndex,map){
		this._renderPie(ctx,data,x,y,this._settings.cant,map);
	}
};
dhtmlx.chart.donut = {
	pvt_render_donut:function(ctx,data,point0,point1,sIndex,map){
        if(!data.length)
			return;
		this._renderPie(ctx,data,point0,point1,1,map);
        var config = this._settings;
		var coord = this._getPieParameters(point0,point1);
		var pieRadius = (config.radius?config.radius:coord.radius);
	    var innerRadius = ((config.innerRadius&&(config.innerRadius<pieRadius))?config.innerRadius:pieRadius/3);
        var x0 = (config.x?config.x:coord.x);
		var y0 = (config.y?config.y:coord.y);
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
		ctx.arc(x0,y0,innerRadius,0,Math.PI*2,true);
		ctx.fill();
    }
};


/* DHX DEPEND FROM FILE 'template.js'*/


/*
	Template - handles html templates
*/

/*DHX:Depend dhtmlx.js*/

dhtmlx.Template={
	_cache:{
	},
	empty:function(){	
		return "";	
	},
	setter:function(value){
		return dhtmlx.Template.fromHTML(value);
	},
	obj_setter:function(value){
		var f = dhtmlx.Template.setter(value);
		var obj = this;
		return function(){
			return f.apply(obj, arguments);
		};
	},
	fromHTML:function(str){
		if (typeof str == "function") return str;
		if (this._cache[str])
			return this._cache[str];
			
	//supported idioms
	// {obj} => value
	// {obj.attr} => named attribute or value of sub-tag in case of xml
	// {obj.attr?some:other} conditional output
	// {-obj => sub-template
		str=(str||"").toString();		
		str=str.replace(/[\r\n]+/g,"\\n");
		str=str.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g,"\"+(obj.$1?\"$2\":\"$3\")+\"");
		str=str.replace(/\{common\.([^}\(]*)\}/g,"\"+common.$1+\"");
		str=str.replace(/\{common\.([^\}\(]*)\(\)\}/g,"\"+(common.$1?common.$1(obj):\"\")+\"");
		str=str.replace(/\{obj\.([^}]*)\}/g,"\"+obj.$1+\"");
		str=str.replace(/#([a-z0-9_]+)#/gi,"\"+obj.$1+\"");
		str=str.replace(/\{obj\}/g,"\"+obj+\"");
		str=str.replace(/\{-obj/g,"{obj");
		str=str.replace(/\{-common/g,"{common");
		str="return \""+str+"\";";
		return this._cache[str]= Function("obj","common",str);
	}
};

dhtmlx.Type={
	/*
		adds new template-type
		obj - object to which template will be added
		data - properties of template
	*/
	add:function(obj, data){ 
		//auto switch to prototype, if name of class was provided
		if (!obj.types && obj.prototype.types)
			obj = obj.prototype;
		//if (typeof data == "string")
		//	data = { template:data };
			
		if (dhtmlx.assert_enabled())
			this.assert_event(data);
		
		var name = data.name||"default";
		
		//predefined templates - autoprocessing
		this._template(data);
		this._template(data,"edit");
		this._template(data,"loading");
		
		obj.types[name]=dhtmlx.extend(dhtmlx.extend({},(obj.types[name]||this._default)),data);	
		return name;
	},
	//default template value - basically empty box with 5px margin
	_default:{
		css:"default",
		template:function(){ return ""; },
		template_edit:function(){ return ""; },
		template_loading:function(){ return "..."; },
		width:150,
		height:80,
		margin:5,
		padding:0
	},
	//template creation helper
	_template:function(obj,name){ 
		name = "template"+(name?("_"+name):"");
		var data = obj[name];
		//if template is a string - check is it plain string or reference to external content
		if (data && (typeof data == "string")){
			if (data.indexOf("->")!=-1){
				data = data.split("->");
				switch(data[0]){
					case "html": 	//load from some container on the page
						data = dhtmlx.html.getValue(data[1]).replace(/\"/g,"\\\"");
						break;
					case "http": 	//load from external file
						data = new dhtmlx.ajax().sync().get(data[1],{uid:(new Date()).valueOf()}).responseText;
						break;
					default:
						//do nothing, will use template as is
						break;
				}
			}
			obj[name] = dhtmlx.Template.fromHTML(data);
		}
	}
};



/* DHX DEPEND FROM FILE 'single_render.js'*/


/*
	REnders single item. 
	Can be used for elements without datastore, or with complex custom rendering logic
	
	@export
		render
*/

/*DHX:Depend template.js*/

dhtmlx.SingleRender={
	_init:function(){
	},
	//convert item to the HTML text
	_toHTML:function(obj){
			/*
				this one doesn't support per-item-$template
				it has not sense, because we have only single item per object
			*/
			return this.type._item_start(obj,this.type)+this.type.template(obj,this.type)+this.type._item_end;
	},
	//render self, by templating data object
	render:function(){
		if (!this.callEvent || this.callEvent("onBeforeRender",[this.data])){
			if (this.data)
				this._dataobj.innerHTML = this._toHTML(this.data);
			if (this.callEvent) this.callEvent("onAfterRender",[]);
		}
	}
};


/* DHX DEPEND FROM FILE 'tooltip.js'*/


/*
	UI: Tooltip
	
	@export
		show
		hide
*/

/*DHX:Depend tooltip.css*/
/*DHX:Depend template.js*/
/*DHX:Depend single_render.js*/

dhtmlx.ui.Tooltip=function(container){
	this.name = "Tooltip";
	this.version = "3.0";
	
	if (dhtmlx.assert_enabled()) this._assert();

	if (typeof container == "string"){
		container = { template:container };
	}
		
	dhtmlx.extend(this, dhtmlx.Settings);
	dhtmlx.extend(this, dhtmlx.SingleRender);
	this._parseSettings(container,{
		type:"default",
		dy:0,
		dx:20
	});
	
	//create  container for future tooltip
	this._dataobj = this._obj = document.createElement("DIV");
	this._obj.className="dhx_tooltip";
	dhtmlx.html.insertBefore(this._obj,document.body.firstChild);
};
dhtmlx.ui.Tooltip.prototype = {
	//show tooptip
	//pos - object, pos.x - left, pox.y - top
	show:function(data,pos){
		if (this._disabled) return;
		//render sefl only if new data was provided
		if (this.data!=data){
			this.data=data;
			this.render(data);
		}
		//show at specified position
		this._obj.style.top = pos.y+this._settings.dy+"px";
		this._obj.style.left = pos.x+this._settings.dx+"px";
		this._obj.style.display="block";
	},
	//hide tooltip
	hide:function(){
		this.data=null; //nulify, to be sure that on next show it will be fresh-rendered
		this._obj.style.display="none";
	},
	disable:function(){
		this._disabled = true;	
	},
	enable:function(){
		this._disabled = false;
	},
	types:{
		"default":dhtmlx.Template.fromHTML("{obj.id}")
	},
	template_item_start:dhtmlx.Template.empty,
	template_item_end:dhtmlx.Template.empty
};



/* DHX DEPEND FROM FILE 'autotooltip.js'*/


/*
	Behavior: AutoTooltip - links tooltip to data driven item
*/

/*DHX:Depend tooltip.js*/

dhtmlx.AutoTooltip = {
	tooltip_setter:function(value){
		var t = new dhtmlx.ui.Tooltip(value);
		this.attachEvent("onMouseMove",function(id,e){	//show tooltip on mousemove
			t.show(this.get(id),dhtmlx.html.pos(e));
		});
		this.attachEvent("onMouseOut",function(id,e){	//hide tooltip on mouseout
			t.hide();
		});
		this.attachEvent("onMouseMoving",function(id,e){	//hide tooltip just after moving start
			t.hide();
		});
		return t;
	}
};


/* DHX DEPEND FROM FILE 'load.js'*/


/* 
	ajax operations 
	
	can be used for direct loading as
		dhtmlx.ajax(ulr, callback)
	or
		dhtmlx.ajax().item(url)
		dhtmlx.ajax().post(url)

*/

/*DHX:Depend dhtmlx.js*/

dhtmlx.ajax = function(url,call,master){
	//if parameters was provided - made fast call
	if (arguments.length!==0){
		var http_request = new dhtmlx.ajax();
		if (master) http_request.master=master;
		http_request.get(url,null,call);
	}
	if (!this.getXHR) return new dhtmlx.ajax(); //allow to create new instance without direct new declaration
	
	return this;
};
dhtmlx.ajax.prototype={
	//creates xmlHTTP object
	getXHR:function(){
		if (dhtmlx._isIE)
		 return new ActiveXObject("Microsoft.xmlHTTP");
		else 
		 return new XMLHttpRequest();
	},
	/*
		send data to the server
		params - hash of properties which will be added to the url
		call - callback, can be an array of functions
	*/
	send:function(url,params,call){
		var x=this.getXHR();
		if (typeof call == "function")
		 call = [call];
		//add extra params to the url
		if (typeof params == "object"){
			var t=[];
			for (var a in params){
				var value = params[a];
				if (value === null || value === dhtmlx.undefined)
					value = "";
				t.push(a+"="+encodeURIComponent(value));// utf-8 escaping
		 	}
			params=t.join("&");
		}
		if (params && !this.post){
			url=url+(url.indexOf("?")!=-1 ? "&" : "?")+params;
			params=null;
		}
		
		x.open(this.post?"POST":"GET",url,!this._sync);
		if (this.post)
		 x.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		 
		//async mode, define loading callback
		//if (!this._sync){
		 var self=this;
		 x.onreadystatechange= function(){
			if (!x.readyState || x.readyState == 4){
				//dhtmlx.log_full_time("data_loading");	//log rendering time
				if (call && self) 
					for (var i=0; i < call.length; i++)	//there can be multiple callbacks
					 if (call[i])
						call[i].call((self.master||self),x.responseText,x.responseXML,x);
				self.master=null;
				call=self=null;	//anti-leak
			}
		 };
		//}
		
		x.send(params||null);
		return x; //return XHR, which can be used in case of sync. mode
	},
	//GET request
	get:function(url,params,call){
		this.post=false;
		return this.send(url,params,call);
	},
	//POST request
	post:function(url,params,call){
		this.post=true;
		return this.send(url,params,call);
	}, 
	sync:function(){
		this._sync = true;
		return this;
	}
};


dhtmlx.AtomDataLoader={
	_init:function(config){
		//prepare data store
		this.data = {}; 
		if (config){
			this._settings.datatype = config.datatype||"json";
			this._after_init.push(this._load_when_ready);
		}
	},
	_load_when_ready:function(){
		this._ready_for_data = true;
		
		if (this._settings.url)
			this.url_setter(this._settings.url);
		if (this._settings.data)
			this.data_setter(this._settings.data);
	},
	url_setter:function(value){
		if (!this._ready_for_data) return value;
		this.load(value, this._settings.datatype);	
		return value;
	},
	data_setter:function(value){
		if (!this._ready_for_data) return value;
		this.parse(value, this._settings.datatype);
		return true;
	},
	//loads data from external URL
	load:function(url,call){
		this.callEvent("onXLS",[]);
		if (typeof call == "string"){	//second parameter can be a loading type or callback
			this.data.driver = dhtmlx.DataDriver[call];
			call = arguments[2];
		}
		else
			this.data.driver = dhtmlx.DataDriver["xml"];
		//load data by async ajax call
		dhtmlx.ajax(url,[this._onLoad,call],this);
	},
	//loads data from object
	parse:function(data,type){
		this.callEvent("onXLS",[]);
		this.data.driver = dhtmlx.DataDriver[type||"xml"];
		this._onLoad(data,null);
	},
	//default after loading callback
	_onLoad:function(text,xml,loader){
		var driver = this.data.driver;
		var top = driver.getRecords(driver.toObject(text,xml))[0];
		this.data=(driver?driver.getDetails(top):text);
		this.callEvent("onXLE",[]);
	},
	_check_data_feed:function(data){
		if (!this._settings.dataFeed || this._ignore_feed || !data) return true;
		var url = this._settings.dataFeed;
		if (typeof url == "function")
			return url.call(this, (data.id||data), data);
		url = url+(url.indexOf("?")==-1?"?":"&")+"action=get&id="+encodeURIComponent(data.id||data);
		this.callEvent("onXLS",[]);
		dhtmlx.ajax(url, function(text,xml){
			this._ignore_feed=true;
			this.setValues(dhtmlx.DataDriver.json.toObject(text)[0]);
			this._ignore_feed=false;
			this.callEvent("onXLE",[]);
		}, this);
		return false;
	}
};

/*
	Abstraction layer for different data types
*/

dhtmlx.DataDriver={};
dhtmlx.DataDriver.json={
	//convert json string to json object if necessary
	toObject:function(data){
		if (!data) data="[]";
		if (typeof data == "string"){
		 eval ("dhtmlx.temp="+data);
		 return dhtmlx.temp;
		}
		return data;
	},
	//get array of records
	getRecords:function(data){
		if (data && !(data instanceof Array))
		 return [data];
		return data;
	},
	//get hash of properties for single record
	getDetails:function(data){
		return data;
	},
	//get count of data and position at which new data need to be inserted
	getInfo:function(data){
		return { 
		 _size:(data.total_count||0),
		 _from:(data.pos||0),
		 _key:(data.dhx_security)
		};
	}
};

dhtmlx.DataDriver.json_ext={
	//convert json string to json object if necessary
	toObject:function(data){
		if (!data) data="[]";
		if (typeof data == "string"){
			var temp;
			eval ("temp="+data);
			dhtmlx.temp = [];
			var header  = temp.header;
			for (var i = 0; i < temp.data.length; i++) {
				var item = {};
				for (var j = 0; j < header.length; j++) {
					if (typeof(temp.data[i][j]) != "undefined")
						item[header[j]] = temp.data[i][j];
				}
				dhtmlx.temp.push(item);
			}
			return dhtmlx.temp;
		}
		return data;
	},
	//get array of records
	getRecords:function(data){
		if (data && !(data instanceof Array))
		 return [data];
		return data;
	},
	//get hash of properties for single record
	getDetails:function(data){
		return data;
	},
	//get count of data and position at which new data need to be inserted
	getInfo:function(data){
		return {
		 _size:(data.total_count||0),
		 _from:(data.pos||0)
		};
	}
};

dhtmlx.DataDriver.html={
	/*
		incoming data can be
		 - collection of nodes
		 - ID of parent container
		 - HTML text
	*/
	toObject:function(data){
		if (typeof data == "string"){
		 var t=null;
		 if (data.indexOf("<")==-1)	//if no tags inside - probably its an ID
			t = dhtmlx.toNode(data);
		 if (!t){
			t=document.createElement("DIV");
			t.innerHTML = data;
		 }
		 
		 return t.getElementsByTagName(this.tag);
		}
		return data;
	},
	//get array of records
	getRecords:function(data){
		if (data.tagName)
		 return data.childNodes;
		return data;
	},
	//get hash of properties for single record
	getDetails:function(data){
		return dhtmlx.DataDriver.xml.tagToObject(data);
	},
	//dyn loading is not supported by HTML data source
	getInfo:function(data){
		return { 
		 _size:0,
		 _from:0
		};
	},
	tag: "LI"
};

dhtmlx.DataDriver.jsarray={
	//eval jsarray string to jsarray object if necessary
	toObject:function(data){
		if (typeof data == "string"){
		 eval ("dhtmlx.temp="+data);
		 return dhtmlx.temp;
		}
		return data;
	},
	//get array of records
	getRecords:function(data){
		return data;
	},
	//get hash of properties for single record, in case of array they will have names as "data{index}"
	getDetails:function(data){
		var result = {};
		for (var i=0; i < data.length; i++) 
		 result["data"+i]=data[i];
		 
		return result;
	},
	//dyn loading is not supported by js-array data source
	getInfo:function(data){
		return { 
		 _size:0,
		 _from:0
		};
	}
};

dhtmlx.DataDriver.csv={
	//incoming data always a string
	toObject:function(data){
		return data;
	},
	//get array of records
	getRecords:function(data){
		return data.split(this.row);
	},
	//get hash of properties for single record, data named as "data{index}"
	getDetails:function(data){
		data = this.stringToArray(data);
		var result = {};
		for (var i=0; i < data.length; i++) 
		 result["data"+i]=data[i];
		 
		return result;
	},
	//dyn loading is not supported by csv data source
	getInfo:function(data){
		return { 
		 _size:0,
		 _from:0
		};
	},
	//split string in array, takes string surrounding quotes in account
	stringToArray:function(data){
		data = data.split(this.cell);
		for (var i=0; i < data.length; i++)
		 data[i] = data[i].replace(/^[ \t\n\r]*(\"|)/g,"").replace(/(\"|)[ \t\n\r]*$/g,"");
		return data;
	},
	row:"\n",	//default row separator
	cell:","	//default cell separator
};

dhtmlx.DataDriver.xml={
	//convert xml string to xml object if necessary
	toObject:function(text,xml){
		if (xml && (xml=this.checkResponse(text,xml)))	//checkResponse - fix incorrect content type and extra whitespaces errors
		 return xml;
		if (typeof text == "string"){
		 return this.fromString(text);
		}
		return text;
	},
	//get array of records
	getRecords:function(data){
		return this.xpath(data,this.records);
	},
	records:"/*/item",
	//get hash of properties for single record
	getDetails:function(data){
		return this.tagToObject(data,{});
	},
	//get count of data and position at which new data_loading need to be inserted
	getInfo:function(data){
		return { 
		 _size:(data.documentElement.getAttribute("total_count")||0),
		 _from:(data.documentElement.getAttribute("pos")||0),
		 _key:(data.documentElement.getAttribute("dhx_security"))
		};
	},
	//xpath helper
	xpath:function(xml,path){
		if (window.XPathResult){	//FF, KHTML, Opera
		 var node=xml;
		 if(xml.nodeName.indexOf("document")==-1)
		 xml=xml.ownerDocument;
		 var res = [];
		 var col = xml.evaluate(path, node, null, XPathResult.ANY_TYPE, null);
		 var temp = col.iterateNext();
		 while (temp){ 
			res.push(temp);
			temp = col.iterateNext();
		}
		return res;
		}	
		else {
			var test = true;
			try {
				if (typeof(xml.selectNodes)=="undefined")
					test = false;
			} catch(e){ /*IE7 and below can't operate with xml object*/ }
			//IE
			if (test)
				return xml.selectNodes(path);
			else {
				//Google hate us, there is no interface to do XPath
				//use naive approach
				var name = path.split("/").pop();
				return xml.getElementsByTagName(name);
			}
		}
	},
	//convert xml tag to js object, all subtags and attributes are mapped to the properties of result object
	tagToObject:function(tag,z){
		z=z||{};
		var flag=false;
		
		//map attributes
		var a=tag.attributes;
		if(a && a.length){
			for (var i=0; i<a.length; i++)
		 		z[a[i].name]=a[i].value;
		 	flag = true;
	 	}
		//map subtags
		
		var b=tag.childNodes;
		var state = {};
		for (var i=0; i<b.length; i++){
			if (b[i].nodeType==1){
				var name = b[i].tagName;
				if (typeof z[name] != "undefined"){
					if (!(z[name] instanceof Array))
						z[name]=[z[name]];
					z[name].push(this.tagToObject(b[i],{}));
				}
				else
					z[b[i].tagName]=this.tagToObject(b[i],{});	//sub-object for complex subtags
				flag=true;
			}
		}
		
		if (!flag)
			return this.nodeValue(tag);
		//each object will have its text content as "value" property
		z.value = this.nodeValue(tag);
		return z;
	},
	//get value of xml node 
	nodeValue:function(node){
		if (node.firstChild)
		 return node.firstChild.data;	//FIXME - long text nodes in FF not supported for now
		return "";
	},
	//convert XML string to XML object
	fromString:function(xmlString){
		if (window.DOMParser && !dhtmlx._isIE)		// FF, KHTML, Opera
		 return (new DOMParser()).parseFromString(xmlString,"text/xml");
		if (window.ActiveXObject){	// IE, utf-8 only 
		 var temp=new ActiveXObject("Microsoft.xmlDOM");
		 temp.loadXML(xmlString);
		 return temp;
		}
		dhtmlx.error("Load from xml string is not supported");
	},
	//check is XML correct and try to reparse it if its invalid
	checkResponse:function(text,xml){ 
		if (xml && ( xml.firstChild && xml.firstChild.tagName != "parsererror") )
			return xml;
		//parsing as string resolves incorrect content type
		//regexp removes whitespaces before xml declaration, which is vital for FF
		var a=this.fromString(text.replace(/^[\s]+/,""));
		if (a) return a;
		
		dhtmlx.error("xml can't be parsed",text);
	}
};




/* DHX DEPEND FROM FILE 'datastore.js'*/


/*DHX:Depend load.js*/
/*DHX:Depend dhtmlx.js*/

/*
	Behavior:DataLoader - load data in the component
	
	@export
		load
		parse
*/
dhtmlx.DataLoader={
	_init:function(config){
		//prepare data store
		config = config || "";
		this.name = "DataStore";
		this.data = (config.datastore)||(new dhtmlx.DataStore());
		this._readyHandler = this.data.attachEvent("onStoreLoad",dhtmlx.bind(this._call_onready,this));
	},
	//loads data from external URL
	load:function(url,call){
		dhtmlx.AtomDataLoader.load.apply(this, arguments);
		//prepare data feed for dyn. loading
		if (!this.data.feed)
		 this.data.feed = function(from,count){
			//allow only single request at same time
			if (this._load_count)
				return this._load_count=[from,count];	//save last ignored request
			else
				this._load_count=true;
				
			this.load(url+((url.indexOf("?")==-1)?"?":"&")+"posStart="+from+"&count="+count,function(){
				//after loading check if we have some ignored requests
				var temp = this._load_count;
				this._load_count = false;
				if (typeof temp =="object")
					this.data.feed.apply(this, temp);	//load last ignored request
			});
		};
	},
	//default after loading callback
	_onLoad:function(text,xml,loader){
		this.data._parse(this.data.driver.toObject(text,xml));
		this.callEvent("onXLE",[]);
		if(this._readyHandler){
			this.data.detachEvent(this._readyHandler);
			this._readyHandler = null;
		}
	},
	dataFeed_setter:function(value){
		this.data.attachEvent("onBeforeFilter", dhtmlx.bind(function(text, value){
			if (this._settings.dataFeed){
				var filter = {};
				if (!text && !filter) return;
				if (typeof text == "function"){
					if (!value) return;
					text(value, filter);
				} else 
					filter = { text:value };

				this.clearAll();
				var url = this._settings.dataFeed;
				if (typeof url == "function")
					return url.call(this, value, filter);
				var urldata = [];
				for (var key in filter)
					urldata.push("dhx_filter["+key+"]="+encodeURIComponent(filter[key]));
				this.load(url+(url.indexOf("?")<0?"?":"&")+urldata.join("&"), this._settings.datatype);
				return false;
			}
		},this));
		return value;
	},
	_call_onready:function(){
		if (this._settings.ready){
			var code = dhtmlx.toFunctor(this._settings.ready);
			if (code && code.call) code.apply(this, arguments);
		}
	}
};


/*
	DataStore is not a behavior, it standalone object, which represents collection of data.
	Call provideAPI to map data API

	@export
		exists
		idByIndex
		indexById
		get
		set
		refresh
		dataCount
		sort
		filter
		next
		previous
		clearAll
		first
		last
*/
dhtmlx.DataStore = function(){
	this.name = "DataStore";
	
	dhtmlx.extend(this, dhtmlx.EventSystem);
	
	this.setDriver("xml");	//default data source is an XML
	this.pull = {};						//hash of IDs
	this.order = dhtmlx.toArray();		//order of IDs
};

dhtmlx.DataStore.prototype={
	//defines type of used data driver
	//data driver is an abstraction other different data formats - xml, json, csv, etc.
	setDriver:function(type){
		dhtmlx.assert(dhtmlx.DataDriver[type],"incorrect DataDriver");
		this.driver = dhtmlx.DataDriver[type];
	},
	//process incoming raw data
	_parse:function(data){
		this.callEvent("onParse", [this.driver, data]);
		if (this._filter_order)
			this.filter();
			
		//get size and position of data
		var info = this.driver.getInfo(data);
		if (info._key)
			dhtmlx.security_key = info._key;
		//get array of records

		var recs = this.driver.getRecords(data);
		var from = (info._from||0)*1;
		
		if (from === 0 && this.order[0]) //update mode
			from = this.order.length;
		
		var j=0;
		for (var i=0; i<recs.length; i++){
			//get has of details for each record
			var temp = this.driver.getDetails(recs[i]);
			var id = this.id(temp); 	//generate ID for the record
			if (!this.pull[id]){		//if such ID already exists - update instead of insert
				this.order[j+from]=id;	
				j++;
			}
			this.pull[id]=temp;
			//if (this._format)	this._format(temp);
			
			if (this.extraParser)
				this.extraParser(temp);
			if (this._scheme){ 
				if (this._scheme.$init)
					this._scheme.$update(temp);
				else if (this._scheme.$update)
					this._scheme.$update(temp);
			}
		}

		//for all not loaded data
		for (var i=0; i < info._size; i++)
			if (!this.order[i]){
				var id = dhtmlx.uid();
				var temp = {id:id, $template:"loading"};	//create fake records
				this.pull[id]=temp;
				this.order[i]=id;
			}

		this.callEvent("onStoreLoad",[this.driver, data]);
		//repaint self after data loading
		this.refresh();
	},
	//generate id for data object
	id:function(data){
		return data.id||(data.id=dhtmlx.uid());
	},
	changeId:function(old, newid){
		dhtmlx.assert(this.pull[old],"Can't change id, for non existing item: "+old);
		this.pull[newid] = this.pull[old];
		this.pull[newid].id = newid;
		this.order[this.order.find(old)]=newid;
		if (this._filter_order)
			this._filter_order[this._filter_order.find(old)]=newid;
		this.callEvent("onIdChange", [old, newid]);
		if (this._render_change_id)
			this._render_change_id(old, newid);
	},
	get:function(id){
		return this.item(id);
	},
	set:function(id, data){
		return this.update(id, data);
	},
	//get data from hash by id
	item:function(id){
		return this.pull[id];
	},
	//assigns data by id
	update:function(id,data){
		if (this._scheme && this._scheme.$update)
			this._scheme.$update(data);
		if (this.callEvent("onBeforeUpdate", [id, data]) === false) return false;
		this.pull[id]=data;
		this.refresh(id);
	},
	//sends repainting signal
	refresh:function(id){
		if (this._skip_refresh) return; 
		
		if (id)
			this.callEvent("onStoreUpdated",[id, this.pull[id], "update"]);
		else
			this.callEvent("onStoreUpdated",[null,null,null]);
	},
	silent:function(code){
		this._skip_refresh = true;
		code.call(this);
		this._skip_refresh = false;
	},
	//converts range IDs to array of all IDs between them
	getRange:function(from,to){		
		//if some point is not defined - use first or last id
		//BEWARE - do not use empty or null ID
		if (from)
			from = this.indexById(from);
		else 
			from = this.startOffset||0;
		if (to)
			to = this.indexById(to);
		else {
			to = Math.min((this.endOffset||Infinity),(this.dataCount()-1));
			if (to<0) to = 0; //we have not data in the store
		}

		if (from>to){ //can be in case of backward shift-selection
			var a=to; to=from; from=a;
		}
				
		return this.getIndexRange(from,to);
	},
	//converts range of indexes to array of all IDs between them
	getIndexRange:function(from,to){
		to=Math.min((to||Infinity),this.dataCount()-1);
		
		var ret=dhtmlx.toArray(); //result of method is rich-array
		for (var i=(from||0); i <= to; i++)
			ret.push(this.item(this.order[i]));
		return ret;
	},
	//returns total count of elements
	dataCount:function(){
		return this.order.length;
	},
	//returns truy if item with such ID exists
	exists:function(id){
		return !!(this.pull[id]);
	},
	//nextmethod is not visible on component level, check DataMove.move
	//moves item from source index to the target index
	move:function(sindex,tindex){
		if (sindex<0 || tindex<0){
			dhtmlx.error("DataStore::move","Incorrect indexes");
			return;
		}
		
		var id = this.idByIndex(sindex);
		var obj = this.item(id);
		
		this.order.removeAt(sindex);	//remove at old position
		//if (sindex<tindex) tindex--;	//correct shift, caused by element removing
		this.order.insertAt(id,Math.min(this.order.length, tindex));	//insert at new position
		
		//repaint signal
		this.callEvent("onStoreUpdated",[id,obj,"move"]);
	},
	scheme:function(config){
		/*
			some.scheme({
				order:1,
				name:"dummy",
				title:""
			})
		*/
		this._scheme = config;
		
	},
	sync:function(source, filter, silent){
		if (typeof filter != "function"){
			silent = filter;
			filter = null;
		}
		
		if (dhtmlx.debug_bind){
			this.debug_sync_master = source; 
			dhtmlx.log("[sync] "+this.debug_bind_master.name+"@"+this.debug_bind_master._settings.id+" <= "+this.debug_sync_master.name+"@"+this.debug_sync_master._settings.id);
		}
		
		var topsource = source;
		if (source.name != "DataStore")
			source = source.data;

		var sync_logic = dhtmlx.bind(function(id, data, mode){
			if (mode != "update" || filter) 
				id = null;

			if (!id){
				this.order = dhtmlx.toArray([].concat(source.order));
				this._filter_order = null;
				this.pull = source.pull;
				
				if (filter)
					this.silent(filter);
				
				if (this._on_sync)
					this._on_sync();
			}

			if (dhtmlx.debug_bind)
				dhtmlx.log("[sync:request] "+this.debug_sync_master.name+"@"+this.debug_sync_master._settings.id + " <= "+this.debug_bind_master.name+"@"+this.debug_bind_master._settings.id);
			if (!silent) 
				this.refresh(id);
			else
				silent = false;
		}, this);
		
		source.attachEvent("onStoreUpdated", sync_logic);
		this.feed = function(from, count){
			topsource.loadNext(count, from);
		};
		sync_logic();
	},
	//adds item to the store
	add:function(obj,index){
		
		if (this._scheme){
			obj = obj||{};
			for (var key in this._scheme)
				obj[key] = obj[key]||this._scheme[key];
			if (this._scheme){ 
				if (this._scheme.$init)
					this._scheme.$update(obj);
				else if (this._scheme.$update)
					this._scheme.$update(obj);
			}
		}
		
		//generate id for the item
		var id = this.id(obj);
		
		//by default item is added to the end of the list
		var data_size = this.dataCount();
		
		if (dhtmlx.isNotDefined(index) || index < 0)
			index = data_size; 
		//check to prevent too big indexes			
		if (index > data_size){
			dhtmlx.log("Warning","DataStore:add","Index of out of bounds");
			index = Math.min(this.order.length,index);
		}
		if (this.callEvent("onBeforeAdd", [id, obj, index]) === false) return false;

		if (this.exists(id)) return dhtmlx.error("Not unique ID");
		
		this.pull[id]=obj;
		this.order.insertAt(id,index);
		if (this._filter_order){	//adding during filtering
			//we can't know the location of new item in full dataset, making suggestion
			//put at end by default
			var original_index = this._filter_order.length;
			//put at start only if adding to the start and some data exists
			if (!index && this.order.length)
				original_index = 0;
			
			this._filter_order.insertAt(id,original_index);
		}
		this.callEvent("onafterAdd",[id,index]);
		//repaint signal
		this.callEvent("onStoreUpdated",[id,obj,"add"]);
		return id;
	},
	
	//removes element from datastore
	remove:function(id){
		//id can be an array of IDs - result of getSelect, for example
		if (id instanceof Array){
			for (var i=0; i < id.length; i++)
				this.remove(id[i]);
			return;
		}
		if (this.callEvent("onBeforeDelete",[id]) === false) return false;
		if (!this.exists(id)) return dhtmlx.error("Not existing ID",id);
		var obj = this.item(id);	//save for later event
		//clear from collections
		this.order.remove(id);
		if (this._filter_order) 
			this._filter_order.remove(id);
			
		delete this.pull[id];
		this.callEvent("onafterdelete",[id]);
		//repaint signal
		this.callEvent("onStoreUpdated",[id,obj,"delete"]);
	},
	//deletes all records in datastore
	clearAll:function(){
		//instead of deleting one by one - just reset inner collections
		this.pull = {};
		this.order = dhtmlx.toArray();
		this.feed = null;
		this._filter_order = null;
		this.callEvent("onClearAll",[]);
		this.refresh();
	},
	//converts id to index
	idByIndex:function(index){
		if (index>=this.order.length || index<0)
			dhtmlx.log("Warning","DataStore::idByIndex Incorrect index");
			
		return this.order[index];
	},
	//converts index to id
	indexById:function(id){
		var res = this.order.find(id);	//slower than idByIndex
		
		//if (!this.pull[id])
		//	dhtmlx.log("Warning","DataStore::indexById Non-existing ID: "+ id);
			
		return res;
	},
	//returns ID of next element
	next:function(id,step){
		return this.order[this.indexById(id)+(step||1)];
	},
	//returns ID of first element
	first:function(){
		return this.order[0];
	},
	//returns ID of last element
	last:function(){
		return this.order[this.order.length-1];
	},
	//returns ID of previous element
	previous:function(id,step){
		return this.order[this.indexById(id)-(step||1)];
	},
	/*
		sort data in collection
			by - settings of sorting
		
		or
		
			by - sorting function
			dir - "asc" or "desc"
			
		or
		
			by - property
			dir - "asc" or "desc"
			as - type of sortings
		
		Sorting function will accept 2 parameters and must return 1,0,-1, based on desired order
	*/
	sort:function(by, dir, as){
		var sort = by;	
		if (typeof by == "function")
			sort = {as:by, dir:dir};
		else if (typeof by == "string")
			sort = {by:by, dir:dir, as:as};		
		
		
		var parameters = [sort.by, sort.dir, sort.as];
		if (!this.callEvent("onbeforesort",parameters)) return;	
		
		if (this.order.length){
			var sorter = dhtmlx.sort.create(sort);
			//get array of IDs
			var neworder = this.getRange(this.first(), this.last());
			neworder.sort(sorter);
			this.order = neworder.map(function(obj){ return this.id(obj); },this);
		}
		
		//repaint self
		this.refresh();
		
		this.callEvent("onaftersort",parameters);
	},
	/*
		Filter datasource
		
		text - property, by which filter
		value - filter mask
		
		or
		
		text  - filter method
		
		Filter method will receive data object and must return true or false
	*/
	filter:function(text,value){
		if (!this.callEvent("onBeforeFilter", [text, value])) return;
		
		//remove previous filtering , if any
		if (this._filter_order){
			this.order = this._filter_order;
			delete this._filter_order;
		}
		
		if (!this.order.length) return;
		
		//if text not define -just unfilter previous state and exit
		if (text){
			var filter = text;
			value = value||"";
			if (typeof text == "string"){
				text = dhtmlx.Template.fromHTML(text);
				value = value.toString().toLowerCase();
				filter = function(obj,value){	//default filter - string start from, case in-sensitive
					return text(obj).toLowerCase().indexOf(value)!=-1;
				};
			}
			
					
			var neworder = dhtmlx.toArray();
			for (var i=0; i < this.order.length; i++){
				var id = this.order[i];
				if (filter(this.item(id),value))
					neworder.push(id);
			}
			//set new order of items, store original
			this._filter_order = this.order;
			this.order = neworder;
		}
		//repaint self
		this.refresh();
		
		this.callEvent("onAfterFilter", []);
	},
	/*
		Iterate through collection
	*/
	each:function(method,master){
		for (var i=0; i<this.order.length; i++)
			method.call((master||this), this.item(this.order[i]));
	},
	/*
		map inner methods to some distant object
	*/
	provideApi:function(target,eventable){
		this.debug_bind_master = target;
			
		if (eventable){
			this.mapEvent({
				onbeforesort:	target,
				onaftersort:	target,
				onbeforeadd:	target,
				onafteradd:		target,
				onbeforedelete:	target,
				onafterdelete:	target,
				onbeforeupdate: target/*,
				onafterfilter:	target,
				onbeforefilter:	target*/
			});
		}
			
		var list = ["get","set","sort","add","remove","exists","idByIndex","indexById","item","update","refresh","dataCount","filter","next","previous","clearAll","first","last","serialize"];
		for (var i=0; i < list.length; i++)
			target[list[i]]=dhtmlx.methodPush(this,list[i]);
			
		if (dhtmlx.assert_enabled())		
			this.assert_event(target);
	},
	/*
		serializes data to a json object
	*/
	serialize: function(){
		var ids = this.order;
		var result = [];
		for(var i=0; i< ids.length;i++)
			result.push(this.pull[ids[i]]); 
		return result;
	}
};

dhtmlx.sort = {
	create:function(config){
		return dhtmlx.sort.dir(config.dir, dhtmlx.sort.by(config.by, config.as));
	},
	as:{
		"int":function(a,b){
			a = a*1; b=b*1;
			return a>b?1:(a<b?-1:0);
		},
		"string_strict":function(a,b){
			a = a.toString(); b=b.toString();
			return a>b?1:(a<b?-1:0);
		},
		"string":function(a,b){
			a = a.toString().toLowerCase(); b=b.toString().toLowerCase();
			return a>b?1:(a<b?-1:0);
		}
	},
	by:function(prop, method){
		if (!prop)
			return method;
		if (typeof method != "function")
			method = dhtmlx.sort.as[method||"string"];
		prop = dhtmlx.Template.fromHTML(prop);
		return function(a,b){
			return method(prop(a),prop(b));
		};
	},
	dir:function(prop, method){
		if (prop == "asc")
			return method;
		return function(a,b){
			return method(a,b)*-1;
		};
	}
};





/* DHX DEPEND FROM FILE 'group.js'*/


/*DHX:Depend datastore.js*/
/*DHX:Depend dhtmlx.js*/

dhtmlx.Group = {
	_init:function(){
		dhtmlx.assert(this.data,"DataStore required for grouping");
		this.data.attachEvent("onStoreLoad",dhtmlx.bind(function(){
			if (this._settings.group)
				this.group(this._settings.group,false);
		},this));
		this.attachEvent("onBeforeRender",dhtmlx.bind(function(data){
			if (this._settings.sort){
				data.block();
				data.sort(this._settings.sort);
				data.unblock();
			}
		},this));
		this.attachEvent("onBeforeSort",dhtmlx.bind(function(){
			this._settings.sort = null;
		},this));
	},
	_init_group_data_event:function(data,master){
		data.attachEvent("onClearAll",dhtmlx.bind(function(){
            this.ungroup(false);
            this.block();
            this.clearAll();
            this.unblock();
        },master));
	},
	sum:function(property, data){
		property = dhtmlx.Template.setter(property);
		
		data = data || this.data;
		var summ = 0; 
		data.each(function(obj){
			summ+=property(obj)*1;
		});
		return summ;
	},
	min:function(property, data){
		property = dhtmlx.Template.setter(property);
		
		data = data || this.data;
		var min = Infinity; 
		data.each(function(obj){
			if (property(obj)*1 < min) min = property(obj)*1;
		});
		return min*1;
	},
	max:function(property, data){
		property = dhtmlx.Template.setter(property);
		
		data = data || this.data;
		var max = -Infinity;
		data.each(function(obj){
			if (property(obj)*1 > max) max = property(obj)*1;
		});
		return max;
	},
	_split_data_by:function(stats){ 
		var any=function(property, data){
			property = dhtmlx.Template.setter(property);
			return property(data[0]);
		};
		var key = dhtmlx.Template.setter(stats.by);
		if (!stats.map[key])
			stats.map[key] = [key, any];
			
		var groups = {};
		var labels = [];
		this.data.each(function(data){
			var current = key(data);
			if (!groups[current]){
				labels.push({id:current});
				groups[current] = dhtmlx.toArray();
			}
			groups[current].push(data);
		});
		for (var prop in stats.map){
			var functor = (stats.map[prop][1]||any);
			if (typeof functor != "function")
				functor = this[functor];
				
			for (var i=0; i < labels.length; i++) {
				labels[i][prop]=functor.call(this, stats.map[prop][0], groups[labels[i].id]);
			}
		}
//		if (this._settings.sort)
//			labels.sortBy(stats.sort);
			
		this._not_grouped_data = this.data;
		this.data = new dhtmlx.DataStore();
		this.data.provideApi(this,true);
		this._init_group_data_event(this.data, this);
		this.parse(labels,"json");
	},
	group:function(config,mode){
		this.ungroup(false);
		this._split_data_by(config);
		if (mode!==false)
			this.render();
	},
	ungroup:function(mode){
		if (this._not_grouped_data){
			this.data = this._not_grouped_data;
			this.data.provideApi(this, true);
		}
		if (mode!==false)
			this.render();
	},
	group_setter:function(config){
		dhtmlx.assert(typeof config == "object", "Incorrect group value");
		dhtmlx.assert(config.by,"group.by is mandatory");
		dhtmlx.assert(config.map,"group.map is mandatory");
		return config;
	},
	//need to be moved to more appropriate object
	sort_setter:function(config){
		if (typeof config != "object")
			config = { by:config };
		
		this._mergeSettings(config,{
			as:"string",
			dir:"asc"
		});
		return config;
	}
};


/* DHX DEPEND FROM FILE 'key.js'*/


/*
	Behavior:KeyEvents - hears keyboard 
*/
dhtmlx.KeyEvents = {
	_init:function(){
		//attach handler to the main container
		dhtmlx.event(this._obj,"keypress",this._onKeyPress,this);
	},
	//called on each key press , when focus is inside of related component
	_onKeyPress:function(e){
		e=e||event;
		var code = e.which||e.keyCode; //FIXME  better solution is required
		this.callEvent((this._edit_id?"onEditKeyPress":"onKeyPress"),[code,e.ctrlKey,e.shiftKey,e]);
	}
};


/* DHX DEPEND FROM FILE 'mouse.js'*/


/*
	Behavior:MouseEvents - provides inner evnets for  mouse actions
*/
dhtmlx.MouseEvents={
	_init: function(){
		//attach dom events if related collection is defined
		if (this.on_click){
			dhtmlx.event(this._obj,"click",this._onClick,this);
			dhtmlx.event(this._obj,"contextmenu",this._onContext,this);
		}
		if (this.on_dblclick)
			dhtmlx.event(this._obj,"dblclick",this._onDblClick,this);
		if (this.on_mouse_move){
			dhtmlx.event(this._obj,"mousemove",this._onMouse,this);
			dhtmlx.event(this._obj,(dhtmlx._isIE?"mouseleave":"mouseout"),this._onMouse,this);
		}

	},
	//inner onclick object handler
	_onClick: function(e) {
		return this._mouseEvent(e,this.on_click,"ItemClick");
	},
	//inner ondblclick object handler
	_onDblClick: function(e) {
		return this._mouseEvent(e,this.on_dblclick,"ItemDblClick");
	},
	//process oncontextmenu events
	_onContext: function(e) {
		var id = dhtmlx.html.locate(e, this._id);
		if (id && !this.callEvent("onBeforeContextMenu", [id,e]))
			return dhtmlx.html.preventEvent(e);
	},
	/*
		event throttler - ignore events which occurs too fast
		during mouse moving there are a lot of event firing - we need no so much
		also, mouseout can fire when moving inside the same html container - we need to ignore such fake calls
	*/
	_onMouse:function(e){
		if (dhtmlx._isIE)	//make a copy of event, will be used in timed call
			e = document.createEventObject(event);
			
		if (this._mouse_move_timer)	//clear old event timer
			window.clearTimeout(this._mouse_move_timer);
				
		//this event just inform about moving operation, we don't care about details
		this.callEvent("onMouseMoving",[e]);
		//set new event timer
		this._mouse_move_timer = window.setTimeout(dhtmlx.bind(function(){
			//called only when we have at least 100ms after previous event
			if (e.type == "mousemove")
				this._onMouseMove(e);
			else
				this._onMouseOut(e);
		},this),500);
	},
	//inner mousemove object handler
	_onMouseMove: function(e) {
		if (!this._mouseEvent(e,this.on_mouse_move,"MouseMove"))
			this.callEvent("onMouseOut",[e||event]);
	},
	//inner mouseout object handler
	_onMouseOut: function(e) {
		this.callEvent("onMouseOut",[e||event]);
	},
	//common logic for click and dbl-click processing
	_mouseEvent:function(e,hash,name){
		e=e||event;
		var trg=e.target||e.srcElement;
		var css = "";
		var id = null;
		var found = false;
		//loop through all parents
		while (trg && trg.parentNode){
			if (!found && trg.getAttribute){													//if element with ID mark is not detected yet
				id = trg.getAttribute(this._id);							//check id of current one
				if (id){
					if (trg.getAttribute("userdata"))
						this.callEvent("onLocateData",[id,trg]);
					if (!this.callEvent("on"+name,[id,e,trg])) return;		//it will be triggered only for first detected ID, in case of nested elements
					found = true;											//set found flag
				}
			}
			css=trg.className;
			if (css){		//check if pre-defined reaction for element's css name exists
				css = css.split(" ");
				css = css[0]||css[1]; //FIXME:bad solution, workaround css classes which are starting from whitespace
				if (hash[css])
					return  hash[css].call(this,e,id||dhtmlx.html.locate(e, this._id),trg);
			}
			trg=trg.parentNode;
		}		
		return found;	//returns true if item was located and event was triggered
	}
};


/* DHX DEPEND FROM FILE 'config.js'*/


/*
	Behavior:Settings
	
	@export
		customize
		config
*/

/*DHX:Depend template.js*/
/*DHX:Depend dhtmlx.js*/

dhtmlx.Settings={
	_init:function(){
		/* 
			property can be accessed as this.config.some
			in same time for inner call it have sense to use _settings
			because it will be minified in final version
		*/
		this._settings = this.config= {}; 
	},
	define:function(property, value){
		if (typeof property == "object")
			return this._parseSeetingColl(property);
		return this._define(property, value);
	},
	_define:function(property,value){
		dhtmlx.assert_settings.call(this,property,value);
		
		//method with name {prop}_setter will be used as property setter
		//setter is optional
		var setter = this[property+"_setter"];
		return this._settings[property]=setter?setter.call(this,value):value;
	},
	//process configuration object
	_parseSeetingColl:function(coll){
		if (coll){
			for (var a in coll)				//for each setting
				this._define(a,coll[a]);		//set value through config
		}
	},
	//helper for object initialization
	_parseSettings:function(obj,initial){
		//initial - set of default values
		var settings = dhtmlx.extend({},initial);
		//code below will copy all properties over default one
		if (typeof obj == "object" && !obj.tagName)
			dhtmlx.extend(settings,obj);	
		//call config for each setting
		this._parseSeetingColl(settings);
	},
	_mergeSettings:function(config, defaults){
		for (var key in defaults)
			switch(typeof config[key]){
				case "object": 
					config[key] = this._mergeSettings((config[key]||{}), defaults[key]);
					break;
				case "undefined":
					config[key] = defaults[key];
					break;
				default:	//do nothing
					break;
			}
		return config;
	},
	//helper for html container init
	_parseContainer:function(obj,name,fallback){
		/*
			parameter can be a config object, in such case real container will be obj.container
			or it can be html object or ID of html object
		*/
		if (typeof obj == "object" && !obj.tagName) 
			obj=obj.container;
		this._obj = this.$view = dhtmlx.toNode(obj);
		if (!this._obj && fallback)
			this._obj = fallback(obj);
			
		dhtmlx.assert(this._obj, "Incorrect html container");
		
		this._obj.className+=" "+name;
		this._obj.onselectstart=function(){return false;};	//block selection by default
		this._dataobj = this._obj;//separate reference for rendering modules
	},
	//apply template-type
	_set_type:function(name){
		//parameter can be a hash of settings
		if (typeof name == "object")
			return this.type_setter(name);
		
		dhtmlx.assert(this.types, "RenderStack :: Types are not defined");
		dhtmlx.assert(this.types[name],"RenderStack :: Inccorect type name",name);
		//or parameter can be a name of existing template-type	
		this.type=dhtmlx.extend({},this.types[name]);
		this.customize();	//init configs
	},
	customize:function(obj){
		//apply new properties
		if (obj) dhtmlx.extend(this.type,obj);
		
		//init tempaltes for item start and item end
		this.type._item_start = dhtmlx.Template.fromHTML(this.template_item_start(this.type));
		this.type._item_end = this.template_item_end(this.type);
		
		//repaint self
		this.render();
	},
	//config.type - creates new template-type, based on configuration object
	type_setter:function(value){
		this._set_type(typeof value == "object"?dhtmlx.Type.add(this,value):value);
		return value;
	},
	//config.template - creates new template-type with defined template string
	template_setter:function(value){
		return this.type_setter({template:value});
	},
	//config.css - css name for top level container
	css_setter:function(value){
		this._obj.className += " "+value;
		return value;
	}
};


/* DHX DEPEND FROM FILE 'compatibility.js'*/


/*
	Collection of compatibility hacks
*/

/*DHX:Depend dhtmlx.js*/

dhtmlx.compat=function(name, obj){
	//check if name hash present, and applies it when necessary
	if (dhtmlx.compat[name])
		dhtmlx.compat[name](obj);
};


(function(){
	if (!window.dhtmlxError){
		//dhtmlxcommon is not included
		
		//create fake error tracker for connectors
		var dummy = function(){};
		window.dhtmlxError={ catchError:dummy, throwError:dummy };
		//helpers instead of ones from dhtmlxcommon
		window.convertStringToBoolean=function(value){
			return !!value;
		};
		window.dhtmlxEventable = function(node){
			dhtmlx.extend(node,dhtmlx.EventSystem);
		};
		//imitate ajax layer of dhtmlxcommon
		var loader = {
			getXMLTopNode:function(name){
				
			},
			doXPath:function(path){
				return dhtmlx.DataDriver.xml.xpath(this.xml,path);
			},
			xmlDoc:{
				responseXML:true
			}
		};
		//wrap ajax methods of dataprocessor
		dhtmlx.compat.dataProcessor=function(obj){
			//FIXME
			//this is pretty ugly solution - we replace whole method , so changes in dataprocessor need to be reflected here
			
			var sendData = "_sendData";
			var in_progress = "_in_progress";
			var tMode = "_tMode";
			var waitMode = "_waitMode";
			
			obj[sendData]=function(a1,rowId){
		    	if (!a1) return; //nothing to send
		    	if (rowId)
					this[in_progress][rowId]=(new Date()).valueOf();
			    
				if (!this.callEvent("onBeforeDataSending",rowId?[rowId,this.getState(rowId)]:[])) return false;				
				
				var a2 = this;
		        var a3=this.serverProcessor;
				if (this[tMode]!="POST")
					//use dhtmlx.ajax instead of old ajax layer
					dhtmlx.ajax().get(a3+((a3.indexOf("?")!=-1)?"&":"?")+this.serialize(a1,rowId),"",function(t,x,xml){
						loader.xml = dhtmlx.DataDriver.xml.checkResponse(t,x);
						a2.afterUpdate(a2, null, null, null, loader);
					});
				else
		        	dhtmlx.ajax().post(a3,this.serialize(a1,rowId),function(t,x,xml){
		        		loader.xml = dhtmlx.DataDriver.xml.checkResponse(t,x);
		        		a2.afterUpdate(a2, null, null, null, loader);
		    		});
		
				this[waitMode]++;
		    };
		};
	}
	
})();


/* DHX DEPEND FROM FILE 'compatibility_layout.js'*/


/*DHX:Depend dhtmlx.js*/
/*DHX:Depend compatibility.js*/

if (!dhtmlx.attaches)
	dhtmlx.attaches = {};
	
dhtmlx.attaches.attachAbstract=function(name, conf){
	var obj = document.createElement("DIV");
	obj.id = "CustomObject_"+dhtmlx.uid();
	obj.style.width = "100%";
	obj.style.height = "100%";
	obj.cmp = "grid";
	document.body.appendChild(obj);
	this.attachObject(obj.id);
	
	conf.container = obj.id;
	
	var that = this.vs[this.av];
	that.grid = new window[name](conf);
	
	that.gridId = obj.id;
	that.gridObj = obj;
	
		
	that.grid.setSizes = function(){
		if (this.resize) this.resize();
		else this.render();
	};
	
	var method_name="_viewRestore";
	return this.vs[this[method_name]()].grid;
};
dhtmlx.attaches.attachDataView = function(conf){
	return this.attachAbstract("dhtmlXDataView",conf);
};
dhtmlx.attaches.attachChart = function(conf){
	return this.attachAbstract("dhtmlXChart",conf);
};

dhtmlx.compat.layout = function(){};



/* DHX DEPEND FROM FILE 'compatibility_grid.js'*/


/*
	Compatibility hack for loading data from the grid.
	Provides new type of datasource - dhtmlxgrid
	
*/

/*DHX:Depend load.js*/

dhtmlx.DataDriver.dhtmlxgrid={
	_grid_getter:"_get_cell_value",
	toObject:function(data){
		this._grid = data;
		return data;
	},
	getRecords:function(data){
		return data.rowsBuffer;
	},
	getDetails:function(data){
		var result = {};
		for (var i=0; i < this._grid.getColumnsNum(); i++)
			result["data"+i]=this._grid[this._grid_getter](data,i);
      
		return result;
	},
	getInfo:function(data){
		return { 
			_size:0,
			_from:0
		};
	}
};


/* DHX DEPEND FROM FILE 'canvas.js'*/


/*DHX:Depend thirdparty/excanvas*/
/*DHX:Depend dhtmlx.js*/

dhtmlx.ui.Canvas = function(container,name,style) {
	this._canvas_labels = [];
	this._canvas_name =  name;
	this._obj = container;
	this._prepareCanvas(container,name,style);
};
dhtmlx.ui.Canvas.prototype = {
	_prepareCanvas:function (container,name,style){
		//canvas has the same size as master object
		this._canvas = dhtmlx.html.create("canvas",{ width:container.offsetWidth, height:container.offsetHeight, canvas_id:name, style:(style||"") });
		container.appendChild(this._canvas);
		//use excanvas in IE
		if (!this._canvas.getContext){
			if (dhtmlx._isIE){
				dhtmlx.require("thirdparty/excanvas/excanvas.js");	//sync loading
				G_vmlCanvasManager.init_(document);
				G_vmlCanvasManager.initElement(this._canvas);
			} else	//some other not supported browser
				dhtmlx.error("Canvas is not supported in the current browser");
		}
		return this._canvas;
	}, 
	getCanvas:function(context){
		return (this._canvas||this._prepareCanvas()).getContext(context||"2d");
	},
	_resizeCanvas:function(){
		if (this._canvas){
			this._canvas.setAttribute("width", this._canvas.parentNode.offsetWidth);
			this._canvas.setAttribute("height", this._canvas.parentNode.offsetHeight);
		}
	},
	renderText:function(x,y,text,css,w){
		if (!text) return; //ignore empty text
		
		var t = dhtmlx.html.create("DIV",{
			"class":"dhx_canvas_text"+(css?(" "+css):""),
			"style":"left:"+x+"px; top:"+y+"px;"
		},text);
		this._obj.appendChild(t);
		this._canvas_labels.push(t); //destructor?
		if (w)
			t.style.width = w+"px";
		return t;
	},
	renderTextAt:function(valign,align, x,y,t,c,w){
		var text=this.renderText.call(this,x,y,t,c,w);
		if (text){
			if (valign){
				if(valign == "middle")
					text.style.top = parseInt(y-text.offsetHeight/2,10) + "px";
				else
					text.style.top = y-text.offsetHeight + "px";
			}
			if (align){
			    if(align == "left")
					text.style.left = x-text.offsetWidth + "px";
				else
					text.style.left = parseInt(x-text.offsetWidth/2,10) + "px";
			}
		}
		return text;
	},
	clearCanvas:function(skipMap){
		var areas=[], i;

		for(i=0; i < this._canvas_labels.length;i++)
			this._obj.removeChild(this._canvas_labels[i]);
		this._canvas_labels = [];

		if (!skipMap&&this._obj._htmlmap){

			//areas that correspond this canvas layer
		    areas = this._getMapAreas();

			//removes areas of this canvas
			while(areas.length){
                areas[0].parentNode.removeChild(areas[0]);
				areas.splice(0,1);
			}
			areas = null;

			//removes _htmlmap object if all its child nodes are removed
			if(!this._obj._htmlmap.getElementsByTagName("AREA").length){
				this._obj._htmlmap.parentNode.removeChild(this._obj._htmlmap);
				this._obj._htmlmap = null;
			}

		}
		//FF breaks, when we are using clear canvas and call clearRect without parameters		
		this.getCanvas().clearRect(0,0,this._canvas.offsetWidth, this._canvas.offsetHeight);
	},
	toggleCanvas:function(){
		this._toggleCanvas(this._canvas.style.display=="none")

	},
	showCanvas:function(){
		this._toggleCanvas(true);
	},
	hideCanvas:function(){
		this._toggleCanvas(false);
	},
	_toggleCanvas:function(show){
		var areas, i;

		for(i=0; i < this._canvas_labels.length;i++)
			this._canvas_labels[i].style.display = (show?"":"none");

		if (this._obj._htmlmap){
			areas = this._getMapAreas();
			for( i = 0; i < areas.length; i++){
				if(show)
					areas[i].removeAttribute("disabled");
				else
					areas[i].setAttribute("disabled","true");
			}
		}
		//FF breaks, when we are using clear canvas and call clearRect without parameters
		this._canvas.style.display = (show?"":"none");
	},
	_getMapAreas:function(){
		var res = [], areas, i;

		areas = this._obj._htmlmap.getElementsByTagName("AREA");

		for(i = 0; i < areas.length; i++){
			if(areas[i].getAttribute("userdata") == this._canvas_name){
				res.push(areas[i]);
			}
		}

		return res;
	}
};


/* DHX INITIAL FILE '/Volumes/G/dhtmlx.out/Standard/dhtmlxCore/sources//chart.js'*/


/*DHX:Depend chart.css*/
/*DHX:Depend canvas.js*/
/*DHX:Depend load.js*/

/*DHX:Depend compatibility_grid.js*/
/*DHX:Depend compatibility_layout.js*/

/*DHX:Depend config.js*/
/*DHX:Depend destructor.js*/
/*DHX:Depend mouse.js*/
/*DHX:Depend key.js*/
/*DHX:Depend group.js*/
/*DHX:Depend autotooltip.js*/

/*DHX:Depend ext/chart/chart_base.js*/
/*DHX:Depend ext/chart/chart_pie.js*/		//+pie3d
/*DHX:Depend ext/chart/chart_bar.js*/	
/*DHX:Depend ext/chart/chart_line.js*/
/*DHX:Depend ext/chart/chart_barh.js*/	
/*DHX:Depend ext/chart/chart_stackedbar.js*/	
/*DHX:Depend ext/chart/chart_stackedbarh.js*/
/*DHX:Depend ext/chart/chart_spline.js*/	
/*DHX:Depend ext/chart/chart_area.js*/	 	//+stackedArea
/*DHX:Depend ext/chart/chart_radar.js*/	 	
/*DHX:Depend ext/chart/chart_scatter.js*/
/*DHX:Depend ext/chart/presets.js*/
/*DHX:Depend math.js*/
/*DHX:Depend destructor.js*/
/*DHX:Depend dhtmlx.js*/
/*DHX:Depend date.js*/

dhtmlXChart = function(container){
	this.name = "Chart";	
	this.version = "3.0";	
	
	if (dhtmlx.assert_enabled()) this._assert();
	
	dhtmlx.extend(this, dhtmlx.Settings);
	
	this._parseContainer(container,"dhx_chart");
	
	dhtmlx.extend(this, dhtmlx.AtomDataLoader);
	dhtmlx.extend(this, dhtmlx.DataLoader);
	this.data.provideApi(this,true);
	
	dhtmlx.extend(this, dhtmlx.EventSystem);
	dhtmlx.extend(this, dhtmlx.MouseEvents);
	dhtmlx.extend(this, dhtmlx.Destruction);
	//dhtmlx.extend(this, dhtmlx.Canvas);
	dhtmlx.extend(this, dhtmlx.Group);
	dhtmlx.extend(this, dhtmlx.AutoTooltip);
	
	for (var key in dhtmlx.chart)
		dhtmlx.extend(this, dhtmlx.chart[key]);


    if(container.preset){
        this.definePreset(container);
    }
	this._parseSettings(container,this.defaults);
	this._series = [this._settings];
	this.data.attachEvent("onStoreUpdated",dhtmlx.bind(function(){
		this.render();  
	},this));
	this.attachEvent("onLocateData", this._switchSerie);
};
dhtmlXChart.prototype={
	_id:"dhx_area_id",
	on_click: {
		dhx_chart_legend_item: function(e,id,obj){
			var series = obj.getAttribute("series_id");
			if(this.callEvent("onLegendClick",[e,series,obj])){
				var config = this._settings;
				var values = config.legend.values;
				var toggle = (values&&(typeof values[series].toggle != "undefined"))?values[series].toggle:config.legend.toggle;
			    if((typeof series != "undefined")&&this._series.length>1){
				    // hide action
				    if(toggle){
					    if(obj.className.indexOf("hidden")!=-1){
						    this.showSeries(series);
					    }
					    else{
						    this.hideSeries(series);
					    }
				    }
			    }
			}
		}
	},
	on_dblclick:{
	},
	on_mouse_move:{
	},
	bind:function(){
		dhx.BaseBind.legacyBind.apply(this, arguments);
	},
	sync:function(){
		dhx.BaseBind.legacySync.apply(this, arguments);
	},
	resize:function(){
		for(var c in this.canvases){
			this.canvases[c]._resizeCanvas();
		}
		this.render();	
	},
	view_setter:function( val){
		if (!dhtmlx.chart[val])
			dhtmlx.error("Chart type extension is not loaded: "+val);
		//if you will need to add more such settings - move them ( and this one ) in a separate methods
		
		if (typeof this._settings.offset == "undefined"){
			this._settings.offset = !(val == "area" || val == "stackedArea");
		}
        if(val=="radar"&&!this._settings.yAxis)
		    this.define("yAxis",{});
        if(val=="scatter"){
            if(!this._settings.yAxis)
                this.define("yAxis",{});
            if(!this._settings.xAxis)
                this.define("xAxis",{});
        }

		return val;
	},
	clearCanvas:function(){
		if(this.canvases&&typeof this.canvases == "object")
			for(var c in this.canvases){
				this.canvases[c].clearCanvas();
			}
	},
	render:function(){
		var bounds, i, data, map, temp;
		if (!this.callEvent("onBeforeRender",[this.data]))
			return;
		if(this.canvases&&typeof this.canvases == "object"){
			for(i in this.canvases){
				this.canvases[i].clearCanvas();
			}
		}
		else
			this.canvases = {};

		if(this._settings.legend){
			if(!this.canvases["legend"])
				this.canvases["legend"] =  new dhtmlx.ui.Canvas(this._obj,"legend");
			this._drawLegend(
				this.data.getRange(),
				this._obj.offsetWidth
			);
		}
		bounds = this._getChartBounds(this._obj.offsetWidth,this._obj.offsetHeight);
		map = new dhtmlx.ui.Map(this._id);
		temp = this._settings;
		data = this._getChartData();
		for(i=0; i < this._series.length;i++){
		 	this._settings = this._series[i];
			if(!this.canvases[i])
				this.canvases[i] = new dhtmlx.ui.Canvas(this._obj,i,"z-index:"+(2+i));
			this["pvt_render_"+this._settings.view](
				this.canvases[i].getCanvas(),
				data,
				bounds.start,
				bounds.end,
				i,
				map
			);
		}

		map.render(this._obj);
		this._obj.lastChild.style.zIndex = 1000;
		this._applyBounds(this._obj.lastChild,bounds);
		this.callEvent("onAfterRender",[]);
		this._settings = temp;
	},
	_applyBounds: function(elem,bounds){
		var style = {};
		style.left = bounds.start.x;
		style.top = bounds.start.y;
		style.width = bounds.end.x-bounds.start.x;
		style.height = bounds.end.y - bounds.start.y;
		for(var prop in style){
			elem.style[prop] = style[prop]+"px";
		}
	},
	_getChartData: function(){
		var  axis, axisConfig ,config, data, i, newData, start, units, value, valuesHash;
		data = this.data.getRange();
		axis = (this._settings.view.toLowerCase().indexOf("barh")!=-1?"yAxis":"xAxis");
		axisConfig = this._settings[axis];
		if(axisConfig&&axisConfig.units&&(typeof axisConfig.units == "object")){
			config = axisConfig.units;
			units = [];
			if(typeof config.start != "undefined"&&typeof config.end != "undefined" && typeof config.next != "undefined"){
				start = config.start;
				while(start<=config.end){
					units.push(start);
					start = config.next.call(this,start);
				}
			}
			else if(Object.prototype.toString.call(config) === '[object Array]'){
				units = config;
			}
			newData = [];
			if(units.length){
				value = axisConfig.value;
				valuesHash = {};
				for(i=0;i < data.length;i++){
					valuesHash[value(data[i])] = i;
				}
				for(i=0;i< units.length;i++){
					if(typeof valuesHash[units[i]]!= "undefined"){
						data[valuesHash[units[i]]].$unit = units[i];
						newData.push(data[valuesHash[units[i]]]);
					}
					else{
						newData.push({$unit:units[i]});
					}
				}
			}
			return newData;
		}
		return data;
	},
	value_setter:dhtmlx.Template.obj_setter,
    xValue_setter:dhtmlx.Template.obj_setter,
    yValue_setter:function(config){
        this.define("value",config);
    },
	alpha_setter:dhtmlx.Template.obj_setter,	
	label_setter:dhtmlx.Template.obj_setter,
	lineColor_setter:dhtmlx.Template.obj_setter,
	borderColor_setter:dhtmlx.Template.obj_setter,
	pieInnerText_setter:dhtmlx.Template.obj_setter,
	gradient_setter:function(config){
		if((typeof(config)!="function")&&config&&(config === true))
			config = "light";
		return config;
	},
	colormap:{
		"RAINBOW":function(obj){
            var pos = Math.floor(this.indexById(obj.id)/this.dataCount()*1536);
			if (pos==1536) pos-=1;
			return this._rainbow[Math.floor(pos/256)](pos%256);
		}
	},
	color_setter:function(value){
		return this.colormap[value]||dhtmlx.Template.obj_setter( value);
	},
    fill_setter:function(value){
        return ((!value||value==0)?false:dhtmlx.Template.obj_setter( value));
    },
    definePreset:function(obj){
        this.define("preset",obj.preset);
        delete obj.preset;
    },
	preset_setter:function(value){
        var a, b, preset;
        this.defaults = dhtmlx.extend({},this.defaults);
        if(typeof dhtmlx.presets.chart[value]=="object"){

            preset =  dhtmlx.presets.chart[value];
            for(a in preset){

                if(typeof preset[a]=="object"){
                    if(!this.defaults[a]||typeof this.defaults[a]!="object"){
                         this.defaults[a] = dhtmlx.extend({},preset[a]);
                    }
                    else{
                        this.defaults[a] = dhtmlx.extend({},this.defaults[a]);
                        for(b in preset[a]){
                            this.defaults[a][b] = preset[a][b];
                        }
                    }
                }else{
                     this.defaults[a] = preset[a];
                }
            }
            return value;
        }
		return false;
	},
	legend_setter:function( config){
		if(!config){
			if(this.legendObj){
				this.legendObj.innerHTML = "";
				this.legendObj = null;
			}
			return false;
		}
		if(typeof(config)!="object")	//allow to use template string instead of object
			config={template:config};
			
		this._mergeSettings(config,{
			width:150,
			height:18,
			layout:"y",
			align:"left",
			valign:"bottom",
			template:"",
			toggle:(this._settings.view.toLowerCase().indexOf("stacked")!=-1?"":"hide"),
			marker:{
				type:"square",
				width:15,
				height:15,
                radius:3
			},
            margin: 4,
            padding: 3
		});
		
		config.template = dhtmlx.Template.setter(config.template);
		return config;
	},
    defaults:{
        color:"RAINBOW",
		alpha:"1",
		label:false,
		value:"{obj.value}",
		padding:{},
		view:"pie",
		lineColor:"#ffffff",
		cant:0.5,
		width: 30,
		labelWidth:100,
		line:{
            width:2,
			color:"#1293f8"
        },
		item:{
			radius:3,
			borderColor:"#636363",
            borderWidth:1,
            color: "#ffffff",
            alpha:1,
            type:"r",
            shadow:false
		},
		shadow:true,
		gradient:false,
		border:true,
		labelOffset: 20,
		origin:"auto"
    },
	item_setter:function( config){
		if(typeof(config)!="object")
			config={color:config, borderColor:config};
        this._mergeSettings(config,dhtmlx.extend({},this.defaults.item));
		var settings = ["alpha","borderColor","color","radius"];
		for(var i=0; i< settings.length; i++)
			config[settings[i]] = dhtmlx.Template.setter(config[settings[i]]);
		/*config.alpha = dhtmlx.Template.setter(config.alpha);
        config.borderColor = dhtmlx.Template.setter(config.borderColor);
		config.color = dhtmlx.Template.setter(config.color);
        config.radius = dhtmlx.Template.setter(config.radius);*/
		return config;
	},
	line_setter:function( config){
		if(typeof(config)!="object")
			config={color:config};
	    dhtmlx.extend(this.defaults.line,config);
        config = dhtmlx.extend({},this.defaults.line);
		config.color = dhtmlx.Template.setter(config.color);
		return config;
	},
	padding_setter:function( config){	
		if(typeof(config)!="object")
			config={left:config, right:config, top:config, bottom:config};
		this._mergeSettings(config,{
			left:50,
			right:20,
			top:35,
			bottom:40
		});
		return config;
	},
	xAxis_setter:function( config){
		if(!config) return false;
		if(typeof(config)!="object")
			config={ template:config };
		if(!config.value)
			config.value = config.template;
		this._mergeSettings(config,{
			title:"",
			color:"#000000",
			lineColor:"#cfcfcf",
			template:"{obj}",
			value:"{obj}",
			lines:true
		});
		var templates = ["lineColor","template","lines","value"];
        this._converToTemplate(templates,config);
		this._configXAxis = dhtmlx.extend({},config);
		return config;
	},
    yAxis_setter:function( config){
	    this._mergeSettings(config,{
			title:"",
			color:"#000000",
			lineColor:"#cfcfcf",
			template:"{obj}",
			lines:true,
            bg:"#ffffff"
		});
		var templates = ["lineColor","template","lines","bg"];
        this._converToTemplate(templates,config);
		this._configYAxis = dhtmlx.extend({},config);
		return config;
	},
    _converToTemplate:function(arr,config){
        for(var i=0;i< arr.length;i++){
            config[arr[i]] = dhtmlx.Template.setter(config[arr[i]]);
        }
    },
    _drawScales:function(data,point0,point1,start,end,cellWidth){
	    var y = 0;
	    if(this._settings.yAxis){
		    this.canvases["y"] =  new dhtmlx.ui.Canvas(this._obj,"axis_y");
		    y = this._drawYAxis(this.canvases["y"].getCanvas(),data,point0,point1,start,end);
	    }
	    if (this._settings.xAxis){
		    this.canvases["x"] =  new dhtmlx.ui.Canvas(this._obj,"axis_x");
		    this._drawXAxis(this.canvases["x"].getCanvas(),data,point0,point1,cellWidth,y);
	    }
		return y;
	},
	_drawXAxis:function(ctx,data,point0,point1,cellWidth,y){
		var x0 = point0.x-0.5;
		var y0 = parseInt((y?y:point1.y),10)+0.5;
		var x1 = point1.x;
		var unitPos;
		var center = true;
		


		for(var i=0; i < data.length;i ++){

			//console.log(x0+"+"+(cellWidth/2)+"+"+(i*cellWidth))
			if(this._settings.offset === true)
				unitPos = x0+cellWidth/2+i*cellWidth;
			else{
				unitPos = (i==data.length-1)?point1.x:x0+i*cellWidth;
				center = !!i;
			}
			unitPos = Math.ceil(unitPos)-0.5;
			/*scale labels*/
			var top = ((this._settings.origin!="auto")&&(this._settings.view=="bar")&&(parseFloat(this._settings.value(data[i]))<this._settings.origin));
			this._drawXAxisLabel(unitPos,y0,data[i],center,top);
			/*draws a vertical line for the horizontal scale*/

			if((this._settings.offset||i)&&this._settings.xAxis.lines.call(this,data[i]))
		    	this._drawXAxisLine(ctx,unitPos,point1.y,point0.y,data[i]);
		}
		
		this.canvases["x"].renderTextAt(true, false, x0,point1.y+this._settings.padding.bottom-3,
			this._settings.xAxis.title,
			"dhx_axis_title_x",
			point1.x - point0.x
		);
		this._drawLine(ctx,x0,y0,x1,y0,this._settings.xAxis.color,1);
		/*the right border in lines in scale are enabled*/
		if (!this._settings.xAxis.lines.call(this,{}) || !this._settings.offset) return;
		this._drawLine(ctx,x1+0.5,point1.y,x1+0.5,point0.y+0.5,this._settings.xAxis.color,0.2);
	},
	_drawYAxis:function(ctx,data,point0,point1,start,end){
		var step;
		var scaleParam= {};
		if (!this._settings.yAxis) return;
		
		var x0 = point0.x - 0.5;
		var y0 = point1.y;
		var y1 = point0.y;
		var lineX = point1.y;
		
		//this._drawLine(ctx,x0,y0,x0,y1,this._settings.yAxis.color,1);
		
		if(this._settings.yAxis.step)
		     step = parseFloat(this._settings.yAxis.step);

		if(typeof this._configYAxis.step =="undefined"||typeof this._configYAxis.start=="undefined"||typeof this._configYAxis.end =="undefined"){
			scaleParam = this._calculateScale(start,end);
			start = scaleParam.start;
			end = scaleParam.end;
			step = scaleParam.step;
			
			this._settings.yAxis.end = end;
			this._settings.yAxis.start = start;
		}
		this._setYAxisTitle(point0,point1);
		if(step===0) return;
		if(end==start){
			return y0;
		}
		var stepHeight = (y0-y1)*step/(end-start);
		var c = 0;
		for(var i = start; i<=end; i += step){
			if(scaleParam.fixNum)  i = parseFloat((new Number(i)).toFixed(scaleParam.fixNum));
			var yi = Math.floor(y0-c*stepHeight)+ 0.5;/*canvas line fix*/
			if(!(i==start&&this._settings.origin=="auto") &&this._settings.yAxis.lines.call(this,i))
				this._drawLine(ctx,x0,yi,point1.x,yi,this._settings.yAxis.lineColor.call(this,i),1);
			if(i == this._settings.origin) lineX = yi;
			/*correction for JS float calculation*/
			var label = i;
			if(step<1){
				var power = Math.min(this._log10(step),(start<=0?0:this._log10(start)));
				var corr = Math.pow(10,-power);
				label = Math.round(i*corr)/corr;
				i = label;
			}
			this.canvases["y"].renderText(0,yi-5,
				this._settings.yAxis.template(label.toString()),
				"dhx_axis_item_y",
				point0.x-5
			);	
			c++;
		}
		this._drawLine(ctx,x0,y0+1,x0,y1,this._settings.yAxis.color,1);
		return lineX;
	},
	_setYAxisTitle:function(point0,point1){
        var className = "dhx_axis_title_y"+(dhtmlx._isIE&&dhtmlx._isIE !=9?" dhx_ie_filter":"");
		var text=this.canvases["y"].renderTextAt("middle",false,0,parseInt((point1.y-point0.y)/2+point0.y,10),this._settings.yAxis.title,className);
        if (text)
			text.style.left = (dhtmlx.env.transform?(text.offsetHeight-text.offsetWidth)/2:0)+"px";
		/*var ctx = this.canvases["y"].getCanvas();
		var metric = ctx.measureText(this._settings.yAxis.title);
		var tx = 5 + (metric.width/2);
		var ty = 5 +point0.y+ (point1.y-point0.y)/2+metric.width/2;
		ctx.font = "bold 12pt sans-serif";
		ctx.save();
		ctx.translate(tx,ty);
		ctx.rotate(Math.PI/2*3);
		//ctx.translate(-tx,-ty);

		ctx.fillText(this._settings.yAxis.title, 0,0)
		ctx.restore();*/

	},
	_calculateScale:function(nmin,nmax){
	    if(this._settings.origin!="auto"&&this._settings.origin<nmin)
			nmin = this._settings.origin;
		var step,start,end;
	   	step = ((nmax-nmin)/8)||1;
		var power = Math.floor(this._log10(step));
		var calculStep = Math.pow(10,power);
		var stepVal = step/calculStep;
		stepVal = (stepVal>5?10:5);
		step = parseInt(stepVal,10)*calculStep;
		
		if(step>Math.abs(nmin))
			start = (nmin<0?-step:0);
		else{
			var absNmin = Math.abs(nmin);
			var powerStart = Math.floor(this._log10(absNmin));
			var nminVal = absNmin/Math.pow(10,powerStart);
			start = Math.ceil(nminVal*10)/10*Math.pow(10,powerStart)-step;
			if(absNmin>1&&step>0.1){
				start = Math.ceil(start);
			}
			while(nmin<0?start<=nmin:start>=nmin)
				start -= step;
			if(nmin<0) start =-start-2*step;
			
		}
	     end = start;
		while(end<nmax){
			end += step;
			end = parseFloat((new Number(end)).toFixed(Math.abs(power)));
		}
		return { start:start,end:end,step:step,fixNum:Math.abs(power) };
	},
	_getLimits:function(orientation,value){
		var maxValue,minValue;
		var axis = ((arguments.length && orientation=="h")?this._configXAxis:this._configYAxis);
		value = value||"value";
		if(axis&&(typeof axis.end!="undefined")&&(typeof axis.start!="undefined")&&axis.step){
		    maxValue = parseFloat(axis.end);
			minValue = parseFloat(axis.start);      
		}
		else{
			maxValue = this.max(this._series[0][value]);
			minValue = (axis&&(typeof axis.start!="undefined"))?parseFloat(axis.start):this.min(this._series[0][value]);
			if(this._series.length>1)
			for(var i=1; i < this._series.length;i++){
				var maxI = this.max(this._series[i][value]);
				var minI = this.min(this._series[i][value]);
				if (maxI > maxValue) maxValue = maxI;
		    	if (minI < minValue) minValue = minI;
			}
		}
		return {max:maxValue,min:minValue};
	},
	_log10:function(n){
        var method_name="log";
        return Math.floor((Math[method_name](n)/Math.LN10));
    },
	_drawXAxisLabel:function(x,y,obj,center,top){
		if (!this._settings.xAxis) return;
		var elem = this.canvases["x"].renderTextAt(top, center, x,y-(top?2:0),this._settings.xAxis.template(obj));
		if (elem)
			elem.className += " dhx_axis_item_x";
	},
	_drawXAxisLine:function(ctx,x,y1,y2,obj){
		if (!this._settings.xAxis||!this._settings.xAxis.lines) return;
		this._drawLine(ctx,x,y1,x,y2,this._settings.xAxis.lineColor.call(this,obj),1);
	},
	_drawLine:function(ctx,x1,y1,x2,y2,color,width){
		ctx.strokeStyle = color;
		ctx.lineWidth = width;
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
        ctx.lineWidth = 1;
	},
	_getRelativeValue:function(minValue,maxValue){
	    var relValue, origRelValue;
		var valueFactor = 1;
		if(maxValue != minValue){
			relValue = maxValue - minValue;
			/*if(Math.abs(relValue) < 1){
			    while(Math.abs(relValue)<1){
				    valueFactor *= 10;
				    relValue = origRelValue* valueFactor;
				}
			}
			*/
		}
		else relValue = minValue;
		return [relValue,valueFactor];
	},
	_rainbow : [
		function(pos){ return "#FF"+dhtmlx.math.toHex(pos/2,2)+"00";},
		function(pos){ return "#FF"+dhtmlx.math.toHex(pos/2+128,2)+"00";},
		function(pos){ return "#"+dhtmlx.math.toHex(255-pos,2)+"FF00";},
		function(pos){ return "#00FF"+dhtmlx.math.toHex(pos,2);},
		function(pos){ return "#00"+dhtmlx.math.toHex(255-pos,2)+"FF";},
		function(pos){ return "#"+dhtmlx.math.toHex(pos,2)+"00FF";}		
	],
	/**
	*   adds series to the chart (value and color properties)
	*   @param: obj - obj with configuration properties
	*/
	addSeries:function(obj){
		var temp = this._settings; this._settings = dhtmlx.extend({},temp);
		this._parseSettings(obj,{});
	    this._series.push(this._settings);
		this._settings = temp;
    },
    /*switch global settings to serit in question*/
    _switchSerie:function(id, tag){
        var tip;
    	this._active_serie = tag.getAttribute("userdata");

    	if (!this._series[this._active_serie]) return;
    	for (var i=0; i < this._series.length; i++) {
    		tip = this._series[i].tooltip;
    		if (tip)
    			tip.disable();
		}
	    if(!tag.getAttribute("disabled")){
		    tip = this._series[this._active_serie].tooltip;
		    if (tip)
			    tip.enable();
	    }
    },
	hideSeries:function(series){
		this.canvases[series].hideCanvas();
		if(this._settings.legend.values&&this._settings.legend.values[series])
			this._settings.legend.values[series].$hidden = true;
		this._drawLegend();
	},
	showSeries:function(series){
		this.canvases[series].showCanvas();
		if(this._settings.legend.values&&this._settings.legend.values[series])
			delete this._settings.legend.values[series].$hidden;
		this._drawLegend();

	},
	/**
	*   renders legend block
	*   @param: ctx - canvas object
	*   @param: data - object those need to be displayed
	*   @param: width - the width of the container
	*   @param: height - the height of the container
	*/
	_drawLegend:function(data,width){
        var i, legend, legendContainer, legendHeight, legendItems, legendWidth, style, x=0, y= 0, ctx, itemColor, disabled, item;

		data = data||[];
		width = width||this._obj.offsetWidth;
		ctx = this.canvases["legend"].getCanvas();
		/*legend config*/
		legend = this._settings.legend;
        
		style = (this._settings.legend.layout!="x"?"width:"+legend.width+"px":"");
		/*creation of legend container*/
		if(this.legendObj){
			this.legendObj.innerHTML = "";
			//this.legendObj.parentNode.removeChild(this.legendObj);
		}

		this.canvases["legend"].clearCanvas(true);
		legendContainer = dhtmlx.html.create("DIV",{
			"class":"dhx_chart_legend",
			"style":"left:"+x+"px; top:"+y+"px;"+style
		},"");
        if(legend.padding){
            legendContainer.style.padding =  legend.padding+"px";
        }
		this.legendObj = legendContainer;
		this._obj.appendChild(legendContainer);
		/*rendering legend text items*/
		legendItems = [];
		if(!legend.values)
			for(i = 0; i < data.length; i++){
				legendItems.push(this._drawLegendText(legendContainer,legend.template(data[i])));
			}
		else
			for(i = 0; i < legend.values.length; i++){
				legendItems.push(this._drawLegendText(legendContainer,legend.values[i].text,(typeof legend.values[i].id!="undefined"?typeof legend.values[i].id:i),legend.values[i].$hidden));
			}
	   	legendWidth = legendContainer.offsetWidth;
	    legendHeight = legendContainer.offsetHeight;
		/*this._settings.legend.width = legendWidth;
		this._settings.legend.height = legendHeight;*/

		/*setting legend position*/
		if(legendWidth<this._obj.offsetWidth){
			if(legend.layout == "x"&&legend.align == "center"){
			    x = (this._obj.offsetWidth-legendWidth)/2;
            }
			if(legend.align == "right"){
				x = this._obj.offsetWidth-legendWidth;
			}
            if(legend.margin&&legend.align != "center"){
                x += (legend.align == "left"?1:-1)*legend.margin;
            }
        }
		if(legendHeight<this._obj.offsetHeight){
			if(legend.valign == "middle"&&legend.align != "center"&&legend.layout != "x")
				y = (this._obj.offsetHeight-legendHeight)/2;
			else if(legend.valign == "bottom")
				y = this._obj.offsetHeight-legendHeight;
            if(legend.margin&&legend.valign != "middle"){
                y += (legend.valign == "top"?1:-1)*legend.margin;
            }
		}
		legendContainer.style.left = x+"px";
		legendContainer.style.top = y+"px";

		/*drawing colorful markers*/
		ctx.save();

		for(i = 0; i < legendItems.length; i++){
			item = legendItems[i];
			if(legend.values&&legend.values[i].$hidden){
				disabled = true;
				itemColor = (legend.values[i].disableColor?legend.values[i].disableColor:"#d9d9d9");
			}
			else{
				disabled = false;
				itemColor = (legend.values?legend.values[i].color:this._settings.color.call(this,data[i]));
			}
			this._drawLegendMarker(ctx,item.offsetLeft+x,item.offsetTop+y,itemColor,item.offsetHeight,disabled,i);
		}
		ctx.restore();
		legendItems = null;
	},
	/**
	*   appends legend item to legend block
	*   @param: ctx - canvas object
	*   @param: obj - data object that needs being represented
	*/
	_drawLegendText:function(cont,value,series,disabled){
		var style = "";
		if(this._settings.legend.layout=="x")
			style = "float:left;";
		/*the text of the legend item*/
		var text = dhtmlx.html.create("DIV",{
			"style":style+"padding-left:"+(10+this._settings.legend.marker.width)+"px",
			"class":"dhx_chart_legend_item"+(disabled?" hidden":"")
		},value);
		if(arguments.length>2)
			text.setAttribute("series_id",series);
		cont.appendChild(text);
		return text;
	},
	/**
	*   draw legend colorful marder
	*   @param: ctx - canvas object
	*   @param: x - the horizontal position of the marker
	*   @param: y - the vertical position of the marker
	*   @param: color - marker color
	*   @param: height - item height
	*   @param: disabled - disabled staet
	*   @param: i - index of legend item
	*/
	_drawLegendMarker:function(ctx,x,y,color,height,disabled,i){
		var p = [];
		var marker = this._settings.legend.marker;
		var values = this._settings.legend.values;
		var type = (values&&values[i].markerType?values[i].markerType:marker.type);
		if(color){
			ctx.strokeStyle = ctx.fillStyle = color;
		}
        ctx.beginPath();
		if(type=="round"||!marker.radius){
            ctx.lineWidth = marker.height;
		    ctx.lineCap = type;
		    /*start of marker*/
		    x += ctx.lineWidth/2+5;
		    y += height/2;
		    ctx.moveTo(x,y);
		    var x1 = x + marker.width-marker.height +1;
		    ctx.lineTo(x1,y);

        }else if(type=="item"){
			/*copy of line*/
			if(this._settings.line&&this._settings.view != "scatter" && !this._settings.disableLines){
				ctx.beginPath();
				ctx.lineWidth = this._series[i].line.width;
				ctx.strokeStyle = disabled?color:this._series[i].line.color.call(this,{});
				var x0 = x + 5;
				var y0 = y + height/2;
				ctx.moveTo(x0,y0);
				var x1 = x0 + marker.width;
				ctx.lineTo(x1,y0);
				ctx.stroke();
			}
			/*item copy*/


			var config = this._series[i].item;
			var radius = parseInt(config.radius.call(this,{}),10)||0;
			if(radius){
				ctx.beginPath();
				if(disabled){
					ctx.lineWidth = config.borderWidth;
					ctx.strokeStyle = color;
					ctx.fillStyle = color;
				}
				else{
					ctx.lineWidth = config.borderWidth;
					ctx.fillStyle = config.color.call(this,{});
					ctx.strokeStyle = config.borderColor.call(this,{});
					ctx.globalAlpha = config.alpha.call(this,{});
				}
				ctx.beginPath();
				x += marker.width/2+5;
				y += height/2;
				this._strokeChartItem(ctx,x,y,radius+1,config.type);
				ctx.fill();
				ctx.stroke();
			}
			ctx.globalAlpha = 1;
		}else{
            ctx.lineWidth = 1;
            x += 5;
            y += height/2-marker.height/2;
			p = [
				[x+marker.radius,y+marker.radius,marker.radius,Math.PI,3*Math.PI/2,false],
				[x+marker.width-marker.radius,y],
				[x+marker.width-marker.radius,y+marker.radius,marker.radius,-Math.PI/2,0,false],
				[x+marker.width,y+marker.height-marker.radius],
				[x+marker.width-marker.radius,y+marker.height-marker.radius,marker.radius,0,Math.PI/2,false],
				[x+marker.radius,y+marker.height],
				[x+marker.radius,y+marker.height-marker.radius,marker.radius,Math.PI/2,Math.PI,false],
				[x,y+marker.radius]
			];
            this._path(ctx,p);
        }
         ctx.stroke();
         ctx.fill();
	},
	/**
	*   gets the points those represent chart left top and right bottom bounds
	*   @param: width - the width of the chart container
	*   @param: height - the height of the chart container
	*/
	_getChartBounds:function(width,height){
		var chartX0, chartY0, chartX1, chartY1;
		
		chartX0 = this._settings.padding.left;
		chartY0 = this._settings.padding.top;
		chartX1 = width - this._settings.padding.right;
		chartY1 = height - this._settings.padding.bottom;	
		
		if(this._settings.legend){
			var legend = this._settings.legend;
			/*legend size*/
			var legendWidth = this._settings.legend.width;
			var legendHeight = this._settings.legend.height;
		
			/*if legend is horizontal*/
			if(legend.layout == "x"){
				if(legend.valign == "center"){
					if(legend.align == "right")
						chartX1 -= legendWidth;
					else if(legend.align == "left")
				 		chartX0 += legendWidth;
			 	}
			 	else if(legend.valign == "bottom"){
			    	chartY1 -= legendHeight;
			 	}
			 	else{
			    	chartY0 += legendHeight;
			 	}
			}
			/*vertical scale*/
			else{
				if(legend.align == "right")
					chartX1 -= legendWidth;
			 	else if(legend.align == "left")
					chartX0 += legendWidth;
			}
		}
		return {start:{x:chartX0,y:chartY0},end:{x:chartX1,y:chartY1}};
	},
	/**
	*   gets the maximum and minimum values for the stacked chart
	*   @param: data - data set
	*/
	_getStackedLimits:function(data){
		var i, j, maxValue, minValue, value;
		if(this._settings.yAxis&&(typeof this._settings.yAxis.end!="undefined")&&(typeof this._settings.yAxis.start!="undefined")&&this._settings.yAxis.step){
		    maxValue = parseFloat(this._settings.yAxis.end);
			minValue = parseFloat(this._settings.yAxis.start);
		}
		else{
			for(i=0; i < data.length; i++){
				data[i].$sum = 0 ;
				data[i].$min = Infinity;
				for(j =0; j < this._series.length;j++){
					value = parseFloat(this._series[j].value(data[i])||0);
					if(isNaN(value)) continue;
					if(this._series[j].view.toLowerCase().indexOf("stacked")!=-1)
						data[i].$sum += value;
					if(value < data[i].$min) data[i].$min = value;
				}
			}
			maxValue = -Infinity;
			minValue = Infinity;
			for(i=0; i < data.length; i++){
				if (data[i].$sum > maxValue) maxValue = data[i].$sum ;
				if (data[i].$min < minValue) minValue = data[i].$min ;
			}
			if(minValue>0) minValue =0;
		}
		return {max: maxValue, min: minValue};
	},
	/*adds colors to the gradient object*/
	_setBarGradient:function(ctx,x1,y1,x2,y2,type,color,axis){
		var gradient, offset, rgb, hsv, color0, stops;
		if(type == "light"){
			if(axis == "x")
				gradient = ctx.createLinearGradient(x1,y1,x2,y1);
			else
				gradient = ctx.createLinearGradient(x1,y1,x1,y2);
			stops = [[0,"#FFFFFF"],[0.9,color],[1,color]];
			offset = 2;
		}
		else if(type == "falling"||type == "rising"){
			if(axis == "x")
				gradient = ctx.createLinearGradient(x1,y1,x2,y1);
			else
				gradient = ctx.createLinearGradient(x1,y1,x1,y2);
			rgb = dhtmlx.math.toRgb(color);
			hsv = dhtmlx.math.rgbToHsv(rgb[0],rgb[1],rgb[2]);
			hsv[1] *= 1/2;
			color0 = "rgb("+dhtmlx.math.hsvToRgb(hsv[0],hsv[1],hsv[2])+")";
			if(type == "falling"){
				stops = [[0,color0],[0.7,color],[1,color]];
			}
			else if(type == "rising"){
				stops = [[0,color],[0.3,color],[1,color0]];
			}
			offset = 0;
		}
		else{
			ctx.globalAlpha = 0.37;
			offset = 0;
			if(axis == "x")
				gradient = ctx.createLinearGradient(x1,y2,x1,y1);
			else
				gradient = ctx.createLinearGradient(x1,y1,x2,y1);
			stops = [[0,"#9d9d9d"],[0.3,"#e8e8e8"],[0.45,"#ffffff"],[0.55,"#ffffff"],[0.7,"#e8e8e8"],[1,"#9d9d9d"]];
		}
		this._gradient(gradient,stops);
		return {gradient:gradient,offset:offset};
	},
    /**
	*   returns the x and y position
    *   @param: a - angle
    *   @param: x - start x position
    *   @param: y - start y position
	*   @param: r - destination to the point
	*/
     _getPositionByAngle:function(a,x,y,r){
         a *= (-1);
         x = x+Math.cos(a)*r;
         y = y-Math.sin(a)*r;
         return {x:x,y:y};
    },
	_gradient:function(gradient,stops){
		for(var i=0; i< stops.length; i++){
			gradient.addColorStop(stops[i][0],stops[i][1]);
		}
	},
	_path: function(ctx,points){
		var i, method;
		for(i = 0; i< points.length; i++){
			method = (i?"lineTo":"moveTo");
			if(points[i].length>2)
				method = "arc";
			ctx[method].apply(ctx,points[i]);
		}
	},
	_circle: function(ctx,x,y,r){
		ctx.arc(x,y,r,Math.PI*2,true);
	},
	_addMapRect:function(map,id,points,bounds,sIndex){
		map.addRect(id,[points[0].x-bounds.x,points[0].y-bounds.y,points[1].x-bounds.x,points[1].y-bounds.y],sIndex);
	}
};

dhtmlx.compat("layout");
