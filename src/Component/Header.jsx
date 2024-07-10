import React from "react";

const Header = () => {
    return (
        <div className="bg-gray-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Start React</h1>
                <nav className="space-x-4">
                    <a href="#" className="text-white hover:text-white">
                        Home
                    </a>
                    <a href="#" className="text-gray-200 hover:text-white">
                        About
                    </a>
                    <a href="#" className="text-gray-200 hover:text-white">
                        Service
                    </a>
                    <a href="#" className="text-gray-200 hover:text-white">
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
