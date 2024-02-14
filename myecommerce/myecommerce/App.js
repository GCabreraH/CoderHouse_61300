import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";


export default function App() {
  return (
    <>
  <Home />
  <ItemListCategories />
  </>
  );
      
}


