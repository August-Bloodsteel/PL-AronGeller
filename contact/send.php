<?php 

if (isset($_POST['sumbit'])){
    $email = $_POST['email'];
    $massage = $_POST['massage'];
    $target = $_POST['target'];
    header("location:https://api.whatsapp.com/send?phone=$target&text=Email:%20$email%20%0DMassage:%20$massage");
} else{
    echo"
    <script>
        window.location=history.go(-1);
    </script>
    ";
}

?>