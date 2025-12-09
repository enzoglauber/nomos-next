'use client';

import { ComponentProps, SyntheticEvent } from 'react';

export interface InputFilterProps extends ComponentProps<'input'> {
  label: string;
  onClickSearch?: (e: SyntheticEvent) => void;
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-text-primary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);


function InputFilter({ id, label, className, onClickSearch, ...props }: InputFilterProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-1 text-sm font-medium text-text-primary">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className="w-full pl-3 pr-10 py-2 border border-divider rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background-paper"
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button type="button" onClick={onClickSearch} className="focus:outline-none">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputFilter;
