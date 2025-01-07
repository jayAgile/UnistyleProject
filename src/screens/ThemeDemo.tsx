/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Switch, Text, View} from 'react-native';
import {StyleSheet, UnistylesRuntime} from 'react-native-unistyles';

import {AppLoader, ILoader} from '../AppLoader';
import {ImageBottomShadow} from '../ImageBottomShadow';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const {colors} = UnistylesRuntime.getTheme();
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colors.fontColor,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: colors.fontColor,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export const ThemeDemo = (): React.JSX.Element => {
  const isDarkMode = UnistylesRuntime.themeName === 'other';
  const {colors} = UnistylesRuntime.getTheme();
  const loaderRef = React.useRef<ILoader>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.primary : colors.secondary,
  };
  const [myTheme, setMyTheme] = useState(false);

  const onSwitchChange = () => {
    setMyTheme(!myTheme);
    UnistylesRuntime.setTheme(myTheme ? 'light' : 'other');
  };

  // useEffect(() => {
  //   loaderRef.current?.hideLoader();
  // }, []);

  // const showLoaderHandler = async () => {
  //   loaderRef.current?.showLoader();
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   loaderRef.current?.hideLoader();
  // };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Switch onValueChange={onSwitchChange} value={myTheme} />
      <View style={styles.container}>
        <ImageBottomShadow />
      </View>

      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button title="Show Loader" onPress={showLoaderHandler} />
        <KeyboardAvoidingViewInput />
        <Text style={styles.sectionTitle}>
          Selected theme is {UnistylesRuntime.themeName}
        </Text>
        <View
          style={{
            backgroundColor: isDarkMode ? colors.primary : colors.secondary,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView> */}
      <AppLoader ref={loaderRef} />
    </SafeAreaView>
  );
};

// Get the current theme
const styles = StyleSheet.create(theme => ({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.fontColor,
    boxShadow: '5 20 10 0 rgba(255, 0, 0, 0.5)',
    // boxShadow:{
    //   offsetX: 5,
    //   offsetY: 5,
    //   blurRadius: 5,
    //   spreadDistance: 0,
    //   color: 'rgba(255, 0, 0, 0.5)',
    // }
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}));
