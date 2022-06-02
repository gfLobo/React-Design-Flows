import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Box, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ModalScreen() {
  const image = { uri: "https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }




  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <View style={{ alignItems: 'center', backgroundColor: "", marginBottom:30 }}>
          <Text style={{ fontSize: 30, color:'white' }}>MUI Resources:</Text>
        </View>
      <Box style={{
        backgroundColor: "rgb(0, 0, 0, 0.3)",
        width: '100%', alignSelf: 'stretch',
        height: '100%',

        backgroundImage: `linear-gradient(to bottom right)`,
        backdropFilter: "blur(3px)",
        padding: 20
      }} >
        
        <View style={{ flexDirection: 'row', backgroundColor: "" }}>
          <Checkbox {...label} defaultChecked />
          <Text style={{ marginTop: 9, fontSize: 20, color:'white' }}>Box</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "" }}>
          <Checkbox {...label} defaultChecked />
          <Text style={{ marginTop: 9, fontSize: 20, color:'white' }}>Rating</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "" }}>
          <Checkbox {...label} defaultChecked />
          <Text style={{ marginTop: 9, fontSize: 20, color:'white' }}>Timeline</Text>
        </View>
      </Box>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
