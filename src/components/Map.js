import React, {Component} from 'react';
import { Col } from 'reactstrap';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {connect} from 'react-redux'

am4core.useTheme(am4themes_animated);


class Map extends Component {

  componentDidMount() {
      // Create map instance
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      let title = chart.titles.create();
      title.text = "[bold font-size: 20]Population of the World in 2011[/]\n";
      title.textAlign = "middle";

      let mapData = [{"TotalCases": "79,828", "NewCases": "+577", "TotalDeaths": "2,870", "NewDeaths": "+35", "ActiveCases": "34,844", "TotalRecovered": "42,114", "Serious,Critical": "7,365", "id": "CN", "name": "China", "value": "79,828"}, {"TotalCases": "3,736", "NewCases": "+586", "TotalDeaths": "21", "NewDeaths": "+4", "ActiveCases": "3,685", "TotalRecovered": "30", "Serious,Critical": "10", "id": "KR", "name": "S. Korea", "value": "3,736"}, {"TotalCases": "1,128", "NewCases": "", "TotalDeaths": "29", "NewDeaths": "", "ActiveCases": "1,049", "TotalRecovered": "50", "Serious,Critical": "105", "id": "IT", "name": "Italy", "value": "1,128"}, {"TotalCases": "978", "NewCases": "+385", "TotalDeaths": "54", "NewDeaths": "+11", "ActiveCases": "749", "TotalRecovered": "175", "Serious,Critical": "", "id": "IR", "name": "Iran", "value": "978"}, {"TotalCases": "705", "NewCases": "", "TotalDeaths": "7", "NewDeaths": "+1", "ActiveCases": "688", "TotalRecovered": "10", "Serious,Critical": "36", "id": null, "name": "Diamond Princess", "value": "705"}, {"TotalCases": "252", "NewCases": "+11", "TotalDeaths": "6", "NewDeaths": "+1", "ActiveCases": "214", "TotalRecovered": "32", "Serious,Critical": "19", "id": "JP", "name": "Japan", "value": "252"}, {"TotalCases": "129", "NewCases": "+50", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "113", "TotalRecovered": "16", "Serious,Critical": "2", "id": "DE", "name": "Germany", "value": "129"}, {"TotalCases": "106", "NewCases": "+4", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "32", "TotalRecovered": "74", "Serious,Critical": "7", "id": "SG", "name": "Singapore", "value": "106"}, {"TotalCases": "104", "NewCases": "+4", "TotalDeaths": "2", "NewDeaths": "", "ActiveCases": "90", "TotalRecovered": "12", "Serious,Critical": "9", "id": "FR", "name": "France", "value": "104"}, {"TotalCases": "100", "NewCases": "+5", "TotalDeaths": "2", "NewDeaths": "", "ActiveCases": "62", "TotalRecovered": "36", "Serious,Critical": "6", "id": "HK", "name": "Hong Kong", "value": "100"}, {"TotalCases": "79", "NewCases": "+21", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "77", "TotalRecovered": "2", "Serious,Critical": "3", "id": "ES", "name": "Spain", "value": "79"}, {"TotalCases": "71", "NewCases": "+3", "TotalDeaths": "1", "NewDeaths": "", "ActiveCases": "61", "TotalRecovered": "9", "Serious,Critical": "1", "id": "US", "name": "USA", "value": "71"}, {"TotalCases": "46", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "46", "TotalRecovered": "", "Serious,Critical": "", "id": "KW", "name": "Kuwait", "value": "46"}, {"TotalCases": "42", "NewCases": "", "TotalDeaths": "1", "NewDeaths": "+1", "ActiveCases": "11", "TotalRecovered": "30", "Serious,Critical": "1", "id": "TH", "name": "Thailand", "value": "42"}, {"TotalCases": "41", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "41", "TotalRecovered": "", "Serious,Critical": "", "id": "BH", "name": "Bahrain", "value": "41"}, {"TotalCases": "40", "NewCases": "+1", "TotalDeaths": "1", "NewDeaths": "", "ActiveCases": "27", "TotalRecovered": "12", "Serious,Critical": "1", "id": "TW", "name": "Taiwan", "value": "40"}, {"TotalCases": "35", "NewCases": "+12", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "27", "TotalRecovered": "8", "Serious,Critical": "", "id": "GB", "name": "U.K.", "value": "35"}, {"TotalCases": "29", "NewCases": "+4", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "7", "TotalRecovered": "22", "Serious,Critical": "", "id": "MY", "name": "Malaysia", "value": "29"}, {"TotalCases": "26", "NewCases": "+1", "TotalDeaths": "1", "NewDeaths": "+1", "ActiveCases": "10", "TotalRecovered": "15", "Serious,Critical": "", "id": "AU", "name": "Australia", "value": "26"}, {"TotalCases": "21", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "16", "TotalRecovered": "5", "Serious,Critical": "2", "id": "AE", "name": "U.A.E.", "value": "21"}, {"TotalCases": "20", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "16", "TotalRecovered": "4", "Serious,Critical": "", "id": "CA", "name": "Canada", "value": "20"}, {"TotalCases": "19", "NewCases": "+6", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "19", "TotalRecovered": "", "Serious,Critical": "", "id": "IQ", "name": "Iraq", "value": "19"}, {"TotalCases": "19", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "18", "TotalRecovered": "1", "Serious,Critical": "", "id": "CH", "name": "Switzerland", "value": "19"}, {"TotalCases": "17", "NewCases": "+2", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "17", "TotalRecovered": "", "Serious,Critical": "", "id": "NO", "name": "Norway", "value": "17"}, {"TotalCases": "16", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "16", "Serious,Critical": "", "id": "VN", "name": "Vietnam", "value": "16"}, {"TotalCases": "14", "NewCases": "+4", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "14", "TotalRecovered": "", "Serious,Critical": "", "id": "AT", "name": "Austria", "value": "14"}, {"TotalCases": "13", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "13", "TotalRecovered": "", "Serious,Critical": "", "id": "SE", "name": "Sweden", "value": "13"}, {"TotalCases": "10", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "4", "TotalRecovered": "6", "Serious,Critical": "", "id": "MO", "name": "Macao", "value": "10"}, {"TotalCases": "10", "NewCases": "+3", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "10", "TotalRecovered": "", "Serious,Critical": "", "id": "LB", "name": "Lebanon", "value": "10"}, {"TotalCases": "10", "NewCases": "+3", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "10", "TotalRecovered": "", "Serious,Critical": "1", "id": "NL", "name": "Netherlands", "value": "10"}, {"TotalCases": "7", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "7", "TotalRecovered": "", "Serious,Critical": "", "id": "HR", "name": "Croatia", "value": "7"}, {"TotalCases": "7", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "7", "TotalRecovered": "", "Serious,Critical": "", "id": "GR", "name": "Greece", "value": "7"}, {"TotalCases": "7", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "6", "TotalRecovered": "1", "Serious,Critical": "", "id": "IL", "name": "Israel", "value": "7"}, {"TotalCases": "6", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "5", "TotalRecovered": "1", "Serious,Critical": "", "id": "OM", "name": "Oman", "value": "6"}, {"TotalCases": "5", "NewCases": "+2", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "4", "TotalRecovered": "1", "Serious,Critical": "", "id": "FI", "name": "Finland", "value": "5"}, {"TotalCases": "4", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "4", "TotalRecovered": "", "Serious,Critical": "", "id": "MX", "name": "Mexico", "value": "4"}, {"TotalCases": "4", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "4", "TotalRecovered": "", "Serious,Critical": "", "id": "PK", "name": "Pakistan", "value": "4"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "1", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "2", "Serious,Critical": "", "id": "PH", "name": "Philippines", "value": "3"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "3", "TotalRecovered": "", "Serious,Critical": "", "id": "AZ", "name": "Azerbaijan", "value": "3"}, {"TotalCases": "3", "NewCases": "+3", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "3", "TotalRecovered": "", "Serious,Critical": "", "id": "CZ", "name": "Czechia", "value": "3"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "3", "TotalRecovered": "", "Serious,Critical": "", "id": "DK", "name": "Denmark", "value": "3"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "3", "TotalRecovered": "", "Serious,Critical": "", "id": "GE", "name": "Georgia", "value": "3"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "3", "Serious,Critical": "", "id": "IN", "name": "India", "value": "3"}, {"TotalCases": "3", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "2", "TotalRecovered": "1", "Serious,Critical": "", "id": "RO", "name": "Romania", "value": "3"}, {"TotalCases": "2", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "2", "TotalRecovered": "", "Serious,Critical": "", "id": "DZ", "name": "Algeria", "value": "2"}, {"TotalCases": "2", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "1", "Serious,Critical": "", "id": "BE", "name": "Belgium", "value": "2"}, {"TotalCases": "2", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "2", "TotalRecovered": "", "Serious,Critical": "", "id": "BR", "name": "Brazil", "value": "2"}, {"TotalCases": "2", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "2", "Serious,Critical": "", "id": "RU", "name": "Russia", "value": "2"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "AF", "name": "Afghanistan", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "BY", "name": "Belarus", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "1", "Serious,Critical": "", "id": "KH", "name": "Cambodia", "value": "1"}, {"TotalCases": "1", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "DO", "name": "Dominican Republic", "value": "1"}, 
      {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "1", "id": "EC", "name": "Ecuador", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "1", "Serious,Critical": "", "id": "EG", "name": "Egypt", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "EE", "name": "Estonia", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "IS", "name": "Iceland", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "IE", "name": "Ireland", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "LT", "name": "Lithuania", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "LU", "name": "Luxembourg", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "MK", "name": "North Macedonia", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "MC", "name": "Monaco", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "1", "Serious,Critical": "", "id": "NP", "name": "Nepal", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "NZ", "name": "New Zealand", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "NG", "name": "Nigeria", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "QA", "name": "Qatar", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "1", "id": "SM", "name": "San Marino", "value": "1"}, {"TotalCases": "1", "NewCases": "", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "0", "TotalRecovered": "1", "Serious,Critical": "", "id": "LK", "name": "Sri Lanka", "value": "1"}, {"TotalCases": "1", "NewCases": "+1", "TotalDeaths": "", "NewDeaths": "", "ActiveCases": "1", "TotalRecovered": "", "Serious,Critical": "", "id": "AM", "name": "Armenia", "value": "1"}]

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
      imageSeries.data = mapData;
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
          <Col xs="6">
              <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
          </Col>
        
      );
    }
}

const mapState = state => ({
  data: state.Data.trk
})


export default connect(mapState, null)(Map);