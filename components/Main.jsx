import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { InfoIcon } from "./Icons";

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
        setGames(games);
        });
    }, []);

    return (
        <View 
            className="bg-black"
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View className="flex-row justify-between items-center mb-4 mx-2">
                <View>
                    <Logo />
                </View>
            </View>
            <Link asChild href="/about">
                <Pressable>
                    <InfoIcon />
                </Pressable>
            </Link>
            {
                games.length === 0 ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <FlatList
                        data={games}
                        keyExtractor={(game) => game.slug}
                        renderItem={({ item, index }) => (
                            <AnimatedGameCard game={item} index={index} />
                    )}
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
