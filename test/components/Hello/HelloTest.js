/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict'

import createComponent from 'helpers/shallowRenderHelper'
import { Hello } from 'components'

describe('HelloComponent', function () {
  beforeEach(function () {
    this.HelloComponent = createComponent(Hello)
  })

  it('should have its component name as default className', function () {
    expect(this.HelloComponent.props.className).to.equal('index')
  })
})
