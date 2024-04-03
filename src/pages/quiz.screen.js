import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PAGES } from "../utils/pages-labels";

export default function Quiz({user, navigate}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizQuestions = [
    {
      question: "Qual é a linguagem de programação amplamente utilizada para desenvolvimento web?",
      options: ["Java", "Python", "C++", "JavaScript", "Ruby"],
      answer: "JavaScript"
    },
    {
      question: "Qual dos seguintes não é um tipo de dado primitivo em JavaScript?",
      options: ["String", "Boolean", "Object", "Number", "Undefined"],
      answer: "Object"
    },
    {
      question: "Qual é a palavra-chave utilizada em JavaScript para definir uma variável que não pode ser reatribuída?",
      options: ["const", "let", "var", "final", "static"],
      answer: "const"
    },
    {
      question: "Qual é a principal função do comando 'git commit' no controle de versão Git?",
      options: ["Enviar alterações para o repositório remoto", "Atualizar o repositório local com as alterações remotas", "Adicionar arquivos ao índice", "Registrar alterações no repositório local", "Criar um novo branch"],
      answer: "Registrar alterações no repositório local"
    },
    {
      question: "Qual dos seguintes é um conceito fundamental em programação orientada a objetos?",
      options: ["Polimorfismo", "Herança múltipla", "Recursão", "Ponteiros", "Instrução if-else"],
      answer: "Polimorfismo"
    },
    {
      question: "O que significa a sigla 'API' em desenvolvimento de software?",
      options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Processing Interface", "Algorithmic Programming Interface", "Application Protocol Integration"],
      answer: "Application Programming Interface"
    },
    {
      question: "Qual é o principal conceito em React que permite a reutilização de código e a construção de interfaces de usuário compostas?",
      options: ["State", "Props", "Hooks", "Components", "Modules"],
      answer: "Components"
    },
    {
      question: "No React, qual é a função principal do método `setState()`?",
      options: ["Definir o estado inicial de um componente", "Atualizar o estado de um componente e re-renderizá-lo", "Acessar os dados de uma API externa", "Definir os props de um componente", "Definir o estado global da aplicação"],
      answer: "Atualizar o estado de um componente e re-renderizá-lo"
    },
    {
      question: "Qual é a biblioteca utilizada para criar interfaces de usuário em dispositivos móveis utilizando JavaScript e React?",
      options: ["React Native", "Expo", "Flutter", "Ionic", "Xamarin"],
      answer: "React Native"
    },
    {
      question: "Qual dos seguintes não é um componente básico do React Native para criar uma interface de usuário?",
      options: ["View", "Text", "Button", "Div", "Image"],
      answer: "Div"
    }
  ];

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const handleGoToHome = () => {
    navigate(PAGES.SIGN_UP)
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Seu score foi: {score} / {quizQuestions.length}</Text>
          <Text style={styles.subtitle}>Será enviado para o seu e-mail {user.email}, as suas respostas e seu score final.</Text>
          <Text style={styles.subtitle}>Obrigado por participar do nosso quiz!</Text>
          <Button title="Início" onPress={handleGoToHome} />
          <Button title="Tentar Novamente" onPress={resetQuiz} />
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>{quizQuestions[currentQuestionIndex].question}</Text>
          {quizQuestions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswerButtonClick(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 20
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  optionButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});