import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPanos} from '../actions';
import PanoList from './pano-list';
import PanoViewer from './pano-viewer';

class PanoGallery extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    this.props.fetchPanos();
  }
  handleOnPanoSelected(index,panoData){
    this.setState({
      selectedPanoData:panoData
    })
  }
  render() {
    const isFetching = this.props.isFetching;
    const error = this.props.error;
    const data = this.props.data;


    if(isFetching){
      return (<div> Fetching data....</div>);
    }
    else if(error){
      return (<div>{error}</div>);
    }
    else if(data && data.length>0){
      const selectedPanoData = this.state.selectedPanoData || data[0] ;
      return (
        <div className="panoGallery">
            <div className="panoList">
              <PanoList  data={data} onPanoSelected={this.handleOnPanoSelected.bind(this)}/>
            </div>
            <div className="panoView">
              <PanoViewer data={selectedPanoData} />
            </div>
        </div>
      );
    }
    return null;

  }
}

function mapStateToProps(state) {
  const panoState = state.panoState;
    return {
        isFetching : panoState.isFetching,
        data : panoState.data,
        error : panoState.error
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPanos : getPanos}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PanoGallery);
