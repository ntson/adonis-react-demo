import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, id, error, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        {...rest}
        className={`border-b ${
          error ? 'border-red-600' : 'border-gray-900'
        } py-1 outline-none focus:border-blue-600`}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Input;
