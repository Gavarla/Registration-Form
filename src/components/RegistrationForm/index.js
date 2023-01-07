import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequired: false,
    lastNameRequired: false,
    successfulSubmit: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameRequired: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.state

    this.setState({lastNameRequired: !isValidLastName})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({successfulSubmit: true})
    } else {
      this.setState({
        firstNameRequired: !isValidFirstName,
        lastNameRequired: !isValidLastName,
        successfulSubmit: false,
      })
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({successfulSubmit: true})
    } else {
      this.setState({
        firstNameRequired: !isValidFirstName,
        lastNameRequired: !isValidLastName,
        successfulSubmit: false,
      })
    }
  }

  anotherSubmit = () =>
    this.setState({successfulSubmit: false, firstName: '', lastName: ''})

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFormContainer = () => {
    const {
      firstName,
      lastName,
      firstNameRequired,
      lastNameRequired,
    } = this.state

    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className="input"
          id="firstName"
          type="text"
          value={firstName}
          onChange={this.changeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameRequired ? (
          <p className="error-message">Required</p>
        ) : (
          <p> </p>
        )}
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className="input"
          id="lastName"
          type="text"
          value={lastName}
          onChange={this.changeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameRequired ? (
          <p className="error-message">Required</p>
        ) : (
          <p> </p>
        )}
        <div className="button-container">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderOnSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        onClick={this.anotherSubmit}
        className="submit-another-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {successfulSubmit} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="form-container">
          {successfulSubmit
            ? this.renderOnSuccess()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
