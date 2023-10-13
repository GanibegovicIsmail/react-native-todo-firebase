import { Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const List = () => {
  const navigation = useNavigation();

  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, "todos"), {
      title: "I am a test",
      done: false,
    });
    console.log("~ file: List.tsx:12 ~ addTodo ~doc:", doc);
  };

  return (
    <View>
      <Button onPress={() => addTodo} title="Add Todo" />
    </View>
  );
};

export default List;
