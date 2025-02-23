import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        const updatedCart = cartItems.map(item => 
            item._id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.current_price * item.quantity), 0);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-serif font-light text-gray-900 mb-8">Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                        <Link
                            to="/"
                            className="inline-block px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        {/* Cart Items */}
                        <div className="space-y-8 mb-12">
                            {cartItems.map((item) => (
                                <div key={item._id} className="flex flex-col sm:flex-row items-start justify-between border-b pb-8 group">
                                    <div className="flex items-start gap-6 w-full sm:w-2/3">
                                        <img 
                                            src={item.image_url[0]} 
                                            alt={item.name} 
                                            className="w-32 h-32 object-contain rounded-lg border-2 border-gray-100"
                                        />
                                        <div className="space-y-2">
                                            <h2 className="text-xl font-light text-gray-900">{item.name}</h2>
                                            <p className="text-gray-600">SKU: {item.sku}</p>
                                            <div className="flex items-center gap-4">
                                                <span className="text-lg font-medium">₹{item.current_price?.toLocaleString()}</span>
                                                {item.original_price && (
                                                    <span className="text-gray-400 line-through">₹{item.original_price?.toLocaleString()}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/3 mt-4 sm:mt-0 flex sm:flex-col items-end justify-between h-full">
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1">
                                            <button 
                                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                            >
                                                −
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        
                                        <div className="flex items-center gap-4 mt-4">
                                            <p className="text-lg font-medium">₹{(item.current_price * item.quantity)?.toLocaleString()}</p>
                                            <button 
                                                onClick={() => removeItem(item._id)}
                                                className="text-gray-400 hover:text-red-600 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="flex flex-col items-end border-t pt-8">
                            <div className="w-full lg:w-96 space-y-6">
                                <div className="flex justify-between text-xl font-medium">
                                    <span>Subtotal:</span>
                                    <span>₹{calculateSubtotal().toLocaleString()}</span>
                                </div>

                                <div className="space-y-4">
                                    <Link 
                                        to="/notebook" 
                                        className="block w-full py-4 text-center border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                                    >
                                        Continue Shopping
                                    </Link>
                                    <button 
                                        className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-8 text-center text-sm text-gray-500 space-y-2">
                                    <p>PAN India Shipping • 7-Day Return Policy</p>
                                    <p>Product Marketed By: Corporate</p>
                                    <Link to="/home" className="text-black hover:underline">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;