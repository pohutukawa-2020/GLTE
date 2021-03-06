import React from 'react'
import { Route } from 'react-router-dom'

import { getWelcome } from '../api'

import Card from './Card'
import GameOver from './GameOver'
import HighLow from './HighLow'
import InOrOut from './InOrOut'
import Picture from './Picture'
import Title from './Title'

class App extends React.Component {
  state = {
    welcomeStatement: ''
  }
  componentDidMount () {
    getWelcome().then((res) =>
      this.setState({ welcomeStatement: res.statement })
    )
  }
  render () {
    return (
      <>
        <Route exact path="/" component={Title} />
        <Route path="/Card" component={Card} />
        <Route path="/gameOver" component={GameOver} />
        <Route path="/HighLow" component={HighLow} />
        <Route path="/InOrOut" component={InOrOut}/>
        <Route path="/Picture" component={Picture}/>
      </>
    )
  }
}

export default App
