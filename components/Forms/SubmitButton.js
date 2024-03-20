import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <View>
      <TouchableOpacity style={style.submitBtn} onPress={handleSubmit}>
        <Text style={style.btnText}>
          {loading ? "Please Wait..." : btnTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#1e2225",
    height: 50,
    marginHorizontal: 25,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
});

export default SubmitButton;
