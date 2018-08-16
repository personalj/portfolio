<?php

/* https://api.telegram.org/bot629932380:AAEur3e-k5SvQ2AmbbkMFw9E_HR-MQCMLxk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

629932380:AAEur3e-k5SvQ2AmbbkMFw9E_HR-MQCMLxk

$name = $_POST['name'];
$mail = $_POST['email'];
$text = $_POST['text'];
$token = "629932380:AAEur3e-k5SvQ2AmbbkMFw9E_HR-MQCMLxk";
$chat_id = "-255749937";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $mail,
  'Текст' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>