// src/screens/PerfilCompletoScreen.jsx
import React, { useState } from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { updatePerfil } from "../Redux/slices/userSlice";
import colors from "../theme/colors";

export default function PerfilCompletoScreen({ navigation }) {
const dispatch = useDispatch();
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [area, setArea] = useState("");
const [cargo, setCargo] = useState("");
const [error, setError] = useState("");

const handleSave = () => {
    setError("");

    if (!nombre || !apellido || !area || !cargo) {
    setError("Por favor completa todos los campos.");
    return;
    }

    dispatch(
    updatePerfil({
        nombre,
        apellido,
        area,
        cargo,
        perfilCompleto: true,
    })
    );

    navigation.replace("App");
};

return (
    <View style={styles.container}>

    <Image
        source={require("../Assets/Icons/LOGO-ANODAL.png")}
        style={styles.logo}
        resizeMode="contain"
    />

    <View style={styles.formBox}>
        <Text style={styles.title}>Completar Perfil</Text>

        <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor={colors.placeholder}
        value={nombre}
        onChangeText={setNombre}
        />

        <TextInput
        style={styles.input}
        placeholder="Apellido"
        paceholderTextColor={colors.placeholder}
        value={apellido}
        onChangeText={setApellido}
        />

        <TextInput
        style={styles.input}
        placeholder="Área"
        placeholderTextColor={colors.placeholder}
        value={area}
        onChangeText={setArea}
        />

        <TextInput
        style={styles.input}
        placeholder="Cargo"
        placeholderTextColor={colors.placeholder}
        value={cargo}
        onChangeText={setCargo}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar y continuar</Text>
        </TouchableOpacity>
    </View>
    </View>
);
}

// --- ESTILOS ---
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    paddingTop: 60,
},

logo: {
    width: 180,
    height: 90,
    marginBottom: 40,
},

formBox: {
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 40,
},

title: {
    fontSize: 28,
    fontFamily: "Poppins_700Regular",
    textAlign: "center",
    marginBottom: 30,
    color: colors.primary,
},

input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},

error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
},

button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
},

buttonText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
},
});
