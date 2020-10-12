import React from 'react'
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';

const HomeScreen = (props) => {

    let dept = "Department of CSE";
    let programme = "Program: SWE";



    return (
        <View style={styles.ViewStyle}>
        <View>


         <Image
                        style={{ width: 130, height: 280, }}
                        resizeMode="contain"
                        alignSelf="center"
                        source={require('./../../assets/IUT.png')} />

        

        <Text style={styles.textStyle}>{dept}</Text>
        <Text style={styles.textStyle}>{programme}</Text>



                <TouchableOpacity
                    onPress={function () {
                        props.navigation.navigate("Profile");
                    }
                    }

                >

                    <Text style={styles.btnnnn}>My Profile</Text>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={function () {
                        props.navigation.navigate("Semesters");
                        }
                    }
                    
                >

                    <Text style={styles.touchable1}> Semester Wise Course List</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={function () {
                        props.navigation.navigate("Faculty List");
                    }}
                >
                    <Text style={styles.touchable2}> List of Faculty members</Text>

                </TouchableOpacity>


            </View>
        </View>

    );


};

const styles = StyleSheet.create
    (
        {
            textStyle: {
                color: '#329167',
                textAlign: 'center',
                fontSize: 17,
                borderRadius: 10,
                borderColor: 'red'

                
            },

            touchable1: {
                color: '#E9EC0C',
                fontSize: 18,
                borderColor: '#E20CEC',
                textAlign: 'center',
                borderRadius: 5,
                borderWidth: 3,
                padding: 2,
                marginVertical: 10,
                marginHorizontal: 20,
            },

            touchable2: {
                color: 'red',
                fontSize: 18,
                borderColor: 'red',
                textAlign: 'center',
                borderRadius: 5,
                borderWidth: 3,
                padding: 2,
                marginVertical: 10,
                marginHorizontal: 20,
            },

            buttonStyle: {
                width: '40%',
                alignSelf: 'center',
                marginVertical: 30,

            },

            ViewStyle: {
                backgroundColor: "#000000",
                flex: 1,
                justifyContent:'center',
                

            },

            btnnnn: {
                color: '#27C8E8',
                fontSize: 18,
                borderColor: '#27C8E8',
                textAlign: 'center',
                borderWidth: 3,
                justifyContent: 'center',
                marginHorizontal: 100,
                marginTop: 30,
                borderRadius: 5,
                marginVertical: 10,
            },

        }

);

export default HomeScreen;