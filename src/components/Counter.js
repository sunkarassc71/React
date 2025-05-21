import { Component, React } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
           counter :0 
        }
    }

    increment(){
        // this.setState({
        //     counter:this.state.counter+1
        // },() => {console.log("callBack value:"+this.state.counter)}) // use call back function
        // console.log(this.state.counter)
        this.setState((prevState)=>({
            counter:prevState.counter+1  // use prevState to render
        }))
    }

    render(){
        return(<div>
            <h1>Counter : {this.state.counter}</h1>
            <button className='btn-success' onClick={ () => this.increment()}>Increment</button>
        </div>)
    }

}

export default Counter;