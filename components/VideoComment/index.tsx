import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../screens/VideoScreen/styles';
import { AntDesign } from '@expo/vector-icons';

interface VideoCommentProps {
  comment: {
    id: string;
    createtAT: string;
    comment: string;
    likes: number;
    dislikes: number;
    repiles: number;
    user: {
      name: string;
      image: string;
    };
  };
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View>
      <View style={styles.imageComments}>
        <Image
          style={styles.imageComments}
          source={{ uri: comment.user.image }}
        />
        <Text style={styles.comments}>{comment.comment}</Text>
      </View>
      <View style={{ marginHorizontal: 50 }}>
        <AntDesign name="heart" size={20} color="#ff0000" />
      </View>
    </View>
  );
};

export default VideoComment;
