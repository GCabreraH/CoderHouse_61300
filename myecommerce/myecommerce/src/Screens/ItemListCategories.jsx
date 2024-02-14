/*este componente corresponde a la primera pantalla del Wireframe: Ecommerce.
contendrá el listado de categorias siendo la "screen 1".*/

import { View, FlatList } from "react-native";
import products from "../data/products";

function ItemListCategories(){
    return(
        <View>
            <FlatList
            data={products}
            renderItem={}
            keyExtractor={}
            
            />
        </View>
    );
}

export default ItemListCategories;