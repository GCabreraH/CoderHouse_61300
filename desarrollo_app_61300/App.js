import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import Usuario from './src/components/Usuario';
import cartLogo from './assets/cart.png'
const imagenCarrito = "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323859lqxv.png";

const DATA = [
  {"name": "Polera", "id": 1},
  {"name": "Pantalón", "id": 2},
  {"name": "Zapatillas", "id": 3},
  {"name": "Cartera", "id": 4},
  {"name": "Chaqueta", "id": 5},
  {"name": "Vestido", "id": 6},
  {"name": "Bufanda", "id": 7},
  {"name": "Camiseta", "id": 8},
  {"name": "Gorra", "id": 9},
  {"name": "Botas", "id": 10},
  {"name": "Blusa", "id": 11},
  {"name": "Sombrero", "id": 12},
  {"name": "Calcetines", "id": 13},
  {"name": "Guantes", "id": 14},
  {"name": "Chaleco", "id": 15},
  {"name": "Faldas", "id": 16},
  {"name": "Corbata", "id": 17},
  {"name": "Traje de baño", "id": 18},
  {"name": "Abrigo", "id": 19},
  {"name": "Pijama", "id": 20},
  {"name": "Cinturón", "id": 21},
  {"name": "Ropa interior", "id": 22},
  {"name": "Sandalias", "id": 23},
  {"name": "Mochila", "id": 24},
  {"name": "Sudadera", "id": 25},
  {"name": "Poncho", "id": 26},
  {"name": "Chándal", "id": 27},
  {"name": "Pulsera", "id": 28},
  {"name": "Gafas de sol", "id": 29},
  {"name": "Jersey", "id": 30},
  {"name": "Máscara facial", "id": 31},
  {"name": "Paraguas", "id": 32},
  {"name": "Bolso", "id": 33}
];

export default function App() {

  //useState y useEffect hooks para controlar el estado de la aplicacion y el ciclo de vida
const [counter, setCounter] = useState(0);
const [inputValue, setInputValue] = useState('');
const [inputAdd, setInputAdd] = useState('');

const addCounter = () => setCounter(counter+1);
const handleInputChange = (value) =>setInputValue(value);
const handleInputAdd = (value) => setInputAdd(DATA.push(value));


  return (
    <View>
        <View style={styles.header}>
          <View style={styles.carrito}>
            <Text>Carrito</Text>
            <Image style={{width: 50, height: 50}} source={{uri: imagenCarrito}} />
            
          </View>

          <View style={styles.agregadorProductos}>
          <TextInput value={inputValue} onChangeText={handleInputChange} style={styles.inputText} placeholder='Ingrese un productos' />
          <Pressable onPressOut={handleInputAdd}> 
            <Text style={{fontSize: 40}}>+</Text>
          </Pressable>

          </View>
        </View>
    <View style={styles.productList}>
      {/*DATA.map((items)=> (
        <View key={items.id} style={styles.agregadorProductos}>
          <Text style={styles.productList}>Producto: {items.name}</Text>
        </View>
      ))*/}

      <FlatList data={DATA} 
      renderItem={({ item }) => (
        <View style={styles.agregadorProductos}>
          <Text style={styles.productList}>Producto: {item.name}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      
      
      />

      
      </View>

      <Pressable onPress={addCounter} >
        <Text style={{fontSize:30}}>{counter}</Text>
        <Text>{inputValue}</Text>
      </Pressable>
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
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 400,
  },
  agregadorProductos:{
    flexDirection: "row", gap: 10
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
