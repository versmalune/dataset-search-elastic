import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';


const useStyles =(theme) => ({
  divRoot: {
    paddingTop: '50px',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'max',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term : "Search!",
      data : []
    }
  }

  change(term) {
    this.setState({ term: term });
  }

  search(term) {
    var query = {
      "query": {
          "multi_match": {
              "query": '',
              "fields": ["*"]
          }
      }
    };

    query['query']['multi_match']['query'] = term;
    console.log('query');
    console.log(query);

    axios({
      method:'get',
      url:'http://localhost:9200/kaggle/_search',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(query),
    }).then(({data}) => {
      var dataList = [];
      dataList[0] = ["Name", "Description", "Keywords"];
      var hitsArray = data.hits.hits;
      console.log("hi", hitsArray);
      hitsArray.forEach(function(eachArticle) {
        dataList.push([eachArticle._source['name'], eachArticle._source['description'], eachArticle._source['keywords']]);
      });
      console.log(dataList);
    });
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.divRoot}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder={this.state.term}
            value={this.state.term}
            onChange={(e) => {this.change(e.target.value);}}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton 
            type="button" 
            className={classes.iconButton} 
            aria-label="search" 
            onClick={() => {this.search(this.state.term)}}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
  
}

export default withStyles(useStyles)(SearchBar);