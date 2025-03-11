import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, Pressable } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
    return (
        // usamos asChild para que el Link se comporte como un hijo para que pueda contener un objeto clickeable por que si no el lo va a tomar como si fuera un texto
        <Link asChild href={`/${game.slug}`}>
            <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
                <View 
                    className="flex-row gap-4" 
                    key={game.slug}>
                    <Image source={{ uri: game.image }} style={styles.image} />
                    <View className="flex-shrink">
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
            </StyledPressable>
        </Link>
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