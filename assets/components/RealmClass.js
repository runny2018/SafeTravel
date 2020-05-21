import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';



const Realm = require('realm');



export default class RealmClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }



    componentDidMount() {
        Realm.open({
            schema: [{ name: 'Dog', properties: { name: 'string' } }],
            //path: anotherRealm.Realm
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', { name: 'Rex' });
                realm.create('Dog', { name: 'Ponty' });
            });
            this.setState({ realm });
        });
    }

    componentWillUnmount() {
        // Close the realm if there is one open.
        const { realm } = this.state;
        if (realm !== null && !realm.isClosed) {
            realm.close();
        }
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...';

        return (
            <View>
                <Text>
                    {info}
                </Text>
            </View>
        );
    }
}