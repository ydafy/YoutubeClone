import React from 'react';
import { View, Text, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
};

const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;

  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views/1000000).toFixed(1) + 'm';
  }else if (video.views >1000) {
    viewsString = (video.views/1000).toFixed(1)+ 'k';
  }

  return (
    <View style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{minutes} :{seconds < 10 ? '0' : ''} {seconds}</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewsString} {video.createdAt}
          </Text>
        </View>
        <MaterialCommunityIcons name="dots-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

export default VideoListItem;
