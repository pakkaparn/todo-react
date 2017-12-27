import React, { Component } from 'react'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <section className="section">
        <h2 className="title">Lists</h2>
        <ul>
          {
            this.props.items.map((item, index) => (
              <li key={index}>
                <label className="checkbox">
                  <input type="checkbox" /> {item}
                </label>
              </li>
              )
            )
          }
        </ul>
      </section>
    )
  }
}
