/*Este componente es el que vamos a llamar cuando estemos en el flatList. Renderizará
lo que esta en renderItem (sera cada Item o categoria).
Lo que este componente renderice se debe pasar por props a Categories.
*/

import { StyleSheet, Text, View } from 'react-native'
import Card from "./Card";


const CategoryItem = ({ category }) => {
    return (
        <Card style={{paddingTop: 40}}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    );
  };
  
  export default CategoryItem;
  
  const styles = StyleSheet.create({
    
    text: {
      fontSize: 20,
    },
  });