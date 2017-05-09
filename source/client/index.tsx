import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './scenes/Home/Home'
require('./shared/styles/index.styl')

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Home}/>
  </BrowserRouter>,
  document.getElementById('mountPoint')
)