import { useSession } from '@/contexts/AuthContext';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Account() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </Pressable>
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
