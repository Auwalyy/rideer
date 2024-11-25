import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";

const Welcome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Handler for user selection
  const handleUserSelection = (type) => {
    setModalVisible(false); // Automatically close the modal
    navigation.navigate("Signup", { userType: type });
  };

  function handleLogin() {}
  function handleSignup() {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>Riderr</Text>
        <Text style={styles.subTitle}>
          Delivering Convenience one ride at a time
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper]}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.signupButtonText}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: "white" }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Options Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Account Type</Text>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserSelection("individual")}
            >
              <Text style={styles.optionText}>Individual</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserSelection("vendor")}
            >
              <Text style={styles.optionText}>Organization</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 40,
    alignContent: "center",
  },
  logo: {
    paddingTop: 50,
    marginVertical: 30,
    margin: "auto",
    borderRadius: 50,
  },
  image: {
    marginVertical: 20,
    height: 250,
    width: 231,
    borderRadius: 50,
  },

  title: {
    fontSize: 40,
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    marginVertical: 20,
  },

  buttonContainer: {
    margin: "auto",
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    width: "80%",
    height: 60,
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "white",
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
    backgroundColor: "#6753fc",
    borderColor: "blue",
  },
  loginButtonText: {
    fontSize: 18,
    color: "#6753fc",
  },
  signupButtonText: {
    fontSize: 18,
    color: "white",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6753fc",
    marginBottom: 20,
  },
  optionButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#6753fc",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  closeButton: {
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
