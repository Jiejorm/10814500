import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Getstarted(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "aqua",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "0deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>WELCOME TO</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>IMATECH</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 15,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}