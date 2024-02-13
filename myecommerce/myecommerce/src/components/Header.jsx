import { View, Text } from "react-native";

function Header({title}){
    return(
        <View>
            <Text style={{fontSize:20}}>{title}</Text>
        </View>
    );
}

export default Header;
