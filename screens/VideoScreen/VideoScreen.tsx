import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import styles from './styles';
import VideoListItem from '../../components/VideoListItem/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';
import { useRef } from 'react';
import VideoComments from '../../components/VideoComments';
import BottomSheetModalProvider from '@gorhom/bottom-sheet';
import BottomSheetModal from '@gorhom/bottom-sheet';
import VideoComment from '../../components/VideoComment';

const VideoScreen = () => {
  const commentSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'm';
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + 'k';
  }

  const openComments = () => {
    commentSheetRef.current?.expand();
  };

  return (
    <View style={{ backgroundColor: '#121211', flex: 1 }}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        {/*Video INFO */}
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} {video.createdAt}
          </Text>
        </View>
        {/*Video Info*/}

        {/*Action List*/}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="heart" size={28} color="#ff0000" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesome5 name="heart-broken" size={28} color="#f0ffff" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <FontAwesome name="share" size={28} color="#b0e0e6" />
              <Text style={styles.actionText}>Share</Text>
            </View>

            <View style={styles.actionListItem}>
              <Ionicons name="download" size={28} color="#d8bfd8" />
              <Text style={styles.actionText}>Download</Text>
            </View>

            <View style={styles.actionListItem}>
              <Ionicons name="add-outline" size={28} color="#2e8b57" />
              <Text style={styles.actionText}>Save</Text>
            </View>

            <View style={styles.actionListItem}>
              <Feather name="more-horizontal" size={28} color="#6495ed" />
              <Text style={styles.actionText}>More</Text>
            </View>

            <View style={styles.actionListItem}>
              <Entypo name="chat" size={28} color="#708090" />
              <Text style={styles.actionText}>Live chat</Text>
            </View>
          </ScrollView>
        </View>
        {/*Action List */}

        {/*User Info */}
        <View style={styles.userInfo}>
          <Image style={styles.avatar} source={{ uri: video.user.image }} />

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={styles.userInfoText}>{video.user.name}</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>
              {video.user.subscribers} Subscribers
            </Text>
          </View>
          <Text style={styles.subscribeButton}>Subscribe</Text>
        </View>
        {/*User Info */}

        {/*Comments */}
        <Pressable
          onPress={openComments}
          style={{ padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: 'white' }}>Comments 333</Text>
        </Pressable>
        {/*Comments */}

        {/*ALL comments */}

        <BottomSheetModal
          ref={commentSheetRef}
          snapPoints={[0, '70%']}
          index={0}
        >
          <VideoComments />
        </BottomSheetModal>

        {/*ALL comments */}
      </View>
    </View>
  );
};

const VideoScreenRecomendations = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#121211', flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default VideoScreenRecomendations;
