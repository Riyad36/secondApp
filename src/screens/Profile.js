import React from 'react'
import { Text, View, Image, ScrollableView, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const allName = [
        { name: "Name: Riyad",key: "1" },
        { name: "Student ID: 170042036", key: "2" },
        { name: "Room no: 504, South", key: "3" },
        { name: "Email: almuhafiz@iut-dhaka.edu", key: "4" },
        //{ name: "Elma" },
    ];

    return (


        <View style={styles2.ViewStyle2}>

            <Image
                marginTop={50}
                style={{ width: 300, height: 300, }}
                resizeMode="contain"
                alignSelf="center"         
                source={require('./../../assets/dp2-min.png')}
            />




            <FlatList
                data={allName}
                renderItem={function ({ item }) {
                    return <Text style={styles2.textStyle2}>{item.name}</Text>;
                }}
            />
        </View>

    );

};

const styles2 = StyleSheet.create
    (
        {
            textStyle2: {
                color: 'red',
                fontSize: 20,
                marginLeft: 10,
                justifyContent: 'center',
                marginStart: 50,
                marginTop: 10,


            },

            ViewStyle2: {
                backgroundColor: "#000000",
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',

            },

        });


export default ListScreen;