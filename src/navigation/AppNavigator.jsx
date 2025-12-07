// src/navigation/AppNavigator.jsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// LOGIN + PERFIL
import LoginScreen from "../screens/LoginScreen";
import PerfilCompletoScreen from "../screens/PerfilCompletoScreen";
import PerfilUsuarioScreen from "../screens/PerfilUsuarioScreen";

// HOME (BOTTOM TABS)
import BottomTabNavigator from "./BottomTabNavigator";
import NuevaReservaScreen from "../screens/NuevaReservaScreen";

// VEHÍCULO
import ReservaVehiculoScreen from "../screens/ReservaVehiculoScreen";
import ReservaVehiculoDetallesScreen from "../screens/ReservaVehiculoDetallesScreen";
import ReservaVehiculoConfirmacionScreen from "../screens/ReservaVehiculoConfirmacionScreen";
import ElegirUbicacionScreen from "../screens/ElegirUbicacionScreen";

// QUINCHO
import ReservaQuinchoScreen from "../screens/ReservaQuinchoScreen";
import ReservaQuinchoConfirmacionScreen from "../screens/ReservaQuinchoConfirmacionScreen";

// SALA
import ReservaSalaScreen from "../screens/ReservaSalaScreen";
import ReservaSalaConfirmacionScreen from "../screens/ReservaSalaConfirmacionScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/* LOGIN */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="PerfilCompleto" component={PerfilCompletoScreen} />

            {/* PERFIL */}
            <Stack.Screen name="PerfilUsuario" component={PerfilUsuarioScreen} />

            {/* HOME */}
            <Stack.Screen name="App" component={BottomTabNavigator} />
            <Stack.Screen name="NuevaReserva" component={NuevaReservaScreen} />

            {/* VEHÍCULO */}
            <Stack.Screen name="ReservaVehiculo" component={ReservaVehiculoScreen} />
            <Stack.Screen name="ReservaVehiculoDetalles" component={ReservaVehiculoDetallesScreen} />
            <Stack.Screen name="ElegirUbicacion" component={ElegirUbicacionScreen} />
            <Stack.Screen name="ReservaVehiculoConfirmacion" component={ReservaVehiculoConfirmacionScreen} />

            {/* QUINCHO */}
            <Stack.Screen name="ReservaQuincho" component={ReservaQuinchoScreen} />
            <Stack.Screen name="ReservaQuinchoConfirmacion" component={ReservaQuinchoConfirmacionScreen} />

            {/* SALA */}
            <Stack.Screen name="ReservaSala" component={ReservaSalaScreen} />
            <Stack.Screen name="ReservaSalaConfirmacion" component={ReservaSalaConfirmacionScreen} />

        </Stack.Navigator>
    );
}
