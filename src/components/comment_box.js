import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addComment} from '../actions/index';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {comment: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state.comment);
        this.setState({comment: ''});
    }

    onInputChange(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="comment-box">
                <h2>Add Comment</h2>
                <textarea
                    name="comment"
                    id="comment"
                    cols="50"
                    rows="5"
                    onChange={this.onInputChange}
                    value={this.state.comment}>
                </textarea>
                <br/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default connect(null, { addComment })(CommentBox);