import React, { useMemo, useRef, useCallback, useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from '../styles/PostShareBottomSheet.scss'
import { TextInput } from 'react-native-gesture-handler';

interface PostShareBottomsheetProps {

    snapPoints: string[];
    shares: string;
    // handleOpwnCommentsBottomSheet: () => void;
    openPostShareBottomSheet: boolean;
    setOpenPostShareBottomSheet: (openPostShareBottomSheet: boolean) => void;
}


const PostShareBottomsheet = ({ snapPoints, shares, openPostShareBottomSheet, setOpenPostShareBottomSheet }: PostShareBottomsheetProps) => {


    const shareBottomSheetRef = useRef<BottomSheet>(null);
    const [searchUser, setSearchUser] = useState('');


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


    const handleOpwnShareBottomSheet = () => {
        if (shareBottomSheetRef.current) {

            shareBottomSheetRef.current.expand();
            setOpenPostShareBottomSheet(false)
        }
    };

    useEffect(() => {
        if (openPostShareBottomSheet) {
            handleOpwnShareBottomSheet();
        }
    }, [openPostShareBottomSheet]);



    return (
        <BottomSheet ref={shareBottomSheetRef} index={-1} snapPoints={snapPoints} backdropComponent={renderBackdrop} enablePanDownToClose={true} backgroundStyle={{ backgroundColor: '#242424' }} handleIndicatorStyle={{ backgroundColor: '#adadad' }} style={{ paddingLeft: 20, paddingRight: 20 }}>

            <View style={styles.header}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    <Feather name='search' size={15} color="white" />
                    <TextInput placeholder='Search' value={searchUser} onChangeText={setSearchUser} style={{ width: 300 }} />

                </View>

                <SimpleLineIcons name='user-follow' size={15} color="white" />
            </View>

            <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#242424' }}>

                <View style={styles.sharesContainer}>
                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://images.wallpapersden.com/image/download/rcb-kohli-ipl_bGtua2WUmZqaraWkpJRobWllrWdma2U.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>Pavan</Text>
                    </View>

                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://images.indianexpress.com/2020/10/148841-clraytzonv-1602133322.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>lakshman</Text>
                    </View>

                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://assets.telegraphindia.com/telegraph/3774993e-8f5b-4edf-8a5d-c57754aaa09d.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>Shanmukh</Text>
                    </View>


                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://superstarsbio.com/wp-content/uploads/2019/02/prabhas-3.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>Vivek</Text>
                    </View>


                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://1.bp.blogspot.com/-i5td6_ObNGg/XzIKtpDu9MI/AAAAAAAACUc/VdfxSx-lQH4ar_1c-0BrvHHHrTHu-_EBQCLcBGAsYHQ/s2048/1596898077504_44866228.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>Dhinesh</Text>
                    </View>


                    <View style={styles.shareProfile}>
                        <Image
                            source={{ uri: 'https://images.indianexpress.com/2021/12/SS-Rajamouli-nnew-1200by667.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={{fontSize:15, color:'white'}}>Dheeraj</Text>
                    </View>
                    
                </View>


            </BottomSheetScrollView>
        </BottomSheet>
    )
}

export default PostShareBottomsheet