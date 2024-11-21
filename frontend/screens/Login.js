import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.helloContainer}>
        <Text style={styles.signInText}>Hey, Welcome Back</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome
          name="user"
          size={20}
          color="#6753fc"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Fontisto
          name="locked"
          size={20}
          color="#6753fc"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupRedirect}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupButtonText}>
            Sign Up <FontAwesome name="arrow-right" size={14} color="#6753fc" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  helloContainer: {
    marginBottom: 20,
  },

  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#6c757d",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6753fc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50,
    backgroundColor: "#ffffff",
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  forgotText: {
    textAlign: "right",
    color: "#6753fc",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#6753fc",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  signupRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: "#6c757d",
  },
  signupButtonText: {
    fontSize: 14,
    color: "#6753fc",
    fontWeight: "500",
    marginLeft: 5,
  },
});
