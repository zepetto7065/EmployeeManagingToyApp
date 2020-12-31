import React, { Component } from 'react'

export default class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <h2> View Employee Page</h2>
            </div>
        )
    }
}
