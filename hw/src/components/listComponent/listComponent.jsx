import React from 'react'

import { codeName } from '../../utility.js'


class ListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values: {},
        };

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        fetch("https://api.exchangeratesapi.io/latest?base=RUB")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    values: result.rates,
                });
            },
            (error) => {}
        )
    }

    render() {
        const values = this.state.values
        return (
            <table style={{display: 'inline-block', borderCollapse: 'collapse', marginTop: '10px'}}>
                <h1>Currency List</h1>
                {Object.keys(values).map(key => (
                    <tr style={{borderBottom: '1px solid #1b1b1b', padding: '5px'}}>
                        <td style={{textAlign: 'left', borderRight: '1px solid #1b1b1b'}}>
                            1 {codeName[key]}
                        </td>
                        <td style={{textAlign: 'left'}}>{(1/values[key]).toFixed(2)} {codeName['RUB']}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default ListComponent;