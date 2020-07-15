import React, {useState, useContext} from 'react';
import {View, StyleSheet,Button} from 'react-native';
import {Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"

        onChange={(content) => setEmail(content)}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <Spacer />

      <Input
        label="Password"

        onChange={setPassword}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer />
      <Spacer>
        <Button title="SignUp" onPress={() => signup({email, password})} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
export default SignupScreen;
