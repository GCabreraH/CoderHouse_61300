import { View,Text } from "react-native";
import Header from "../components/Header";

function Home(){
    return(
        <View>
            <Header title={'Inicio por props para reutilizar'} />
            <Text>Inicio: texto de Home.jsx</Text>
            
        </View>
    );
}

export default Home;