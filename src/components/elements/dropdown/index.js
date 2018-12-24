import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from 'components/elements/input';

import './style.scss';

export default class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state={
            dropdownValues : this.props.dropdownValues,
            searchString :'',
            filteredList : this.props.dropdownValues,
            optionsVisible : false
        }
    }

    componentWillReceiveProps(nextProp){
        this.setState({
            searchString : nextProp.selectedValue
        })
    }

    filter(e){
        let newSearchString = e.target.value;
        let newFilteredList = this.state.dropdownValues.filter((item) => {
            item = item.toLowerCase();
            return item.includes(newSearchString.toLowerCase());
        })
        this.setState((state,props)=>({
            searchString : newSearchString
        }))
        this.setState((state,props)=>({
            filteredList : newFilteredList
        }))
    }

    // setSelectedValue(){
    //     this.props.selectedValue(e);
    // }

    getOnFocus() {
        this.setState({
            optionsVisible: true
        })
    }

    setSelectedValue(e){
        this.setState({
            optionsVisible: false
        })
        this.props.setSelectedValue(e);
    }

    render(){

        const listItems = this.state.filteredList.map((country)=>{
            return <li onClick={this.setSelectedValue.bind(this)}>{country}</li>
        })

        return(
            <div className="container">
                <div className="custom-dropdown">
                    <div>
                        <Input 
                            value={this.state.searchString}
                            onChange={this.filter.bind(this)}
                            onFocus = {this.getOnFocus.bind(this)}
                        />
                    </div>
                     <i className="fas fa-caret-down"></i>
                </div>
                {
                        this.state.optionsVisible &&
                <ul>
                    {listItems}
                </ul>
                }
                
            </div>
        )
    }
}