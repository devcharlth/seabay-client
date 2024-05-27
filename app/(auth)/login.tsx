import React, { useState } from 'react';
import Svg, { Path } from "react-native-svg"
import { TextInput, View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router, Link } from 'expo-router';
import { useSession } from '@/contexts/AuthContext';
import colors from '../styles/colors';

export default function Login() {

  const { signIn } = useSession();
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
          contentFit="contain"
        />
      </View>
      <View style={styles.formWrap}>
        <View style={styles.formControl}>
          <Svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <Path d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username or Email"
            placeholderTextColor={colors.text.muted}
          />
        </View>
        <View style={styles.formControl}>
          <Svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <Path d="M5 13C5 12.4696 5.21071 11.9609 5.58579 11.5858C5.96086 11.2107 6.46957 11 7 11H17C17.5304 11 18.0391 11.2107 18.4142 11.5858C18.7893 11.9609 19 12.4696 19 13V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V13Z" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={colors.text.muted}
          />
        </View>
        <View style={styles.forget}>
          <Link href="/login" style={styles.textSm}>Forget Password ?</Link>
        </View>
        <Pressable
          onPress={() => {
            signIn();
            router.replace('(main)/(tabs)/booking');
          }}
          style={{ width: '100%' }}
        >
          <Text style={styles.signIn}>Sign in</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
          <Text style={{ color: colors.text.heading, fontSize: 16 }}>Don't have an account?</Text>
          <Link href="/register" style={{ color: colors.primary.main, fontSize: 16, fontFamily: 'Inter_500Medium', }}>Sign up</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  formWrap: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
  },
  logo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    maxWidth: 150,
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border.main,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter_400Regular',
    color: colors.text.body,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  forget: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textSm: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: colors.text.body,
  },
  link: {
    color: colors.primary.main,
  },
  signIn: {
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderRadius: 12,
    width: '100%',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
    color: colors.text.white,
    backgroundColor: colors.primary.main,
    marginBottom: 24,
  },
});