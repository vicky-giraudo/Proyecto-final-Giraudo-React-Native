// src/components/ButtonBase.jsx
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function ButtonBase({ title, onPress, style }) {
return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.7}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
button: { 
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
},
text: {
    color: colors.background,
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    textTransform: "uppercase",
},
});
