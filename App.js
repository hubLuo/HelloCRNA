import React from 'react';
import { Button, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="跳转到详情页"
                    onPress={()=> this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="跳转到Home页"
                    onPress={()=> this.props.navigation.navigate('Home')}
                />
                <Button
                    title="本页自身跳转到Details无效"
                    onPress={()=> this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Details'
    });

export default class App extends React.Component {
    render(){
        return <RootStack />
    }
}