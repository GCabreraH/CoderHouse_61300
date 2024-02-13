/*Este componente permite reutilizar categorias sin necesidad de codigicarlas cada una.*/

import { View, Text } from "react-native";

function Categories(){
    return(
        <View>
            <Text style={{fontSize:15}}>Poleras</Text>
            <Text style={{fontSize:15}}>Pantalones</Text>
            <Text style={{fontSize:15}}>Camisas</Text>
        </View>
    );
}

export default Categories;