import { Tabs } from "expo-router";
import { HomeIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#ffee00",
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopWidth: 0,
            }}}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />
            <Tabs.Screen 
                name="about" 
                options={{
                    title: "Nosotros",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />
        </Tabs>
    );
};