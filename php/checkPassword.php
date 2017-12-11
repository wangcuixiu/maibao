<?php

$password = $_POST['userpass'];

if($password === '066024') {
    $ret = ['status' => 200, 'info' => '密码输入正确！'];
} else {
    $ret = ['status' => 401, 'info' => '密码输入错误！'];
}

echo json_encode($ret, JSON_UNESCAPED_UNICODE);