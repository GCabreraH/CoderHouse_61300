import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import Usuario from './src/components/Usuario';
import cartLogo from './assets/cart.png'
const imagenCarrito = "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323859lqxv.png";

export default function App() {
  return (
    <View>
        <View style={styles.header}>
          <View style={styles.carrito}>
            <Text>Carrito</Text>
            <Image style={{width: 50, height: 50}} source={{uri: imagenCarrito}} />
            {/*<Image style={{width: 50, height: 50}} source={cartLogo} />*/}
          </View>

          <View style={styles.agregadorProductos}>
          <TextInput style={styles.inputText} placeholder='Ingrese un productos' />
          <Pressable> 
            <Text style={{fontSize: 40}}>+</Text>
          </Pressable>

          </View>
        </View>
    <View style={styles.productList}>
      <Text style={styles.productos}>Poleras</Text>
      <Text style={styles.productos}>Pantalon</Text>
      <Text style={styles.productos}>Gorro</Text>      
      <Text style={styles.productos}>Poleras</Text>
      <Text style={styles.productos}>Pantalon</Text>
      <Text style={styles.productos}>Gorro</Text>      
      <Text style={styles.productos}>Poleras</Text>
      <Text style={styles.productos}>Pantalon</Text>
      <Text style={styles.productos}>Gorro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  header:{
  backgroundColor: '#C1F8F8',
  alignSelf: 'stretch',
   
},
  carrito: {
  flexDirection: 'row', justifyContent: "center", gap: 8, alignItems: "center" 

  },

    productList: {
    paddingTop: 20,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  agregadorProductos:{
    flexDirection: "row", gap: 30
  },

  inputText:{
    borderColor:'red', 
    borderWidth: 2, 
    paddingHorizontal: 20, 
    paddingVertical: 20,
    borderRadius: 5,
    width: "80%",
  },

    productos:{
    fontSize: 30, 
    fontWeight: "bold", 
    padding: 4

  }
});
