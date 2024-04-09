import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import FeedPosts from './FeedPosts'
import Header from './Header'
import styles from '../styles/Feed.scss'

interface FeedProps {
  handleOpwnCommentsBottomSheet: () => void;
  setComment: (comment: string) => void;

  handleOpwnShareBottomSheet: () => void;
  setShares: (shares: string) => void;

  setOpenCommentBottomSheet: (openCommentsBottomSheet: boolean) => void;
  setOpenPostShareBottomSheet: (openPostShareBottomSheet: boolean) => void;
}

const Feed: React.FC<FeedProps> = ({handleOpwnCommentsBottomSheet, setComment, handleOpwnShareBottomSheet, setShares, setOpenCommentBottomSheet, setOpenPostShareBottomSheet}) => {
  return (
    <View style={styles.feedContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewFeed} >

        <Header />

        <FeedPosts name="lakshman"

          profileImage='https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/ms-dhoni-39.jpg'
          postImage='https://i.pinimg.com/originals/43/b3/a7/43b3a79aed74284b57d66bcee1c46c8c.jpg'
          openCommentsBottomSheet={handleOpwnCommentsBottomSheet}
          setComment={setComment}
          setShares={setShares}
          openShareBottomSheet={handleOpwnShareBottomSheet}
          setOpenCommentBottomSheet={setOpenCommentBottomSheet}
          setOpenPostShareBottomSheet={setOpenPostShareBottomSheet}
        />

        <FeedPosts name="Harsha"
          profileImage='https://tse4.mm.bing.net/th?id=OIP.QjjWly213fB9y_m8-KiXWAHaEK&pid=Api&P=0&h=180'
          postImage='https://www.dailyexcelsior.com/wp-content/uploads/2018/10/Virat-Kohli-SA.jpg'
          openCommentsBottomSheet={handleOpwnCommentsBottomSheet}
          setComment={setComment}
          setShares={setShares}
          openShareBottomSheet={handleOpwnShareBottomSheet}
          setOpenCommentBottomSheet={setOpenCommentBottomSheet}
          setOpenPostShareBottomSheet={setOpenPostShareBottomSheet}
        />

        <FeedPosts name="Harshit"
          profileImage='https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180'
          postImage='https://assets.telegraphindia.com/telegraph/99d00e0e-644b-403c-84d8-43fae4a208eb.jpg'
          openCommentsBottomSheet={handleOpwnCommentsBottomSheet}
          setComment={setComment}
          setShares={setShares}
          openShareBottomSheet={handleOpwnShareBottomSheet}
          setOpenCommentBottomSheet={setOpenCommentBottomSheet}
          setOpenPostShareBottomSheet={setOpenPostShareBottomSheet}
        />
        
        <FeedPosts name="Pavan"
          profileImage='https://tse2.mm.bing.net/th?id=OIP.3PNpwZsBn0OkiNLqsWjI9QHaFj&pid=Api&P=0&h=180'
          postImage='https://2.bp.blogspot.com/-bhaw1C2B06o/WEGTzS--LkI/AAAAAAAAlEc/LhyVCbBtoHcRGrAnZ7zBfs-sxJ3F1gNZgCLcB/s1600/Prabhas%2BImages%2BDownload%2BFree%2B3.jpg'
          openCommentsBottomSheet={handleOpwnCommentsBottomSheet}
          setComment={setComment}
          setShares={setShares}
          openShareBottomSheet={handleOpwnShareBottomSheet}
          setOpenCommentBottomSheet={setOpenCommentBottomSheet}
          setOpenPostShareBottomSheet={setOpenPostShareBottomSheet}
        />

      </ScrollView>
    </View>
  )
}

export default Feed