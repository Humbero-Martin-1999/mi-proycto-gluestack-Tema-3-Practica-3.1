import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCfR0lNOziSW6pSgiSbOXdh61X1hetX5YY",
  authDomain: "fir-realtime-database-46e92.firebaseapp.com",
  projectId: "fir-realtime-database-46e92",
  storageBucket: "fir-realtime-database-46e92.firebasestorage.app",
  messagingSenderId: "191966386520", 
  appId: "1:191966386520:web:f7ce66d4b10bb4b7aded2d",
  // Esta línea es CRUCIAL y no venía en el código de la segunda foto, 
  // la agregué basada en tu primera foto:
  databaseURL: "https://fir-realtime-database-46e92-default-rtdb.firebaseio.com" 
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la Base de Datos y exportarla para usarla en las pantallas
export const db = getDatabase(app);