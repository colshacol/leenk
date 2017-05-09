import * as React from 'react'
import { Shortener } from '../../shared/comps/Shortener/Shortener'
const css = require('./styles/Home.styl')

export const Home = (props: any) => {
  return (
    <div className={css.Home}>
      <h1>HOME</h1>
      <Shortener placeholder='my dogs...'/>
    </div>
  )
}