import {visibilityFilter} from "../../actions/visibility";

describe('visibility actions', () => {
    test('should set visibility filter', () => {
        const filter = 'SHOW_COMPLETED';
        const action = visibilityFilter(filter);
        expect(action).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter
        })
    });
});
