import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {};
  const signIn = async () => {};

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      ></TextInput>
      <TextInput
        textContentType="password"
        style={styles.input}
        placeholder="Password"
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
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
  },
});
