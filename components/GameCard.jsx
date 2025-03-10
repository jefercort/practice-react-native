import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function GameCard({ game }) {
    return (
        <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
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
        fontSize: 20,
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