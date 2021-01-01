import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" target="_blank" className="navbar-brand">employee Management App</a></div>
                    <div><a href="http://zepetto7065.cafe24.com" target="_blank" className="navbar-brand">GoToWorld</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;