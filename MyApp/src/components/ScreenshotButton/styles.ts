import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.surface_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  screenshot: {
    width: 40,
    height: 40,
  },
});

export default styles;
