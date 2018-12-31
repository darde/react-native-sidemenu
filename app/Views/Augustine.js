import React from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    Linking,
    StyleSheet
} from 'react-native';
import { lighthouses } from '../data';
import lighthouseStyles from '../lighthouse.styles';

const title = lighthouses[2].title;
const content = lighthouses[2].content;
const image = lighthouses[2].image;
const photo = lighthouses[2].photo;
const photoUrl = lighthouses[2].url;

const Augustine = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <View style={styles.figure}>
            <Image source={require('../img/lighthouse_augustine.jpg')} style={styles.img}/>
            <View style={styles.credits}>
                <Text style={styles.labelCredits}>Photo: </Text>
                <Text
                    style={[styles.linkCredits, styles.labelCredits]}
                    onPress={() => Linking.openURL(photoUrl)}
                >
                    {photo}
                </Text>
            </View>
        </View>
        <Text style={styles.p}>{content}</Text>
    </ScrollView>
);

const styles = StyleSheet.create(lighthouseStyles);

export default Augustine;
