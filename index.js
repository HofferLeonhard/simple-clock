module.exports = {
 /**
   * Browse directory
   *
   * @param  {String} path
   * @param  {String} level
  */
  getTime: function(type) {
  	var d = new Date();
	var result = "";
	var clock = {
		default : (d.getHours()<=9?"0"+d.getHours():d.getHours())+":"+(d.getMinutes()<=9?"0"+d.getMinutes():d.getMinutes())+":"+(d.getSeconds()<=9?"0"+d.getSeconds():d.getSeconds()),
		h : (d.getHours()<=9?"0"+d.getHours():d.getHours()),
		min : (d.getMinutes()<=9?"0"+d.getMinutes():d.getMinutes()),
		s : (d.getSeconds()<=9?"0"+d.getSeconds():d.getSeconds()),
		ms : d.getMilliseconds(),
		toMilli : d.getTime(),
		d : (d.getDate()<=9?"0"+d.getDate():d.getDate()),
		m : ((d.getMonth()+1)<=9?"0"+(d.getMonth()+1):(d.getMonth()+1)),
		y : (d.getFullYear()<=9?"0"+d.getFullYear():d.getFullYear()),
		full : (d.getHours()<=9?"0"+d.getHours():d.getHours())+":"+(d.getMinutes()<=9?"0"+d.getMinutes():d.getMinutes())+":"+(d.getSeconds()<=9?"0"+d.getSeconds():d.getSeconds())+"-"+(d.getDate()<=9?"0"+d.getDate():d.getDate())+"/"+((d.getMonth()+1)<=9?"0"+(d.getMonth()+1):(d.getMonth()+1))+"/"+(d.getFullYear()<=9?"0"+d.getFullYear():d.getFullYear())
	}
		
	if(clock[type]){
		return clock[type];
	}
	else if(!type){
		return clock.default;
	}
	else{
		
		var cats = type.split(" ");
		var chaine = "";
		var separation = " ";

		for(var c=0;c<cats.length;c++){
			if(cats[c].split(":").length > 1){
				var types = cats[c].split(":");
				for(var i = 0; i<types.length; i++){
					if(clock[types[i]]){
						if(i != types.length-1)
							chaine += clock[types[i]] + ":";
						else
							chaine += clock[types[i]];
					}
					 
				}
				if(cats.length==2 && (c!=cats.length-1)){
					chaine += separation;
				}
			}
			if(cats[c].split("-").length > 1){
				var types = cats[c].split("-");
				for(var i = 0; i<types.length; i++){
					if(clock[types[i]]){
						if(i != types.length-1)
							chaine += clock[types[i]] + "-";
						else
							chaine += clock[types[i]];
					}
					 
				}
				if(cats.length==2 && (c!=cats.length-1)){
					chaine += separation;
				}
			}
			else if(cats[c].split("/").length > 1)
			{

				var types = cats[c].split("/");
				for(var i = 0; i<types.length; i++){
					if(clock[types[i]]){
						if(i != types.length-1)
							chaine += clock[types[i]] + "/";
						else
							chaine += clock[types[i]];
					}
					 
				}
			}
			
		}
		

		return chaine;
	}

  }

};