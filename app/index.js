import { Link } from 'expo-router'
import { Text, View } from 'react-native';

const HomePage = ()=>{
    return(
        <View>
            <Text>Home Page</Text>
            <Link href="/news/news">Go to news</Link>
        </View>
    )
}

export default HomePage;