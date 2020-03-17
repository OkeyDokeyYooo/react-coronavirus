const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  // date: { type: Date, required: true},
  _id: {type: String, required: true},
  //trk: []
  news: [[{
    source: {
      id: String,
      name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String
  }]]
  }, {
  timestamps: true,
});

// "source": {
//   "id": "news-com-au",
//   "name": "News.com.au"
// },
// "author": "Stephanie Bedo",
// "title": "Coronavirus Australia: Coronavirus forces elite Melbourne school to shut",
// "description": "Australia now has more than 90 cases of coronavirus as the infection continues to spread across the country.",
// "url": "https://www.news.com.au/lifestyle/health/health-problems/coronavirus-australia-coronavirus-forces-elite-melbourne-school-to-shut/live-coverage/5858b3447be04c6938dc61ded8930071",
// "urlToImage": "https://content.api.news/v3/images/bin/b006c225e5445411e22b609c256cbf86",
// "publishedAt": "2020-03-10T06:37:00Z",
// "content": "An elite private school in Melbourne has been forced to close because of coronavirus.\r\nCarey Baptist Grammar School in the city's east will be shut today after an adult started getting symptoms.\r\nThey are being tested after having direct contact with a person… [+172 chars]"

const News = mongoose.model('News', newsSchema);

module.exports = News;