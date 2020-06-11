import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native'

const GLOBAL = require('../../GlobalConstants');

import LinearGradient from 'react-native-linear-gradient';


import Pills from '../../images/pills.svg'
import Doctor from '../../images/doctor.svg'
import WheatBag from '../../images/wheat_bag.svg'
import QueryPerson from '../../images/query_person.svg'
import { Link } from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


import { useNavigation } from '@react-navigation/native';


//Contacts Dialog code
import call from 'react-native-phone-call'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

const args = {
    number: '02026127394', // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}




import {
    ANIMATIONS_SLIDE,
    ANIMATIONS_FADE,
    CustomTabs
} from 'react-native-custom-tabs';

const pharmaciesUrl = "https://www.google.com/search?q=pharmacies+near+me&oq=pharmacies+near+me&aqs=chrome.0.35i39j0l5j69i60j69i61.3830j1j7&sourceid=chrome&ie=UTF-8"
const hospitalsUrl = "https://www.google.com/search?sxsrf=ALeKk03vP-0n9g4MvcHaGaZ79txgmTyexg%3A1591873840182&ei=MBHiXpLNCpa89QPvvIGQBw&q=hospitals+near+me&oq=hospitals+near+me&gs_lcp=CgZwc3ktYWIQAzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQzoFCAAQsQM6BQgAEIMBOgcIABCDARBDOgcIABAUEIcCOggIABCSAxCLAzoHCCMQJxCLAzoHCAAQQxCLAzoKCAAQsQMQQxCLAzoICAAQsQMQiwM6BQgAEIsDOgcIABCxAxBDOgQIABAKUIfBAVie1QFg4dYBaABwAHgAgAGXAogBxBeSAQYwLjE1LjKYAQCgAQGqAQdnd3Mtd2l6uAEC&sclient=psy-ab&ved=0ahUKEwiSpZWW0PnpAhUWXn0KHW9eAHIQ4dUDCAw&uact=5"
const covidQueriesUrl = "https://www.un.org/en/coronavirus/covid-19-faqs"




export default function NearbyUsefulResources() {

    const [contactsDialogVisible, setContactsDialogVisible] = useState(false)
    const navigation = useNavigation();


    openPharmaciesLink = () => {
        //CustomTabs.openURL(pharmaciesUrl, options)
        CustomTabs.openURL(pharmaciesUrl, {
            toolbarColor: GLOBAL.COLOR.TURQ,
            enableUrlBarHiding: true,
            showPageTitle: true,
            enableDefaultShare: true,
            // Specify full animation resource identifier(package:anim/name)
            // or only resource name(in case of animation bundled with app).
            animations: ANIMATIONS_SLIDE,
            // And supports SLIDE and FADE as default animation.
            // animations: ANIMATIONS_SLIDE or ANIMATIONS_FADE.
            headers: {
                'my-custom-header': 'my custom header value'
            },
            forceCloseOnRedirection: true,
        });
    }


    return (

        <View
            style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 20,
                marginBottom: 80,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,



            }}
        >


            <Text
                style={{
                    fontFamily: GLOBAL.FONT.MONT_MED,
                    alignSelf: "center",
                    fontSize: 18,
                    marginTop: 14
                }}
            >Nearby Useful Resources</Text>

            <View style={{
                flexDirection: "row",
                marginTop: 12,
                justifyContent: "space-around",
                marginLeft: 10,
                marginRight: 10
            }}>
                <View>


                    <TouchableNativeFeedback
                        onPress={() => openPharmaciesLink()}
                        style={{
                            borderRadius: 12,
                            height: 110,
                            width: 110,
                        }}
                    >
                        <LinearGradient
                            colors={['#53b9fd', '#54d3c2']}
                            style={{
                                height: 110,
                                width: 110,
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "center"

                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <Pills
                                height={70}
                                width={70}
                            />
                        </LinearGradient>


                    </TouchableNativeFeedback>

                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 12,
                            marginTop: 4
                        }}
                    >Pharmacies</Text>

                </View>

                <View>
                    <TouchableNativeFeedback
                        onPress={() => console.log("Hospitals")}
                    >
                        <LinearGradient
                            colors={['#bba7ff', '#54d3c2']}
                            style={{
                                height: 110,
                                width: 110,
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "center"

                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <Doctor
                                height={70}
                                width={70}
                            />
                        </LinearGradient>
                    </TouchableNativeFeedback>

                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 12,
                            marginTop: 4
                        }}
                    >Hospitals</Text>

                </View>
                <View>
                    <TouchableNativeFeedback
                        onPress={() => navigation.navigate('Essentials')}
                    >
                        <LinearGradient
                            colors={['#5864ff', '#59e3e7']}
                            style={{
                                height: 110,
                                width: 110,
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "center"

                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <WheatBag
                                height={70}
                                width={70}
                            />
                        </LinearGradient>
                    </TouchableNativeFeedback>

                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: GLOBAL.FONT.MONT_REGULAR,
                            fontSize: 12,
                            marginTop: 4
                        }}
                    >Essentials</Text>

                </View>

            </View>

            <Dialog
                visible={contactsDialogVisible}
                onTouchOutside={() => {
                    setContactsDialogVisible(false)
                }}
            >
                <DialogContent

                >
                    <TouchableOpacity
                        onPress={() => call(args).catch(console.error)}
                    >
                        <Text>State/UT: 02026127394</Text>
                    </TouchableOpacity>

                    <Text>Central: 11-23978046</Text>
                    <Text>Police: 100</Text>
                </DialogContent>
            </Dialog>


            <View
                style={{
                    marginLeft: 22,
                    marginRight: 22,
                    marginTop: 16
                }}
            >

                <View>
                    <TouchableNativeFeedback
                        onPress={() => setContactsDialogVisible(true)}
                    >
                        <LinearGradient
                            colors={['#fcffb5', '#54d3c2']}
                            style={{
                                height: 110,
                                width: "100%",
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "flex-start",


                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <Text
                                style={{
                                    marginLeft: 24,
                                    fontFamily: GLOBAL.FONT.MONT_REGULAR,
                                    fontSize: 16
                                }}
                            >Emergency Contacts</Text>

                        </LinearGradient>
                    </TouchableNativeFeedback>



                </View>
                <View style={{ marginTop: 16 }}>
                    <TouchableNativeFeedback
                        onPress={() => Linking.openURL("upi://pay?pa=pmcares@sbi&pn=PM%20CARES&mc=9400")}
                    >
                        <LinearGradient
                            colors={['#d4f4f0', '#54d3c2']}
                            style={{
                                height: 110,
                                width: "100%",
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "flex-start",


                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <Text
                                style={{
                                    marginLeft: 24,
                                    fontFamily: GLOBAL.FONT.MONT_REGULAR,
                                    fontSize: 16
                                }}
                            >Donate to PM care funds</Text>

                        </LinearGradient>
                    </TouchableNativeFeedback>



                </View>
                <View style={{ marginTop: 16, marginBottom: 30 }}>
                    <TouchableNativeFeedback
                        onPress={() => console.log("Queries")}
                    >

                        <LinearGradient
                            colors={['#dc90dc', '#59e3e7']}
                            style={{
                                height: 110,
                                width: "100%",
                                backgroundColor: 'red',
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "flex-start",


                            }}
                            useAngle={true}
                            angle={-45}
                        >
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                //backgroundColor: "red",
                                width: "100%",

                            }}>
                                <Text
                                    style={{
                                        marginLeft: 24,
                                        fontFamily: GLOBAL.FONT.MONT_REGULAR,
                                        fontSize: 16,

                                    }}
                                >Any Covid Related Queries ?</Text>
                                <QueryPerson
                                    width={80}
                                    height={80}
                                    style={{
                                        marginRight: 15
                                    }}
                                />
                            </View>


                        </LinearGradient>

                    </TouchableNativeFeedback>


                </View>
            </View>
        </View >

    )

}