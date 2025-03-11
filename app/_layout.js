import { View } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <View className="flex-1">
            {/* slot se usa para que se pueda renderizar el contenido de las rutas
            ya que las rutas o las vistas se van a manejar por archivos separados */}
            {/* <Slot /> */}
            <Stack />
        </View>
    );
}