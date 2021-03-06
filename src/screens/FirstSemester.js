import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const FirstSemester = () => {
    const courseList = [
        { name: "1. SWE 4101 ",key: "1" },
        { name: "2. CSE 4107",key: "2" },
        { name: "3. Phy 4143",key: "3" },
        { name: "4. Math 4141",key: "4" },
        { name: "5. Hum 4147",key: "5" },
        { name: "6. Hum 4145",key: "6" },

    ];

    let semester = "First Semester";

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{semester}</Text>


            <FlatList
                data={courseList}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}> {item.name}</Text>

                }}
            />

            </View>

        
        
        )

}

const styles = StyleSheet.create
    (
        {

            titleStyle: {
                color: 'red',
                fontSize: 30,
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 30,

            },



            textStyle: {
                color: '#329167',
                fontSize: 20,
                borderRadius: 10,
                borderColor: 'red',
                marginHorizontal: 20,


            },

            touchableSame: {
                color: 'yellow',
                fontSize: 18,
                borderColor: 'red',
                borderRadius: 5,
                borderWidth: 2,
                padding: 2,
                marginVertical: 20,
                marginHorizontal: 50,
            },

            viewStyle: {
                backgroundColor: "#000000",
                flex: 1,
            },

            titleView: {
                backgroundColor: "#000000",
                justifyContent:'center',
            },
        });

export default FirstSemester;