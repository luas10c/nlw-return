import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: colors.surface_secondary,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    marginTop: 8,
    color: colors.text_primary,
  },
});

export default styles;
