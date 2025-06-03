import { ScrollView, Image, Text, TouchableOpacity } from "react-native";
import './global.css';
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useAuth } from "../context/AuthContext";

export default function Index() {
    const { session } = useAuth();
    if (session) return <Redirect href="/(app)/home" />
    else {
        return (
            <>
                <SafeAreaView
                    className="bg-black h-full"
                >
                    <ScrollView contentContainerClassName="h-full">
                        <Image source={images.solpay} className="w-full h-3/6 m-auto" />
                        <Link href="/signup" asChild>
                            <TouchableOpacity className="bg-white rounded-full py-4 m-5">
                                <Text className="font-rubik-medium text-black m-auto text-xl">Get Started</Text>
                            </TouchableOpacity>
                        </Link>

                    </ScrollView>
                </SafeAreaView>

            </>
        );
    }
}

