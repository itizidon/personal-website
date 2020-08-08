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
      <div className="formbody">
        <h4>Contact Me</h4>
        <div className="formwrapper">
          <form
            className="form"
            onSubmit={this.submitForm}
            action={process.env.REACT_APP_NOT_SECRET_CODE}
            method="POST"
          >
            <div>
              <div>
                <div className="labels">
                  <label>Name:</label>
                  <input type="text" name="name" />
                </div>
                <div className="labels">
                  <label>Email:</label>
                  <input type="email" name="email" />
                </div>
              </div>
              <div className="labels">
                <label>Message:</label>
                <textarea type="text" name="message" id="msgBox"/>
              </div>
              <div>
                {status === 'SUCCESS' ? (
                  <p>Thanks!</p>
                ) : (
                  <button className="submitButton">Submit</button>
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              </div>
            </div>
          </form>
        </div>
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
