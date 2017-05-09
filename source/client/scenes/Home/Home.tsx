import * as React from 'react'
const css = require('./styles/Home.styl')
import { observer } from 'mobx-react'
import Store from './stores/HomeStore'

@observer
export default class Home extends React.Component<any, any> {
  _store = new Store()

  render({ props, _store } = this) {
    return (
      <div className={css.Home}>
        <h1>HOME</h1>
        <p>Value: {_store.inputValue}</p>
        <input
          placeholder='type here...'
          value={_store.inputValue}
          onChange={_store.updateInputValue}
          onKeyUp={_store.createLink}
        />
        <small>Valid: {_store.inputValidity}</small>
        <p>FIND:</p>
        <input
          placeholder='find by suffix'
          onKeyUp={_store.findLink}
        />
      </div>
    )
  }
}