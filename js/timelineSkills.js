google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var container = document.getElementById('timeline.skills');
var chart = new google.visualization.Timeline(container);
var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Language' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
    	['R', 						new Date(2009, 6),  new Date() ],
      ['Shiny',      	new Date(2017, 3),  new Date() ],
      ['SAS',  				new Date(2004, 10), new Date(2014, 7) ],
      ['SQL',  				new Date(2008, 6),  new Date(2014, 7) ],
      ['LaTeX',  			new Date(2010, 9),  new Date() ],
      ['STATA',  			new Date(2010, 4),  new Date(2012, 8) ],
      ['MATLAB',  			new Date(2004, 2),  new Date(2005, 5) ],
      ['MATLAB',  			new Date(2014, 8),  new Date(2015, 5)],
      ['Python',  			new Date(2018, 3),  new Date(2018, 7) ],
      ['HTML',  				new Date(2018, 4),  new Date() ],
      ['CSS',  				new Date(2018, 4),  new Date() ],
      ["JavaScript",  	new Date(2018, 4),  new Date() ],
      ]);
var options = {
timeline: { 
  singleColor: '#7CB5EC'
},
  hAxis: {
    minValue: new Date(2014, 0, 0),
    maxValue: new Date(2020, 1, 0)
  }
};
chart.draw(dataTable, options);
}

$(window).resize(function(){
  drawChart();
});