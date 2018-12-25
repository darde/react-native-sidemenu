import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { headerColor } from '../styles';

const HeaderLeft = ({ navigation, isHome }) => (
    <View style={styles.headerLeft}>
        <TouchableOpacity
            onPress={() => { isHome ? navigation.toggleDrawer() : navigation.goBack(); }}
        >
            <Icon name={isHome ? 'menu' : 'arrow-left'} size={30} color={headerColor} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerLeft: {
        paddingLeft: 16,
    },
});

export default HeaderLeft;