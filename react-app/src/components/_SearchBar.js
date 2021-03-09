import React from 'react'; //, { useState }
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { getDatas, search } from '../actions/index';

const useStyles = makeStyles((theme) => ({
  divRoot: {
    paddingTop: '50px',
    paddingBottom: '30px'
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
}));

export default function SearchBarfunc(props) {
  const { disabled } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  var term = "";
  const history = useHistory();
  
  const onChange = (event) => {
    term = event.target.value;
    console.log(event.target.value);
  };

  return(
    <div className={classes.divRoot}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          disabled={disabled}
          onChange={onChange}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton 
          type="button" 
          className={classes.iconButton} 
          aria-label="search" 
          onClick={() => {
            console.log("term is", term)
            dispatch(search())
            dispatch(getDatas(term))
            history.push(`/search`)}}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
