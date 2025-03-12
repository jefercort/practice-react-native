import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1">
            {/* slot se usa para que se pueda renderizar el contenido de las rutas
            ya que las rutas o las vistas se van a manejar por archivos separados */}
            {/* <Slot /> */}
            {/* con stack se puede manejar la navegaicon nativa del dispositivo */}
            <Stack
                // Se puede personalizar todo como el screenListener que se usa para capturar metricas y tracking
                // para saber cuando el usuario esta cambiando de pagina
                // EN SCREEN OPTIONS podemos estilizar el header
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#000",
                    },
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                <InfoIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </View>
    );
}