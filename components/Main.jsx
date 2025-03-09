import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
        setGames(games);
        });
    }, []);

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
                <Logo />
            </View>
            {
                games.length === 0 ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <FlatList
                        data={games}
                        keyExtractor={(game) => game.slug}
                        renderItem={({ item }) => <GameCard game={item} />}
                    />
                    // El FlatList no recibe el array de juegos por ello vamos a usarlo de manera diferente
                    // {games.map((game) => (
                    //     <GameCard key={game.slug} game={game} />
                    // ))}
                )
            }
        </View>
    );
}
