import React from "react";
import { connect } from "react-redux";
import Display from "./Display";


function AppFn(props) {
  const {count,dispatch} = props;
  return (
    <div>
      <Display count = {count} dispatch = {dispatch}/>
    </div>
  );
}

class AppClass extends React.Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <Display count={count} dispatch={dispatch} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {count:state.count};
}

const ConnectedAppFn = connect(mapStateToProps)(AppFn);
const ConnectedAppClass = connect(mapStateToProps)(AppClass);

export  {ConnectedAppFn,ConnectedAppClass};
