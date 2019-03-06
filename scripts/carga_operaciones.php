<?php


$data='';


$f=fopen('../../maps/DemoJulie/operaciones.html',"r");

while( ($lectura=fgets($f,4096)) != false )
{
	$data=$data.$lectura;
}

fclose($f);

echo($data);



?>





