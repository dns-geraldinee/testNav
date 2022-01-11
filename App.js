import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  nav: {
    backgroundColor: "#000",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default function App() {
  const [newNav, setnewNav] = React.useState("Home");
  function navChange(navSelect) {
    this._panel.hide();
    setnewNav(navSelect);
  }
  function MenuStack({ route, navigation }) {
    return (
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navChange("Home")}
        >
          <Text>Go to Home Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navChange("Profile")}
        >
          <Text>Open Profile Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navChange("Dashboard")}
        >
          <Text>Open Dashboard Screen</Text>
        </TouchableOpacity>
      </View>
      // <NavigationContainer>
      //   <Stack.Navigator intialRouteName="Home">
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{ title: "Home Page" }}
      //     />
      //     <Stack.Screen
      //       name="Profile"
      //       component={Profile}
      //       options={{ title: "Profile Page" }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {/* here is where the component needs to go*/}
      {newNav === "Home" && <HomeScreen />}
      {newNav === "Profile" && <Profile />}
      {newNav === "Dashboard" && <Dashboard />}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Button title="Show Panel" onPress={() => this._panel.show()} />
      <SlidingUpPanel
        ref={(c) => {
          this._panel = c;
        }}
        allowDragging={true}
        // onDragStart={() => this._panel.show()}
      >
        <MenuStack />
      </SlidingUpPanel>
    </View>
  );
}

{
  /* <NavigationContainer>
          <Stack.Navigator intialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home Page" }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ title: "Profile Page" }}
            />
          </Stack.Navigator>
        </NavigationContainer> */
}
{
  /* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuStack} />
          </Stack.Navigator>
        </NavigationContainer> */
}
{
  /* <View style={styles.container}>
          <Text> Here is the content inside panel</Text>
          <Button title="Hide" onPress={() => this._panel.hide()} />
        </View> */
}

// <View>
{
  /* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text>Go to Home Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Open Profile Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text>Open Dashboard Screen</Text>
      </TouchableOpacity> */
}
// </View>
