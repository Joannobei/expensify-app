import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123aaa' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123aaa'
    });
})

test('should setup edit expense action object', () => {
    const action = editExpense('123aaa', { note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123aaa',
        updates: { note: 'New note value' }
    })
})

test('should setup add expense action object inputed', () => {
    const expenseVar = ({
        description: 'Food',
        note: 'total montly feeds',
        amount: 3432,
        createdAt: 1000
    })
    const action = addExpense(expenseVar)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseVar,
            id: expect.any(String),

        }
    })
})

test('should set up add expense by default', () => {
    const expenseDef = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expenseDef)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDef,
            id: expect.any(String),
        }
    })
});