import { Slot, Redirect } from 'expo-router';
import { useAuth } from "../../context/AuthContext";
import React from 'react'; // Import React

const AuthWrapper = () => {
  const { session } = useAuth(); 
  return !session ? <Redirect  href="/signin"/> : <Slot/>
};

const TabLayout = () => {
  return <AuthWrapper />;
};

export default TabLayout;