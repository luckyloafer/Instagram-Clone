import React, { useMemo, useRef, useCallback, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
// import Header from './Header'
import Footer from './Footer'
import Feed from './Feed'
import CommentsBottomsheet from './CommentsBottomsheet';
import PostShareBottomsheet from './PostShareBottomsheet';
import styles from '../styles/Home.scss'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { NavigationProp } from '@react-navigation/core';

const win = Dimensions.get('window');

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  ProfilePage:undefined
};

type HomeProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const snapPoints = useMemo(() => ["50%", "75%"], [])

  const commentsBottomSheetRef = useRef<BottomSheet>(null);
  const shareBottomSheetRef = useRef<BottomSheet>(null);

  const [comment, setComment] = useState('');
  const [shares, setShares] = useState('');
  const [openCommentsBottomSheet, setOpenCommentBottomSheet] = useState(false);
  const [openPostShareBottomSheet, setOpenPostShareBottomSheet] = useState(false);

  const renderBackdrop = useCallback(
    (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}

        appearsOnIndex={1}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  const handleOpwnCommentsBottomSheet = () => {


    if (commentsBottomSheetRef.current) {
      commentsBottomSheetRef.current.expand();
    }
  };


  const handleOpwnShareBottomSheet = () => {
    if (shareBottomSheetRef.current) {
      shareBottomSheetRef.current.expand();
    }
  };



  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.homeContainer} >
        {/* <Header/> */}

        <Feed
          handleOpwnCommentsBottomSheet={handleOpwnCommentsBottomSheet}
          setComment={setComment}
          handleOpwnShareBottomSheet={handleOpwnShareBottomSheet}
          setOpenCommentBottomSheet={setOpenCommentBottomSheet}
          setOpenPostShareBottomSheet={setOpenPostShareBottomSheet}
          setShares={setShares}
        />
        <Footer navigation={navigation} />
      </SafeAreaView>



      {/* comments bottom sheet       */}

      {/* <BottomSheet ref={commentsBottomSheetRef} index={-1} snapPoints={snapPoints} backdropComponent={renderBackdrop} enablePanDownToClose={true}>
        <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#242424' }}>

          <Text style={{ fontSize: 50, color: 'black' }}>{comment}</Text>


        </BottomSheetScrollView>
      </BottomSheet> */}

      <CommentsBottomsheet snapPoints={snapPoints} comment={comment} openCommentsBottomSheet={openCommentsBottomSheet} setOpenCommentBottomSheet={setOpenCommentBottomSheet} />


      {/* share bottom sheet       */}

      {/* <BottomSheet ref={shareBottomSheetRef} index={-1} snapPoints={snapPoints} backdropComponent={renderBackdrop} enablePanDownToClose={true}>
        <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#242424' }}>

          <Text style={{ fontSize: 50, color: 'black' }}>{shares}</Text>


        </BottomSheetScrollView>
      </BottomSheet> */}

      <PostShareBottomsheet snapPoints={snapPoints} shares={shares} openPostShareBottomSheet={openPostShareBottomSheet} setOpenPostShareBottomSheet={setOpenPostShareBottomSheet} />

    </GestureHandlerRootView>

  )
}

export default Home