/*Este componente es el que vamos a llamar cuando estemos en el flatList. Renderizará
lo que esta en renderItem (sera cada Item o categoria).
Lo que este componente renderice se debe pasar por props a Categories.
*/

import { StyleSheet, Text, View } from 'react-native'


const CategoryItem = ({ category }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>{category}</Text>
      </View>
    );
  };
  
  export default CategoryItem;
  
  const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
    },
    text: {
      fontSize: 20,
    },
  });