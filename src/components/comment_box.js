import React, {Component} from 'react';
import addComment from '../actions/index';

class CommentBox extends Component {

    constructor(props) {
    }

    render() {
        <div>
            <h2>Add Comment</h2>
            <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                value={this.state.comment}>
            </textarea>

            <button onClick={() => this.props.addComment(this.state.comment)}></button>
        </div>
    }
}

export default connect(null, addComment)(CommentBox);