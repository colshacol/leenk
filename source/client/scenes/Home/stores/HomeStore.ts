import { observable, action, computed } from 'mobx'

export default class HomeStore {
  @observable inputValue: string = ''

  @action updateInputValue = ({ target: { value }}) => {
    this.inputValue = value
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