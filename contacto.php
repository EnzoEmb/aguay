<?php
 
    $email_a = "litvacksamuelm@gmail.com";
    $email_titulo = "Hotel Aguay";

    $nombre = $_POST['nombre'];
    $email_de = $_POST['email']; 
    $texto = $_POST['mensaje'];
 
    $email_mensaje = "Detalles del mail.\n\n";
 
    $email_mensaje .= "Nombre y apellido: ".$nombre."\n";
    $email_mensaje .= "Email: ".$email_de."\n";
    $email_mensaje .= "Texto: ".$texto."\n";
 
$headers = 'From: '.$email_de."\r\n".
'Reply-To: '.$email_de."\r\n" .
'X-Mailer: PHP/';
@mail($email_a, $email_titulo, $email_mensaje, $headers);  
?>
<script>location.href="index.html"</script>
<?php
 
}
?>
