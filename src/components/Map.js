import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function initMap(data, color){
  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  let title = chart.titles.create();
  title.text = "TBD";
  title.textAlign = "center";
  title.fontSize= 40;

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
    min: am4core.color("#ffffff"),
    max: am4core.color(color)
  });
  polygonSeries.useGeodata = true;

  // Heat Lengnd, change the style here 
  let heatLegend = chart.createChild(am4charts.HeatLegend);
  // heatLegend.orientation = "vertical";
  heatLegend.align = "right";
  heatLegend.valign = "bottom";
  heatLegend.minValue = 0;
  heatLegend.maxValue = 100;
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


class Map extends Component {

  componentDidUpdate(){
    console.log("at revice props", this.props.color, this.props.catorgry)
    if(this.chart) this.chart.dispose()
    let mapData = this.props.input  
    mapData.map(obj => {
      obj['value'] = obj[this.props.catorgry]
    })

    this.chart = initMap(mapData, this.props.color);
  }

  componentDidMount() {
    console.log("at did mount", this.props.color, this.props.catorgry)
    // Create map instance  
    let mapData = this.props.input  
    mapData.map(obj => {
      obj['value'] = obj[this.props.catorgry]
    })

    this.chart = initMap(mapData, this.props.color);
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