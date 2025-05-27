import { ScrollView, Image, Text, TouchableOpacity } from "react-native";
import './global.css';
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Index() {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged){
         return <Redirect href="/home" />;
    }
    return (
        <SafeAreaView
            className="bg-black h-full"
        >
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.solpay} className="w-full h-3/6 m-auto" />
                <Link href="/(auth)/signup" asChild>
                    <TouchableOpacity className="bg-white rounded-full py-4 m-5">
                        <Text className="font-rubik-medium text-black m-auto text-xl">Get Started</Text>
                    </TouchableOpacity>
                </Link>

            </ScrollView>
        </SafeAreaView>
    );
}

