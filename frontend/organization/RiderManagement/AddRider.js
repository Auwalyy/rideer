import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ManageRiders from './ManageRiders';
import RidersData from './data';

const AddRiders = () => {
  const [riderInput, setRiderInput] = useState({ id: '', name: '', number: '' });
  const [riders, setRiders] = useState(RidersData);

  const handleInputChange = (field, value) => {
    setRiderInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addRider = () => {
    if (riderInput.name && riderInput.number) {
      const newRider = {
        id: Date.now().toString(), // Generate unique ID
        name: riderInput.name,
        number: riderInput.number,
      };
      setRiders([...riders, newRider]);
      setRiderInput({ id: '', name: '', number: '' }); // Reset input
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Rider</Text>
      <View>
        <TextInput
          placeholder="Name"
          value={riderInput.name}
          onChangeText={(text) => handleInputChange('name', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Number"
          value={riderInput.number}
          onChangeText={(text) => handleInputChange('number', text)}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <Button title="Add Rider" onPress={addRider} />
      </View>
      {riders.length > 0 && (
        <ManageRiders riders={riders} setRiders={setRiders} />
      )}
    </View>
  );
};

export default AddRiders;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

 