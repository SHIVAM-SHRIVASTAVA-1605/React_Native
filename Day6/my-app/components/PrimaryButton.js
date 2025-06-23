import { Pressable, Text, StyleSheet, View } from 'react-native'

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonOuterContainer}> 
        <Pressable android_ripple={{color:"white" }}style={styles.buttonInnerContainer}> 
            <Text style={ styles.buttonText }> {children} </Text>
        </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderBlockColor: "black",
      borderWidth: 1,
      borderRadius: 5,
    },
    buttonInnerContainer: {
      backgroundColor: "#72063c",
      paddingHorizontal: 16,
      paddingVertical: 8,
      elevation: 2,
    },
    buttonText: {
      color: "yellow",
    }
});