import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+234 801 234 5678",
    company: "Acme Logistics",
  };

  const menuOptions = [
    { id: "1", title: "FAQs" },
    { id: "2", title: "Settings" },
    { id: "3", title: "Log Out" },
  ];

  const handleMenuOptionClick = (option) => {
    console.log(option);
    setModalVisible(false);
    // Handle specific actions for each option
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Text style={styles.screenTitle}>Profile</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome name="bars" size={24} color="#000B58" />
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profilePicture}
        />
      </View>

      {/* User Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>{userDetails.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{userDetails.email}</Text>

        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>{userDetails.phone}</Text>

        <Text style={styles.label}>Company Name</Text>
        <Text style={styles.value}>{userDetails.company}</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setIsEditing(true)}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Top Menu Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Menu</Text>
            <FlatList
              data={menuOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleMenuOptionClick(item.title)}
                >
                  <Text style={styles.modalOptionText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6753fc",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#d3d3d3",
  },
  infoContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6c757d",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ced4da",
    color: "#000",
  },
  editButton: {
    backgroundColor: "#6753fc",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6753fc",
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#6753fc",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#6753fc",
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeModalButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
