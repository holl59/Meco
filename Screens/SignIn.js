//Screens/SignIn.js

import React, { useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import styled from 'styled-components/native';

const SignSchema = Yup.object().shape({
  email: Yup.string().email('email invalid').required('champ obligatoire'),
  password: Yup.string()
    .min(8, 'nombre de caractere insuffisant ')
    .required('champ obligatoire')
});

const SignUp = styled.TouchableOpacity`
 margin-top: 20px;
`;

const Link = styled.Text`
 color: #0077cc;
 font-weight: bold;
`;

export default function SignIn() {
  const password = useRef(null);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    validationSchema: SignSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Se connecter
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon="mail"
          placeholder="Entrer votre email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon="key"
          ref={password}
          placeholder="Entrer votre mot de passe"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      
      <Button label="Valider" onPress={handleSubmit} />

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
      
        <SignUp onPress={() => this.props.navigation.navigate('SignUp')}>  
          <Text style={{ color: '#223e4b', fontSize: 15, marginBottom: 16 }}>
            Pas encore enregistré ? <Link> Créer un compte</Link>
          </Text>
        </SignUp>

      </View>
    </View>
  );
}

