$("#closebtn").click(function(){
	$("#showPassError").css("display","none");
});


var username = "";
var userpass = "";
$("#loginBtn").click(function() {
	username = $("#name").val();
   // 开始验证账号
    if(username === '') {
        $("#showError").html('请输入账号');
        return false;
    }
    if (!/^1\d{10}$/.test(username)) {
        $("#showError").html('格式不正确');
        return false;
    }
    $.ajax({
        url: '../php/checkUsername.php',
          type: 'post',
        data: {"username": username},
        success:function(data){
        	// 如果没有数据，就不在继续往下执行
            if(!data) {
                return false;
            }
            data = JSON.parse(data);

            if (data.status === 200) {
            	 $("#showError").html("用户名正确");
                // 开始验证密码
                userpass=$("#pass").val();
                if(userpass.length < 6 || userpass.length>12) {
                    $("#showPassError").css("display","block");
                    return false;
                }

                 $.ajax({
                    url: '../php/checkPassword.php',
                    type: 'post',
                    data: {userpass: userpass},
                    success:function(data){
                    	// 如果没有数据，就不在继续往下执行
           				 if (!data) {
           				     return false;
           				 }
           				 data = JSON.parse(data);
           				 console.log(data.status)
           				 if(data.status === 200) {
           				     alert ('登录成功！');
           				     window.location.href="../index.html";
           				 } else if(data.status === 401) {
           				     $("#showPassError").css("display","block");
           				 }
           			}
           		});

            } else {
                $("#showError").html(data.info);
            }
        }
    })
});