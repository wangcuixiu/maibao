	//box为外面的大盒子，btnLeft是左面的箭头按钮，btnRight是右面的箭头按钮，List是装图片的盒子
	function lunbo(box,btnLeft,btnRight,list,btn){
		/*console.log(imgs)*/
	var imgs=Array.from(list.children());
	console.log(imgs)
	var btns=Array.from(btn.children());

	var num=0;
	var len=imgs.length;
	var myTime=null;

	//划过小圆点的时候的事件
	btns.forEach(function (v, k) {
		v.addEventListener('mouseenter', function () {

			// 其它图片透明度由1变为0
			imgs.forEach(function (m, n) {
				bufferMove(m, {opacity: 0}, function () {
					m.style.display = 'none';
				});
			});

			//划过圆点的时候让图片为当前小圆点的下标
			num=k;

			imgs[k].style.display = 'block';
			bufferMove(imgs[k], {opacity: 100});


			// 按钮的处理
			btns.forEach(function (x, y) {
				x.className = '';
			});
			this.className = 'black';
		});
	});

// 	//onmouseenter事件
 	box.mouseenter(function(){
 		clearInterval(myTime);
 	})
 	//onmouseleave事件
 	box.mouseleave(function(){
 		autoMove();

 	});

 	btnRight.click(function(){
 		rightMove();
 		//小圆点
 		for(let i=0;i<btns.length;i++){
 			btns[i].className="";
 		}
 			if(num>=len){
 				btns[0].className="black";
 			}else{
 				btns[num].className="black";
 			}
 	});

	btnLeft.click(function(){
		imgs.forEach(function (m, n) {
				bufferMove(m, {opacity: 0}, function () {
					m.style.display = 'none';
				});
			});
			num--;

		if(num<0){
			imgs[imgs.length-1].style.display="block";
			bufferMove(imgs[imgs.length-1],{opacity:100})
 			num=len-1;
		}
		imgs[num].style.display="block";
 		bufferMove(imgs[num],{opacity:100});
		//小圆点
		for(let i=0;i<btns.length;i++){
			btns[i].className="";
		}
				btns[num].className="black";

	});


 	//自动播放
 	autoMove()
 	//自动播放函数
 	function autoMove(){
 		myTime=setInterval(function(){
 			rightMove();
 			//小圆点
 			for(let i=0;i<btns.length;i++){
 				btns[i].className="";
 			}
 			if(num>len){
 				btns[0].className="black";
 			}else{
 				btns[num].className="black";
 			}
 		},3000);
		

 	}

 //点击有边按钮的方法
 	function rightMove(){
 		imgs.forEach(function (m, n) {
				bufferMove(m, {opacity: 0}, function () {
					m.style.display = 'none';
				});
			});
 		num++;
 		if(num>=len){
 			bufferMove(imgs[0],{opacity:100},function(){
 				imgs[0].style.display="block";
 			})
 			num=0;
 		}
 		imgs[num].style.display="block";
 		bufferMove(imgs[num],{opacity:100});
 	}

	}
	
	