import React, { Component } from 'react'
import List from './List'
import 'bulma'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      term: '',
      items: []
    }
  }

  onChange (event) {
    this.setState({ term: event.target.value })
  }

  onSubmit (event) {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  renderList () {
    if(this.state.items.length === 0) return null
    return (<List items={this.state.items} />)
  }

  render () {
    return (
      <section className="section">
        <div className="container">
          <form className="App" onSubmit={this.onSubmit}>
            <div className="field">
              <div className="control">
                <input className="input" value={this.state.term} onChange={this.onChange} placeholder="What's you going to do?" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-success">Submit</button>
              </div>
            </div>
          </form>
          { this.renderList() }
        </div>
      </section>
    )
  }
}
