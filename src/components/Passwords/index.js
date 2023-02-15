import {Component} from 'react'

import {v4} from 'uuid'
import PasswordsLists from '../PasswordsLists'

import './index.css'

class Passwords extends Component {
  state = {
    search: '',
    website: '',
    username: '',
    passwords: '',
    passwordsLists: [],
    showPassword: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, passwords} = this.state

    const newPasswords = {
      id: v4(),
      website,
      username,
      passwords,
    }

    this.setState(prevState => ({
      passwordsLists: [...prevState.passwordsLists, newPasswords],
      website: '',
      username: '',
      passwords: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePasswords = event => {
    this.setState({
      passwords: event.target.value,
    })
  }

  onShowPasswords = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSearchInput = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onSearchResults = () => {
    const {search, passwordsLists} = this.state
    const filteredLists = passwordsLists.filter(each =>
      each.website.includes(search),
    )
    return filteredLists
  }

  onDeleteButton = website => {
    console.log(website)
    const {passwordsLists} = this.state
    const filteredLists = passwordsLists.filter(
      each => each.website !== website,
    )
    this.setState({
      passwordsLists: filteredLists,
    })
  }

  render() {
    const {website, username, passwords, showPassword, search} = this.state
    const filteredList = this.onSearchResults()
    const noPasswords = filteredList.length > 0

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="passwords-container">
            <form className="form" onSubmit={this.onSubmitForm}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />

                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="logo"
                />

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  value={passwords}
                  onChange={this.onChangePasswords}
                />
              </div>
              <div className="add-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="passwords-image"
              />
            </div>
          </div>
        </div>

        <div className="passwords-lists-card">
          <div className="container2">
            <div>
              <h1 className="form-heading">
                Your Passwords
                <p className="span-card"> {filteredList.length}</p>
              </h1>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                value={search}
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords-container">
            <input
              id="passwords"
              type="checkbox"
              onChange={this.onShowPasswords}
            />
            <label className="show-passwords" htmlFor="passwords">
              Show Passwords
            </label>
          </div>

          <div>
            {noPasswords ? (
              <ul className="passwords-lists-items">
                {filteredList.map(each => (
                  <PasswordsLists
                    each={each}
                    key={each.id}
                    showPassword={showPassword}
                    onDelete={this.onDeleteButton}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p> No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
