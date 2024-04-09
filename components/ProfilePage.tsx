import React from 'react'

import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Footer from './Footer';
import styles from '../styles/ProfilePage.scss'


type RootStackParamList = {
    Home: undefined;
    ProfilePage: undefined;
    Profile: { userId: string };
};

type ProfilePageProps = {
    navigation: NavigationProp<RootStackParamList, 'ProfilePage'>;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ navigation }) => {
    return (
        <GestureHandlerRootView >
            <SafeAreaView style={{ backgroundColor: 'black' }} >

                <View style={styles.headerContainer}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>@lakshman_saaho</Text>
                    <View style={styles.profileDetails}>

                        <Image source={{ uri: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hsf0et6704m5e9m2u5tg9uojk3-20231220101622.Medi.jpeg' }}
                            style={styles.profileImage}
                        />

                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>14</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>posts</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>201</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>followers</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>209</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>following</Text>
                        </View>

                    </View>

                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>Mr Happy</Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>Dark Darker Darkest</Text>
                    </View>

                    <View style={styles.editShareCont}>
                        <TouchableOpacity style={styles.editProfile}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editProfile}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Share profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.storyContainer} >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 15, marginTop: 10 }}>


                            <View style={styles.indStoryContainer}>

                                <View style={{ borderRadius: 50, padding: 2 }}>
                                    <View style={styles.story}>

                                        <TouchableOpacity>
                                            <AntDesign name='plus' size={30} color="white" />

                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ color: 'white' }}>New</Text>
                            </View>

                            <View style={styles.indStoryContainer}>

                                <View style={{ borderRadius: 50, padding: 2 }}>
                                    <View style={styles.story}>

                                        <TouchableOpacity>
                                            <Image
                                                source={{ uri: 'https://static.tnn.in/thumb/msid-108728064,thumbsize-43176,width-1280,height-720,resizemode-75/108728064.jpg' }}
                                                style={{ width: 80, height: 80 }}
                                            />

                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ color: 'white' }}>alladista</Text>
                            </View>

                        </ScrollView>

                        {/* {openStory ? <StoryViewer/>:null} */}
                    </View>

                </View>
                <View style={{padding:5}}>
                    <ScrollView style={{ height: 410}} showsVerticalScrollIndicator={false}>

                        <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap', padding:0}}>

                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red' ,margin:1}}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'red',margin:1 }}></View>
                        <View style={{ width: 125, height: 125, backgroundColor: 'yellow',margin:1 }}></View>

                        </View>
                        

                    </ScrollView>
                </View>




                <Footer navigation={navigation} />
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default ProfilePage