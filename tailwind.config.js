/** @type {import('tailwindcss').Config} */
export const content = ["./App.tsx","./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts.tsx}"];
export const presets = [require("nativewind/preset")];
export const theme = {
    extend: {
        fontFamily: {
            rubik: ['Rubik-Regular','sans-serif'],
            "rubik-bold": ['Rubik-Bold','sans-serif'],
            "rubik-extralold": ['Rubik-ExtraBold','sans-serif'],
            "rubik-light": ['Rubik-Light','sans-serif'],
            "rubik-medium": ['Rubik-Medium','sans-serif'],
            "rubik-semibold": ['Rubik-SemiBold','sans-serif'],
        }
    },
};
export const plugins = [];