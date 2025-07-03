import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({});

export function UserContextProvider({children}) {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getUser() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if(token) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    } catch (error) {
      console.log("Error occured while checking user");
    } finally{
      setLoading(false);
    }
  }

    let value = {
        setIsUserLoggedIn,
        isUserLoggedIn,
        loading,
        setLoading,
        getUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}