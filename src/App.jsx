
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [ books, setBooks ] = useState( [] );

  // browse Data 

  useEffect( () => {
    fetch('book.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [] );

  console.log(books);

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
            <div key={book.id}>

              <div className='grid grid-cols-4 '>
                <div className='flex col-span-3 '> 

                <div className="grid grid-cols-3">

                {/* Book Card */}
                <div className=''>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure><img src= {book.bookImage} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title"> {book.bookTitle}</h2>
                    <h3 className="card-title"> {book.bookAuthor}</h3>
                    <p className="card-title"> {book.bookPrice} </p>
                    <p>{ book.bookStatus }</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-gray-300 text-white p-3 rounded-lg">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
                {/* Book Card */}
                </div>

                </div>
          
              <div className='it wil bg-blue-200 '>
                <div className='flex justify-around' >
                  <h3>Name</h3>
                  <h3>Price</h3>
                </div>
            
              <div>

                <div className='flex justify-around' >
                  <h3>Name</h3>
                  <h3>500</h3>
                </div>
                
                <div className='flex justify-around' >
                  <h3>Name</h3>
                  <h3>500</h3>
                </div>

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
