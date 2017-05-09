import * as React from 'react'
import { ShortenerStore } from './stores/ShortenerStore'
import { observer } from 'mobx-react'
const copy = require('copy-to-clipboard')
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
        {!!_store.shortenedUrl && (
          <div className={css.shortRevealer}>
            <p>{_store.shortenedUrl}</p>
            <button onClick={() => copy(_store.shortenedUrl, { message: 'CLICK TO COPY' })}>COPY</button>
          </div>
        )}
      </div>
      
    )
  }

  public static defaultProps = {
    placeholder: 'default placeholder...',
    className: 'Shortener'
  }
}

