<meta charset="utf-8"> 
<?php 
if(isset($_POST['submit'])){
    $to = "haykavanesyan09@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender Email address
    $first_name = $_POST['first_name'];
    $note_text="Имя : first_name \r\n Email : $email \r\n Дополнительная информация : $message";


    $headers = "From:" . $from;
    mail($to,$note_text,$headers);
    echo "Շնորհակալություն " . $first_name . ": <br/>Շուտով ձեզ կպատասխանեմ ձեր իսկ նշված էլեկտոնային հասցեին՝ $from";
  
    }

?>

