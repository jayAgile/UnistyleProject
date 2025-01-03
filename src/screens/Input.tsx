import {TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

export const KeyboardAvoidingViewInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.gap(2),
    paddingTop: rt.insets.top,
    transform: [
      {
        translateY: rt.insets.ime * -1,
      },
    ],
  },
  input: {
    width: '100%',
  },
}));
