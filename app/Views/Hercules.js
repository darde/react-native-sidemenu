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

const title = lighthouses[4].title;
const content = lighthouses[4].content;
const image = lighthouses[4].image;
const photo = lighthouses[4].photo;
const photoUrl = lighthouses[4].url;

const Hercules = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <View style={styles.figure}>
            <Image source={require('../img/lighthouse_hercules.jpg')} style={styles.img}/>
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

Hercules.navigationOptions = ({ navigation }) => ({
    title: 'Hercules',
});

const styles = StyleSheet.create(lighthouseStyles);

export default Hercules;
