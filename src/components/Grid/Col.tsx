import React, { HTMLAttributes } from 'react';
import { StyleSheet } from 'react-native';

interface RowProps extends HTMLAttributes<HTMLDivElement> { }

const Col = ({ children, ...props }: RowProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};



export default Col;