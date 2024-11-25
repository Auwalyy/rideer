import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const riders = [
  { id: "1", name: "John Doe", status: "Active", phone: "123-456-7890" },
  { id: "2", name: "Jane Smith", status: "Inactive", phone: "987-654-3210" },
];

const Riders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riders</Text>
      <FlatList
        data={riders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, styles[item.status.toLowerCase()]]}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Phone: {item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Riders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
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
    padding: 15,
    marginVertical: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000B58",
  },
  active: {
    borderLeftWidth: 5,
    borderLeftColor: "green",
  },
  inactive: {
    borderLeftWidth: 5,
    borderLeftColor: "gray",
  },
});
