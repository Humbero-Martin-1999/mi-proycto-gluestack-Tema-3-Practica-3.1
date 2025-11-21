import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
// Importamos las funciones de la base de datos
import { ref, set } from 'firebase/database';
// Importamos la configuración que acabamos de crear arriba
import { db } from './firebaseConfig';

const PantallaRegistroFirebase = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const createData = () => {
    // Validación simple
    if (username.length === 0 || email.length === 0) {
      Alert.alert("Faltan datos", "Por favor escribe usuario y correo");
      return;
    }

    // ESTRUCTURA DEL VIDEO:
    // Guarda en el nodo 'users/' usando el nombre de usuario como ID único
    set(ref(db, 'users/' + username), {
      username: username,
      email: email
    })
    .then(() => {
      // Si sale bien:
      Alert.alert("¡Éxito!", "Usuario registrado en Firebase");
      setUsername(''); // Limpiar campos
      setEmail('');
    })
    .catch((error) => {
      // Si sale mal:
      console.log(error);
      Alert.alert("Error", "Algo falló: " + error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Usuario (Firebase)</Text>
      
      <Text style={styles.label}>Username (será el ID)</Text>
      <TextInput 
        placeholder="Ej. juanperez" 
        style={styles.input} 
        onChangeText={setUsername} 
        value={username}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput 
        placeholder="juan@gmail.com" 
        style={styles.input} 
        onChangeText={setEmail} 
        value={email}
      />

      <Button title="Guardar en BD" onPress={createData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 }
});

export default PantallaRegistroFirebase;