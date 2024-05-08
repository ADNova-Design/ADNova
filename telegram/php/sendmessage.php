<?php

$content = '';
foreach ($_POST as $key => $value) {
    if($value){
        $content .= "<b>$key</b>: <i>$value</i>\n";
    }
}
if(trim($content)){
$content = "<b>Message from Site:</b>\n".$content;
// Your bot's token that got from @BotFather
$apiToken= "7073733802:AAHsm31QU6ZEkXf1prdvE_YQmTu2opG8BMY";
$data = [
// The user's(that you want to send a message) tel
'chat_id' => 'ADNovaNotificaciones',
'text' => $content,
'parse_mode' => 'HTML'
];

$response file_get_contents("https://api.telegram.org/bot$apiToken/senMessage?".http_build_query($data));
}

?>