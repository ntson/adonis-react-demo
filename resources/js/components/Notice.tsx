import React from 'react';

const Notice = ({ type, message }) => {
  const types = {
    info: 'bg-green-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`${types[type]} w-full py-4 text-white text-center`}>
      {message}
    </div>
  );
};

export default Notice;
