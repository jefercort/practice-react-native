import { StyleSheet, Text, View, Image } from "react-native";

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