import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "title.label": "COVID - 19",
      "subtitle.label": "GLOBAL UPDATE",
      "update.label": "Last Updated",
      "data.label": "Data",
      "news.label": "News",
      "overview.label": "Overview",
      "searchForCountry.label": "Search for Country",
      "totalCasesCard.label": "Total Cases",
      "totalDeathsCard.label": "Total Deaths",
      "totalRecoveredCard.label": "Total Recovered",
      "totalCases.label": "TotalCases",
      "totalDeaths.label": "TotalDeaths",
      "totalRecovered.label": "TotalRecovered",
      "Deaths.label": "Deaths",
      "Recovered.label": "Recovered",
      "last24Hours.label": " in last 24 hours",
      "map.label": "Map",
      "rank.label": "Rank",
      "country.label": "Country",
      "newCases.label": "NewCases",
      "newDeaths.label": "NewDeaths",
      "hint.label": "*The data may not be the most accurate due to update delay"
    }
  },
  zh: {
    translation: {
        "title.label": "新型冠状病毒",
        "subtitle.label": "全球实时动态",
        "update.label": "数据更新于",
        "data.label": "统计数据",
        "news.label": "相关新闻",
        "overview.label": "概览",
        "searchForCountry.label": "搜索国家",
        "totalCasesCard.label": "累计确诊",
        "totalDeathsCard.label": "累计死亡",
        "totalRecoveredCard.label": "累计治愈",  
        "totalCases.label": "累计确诊",
        "totalDeaths.label": "累计死亡",
        "totalRecovered.label": "累计治愈",      
        "Deaths.label": "累计死亡",
        "Recovered.label": "累计治愈",
        "last24Hours.label": " 今日新增",
        "map.label": "疫情地图",
        "rank.label": "全球数据",
        "country.label": "国家",
        "newCases.label": "新增确诊",
        "newDeaths.label": "新增死亡",
        "hint.label": "*因时区造成数据库更新延迟，数据准确性将会受影响"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;