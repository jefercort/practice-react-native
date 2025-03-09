import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import icon1 from "./assets/icon.png";

// para importar imagenes se puede realizar de la siguiente manera, yo prefiero usar import
// const icon = require('./assets/icon.png');

export default function App() {

  return (
    // Por lo general se usa view para contener los elementos de la pantalla
    // Text es un componente que permite mostrar texto en la pantalla
    // StatusBar es un componente que permite mostrar el estado de la aplicacion
    // style es una propiedad que permite darle estilos a los componentes
    // flex es una propiedad que permite que el componente se expanda en la pantalla
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
      // {/* UNA FORMA DE LLAMAR IMAGENES */}
      // {/* <Image source={icon1} style={{  */}
      // {/* LA FORMA MAS COMUN DE LLAMAR IMAGENES */}
      // {/* <Image
      //   source={{
      //     uri: "https://i.pinimg.com/1200x/45/d2/62/45d2620a413bd77cf1ff86ef881b7e76.jpg",
      //   }}
      //   style={{
      //     width: 159,
      //     height: 159,
      //     se puede usar el contain para que la imagen se ajuste al tamaño del contenedor
      //     se puede usar strech para que la imagen se estire al tamaño del contenedor
      //     se puede usar cover para que la imagen se ajuste al tamaño del contenedor sin deformarse
      //     se puede usar repeat para que la imagen se repita en el contenedor
      //     se puede usar center para que la imagen se centre en el contenedor
      //     Hay que tener en cuenta que algunas propiedades solo funcionan en Android o IOS por lo tanto cuando
      //     se revise la documentacion se debe tener en cuenta si tiene un punto negro (ios) o un punto verde (Android)
      //     eso indicará que es una funcion exclusiva para esa plataforma
      //     resizeMode: "contain",
      //   }}
      // /> */}

      // {/* <Text>Voy a convertirme en la persona mas millonaria del mundo</Text> */}

      // {/* No se le pueden cambiar tamaño ni forma ni nada al Button porque es un nativo  */}
      // {/* <Button
      //   color="Orange"
      //   title="¿Quieres ser millonario?"
      //   onPress={() => alert("Ya empezaste a serlo")}
      // /> */}

      // {/* Si se quieren usar botones personalizados se debe de utilizar diferentes tipos de Touchable los cuales son
      // TouchagleHightlight
      // TouchableOpacity
      // PERO DEFINITIVAMENTE EL QUE SE DEBE USAR ES EL PRESSABLE  */}

      // {/* En statusBar podemos realizar cambios ya que si el fondo de pantalla es negro se desaparece la bateria y la hora entonces para ello podemos
      // usar light para que se vean blancos o dark para que se vean negros */}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
