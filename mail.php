<?php

header("Content-Type: text/html;charset=utf-8");
mb_language('ja');
mb_internal_encoding("utf-8");

//【２】HTMLエンティティ変換
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, "utf-8");
$company = htmlspecialchars($_POST['company'], ENT_QUOTES, "utf-8");
$postcode = htmlspecialchars($_POST['postcode'], ENT_QUOTES, "utf-8");
$email = htmlspecialchars($_POST['mail'], ENT_QUOTES, "utf-8");
$phone = htmlspecialchars($_POST['tel'], ENT_QUOTES, "utf-8");
$message = htmlspecialchars($_POST['msg'], ENT_QUOTES, "utf-8");


$msg = mb_convert_kana($message, "sKV");

//管理者受信用メール送信処理
function funcManagerAddress($name, $company, $postcode, $email, $phone, $msg)
{

  $mailto = 'info@qu-bic.jp'; // 管理者当てメール、カンマで複数設定可能
  $subject = $name . "様。お問い合わせいただき、ありがとうございます。"; //件名




  $content .= "内容を確認後、返信してください。\n\n";
  $content .= "--------------------------------\n\n";
  $content .= "【お名前 / 担当者名】：" . $name . "\n";
  $content .= "【店舗名 / 会社名】：" . $company . "\n";
  $content .= "【郵便番号】：" . $postcode . "\n";
  $content .= "【メールアドレス】：" . $email . "\n";
  $content .= "【電話番号】：" . $phone . "\n";
  $content .= "【お問合せ内容】\n";
  $content .= $msg . "\n\n";
  $content .= "--------------------------------\n\n";
  $content .= "cam505";

  $mailfrom = "From:" . mb_encode_mimeheader($name) . "<" . $email . ">";
  if (mb_send_mail($mailto, $subject, $content, $mailfrom) == true) {
    $managerFlag = "○";
  } else {
    $managerFlag = "×";
  }
  return $managerFlag;
}


//送信者用自動返信メール送信処理
function funcContactAddress($name, $company, $postcode, $email, $phone, $msg)
{
  $mailto = $email;
  $subject = "お問い合わせありがとうございます";
  $content = "\nお問い合わせありがとうございます。\n\n";


  $content .= "お問い合わせ内容を確認後、担当者よりお電話にてご連絡させていただきます。\n";
  $content .= "お電話でのご連絡に関してのご希望時間がございましたら、このメールにご返信ください。\n\n\n";



  $content .= "以下の内容でお問い合わせを受け付けました。\n\n";
  $content .= "--------------------------------\n\n";
  $content .= "【お名前 / 担当者名】：" . $name . "\n";
  $content .= "【店舗名 / 会社名】：" . $company . "\n";
  $content .= "【郵便番号】：" . $postcode . "\n";
  $content .= "【メールアドレス】：" . $email . "\n";
  $content .= "【電話番号】：" . $phone . "\n";
  $content .= "【お問合せ内容】\n";
  $content .= $msg . "\n\n";
  $content .= "--------------------------------\n\n\n";
  $content .= "内容に誤りがあった場合には、お手数ですが下記より弊社までご連絡お願い致します。\n";
  $content .= "後日、担当者よりご連絡させていただきます。\n\n";
  $content .= "--------------------------------\n\n";
  $content .= "\n"; //社名
  $content .= "【住所】  \n";
  $content .= "【電話番号】 \n";
  $content .= "【MAIL】 \n";
  $content .= "【営業時間】 (土日祝除く)\n\n";
  $content .= "--------------------------------\n";


  $mailfrom = "From:" . mb_encode_mimeheader("Qubic株式会社") . "<'info@qu-bic.jp'>";

  if (mb_send_mail($mailto, $subject, $content, $mailfrom) == true) {
    $contactFlag = "○";
  } else {
    $contactFlag = "×";
  }
  return $contactFlag;
}


//送信者用自動返信メール送信
$contactAddress = funcContactAddress($name, $company, $postcode, $email, $phone, $msg);
//管理者受信用メール送信
$managerAddress = funcManagerAddress($name, $company, $postcode, $email, $phone, $msg);

if ($contactAddress === "○" && $managerAddress === "○") {
  header("Location: ./thanks.html");
}
