import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/images/splash/splash.png")}
                contentFit="contain"
            />
            <Link href="/login" style={styles.link}>Sign In</Link>
            <Link href="/register" style={styles.link}>Register</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        height: '50%'
    },
    link: {
        marginTop: 10,
        fontSize: 16,
    },
});