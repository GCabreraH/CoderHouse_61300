/*Este componente permite reutilizar categorias sin necesidad de codigicarlas cada una.
Aquí se va a llamar a categories.jsx para el renderizado de cada itemcategory.
*/

import { View, Text, FlatList } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

function Categories(){
    return(
        <View>
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