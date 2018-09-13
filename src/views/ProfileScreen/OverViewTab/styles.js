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
        shadowOpacity: 0,
        backgroundColor: 'transparent'
    },
    emotionButton_sel: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        ...commonStyles.bordercolor
    },
    emotionImg: {
        width: 30,
        height: 30
    },
    emotionImg_sel: {
        width: 40,
        height: 40
    },
    textBold: {
        ...commonStyles.color_black,
        ...commonStyles.fontSize1,
        fontWeight: 'bold',
    }
})