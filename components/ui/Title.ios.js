import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    padding: 16,
    maxWidth: "80%",
    width: 300,
  }
});

export default Title;