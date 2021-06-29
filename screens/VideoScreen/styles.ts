import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  videoInfoContainer: {
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  tags: {
    color: '#dda0dd',
    fontSize: 13,
    fontWeight: '500',
  },
  subtitle: {
    color: '#7fffd4',
    fontSize: 13,
    fontWeight: '100',
  },

  // action list
  actionListContainer: {
    marginVertical: 10,
  },
  actionListItem: {
    width: 60,
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 13,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flexDirection: 'row',
    borderColor: '#3d3d3d',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 5,
  },
  userInfoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 10,
  },
  subscribeButton: {
    color: '#dda0dd',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  comments: {
    color: 'white',
    alignItems: 'center',
    marginLeft: 10,
  },
  imageComments: {
    width: 35,
    height: 35,
    borderRadius: 20,
    padding: 10,
  },
});

export default styles;
