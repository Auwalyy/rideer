import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const Signup = ({ route, navigation }) => {
  const { userType } = route.params || { userType: "individual" }; // Default to 'individual' if not specified
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Please fill out all fields");
      return;
    }
    if (userType === "vendor" && (!businessName || !businessAddress)) {
      alert("Please provide your business details");
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    setBusinessName("");
    setBusinessAddress("");
    alert(
      `${
        userType === "vendor" ? "Vendor" : "Individual"
      } account created successfully!`
    );

    if (userType === "vendor") {
      navigation.navigate("TabNav");
    } else {
      navigation.navigate("TabNavigation");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Lets get Started</Text>

        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#6753fc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#6753fc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#6753fc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {userType === "vendor" && (
          <>
            <View style={styles.inputContainer}>
              <Icon
                name="store"
                size={20}
                color="#6753fc"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Business Name"
                value={businessName}
                onChangeText={(text) => setBusinessName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="location-on"
                size={20}
                color="#6753fc"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Business Address"
                value={businessAddress}
                onChangeText={(text) => setBusinessAddress(text)}
              />
            </View>
          </>
        )}
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
          color="#6753fc"
        >
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginRedirect}
          onPress={() => navigation.navigate("Login")} // Ensure 'Login' is a valid route
        >
          <Text style={styles.redirectText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  form: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#6c757d",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#6753fc",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: "#6753fc",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
  loginRedirect: {
    marginTop: 20,
    alignItems: "center",
  },
  redirectText: {
    color: "#6753fc",
    fontSize: 16,
    fontWeight: "500",
  },
});
