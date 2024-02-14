/*Este componente permite reutilizar categorias sin necesidad de codigicarlas cada una.
Aquí se va a llamar a categories.jsx para el renderizado de cada itemcategory.
*/

import { View, Text, FlatList,StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import {colors} from "../Global/colors"

function Categories(){
    return(
        <View style={styles.container}>
            <FlatList 
                data={categories}
                renderItem={({item}) => (
                    <CategoryItem category={item}/>
                )}
                keyExtractor={(category) => category}
                            
            />       
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: colors.color_200,
        paddingHorizontal: 10,
    }

});