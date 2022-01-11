import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are on Profile Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
