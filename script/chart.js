

var productionChart = new CanvasJS.Chart("product-chart", {
	animationEnabled: true,
	title:{
		text: "Produksi per tahun",
		fontFamily: "Lato",
		fontColor: "rgba(255, 169, 68)"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"Rp ###,##0",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#FBE7C6",
		name: "Foods",
		dataPoints: [
			{ y: 6570000, x: new Date(2010,0) },
			{ y: 8570000, x: new Date(2011,0) },
			{ y: 1000000, x: new Date(2012,0) },
			{ y: 1397000, x: new Date(2013,0) },
			{ y: 1500042, x: new Date(2014,0) },
			{ y: 1700026, x: new Date(2015,0) },
			{ y: 2000026, x: new Date(2016,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Drinks",
			color: "#B4F8C8",
			dataPoints: [
				{ y: 600082, x: new Date(2010,0) },
				{ y: 900002, x: new Date(2011,0) },
				{ y: 1100080, x: new Date(2012,0) },
				{ y: 1400011, x: new Date(2013,0) },
				{ y: 1500096, x: new Date(2014,0) },
				{ y: 1700073, x: new Date(2015,0) },
				{ y: 210005, x: new Date(2016,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Beverages",
			color: "#A0E7E5",
			dataPoints: [
				{ y: 700028, x: new Date(2010,0) },
				{ y: 900072, x: new Date(2011,0) },
				{ y: 1300030, x: new Date(2012,0) },
				{ y: 140009, x: new Date(2013,0) },
				{ y: 1800010, x: new Date(2014,0) },
				{ y: 1800068, x: new Date(2015,0) },
				{ y: 2200045, x: new Date(2016,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Dessert",
			color: "#FFAEBC",
			dataPoints: [
				{ y: 800044, x: new Date(2010,0) },
				{ y: 1000058, x: new Date(2011,0) },
				{ y: 1400041, x: new Date(2012,0) },
				{ y: 1600086, x: new Date(2013,0) },
				{ y: 1000064, x: new Date(2014,0) },
				{ y: 2100032, x: new Date(2015,0) },
				{ y: 2600006, x: new Date(2016,0) }
			]
	}]
});
productionChart.render();




var sellingChart = new CanvasJS.Chart("sell-chart", {
	animationEnabled: true,
	title:{
		text: "Penjualan per tahun",
		fontFamily: "Lato",
		fontColor: "rgba(255, 169, 68)"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"Rp ###,##0",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#FBE7C6",
		name: "Foods",
		dataPoints: [
			{ y: 6570000, x: new Date(2010,0) },
			{ y: 8570000, x: new Date(2011,0) },
			{ y: 1000000, x: new Date(2012,0) },
			{ y: 1397000, x: new Date(2013,0) },
			{ y: 1500042, x: new Date(2014,0) },
			{ y: 1700026, x: new Date(2015,0) },
			{ y: 2000026, x: new Date(2016,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Drinks",
			color: "#B4F8C8",
			dataPoints: [
				{ y: 600082, x: new Date(2010,0) },
				{ y: 900002, x: new Date(2011,0) },
				{ y: 1100080, x: new Date(2012,0) },
				{ y: 1400011, x: new Date(2013,0) },
				{ y: 1500096, x: new Date(2014,0) },
				{ y: 1700073, x: new Date(2015,0) },
				{ y: 210005, x: new Date(2016,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Beverages",
			color: "#A0E7E5",
			dataPoints: [
				{ y: 700028, x: new Date(2010,0) },
				{ y: 900072, x: new Date(2011,0) },
				{ y: 1300030, x: new Date(2012,0) },
				{ y: 140009, x: new Date(2013,0) },
				{ y: 1800010, x: new Date(2014,0) },
				{ y: 1800068, x: new Date(2015,0) },
				{ y: 2200045, x: new Date(2016,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Dessert",
			color: "#FFAEBC",
			dataPoints: [
				{ y: 800044, x: new Date(2010,0) },
				{ y: 1000058, x: new Date(2011,0) },
				{ y: 1400041, x: new Date(2012,0) },
				{ y: 1600086, x: new Date(2013,0) },
				{ y: 1000064, x: new Date(2014,0) },
				{ y: 2100032, x: new Date(2015,0) },
				{ y: 2600006, x: new Date(2016,0) }
			]
	}]
});
sellingChart.render();

