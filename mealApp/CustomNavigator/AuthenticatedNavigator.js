import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";
import DishesScreen from "../screens/DishesScreen";
import DishDetailScreen from "../screens/DishDetailScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";

const AuthenticatedNavigator = ({}) => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerRight: () => (
            <MaterialIcons
              style={{ marginRight: 10 }}
              onPress={() => {
                dispatch(logout());
              }}
              name="logout"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen name="DishList" component={DishesScreen} />
      <Stack.Screen name="DisheDetail" component={DishDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
