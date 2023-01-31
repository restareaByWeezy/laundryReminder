import { HTMLAttributes } from 'react';

interface RowProps extends HTMLAttributes<HTMLDivElement> { }

const Row = ({ children, ...props }: RowProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Row;