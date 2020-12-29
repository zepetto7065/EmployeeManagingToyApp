import React from 'react';
import BoardService from '../services/BoardService';

class BoardComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            boards: []
        }
    }

    componentDidMount(){
        BoardService.getList().then((response) => {
            this.setState({ boards : response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = "text-center">boards List</h1>
                <tabel className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Content</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.boards.map(
                                users =>
                                <tr key = {boards.id}>
                                    <td>{boards.title}</td>
                                    <td>{boards.content}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </tabel>
            </div>
        )
    }
}

export default UserComponent