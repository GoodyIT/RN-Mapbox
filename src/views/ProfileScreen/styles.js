import { StyleSheet, Platform, Dimensions } from 'react-native';
import { commonStyles } from '../../modules';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        // paddingTop: Expo.Constants.statusBarHeight + 5,
        paddingTop: 5,
        flex: 1,
    },
    containerOverView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    contentView: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
    },
    titleView1: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    titleView2: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        ...commonStyles.mt_20,
        justifyContent: 'space-between'
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
    },
    tabItemButton: {
        height: 40,
        justifyContent: 'space-between',
        marginRight: 20,
    },
    button_addReview: {
        backgroundColor: '#f0f0f0',
        marginLeft: 3,
        width: 30,
        height: 30,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3
    },
    tabItemText_sel: {
        ...commonStyles.color_black,
        ...commonStyles.fontSize1,
        fontWeight: 'bold',
    },
    tabItemText: {
        ...commonStyles.color_grey,
        ...commonStyles.fontSize1,
    }
})