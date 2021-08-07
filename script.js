      <script type="text/javascript"> 



     
  </script>
  function sortArray(file1, file2){
  file1Date = file1.name.slice(0, this.name.length - 4).split("-")[1];
  file2Date = file2.name.slice(0, this.name.length - 4).split("-")[1];
  file1Month = file1.name.slice(0, this.name.length - 4).split("-")[0];
  file2Month = file2.name.slice(0, this.name.length - 4).split("-")[0];
  return (file1.name.slice(0, this.name.length - 4).split("-")[2] + file1Month + file1Date) - 
         (file2.name.slice(0, this.name.length - 4).split("-")[2] + file2Month + file2Date) 
}

array.map(function(item){
  dataAboutCovid.push([new Date(`${item.name.slice(0, this.name.length - 4).split("-")[2]}-${item.name.slice(0, this.name.length - 4).split("-")[0]}-${item.name.slice(0, this.name.length - 4).split("-")[1]}`),
                      2000,200,300])}
  )

input.addEventListener("change", function(){
    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

          var data = new google.visualization.DataTable();
          data.addColumn('number', '2021');
          data.addColumn('number', 'Total',);
          data.addColumn('number', 'Cases');
          data.addColumn('number', 'Recovered');

          data.addRows([1,1,1,1],
                      [1,1,1,1],
                      [1,1,1,1]);

          var options = {
            chart: {
              title: 'Covid-19 info',
              subtitle: 'Republick Of Moldova'
            },
            
          };

            var chart = new google.charts.Line(document.getElementById('linechart_material'));

            chart.draw(data, google.charts.Line.convertOptions(options))
          }
        })


