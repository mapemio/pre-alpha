<?php

function ls()
{



	$path="../artwork/parcels"; //directorio a listar
	$directorio=dir($path);

	$pn= array();//pila de nombres
	$pf= array();//pila de fechas
	$pt= array();//pila de tamaNos

	//bucle para llenar las pilas :P
	while ($archivo = $directorio->read())
	{
		//no mostrar ni "." ni ".." ni el propio "index.php"
		if(($archivo!="index.php")&&($archivo!=".")&&($archivo!="..")){
		array_push($pn, $archivo);
		//array_push($pf, date("d F Y H:i", filemtime($archivo)));
		//array_push($pt, filesize($archivo));
		}


	}


	$directorio->close();

	//ordenar las 3 pilas segun la pila de nombres
	//array_multisort($pn,$pf,$pt);
	array_multisort($pn);


//	echo '<input type="submit" name="botonVolver" id="botonVolver" value="<- Volver" onClick="botonVolver()"></br>';

	//mostrar los datos
	for($i=0; $i<count($pn); $i++)
	{
//		echo '<a href="#">'.$pn[$i]."</a> - ";
/*		
		$f=fopen($path.$pn[$i],"r");

		$dato=fgets($f);
		$inicio = substr($dato, strlen("NAME="), strlen($dato)-strlen("NAME=")-3);
		echo $inicio;
		
		$dato=fgets($f);
		$inicio = substr($dato, strlen("OWNER="), strlen($dato)-strlen("OWNER=")-3);
		echo $inicio;
		
		$dato=fgets($f);
		$inicio = substr($dato, strlen("URL="), strlen($dato)-strlen("URL=")-3);
*/
//		echo " - ".$inicio;

//		echo '<a href="#" onclick="mapaQueen();">.- GO ->.</a>';		


		echo '<img src="artwork/parcels/'.$pn[$i].'" height="64" width="64" onClick=" document.getElementById(\'SelectedsampleParcel\').value=\'artwork/parcels/'.$pn[$i].'\';document.getElementById(\'muestraPlantillaSeleccionada\').src=\'artwork/parcels/'.$pn[$i].'\'" style="cursor:pointer;"/>';		

//		echo '<img src="artwork/parcels/'.$pn[$i].'" height="64" width="64" onClick=\'alert("hola");\'/>';		



//		echo '<a href="#" onclick="URL1 =\'../maps/'.$pn[$i].'/\'; setMapURLforUploadImages(); $(\'#draggable\').html(\'\'); jumpTo(1, 1); dibuja(); iniciaMiniMap();"><img src="'.'../maps/'.$pn[$i].'/data/mini.jpg"/> '.$pn[$i].'</a>';		
//		echo '<a href="#" onclick="alert(\'ya!\');">.- GO ->.</a>';		
		



		//switch(str)
		
	}
}


ls();


?>
