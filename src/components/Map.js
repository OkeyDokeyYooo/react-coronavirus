import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Map extends Component {

  componentDidMount() {
    // Create map instance    
    this.props.input.map(obj => {
      obj['value'] = obj['TotalCases']
      obj['color'] = '#8ac6d1'
    })

    console.log(this.props.input)

    let chart = am4core.create("chartdiv", am4maps.MapChart);

    let title = chart.titles.create();
    title.text = "[bold font-size: 20]Population of the World in 2011[/]\n";
    title.textAlign = "middle";

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.data = this.props.input;
    imageSeries.dataFields.value = "value";

    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true

    let circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

    imageSeries.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 30,
    "dataField": "value"
    })

    imageTemplate.adapter.add("latitude", function(latitude, target) {
    let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
    if(polygon){
        return polygon.visualLatitude;
    }
    return latitude;
    })

    imageTemplate.adapter.add("longitude", function(longitude, target) {
    let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
    if(polygon){
        return polygon.visualLongitude;
    }
    return longitude;
    })
    
    this.chart = chart;
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