import React from 'react';
import withPortals from "../HOC/withPortals";

const renderList = document.getElementById('alert-list');

function Alert(props) {
    return (
      <div className='alert'>{props.alert}</div>
    )
}

export default withPortals(renderList)(Alert)