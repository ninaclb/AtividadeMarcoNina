import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { auth } from "../config/firebase";
import { styles } from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //função  lidar com o registro do usuário
  function handleRegister() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Logado com sucesso!");
        navigation.navigate("HomeScreen"); //aqui ele manda para a tela de login
      })
      .catch((error) => {
        console.log("Erro ao logar usuário", error);

        //código de erro
        const errorCode = error.code; // auth/invalid-email
        //mensagem de erro
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido");
        }
        if (errorCode === "auth/user-disabled") {
          console.log("Usuário desabilitado");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta");
        }
        if (errorCode === "auth/operation-not-allowed") {
          console.log("Operação não permitida");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: "https://picsum.photos/200/3000" }}
          style={{ width: 200, height: 200 }}
        />
        <Text></Text>
        <TextInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          placeholder="Digite sua Senha"
          secureTextEntry={true} // faz com que o texto pareça uma senha
          value={senha}
          onChangeText={setSenha}
          mode="flat"
        />
        <Button onPress={handleRegister}>Entrar</Button>
      </View>
    </View>
  );
}
