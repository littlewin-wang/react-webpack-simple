require('normalize.css/normalize.css')
require('styles/base.css')

import React from 'react'

let helloImage = require('./hello.png')

class MainComponent extends React.Component {
  render () {
    return (
      <div className="index">
        <img src={helloImage} alt="Hello World" />
        <div className="notice">Please edit <code>src/components/main.js</code> to get started!</div>
      </div>
    )
  }
}

MainComponent.defaultProps = {
}

export default MainComponent
