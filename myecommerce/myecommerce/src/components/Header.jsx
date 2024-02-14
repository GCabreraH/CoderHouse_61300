import { View, Text, StyleSheet } from "react-native";
import {colors} from "../Global/colors";

function Header({title}){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30}}>{title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: colors.color_100,
    }

});