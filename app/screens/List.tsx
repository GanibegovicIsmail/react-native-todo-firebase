import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { TextInput } from "react-native";

const List = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const navigation = useNavigation();

  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, "todos"), {
      title: "I am a test",
      done: false,
    });
    console.log("~ file: List.tsx:12 ~ addTodo ~doc:", doc);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          onChangeText={(text: string) => setTodo(text)}
          value={todo}
        ></TextInput>
        <Button
          onPress={() => addTodo()}
          title="Add Todo"
          disabled={todo === ""}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidht: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
  },
});

export default List;
