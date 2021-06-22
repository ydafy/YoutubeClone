import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoCard: {},
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: '#00000099',
    height: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  midleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  subtitle: {
    color: '#7fffd4',
    fontSize: 13,
    fontWeight: '100',
  },
});

export default styles;
