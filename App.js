import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import Semester from './src/screens/Semester';
import Faculty from './src/screens/Faculty';
import FirstSemester from './src/screens/FirstSemester';
import SecondSemester from './src/screens/SecondSemester';
import ThirdSemester from './src/screens/ThirdSemester';
import Course from './src/screens/Course';



const stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>

            <stack.Navigator initialRouteName='Home'>

                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="Profile" component={Profile} />
                <stack.Screen name="Semesters" component={Semester} />
                <stack.Screen name="Faculty List" component={Faculty} />
                <stack.Screen name="Course List" component={FirstSemester} />
                <stack.Screen name="Course list" component={SecondSemester} />
                <stack.Screen name="Course Iist" component={ThirdSemester} />
                <stack.Screen name="Course" component={Course} />

            </stack.Navigator>

        </NavigationContainer>
    );


            
}

export default App;