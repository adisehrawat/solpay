import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from "@/context/AuthContext";

const home = () => {
    const { user,signout } = useAuth();

  return (
    <SafeAreaView className='bg-black justify-center h-full'>
      <Text className='text-white'>Hello {user.name}</Text>
      <TouchableOpacity className="bg-white rounded-full py-4 m-5 flex" onPress={signout}>
                      <Text className="font-rubik-medium text-black m-auto text-xl">Sign out</Text>
                </TouchableOpacity>
    </SafeAreaView>
  )
}

export default home