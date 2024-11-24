import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';  // Fixed import for FlatList

const Tab = createMaterialTopTabNavigator();

const PendingData = [
    { id: 1, orderId: '1001', status: 'Pending' },
    { id: 2, orderId: '1002', status: 'Pending' }
];
const CompletedData = [
    { id: 1, orderId: '2001', status: 'Completed' },
    { id: 2, orderId: '2002', status: 'Completed' }
];
const CancelData = [
    { id: 1, orderId: '3001', status: 'Cancelled' },
    { id: 2, orderId: '3002', status: 'Cancelled' }
];

function OrderList({ orders }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={({ item }) => (
                    <View>
                        <Text>Order ID: {item.orderId}</Text>
                        <Text>Status: {item.status}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}  // Ensure the id is a string
            />
        </View>
    );
}

function PendingOrder() {
    return (
        <View>
            <OrderList orders={PendingData} />
        </View>
    );
}

function CompletedOrder() {
    return (
        <View>
            <OrderList orders={CompletedData} />
        </View>
    );
}

function CancelOrder() {
    return (
        <View>
            <OrderList orders={CancelData} />
        </View>
    );
}

const Orders = () => {
    return (
        <Tab.Navigator
            initialRouteName='Pending'
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name='Pending' component={PendingOrder} />
            <Tab.Screen name='Completed' component={CompletedOrder} />
            <Tab.Screen name='Cancelled' component={CancelOrder} />
        </Tab.Navigator>
    );
};

export default Orders;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})