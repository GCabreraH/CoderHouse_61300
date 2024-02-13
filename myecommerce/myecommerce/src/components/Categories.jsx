/*Este componente permite reutilizar categorias sin necesidad de codigicarlas cada una.*/

import { View, Text, FlatList } from "react-native";
import categories from "../data/categories.json";

function Categories(){
    return(
        <View>
            <FlatList 
                data={categories}
                renderItem={({item}) => (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )}
                keyExtractor={(category) => category}
                    
            
            />       
        </View>
    );
}

export default Categories;