import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Correo"
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, email: value})}
              keyboardType="email-address"
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              onChangeText={value => setForm({...form, email: value})}
              keyboardType="phone-pad"
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{height: 10}} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Correo"
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, email: value})}
              keyboardType="email-address"
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              onChangeText={value => setForm({...form, email: value})}
              keyboardType="phone-pad"
            />
          </Card>
        </CustomView>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// const styles = StyleSheet.create({});
