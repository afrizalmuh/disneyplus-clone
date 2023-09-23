import React from 'react';

function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col gap-3 items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <h1 className='text-white'>Please wait</h1>
    </div>
  );
}

export default Loading;
