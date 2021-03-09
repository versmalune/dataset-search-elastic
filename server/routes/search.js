const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => { //http://localhost:3001/api/search
  res.json({message: 'welcom to search api'});
});

router.get('/:term', (req, res) => { //http://localhost:3001/api/search/:term
  res.header("Access-Control-Allow-Origin", "*");
  var params = req.params;

  var query = {
    "query": {
        "multi_match": {
            "query": '',
            "fields": ["*"]
        }
    }
  };

  query.query.multi_match.query = params.term;
  console.log('query');
  console.log(JSON.stringify(query));

  axios({
    method:'get',
    url:'http://192.168.99.100:9200/kaggle/_search',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(query),
  }).then(({data}) => {
    var dataList = [];
    // dataList[0] = ["Name", "Description", "url", "Keywords"];
    var hitsArray = data.hits.hits;
    console.log("hi", hitsArray);
    hitsArray.forEach(function(eachArticle) {
      dataList.push([eachArticle._source['name'], eachArticle._source['description'], eachArticle._source['url'], eachArticle._source['keywords']]);
    });
    res.json(dataList);
  });
});

module.exports = router;

