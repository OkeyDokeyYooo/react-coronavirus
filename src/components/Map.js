import React, {Component} from 'react';
import { Col } from 'reactstrap';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

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

        // let mapData = [
        // { "name":"Afghanistan", "id":"AF",  "value":32358260,"values": 78832, "color": chart.colors.getIndex(0) },
        // {"value": "79,828", "NewCases": "+577", "TotalDeaths": "2,870", "NewDeaths": "+35", "ActiveCases": "34,844", "TotalRecovered": "42,114", "Serious,Critical": "7,365", "id": "CN", "name": "China"},
        // // { "id":"AL", "name":"Albania", "value":3215988, "Total Cases": 78832, "color":chart.colors.getIndex(1) },
        // // { "id":"DZ", "name":"Algeria", "value":35980193, "color":chart.colors.getIndex(2) },
        // // { "id":"AO", "name":"Angola", "value":19618432, "color":chart.colors.getIndex(3) },
        // // { "id":"AR", "name":"Argentina", "value":40764561, "color":chart.colors.getIndex(4) },
        // // { "id":"AM", "name":"Armenia", "value":3100236, "color":chart.colors.getIndex(1) },
        // // { "id":"AU", "name":"Australia", "value":22605732, "color":"#8aabb0" },
        // // { "id":"AT", "name":"Austria", "value":8413429, "color":chart.colors.getIndex(1) },
        // // { "id":"AZ", "name":"Azerbaijan", "value":9306023, "color":chart.colors.getIndex(1) },
        // // { "id":"BH", "name":"Bahrain", "value":1323535, "color": chart.colors.getIndex(0) },
        // // { "id":"BD", "name":"Bangladesh", "value":150493658, "color": chart.colors.getIndex(0) },
        // // { "id":"BY", "name":"Belarus", "value":9559441, "color":chart.colors.getIndex(1) },
        // // { "id":"BE", "name":"Belgium", "value":10754056, "color":chart.colors.getIndex(1) },
        // // { "id":"BJ", "name":"Benin", "value":9099922, "color":chart.colors.getIndex(2) },
        // // { "id":"BT", "name":"Bhutan", "value":738267, "color": chart.colors.getIndex(0) },
        // // { "id":"BO", "name":"Bolivia", "value":10088108, "color":chart.colors.getIndex(3) },
        // // { "id":"BA", "name":"Bosnia and Herzegovina", "value":3752228, "color":chart.colors.getIndex(1) },
        // // { "id":"BW", "name":"Botswana", "value":2030738, "color":chart.colors.getIndex(2) },
        // // { "id":"BR", "name":"Brazil", "value":196655014, "color":chart.colors.getIndex(3) },
        // // { "id":"BN", "name":"Brunei", "value":405938, "color": chart.colors.getIndex(0) },
        // // { "id":"BG", "name":"Bulgaria", "value":7446135, "color":chart.colors.getIndex(1) },
        // // { "id":"BF", "name":"Burkina Faso", "value":16967845, "color":chart.colors.getIndex(2) },
        // // { "id":"BI", "name":"Burundi", "value":8575172, "color":chart.colors.getIndex(2) },
        // // { "id":"KH", "name":"Cambodia", "value":14305183, "color": chart.colors.getIndex(0) },
        // // { "id":"CM", "name":"Cameroon", "value":20030362, "color":chart.colors.getIndex(2) },
        // // { "id":"CA", "name":"Canada", "value":34349561, "color":chart.colors.getIndex(4) },
        // // { "id":"CV", "name":"Cape Verde", "value":500585, "color":chart.colors.getIndex(2) },
        // // { "id":"CF", "name":"Central African Rep.", "value":4486837, "color":chart.colors.getIndex(2) },
        // // { "id":"TD", "name":"Chad", "value":11525496, "color":chart.colors.getIndex(2) },
        // // { "id":"CL", "name":"Chile", "value":17269525, "color":chart.colors.getIndex(3) },
        // // { "id":"CN", "name":"China", "value":1347565324, "color": chart.colors.getIndex(0) },
        // // { "id":"CO", "name":"Colombia", "value":46927125, "color":chart.colors.getIndex(3) },
        // // { "id":"KM", "name":"Comoros", "value":753943, "color":chart.colors.getIndex(2) },
        // // { "id":"CD", "name":"Congo, Dem. Rep.", "value":67757577, "color":chart.colors.getIndex(2) },
        // // { "id":"CG", "name":"Congo, Rep.", "value":4139748, "color":chart.colors.getIndex(2) },
        // // { "id":"CR", "name":"Costa Rica", "value":4726575, "color":chart.colors.getIndex(4) },
        // // { "id":"CI", "name":"Cote d'Ivoire", "value":20152894, "color":chart.colors.getIndex(2) },
        // // { "id":"HR", "name":"Croatia", "value":4395560, "color":chart.colors.getIndex(1) },
        // // { "id":"CU", "name":"Cuba", "value":11253665, "color":chart.colors.getIndex(4) },
        // // { "id":"CY", "name":"Cyprus", "value":1116564, "color":chart.colors.getIndex(1) },
        // // { "id":"CZ", "name":"Czech Rep.", "value":10534293, "color":chart.colors.getIndex(1) },
        // // { "id":"DK", "name":"Denmark", "value":5572594, "color":chart.colors.getIndex(1) },
        // // { "id":"DJ", "name":"Djibouti", "value":905564, "color":chart.colors.getIndex(2) },
        // // { "id":"DO", "name":"Dominican Rep.", "value":10056181, "color":chart.colors.getIndex(4) },
        // // { "id":"EC", "name":"Ecuador", "value":14666055, "color":chart.colors.getIndex(3) },
        // // { "id":"EG", "name":"Egypt", "value":82536770, "color":chart.colors.getIndex(2) },
        // // { "id":"SV", "name":"El Salvador", "value":6227491, "color":chart.colors.getIndex(4) },
        // // { "id":"GQ", "name":"Equatorial Guinea", "value":720213, "color":chart.colors.getIndex(2) },
        // // { "id":"ER", "name":"Eritrea", "value":5415280, "color":chart.colors.getIndex(2) },
        // // { "id":"EE", "name":"Estonia", "value":1340537, "color":chart.colors.getIndex(1) },
        // // { "id":"ET", "name":"Ethiopia", "value":84734262, "color":chart.colors.getIndex(2) },
        // // { "id":"FJ", "name":"Fiji", "value":868406, "color":"#8aabb0" },
        // // { "id":"FI", "name":"Finland", "value":5384770, "color":chart.colors.getIndex(1) },
        // // { "id":"FR", "name":"France", "value":63125894, "color":chart.colors.getIndex(1) },
        // // { "id":"GA", "name":"Gabon", "value":1534262, "color":chart.colors.getIndex(2) },
        // // { "id":"GM", "name":"Gambia", "value":1776103, "color":chart.colors.getIndex(2) },
        // // { "id":"GE", "name":"Georgia", "value":4329026, "color":chart.colors.getIndex(1) },
        // // { "id":"DE", "name":"Germany", "value":82162512, "color":chart.colors.getIndex(1) },
        // // { "id":"GH", "name":"Ghana", "value":24965816, "color":chart.colors.getIndex(2) },
        // // { "id":"GR", "name":"Greece", "value":11390031, "color":chart.colors.getIndex(1) },
        // // { "id":"GT", "name":"Guatemala", "value":14757316, "color":chart.colors.getIndex(4) },
        // // { "id":"GN", "name":"Guinea", "value":10221808, "color":chart.colors.getIndex(2) },
        // // { "id":"GW", "name":"Guinea-Bissau", "value":1547061, "color":chart.colors.getIndex(2) },
        // // { "id":"GY", "name":"Guyana", "value":756040, "color":chart.colors.getIndex(3) },
        // // { "id":"HT", "name":"Haiti", "value":10123787, "color":chart.colors.getIndex(4) },
        // // { "id":"HN", "name":"Honduras", "value":7754687, "color":chart.colors.getIndex(4) },
        // // { "id":"HK", "name":"Hong Kong, China", "value":7122187, "color": chart.colors.getIndex(0) },
        // // { "id":"HU", "name":"Hungary", "value":9966116, "color":chart.colors.getIndex(1) },
        // // { "id":"IS", "name":"Iceland", "value":324366, "color":chart.colors.getIndex(1) },
        // // { "id":"IN", "name":"India", "value":1241491960, "color": chart.colors.getIndex(0) },
        // // { "id":"ID", "name":"Indonesia", "value":242325638, "color": chart.colors.getIndex(0) },
        // // { "id":"IR", "name":"Iran", "value":74798599, "color": chart.colors.getIndex(0) },
        // // { "id":"IQ", "name":"Iraq", "value":32664942, "color": chart.colors.getIndex(0) },
        // // { "id":"IE", "name":"Ireland", "value":4525802, "color":chart.colors.getIndex(1) },
        // // { "id":"IL", "name":"Israel", "value":7562194, "color": chart.colors.getIndex(0) },
        // // { "id":"IT", "name":"Italy", "value":60788694, "color":chart.colors.getIndex(1) },
        // // { "id":"JM", "name":"Jamaica", "value":2751273, "color":chart.colors.getIndex(4) },
        // // { "id":"JP", "name":"Japan", "value":126497241, "color": chart.colors.getIndex(0) },
        // // { "id":"JO", "name":"Jordan", "value":6330169, "color": chart.colors.getIndex(0) },
        // // { "id":"KZ", "name":"Kazakhstan", "value":16206750, "color": chart.colors.getIndex(0) },
        // // { "id":"KE", "name":"Kenya", "value":41609728, "color":chart.colors.getIndex(2) },
        // // { "id":"KP", "name":"Korea, Dem. Rep.", "value":24451285, "color": chart.colors.getIndex(0) },
        // // { "id":"KR", "name":"Korea, Rep.", "value":48391343, "color": chart.colors.getIndex(0) },
        // // { "id":"KW", "name":"Kuwait", "value":2818042, "color": chart.colors.getIndex(0) },
        // // { "id":"KG", "name":"Kyrgyzstan", "value":5392580, "color": chart.colors.getIndex(0) },
        // // { "id":"LA", "name":"Laos", "value":6288037, "color": chart.colors.getIndex(0) },
        // // { "id":"LV", "name":"Latvia", "value":2243142, "color":chart.colors.getIndex(1) },
        // // { "id":"LB", "name":"Lebanon", "value":4259405, "color": chart.colors.getIndex(0) },
        // // { "id":"LS", "name":"Lesotho", "value":2193843, "color":chart.colors.getIndex(2) },
        // // { "id":"LR", "name":"Liberia", "value":4128572, "color":chart.colors.getIndex(2) },
        // // { "id":"LY", "name":"Libya", "value":6422772, "color":chart.colors.getIndex(2) },
        // // { "id":"LT", "name":"Lithuania", "value":3307481, "color":chart.colors.getIndex(1) },
        // // { "id":"LU", "name":"Luxembourg", "value":515941, "color":chart.colors.getIndex(1) },
        // // { "id":"MK", "name":"Macedonia, FYR", "value":2063893, "color":chart.colors.getIndex(1) },
        // // { "id":"MG", "name":"Madagascar", "value":21315135, "color":chart.colors.getIndex(2) },
        // // { "id":"MW", "name":"Malawi", "value":15380888, "color":chart.colors.getIndex(2) },
        // // { "id":"MY", "name":"Malaysia", "value":28859154, "color": chart.colors.getIndex(0) },
        // // { "id":"ML", "name":"Mali", "value":15839538, "color":chart.colors.getIndex(2) },
        // // { "id":"MR", "name":"Mauritania", "value":3541540, "color":chart.colors.getIndex(2) },
        // // { "id":"MU", "name":"Mauritius", "value":1306593, "color":chart.colors.getIndex(2) },
        // // { "id":"MX", "name":"Mexico", "value":114793341, "color":chart.colors.getIndex(4) },
        // // { "id":"MD", "name":"Moldova", "value":3544864, "color":chart.colors.getIndex(1) },
        // // { "id":"MN", "name":"Mongolia", "value":2800114, "color": chart.colors.getIndex(0) },
        // // { "id":"ME", "name":"Montenegro", "value":632261, "color":chart.colors.getIndex(1) },
        // // { "id":"MA", "name":"Morocco", "value":32272974, "color":chart.colors.getIndex(2) },
        // // { "id":"MZ", "name":"Mozambique", "value":23929708, "color":chart.colors.getIndex(2) },
        // // { "id":"MM", "name":"Myanmar", "value":48336763, "color": chart.colors.getIndex(0) },
        // // { "id":"NA", "name":"Namibia", "value":2324004, "color":chart.colors.getIndex(2) },
        // // { "id":"NP", "name":"Nepal", "value":30485798, "color": chart.colors.getIndex(0) },
        // // { "id":"NL", "name":"Netherlands", "value":16664746, "color":chart.colors.getIndex(1) },
        // // { "id":"NZ", "name":"New Zealand", "value":4414509, "color":"#8aabb0" },
        // // { "id":"NI", "name":"Nicaragua", "value":5869859, "color":chart.colors.getIndex(4) },
        // // { "id":"NE", "name":"Niger", "value":16068994, "color":chart.colors.getIndex(2) },
        // // { "id":"NG", "name":"Nigeria", "value":162470737, "color":chart.colors.getIndex(2) },
        // // { "id":"NO", "name":"Norway", "value":4924848, "color":chart.colors.getIndex(1) },
        // // { "id":"OM", "name":"Oman", "value":2846145, "color": chart.colors.getIndex(0) },
        // // { "id":"PK", "name":"Pakistan", "value":176745364, "color": chart.colors.getIndex(0) },
        // // { "id":"PA", "name":"Panama", "value":3571185, "color":chart.colors.getIndex(4) },
        // // { "id":"PG", "name":"Papua New Guinea", "value":7013829, "color":"#8aabb0" },
        // // { "id":"PY", "name":"Paraguay", "value":6568290, "color":chart.colors.getIndex(3) },
        // // { "id":"PE", "name":"Peru", "value":29399817, "color":chart.colors.getIndex(3) },
        // // { "id":"PH", "name":"Philippines", "value":94852030, "color": chart.colors.getIndex(0) },
        // // { "id":"PL", "name":"Poland", "value":38298949, "color":chart.colors.getIndex(1) },
        // // { "id":"PT", "name":"Portugal", "value":10689663, "color":chart.colors.getIndex(1) },
        // // { "id":"PR", "name":"Puerto Rico", "value":3745526, "color":chart.colors.getIndex(4) },
        // // { "id":"QA", "name":"Qatar", "value":1870041, "color": chart.colors.getIndex(0) },
        // // { "id":"RO", "name":"Romania", "value":21436495, "color":chart.colors.getIndex(1) },
        // // { "id":"RU", "name":"Russia", "value":142835555, "color":chart.colors.getIndex(1) },
        // // { "id":"RW", "name":"Rwanda", "value":10942950, "color":chart.colors.getIndex(2) },
        // // { "id":"SA", "name":"Saudi Arabia", "value":28082541, "color": chart.colors.getIndex(0) },
        // // { "id":"SN", "name":"Senegal", "value":12767556, "color":chart.colors.getIndex(2) },
        // // { "id":"RS", "name":"Serbia", "value":9853969, "color":chart.colors.getIndex(1) },
        // // { "id":"SL", "name":"Sierra Leone", "value":5997486, "color":chart.colors.getIndex(2) },
        // // { "id":"SG", "name":"Singapore", "value":5187933, "color": chart.colors.getIndex(0) },
        // // { "id":"SK", "name":"Slovak Republic", "value":5471502, "color":chart.colors.getIndex(1) },
        // // { "id":"SI", "name":"Slovenia", "value":2035012, "color":chart.colors.getIndex(1) },
        // // { "id":"SB", "name":"Solomon Islands", "value":552267, "color":"#8aabb0" },
        // // { "id":"SO", "name":"Somalia", "value":9556873, "color":chart.colors.getIndex(2) },
        // // { "id":"ZA", "name":"South Africa", "value":50459978, "color":chart.colors.getIndex(2) },
        // // { "id":"ES", "name":"Spain", "value":46454895, "color":chart.colors.getIndex(1) },
        // // { "id":"LK", "name":"Sri Lanka", "value":21045394, "color": chart.colors.getIndex(0) },
        // // { "id":"SD", "name":"Sudan", "value":34735288, "color":chart.colors.getIndex(2) },
        // // { "id":"SR", "name":"Suriname", "value":529419, "color":chart.colors.getIndex(3) },
        // // { "id":"SZ", "name":"Swaziland", "value":1203330, "color":chart.colors.getIndex(2) },
        // // { "id":"SE", "name":"Sweden", "value":9440747, "color":chart.colors.getIndex(1) },
        // // { "id":"CH", "name":"Switzerland", "value":7701690, "color":chart.colors.getIndex(1) },
        // // { "id":"SY", "name":"Syria", "value":20766037, "color": chart.colors.getIndex(0) },
        // // { "id":"TW", "name":"Taiwan", "value":23072000, "color": chart.colors.getIndex(0) },
        // // { "id":"TJ", "name":"Tajikistan", "value":6976958, "color": chart.colors.getIndex(0) },
        // // { "id":"TZ", "name":"Tanzania", "value":46218486, "color":chart.colors.getIndex(2) },
        // // { "id":"TH", "name":"Thailand", "value":69518555, "color": chart.colors.getIndex(0) },
        // // { "id":"TG", "name":"Togo", "value":6154813, "color":chart.colors.getIndex(2) },
        // // { "id":"TT", "name":"Trinidad and Tobago", "value":1346350, "color":chart.colors.getIndex(4) },
        // // { "id":"TN", "name":"Tunisia", "value":10594057, "color":chart.colors.getIndex(2) },
        // // { "id":"TR", "name":"Turkey", "value":73639596, "color":chart.colors.getIndex(1) },
        // // { "id":"TM", "name":"Turkmenistan", "value":5105301, "color": chart.colors.getIndex(0) },
        // // { "id":"UG", "name":"Uganda", "value":34509205, "color":chart.colors.getIndex(2) },
        // // { "id":"UA", "name":"Ukraine", "value":45190180, "color":chart.colors.getIndex(1) },
        // // { "id":"AE", "name":"United Arab Emirates", "value":7890924, "color": chart.colors.getIndex(0) },
        // // { "id":"GB", "name":"United Kingdom", "value":62417431, "color":chart.colors.getIndex(1) },
        // // { "id":"US", "name":"United States", "value":313085380, "color":chart.colors.getIndex(4) },
        // // { "id":"UY", "name":"Uruguay", "value":3380008, "color":chart.colors.getIndex(3) },
        // // { "id":"UZ", "name":"Uzbekistan", "value":27760267, "color": chart.colors.getIndex(0) },
        // // { "id":"VE", "name":"Venezuela", "value":29436891, "color":chart.colors.getIndex(3) },
        // // { "id":"PS", "name":"West Bank and Gaza", "value":4152369, "color": chart.colors.getIndex(0) },
        // // { "id":"VN", "name":"Vietnam", "value":88791996, "color": chart.colors.getIndex(0) },
        // // { "id":"YE", "name":"Yemen, Rep.", "value":24799880, "color": chart.colors.getIndex(0) },
        // // { "id":"ZM", "name":"Zambia", "value":13474959, "color":chart.colors.getIndex(2) },
        // // { "id":"ZW", "name":"Zimbabwe", "value":12754378, "color":chart.colors.getIndex(2) }
        // ];

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

export default Map;