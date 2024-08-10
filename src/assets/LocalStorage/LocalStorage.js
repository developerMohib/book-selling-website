
const getItemFromSite = () => {
    const getItem = localStorage.getItem('book');
    if(getItem){
        const getBook = JSON.parse(getItem);
        return getBook;
    }
    return [] ;
}
const setItemToSite = (book) => {
    let setBook = getItemFromSite();
    // Check if setBook is null or not an array, initialize as an array if necessary
    if (!Array.isArray(setBook)) {
        setBook = [];
    }
    setBook.push(book);
    localStorage.setItem('book', JSON.stringify(setBook) )
}


const removeItem = (bookId) => {
    let books = getItemFromSite();
    const remain = books?.filter(book => book.bookId !== bookId);
    localStorage.setItem('book', JSON.stringify(remain));
    return remain;
};

export { getItemFromSite, setItemToSite,removeItem };