import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comment: '',
            course: 'angular'
        }
    }
    onUserNameChnage = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    onCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    onCourseChange = event => {
        this.setState({
            course: event.target.value
        })
    }
    submitForm = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.course}`)
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={this.state.userName} onChange={this.onUserNameChnage} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.onCommentChange}></textarea>
                </div>
                <div>
                    <select value={this.state.course} onChange={this.onCourseChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='next.js'>Next.js</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
