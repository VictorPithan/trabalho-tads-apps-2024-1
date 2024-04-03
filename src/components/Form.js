import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { PAGES } from "../utils/pages-labels";

export function Form({navigate, userRegister}) {
  
  const [isRequiredFilled, setIsRequiredFilled] = useState({
    name: false,
    email: false,
  });
  const handleUserRegister = (name, value) => {
    userRegister(name, value)
    setIsRequiredFilled({
      ...isRequiredFilled,
      [name]: !!value.trim(),
    });
  }

  const handleSubmit = () => {
    const allRequiredFieldsFilled = Object.values(isRequiredFilled).every(
      (field) => field
    );
    if (!allRequiredFieldsFilled) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    navigate(PAGES.QUIZ)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(value) => handleUserRegister("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        kayboardType="email-address"
        autoCapitalize="none"
        onChangeText={(value) => handleUserRegister("email", value)}
      />
      <View style={styles.btn}>
        <Button
          title="Cadastrar"
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  )
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: 250
  },
  btn: {
    margin: 10,
    padding: 0,
    borderRadius: 5,
    width: 250
  }
}