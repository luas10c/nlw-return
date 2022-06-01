import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontFamily: fonts.Medium,
    color: colors.text_primary,
  },
  button: {
    height: 40,
    backgroundColor: colors.surface_secondary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 56,
  },
  button_text: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.text_primary,
  },
});

export default styles;
