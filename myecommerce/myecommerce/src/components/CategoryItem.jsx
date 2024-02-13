/*Este componente es el que vamos a llamar cuando estemos en el flatList. Renderizará
lo que esta en renderItem (sera cada Item o categoria).
Lo que este componente renderice se debe pasar por props a Categories.
*/

import { StyleSheet, Text, View } from 'react-native'


const CategoryItem = ({ category }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </View>
    );
  };
  
  export default CategoryItem;
  
  const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
      fontSize: 20,
    },
  });