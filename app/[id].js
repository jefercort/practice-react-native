import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Details() {
    // pongo id porque es asi como dictamine el nombre del archiv [id].js si fuera otro nombre pondria ese nombre
    // por ejemplo si el archivo se llamara [slug].js pondria const { slug } = useLocalSearchParams
    const { id } = useLocalSearchParams();
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        if (id) {
            getGameDetails(id).then(setGameInfo);
        }
    }, [id]);

    return (
        <Screen>
            {/* vamos a usar Stack.screen para pasarle opciones que queramos especificamente esta ruta en su header manejado por el componente Screen */}
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "#000",
                    headerLeft: () => {},
                    headerRight: () => {},
                    headerTitle: "Legend of Zelda",
                }}
            />
            <View>
                {
                    gameInfo === null ? (
                        <ActivityIndicator size="large" color="#fff" />
                    ) : (
                        <ScrollView>
                            <Image 
                                className="mb-4 rounded"
                                source={{ uri: gameInfo.image }}
                                style={{ width: 214, height: 294 }}
                            />
                            <Score score={gameInfo.score} maxScore={100} />
                            <Text className="text-white text-center font-bold text-2xl">
                                {gameInfo.title}
                            </Text>
                            <Text className="text-white/70 mt-4 text-left mb-5 text-base">
                                {gameInfo.description}
                            </Text>
                        </ScrollView>
                    )
                }
            </View>
        </Screen>
    );
};