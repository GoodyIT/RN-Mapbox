import { StyleSheet, Platform, Dimensions } from 'react-native';
import { commonStyles } from '../../modules';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        paddingTop: Expo.Constants.statusBarHeight + 5,
    },
    avatar: {
        height: 130,
        width: 'auto',
    },
    name: {
        marginBottom: 20,
        textAlign: 'center',
    },
    button_heart: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...commonStyles.bordercolor
    }
})