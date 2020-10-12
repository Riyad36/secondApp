import React from 'react';
import { View, Text, Flatlist, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const Faculty = () => {
    const facultyList = [
        { name: "1. Mr. A", key: "1"},
        { name: "2. Mr. B", key: "2"},
        { name: "3. Mr. C", key: "3"},
        { name: "4. Ms. D", key: "4"},
        { name: "5. Mr. E", key: "5" },
        { name: "6. Mr. F", key: "6" },
        { name: "7. Ms. G", key: "7" },
        { name: "8. Ms. H", key: "8" },
        { name: "9. Mr. I", key: "9" },
        { name: "10. Mr. J", key: "10" },

    ];

    return (
        <View style={styles.viewStyle}>

            <Text style={styles.titleStyle}>CSE Department</Text>

            <FlatList
                data={facultyList}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}

            />



        </View>

    );
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
                borderRadius: 5,
                borderColor: 'black',
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

        });

export default Faculty;