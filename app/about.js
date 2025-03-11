import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { ScrollView } from "react-native";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";

export default function About() {
    const StyledPressable = styled(Pressable);

    return (
        <ScrollView className="mt-24">
            <Link asChild href="/about">
                <StyledPressable className="active:opacity-80">
                    <HomeIcon />
                </StyledPressable>
            </Link>
            <Text className="text-center">
                Acerca del proyecto
            </Text>
            <Text className="text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec libero eget urna ultrices tincidunt. Nulla facilisi. Integer
                nec ligula ut turpis fringilla molestie. Donec nec libero eget
                urna ultrices tincidunt. Nulla facilisi. Integer nec ligula ut
            </Text>
            <Text className="text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec libero eget urna ultrices tincidunt. Nulla facilisi. Integer
                nec ligula ut turpis fringilla molestie. Donec nec libero eget
                urna ultrices tincidunt. Nulla facilisi. Integer nec ligula ut
            </Text>
            <Text className="text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec libero eget urna ultrices tincidunt. Nulla facilisi. Integer
                nec ligula ut turpis fringilla molestie. Donec nec libero eget
                urna ultrices tincidunt. Nulla facilisi. Integer nec ligula ut
            </Text>
            <Text className="text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec libero eget urna ultrices tincidunt. Nulla facilisi. Integer
                nec ligula ut turpis fringilla molestie. Donec nec libero eget
                urna ultrices tincidunt. Nulla facilisi. Integer nec ligula ut
            </Text>
        </ScrollView>
    );
};