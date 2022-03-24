import React from 'react'
import Header from './Header'
import Category from './Category';
import Level from './Level'
import QuizDash from './QuizDash'
import {BrowserRouter,Route} from 'react-router-dom'
class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            category:null,
            level:null
        }
    }

    addCategory = (value)=>{
        this.setState({
            category:value
        })
    }
    addLevel = (event,value)=>{
        this.setState({
            level:value
        })
    }
    render(){
        return (
            <>
            <Header/>
            <BrowserRouter>
            <Route path="/" exact>
            <Category addCategory={this.addCategory} category={this.state.category}/>
            <Level addLevel={this.addLevel} level={this.state.level} category={this.state.category}/>
            </Route>
            <Route path="/quiz/:category/:level" component={QuizDash}>

            </Route>
            </BrowserRouter>
            </>
        )
    }
}

export default Dashboard