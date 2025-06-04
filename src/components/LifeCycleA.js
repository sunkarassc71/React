import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Sunkara'
    }
    console.log('LifeCycleA Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA DerviedStateFromProps')
    return null
  }

  componentDidMount = () => {
    console.log('LifeCycleA componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifeCycleA shouldcomponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getSnapshotbeforUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifeCycleA componentDidupdate')
  }
  stateChange = () =>{
    this.setState({
      name:'Sai Sunkara'
    })
  }


  render() {
    const style ={
      color:'blue',
      marginLeft: '5px'
    }
    console.log('LifeCycleA Render');
    return (
      <div>
        LifeCycle A
        <button style={style} onClick={this.stateChange}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
