//Screens/SignUp.js

import React, { useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import styled from 'styled-components/native';

const SignSchema = Yup.object().shape({
  firstName: Yup.string().required('champ obligatoire'),
  lastName: Yup.string().required('champ obligatoire'),
  email: Yup.string().email('email invalid').required('champ obligatoire'),
  password: Yup.string()
    .min(8, 'nombre de caractere insuffisant ')
    .required('champ obligatoire')
});

const SignIn = styled.TouchableOpacity`
 margin-top: 20px;
`;

const Link = styled.Text`
 color: #0077cc;
 font-weight: bold;
`;

/// il faut créer une classe Signup extends React.Component { ... qui appelera la fonction


export default function SignUp() {
  const password = useRef(null);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    validationSchema: SignSchema,
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    onSubmit: values =>
      alert(`firstName: ${values.firstName}, lastName: ${values.lastName}, Email: ${values.email}, Password: ${values.password}`)
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
        S'enregistrer
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon="user"
          placeholder="Entrer votre prénom"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          error={errors.firstName}
          touched={touched.firstName}
          onSubmitEditing={() => lastName.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon="user"
          placeholder="Entrer votre nom"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lasttName')}
          error={errors.lastName}
          touched={touched.lasyName}
          onSubmitEditing={() => email.current?.focus()}
        />
      </View>      
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
      
        <SignIn onPress={() => this.props.navigation.navigate('SignIn')}>  
          <Text style={{ color: '#223e4b', fontSize: 15, marginBottom: 16 }}>
            Déjà enregistré ? <Link>Identifiez vous</Link>
          </Text>
        </SignIn>

      </View>
    </View>
  );
}

