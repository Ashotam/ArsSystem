import React, {Component} from 'react';
import SingleComp from "./SingleComp";
import {connect} from 'react-redux';
import {getInputsReducer} from "../redux/getInputsReducer"
class FirstPage extends Component {

    state = {
        singleCompArr: []
    };

    addSingleComp = () => {
        let newObj = {
            ind: this.state.singleCompArr.length,
            1: '',
            2: '',
            3: ''
        };

        let newState = this.state.singleCompArr.push(newObj);

        this.setState({
            ...this.state.singleCompArr, newState
        })
    };

    changeValues = (e,pos) => {

        let objToChange = this.state.singleCompArr.find(obj => {
            return (
                obj.ind === pos
            )
        });

        objToChange[e.target.id]=e.target.value;



        this.setState({

            ...this.state.singleCompArr[0],objToChange

        });

    };
    toggleEvent = (e) => {
        let newObj = this.state.singleCompArr[0];
        this.props.getInputsReducer(newObj)
    };



    render() {
        console.log(this.state.singleCompArr);
        return (
            <>
                <div>
                    <button onClick={this.addSingleComp}>Add</button>
                </div>
                <div>
                    {this.state.singleCompArr.map((s, index) => {
                        return (
                            <SingleComp values={s} colPos={s.ind} key={index} takeValue ={(e)=>this.toggleEvent(s)} change={(e,colPos) => this.changeValues(e,colPos)}/>
                        )
                    })}
                </div>

            </>
        );
    }
}

export default connect({getInputsReducer})(FirstPage);