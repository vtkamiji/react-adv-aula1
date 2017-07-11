import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/reducer_comments';
import { ADD_COMMENT } from '../../src/actions/index';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.be.instanceof(Object);
        // expect(commentReducer()).to.eql([]);
    });

    it('handles action of type ADD_COMMENT', () => {
        const action = { type: ADD_COMMENT, payload: {data: 'new comment'}};
        expect(commentReducer({}, action)).to.has.property('new comment');
    });

    it('ADD_COMMENT', () => {

    });
});