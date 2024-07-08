import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Text style={styles.title}>ERIC ATSU</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')}>
          <Text style={styles.drawerItem}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Locations */ }}>
          <Text style={styles.drawerItem}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Blog */ }}>
          <Text style={styles.drawerItem}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Jewelry */ }}>
          <Text style={styles.drawerItem}>Jewelry</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Electronics */ }}>
          <Text style={styles.drawerItem}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Clothing */ }}>
          <Text style={styles.drawerItem}>Clothing</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  drawerItem: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default CustomDrawerContent;
