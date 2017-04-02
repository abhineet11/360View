import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPanos} from '../actions'

class PanoList extends Component {
  handleOnPanoSelected(index){
    const onPanoSelected = this.props.onPanoSelected;
    if(onPanoSelected){
      const data = this.props.data;
      onPanoSelected(index,data[index]);
    }
  }
  renderPanoList(data){
    const panoListItems = [];
    data.map((panoData,index) => {
        panoListItems.push(
          <li key={panoData.name}>
              <img src={panoData.pano} onClick={this.handleOnPanoSelected.bind(this,index)}></img>
              <p>{panoData.name}</p>
          </li>
        )
    })
    return (<ul className="panoList"> {panoListItems}</ul>);
  }
  render() {
    const data = this.props.data;
    if(data){
      return this.renderPanoList(data);
    }
    return null;
  }
}

export default PanoList;
