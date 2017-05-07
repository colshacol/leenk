import { observable, action, computed } from 'mobx'

export default class HomeStore {
  @observable inputValue: string = ''

  @action updateInputValue = ({ target: { value }}) => {
    this.inputValue = value
  }

  submitLink = (e) => {
    if (e.key !== 'Enter') return false
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    fetch('/api/create', {
      headers,
      method: 'put',
      body: JSON.stringify({
        url: this.inputValue
      })
    }).then(res => {
      console.log(res.status)
      return res.json()
    }).then(data => {
      console.log('Submitted, yo...', data)
    })
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