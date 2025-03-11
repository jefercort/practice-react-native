import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { ScrollView } from "react-native";
import { InfoIcon } from "../components/Icons";

export default function About() {
    return (
        <ScrollView className="mt-24">
            <Link asChild href="/about">
                <Pressable className="text-blue-400 text-xl mt-24">
                    <InfoIcon />
                </Pressable>
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