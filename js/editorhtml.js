

function salvaOperaciones()
{

	datos='data=' + $('#operaciones').html();

//alert(datos);

		carga=$.ajax({
			async: true,
			cache: false,
			url: "scripts/salva_operaciones.php",
			type: "GET",
			data: datos,
			dataType: "HTML",
			success: function(data)
			{ 

				alert("Operaciones salvadas correctamente!");

				},
			error: function(data)
			{
				alert("ERROR!!!!!");
  			}
		 });	

}






function cargaOperaciones()
{

	datos='data=' + $('#operaciones').html();

//alert(datos);

		carga=$.ajax({
			async: true,
			cache: false,
			url: "scripts/carga_operaciones.php",
			type: "GET",
			data: datos,

			dataType: "HTML",
			success: function(data)
			{ 

				$('#operaciones').html(data);

				},
			error: function(data)
			{
				alert("ERROR!!!!!");
  			}
		 });	

}






