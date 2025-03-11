import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
    return (
        <View 
            className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10" 
            key={game.slug}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <View className="mb-1">
                <Text className="mb-1" style={styles.score}>
                    {game.title}
                </Text>
                {/* <Text style={styles.title}>{game.score}</Text> */}
                <Score score={game.score} maxScore={100} />
                <Text className="mt-2 flex-shrink" style={styles.description}>
                    {game.description.slice(0, 100)}...
                </Text>
            </View>
        </View>
    );
}
// Animated es una clase que nos va a permitir hacer animaciones en react native
export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: 100 * index,
            // este su usa para temas de rendimiento
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
            {/* // Aquí se le pasa el estilo al componente */}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 107,
        height: 147,
        borderRadius: 10,
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    description: {
        fontSize: 16,
        color: "#eee",
    },
    score: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#177",
        marginTop: 10,
    },
    card: {
        marginBottom: 42,
    },
});