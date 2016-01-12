import React, { Component, PropTypes, Text, View } from 'react-native';
import { elementPropType } from '../../../constants/propTypes';
import styles from './styles';

export default class Child extends Component {
  static propTypes = {
    element: PropTypes.oneOfType([
      elementPropType,
      PropTypes.string,
    ]).isRequired,
  }

  renderHandleSection() {
    const { element } = this.props;
    const elementDisplayName = element.displayName || element.type.displayName;

    return (
      <View style={styles.handleSection}>
        <Text style={styles.displayNameLabel}>
          {elementDisplayName}
        </Text>
      </View>
    );
  }

  renderChildrenSection() {
    const { element } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    return (
      <View style={styles.childrenSection}>
        {elementChildren.map(child => this.renderChild(child))}
      </View>
    );
  }

  renderChild(child) {
    if (typeof child === 'string') {
      return (
        <View key={child} style={styles.stringChild}>
          <Text style={styles.stringChildLabel}>
            {child}
          </Text>
        </View>
      );
    }

    return child;
  }

  render() {
    const { element } = this.props;

    if (typeof element === 'string') {
      return this.renderChild(element);
    }

    return (
      <View style={styles.container}>
        {this.renderHandleSection()}
        {this.renderChildrenSection()}
      </View>
    );
  }
}
