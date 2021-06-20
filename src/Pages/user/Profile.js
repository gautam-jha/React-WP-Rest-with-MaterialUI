import React, { Component } from 'react'
import {AppContext} from '../../Layout';

export default class Profile extends Component {

    static contextType = AppContext

    constructor(props){
        super(props);
        this.state = {
            user:null
        }
    }
    componentDidMount(){
        const { user } = this.context;
      
        this.setState({
          user:user
        })
      
      }  
    render() {
        const {user} = this.state;
        return (
            <div>
                {user && JSON.stringify(user)}
            </div>
        )
    }
}
