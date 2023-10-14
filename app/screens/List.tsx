import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { TextInput } from "react-native";

export interface Todo {
  title: string;
  done: boolean;
  id: string;
}
const List = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, "todos");

    const subsriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const todos: Todo[] = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          } as Todo);
        });
        setTodos(todos);
      },
    });

    return () => subsriber();
  }, []);

  const addTodo = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, "todos"), {
      title: todo,
      done: false,
    });
    console.log("~ file: List.tsx:12 ~ addTodo ~doc:", doc);
    setTodo("");
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    return <Text>{item.title}</Text>;
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
      {todos.length > 0 && (
        // <View>
        //   {todos.map((todo) => (
        //     <Text key={todo.id}>{todo.title}</Text>
        //   ))}
        // </View>
        <View>
          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo: Todo) => todo.id}
          />
        </View>
      )}
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
