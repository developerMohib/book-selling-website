

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


export {getItemFromSite, setItemToSite }