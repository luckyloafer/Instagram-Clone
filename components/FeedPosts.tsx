import React, { useMemo } from 'react'

import { View, Text, ScrollView, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'


import styles from '../styles/Feed.scss'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface FeedPostsProps {
  name: string;
  profileImage: string;
  postImage: string;

  openCommentsBottomSheet: () => void;
  setComment: (comment: string) => void;
  openShareBottomSheet: () => void;
  setShares: (comment: string) => void;
  setOpenCommentBottomSheet: (openCommentsBottomSheet: boolean) => void;
  setOpenPostShareBottomSheet: (openPostShareBottomSheet: boolean) => void;
}

const FeedPosts: React.FC<FeedPostsProps> = ({ name, profileImage, postImage, openCommentsBottomSheet, setComment, openShareBottomSheet, setShares, setOpenCommentBottomSheet, setOpenPostShareBottomSheet }) => {



  return (

    <View style={styles.postConatiner}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft} >
          <View style={styles.postUserProfilePic}>
            <Image
              source={{ uri: profileImage }}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </View>
          <View style={styles.postUserName}>
            <Text style={{ color: 'white' }}>{name}</Text>
          </View>
        </View>
        {/* <View>
              <Text style={{color:'white' }}>follow</Text>
            </View> */}
      </View>

      <View style={styles.postImage}>
        <Image
          source={{ uri: postImage }}
          style={{ width: 'auto', height: 500 }}
        />
      </View>

      <View style={styles.postIcons}>
        <View style={styles.leftPostIcons}>

          <AntDesign name='hearto' size={30} color="white" />

          <TouchableOpacity onPress={() => {
            setComment(name);
            // openCommentsBottomSheet()
            setOpenCommentBottomSheet(true)
          }}
          >
            <FontAwesome name='comment-o' size={30} color="white" />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => {
            setShares(name );
            // openShareBottomSheet()
            setOpenPostShareBottomSheet(true)
          }}
          >
            <Fontisto name='paper-plane' size={30} color="white" />
          </TouchableOpacity>


        </View>

        <Feather name='bookmark' size={30} color="white" />

      </View>



    </View>

  )
}

export default FeedPosts