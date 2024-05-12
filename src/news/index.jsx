import axios from '../utils/axios';

export const newscategory = {
    technology: 'technology',
    science: 'science',
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    sports: 'sports',
}

const MAX_ITEM_PER_PAGE = 10;

export default class News {
    constructor(category) {
        this._category = category; // ai category gula jate amra baire access korte caiteci na tai _ underscore use korbo
        this._searchTerm = '';
        this._pageSize = MAX_ITEM_PER_PAGE;
        this._currentPage = 1; // jokhon user page load korbe ak number page e asbe
        this._totalPage = 1;
    }

    async getNews() {
        try{
            const { data } = axios.get(this._getURL());
            this._totalPage = Math.ceil( data.totalResults / this._pageSize );

            return {
                article: data.articles,
                totalPage: this._totalPage,
                currentPage: this._currentPage,
                category: this._category,
                totalResults: data.totalResults
            }

        } catch( e ) {
            throw new Error(e);
        }
    }

    next() {

    }

    prev() {
        
    }

    setCurrentPage() {

    }

    changeCategory() {

    }

    search() {

    }

    _getURL() {

        let url = '/?';
        if(this._category) url += `category=${this._category}`;
        if(this._searchTerm) url += `&q=${this._searchTerm}`;
        if(this._pageSize) url += `_pageSize=${this._pageSize}`;
        if(this._currentPage) url += `page=${this._currentPage}`;

        return url;
    }
}