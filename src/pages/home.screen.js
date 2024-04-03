import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PAGES } from '../utils/pages-labels';

export default function Home({ navigate, user }) {
  const handleStartQuiz = () => {
    navigate(PAGES.QUIZ);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user.name}!</Text>
      <Text style={styles.subtitle}>Você está pronto para o desafio?</Text>
      <Button title="Começar o Quiz" onPress={handleStartQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});