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
import { signup } from "../Api";

const { width } = Dimensions.get("window");

const Signup = ({ route, navigation }) => {
  const { userType } = route.params || { userType: "individual" }; // Default to 'individual' if not specified
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [loading, setLoading] = useState(false); // Loading state to show spinner or button disable

  const handleSignup = async () => {
    // Preventing multiple form submissions
    if (loading) return;

    if (!name || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    if (userType === "vendor" && (!businessName || !businessAddress)) {
      alert("Please provide your business details");
      return;
    }

    try {
      setLoading(true); // Set loading state to true
      const response = await signup({ email, name, password, businessName, businessAddress });
      
      // Assuming the response contains a success field or status
      if (response.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        setBusinessName("");
        setBusinessAddress("");
        alert(`${userType === "vendor" ? "Vendor" : "Individual"} account created successfully!`);
        
        if (userType === "vendor") {
          navigation.navigate("TabNav");
        } else {
          navigation.navigate("TabNavigation");
        }
      }
    } catch (error) {
      console.error("Signup error", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
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
              <Icon name="store" size={20} color="#6753fc" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Business Name"
                value={businessName}
                onChangeText={(text) => setBusinessName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="location-on" size={20} color="#6753fc" style={styles.icon} />
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
          onPress={handleSignup}
          disabled={loading} // Disable the button while loading
        >
          <Text style={styles.btnText}>
            {loading ? "Signing Up..." : "Signup"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginRedirect}
          onPress={() => navigation.navigate("Login")} // Ensure 'Login' is a valid route
        >
          <Text style={styles.redirectText}>
            Already have an account?
            <Icon name="arrow-forward" size={16} color="#6753fc" />
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
