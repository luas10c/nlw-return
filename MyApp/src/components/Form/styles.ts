import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  title_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    color: colors.text_primary,
    fontFamily: fonts.Medium,
  },
  textarea: {
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.stroke,
    color: colors.text_primary,
    fontFamily: fonts.Regular,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default styles;
