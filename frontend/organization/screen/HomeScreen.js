import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Dashboard Overview</Text>

      {/* Active Riders */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Active Riders</Text>
        <Text style={styles.cardValue}>25</Text>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => navigation.navigate("Riders")}
        >
          <Text style={styles.cardButtonText}>Manage Riders</Text>
        </TouchableOpacity>
      </View>

      {/* Deliveries Overview */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Deliveries</Text>
        <Text style={styles.cardValue}>
          Completed: 120 | Pending: 15 | Canceled: 5
        </Text>
        <TouchableOpacity
          style={styles.cardButton}
          // onPress={() => navigation.navigate("Orders")}
        >
          <Text style={styles.cardButtonText}>View Orders</Text>
        </TouchableOpacity>
      </View>

      {/* Earnings Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Earnings</Text>
        <Text style={styles.cardValue}>₦1,250,000</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>View Earnings</Text>
        </TouchableOpacity>
      </View>

      {/* Real-time Requests */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Real-time Requests</Text>
        <Text style={styles.cardValue}>
          Accepted: 5 | In Progress: 3 | Declined: 2
        </Text>
        <TouchableOpacity
          style={styles.cardButton}
          // onPress={() => navigation.navigate("Requests")}
        >
          <Text style={styles.cardButtonText}>View Requests</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000B58",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000B58",
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 15,
  },
  cardButton: {
    backgroundColor: "#000B58",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  cardButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
