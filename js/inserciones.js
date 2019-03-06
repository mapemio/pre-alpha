function insertar_texto(texto, x, y, fwidth, fheight)
{

	
	x=parseInt(x.slice(0, -2));	// Elimina el texto "px" del final
	y=parseInt(y.slice(0, -2));
	fwidth=parseInt(fwidth.slice(0, -2));
	fheight=parseInt(fheight.slice(0, -2));

	datos="texto="+texto+"&mapa="+URL1+"&x="+x+"&y="+y+"&width="+fwidth+"&height="+fheight;

		carga=$.ajax({
			async: true,
			cache: false,
			url: "scripts/insertatexto.php",
			type: "GET",
			data: datos,
			dataType: "HTML",
			success: function(data)
			{ 

/*
el=document.getElementById('boton_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
el=document.getElementById('boton_cancel_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;


$(".cuadrito").draggable("destroy")
$("#cuadrito1").resizable("destroy").attr('contentEditable', false);
el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
*/
// -------------------------------------------------------------------------------------------------------------------------------
// Actualizamos los sectores afectados, viendo así incrustada la imagen


// Calculamos el primer sector afectado por la incrustación de la fotografía
parcelaX=parseInt(x/256)+2;
parcelaY=parseInt(y/256)+2;
safectadosX=parseInt(fwidth)/256+1;		// Calcula los sectores horizontales que se verán afectados por la inserción de la imagen
safectadosY=parseInt(fheight)/256+1;	// Calcula los sectores verticales que se verán afectados por la inserción de la imagen
safectadosX=1;
safectadosY=1;

//alert("recargando "+parcelaX+"-"+parcelaY);
		reloadImg('s'+(parcelaX)+'-'+(parcelaY));

				//$("#draggable").html(""); 
				// AÑADE EN EL BLOQUE EN EL QUE HA SIDO GUARDADO EL NUEVO TEXTO INSERTADO, DICHO TEXTO!
				bX=(parseInt(parcelaX/16)+1);	// CALCULO EL BLOQUE AFECTADO
				bY=(parseInt(parcelaY/16)+1);
				
				


				xTextoInsertado=parseInt(document.getElementById("cuadrito1").style.left);
				yTextoInsertado=parseInt(document.getElementById("cuadrito1").style.top);
				




				$('#draggable').find('#bloque'+ bX + '-' + bY).append('<div class="CursiveSansOblique" style="position:absolute; left:' + (xTextoInsertado-4096*(bX-1)) + 'px; top:' + (yTextoInsertado-4096*(bY-1)) + 'px; border: 1px double black; background-color:#FFFF99;">' + texto + '</div>');
				
				
				el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
				
				dibuja();
				},
			error: function(data)
			{
				alert("ERROR!");
  			}
		 });	
		 

}







function incrustar_texto(texto, x, y, fwidth, fheight)
{
	x=parseInt(x.slice(0, -2));	// Elimina el texto "px" del final
	y=parseInt(y.slice(0, -2));
	fwidth=parseInt(fwidth.slice(0, -2));
	fheight=parseInt(fheight.slice(0, -2));


	datos="texto="+texto+"&mapa="+URL1+"&x="+x+"&y="+y+"&width="+fwidth+"&height="+fheight;
	


		carga=$.ajax({
			async: true,
			cache: false,
			url: "scripts/incrustatexto.php",
			type: "GET",
			data: datos,
			dataType: "HTML",
			success: function(data)
			{ 


el=document.getElementById('boton_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
el=document.getElementById('boton_cancel_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;


//$(".cuadrito").draggable("destroy")
//$("#cuadrito1").resizable("destroy").attr('contentEditable', false);
//el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;

// -------------------------------------------------------------------------------------------------------------------------------
// Actualizamos los sectores afectados, viendo así incrustada la imagen


// Calculamos el primer sector afectado por la incrustación de la fotografía
parcelaX=parseInt(x/256)+2;
parcelaY=parseInt(y/256)+2;
safectadosX=parseInt(fwidth)/256+1;		// Calcula los sectores horizontales que se verán afectados por la inserción de la imagen
safectadosY=parseInt(fheight)/256+1;	// Calcula los sectores verticales que se verán afectados por la inserción de la imagen
safectadosX=1;
safectadosY=1;

//alert("recargando "+parcelaX+"-"+parcelaY);
		reloadImg('s'+(parcelaX)+'-'+(parcelaY));

			//	$("#draggable").html(""); $("#operaciones").html("");
 dibuja();
				},
			error: function(data)
			{
				alert("ERROR!");
  			}
		 });	
		 

}


function incrustar_foto(foto, x, y, fwidth, fheight)
{
el=document.getElementById('boton_incrustar_foto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
el=document.getElementById('boton_cancel_incrustar_foto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
//el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;

//destruye("cuadrito1");
// Qué coño hace esto ??? Muy fácil!!! Deshabilita la draggabilidad de lo recién insertado!!! jejeje
$("#cuadrito1").draggable("destroy");
//$("#fotoRags").resizable("destroy").attr('contentEditable', false);



// Qué coño hace esto ??? Muy fácil!!! Deshabilita la draggabilidad de lo recién insertado!!! jejeje
//$(".cuadrito").draggable("destroy")
//$("#fotoRags").resizable("destroy").attr('contentEditable', false);

//alert("inserta!");

x=parseInt(x.slice(0, -2));	// Elimina el texto "px" del final
y=parseInt(y.slice(0, -2));


	datos="foto="+foto+"&mapa="+URL1+"&x="+x+"&y="+y+"&width="+fwidth+"&height="+fheight;
	
		carga=$.ajax({
			async: true,
//			crossDomain: true,
			cache: false,
			url: "incrustafotoBigSize.php",
			type: "GET",
			data: datos,
			dataType: "HTML",
			success: function(data)
			{ 

				$("#operaciones").css("z-index","300");
// -------------------------------------------------------------------------------------------------------------------------------
// Actualizamos los sectores afectados, viendo así incrustada la imagen


// Calculamos el primer sector afectado por la incrustación de la fotografía
parcelaX=parseInt(x/256)+2;
parcelaY=parseInt(y/256)+2;
safectadosX=parseInt(fwidth/256)+1;		// Calcula los sectores horizontales que se verán afectados por la inserción de la imagen
safectadosY=parseInt(fheight/256)+1;	// Calcula los sectores verticales que se verán afectados por la inserción de la imagen


for(px=0;px<=safectadosX;px=px+1)
{

	for(py=0;py<=safectadosY;py=py+1)
	{


						document.getElementById('s'+(px+parcelaX)+'-'+(py+parcelaY)).setAttribute("src", URL1 + zoom + '/' + (px+parcelaX) + '-' + (py+parcelaY) + '.jpg?' + (new Date()).getTime());;
		
		
		
		
	}
}

//		destruye('#cuadrito1');

		dibuja();


// CREO QUE DEBERIA HACERSE UNA CARGA ASÍCRONA DE TODAS LAS PARCELAS ACTUALIZADAS EN LA INCRUSTACIÓN ---------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
// CREO QUE DEBERIA HACERSE UNA CARGA ASÍCRONA DE TODAS LAS PARCELAS ACTUALIZADAS EN LA INCRUSTACIÓN ---------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
// CREO QUE DEBERIA HACERSE UNA CARGA ASÍCRONA DE TODAS LAS PARCELAS ACTUALIZADAS EN LA INCRUSTACIÓN ---------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

				},
			error: function(data)
			{
				alert("ERROR!");
  			}
		 });	
		 

}




function insertar_video(texto, x, y, fwidth, fheight, ap, loop) // ap=autoplay option
{

	
	x=parseInt(x.slice(0, -2));	// Elimina el texto "px" del final
	y=parseInt(y.slice(0, -2));
	fwidth=parseInt(fwidth.slice(0, -2));
	fheight=parseInt(fheight.slice(0, -2));
	


	datos="texto="+texto+"&mapa="+URL1+"&x="+x+"&y="+y+"&width="+fwidth+"&height="+fheight+"&ap="+ap+"&loop="+loop;

		carga=$.ajax({
			async: true,
			cache: false,
			url: "insertavideo.php",
			type: "GET",
			data: datos,
			dataType: "HTML",
			success: function(data)
			{ 
alert(datos);
/*
el=document.getElementById('boton_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
el=document.getElementById('boton_cancel_incrustar_texto'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;


$(".cuadrito").draggable("destroy")
$("#cuadrito1").resizable("destroy").attr('contentEditable', false);
el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
*/
// -------------------------------------------------------------------------------------------------------------------------------
// Actualizamos los sectores afectados, viendo así incrustada la imagen


// Calculamos el primer sector afectado por la incrustación de la fotografía
parcelaX=parseInt(x/256)+2;
parcelaY=parseInt(y/256)+2;
safectadosX=parseInt(fwidth)/256+1;		// Calcula los sectores horizontales que se verán afectados por la inserción de la imagen
safectadosY=parseInt(fheight)/256+1;	// Calcula los sectores verticales que se verán afectados por la inserción de la imagen
safectadosX=1;
safectadosY=1;

//alert("recargando "+parcelaX+"-"+parcelaY);
		reloadImg('s'+(parcelaX)+'-'+(parcelaY));

				//$("#draggable").html(""); 
				// AÑADE EN EL BLOQUE EN EL QUE HA SIDO GUARDADO EL NUEVO TEXTO INSERTADO, DICHO TEXTO!
				bX=(parseInt(parcelaX/16)+1);	// CALCULO EL BLOQUE AFECTADO
				bY=(parseInt(parcelaY/16)+1);
				
				


				xTextoInsertado=parseInt(document.getElementById("cuadrito1").style.left);
				yTextoInsertado=parseInt(document.getElementById("cuadrito1").style.top);
				




				$('#draggable').find('#bloque'+ bX + '-' + bY).append('<div style="position:absolute; left:' + (xTextoInsertado-4096*(bX-1)) + 'px; top:' + (yTextoInsertado-4096*(bY-1)) +'px; style="z-index:7000;"><iframe width="480" height="360"  src="http://www.youtube.com/embed/' + texto + '?wmode=transparent&amp;rel=0;&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div><div  style="	position:absolute;border:1px double black; left:'+ (xTextoInsertado-4096*(bX-1)) +'px; top:' + (yTextoInsertado-4096*(bY-1)) +'px; z-index:8000; width:480px; height:320px;">	<!-- Para que el vídeo tambien sea draggable!! -->PLAY/PAUSE</div>');
				
				
				el=document.getElementById('cuadrito1'); padre = el.parentNode; padre.removeChild(el); el=null; padre=null;
				
				//dibuja();
				},
			error: function(data)
			{
				alert("ERROR!");
  			}
		 });	
	
	dibuja();	 

}

