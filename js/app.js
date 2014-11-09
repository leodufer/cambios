$(document).ready(function(){
	var panelTemplate;
	$.get('template/panel.html',function(dom){
		panelTemplate = dom;
	});
	$.ajax({
		url: 'api/cotizaciones',
		type: 'GET',
		success:function(data){
			for(var i=0;i<data.length;i++){
				var cotizacion = data[i];
				var panel = $(panelTemplate);
				panel.find('#moneda').append(cotizacion.moneda);
				panel.find('#compra').append(cotizacion.compra);
				panel.find('#venta').append(cotizacion.venta);
				$('#principal').append(panel);
			}
		},
		error:function(){
			console.log(arguments);
		}
	});
});