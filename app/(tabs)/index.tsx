import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
  { id: '1', title: 'Thông báo 1', description: 'Mô tả thông báo 1', date: '2024-06-01' },
  { id: '2', title: 'Thông báo 2', description: 'Mô tả thông báo 2', date: '2024-06-02' },
  { id: '3', title: 'Thông báo 3', description: 'Mô tả thông báo 3', date: '2024-06-03' },
  { id: '4', title: 'Thông báo 4', description: 'Mô tả thông báo 4', date: '2024-06-04' },
  { id: '5', title: 'Thông báo 5', description: 'Mô tả thông báo 5', date: '2024-06-05' },
  { id: '6', title: 'Thông báo 6', description: 'Mô tả thông báo 6', date: '2024-06-06' },
  { id: '7', title: 'Thông báo 7', description: 'Mô tả thông báo 7', date: '2024-06-07' },
  { id: '8', title: 'Thông báo 8', description: 'Mô tả thông báo 8', date: '2024-06-08' },
  { id: '9', title: 'Thông báo 9', description: 'Mô tả thông báo 9', date: '2024-06-09' },
  { id: '10', title: 'Thông báo 10', description: 'Mô tả thông báo 10', date: '2024-06-10' },
  // Thêm các thông báo khác ở đây
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Thông báo</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    height: 'auto',
    paddingTop: 25,
    paddingBottom: 22,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notificationContainer: {
    padding: 16,
    marginBottom: 4,
    backgroundColor: '#e9e9e9',
    borderStyle: 'solid',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },

});

