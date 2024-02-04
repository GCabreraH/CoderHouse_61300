import {StyleSheet, Text, View} from "react-native";

/*
-Un componente es una funcion que hace algo y puede retornar algo.
-se agregó props para pasarle desde el componente padre(app.js) los argumentos de un nuevo Usuario a renderear
props.usuario permite que llegue la informacion desde el app.js y pueda ser rendereado segun el detalle del 
componente Usuario*/
function Usuario(props){
    return(
    <View>
    <Text>{props.usuario}</Text>
    </View>
    );
}

//todo componente se debe exportar para que sea usado
export default Usuario