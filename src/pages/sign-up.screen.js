import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Form } from "../components/Form";
import { Container } from "../components/Container";

export default function SingUp({ navigate, userRegister }) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View>
            <Text style={styles.textPrimary}>Crie sua conta</Text>
            <Text style={styles.textSecondary}>faça seu cadastro de forma rápida e fácil</Text>
            <Form navigate={navigate} userRegister={userRegister} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
const styles = {
  textPrimary: {
    fontSize: 32,
    width: 250,
    margin: 10
  },
  textSecondary: {
    fontSize: 16,
    width: 250,
    marginHorizontal: 10,
  },
}
