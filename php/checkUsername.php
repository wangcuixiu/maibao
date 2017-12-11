<?php

$username = $_POST['username'];

if($username === '15294165568') {
    $ret = ['status' => 200, 'info' => '账号输入正确！'];
} else {
    $ret = ['status' => 401, 'info' => '账号输入错误！'];
}

echo json_encode($ret, JSON_UNESCAPED_UNICODE);