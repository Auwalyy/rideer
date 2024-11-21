import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, Pressable, StyleSheet, Modal, TouchableOpacity } from 'react-native';


const Welcome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Handler for user selection
  const handleUserSelection = (type) => {
    setModalVisible(false); // Automatically close the modal
    navigation.navigate('Signup', { userType: type });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Riderr</Text>
        <Text style={styles.description}>
          Experience instant delivery services right at your doorstep. Get started now!
        </Text>
      </View>

      <View style={styles.getStartedSection}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subTitle}>Explore the app today and enjoy seamless delivery services</Text>

        {/* Join Now Button */}
        <TouchableOpacity style={styles.joinButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>

        {/* Login Option */}
        <View style={styles.loginSection}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButton}> Login</Text>
          </Pressable>
        </View>
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
              onPress={() => handleUserSelection('vendor')}
            >
              <Text style={styles.optionText}>Signup as Vendor</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserSelection('individual')}
            >
              <Text style={styles.optionText}>Signup as Individual</Text>
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
    backgroundColor: '#000B58',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  getStartedSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  joinButtonText: {
    color: '#000B58',
    fontSize: 16,
    fontWeight: '600',
  },
  loginSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#ffffff',
  },
  loginButton: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000B58',
    marginBottom: 20,
  },
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#000B58',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000B58',
  },
  closeButtonText: {
    color: '#000B58',
    fontSize: 14,
    fontWeight: '600',
  },
});
