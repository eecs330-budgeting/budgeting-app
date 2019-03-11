console.log("got into report.js");

  var foodCheckBox = false;
  var entertainmentCheckBox = false;
  var othersCheckBox = false;
  var rentCheckBox = false;
  var onlineShoppingCheckBox = false;
  var reportCategoriesArray = [foodCheckBox, entertainmentCheckBox, othersCheckBox, rentCheckBox, onlineShoppingCheckBox];
  var count = 0;
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Food', 75],
      ['Entertainment', 50],
      ['Rent', 300],
      ['Online Shopping', 200],
      ['Others', 100]
    ]);

    // Set chart options
    var options = {'title':'Money Spent on Different Categories',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

   document.getElementById("foodButton").onclick = function changeFood(){
     console.log('in change food');
     reportCategoriesArray[0] = !reportCategoriesArray[0];
     foodCheckBox = !foodCheckBox;
     // print("did this work")
   }
   document.getElementById("entertainmentButton").onclick = function changeEntertainment(){
     reportCategoriesArray[1] = !reportCategoriesArray[1];
     console.log('in change entertainment');
   }
   document.getElementById("othersButton").onclick =  function changeOthers(){
      reportCategoriesArray[2] = !reportCategoriesArray[2];
      console.log('in change others');
      console.log(reportCategoriesArray);
    }
   document.getElementById("rentButton").onclick = function changeRent(){
     reportCategoriesArray[3] = !reportCategoriesArray[3];
     rentCheckBox = !rentCheckBox;
     console.log('in change rent');
   }
   document.getElementById("onlineShoppingButton").onclick = function changeOnlineShopping(){
     reportCategoriesArray[4] = !reportCategoriesArray[4];
     console.log('in change onlineShopping');
   }
   document.getElementById('generateReport').onclick = function generateReport(){
     var dataNew = new google.visualization.DataTable();
     dataNew.addColumn('string', 'Category');
     dataNew.addColumn('number', 'Amount');

       switch (count){
        case 0:
          if (reportCategoriesArray[0]){
            console.log('got inside if inside switch food');
            dataNew.addRow(['Food', 125])

          }
          count = 1;
        case 1:
          if (reportCategoriesArray[1] == true){
            dataNew.addRow(['Entertainment', 75])}
          count = 2;
        case 2:
          if (reportCategoriesArray[2] == true){
            dataNew.addRow(['Others', 150])}
          count = 3;
        case 3:
          if (reportCategoriesArray[3] == true){
            dataNew.addRow(['Rent', 300])
          }
          count = 4;
        case 4:
          if (reportCategoriesArray[4] == true){
            dataNew.addRow(['Online Shopping', 50])
          }
          count = 0;
          }

      var optionsNew = {'title':'Money Spent on Different Categories',
                     'width':400,
                     'height':300};

      // Instantiate and draw our chart, passing in some options.
      var chartNew = new google.visualization.PieChart(document.getElementById('chart_div'));
      chartNew.draw(dataNew, optionsNew);
      }

   // function changeFood(){
   //   console.log('in change food');
   //   foodCheckBox = !foodCheckBox;
   //
   //   // print("did this work")
   // }




  console.log("finished report.js")


  // // Load the Visualization API and the corechart package.
  // google.charts.load('current', {'packages':['corechart']});
  //
  // // Set a callback to run when the Google Visualization API is loaded.
  // google.charts.setOnLoadCallback(drawChart);
  //
  // // Callback that creates and populates a data table,
  // // instantiates the pie chart, passes in the data and
  // // draws it.
  // function drawChart() {
  //
  //   // Create the data table.
  //   var data = new google.visualization.DataTable();
  //   data.addColumn('string', 'Topping');
  //   data.addColumn('number', 'Slices');
  //   data.addRows([
  //     ['Food', 300],
  //     ['Entertainment', 100],
  //     ['Rent', 200],
  //     ['Online Shopping', 150],
  //     ['Others', 50]
  //   ]);
  //
  //   // Set chart options
  //   var options = {'title':'Money Spent on Different Categories',
  //                  'width':400,
  //                  'height':300};
  //
  //   // Instantiate and draw our chart, passing in some options.
  //   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  //   chart.draw(data, options);
  // }
