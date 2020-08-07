import React from 'react'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: ''
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="contactPadding">
        <h1 className="contact">Contact Me</h1>
        <form
          onSubmit={this.submitForm}
          action={process.env.REACT_APP_NOT_SECRET_CODE}
          method="POST"
        >
          <div className="formHeader">
            <div className="labels">
              <label>Name:</label>
              <input type="text" name="name" style={{ width: '300px' }} />
            </div>
            <div className="labels" id="email">
              <label>Email:</label>
              <input type="email" name="email" style={{ width: '300px' }} />
            </div>
          </div>
          <div className="labels">
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              style={{ width: '100%', height: '450px' }}
            />
          </div>
          {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
