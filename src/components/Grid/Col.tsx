import { StyleSheet, View, ViewProps } from 'react-native';

interface RowProps extends ViewProps { }

const Col = ({ children, ...props }: RowProps) => {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  }
})




export default Col;