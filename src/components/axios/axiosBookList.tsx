import axios from 'axios';

let requestApiBook : string; 

export function requestBooks() {
    const api = axios.create({
      baseURL: 'https://www.googleapis.com',
    });
    
    return api.get(requestApiBook);
}

export function setFilters(title: string, category: string, sortBy: string) {
    requestApiBook = `/books/v1/volumes?`;
    requestApiBook += `q=${title}`;
    requestApiBook += category === 'all' ? '' : `+subject:${category}`;
    //requestApiBook += `&orderBy=${sortBy}`;
    requestApiBook += '&key=AIzaSyCGAG1kkjUTeccyB3k1_Hkm7ZVB1ISg-x8';
  }