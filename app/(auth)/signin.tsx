import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import images from '@/constants/images';
import { useNavigation } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";


export default function SingIn() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setIsLogged } = useGlobalContext();

    const router = useRouter();
    const submit = async () => {
        if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      await signIn(email, password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } 

    };

    return (
        <SafeAreaView className="flex-1 bg-black px-5 justify-center">
            <TouchableOpacity className="absolute top-14 w-[40px] h-[40px] justify-center left-5 bg-white rounded-full" onPress={() => { navigation.goBack() }}>
                <Ionicons name="arrow-back" size={28} color="black" className='m-auto' />
            </TouchableOpacity>
            <View className="items-center mb-14">
                <Image source={images.sp} className="w-full h-[100px]" resizeMode='contain' />
            </View>
            <Text className='text-white font-rubik-bold text-4xl mb-2'>Welcome Back</Text>
            <Text className='text-white font-rubik-semibold text-3xl mb-10'>Sign In to {' '}
                <Text className='text-blue-500'>Solpay</Text>
            </Text>
            <Text className="text-white text-base mb-1 font-rubik-light">Enter Your Email</Text>
            <TextInput
                className="bg-white rounded-lg px-3 py-2 mb-4 text-base h-[40px]"
                placeholder=".......@gmail.com"
                placeholderTextColor="#aaa"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text className="text-white text-base mb-1 font-rubik-light">Enter Your Password</Text>
            <TextInput
                className="bg-white rounded-lg px-3 py-2 mb-10 text-base h-[40px]"
                secureTextEntry
                placeholder="**********"
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity className="bg-white rounded-full py-4 m-5 flex" onPress={submit}>
                <Text className="font-rubik-medium text-black m-auto text-xl">Sign In</Text>
            </TouchableOpacity>
            <Text className='text-white font-rubik-light mx-auto mb-3'>OR</Text>
            <Text className='text-white font-rubik mx-auto text-lg'>Dont have an account?{' '}
                <Link href="/signup" className='text-blue-500'>Sign Up</Link>
            </Text>
        </SafeAreaView>
    );
}
