import {StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Android only property
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;