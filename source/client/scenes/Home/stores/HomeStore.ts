import { observable, action, computed } from 'mobx'
import { findLink } from '../../../shared/api/link/findLink'
import { createLink } from '../../../shared/api/link/createLink'
import { serveLink } from '../../../shared/api/link/serveLink'

export default class HomeStore {
  @observable inputValue: string = ''

  @action updateInputValue = ({ target: { value }}) => {
    this.inputValue = value
  }

  goToLink = (e) => e.key === 'Enter' && serveLink(e.target.value)

  createLink = async (e) => {
    if (e.key === 'Enter') {
      const result = await createLink(this.inputValue)
      console.log(result)
    }
  }

  findLink = async (e) => {
    if (e.key === 'Enter') {
      const link = await findLink(e.target.value)
      console.log(link)
    }
  }

  @computed get inputValidity() {
    return String(
      this.inputValue.length === 0 ||
      validateUrl(this.inputValue)
    )
  }
}

// TODO: Improve expression to match url.
const validateUrl = (url) => {
  return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)
}