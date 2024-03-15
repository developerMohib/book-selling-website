
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [ books, setBooks ] = useState( [] );
  const [ cartItem, setCartItem ] = useState( [] )
  // browse Data 

  useEffect( () => {
    fetch('book.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [] );

  // console.log(books);

  // console.log(cartItem, 'before added');

  const addToCart = (bookCart) => {
    // console.log('clicked button', bookCart );
    setCartItem([ ...cartItem, bookCart]);
  };
  console.log(cartItem, 'new list');

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
        My Books Selling Website !
      </h1>
      </div>
      {/* My Working Place Here */}

      {
        books.map((book) => {
          return (
            <div  key={book.bookImage} className='mx-auto flex'>
              <div className=" w-[ 65% ] ">
                <div className="">

                  
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={book.bookImage} alt="Book" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{book.bookTitle}</h2>
                      <h3 className="card-title">{book.bookAuthor}</h3>
                      <p className="card-title">{book.bookPrice}</p>
                      <p>{book.bookStatus}</p>
                      <div className="card-actions justify-end">
                        <button onClick={() => addToCart(book)} className="btn bg-gray-400 text-white p-3 rounded-lg">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="">
                    <div className=""></div>
                  </div>
                </div>
              </div>

              <div className=" w-[ 35% ] ">
              <div className="bg-blue-200">
                <div>
                  <div className="flex justify-around">
                    <h3>Name</h3>
                    <h3>Price</h3>
                  </div>

                    {
                      cartItem?.map( item => {
                        return ( 
                          <div key={item.bookImage} className="flex justify-around">
                            <h2>{item.bookTitle} </h2>
                            <h2>{item.bookPrice} </h2>
                          </div>
                         )
                      } )
                    }
                </div>
              </div>

              </div>
            </div>
          );
        })
      }



    </>
  )
}

export default App
