//放大镜效果
showImg();
//小图片的切换效果
function showImg(){
	let lis=$("#xlink-img").children();
	for(let i=0;i<lis.length;i++){
		console.log(lis)
		$(lis[i]).mouseenter(function(){
			console.log(1)
			let imgsSrc=$(this).children("img").attr("src");
			$("#m-img").attr("src",imgsSrc);
		});
	}
}

//放大镜出现效果
showMirror();
function showMirror(){
	$("#con-MirrorBox").mousemove(function(ev){
		let e=ev || window.event;
		$("#imgId").attr("src",$("#m-img").attr("src"));

		let MirrorBox=document.getElementById("con-MirrorBox");
		let content1=document.getElementById("content-1");
		let bigMirror=document.getElementById("bigMirror");
		let imgId=document.getElementById("imgId");
		let bigShow=document.getElementById("bigShow");

		$("#bigMirror").css("display","block");
		$("#bigShow").css("display","block");

		console.log(MirrorBox.offsetWidth)
		let left1 = e.pageX-content1.offsetLeft-100;
          let top1 =  e.pageY-content1.offsetTop-100;
          if(left1<0){
              left1=0;
          }else if(left1>MirrorBox.offsetWidth-200){
              left1=MirrorBox.offsetWidth-200;
          }
          if(top1<0){
              top1=0;
          }else if(top1>MirrorBox.offsetHeight-200){
              top1=MirrorBox.offsetHeight-200;
          } 

        bigMirror.style.left = left1+"px";
        bigMirror.style.top =top1+"px";
        imgId.style.left = -1*2*left1+"px";
        imgId.style.top =-1*2*top1+"px";

	});

	$("#con-MirrorBox").mouseout(function(){
        bigMirror.style.display="none";
        bigShow.style.display="none";
    });
}