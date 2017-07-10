import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/index';

class CommentList extends Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    renderList() {
        return _.map(this.props.comments, comment => {
            return (
                <li key={comment}>
                    {comment}
                </li>
            );
        });
    }

    render() {
        return(

            <ul className="comment-list">
                {this.renderList()}
            </ul>

        );
    }
}

function mapStateToProps(state) {
    return {comments: state.comments};
}

export default connect(mapStateToProps, {fetchComments})(CommentList);