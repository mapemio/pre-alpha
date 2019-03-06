function loadObjects()
{

	datos='data=' + $('objectsLayer').html();

//alert(datos);

		carga=$.ajax({
			async: true,
			cache: false,
			url: "scripts/loadObjects.php",
			type: "GET",
			data: datos,

			dataType: "HTML",
			success: function(data)
			{ 
				//Inserts all elements information + behaviour scripts for the elements in the objectsLayer layer.
				$('#objectsLayer').html("<script>    $('.imgSelect').dblclick(function(){   $('#infoID').html(this.id);  });  </script>" +data);

				},
			error: function(data)
			{
				alert("ERROR!!!!!");
  			}
		 });	




}