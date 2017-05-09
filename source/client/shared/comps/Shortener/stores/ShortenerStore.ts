import { observable, action, computed } from 'mobx'
import { createLink } from '../../../api/link/createLink'

export class ShortenerStore {
  @observable inputValue: string = ''
  @observable shortenedUrl: string = ''

  @action updateInputValue = ({ target: { value }}) => {
    this.inputValue = value
  }

  @action updateShortenedUrl = (value) => {
    this.shortenedUrl = value
  }


  createLink = async (e) => {
    if (e.key === 'Enter') {
      const result = await createLink(this.inputValue)
      // TODO: Present user with shortlink.
      this.updateShortenedUrl(result.short)
    }
  }

  @computed get inputValidity() {
    return String(validateUrl(this.inputValue))
  }
}

// TODO: Improve expression to match url.
const validateUrl = (url) => {
  if (!url.length) return true
  return /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/g.test(url)
}