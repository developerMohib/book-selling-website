
const getItemFromSite = () => {
    const getItem = localStorage.getItem('book');
    if(getItem){
        const getBook = JSON.parse(getItem);
        console.log(getBook, 'paici')
        return getBook;
    }
    return [] ;
}
const setItemToSite = (book) => {
    const setBook = getItemFromSite();
    setBook.push(book);
    localStorage.setItem('book', JSON.stringify(setBook) )
}


// const removeItem = (bookId) => {
//     let books = getItemFromSite();
//     console.log('books', books)
//     const remain = books?.filter(book => book.bookId !== bookId);
//     console.log('id from', remain)
//     localStorage.setItem('book', JSON.stringify(remain));
//     // return remain;
// };

export { getItemFromSite, setItemToSite,  };
