import { View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <View>
            {/* slot se usa para que se pueda renderizar el contenido de las rutas
            ya que las rutas o las vistas se van a manejar por archivos separados */}
            <Slot />
        </View>
    );
}