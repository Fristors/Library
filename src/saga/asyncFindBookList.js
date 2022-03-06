import { takeLatest, put, call } from 'redux-saga/effects';
import { requestBooks } from './../components/axios/axiosBookList';
import { findBookInputActionCreator } from "./../components/redux/action";

const ASYNC_GET_BOOKS = "ASYNC_GET_BOOKS";

function* asyncGetBooks(){
    const response = yield call(requestBooks);
    const list = response.data.items.map((item) => ({
        id: item.id,
        name: item.volumeInfo.title,
        path: item.volumeInfo.imageLinks.smallThumbnail,
        category: item.volumeInfo.categories,
        author: item.volumeInfo.authors,
    }));
    yield put(findBookInputActionCreator(list));
}

export const asyncGetBooksActionCreator = () => {
    return {
        type: ASYNC_GET_BOOKS,
    }
}

export default function* watchGetBooks() {
    yield takeLatest(ASYNC_GET_BOOKS, asyncGetBooks);
};