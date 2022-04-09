import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <View>
        <TextInput
          style={styles.inputField}
          placeholderTextColor="#444"
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputField}
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="Passwrod"
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text>Forgot password?</Text>
      </View>
      <Button title="Log in" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: 320,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
});
