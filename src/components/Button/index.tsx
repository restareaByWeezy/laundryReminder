import { Button as PaperButton } from 'react-native-paper'

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <PaperButton>
      {children}
    </PaperButton>
  );
};

export default Button;