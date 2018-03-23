import visibilityReducer from '../../reducers/visibility';

describe('visibility reducer', () => {
    test('should set default state', () => {
        const state = visibilityReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual('SHOW_ALL');
    });

    test('should set visibility filter', () => {
        const filter = 'SHOW_COMPLETED';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter
        };
        const state = visibilityReducer(undefined, action);
        expect(state).toEqual('SHOW_COMPLETED');
    });
});
