import React from 'react'

export default Comp => class Example extends React {
  constructor (props) {
    super(props)
  }

  render () {
    <div className="example-warper">
      <Comp />
    </div>
  }
}
