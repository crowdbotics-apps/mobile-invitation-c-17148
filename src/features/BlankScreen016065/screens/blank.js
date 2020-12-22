import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "" }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button
        title="Press me! jhgjhgjhgjgj"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  Button_3: {
    width: 100,
    height: 50,
    overflow: "hidden",
    alignSelf: "center",
    fontFamily: "Merriweather-Italic"
  },
  TextInput_4: {}
})
