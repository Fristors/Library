import { SEARCH_BOOK } from "./type";
import { SORTING_BOOK } from "./type";

export function findBookInputActionCreator(text) { 
    return{
        type: SEARCH_BOOK,
        text
    }
}
export function sortingBookCategoryActionCreator(category){
    return{
        type: SORTING_BOOK,
        category
    }
}