require('normalize.css/normalize.css')
require('styles/base.css')

import React from 'react'

let helloImage = require('./hello.png')

class HelloComponent extends React.Component {
  render () {
    return (
      <div className="index">
        <img src={helloImage} alt="Hello World" />
        <div className="notice">Please edit files in <code>src</code> to get started!</div>
      </div>
    )
  }
}

HelloComponent.defaultProps = {
}

export default HelloComponent
