import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';


const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/bg-login.jpg')}
                style={styles.bg}
            >
                <View style={styles.content}>
                    <Image
                        source={require('../../assets/images/avt1.png')}
                        style={styles.image}
                    />
                    <Text style={{ color: 'white' }}> Welcome Back!</Text>
                    <Text style={{ color: 'white' }}>Please sign in to your account</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        keyboardType="input your email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <Text style={styles.text}>Do not have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.link}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

// ...styles definition...

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        marginTop: 20,
      },
      text: {
        marginRight: 5,
      },
      link: {
        color: 'blue',
        marginLeft: 5,
        // marginBottom:,
        fontSize: 18
      },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    input: {
        color: 'gray',
        backgroundColor: '#ffff',
        margin: 10,
        borderRadius: 20,
        height: 70,
        width: '70%',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    buttonUserName: {
        justifyContent: 'left',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
        tintColor: 'white'
    },
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop: 30,
        alignItems: 'center',
    },
    buttonSignInGoole: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop: 30,
        alignItems: 'center',
    },
    buttonSignInFaceBook: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#DDDDDD',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#888',
    },
});

export default Login;