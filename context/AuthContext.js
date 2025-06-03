import { useContext, createContext, useState,useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { account,avtars,databases,appwriteConfig } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";
import LoadingScreen from '../components/LoadingScreen';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(false);
  const [user, setUser] = useState(false);

    useEffect(()=> {
        init();
    },[])
    const init = async () => {
        checkAuth();
    }
    const checkAuth = async () => {
        try {
            const responseSession = await account.getSession("current");
            setSession(responseSession);

            const responseUser = await account.get();
            setUser(responseUser);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

  const signin = async ({ email, password }) => {
    setLoading(true);
    try {
      const responseSession = await account.createEmailPasswordSession(email, password);
      setSession(responseSession);
      const responseUser = await account.get();
      setUser(responseUser);
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false);
    }
  };

const createUser = async({email, password, username}) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avtarUrl = avtars.getInitials(username);
    await signin({email, password});
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avtar: avtarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

  const signout = async () => {
    setLoading(true);
     await account.deleteSession('current');
     setSession(null);
     setUser(null);
     setLoading(false);
  };

  const contextData = { session, user, signin, signout, createUser };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <SafeAreaView>
          <LoadingScreen visible={loading} message="Please wait..." />
        </SafeAreaView>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthContext, AuthProvider };
