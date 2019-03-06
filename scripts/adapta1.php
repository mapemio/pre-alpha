<?php

$source_pic = 'input/f1.jpg';
$destination_pic = 'output/f1.jpg';

$path='./input';


$dir = opendir($path);
while ($dir && ($file = readdir($dir)) !== false) {

$source_pic =$path."/".$file;
$destination_pic = 'output/'.$file;


echo "->".$source_pic;


$max_width = 512;
$max_height = 512;

$src = imagecreatefromjpeg($source_pic);
list($width,$height)=getimagesize($source_pic);

$x_ratio = $max_width / $width;
$y_ratio = $max_height / $height;

if( ($width <= $max_width) && ($height <= $max_height) ){
    $tn_width = $width;
    $tn_height = $height;
    }elseif (($x_ratio * $height) < $max_height){
        $tn_height = ceil($x_ratio * $height);
        $tn_width = $max_width;
    }else{
        $tn_width = ceil($y_ratio * $width);
        $tn_height = $max_height;
}

$tmp=imagecreatetruecolor($tn_width,$tn_height);
imagecopyresampled($tmp,$src,0,0,0,0,$tn_width, $tn_height,$width,$height);

imagejpeg($tmp,$destination_pic,100);
imagedestroy($src);
imagedestroy($tmp);

  // do stuff
}


?>

