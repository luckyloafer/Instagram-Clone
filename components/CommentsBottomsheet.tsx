import React, { useMemo, useRef, useCallback, useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../styles/CommentsBottomSheet.scss'
// import { Image } from 'react-native-svg';


interface CommentsBottomsheetProps {

    snapPoints: string[];
    comment: string;
    // handleOpwnCommentsBottomSheet: () => void;
    openCommentsBottomSheet: boolean;
    setOpenCommentBottomSheet: (openCommentsBottomSheet: boolean) => void;
}

const CommentsBottomsheet = ({ snapPoints, comment, openCommentsBottomSheet, setOpenCommentBottomSheet }: CommentsBottomsheetProps) => {

    const commentsBottomSheetRef = useRef<BottomSheet>(null);
    // const [comment, setComment] = useState('');

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
            setOpenCommentBottomSheet(false)
        }
    };

    useEffect(() => {
        if (openCommentsBottomSheet) {
            handleOpwnCommentsBottomSheet();
        }
    }, [openCommentsBottomSheet]);


    return (

        <BottomSheet ref={commentsBottomSheetRef} index={-1} snapPoints={snapPoints} backdropComponent={renderBackdrop} enablePanDownToClose={true} backgroundStyle={{ backgroundColor: '#242424' }} handleIndicatorStyle={{ backgroundColor: '#adadad' }} >

            <View style={{ alignItems: 'center', padding: 10 }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Comments</Text>
            </View>
            <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#242424' }}>

                <View style={styles.commentContainer}>

                    <View style={styles.commentContainerLeft}>
                        <Image
                            source={{ uri: 'https://images.wallpapersden.com/image/download/rcb-kohli-ipl_bGtua2WUmZqaraWkpJRobWllrWdma2U.jpg' }}
                            style={styles.commentProfile}
                        />
                        <View style={styles.textContent}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>@lakshman</Text>
                            <Text style={{ color: 'white' }}>{' comment 1 in ' + comment+ ' post'}</Text>
                        </View>

                    </View>

                    <AntDesign name='hearto' size={15} color="white" />

                </View>


                <View style={styles.commentContainer}>

                    <View style={styles.commentContainerLeft}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/736x/18/3c/e8/183ce8a105c42748b50db4bf69a19263--ms-dhoni-cricket.jpg' }}
                            style={styles.commentProfile}
                        />
                        <View style={styles.textContent}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>@Dhanush</Text>
                            <Text style={{ color: 'white' }}>{' comment 2 in ' + comment+ ' post'}</Text>
                        </View>

                    </View>

                    <AntDesign name='hearto' size={15} color="white" />

                </View>


            </BottomSheetScrollView>
        </BottomSheet>
    )
}

export default CommentsBottomsheet

// function useBottomSheetSpringConfigs(arg0: { damping: number; overshootClamping: boolean; restDisplacementThreshold: number; restSpeedThreshold: number; stiffness: number; }) {
//     throw new Error('Function not implemented.');
// }
