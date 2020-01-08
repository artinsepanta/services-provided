import React, { Component } from 'react';

class Home extends Component {
  state = {
      checked: true,
      heading: 'WELCOME'
  }

  toggleSwitch = () => {
    const newVal = !this.state.checked
    if (newVal) {
        return this.setState({
            heading: 'WELCOME',
            checked: newVal
        })
    }
    return this.setState({
        heading: 'WELCOME',
        checked: newVal
    })
  }

  render() {
    return (
      <div className="text-gray">
        <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
      </div>
    )
  }
}

export default Home;