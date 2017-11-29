      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Assets', 'Dollar'],
          ['Bonds',     35700],
          ['Money Market',      27089],
          ['Liquidity',  19183],
          ['Equities & Similar', 18160],
          ['Alternative Investments', 11850]
        ]);

        var options = {
          
  		    height: 400,
          title: 'Assets by Assetcategory',
          colors: ["#1976D2","#1E88E5","#2196F3","#42A5F5","#64B5F6","#90CAF9","#BBDEFB"],
          is3D: true
  	
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartassetscategory'));

        chart.draw(data, options);
      }

      