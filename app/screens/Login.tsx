import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signUp = async () => {
    const after = createUserWithEmailAndPassword(auth, email, password);
    console.log("firebase ~ file: Login.tsx:16 ~ signIn ~ after:", after);
  };
  const signIn = async () => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("firebase ~ file: Login.tsx:16 ~ signIn ~ user:", user);
    alert("Check your emails!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"gray"}
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      ></TextInput>
      <TextInput
        textContentType="password"
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"gray"}
        onChangeText={(text: string) => setPassword(text)}
        value={password}
      ></TextInput>
      <Button onPress={() => signUp()} title="Create Account" />
      <Button onPress={() => signUp()} title="Sign In" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginVertical: 4,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
  },
});
