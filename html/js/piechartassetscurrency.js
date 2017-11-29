      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Currency', 'amount'],
          ['USD',     21700],
          ['EUR',      20089],
          ['RMB',  19183],
          ['JPY', 10160],
          ['Others',    5850]
        ]);

        var options = {
         
  		    height: 400,
          title: 'Assets by Currency',
          colors: [ "#1976D2","#1E88E5","#2196F3","#42A5F5","#64B5F6","#90CAF9","#BBDEFB"],
          is3D: true
  	
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartassetscurrency'));

        chart.draw(data, options);
      }