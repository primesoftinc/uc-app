import { SocialIcon } from "react-native-elements";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

/* all social icons*/

const radius1 = {
  yes: {
    borderRadius: 50
  }
};
const sizes = {
  small: {
    width: 200,
    height: 50
  },
  medium: {
    width: 300,
    height: 50
  },

  large: {
    width: 375,
    height: 50
  },

  xlarge: {
    width: 350,
    height: 75
  }
};
// Icon
export default class IconButton extends React.Component {
  constructor(props) {
    super();
    this.state = { isLoading: false, islight: false, isDisabled: false };
    this.handle = this.handle.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
    this.handleLight = this.handleLight.bind(this);
  }

  handle() {
    this.setState({
      isLoading: true,
      isLight: !this.state.isLight,
      isDisabled: true
    });
  }

  handleDisable() {
    this.setState({
      isLoading: true,
      isLight: !this.state.isLight,
      isDisabled: true
    });
  }
  handleLight() {
    this.setState({ islight: true, isDisabled: true, isLoading: true });
  }

  render() {
    const { isLoading, islight, isDisabled } = this.state;
    const {
      icon,
      type,
      light,
      title,
      loader,
      disabler,
      changer,
      size,
      radius,
      style = {}
    } = this.props;
    console.log(islight);
    return (
      <View>
        {loader ? (
          <SocialIcon
            type={icon}
            button={true}
            loading={isLoading}
            disabled={isDisabled}
            onPress={this.handle}
            title={title}
            light={[false, light]}
            style={[radius1[radius], styles.container, sizes[size], style]}
          />
        ) : (
          <Text> </Text>
        )}

        {disabler ? (
          <SocialIcon
            type={icon}
            button={true}
            disabled={isDisabled}
            onPress={this.handleDisable}
            title={title}
            light={[false, light]}
            style={[radius1[radius], styles.container, sizes[size], style]}
          />
        ) : (
          <Text> </Text>
        )}

        {changer ? (
          <SocialIcon
            type={icon}
            button={true}
            onPress={this.handleLight}
            title={title}
            disabled={isDisabled}
            loading={isLoading}
            light={islight}
            style={[styles.container, sizes[size], radius1[radius], style]}
          />
        ) : (
          <Text />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 50,
    width: 200
  }
});
