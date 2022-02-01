import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerTouchable: {
      flex: 1,
    //   width: 300,
      height: height / 4,
      borderRadius: 6,
      margin: 15,
      justifyContent: 'center',
      
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },

    name: {
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        marginBottom: 12,
        fontSize: 20,
    },
    details: {
        fontFamily: 'openSans-regular',
        fontSize: 18, 
    }
  });
  
  export default styles;