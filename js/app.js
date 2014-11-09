$(document).ready(function(){
	var panelTemplate;
	$.get('template/panel.html',function(dom){
		panelTemplate = dom;
	});
	$.ajax({
		type:'GET',
		url:'api/cotizaciones',
		success:function(data){
			for(var i=0;i<data.length;i++){
				var panel = $(panelTemplate);
				var cotizacion = data[i];
				panel.find('#moneda').append(cotizacion.moneda);
				panel.find('#venta').append(cotizacion.venta);
				panel.find('#compra').append(cotizacion.compra);
				$('#principal').append(panel);
			}
		},
		error:function(){
			console.log('Algun error ha ocurrido');
		}
	});
});