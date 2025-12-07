// src/components/CardBase.jsx
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function CardBase({ title, description, image }) {
return (
    <View style={styles.card}>
    {image && <Image source={image} style={styles.image} />}
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    </View>
);
}

const styles = StyleSheet.create({
card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 10,
},
image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover",
},
title: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    color: colors.text,
    marginBottom: 6,
},
description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},
});
