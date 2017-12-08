window.onscroll = function(){

			var Ntop = document.documentElement.scrollTop;
			
			if(Ntop>500){
				document.getElementById("fixedUl2").style.display="block";
				document.getElementById("fixed1-li-1").style.display="block";
				document.getElementById("fixed1-li-1").onclick=function(){
					document.documentElement.scrollTop=0;
				}
			}else{
				document.getElementById("fixedUl2").style.display="none";
				document.getElementById("fixed1-li-1").style.display="none";
			}
		}



//侧边导航
showXlink();
function showXlink(){
	let lis=Array.from($("#xianlink-ul").children("li"));
	
	lis.forEach(function(v,k){
		let t=k+1;
		$(v).mouseenter(function(){
			if(k==3){
					$("#dlink-img").css({
						top:"-50px"
					});
				}
			let that=this;

			$("#dlink-img").css('display','block');
			$(this).addClass("show");
			$("#link-img").attr({src:"images/nav"+t+".png"})
			
			$("#dlink-img").mouseenter(function(){
				if(that==lis[3]){
					$("#dlink-img").css({
						top:"-50px"
					});
				}else{
					$("#dlink-img").css({
						top:"0px"
					});
				}
				
				lis.forEach(function(x){
					$(x).removeClass("show");
				});
				$(that).addClass("show");
				$("#dlink-img").css('display','block');
			});	 
			$("#dlink-img").mouseleave(function(){
				
					$("#dlink-img").css({
						top:"0px"
					});
				$("#dlink-img").css('display','none');
				$(that).removeClass("show");
			});	

		});

		$(v).mouseleave(function(){
			if(k==3){
					$("#dlink-img").css({
						top:"0px"
					});
				}
			$(this).removeClass("show");
			$("#dlink-img").css('display','none');
		});
	});

}

