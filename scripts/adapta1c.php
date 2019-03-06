<?php

/*
$source_pic = 'input/f1.jpg';
$destination_pic = 'output/f1.jpg';
*/
$path='./input';


$dir = opendir($path);
while ($dir && ($file = readdir($dir)) !== false) {

$source_pic =$path."/".$file;
$destination_pic = 'output/'.$file;




$src = imagecreatefromjpeg($source_pic);
list($width,$height)=getimagesize($source_pic);

echo "width=".$width."</br>";
echo "height=".$height."</br>";
echo "width+width%256=".($width+$width%256)."</br>";
echo "height+height%256=".($height+$height%256)."</br>";


$tmp=imagecreatetruecolor($width+256-$width%256,$height+256-$height%256);
//$tmp=imagecreatetruecolor(256,256);


$grey = imagecolorallocate($tmp, 128, 128, 128);
imagefilledrectangle($tmp, 0, 0, $width+256-$width%256, $height+256-$height%256, $grey);


imagecopyresampled($tmp,$src,(256-$width%256)/2,(256-$height%256)/2,0,0,$width, $height,$width,$height);
//imagecopyresampled($tmp,$src,($width%256)/2,($height%256)/2,0,0,256, 256,$width,$height);

imagejpeg($tmp,$destination_pic,100);
imagedestroy($src);
imagedestroy($tmp);

  // do stuff
}


?>

