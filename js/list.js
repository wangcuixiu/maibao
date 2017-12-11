
$(".listMenue li").children("b").children("span").addClass("jian2");

if($(".listMenue>li").children('.show')){
	$(".listMenue>li").children('.show').siblings('b').children('span').removeClass("jian2");
	$(".listMenue>li").children('.show').siblings('b').children('span').addClass("jian1");
	//console.log($(".listMenue>li").children('.show'))
}

//点击left的li的效果函数
show();
function show(){
	let lis=$(".listMenue").children("li");
	for(let i=0;i<lis.length;i++){

		$(lis[i]).click(function(){
			
			if($(this).children("ul").hasClass("show")){
				$(this).children(".show").siblings('b').children('span').removeClass("jian1");
				$(this).children(".show").siblings('b').children('span').addClass("jian2");

				$(this).children(".show").removeClass("show");

			}else{
				
				$(this).children("ul").addClass("show");
				$(this).children(".show").siblings('b').children('span').removeClass("jian2");
				$(this).children(".show").siblings('b').children('span').addClass("jian1");

			}

		});

	}
	
}

//商品列表的样式
showList();
function showList(){
	let lis=$("#content-right-list").children();
	/*console.log(lis)*/
	

	for(let i=0;i<lis.length;i++){
		//imgli为li下的ul下的li
		let imgli=$(lis[i]).children("ul").children();
		for(let j=0;j<imgli.length;j++){
			$(imgli[j]).mouseenter(function(){
				//li里面的img的src
				let src=$(imgli[j]).children().attr("src");
				/*console.log(src);*/
				$(lis[i]).children("img").attr("src",src);
			});
		}
	}
}

