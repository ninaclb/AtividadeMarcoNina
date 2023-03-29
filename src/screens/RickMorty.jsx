import { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "../utils/styles";

export default function RickMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      {data.map((item) => (
        <Card style={styles.card} key={item.name} >
          <Card.Cover source={{uri: item.image}} />
          <Card.Title>{item.name}</Card.Title>
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>Sua Espécie: {item.species}</Paragraph>
            <Paragraph>Seu Gênero: {item.gender}</Paragraph>
            <Paragraph>Está Vivo? {item.status}</Paragraph>
            {item.episode.map((ep) => (
                <Paragraph>{ep}</Paragraph>
            ))}
          </Card.Content>
        </Card>
      ))}
    </View>
    </ScrollView>
  );
}







//style={styles.card}
