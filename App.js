import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var BASE_URL = 'https://api.github.com/repos/facebook/react-native/events';
/*
* 可以使用console.warn()来手动触发黄屏警告。 在默认情况下，开发模式中启用了黄屏警告。可以通过以下代码关闭：
* */
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
/*
* 你也可以通过代码屏蔽指定的警告，像下面这样调用ignoreWarnings方法，参数为一个数组：
 YellowBox.ignoreWarnings(['Warning: ']);
 数组中的字符串就是要屏蔽的警告的开头的内容。（例如上面的代码会屏蔽掉所有以Warning开头的警告内容）
* */
export default class FetchDemo extends Component {

    getEvent() {
        // 取得 BASE_URL response 的資料
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((responseData) => {
                // 單純只做 log
                console.log(responseData);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    render() {
        // getEvent 只會 log 出得到的 data, 不會有任何 render
        this.getEvent();

        return (
            <View style={styles.container}>
                <Text>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})