import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import { AuthContext } from "../context/authContext";

const Account = () => {
  const [state] = useContext(AuthContext);
  console.log(state);
  return (
    <View style={styles.container}>
      <Text>Name:-{state?.user.name}</Text>
      <Text>Email:-{state?.user.email}</Text>
      <Text>Role:-{state?.user.role}</Text>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
    marginTop: 50,
  },
});

export default Account;
