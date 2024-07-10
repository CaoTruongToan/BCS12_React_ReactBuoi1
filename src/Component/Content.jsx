import React from 'react';

import imagesrc1 from '../assets/img/1.png';
import imagesrc2 from '../assets/img/2.jpg';
import imagesrc3 from '../assets/img/3.jpg';
import imagesrc4 from '../assets/img/4.jpg';

const Content = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {/* Card 1 */}
      <div className="bg-white p-2 rounded-lg shadow-md border border-purple-500 flex flex-col items-center">
        <img src={imagesrc1} alt="Image" className="w-full h-auto rounded-lg mb-4 p-0" />
        <h2 className="text-lg font-bold mb-2 text-center">Card Title 1</h2>
        <p className="text-gray-700 mb-4 text-center" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 rounded-lg">
          Find Out More!
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-2 rounded-lg shadow-md border border-purple-500 flex flex-col items-center">
        <img src={imagesrc2} alt="Image" className="w-full h-auto rounded-lg mb-4 p-0" />
        <h2 className="text-lg font-bold mb-2 text-center">Card Title 2</h2>
        <p className="text-gray-700 mb-4 text-center" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 rounded-lg">
          Find Out More!
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-2 rounded-lg shadow-md border border-purple-500 flex flex-col items-center">
        <img src={imagesrc3} alt="Image" className="w-full h-auto rounded-lg mb-4 p-0" />
        <h2 className="text-lg font-bold mb-2 text-center">Card Title 3</h2>
        <p className="text-gray-700 mb-4 text-center" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 rounded-lg">
          Find Out More!
        </button>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-2 rounded-lg shadow-md border border-purple-500 flex flex-col items-center">
        <img src={imagesrc4} alt="Image" className="w-full h-auto rounded-lg mb-4 p-0" />
        <h2 className="text-lg font-bold mb-2 text-center">Card Title 4</h2>
        <p className="text-gray-700 mb-4 text-center" style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 rounded-lg">
          Find Out More!
        </button>
      </div>
    </div>
  );
};

export default Content;
