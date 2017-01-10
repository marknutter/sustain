$(document).ready(function() {

  var driver = [
    [gd(2012, 1, 1), 5.1],
    [gd(2012, 1, 2), 5.2],
    [gd(2012, 1, 3), 5.1],
    [gd(2012, 1, 4), 5.0],
    [gd(2012, 1, 5), 5.2],
    [gd(2012, 1, 6), 5.2],
    [gd(2012, 1, 7), 5.3]
  ];


  $("#canvas_dahs_driver").length && $.plot($("#canvas_dahs_driver"), [
    driver
  ], {
    series: {
      lines: {
        show: false,
        fill: true
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 1,
        fill: 0.4
      },
      points: {
        radius: 0,
        show: true
      },
      shadowSize: 2
    },
    grid: {
      verticalLines: true,
      hoverable: true,
      clickable: true,
      tickColor: "#d5d5d5",
      borderWidth: 1,
      color: '#fff'
    },
    colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
    xaxis: {
      tickColor: "rgba(51, 51, 51, 0.06)",
      mode: "time",
      tickSize: [1, "day"],
      //tickLength: 10,
      axisLabel: "Date",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Verdana, Arial',
      axisLabelPadding: 10
    },
    yaxis: {
      ticks: 8,
      tickColor: "rgba(51, 51, 51, 0.06)",
    },
    tooltip: false
  });

  function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }
});
