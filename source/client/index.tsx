import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './scenes/Home/Home'
import { NoMatch } from './scenes/NoMatch/NoMatch'

require('./shared/styles/index.styl')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={NoMatch}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('mountPoint')
)