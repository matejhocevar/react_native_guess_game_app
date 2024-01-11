import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500
  }
});

export default NumberContainer;