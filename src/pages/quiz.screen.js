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
      question: "Qual estrutura de dados organiza os elementos em uma sequência ordenada e permite acesso rápido aos elementos?",
      options: ["Árvore", "Fila", "Pilha", "Lista ligada", "Array"],
      answer: "Array"
    },
    {
      question: "Qual dos seguintes não é um paradigma de programação?",
      options: ["Orientação a Objetos", "Programação Procedural", "Programação Linear", "Programação Funcional", "Programação Lógica"],
      answer: "Programação Linear"
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