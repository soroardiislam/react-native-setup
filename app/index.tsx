import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl bg-red-300 text-green-900">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
