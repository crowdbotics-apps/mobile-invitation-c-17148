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

  state = {
    TextInput_2: "hgfhfgfhgfhfhgfh ghfhfj",
    TextInput_4: "6565",
    TextInput_5:
      "hgfhgfghf ghfghfgh hgfghfgh hgfghfg ghfhgfhf hgfghfghf ghfhgf hgfhgfgh hgfghf hgfhgf",
    TextInput_8: "",
    TextInput_9: ""
  }

  render = () => (
    <View>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <Text>Sample text content ghfhgfhgfgh hgfghf</Text>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  TextInput_2: {},
  Text_3: {},
  TextInput_4: {},
  TextInput_5: { height: 100 },
  Text_6: {},
  Button_7: {},
  TextInput_8: {},
  TextInput_9: {}
})
