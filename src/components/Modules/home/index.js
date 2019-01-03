// @flow
import React , { Component } from 'react';
import { connect } from 'react-redux';
import getStories from './actionCreators';
import StoryCard from 'components/elements/storyCard';
import Loader from 'components/elements/loader';
import './style.scss';

type Props = {
  homeData: {
    inProgress: Boolean,
    data: Array<Object>,
    errorMessage: String
  },
  getStories: Function
}

class Home extends Component<Props>{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.getStories();
    }

    render(){
        return(
          <div className="width-container">
            <div className="home-wrapper">
              {this.props.homeData.inProgress && this.props.homeData.data.length != 0 && <Loader/>}
              {
                this.props.homeData.data.length > 0 ?
                this.props.homeData.data.map((item, index) => {
                  return(
                    <StoryCard
                      key={index}
                      storyObj={item}
                    />
                  )
                })
                : <p className="no-stories-msg">"We don't have any stories to display right now."</p>
              }
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  debugger;
  return({
    homeData: state.home
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    getStories: () => dispatch(getStories())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
