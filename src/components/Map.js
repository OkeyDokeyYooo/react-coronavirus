import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);



function addColor(value, colors, choosenCategory, inputMaxVal, inputMinVal) {
  let level = (inputMaxVal-inputMinVal)/5;
  // console.log(level);
  if (value < level) return colors[choosenCategory].q5;
  else if (value >= level && value < level*2) return colors[choosenCategory].q4;
  else if (value >= level*2 && value < level*3) return colors[choosenCategory].q3;
  else if (value >= level*3 && value < level*4) return colors[choosenCategory].q2;
  else return colors[choosenCategory].q1;
}

function initMap(data, choosenCategory, maxColor, minColor, inputTitle, inputMinVal, inputMaxVal){
    // Create map instance
  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}:{value.value.formatNumber('#')}";
  polygonTemplate.fill = am4core.color("#e5e5e5");

  // Create hover state and set alternative fill color
  // var hs = polygonTemplate.states.create("hover");
  // hs.properties.fill = am4core.color("#367B25");

  polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
  polygonSeries.nonScalingStroke = true;
  polygonSeries.strokeWidth = 0.5;
  polygonSeries.calculateVisualCenter = true;

  // Remove Antarctica
  polygonSeries.exclude = ["AQ"];

  const colors = {
    TotalCases: {
      q1: '#D66D0F',
      q2: '#F08629',
      q3: '#F3A158',
      q4: '#F6BC88',
      q5: '#FAD7B8',
    },
    TotalDeaths: {
      q1: '#333333',
      q2: '#504F4F',
      q3: '#7A7979',
      q4: '#ACACAC',
      q5: '#E0E0E0',
    },
    TotalRecovered: {
      q1: '#27AE60',
      q2: '#53CF87',
      q3: '#6BE49E',
      q4: '#9CF5C2',
      q5: '#CDFFE2',
    }
  }

  data.map((item) => {
    let str = addColor(item[choosenCategory], colors, choosenCategory, inputMaxVal, inputMinVal)
    // console.log(str);
    item["fill"] = str;
    // console.log(inputMaxVal);
    // console.log(inputMinVal)
  })

  polygonSeries.data = data;

  

  // Bind "fill" property to "fill" key in data
  polygonTemplate.propertyFields.fill = "fill";

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

    this.chart = initMap(mapData, this.props.catorgry, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
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

    this.chart = initMap(mapData, this.props.catorgry, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    // console.log(this.props.input);
    return (
      <div className="world-map" id="chartdiv" ></div>
    )
  }
}

export default Map;





// import React, {Component} from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

// function initMap(data, maxColor, minColor, inputTitle, inputMinVal, inputMaxVal){
//   let chart = am4core.create("chartdiv", am4maps.MapChart);
//   chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

//   // let title = chart.titles.create();
//   // title.text = inputTitle.match(/[A-Z][a-z]+/g).join(" ");
//   // title.textAlign = "center";
//   // title.fontSize= 32;

//   // Set map definition
//   chart.geodata = am4geodata_worldLow;

//   // Set projection
//   chart.projection = new am4maps.projections.EqualEarth();

//   // Create map polygon series
//   let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
//   let polygonTemplate = polygonSeries.mapPolygons.template;

//   // polygonTemplate.fill = am4core.color("#74B266");

//   chart.responsive.enabled = true;

//   // polygonTemplate.adapter.add("fill", function(fill, target) {
//   //   if (target.dataItem) {
//   //     if (target.dataItem.value >= 1000) {
//   //       return am4core.color("#84a9ac")
//   //     }
//   //     else if (target.dataItem.value >= 500) {
//   //       return am4core.color("f76a8c")
//   //     }
//   //     else {
//   //       return am4core.color("#00bdaa");
//   //     }
//   //   }
//   //   return fill;
//   // });

//   // Tooltips, having number on the side ?
//   polygonTemplate.tooltipText = "{name}:{value.value.formatNumber('#')}";

//   //Change the Map Color Here 
//   polygonSeries.heatRules.push({
//     property: "fill",
//     target: polygonSeries.mapPolygons.template,
//     min: am4core.color(minColor),
//     max: am4core.color(maxColor),
//     // dataField: "valueY"
//     minValue: inputMinVal,
//     maxValue: inputMaxVal
//   });
//   polygonSeries.useGeodata = true;

//   // check is no mobile device or not
//   const isMobile = window.innerWidth <= 500;
//   // Heat Lengnd, change the style here 
//   // let heatLegend = chart.createChild(am4charts.HeatLegend);
//   // if (isMobile) heatLegend.orientation = "horizontal"
//   // else heatLegend.orientation = "vertical"
//   // heatLegend.valign = "bottom";
//   // heatLegend.markerCount = 4;
//   // heatLegend.minValue = inputMinVal;
//   // heatLegend.maxValue = inputMaxVal;
//   // heatLegend.width = am4core.percent(100);
//   // heatLegend.series = polygonSeries;
//   // // heatLegend.data = [{
//   // //   "name": ">= 6000",
//   // //   "fill": am4core.color("#0f0")
//   // // }, {
//   // //   "name": ">= 4000",
//   // //   "fill": am4core.color("#ff0")
//   // // }, {
//   // //   "name": "< 4000",
//   // //   "fill": am4core.color("#f00")
//   // // }];
  
//   // heatLegend.padding(20, 20, 20, 20);
//   // heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
//   // heatLegend.valueAxis.renderer.minGridDistance = 40;
  
//   // polygonSeries.mapPolygons.template.events.on("out", event => {
//   //   heatLegend.valueAxis.hideTooltip();
//   // });

//   polygonTemplate.adapter.add("latitude", function(latitude, target) {
//     let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
//     if(polygon){
//         return polygon.visualLatitude;
//     }
//     return latitude;
//     })

//   polygonTemplate.adapter.add("longitude", function(longitude, target) {
//     let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
//     if(polygon){
//         return polygon.visualLongitude;
//     }
//     return longitude;
//   })
  
//   polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
//   polygonSeries.nonScalingStroke = true;
//   polygonSeries.strokeWidth = 0.5;
//   polygonSeries.calculateVisualCenter = true;


//   chart.zoomControl = new am4maps.ZoomControl();
//   chart.zoomControl.valign = "top"; 


//   polygonSeries.data = data
//   polygonSeries.dataFields.value = "value"

//   polygonSeries.exclude = ["AQ"];

//   return chart;
// }

// // import this from https://stackoverflow.com/questions/20811131/javascript-remove-outlier-from-an-array
// function filterOutliers(someArray) {

//   if(someArray.length < 4)
//     return someArray;

//   let values, q1, q3, iqr, maxValue, minValue;

//   values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort

//   if((values.length / 4) % 1 === 0){//find quartiles
//     q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
//     q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
//   } else {
//     q1 = values[Math.floor(values.length / 4 + 1)];
//     q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
//   }

//   iqr = q3 - q1;
//   maxValue = q3 + iqr * 1.5;
//   minValue = q1 - iqr * 1.5;

//   return values.filter((x) => (x >= minValue) && (x <= maxValue));
// }


// class Map extends Component {

//   componentDidUpdate(){
//     // console.log("at revice props", this.props.color, this.props.catorgry)
//     if(this.chart) this.chart.dispose()
//     let mapData = this.props.input  
//     let dataArray = []
//     let fullObj = this.props.input

//     mapData.map(obj => {
//       obj['value'] = obj[this.props.catorgry]
//     })

//     // Get all the value with the current catorgry
//     fullObj.map(obj => {
//       if (obj[this.props.catorgry]) dataArray.push(obj[this.props.catorgry])
//     })

//     dataArray = filterOutliers(dataArray)

//     this.chart = initMap(mapData, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
//   }

//   componentDidMount() {
//     // Create map instance  
//     let mapData = this.props.input 
//     let dataArray = []
//     let fullObj = this.props.input
//     mapData.map(obj => {
//       obj['value'] = obj[this.props.catorgry]
//     })

//     // Get all the value with the current catorgry
//     fullObj.map(obj => {
//       if (obj[this.props.catorgry]) dataArray.push(obj[this.props.catorgry])
//     })

//     //Filter out all the out liers
//     dataArray = filterOutliers(dataArray)

//     this.chart = initMap(mapData, this.props.maxColor, this.props.minColor, this.props.catorgry, dataArray[0], dataArray[dataArray.length-1]);
//   }

//   componentWillUnmount() {
//     if (this.chart) {
//       this.chart.dispose();
//     }
//   }

//   render() {
//     // console.log(this.props.input);
//     return (
//       <div className="world-map" id="chartdiv" ></div>
//     )
//   }
// }

// export default Map;