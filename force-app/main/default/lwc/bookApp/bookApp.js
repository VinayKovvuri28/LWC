import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export default class BookApp extends LightningElement {
    query='Salesforce'
    books
    delay

    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){
/*
        fetch(url, {
            method:'post',
            headers:{},
            body:''
        }).then(response => response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
*/
        fetch(BOOK_URL + this.query)
        .then(response => response.json())
        .then(data=>{
            console.log('BOOK Data: ',data)
            this.books = data
        })
        .catch(error=>console.log(error))
    }

    fetchBookHandler(event){
        this.query = event.target.value
        window.clearTimeout(this.delay)
        this.delay = setTimeout(() => {
            this.fetchBookData()
        }, 2000)
    }
}