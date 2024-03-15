
import './App.css'

function App() {


  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      </div>
      {/* My Working Place Here */}

      <div className='grid grid-cols-4 '>
          <div className='flex col-span-3 '> 
           
           {/* Book Card */}
           <div>
           <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-300 text-white p-3 rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>
           </div>
           {/* Book Card */}

           {/* Book Card */}
           <div>
           <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-300 text-white p-3 rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>
           </div>
           {/* Book Card */}
           {/* Book Card */}
           <div>
           <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-300 text-white p-3 rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>
           </div>
           {/* Book Card */}


          </div>
          
          <div className='it wil bg-blue-200 '>
            <div className='flex justify-around' >
              <h3>Name</h3>
              <h3>Price</h3>
            </div>
            
            <div className='flex justify-around' >
              <h3>Name</h3>
              <h3>500</h3>
            </div>

          </div>
      </div>

    </>
  )
}

export default App
