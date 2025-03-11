import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {
    // pongo id porque es asi como dictamine el nombre del archiv [id].js si fuera otro nombre pondria ese nombre
    // por ejemplo si el archivo se llamara [slug].js pondria const { slug } = useLocalSearchParams
    const { id } = useLocalSearchParams();

    return (
        <View className="flex-1 justify-center items-center">
            <View>
                <Text className="text-center text-white font-bold mb-5 text-2xl">
                    Detalles del juego {id}
                </Text>
                <Link href="/" className="text-blue-500">
                    Volver atras
                </Link>
            </View>
        </View>
    );
};