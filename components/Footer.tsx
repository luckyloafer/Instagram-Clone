import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from '../styles/Footer.scss'


type IconsProps = PropsWithChildren<{
    name: string;
}>

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.iconsContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Foundation name="home" size={30} color="white" />
                </TouchableOpacity>

                <Feather name='search' size={30} color="white" />
                <Feather name='plus-square' size={30} color="white" />
                <SimpleLineIcons name='user-follow' size={30} color="white" />
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}
                >
                    <FontAwesome name='circle-thin' size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default Footer
