import React, { Component } from 'react'
import {Container} from '@material-ui/core'
import {Header,Footer} from '../Component'


export default class Layout extends Component {
    render() {
        return (
            <div id="main-wrapper">

                <Header />
    
                    <main className="main">
                    <Container fixed>
                        {this.props.children}
                    </Container>
                    </main>
            
                <Footer/>
             </div>
        )
    }
}
