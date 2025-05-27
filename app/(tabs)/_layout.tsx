import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const TabsLayout = () => {
  return (
    <>
            <Stack screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}>
                <Stack.Screen name="home" />
            </Stack>
            <StatusBar style="light" />
        </>
  )
}

export default TabsLayout