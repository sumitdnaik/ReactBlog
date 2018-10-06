import React , { Component } from 'react';
import { connect } from 'react-redux';
import GetStories from './actionCreators';

class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.getStories();
    }

    render(){
      console.log(this.props.homeData);
        return(
            <div>
                Post Login Home
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return({
    homeData: state.home
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    getStories: () => dispatch(GetStories())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
