import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [show,setShow]=useState(false)
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.rapperView}>
          <View style={styles.modalView}>
            <Text style={styles.txt}>Hello Syed Mujtaba</Text>
            <Button title="Close"  onPress={()=>setShow(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={()=>setShow(true)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    padding: 10,
  },
  rapperView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
  },
  txt: {
    fontSize: 25,
    marginBottom: 20,
  },
});
