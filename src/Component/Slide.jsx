import React from "react";

const Slide = () => {
    return (
        <div className="h-96 bg-gray-200 text-black flex items-center justify-center mt-3">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                    A Warm Welcome!
                </h1>
                <p className="text-lg lg:text-xl xl:text-2xl mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Slide;
