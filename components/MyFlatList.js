import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
//注意与其相近的ListView组件已被抛弃。
//var JsonData =require("../data/testWine.json");//用于本地调试代码的数据
const BaseUrl = 'http://192.168.0.101:3000/images/';
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

export default class MyListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.key.toString()}
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <View style={styles.container}>
                            <Image source={{uri:BaseUrl+item.image}} style={styles.iconStyle}/>
                            <View style={styles.textWrapperStyle}>
                                <Text style={styles.titleStyle}>{item.name}</Text>
                                <Text style={styles.moneyStyle}>￥{item.money}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }

    //加载数据，获取远程服务器数据
    fetchData = ()=>{
        fetch(`${BaseUrl}testWine.json`, {
            // method: 'POST',
            method: 'GET',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // },
            // body:'key1=value1&key2=value2'
        })
            .then((response) => response.json())
            .then((responseData) => {
                let i = 0;
                let dataList = [];
                responseData.map((item) => {
                    dataList.push({
                        key:i,
                        ...item
                    })
                    i++;
                })
                this.setState({
                    dataSource: dataList
                });
            }).done();
    }

    //渲染完组件，加载数据
    componentDidMount(){
        this.fetchData();
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth:0.5, //下划线
        borderBottomColor:'#e8e8e8',
        padding:10 //填充
    },
    iconStyle: {
        width: 60,
        height: 60,
        marginRight:15
    },
    textWrapperStyle:{
        flexDirection: 'column'
    },
    titleStyle:{
        fontSize:13,
        width:ScreenWidth * 0.7,
        marginBottom:8
    },
    moneyStyle:{
        fontSize:12,
        color:'#71e928'
    }
});

module.exports = MyListView;

