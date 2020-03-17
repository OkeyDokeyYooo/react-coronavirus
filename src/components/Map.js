import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function initMap(data, maxColor, minColor, inputTitle, inputMinVal, inputMaxVal){
  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  let title = chart.titles.create();
  title.text = inputTitle.match(/[A-Z][a-z]+/g).join(" ");
  title.textAlign = "center";
  title.fontSize= 32;

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  let polygonTemplate = polygonSeries.mapPolygons.template;

  // Tooltips, having number on the side ?
  polygonTemplate.tooltipText = "{name}:{value.value.formatNumber('#')}";

  //Change the Map Color Here 
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: am4core.color(minColor),
    max: am4core.color(maxColor),
    minValue: inputMinVal,
    maxValue: inputMaxVal
  });
  polygonSeries.useGeodata = true;

  // Heat Lengnd, change the style here 
  let heatLegend = chart.createChild(am4charts.HeatLegend);
  heatLegend.orientation = "vertical";
  heatLegend.valign = "bottom";
  heatLegend.minValue = inputMinVal;
  heatLegend.maxValue = inputMaxVal;
  heatLegend.width = am4core.percent(100);
  heatLegend.series = polygonSeries;
  heatLegend.padding(20, 20, 20, 20);
  heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
  heatLegend.valueAxis.renderer.minGridDistance = 40;
  
  polygonSeries.mapPolygons.template.events.on("out", event => {
    heatLegend.valueAxis.hideTooltip();
  });

  polygonTemplate.adapter.add("latitude", function(latitude, target) {
    let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
    if(polygon){
        return polygon.visualLatitude;
    }
    return latitude;
    })

  polygonTemplate.adapter.add("longitude", function(longitude, target) {
    let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
    if(polygon){
        return polygon.visualLongitude;
    }
    return longitude;
  })
  
  polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
  polygonSeries.nonScalingStroke = true;
  polygonSeries.strokeWidth = 0.5;
  polygonSeries.calculateVisualCenter = true;

  chart.zoomControl = new am4maps.ZoomControl();
  chart.zoomControl.valign = "top"; 


  polygonSeries.data = data
  polygonSeries.dataFields.value = "value"

  polygonSeries.exclude = ["AQ"];

  return chart;
}

// import this from https://stackoverflow.com/questions/20811131/javascript-remove-outlier-from-an-array
function filterOutliers(someArray) {

  if(someArray.length < 4)
    return someArray;

  let values, q1, q3, iqr, maxValue, minValue;

  values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort

  if((values.length / 4) % 1 === 0){//find quartiles
    q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
    q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
  } else {
    q1 = values[Math.floor(values.length / 4 + 1)];
    q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
  }

  iqr = q3 - q1;
  maxValue = q3 + iqr * 1.5;
  minValue = q1 - iqr * 1.5;

  return values.filter((x) => (x >= minValue) && (x <= maxValue));
}


class Map extends Component {

  componentDidUpdate(){
    // console.log("at revice props", this.props.color, this.props.catorgry)
    if(this.chart) this.chart.dispose()
    let mapData = this.props.input  
    let dataArray = []
    let fullObj = this.props.input

    mapData.map(obj => {
      obj['value'] = obj[this.props.catorgry]
    })

    // Get all the value with the current catorgry
    fullObj.map(obj => {
      if (obj[this.props.catorgry]) dataArray.push(obj[this.props.catorgry])
    })

    dataArray = filterOutliers(dataArray)

    this.chart = initMap(mapData, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
  }

  componentDidMount() {
    // Create map instance  
    let mapData = this.props.input 
    let dataArray = []
    let fullObj = this.props.input
    mapData.map(obj => {
      obj['value'] = obj[this.props.catorgry]
    })

    // Get all the value with the current catorgry
    fullObj.map(obj => {
      if (obj[this.props.catorgry]) dataArray.push(obj[this.props.catorgry])
    })

    //Filter out all the out liers
    dataArray = filterOutliers(dataArray)

    this.chart = initMap(mapData, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    )
  }
}

export default Map;