function bufferMove(obj,target,fn,ratio = 8){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//用来判断一个运动是否执行完根据这个值来清除定时器
		var bBtn = true;
		for(var sAttr in target){
			if(sAttr==='opacity'){
				var iCur=getStyle(obj,'opacity')*100;
			}else{
				var  iCur=parseInt(getStyle(obj,sAttr));
			}
			var speed=(target[sAttr]-iCur)/ratio;

			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			var next=iCur+speed;

			if(sAttr==='opacity'){
				obj.style.opacity=next/100;
				//兼容IE
				obj.style.filter  = 'alpha(opacity:' + next + ')';
			}else{
				obj.style[sAttr] = next + 'px';
			}

			 if(target[sAttr]!==next){
			 	bBtn=false;
			 }
		}

			 if(bBtn===true){
			 	clearInterval(obj.timer);
			 	if(fn){
			 		fn();
			 	}
			 }
	},50)
}
function getStyle(obj,sAttr){
	if(obj.currentStyle){
		return obj.currentStyle[sAttr];
	}else{
		return getComputedStyle(obj, false)[sAttr];
	}
}