import { StyleSheet } from 'react-native';
import { commonStyles } from '../../../modules';

export default StyleSheet.create({
    containerOverView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    imgVeterinarian: {
        width: 140,
        height: 100,
        borderRadius: 10,
    },
    emotionButton: {
        width: 50,
        height: 50,
        shadowColor: 'transparent',
        elevation: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emotionButton_sel: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        ...commonStyles.bordercolor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    imgEmotion: {
        width: 30,
        height: 30,
        paddingLeft: 0,
        paddingRight: 0
    },
    imgEmotion_sel: {
        width: 40,
        height: 40
    },
    textBold: {
        ...commonStyles.color_black,
        ...commonStyles.fontSize1,
        fontWeight: 'bold',
    }
})