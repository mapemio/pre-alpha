<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="Content-Language" content="en-us" />
	<title>generaSector !</title>

<body>

<center>

<?php





if($_GET['doGenerate'] == 'Generate') 
{ 
$nombre=$_GET["nombre"];
$numx=$_GET["num"];
$numy=$_GET["num2"];



$mapa='../../Mapas/'.$nombre.'/';


echo "Generando Parcelas del mapa";


mkdir($mapa);

mkdir($mapa."0");  // Sin Zoom

	
	$im = ImageCreateTrueColor(256, 256)
    	or die("Cannot Initialize new GD image stream");

	$im2 = @imagecreatefromjpeg("Artwork_SectoresVacios/celeste10.jpg")   // carga la foto de ejemplo a la futura parcela
	    or die("Cannot Initialize new GD image stream");

$x=1;
$y=1;

$sx=0;
$sy=0;

//	$fuente = imageloadfont('arial.gdf');
	$color_texto = imagecolorallocate($im, 0, 0, 91);
	
	
	
	
//	mkdir("t");    // Genera direciontio para las QuickTips
	
for ($x=1;$x<=$numx;$x++)
{
	

for ($y=1;$y<=$numy;$y++)
{
	

$datos='
<style type="text/css">

.PieNotaFotos {
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
}
.TextoDerecha {
	position: relative;
	margin-left: 5px;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	left: 5px;
}
.SubtituloPrincipal {
	font-family: "Comic Sans MS", cursive;
	font-size: 14px;
	font-style: italic;
	color: #006;
}
.TituloDerecha {
	font-weight: bold;
	text-decoration: underline;
}
.TituloPrincipal {
	font-weight: bold;
	font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
	font-size: 36px;
	color: #03F;
}
.PieNotaFotos {
	text-align: center;
}
.inv{visibility:hidden;}

</style>


<center><img src="sector'.$x.'-'.$y.'a.jpg" /></center>


<!-- CODIGOS DE IDENTIFICACION DEL SECTOR -->
<div id="x" class="inv">'.$x.'</div>
<div id="y" class="inv">'.$y.'</div>
<div id="b" class="inv">1</div>  <!-- b=busy, indica si el sector está libre u ocupado -->
<!------------------------------------------>




';



$datos='<img src="'.$x.'-'.$y.'" />';


$datos='Parcela '.$x.'-'.$y.' libre!';
/*
$f=fopen('t/'.$x.'-'.$y,"w+");
fputs($f,$datos); 
fclose($f); 	
*/




	imagecopy($im, $im2, 0, 0, 0, 0, 256, 256);
//	imagestring($im, $fuente, 12, 10,  $x.'-'.$y.'a', $color_texto);
	imagestring($im, 5, 7, 10,  'Sector '.$x.'-'.$y, $color_texto);
	imagejpeg($im, $mapa.'0/'.$x.'-'.$y.'.jpg');





	
}

}


imagedestroy($im);
imagedestroy($im2);

/*
echo "Generando niveles de Zoom";
header('Location: generaMiniaturasZoom2.php?'.'doGenerate=Generate&&num='.$numx.'&&num2='.$numy);
*/
}

?>



<form action="generaSectores.php" method="get" name="generatorForm" id="generatorForm" >
  <table width="95%" border="0" cellpadding="3" cellspacing="3" class="forms">
    <tr>
      <td>Nombre del Mapa a generar:</td>
      <td><input name="nombre" type="text" id="nombre" /></td>
    </tr>
    <tr>
      <td>X sectores:</td>
      <td><input name="num" type="text" id="num" /></td>
    </tr>
    <tr>
      <td width="27%">Y sectores:</td>
      <td width="73%"><input name="num2" type="text" id="num2" /> </td>
    </tr>
  </table>
  <p align="center">
    <input name="doGenerate" type="submit" id="doGenerate" value="Generate" />
  </p>
</form>
</body>

</html>


