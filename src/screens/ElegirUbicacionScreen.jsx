// src/screens/ElegirUbicacionScreen.jsx
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import colors from "../theme/colors";

export default function ElegirUbicacionScreen({ navigation, route }) {
const { vehiculo, pasajeros, fecha, hora, conductor, acompanantes } =
    route.params;

const [selected, setSelected] = useState(null);

const confirmar = () => {
    if (!selected) return;

    navigation.navigate("ReservaVehiculoConfirmacion", {
    vehiculo,
    pasajeros,
    fecha,
    hora,
    conductor,
    acompanantes,
    destino: selected,
    });
};

return (
    <View style={styles.container}>
    <MapView
        style={styles.map}
        onPress={(e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setSelected({ lat: latitude, lng: longitude });
        }}
        initialRegion={{
          latitude: -31.4201, // Córdoba centro — cambia si querés
        longitude: -64.1888,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
        }}
    >
        {selected && (
        <Marker
            coordinate={{ latitude: selected.lat, longitude: selected.lng }}
        />
        )}
    </MapView>

    <TouchableOpacity
        style={[styles.btn, { opacity: selected ? 1 : 0.5 }]}
        onPress={confirmar}
        disabled={!selected}
    >
        <Text style={styles.btnText}>Confirmar ubicación</Text>
    </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1 },
map: { flex: 1 },
btn: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    alignItems: "center",
},
btnText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
},
});
