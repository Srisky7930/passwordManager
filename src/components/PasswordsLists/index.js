import './index.css'

const PasswordsLists = props => {
  const {each, showPassword, onDelete} = props
  const {website, username, passwords} = each

  const onDeleteButton = () => {
    onDelete(website)
  }

  return (
    <li className="lists-items">
      <div>
        <p className="website"> {website}</p>
        <p className="username"> {username} </p>

        {showPassword ? (
          <p className="password"> {passwords} </p>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          </div>
        )}
      </div>
      <div>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordsLists
