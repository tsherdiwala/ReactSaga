import {
    FETCHING_DATA,
} from './constants';
import getPeople from './api'


export function fetchData() {
    return {
        type: FETCHING_DATA
    }
}