import { useState } from 'react';

const SearchBar = ({ isSearchVisible, setIsSearchVisible, searchQuery, setSearchQuery }) => {

    return (
        <>
            {/* Search Input */}
            <div className={`absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg transition-all duration-300 ${isSearchVisible
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                <form className="flex items-center p-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-2 px-4 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-black w-48 md:w-64"
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 bg-black text-white rounded-r-full hover:bg-gray-800 transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>

        </>
    );
};

export default SearchBar;