import { useEffect } from "react"
import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function FetchNews() {
    function fetchNewsData(){
        fetch("https://jsonplaceholder.typicode.com/posts") //fetch faz uma requisição
        .then((response) => response.json()) //transforma em json
        .then((json) => console.log(json)) //mostra na tela
        .catch((error) => console.error(error)) //mostra o erro
    }
    useEffect(() => { //useEffect é um hook, ele é executado quando o componente é montado
        fetchNewsData();
    }, [])//array vazio, ele só executa uma vez



    const persons = [
        {
          id: "1",
          name: "Ernestina Chiquititas",
        },
        {
          id: "2",
          name: "Pata pobre",
        },
        {
            id: "3",
            name: "Maria da Boneca",
          },
          {
            id: "4",
            name: "Mili sem Mãe",
          },
          {
            id: "2",
            name: "Mosca não toma banho",
          },

    ];

    return(
        <View style={styles.container}>
        {persons.map((person) => {
          return (
            <View>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          );
        })}
      </View>
    );
}