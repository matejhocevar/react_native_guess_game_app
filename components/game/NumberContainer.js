import {Dimensions, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    margin: deviceWidth < 480 ? 12 : 24,
    padding: deviceWidth < 480 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: Colors.accent500
  }
});

export default NumberContainer;