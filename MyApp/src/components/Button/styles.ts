import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  button_disabled: {
    backgroundColor: colors.brand_darken,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.text_on_brand_color,
  },
});

export default styles;
