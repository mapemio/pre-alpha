<?php

//$path = "uploads/";

$path = $_REQUEST['mapurl'];
$zoom = $_REQUEST['zoom'];
//$path = $_GET["map"];

$path = $path."data/originals/";


	$valid_formats = array("jpg", "png", "gif", "bmp", "jpeg", "JPG");
	if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
		{
			$name = $_FILES['photoimg']['name'];
			$size = $_FILES['photoimg']['size'];
			
			if(strlen($name))
				{
					//list($txt, $ext) = explode(".", $name);
					$ext=substr($name, -3);
					$txt=substr($name, 0, strlen($name)-4);

					if(in_array($ext,$valid_formats))
					{
					if($size<(120048*120048))
//					if(1)
						{
							
							$actual_image_name = time().substr(str_replace(" ", "_", $txt), 5).".".$ext;
							$tmp = $_FILES['photoimg']['tmp_name'];
							if(move_uploaded_file($tmp, $path.$actual_image_name))
								{			

								
								
							// Calculo el tamaño específico de l aimagen para así ajustar el tamaño según como esté el zoom actualmente
							list($width, $height, $type, $attr) = getimagesize($path.$actual_image_name);
							
								$width=intval((int)$width)/pow($zoom,2);
								$height=intval((int)$height)/pow($zoom,2);

/*

							if($zoom==1)
							{
								$width=$width/2;
								$height/=2;
							}
							if(!strcmp($zoom,"2"))
							{
								$width/=4;
								$height/=4;
							}
							if(!strcmp($zoom,"3"))
							{
								$width/=8;
								$height/=8;
							}
							if(!strcmp($zoom,"4"))
							{
								$width/=16;
								$height/=16;
							}								
*/								
													
									echo "<img src='".$path.$actual_image_name."' width='".$width."' height='".$height."' class='cuadrito' id='fotoRags' style='width:".$width."px; height=".$height."px;'>
									<div style='position:absolute; right:-45px; bottom:25px; '>
									<input type='button' id='boton_incrustar_foto' value='OK' onClick='incrustar_foto(\"".$path.$actual_image_name."\", document.getElementById(\"cuadrito1\").style.left,document.getElementById(\"cuadrito1\").style.top, document.getElementById(\"fotoRags\").width,document.getElementById(\"fotoRags\").height)'/>
									</br>
									<input type='button' id='boton_cancel_incrustar_foto' value='X zoom=".$zoom."' onClick='el=document.getElementById(\"cuadrito1\"); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;'>
									</div>";
								}
							else
								echo "failed!! | path=".$path;
						}
						else
						echo "Image file size max 1 MB";					
						}
						else
						echo "Invalid file format..!!!";	
				}
				
			else
				echo "Please select image titi..!";
				
			exit;
		}
?>
