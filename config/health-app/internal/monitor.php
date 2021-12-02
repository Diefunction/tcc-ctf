<?php
    $file = fopen($_POST['logfile'], 'r');
    while(!feof($file)) {
      echo fgets($file) . "<br>";
    }
    fclose($file);
?>