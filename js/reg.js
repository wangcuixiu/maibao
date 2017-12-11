
//验证电话号码
$("#username ").focus(function(){
	$(this).css({
		"borderColor":"#f44343",
		"boxShadow":"0 0 3px #f44343"
	});
	$("#userYz").html("请填写正确的11位手机号码");
});
$("#username ").blur(function(){
	var	username=$("#username ").val();
	if (!/^1\d{10}$/.test(username)) {
       $("#userYz").html('格式不正确');
        return false;
    }
	$(this).css({
		"borderColor":"",
		"boxShadow":""
	});
	$("#userYz").html("");
});

//验证密码
$("#password1").focus(function(){
	$(this).css({
		"borderColor":"#f44343",
		"boxShadow":"0 0 3px #f44343"
	});
	$("#passYz").html("请填写6-12位密码可以是字母和数字");
});
$("#password1").blur(function(){
	var pass=$("#password1").val();
	if(pass.length < 6 || pass.length>12) {
        $("#passYz").html("密码格式错误");
        return false;
    }
	$(this).css({
		"borderColor":"",
		"boxShadow":""
	});
	$("#passYz").html("");
});

//第二次验证电话号码
$("#password2").focus(function(){
	$(this).css({
		"borderColor":"#f44343",
		"boxShadow":"0 0 3px #f44343"
	});
	$("#sharMm").html("请填写6位密码可以是字母和数字组合");
});
$("#password2").blur(function(){

	if($("#password2").val()!=$("#password1").val()){
		$("#sharMm").html("两次输入的密码不一致");
		return false;
	}
	$(this).css({
		"borderColor":"",
		"boxShadow":""
	});
	$("#sharMm").html("");
});

//点击获取验证码的效果
$("#btn").click(function(){
	$(this).css("display","none");
	$(".sjs").css("display","block");
	$("#showNumber").css("display","block");
	$(".send").css("display","block");
});

//点击换一张是的效果
$("#sjs").html(createVerifyCode());
$("#showNumber").click(function(){
	$("#sjs").html(createVerifyCode());
});

function createVerifyCode() {
	var sSeeds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	var sVerify = '';
	for(var i = 0; i < 4; i++) {
		var iIndex = Math.floor(Math.random() * sSeeds.length);
		sVerify += sSeeds[iIndex];
	}

	return sVerify;
}
