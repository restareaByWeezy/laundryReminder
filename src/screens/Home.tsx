import Button from 'components/Button';
import Col from 'components/Grid/Col';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {

  return (
    <View style={styles.container}>
      <Col><Text></Text></Col>
      <Button>aaa</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});