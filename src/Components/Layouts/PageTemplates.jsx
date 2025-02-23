import { Link } from "react-router"


const PageTemplates = ({books,page }) => {
  return (
    <div className="w-screen p-6">
      <header className="w-full flex justify-between items-center">
        <div className="flex gap-6 flex-col"><p className="text-zinc-500">Home / {page }</p>
          <div>
            <select name="category" className="border-1 text-zinc-500 border-black  p-3">
              <option value="Notebook">Notebook</option>
              <option value="Journal">Journal</option>
              <option value="Kraft Cover Notebook">Kraft Cover Notebook</option>
            </select>
          </div>
        </div>
        <div className="mt-6"><p className="font-raleway ">Showing 1–12 of 25 result</p></div>
      </header>

      <main className="w-full flex p-6 flex-col">
        <div className="grid grid-cols-4 line gap-4 w-full">

          {
            books.map((book, index) => {
              return (
                <div key={index} className="w-full transition ease-in border-bottom flex-col justify-center items-center hover:shadow-lg duration-300 ">
                    <div className="w-full h-full justify-center items-center flex flex-col">
                      {/* Image */}
                      <div className="w-full flex justify-center items-center">
                        <img src={book.image_url} alt="book" className="w-full h-full object-cover" />
                      </div>
                      {/* Description */}
                      <div className="w-full justify-center items-center p-3 h-full flex flex-col">
                        <div className="flex gap-2 items-center">
                          <p className="text-black text-sm font-taviraj">{book.name}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <p className="text-zinc-500 opacity-35 line-through text-xl font-cabinet ">₹{book.original_price}</p>
                          <p className="text-black  text-2xl font-weight font-cabinet">₹{book.current_price}</p>
                        </div>
                       <Link to={`/product-detqails/${book._id}`} className="text-black hover:underline cursor-pointer font-raleway ">View product</Link>
                
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default PageTemplates
