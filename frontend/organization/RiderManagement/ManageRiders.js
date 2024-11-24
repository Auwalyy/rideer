import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';


const ManageRiders = ({ riders, setRiders }) => {
  const handleDelete = (id) => {
    setRiders(riders.filter((rider) => rider.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={riders}
        renderItem={({ item }) => (
          <View style={styles.riderItem}>
            <Text style={styles.text}>ID: {item.id}</Text>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Number: {item.number}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ManageRiders;


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  riderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

