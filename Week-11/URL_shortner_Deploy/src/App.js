import React,{useState} from 'react';
import './App.css';
import {Header,Footer,Body} from "./components";
import propTypes from "prop-types";

function App() {
  const [page,setPage] = useState("Home");
  const selectPage = (page) =>{
    setPage(page);
  };

  return (
    <div className="App">
    <Header choosePage={selectPage}/>
    <Body page={page} choosePage={selectPage}/>
    <Footer choosePage={selectPage}/>
    </div>
  );
}

App.propTypes ={
  page:propTypes.string,
  choosePage:propTypes.func,
};

App.defaultProps ={
   page:"Home",
};

export default App;
