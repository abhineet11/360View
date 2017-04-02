import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPanos} from '../actions'

class PanoViewer extends Component {
  renderPanoView(data) {
    const splittedPath = data.pano.split('/');
    const src= 'static/'+splittedPath[splittedPath.length -1];
    return (
    <a-scene>
      <a-sky src={src}  referrerpolicy="no-referrer" height="2" width="2"></a-sky>
    </a-scene>);
  }
  render() {
    const data = this.props.data;
    if(data){
      return this.renderPanoView(data);
    }
    return null;
  }
}

export default PanoViewer;
