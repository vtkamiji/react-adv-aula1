import _ from 'lodash';

export const FETCH_COMMENTS = 'fetch_commnent';
export const ADD_COMMENT = 'add_comment';
const commentList = {};

export function fetchComments() {
    return {
        type: FETCH_COMMENTS,
        payload: {'data': commentList}
    }
}

export function addComment(comment) {

    return {
        type: ADD_COMMENT,
        payload: {data: comment}
    }
}