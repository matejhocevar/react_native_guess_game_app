import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStarNewGame}) => {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 500) {
    imageSize = 150;
  }

  if (height < 480) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootScreen}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number: <Text
          style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStarNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    margin: 36,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  }
});

export default GameOverScreen;