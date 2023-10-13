import { Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const List = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>List</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Open Details"
      />
    </View>
  );
};

export default List;
