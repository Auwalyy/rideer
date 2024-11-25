import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const { width } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavigateSignup = (userType) => {
    setModalVisible(false);
    navigation.navigate("Signup", { userType });
  };

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.signupButtonText}>
            Sign Up <FontAwesome name="arrow-right" size={14} color="#6753fc" />
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal for account type selection */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Account Type</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleNavigateSignup("individual")}
            >
              <Text style={styles.modalButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleNavigateSignup("vendor")}
            >
              <Text style={styles.modalButtonText}>Vendor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6753fc",
  },
  modalButton: {
    backgroundColor: "#6753fc",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6753fc",
  },
  closeButtonText: {
    color: "#000B58",
    fontSize: 14,
    fontWeight: "600",
  },
});
