import { Heart, Search, ShoppingBag, User, X } from "lucide-react";
import { Link, Outlet } from "react-router";
import { useState } from "react";
import { Footer } from "../comps/Footer";

function Layout() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        setIsSearchVisible(false);
        setSearchQuery('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login data:', loginData);
        setIsLoginVisible(false);
    };

    return (
        <>
            <header className="font-raleway">
                <section className='w-screen'>
                    <section>
                        <div className="w-full bg-black font-raleway flex justify-center items-center text-white">
                            <p className="text-xs font-bold p-3">FREE SHIPPING ON ALL ORDERS ABOVE 349/- | COD AVAILABLE</p>
                        </div>
                    </section>
                    <section className="w-screen">
                        <div className="flex justify-between p-3 items-center w-full">
                            <div className="flex justify-center items-center p-6">
                                <img src="https://www.theartloom.in/wp-content/uploads/2020/01/art-loom-logo.svg" alt="" />
                            </div>
                            <div className="flex justify-between gap-6 text-black items-center p-6">
                                <Search
                                    height={20}
                                    width={20}
                                    onClick={() => setIsSearchVisible(!isSearchVisible)}
                                    className="cursor-pointer hover:text-gray-600"
                                />
                                <Heart height={20} width={20} className="cursor-pointer hover:text-gray-600" />
                                <a href="/cart">
                                    <ShoppingBag height={20} width={20} className="cursor-pointer hover:text-gray-600" />
                                </a>
                                <User
                                    height={20}
                                    width={20}
                                    className="cursor-pointer hover:text-gray-600"
                                    onClick={() => setIsLoginVisible(true)}
                                />
                            </div>
                        </div>
                    </section>
                    {/* Search Bar */}
                    {isSearchVisible && (
                        <div className="w-full bg-white shadow-md">
                            <div className="max-w-7xl mx-auto px-4 py-3">
                                <form onSubmit={handleSearch} className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 px-4 py-2 border-b-2 border-gray-200 focus:border-black focus:outline-none"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 p-2 hover:bg-gray-100 rounded-full"
                                    >
                                        <Search height={20} width={20} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsSearchVisible(false)}
                                        className="ml-2 p-2 hover:bg-gray-100 rounded-full"
                                    >
                                        <X height={20} width={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Login Modal */}
                    {isLoginVisible && (
                        <div className="absolute z-40 w-full h-full">
                                <div className="blackcover bg-black opacity-50 absolute h-full w-full "></div>
                            <div className=" h-screen w-screen absolute z-50 bg-transparent flex items-center justify-center">
                                <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold">Login</h2>
                                        <button
                                            onClick={() => setIsLoginVisible(false)}
                                            className="text-gray-500 hover:text-black"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <form onSubmit={handleLogin} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Username or Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                                                value={loginData.email}
                                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                                                value={loginData.password}
                                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={loginData.remember}
                                                    onChange={(e) => setLoginData({ ...loginData, remember: e.target.checked })}
                                                    className="rounded border-gray-300 text-black focus:ring-black"
                                                />
                                                <span className="text-sm">Remember Me</span>
                                            </label>

                                            <a href="/forgot-password" className="text-sm text-black hover:underline">
                                                Lost your password?
                                            </a>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                                        >
                                            LOG IN
                                        </button>
                                    </form>

                                    <div className="mt-6 text-center space-y-4">
                                        <p className="text-sm text-gray-600">
                                            LOOK Secure Shopping
                                        </p>
                                        <div className="flex justify-center space-x-4">
                                            <a href="/manner" className="text-sm hover:underline">MANNER</a>
                                            <a href="/insulated-bottle" className="text-sm hover:underline">INSULATED BOTTLE</a>
                                            <a href="/stickers" className="text-sm hover:underline">STICKERS</a>
                                            <a href="/bulk-order" className="text-sm hover:underline">BULK ORDER</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <section className="w-screen justify-center flex bg-[#ff7518]">
                        <div className="flex gap-6 w-[80%] justify-center items-center">
                            <nav className="flex justify-center gap-6 items-center p-6">
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
                    <Outlet />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Layout;