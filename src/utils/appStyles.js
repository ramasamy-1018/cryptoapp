import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f7",
        padding: responsiveWidth(5)
    },
    centeredContent:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})