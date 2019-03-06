function configuraDrag()
{
  jQuery("#draggable").draggable({
  	containment: "#container",		// ??
  	addClasses: 
      false,
      start: 
  		  function(e, ui) 
        {
          //$( "#draggable" ).css( "cursor", 'url(grabbing.cur),none' );
          document.getElementById("draggable").style.cursor='url(grabbing.cur),none'; 
            
      		Temp2=null;		// Destruimos el timer de redibujar a los 1000 msgs. de haber acabado el drag. Esto se hace para no hacer redibuja inutilmente, cuando lo haremos por fuerza, ya que estamos empezando un drag en este punto y seguro que redibujaremos!!
    
      		if(INERTIA)
      		{
      		  left_inicial = parseFloat($d.css('left'));
      		  top_inicial = parseFloat($d.css('top'));
      
            $d.data("mouseEvents", [e]);
            $(document).mousemove(onMouseMove).mouseup(onMouseUp);
      		}
    		
    			e=null;
    			ui=null;
  		
        },
      stop: 
  		  function(e, ui) 
        {
        //	$( "#draggable" ).css( "cursor", 'default' );  
          document.getElementById("draggable").style.cursor='default'; 
          
  		    setTimeout("dibuja();",1000);	// Redibuja al cabo de 1000 msgs por si se ha quedado alguna parcela sin dibujar (pasaba a veces!!) WoW! Y va GENIAL !!

      		if(INERTIA)
    		  {
            $d.stop();
  //            $d.css("text-indent", 100);
            var lastE = $d.data("mouseEvents").shift();
  
            x1 = lastE.pageX;
            y1 = lastE.pageY;
            t1 = lastE.timeStamp;
            x2 = e.pageX;
            y2 = e.pageY;
            t2 = e.timeStamp;
  
            // Deltas
            var dX = x2 - x1,
                dY = y2 - y1,
                dMs = Math.max(t2 - t1, 1);
  
            // Speeds
            var speedX = Math.max(Math.min(dX/dMs, 1), -1),
                speedY = Math.max(Math.min(dY/dMs, 1), -1);
  
            // Distance moved (Euclidean distance)
            var distance = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
    
                if (distance > minDistance) 
                {
                  // Momentum
                  var lastStepTime = new Date();
                  $d.animate({ textIndent: 0 }, {
                      duration: Math.max(Math.abs(speedX), Math.abs(speedY)) * 1,
                      step: function(currentStep)
                            {
                              speedX *= (currentStep / 10);
                              speedY *= (currentStep / 10);
      
                              var now = new Date();
                              var stepDuration = now.getTime() - lastStepTime.getTime();
      
                              lastStepTime = now;
      
                              position = $d.position();
      
                              newLeft = (position.left + (speedX * stepDuration / 400)),
                              newTop = (position.top + (speedY * stepDuration / 400));
                            }
                  });
     						
    			       	if(left_inicial<newLeft) signo_left="+"; else signo_left="-";
    				      if(top_inicial<newTop) signo_top="+"; else signo_top="-";
    			
    				      $("#draggable").animate({
                    "left": signo_left+"="+Math.abs(left_inicial-newLeft)+"px",
                    "top": signo_top+"="+Math.abs(top_inicial-newTop)+"px"},
      				      {			
                      duration: 200,
                      complete: function() 
      					      {
      						      dibuja();		 
                      }
      				    });
    
    
                }
   		
          			dibuja();
          			e=null;
          			ui=null;
  		
              }
            },
  
            drag: 
              function(event) 
              {
                predibuja();
  
                //		setTimeout("dibuja();",500);	// Redibuja al cabo de 1000 msgs por si se ha quedado alguna parcela sin dibujar (pasaba a veces!!) WoW! Y va GENIAL !!
                
                // *****************************************************************************************************************************************
                // *****************************************************************************************************************************************
                // *****************************************************************************************************************************************
                // dibuja CRITICO!  ESTE ES EL QUE HAY QUE TRABAJAR PARA QUE TODO EL SISTEMA VAYA RÁPIDO!!! ESTE ES EL KIT DE LA CUESTIÓN!!!
                //		dibuja();
                // *****************************************************************************************************************************************
                // *****************************************************************************************************************************************
                // *****************************************************************************************************************************************
                	actualizaMiniMap();
    
  	           }
  		
  }).click(function(){
		// Previene el click hasta que acabemos el drag
		// Fuente: http://forum.jquery.com/topic/can-the-same-element-have-draggable-and-click-event
		if ( $(this).is('.ui-draggable-dragging') ) 
    {
      return;
    }
    
    // click action here
		analizaClick();
  });
  
  
  
  
  
  
  
  
  
  
  
  
 jQuery("#minimap").draggable({
      start: 
  		  function(e, ui) 
        {
          //$( "#draggable" ).css( "cursor", 'url(grabbing.cur),none' );
          document.getElementById("minimap").style.cursor='url(grabbing.cur),none'; 
        },

	 drag: function(event){	
	 
		// alert("RAT");

		if(zoom==0)
		{
			$("#draggable").css("top", $("#minimap").position().top*32-55*32 -MINIMAP_SIZE*35*32);
			$("#draggable").css("left", $("#minimap").position().left*32-73*32 -MINIMAP_SIZE*44*32);
		}

		if(zoom==1)
		{
			$("#draggable").css("top", $("#minimap").position().top*32-55*32*2 - MINIMAP_SIZE*35*32);
			$("#draggable").css("left", $("#minimap").position().left*32-73*32*2 - MINIMAP_SIZE*44*32);
		}
				

			//Chapucilla, pero he de utilizar el MultiDraggable!!
			document.getElementById("minimapImage").style.left=document.getElementById("minimap").style.left;
			document.getElementById("minimapImage").style.top=document.getElementById("minimap").style.top;

// $("#draggable").css("top", $("#minimap").css("top")*41.6666666666666666666);
// $("#draggable").css("left", $("#minimap").css("left")*41.6666666666666666666);
 
 
predibuja();
 
	},
	
	 stop: function(event){		
             document.getElementById("minimap").style.cursor='default'; 
	 // Si pongo esto le sienta mal y dá un pequeño bote hacia la izquierda o derecha	
// 			$("#draggable").css("top", $("#minimap").position().top*32-55*32);
//			$("#draggable").css("left", $("#minimap").position().left*32-73*32);

// $("#draggable").css("top", $("#minimap").css("top")*41.6666666666666666666);
// $("#draggable").css("left", $("#minimap").css("left")*41.6666666666666666666);
 
 
 dibuja();
 
	}	
	
	 
	 });
  
  
  
  
  
  
  
  
}
