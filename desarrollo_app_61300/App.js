import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, Modal, RemoveModal } from 'react-native';
import { useState } from 'react';
import Usuario from './src/components/Usuario';
import cartLogo from './assets/cart.png'
const imagenCarrito = "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323859lqxv.png";
const borrar = "https://purepng.com/public/uploads/large/purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebiniconclipart-14215266460202ha6s.png";

const DATA = [
  {"name": "Polera", "id": 1},
  {"name": "Pantalón", "id": 2},
  {"name": "Zapatillas", "id": 3},


];

export default function App() {

  //useState y useEffect hooks para controlar el estado de la aplicacion y el ciclo de vida
const [counter, setCounter] = useState(0);
const [inputValue, setInputValue] = useState('');
const [cartItems, setCartItems] = useState([]);
const [modalVisible, setModalVisible] = useState(false);


const addCounter = () => setCounter(counter+1);
const handleInputChange = (value) =>setInputValue(value);
const handleModal = ()=> setModalVisible(true);

const addItem = () => {
const newItem = {
  name: (inputValue),
  id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
}

  const RemoveModal = ()=> {
    return(
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer} >
        <Text style={{fontSize: 20}}> ¿Quieres eliminar el producto? </Text>
        <Pressable>
        <Text>Sí!</Text>
        </Pressable>
        <Pressable onPress={()=> setModalVisible(false)}>
        <Text>No!!</Text>
        </Pressable>
      </View>

    </Modal>
        );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <RemoveModal />
        <View style={styles.header}>
          <View style={styles.carrito}>
            <Text>Carrito</Text>
            <Image style={{width: 50, height: 50}} source={{uri: imagenCarrito}} />
            
          </View>

          <View style={styles.agregadorProductos}>
          <TextInput value={inputValue} onChangeText={handleInputChange} style={styles.inputText} placeholder='Ingrese un productos' />
          <Pressable onPress={addItem}> 
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

      <FlatList data={cartItems} renderItem={({ item }) => (
        <View style={{ width: 400, flexDirection: 'row'}}>
          <Text style={styles.productList}>Producto: {item.name}</Text>
          <Pressable onPress={handleModal}>
            <Image style={{width: 50, height: 50}} source={{uri: borrar}} />
          </Pressable>   
        </View>
      )}
      keyExtractor={item => item.id}
           
      />

      
      </View>

      <Pressable onPress={addCounter} >
        <Text style={{fontSize:30}}>{counter}</Text>
        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: '#ededed',
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
     
  },  
  
  modalContainer:{
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation:5,
         
  },
  
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