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

  state = { Switch_3: true, Switch_4: false, DateTimePicker_5: new Date("") }

  render = () => (
    <View>
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen016065")}
      />
      <Switch
        trackColor={{ false: "#d92641", true: "#dce736" }}
        style={styles.Switch_3}
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#d92641", true: "#dce736" }}
        style={styles.Switch_4}
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  Switch_3: { alignSelf: "flex-start" },
  Switch_4: { alignSelf: "flex-start" },
  DateTimePicker_5: {}
})
