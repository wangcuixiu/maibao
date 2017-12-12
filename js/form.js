
/*var updataBtn=$("#addressBox").children("ul").children("li").children("b").children(".updata")[0];*/
showAddressColor();
function showAddressColor(){
	var addressUl=$("#addressBox").children("ul");
	
	for(let i=0;i<addressUl.length;i++){
		if(i==0){
			$(addressUl[i]).css("backgroundColor","#fbf4d8");
		}
		else{
			$(addressUl[i]).css("paddingLeft","60px");
		}
	}
}


//添加地址
addAddress();
function addAddress(){
	$("#addAddress").click(function(){
	$("#streetAddress").val("");
	$("#name").val("");
	$("#phoneNumber").val("");
	$("#box").css("display","block");

	});

	$("#sure").click(function(){
	let str=`
			<ul>
        	    <li>
        	        <input type="radio"/> 
        	        <span class="pro">${$("#province").val()}</span>-
        	        <span class="cit">${$("#city").val()}</span>-
        	        <span>新城区</span>
        	        <span class="street">${$("#streetAddress").val()}</span>  
        	        <span class="user">${$("#name").val()}</span> 
        	        <span class="phNumber">${$("#phoneNumber").val()}</span>
        	        <b>
        	            <a class="updata" href="javascript:;">修改地址</a>
        	            <a class="delete" href="javascript:;">删除</a>
        	        </b>
        	    </li>
        	</ul>   
			`;
			$("#addressBox").append(str);
			/*updataBtn=$("#addressBox").children("ul").children("li").children("b").children(".updata");*/
			/*updataAddress();*/
		});

	$("#content-box").click(function(ev){
		let e  = ev || window.event;
		let oT = e.target || e.srcElement;
		if(oT.nodeName === 'A') {
			$("#box").css("display","none");
		}

	});
}
	
//修改地址
updataAddress();
function updataAddress(){
	let that
	$("#addressBox").on("click",".updata",function(){
		    that=this;
			$("#box-1").css("display","block");
			$("#province-1").val($(this).parent("b").parent("li").children(".pro").html());
			$("#city-1").val($(this).parent("b").parent("li").children(".cit").html());
			$("#streetAddress-1").val($(this).parent("b").parent("li").children(".street").html());
			$("#name-1").val($(this).parent("b").parent("li").children(".user").html());
			$("#phoneNumber-1").val($(this).parent("b").parent("li").children(".phNumber").html());

			
	});

	$("#sure-1").click(function(){
				console.log(that)
				$(that).parent("b").parent("li").children(".pro").html($("#province-1").val());
				$(that).parent("b").parent("li").children(".cit").html($("#city-1").val());
				$(that).parent("b").parent("li").children(".street").html($("#streetAddress-1").val());
				$(that).parent("b").parent("li").children(".user").html($("#name-1").val());
				$(that).parent("b").parent("li").children(".phNumber").html($("#phoneNumber-1").val());
			});

	$("#content-box-1").click(function(ev){
		let e  = ev || window.event;
		let oT = e.target || e.srcElement;
		if(oT.nodeName === 'A') {
			$("#box-1").css("display","none");
		}

	});
}



	
//删除地址

deleteShopping();
function deleteShopping(){
	$("#addressBox").on("click",".delete",function(){
		alert("确定要删除此地址吗？");
		let dom=$(this).parent().parent("li").parent("ul")[0];
		$(".addressBox")[0].removeChild(dom);
		showAddressColor();

	});
	
}
	


//省市联动效果-1
showCity();
function showCity(){
	let provinceCitys;
	//获取所有的省市数据
	function getCitys(){
		$.get("../php/city.php","",function(data){
			provinceCitys = $.parseJSON(data);
			/*console.log(provinceCitys)*/
			showProvince();
			//显示市
			showCity();		
		});
	}
	function showProvince(){
		let provinces = provinceCitys.城市代码;
		for(let i=0;i<provinces.length;i++){
			let optionDom = document.createElement("option");
			$(optionDom).val(provinces[i].省 );
			$(optionDom).html(provinces[i].省);
			$("#province").append(optionDom);
		}
	}

	function showCity(){
	//1、查找当前省对应的市的数组
		let index = -1;
		let provinces = provinceCitys.城市代码;
		for(let i=0;i<provinces.length;i++){
			if(provinces[i].省==$("#province").val()){
				index = i;
				break;
			}
		}
		
		//2、显示省对应的市。
		//provinces[index].市;
		$("#city").html("");
		let citys = provinces[index].市;
		for(let i=0;i<citys.length;i++){
			let optionDom = document.createElement("option");
			$(optionDom).html(citys[i].市名);
			$("#city").append(optionDom);
		}
	}

	getCitys();
	$("#province").change(function(){
		showCity();
	});
}


//省市联动效果2
showCity2();
function showCity2(){
	let provinceCitys;
	//获取所有的省市数据
	function getCitys(){
		$.get("../php/city.php","",function(data){
			provinceCitys = $.parseJSON(data);
			/*console.log(provinceCitys)*/
			showProvince();
			//显示市
			showCity();		
		});
	}
	function showProvince(){
		let provinces = provinceCitys.城市代码;
		for(let i=0;i<provinces.length;i++){
			let optionDom = document.createElement("option");
			$(optionDom).val(provinces[i].省 );
			$(optionDom).html(provinces[i].省);
			$("#province-1").append(optionDom);
		}
	}

	function showCity(){
	//1、查找当前省对应的市的数组
		let index = -1;
		let provinces = provinceCitys.城市代码;
		for(let i=0;i<provinces.length;i++){
			if(provinces[i].省==$("#province-1").val()){
				index = i;
				break;
			}
		}
		
		//2、显示省对应的市。
		//provinces[index].市;
		$("#city-1").html("");
		let citys = provinces[index].市;
		for(let i=0;i<citys.length;i++){
			let optionDom = document.createElement("option");
			$(optionDom).html(citys[i].市名);
			$("#city-1").append(optionDom);
		}
	}

	getCitys();
	$("#province-1").change(function(){
		showCity();
	});
}


