import React from 'react';

export interface BoxContainerProps {
  children: React.ReactNode;
  color?: string; // expecting a tailwind color class e.g. 'bg-primary'
}

function BoxContainer({ children, color = 'bg-primary' }: BoxContainerProps) {
  return (
    <div>
      <div className={`${color} h-[15.75rem]`} />
      <div className="my-12 -mt-32 flex justify-center">{children}</div>
    </div>
  );
}

export default BoxContainer;
