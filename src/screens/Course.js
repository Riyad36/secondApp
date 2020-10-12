import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Course = (props) => {
    const firstSemester = [
        { name: "1. SWE 4101 ", key: "1" },
        { name: "2. CSE 4107", key: "2" },
        { name: "3. Phy 4143", key: "3" },
        { name: "4. Math 4141", key: "4" },
        { name: "5. Hum 4147", key: "5" },
        { name: "6. Hum 4145", key: "6" },

    ];

    const secondSemester = [
        { name: "1. SWE 4201 ", key: "1" },
        { name: "2. CSE 4105", key: "2" },
        { name: "3. CSE 4203", key: "3" },
        { name: "4. Math 4241", key: "4" },
        { name: "5. Hum 4249", key: "5" },
        { name: "6. Hum 4247", key: "6" },

    ];

    const thirdSemester = [
        { name: "1. SWE 4301 ", key: "1" },
        { name: "2. CSE 4309", key: "2" },
        { name: "3. CSE 4307", key: "3" },
        { name: "4. CSE 4305", key: "4" },
        { name: "5. CSE 4303", key: "5" },
        { name: "6. Math 4341", key: "6" },

    ];

    const semesters = [
        { semesters: 'First Semester', course: firstSemester, key: '1' },
        { semesters: 'Second Semester', course: secondSemester, key: '2' },
        { semesters: 'Third Semester', course: thirdSemester, key: '3' },

    ]

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{semester}</Text>


            <FlatList
                data={courseList}
                renderItem={function ({ item }) {
                    return (
                        <TouchableOpacity
                            onPress={function () {
                                course_list = item.course
                                sem_info = item.semesters
                                props.navigation.navigate("Course List", { course_list }, { sem_info });

                            }}>
                            <Text>{item.semesters}</Text>
                        </TouchableOpacity>
                        )

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
                marginHorizontal: 20,
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 30,

            },



            textStyle: {
                color: '#329167',
                fontSize: 17,
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
                justifyContent: 'center',
            },
        });

export default Course;