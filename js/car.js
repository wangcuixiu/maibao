
$("#rule").click(function(){
	$("#rule-box").css("display","block");
});


$("#list-box").click(function(ev){
	let e  = ev || window.event;
	let oT = e.target || e.srcElement;
	if(oT.nodeName === 'A') {
		$("#rule-box").css("display","none");
	}

});

//商品数量以及价格的操作
showShopping();
function showShopping(){
	//减少商品
	let num;
	$(".list").on("click",".jian",function(){
		
		num=Number($(this).parent().find('.count').html());
		num--;
		if(num<=1){
			num=1
		}
		$(this).parent().find('.count').html(num);
		$(this).parent().next().children('.acountPrice').html(num*$(this).parent().prev().children('.price').html());
		console.log(num*$(this).parent().find('.price').html());
		calculate();
	})
	    
	//增加商品
	$(".list").on("click",".jia",function(){
		num=Number($(this).parent().find('.count').html());
		num++;
		$(this).parent().find('.count').html(num)
		$(this).parent().next().children('.acountPrice').html(num*$(this).parent().prev().children('.price').html());
	     
	     calculate();
	        
	});

	//删除商品
	$(".list").on("click",".delete",function(){
		alert("确定要删除此商品吗？");
		let dom=$(this).parent().parent("ul")[0];
		$(".list")[0].removeChild(dom);
		calculate();
		
	})

}

//计算所有商品的总价钱和总数量
function calculate(){
	let allCount=$(".count");
	let count=0;
	for(let i=0;i<allCount.length;i++){
		count+=Number($(allCount[i]).html());
	}
	$("#allCount").html(count);


	let allMoney=$(".acountPrice");
	let money=0;
	for(let j=0;j<allMoney.length;j++){
		money+=Number($(allMoney[j]).html());
		console.log(money)
	}
	$("#allMoney").html(money);
	$("#sureMoney").html($("#allMoney").html());
}


	
