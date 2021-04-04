am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("sell", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "year": "2016",
    "beverages": 300000,
    "foods": 500000,
    "drinks": 100000,
  }, {
    "year": "2017",
    "beverages": 300000,
    "foods": 500000,
    "drinks": 100000,
  }, {
    "year": "2018",
    "beverages": 300000,
    "foods": 500000,
    "drinks": 100000,
  }];
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = true;
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  
  // Create series
  function createSeries(field, name, color) {
    
    // Set up series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.name = name;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.sequencedInterpolation = true;
    
    // Make it stacked
    series.stacked = true;
    
    // Configure columns
    series.columns.template.width = am4core.percent(20);
    series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
    
    // Add label
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
    labelBullet.label.hideOversized = true;
    
    return series;
  }
  
  createSeries("beverages", "Beverages");
  createSeries("foods", "Foods");
  createSeries("drinks", "Drinks");
  
  // Legend
  chart.legend = new am4charts.Legend();
  
  }); // end am4core.ready()

  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("production", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "year": "2016",
      "beverages": 300000,
      "foods": 500000,
      "drinks": 100000,
    }, {
      "year": "2017",
      "beverages": 300000,
      "foods": 500000,
      "drinks": 100000,
    }, {
      "year": "2018",
      "beverages": 300000,
      "foods": 500000,
      "drinks": 100000,
    }];
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    
    // Create series
    function createSeries(field, name, color) {
      
      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(20);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
      // Add label
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;
      
      return series;
    }
    
    createSeries("beverages", "Beverages");
    createSeries("foods", "Foods");
    createSeries("drinks", "Drinks");
    
    // Legend
    chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()