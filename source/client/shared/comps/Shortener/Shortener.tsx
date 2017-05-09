import * as React from 'react'
import { ShortenerStore } from './stores/ShortenerStore'
import { observer } from 'mobx-react'
const css = require('./styles/Shortener.styl')

interface Props {
  placeholder: string,
  className?: string,
}

@observer
export class Shortener extends React.Component<Props, any> {
  _store = new ShortenerStore()

  render({ _store, props } = this) {
    const classes = `${props.className} valid-${_store.inputValidity}`
    return (
      <div className={css.Shortener}>
        <input
          className={classes}
          placeholder={props.placeholder}
          onKeyUp={_store.createLink}
          onChange={_store.updateInputValue}
          value={_store.inputValue}
        />
        <div className={css.shortRevealer}>
          <p>{_store.shortenedUrl}</p>
        </div>
      </div>
      
    )
  }

  public static defaultProps = {
    placeholder: 'default placeholder...',
    className: ''
  }
}

