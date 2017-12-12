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

showLInk();
function showLInk(){
	$("#big-span").mouseenter(function(){
		$("#xianlink-ul").css("display","block");
	});
	$("#big-span").mouseleave(function(){
		$("#xianlink-ul").css("display","none");
			
	});
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
			$("#link-img").attr({src:"../images/nav"+t+".png"})
			
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

//搜搜索框跨域
function callback(data){
		data.result.forEach((v)=>{
			let str=`
				<li>
                    <a href="list.html">${v}</a>
                </li>
			`;
			$("#souList").append(str);
		})
	}

	$("#SearchId").bind("input",function(){
		$("#souList").css("display","block");
		$("#souList").html("");
		if($(this).val()!=""){
			var script=document.createElement("script");
			script.src="https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&_ksTS=1511352574243_469&callback=callback&k=1&area=c2c&bucketid=17";
			document.body.appendChild(script);
		}
	});
	$("#SearchId").blur(function(){
		setTimeout(function(){
			$("#souList").css("display","none");
		},500);
		
	});	
		
	