import React , { Component } from 'react';
import { connect } from 'react-redux';
import getStories from './actionCreators';
import { currentStoryUser } from './actionCreators';
import StoryCard from 'components/elements/storyCard';
import './style.scss';
class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.getStories();
    }

    render(){
        return(
            <div className="home-wrapper">
              {
                this.props.homeData.data.length > 0 ?
                this.props.homeData.data.map((item, index) => {
                  console.log(item);
                  return(
                    <StoryCard
                      key={index}
                      storyObj={item}
                    />
                  )
                })
                : "We don't have any stories to display right now."

              }
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
    getStories: () => dispatch(getStories())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
