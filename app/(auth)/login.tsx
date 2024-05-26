import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useSession } from '@/contexts/AuthContext';

export default function Login() {
    const { signIn } = useSession();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    signIn();
                    router.replace('(main)/(tabs)/booking');
                }}
            >
                <Text>Log In</Text>
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