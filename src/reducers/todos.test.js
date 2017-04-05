import todos from './todos';
const deepFreeze = require('deep-freeze');

describe('Adding a todo', () => {
    it('should add a todo without mutation', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    })
    it('should return the state for any unknown action', () => {
        const stateBefore = [
            {
                id: 3,
                text: 'Learn Redux',
                completed: true
            }
        ];
        const action = {
            type: 'SOMETHING_WEIRD',
            id: 2,
            text: 'Should not make it into the state'
        };
        const stateAfter = [
            {
                id: 3,
                text: 'Learn Redux',
                completed: true
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});
