<?php


$data='';


$f=fopen('../objectsLayer.html',"r");

while( ($lectura=fgets($f,4096)) != false )
{
	$data=$data.$lectura;
}

fclose($f);

echo($data);



?>





