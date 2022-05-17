import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image} from 'react-native';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

export default function App() {


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Dashboard />
      </View>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#4a4a4a',
    padding: '20px',
  },
  content: {
    
  },
});
