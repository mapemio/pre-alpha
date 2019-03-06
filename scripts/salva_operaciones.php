<?php
// incrustafoto.php?mapa=&&foto=FotoPrueba/rags.jpg&&x=&&y=&&width=&&height=
// 127.0.0.1:8887/DEF/31/incrustafoto.php?mapa=Mapas/Sergi3/&&foto=FotoPrueba/doggy.jpg&&x=1274&&y=1&&width=500&&height=579



$data=$_GET["data"];



$f=fopen('../../maps/DemoJulie/operaciones.html',"w+");

fputs($f,"".$data); 
fclose($f);


echo("ok!");

?>





