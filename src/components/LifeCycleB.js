import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Sunkara'
    }
    console.log('LifeCycleB Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB DerviedStateFromProps')
    return null
  }

  componentDidMount = () => {
    console.log('LifeCycleB componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifeCycleB shouldcomponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getSnapshotbeforUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifeCycleB componentDidupdate')
  }



  render() {
    console.log('LifeCycleB Render');
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
