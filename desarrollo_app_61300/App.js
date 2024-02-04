import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
      <Usuario usuario="Fernando"/>
      <Text>Chau</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
