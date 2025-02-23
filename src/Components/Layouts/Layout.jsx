import { Heart, Search, ShoppingBag, User, X } from "lucide-react"
import { Link, Outlet } from "react-router"
import { Footer } from "../comps/Footer"

function Layout() {
    return (
        <>
            <header className="font-raleway">
                <section className='w-screen'>
                    <section>
                        <div className="w-full bg-black font-raleway flex justify-center items-center text-white">
                            <p className="text-xs font-bold p-3" >FREE SHIPPING ON ALL ORDERS ABOVE 349/- | COD AVAILABLE</p>
                        </div>
                    </section>
                    <section className="w-screen ">
                        <div className="flex justify-between p-3 items-center w-full">
                            <div className="flex justify-center items-center p-6">
                                <img src="https://www.theartloom.in/wp-content/uploads/2020/01/art-loom-logo.svg" alt="" />
                            </div>
                            <div className="flex justify-between gap-6 text-black items-center p-6">
                                <Search height={20} width={20} />
                                <Heart height={20} width={20} />
                                <a href=" /cart">
                                <ShoppingBag height={20} width={20} />
                                </a>
                                <User height={20} width={20} />
                            </div>
                        </div>
                    </section>
                    <section className="w-screen justify-center flex bg-[#ff7518]">
                        <div className="flex gap-6 w-[80%] justify-center items-center">
                            <nav className="flex justify-center gap-6  items-center p-6">
                                <Link to={"/home"}><span>2025 Planner Collection</span></Link>
                                <Link to={"/gratitude"}><span>Gratitude Journal</span></Link>
                                <Link to={"notebook"}><span>Notebook & Journal</span></Link>
                                <Link to={"/desk"}><span>Desk Pads</span></Link>
                                <Link to={"/undated-planner"}><span>Undated Planner</span></Link>
                                <Link to={"/insulated-bottle"}><span>Insulated Bottle</span></Link>
                                <Link to={"/stickers"}><span>Stickers</span></Link>
                            </nav>
                        </div>
                    </section>
                </section>
            </header>
            <main>
                <section className="flex justify-center items-center w-screen">
                    <Outlet/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout