<?php
// incrustafoto.php?mapa=&&foto=FotoPrueba/rags.jpg&&x=&&y=&&width=&&height=
// 127.0.0.1:8887/DEF/31/incrustafoto.php?mapa=Mapas/Sergi3/&&foto=FotoPrueba/doggy.jpg&&x=1274&&y=1&&width=500&&height=579

mkdir("t");

for($x=1;$x<=16;$x++)
{
	for($y=1;$y<=16;$y++)
	{
		copy("1.htm", "t/".$x."-".$y);
	}
}











/*
$mapa=$_GET["mapa"];
$texto=$_GET["texto"];
$x=$_GET["x"];
$y=$_GET["y"];
$width=$_GET["width"];
$height=$_GET["height"];
*/


echo("ok!");

?>





