import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


const ImageScreen = (props) => {
    return (
        <View style={styles.viewStyle}>

            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Course List");
                }
                }

            >

                <Text style={styles.touchableSame}>1st</Text>

            </TouchableOpacity>


            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Course list");
                }
                }

            >

                <Text style={styles.touchableSame}>2nd</Text>

            </TouchableOpacity>


            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Course Iist");
                }
                }

            >

                <Text style={styles.touchableSame}>3rd</Text>

            </TouchableOpacity>




        </View>
    );
};


const styles = StyleSheet.create
    (
        {

            touchableSame: {
                color: 'white',
                fontSize: 20,
                borderColor: 'red',
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: 5,
                borderWidth: 3,
                height: 50,
                marginVertical: 20,
                marginHorizontal: 50,
            },

            viewStyle: {
                backgroundColor: "#000000",
                flex: 1,
                justifyContent: 'center',
            },
        });

export default ImageScreen;