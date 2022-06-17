import React from 'react';

const ErrorBox = ({ message }) => {
  return (
    <div className="bg-rose-500 text-white text-center rounded-md py-6 w-full">
      {message}
    </div>
  );
};

export default ErrorBox;
