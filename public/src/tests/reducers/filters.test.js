import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default reducer', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set SortBy to date', () => {
    const currentDate = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentDate, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set start date', () => {
    const startDate = moment().startOf('month');

    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set end date', () => {
    const endDate = moment().endOf('month');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate })
    expect(state.endDate).toEqual(moment().endOf('month'))
})

test('should set text filter', () => {
    const text = 'This is my filter'

    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })
    expect(state.text).toBe(text)
})