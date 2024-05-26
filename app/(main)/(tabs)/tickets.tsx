import { View, Text, StyleSheet } from 'react-native';

export default function MyTickets() {
  return (
    <View style={styles.container}>
      <Text>My Tickets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
