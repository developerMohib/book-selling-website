import "./App.css";
import toast from "react-hot-toast";
import Header from "./Header/Header";
import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";
import { removeItem, setItemToSite } from "./assets/LocalStorage/LocalStorage";

function App() {
  const [books, setBooks] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  // browse Data

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const addToCart = (bookCart) => {
    const isExist = cartItem.some((item) => item.bookId === bookCart.bookId);
    if (isExist) {
      toast("This is not good Job, bro !", {
        icon: "👏",
      });
    } else {
      setCartItem([...cartItem, bookCart]);
      setItemToSite(bookCart);
      toast.success("Successfully added !");
    }
  };
  const handleDelete = (id) => {
    removeItem(id);
  };

  return (
    <>
      <Header> </Header>
      <section className=" grid grid-cols-4  justify-between">
        <div className=" border-4 col-span-3 justify-between grid grid-cols-3 gap-5 ">
          {books?.map((book) => {
            return (
              <>
                <div key={book?.bookId} className="mx-auto ">
                  <div>
                    <div className="card card-compact bg-base-100 shadow-xl ">
                      <figure>
                        <img src={book.bookImage} alt="Book" />
                      </figure>
                      <div className="card-body text-left ">
                        <h2 className="card-title text-sm">{book.bookTitle}</h2>
                        <h3 className="card-title text-sm">
                          {book.bookAuthor}
                        </h3>
                        <p className="card-title text-sm">{book.bookPrice}</p>
                        <p>{book.bookStatus}</p>
                        <div className="w-full">
                          <button
                            onClick={() => addToCart(book)}
                            className="btn bg-green-500 p-3 rounded-lg "
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className=" col-span-1 bg-blue-200 border-4">
          <div className="">
            <div>
              <div className="flex justify-around mb-4">
                <h3>Name</h3>
                <h3>Price</h3>
                <h3>Cart</h3>
              </div>

              {cartItem?.map((item) => {
                return (
                  <div key={item?.bookId} className="flex justify-around">
                    <h2 className="text-sm">{item.bookTitle.slice(0, 20)} </h2>
                    <h2 className="text-sm">{item.bookPrice} </h2>
                    <button>
                      {" "}
                      <TiDelete
                        onClick={() => handleDelete(item?.bookId)}
                        className="text-2xl hover:divide-orange-500 "
                      />{" "}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
