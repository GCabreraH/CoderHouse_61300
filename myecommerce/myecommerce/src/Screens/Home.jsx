import { View,Text } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

function Home(){
    return(
        <View style={{flex:1}}>
            <Text>Inicio: texto de Home.jsx</Text>
            <Header title={'Inicio por props para reutilizar'} />
            <Categories />
            
        </View>
    );
}

export default Home;