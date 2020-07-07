import React from 'react'

import { codeName } from '../../utility.js'

import './converter.css'


class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstCur: "USD",
            secCur: "USD",
            firstVal: 1,
            secVal: 1,
            values: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount(){
        console.log(this.state.values)
        this.callApi(this.state.firstCur);
    }

    componentDidUpdate(prevProp, prevState){
        const secondCh = (this.state.firstVal * this.state.values[this.state.secCur]).toFixed(2)
        if(this.state.secVal !== secondCh){
            console.log(this.state.values)
            this.setState({secVal : secondCh})
        }
    }

    callApi(val){
        fetch("https://api.exchangeratesapi.io/latest?base=" + val)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    values: result.rates,
                    firstCur: val
                });
            },
            (error) => {}
        )
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name === "firstCur") {
            this.callApi(value)
        }
        else {
            this.setState({
                [name]: value
            });
        }
    }

    render(){
        const {firstCur, secCur, firstVal, secVal} = this.state
        const options = Object.keys(this.state.values).map(key => (
            <option value={key}>{ codeName[key] }</option>
        ))
        
        return(
            <form>
                <h1>Currency Converter</h1>
                <input name="firstVal" size="10" value={firstVal} type="number" onChange={this.handleChange} />
                <span>{secVal}</span><br/>
                <select name="firstCur" value={firstCur} onChange={this.handleChange}>
                    { options }
                </select>
                <select name="secCur" value={secCur} onChange={this.handleChange}>
                    { options }
                </select><br/>
            </form>
        )
    }
}

export default Converter