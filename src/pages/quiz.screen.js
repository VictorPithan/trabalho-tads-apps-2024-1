import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Quiz({user}) {
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

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{user.name} seu score foi: {score} / {quizQuestions.length}</Text>
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
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
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