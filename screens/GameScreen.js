import {Alert, FlatList, StyleSheet, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You know that this is wrong...",
        [{text: "Sorry", style: "cancel"}]
      );
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRnd = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRnd);
    setGuessRounds(prevGuesses => [newRnd, ...prevGuesses]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
          <View style={styles.actionsContainer}>
            <View>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Ionicons name="md-remove" size={24} color="white"></Ionicons>
              </PrimaryButton>
            </View>
            <View>
              <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                <Ionicons name="md-add" size={24} color="white"></Ionicons>
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={
            (itemData) => <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}/>
          }
          keyExtractor={(item) => item}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  actionsContainer: {
    flexDirection: "row"
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});

export default GameScreen;