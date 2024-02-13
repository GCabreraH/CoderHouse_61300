/*Este componente es el que vamos a llamar cuando estemos en el flatList. Renderizará
lo que esta en renderItem (sera cada Item o categoria).
Lo que este componente renderice se debe pasar por props a Categories.
*/

import { StyleSheet, Text, View } from 'react-native'


const CategoryItem = ({category}) => {
  return (
    <View>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    text:{
        fontSize: 20,


    }


})