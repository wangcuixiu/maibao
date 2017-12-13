<?php

$username = $_POST['username'];

if($username === '15294165568') {
    $ret = ['status' => 200, 'info' => '账号正确！'];
} else {
    $ret = ['status' => 401, 'info' => '账号有误！'];
}

echo json_encode($ret, JSON_UNESCAPED_UNICODE);