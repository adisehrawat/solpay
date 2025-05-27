
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
    return (
        <>
            <Stack screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}>
                <Stack.Screen name="signin" />
                <Stack.Screen name="signup" />
            </Stack>
            <StatusBar style="light" />
        </>
    )
}

export default _layout