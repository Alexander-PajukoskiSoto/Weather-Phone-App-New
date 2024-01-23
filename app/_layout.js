import { Stack } from "expo-router";

const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle:"Home Page"
            }}
            />
            <Stack.Screen name="news/news" options={{
                headerTitle:"News"
            }}/>
        </Stack>
    )
}

export default RootLayout;