import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from "../context/AuthContext";
// import { CardStyleInterpolators } from '@react-navigation/stack';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Rubik-Bold": require('../assets/fonts/Rubik-Bold.ttf'),
        "Rubik-ExtraBold": require('../assets/fonts/Rubik-ExtraBold.ttf'),
        "Rubik-Light": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-Medium": require('../assets/fonts/Rubik-Medium.ttf'),
        "Rubik-Regular": require('../assets/fonts/Rubik-Regular.ttf'),
        "Rubik-SemiBold": require('../assets/fonts/Rubik-SemiBold.ttf'),
    });

    useEffect(() => {
        if (error) {
            console.error("Font loading failed:", error);
            SplashScreen.hideAsync();
        }
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }
    return (
        <AuthProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            >
            </Stack>
            <StatusBar style="light" />
        </AuthProvider>
    );
}