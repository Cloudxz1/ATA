import React from "react";
import { View, StyleSheet, ToastAndroid, Button, StatusBar, Alert } from "react-native";

const App = () => {



  const ToastExample = () => {
    ToastAndroid.show("Este es un toast", ToastAndroid.SHORT);
  };


  const AlertExample = () =>
    Alert.alert(
      "Esta es una Alerta", "Aqui puedes poner la descripcion -mensaje",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelar presionado"),
          style: "cancel"
        },
        
        { 
          text: "aceptar", onPress: () => console.log("aceptar presionado")
        }
      ]
    );


  return (
    <View style={styles.container}>
      <Button title="Toast" onPress={() => ToastExample()} />

      <Button title="Alert" onPress={() => AlertExample()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#888888",
    padding: 8
  }
});

export default App;