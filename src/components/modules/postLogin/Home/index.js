import React , { Component } from 'react';
import axios from 'axios';
import API from 'constants/APIs';

class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.getStories();
    }

    getStories(){
      axios({
          method: 'POST',
          url: API.postLogin.getHomeStories
        })
        .then(function (response) {
          console.log(response.data);
        });
    }

    render(){
        return(
            <div>
                Post Login Home
            </div>
        )
    }
}

export default Home;
