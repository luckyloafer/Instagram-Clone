import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import StoryViewer from './StoryViewer'

import styles from '../styles/Header.scss'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Header = () => {

  const [storyColor, setStoryColor] = useState('red')
  const [openStory, setOpenStory] = useState(false);

  return (
    <View style={styles.headerContainer} >
      <View style={styles.firstDiv}>

        <Text style={{ fontSize: 38, fontWeight: 'bold', color: 'white' }}>Instagram</Text>

        <View style={styles.headerIcons}>
          <AntDesign name='hearto' size={30} color="white" />
          <Feather name='message-square' size={30} color="white" />
        </View>

      </View>
      <View style={styles.storyContainer} >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 15 }}>

          <View style={styles.indStoryContainer}>
            <View style={{ backgroundColor: storyColor, borderRadius: 50, padding: 2 }}>
              <View style={styles.ownStory}>


                <TouchableOpacity onPress={() => setOpenStory(true)}>
                  <Image
                    source={{ uri: 'https://images.wallpapersden.com/image/download/rcb-kohli-ipl_bGtua2WUmZqaraWkpJRobWllrWdma2U.jpg' }}
                    style={{ width: 70, height: 70 }}
                  />
                </TouchableOpacity>


              </View>
            </View>


            <Text style={{ color: 'white' }}>Your story</Text>
          </View>


          <View style={styles.indStoryContainer}>

            <View style={{ backgroundColor: storyColor, borderRadius: 50, padding: 2 }}>
              <View style={styles.story}>

                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://static.tnn.in/thumb/msid-108728064,thumbsize-43176,width-1280,height-720,resizemode-75/108728064.jpg' }}
                    style={{ width: 70, height: 70 }}
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
  )
}

export default Header