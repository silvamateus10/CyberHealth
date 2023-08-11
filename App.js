import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import Title from './src/components/Title/'
import Main from './src/components/Main/'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Title/>
      <Main/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80
  },
});
