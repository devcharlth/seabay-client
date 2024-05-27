import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import colors from '../styles/colors';

export default function Home() {

  let [fontsLoaded, fontError] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={[colors.background.white, colors.background.light]}
      style={styles.container}
    >
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../../assets/images/splash/splash.png")}
          contentFit="contain"
        />
      </View>
      <View style={styles.footerWrap}>
        <Svg
          width={390}
          height={30}
          viewBox="0 0 390 30"
          style={{ width: '100%', height: 'auto', }}
        >
          <Path d="M390 12.4166V30H0V10.2908C14.5164 15.6663 58.2505 26.66 76 26.66C76 26.66 102 31.1599 173.952 19.3051C185.591 17.3876 197.338 15.1008 209.244 12.7832C264.144 2.09641 322.404 -9.24443 388.828 11.9471C389.243 12.1077 389.634 12.2642 390 12.4166Z" fill="#ffffff" />
        </Svg>
        <View style={styles.footerInner}>
          <Link href="/login" style={[styles.button, styles.login]}>Sign In</Link>
          <Link href="/register" style={[styles.button, styles.register]}>New to SEABAY? Sign up!</Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '80%',
  },
  footerWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerInner: {
    display: 'flex',
    paddingTop: 48,
    paddingRight: 24,
    paddingBottom: 48,
    paddingLeft: 24,
    backgroundColor: colors.background.white,
  },
  button: {
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderRadius: 12,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
  },
  login: {
    color: colors.text.white,
    backgroundColor: colors.primary.main,
    marginBottom: 24,
  },
  register: {
    color: colors.text.body,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border.main,
  },
});