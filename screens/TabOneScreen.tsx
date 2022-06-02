import { Box } from '@mui/material';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



var header_background = `rgba(${Math.floor(20 + Math.random() * (100 - 20 + 1))}, ${Math.floor(20 + Math.random() * (100 - 20 + 1))}, ${Math.floor(20 + Math.random() * (100 - 20 + 1))}, 1)`;



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const image = { uri: "https://images.unsplash.com/photo-1651648814980-55936f67f9f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" }

  const profiles = [
    {
      name: "Zoë Saldaña",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6AVsElSk5CBTs6jF40BoH8MCE9xleTWA_Q&usqp=CAU",
      age: 43,
      top_characters: ["Neytiri Nazachema - Avatar",
        "Gamora - Guardians of the Galaxy",
        "Nina Simone"
      ]
    },
    {
      name: "Gal Gadot",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg/1200px-Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg",
      age: 37,
      top_characters: ["Gisele Yashar - Fast & Furious",
        "Diana Prince (Wonder Woman)"
      ]
    },
    {
      name: "Christopher Hemsworth",
      image: "https://oquartonerd.com.br/wp-content/uploads/2019/10/release-chris-h.jpg",
      age: 37,
      top_characters: ["Thor - Avengers",
        "Agente H - Men in Black",
        "George Kirk - Star Trek"
      ]
    }
  ]

  

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <ScrollView>

        {profiles.map((values, key) => {
          const [like, setLike] = React.useState(false);
          const [comment, setComment] = React.useState(false);
          const [save, setSave] = React.useState(false);

          return (
            <Box style={{
              backgroundColor: "rgb(255, 255, 255, 0.2)",
              width: 280,
              height: 200,
              marginLeft: 20, marginRight: 20, marginBottom: 20,
              backgroundImage: `linear-gradient(to bottom right)`,
              backdropFilter: "blur(30px)",
              borderRadius: 40,
              padding: 20,
              alignItems: "center"
            }} >
              <View style={{
                flexDirection: 'row',
                backgroundColor: header_background,
                marginBottom: 10,
                borderRadius: 20
              }} >
                <Image style={styles.icon} source={{ uri: values.image }} />
                <View style={{ flexDirection: "column", backgroundColor: "rgb(255, 255, 255, 0)" }}>
                  <Text style={styles.title} >{values.name}</Text>
                  <Text style={styles.age} >{values.age}y</Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>Top movies:</Text>
              </View>

              <View style={styles.content} >
                <ScrollView>
                  {values.top_characters.map((values, key) => {
                    return (
                      <Text style={{ color: "black", textAlign: 'center' }}>
                        {key + 1}-{values}
                      </Text>
                    )
                  })}
                </ScrollView>
              </View>
              <View style={styles.footer}>
                <View style={{ flexDirection:'row', backgroundColor:"rgba(195, 195, 195, 0)" }} >
                  <TouchableOpacity onPress={()=>{setLike(!like)}} style={{marginRight:10, marginTop:5}}>                  
                    {like ? <AntDesign name="heart" size={24} color="red" />:<AntDesign name="hearto" size={24} color="black" />}
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginTop:5}} onPress={()=>{setComment(!comment)}}>
                    {comment ? <Ionicons name="chatbubble-sharp" size={24} color="black" />:<Ionicons name="chatbubble-outline" size={24} color="black" />}
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>{setSave(!save)}} style={{marginLeft:10, marginTop:7}} >
                    {save ? <FontAwesome name="bookmark" size={24} color="black" />:<FontAwesome name="bookmark-o" size={24} color="black" />}
                  </TouchableOpacity>
                </View>
              </View>
            </Box>
          )
        })}
      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  icon: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 20,
  },
  header_card: {
    flexDirection: 'row',
    backgroundColor: `rgba(${Math.floor(0 + Math.random() * (255 - 0 + 1))}, ${Math.floor(0 + Math.random() * (255 - 0 + 1))}, ${Math.floor(0 + Math.random() * (255 - 0 + 1))}, 0.5)`,
    marginBottom: 10,
    borderRadius: 20
  },
  age: {
    marginTop: 5,
    fontWeight: "bold",
    color: 'white'

  },
  content: {
    padding: 5,
    backgroundColor: "rgba(195, 195, 195, 0.3)",
    height: "48%",
    alignItems: 'center',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  footer:{
    backgroundColor: "rgba(195, 195, 195, 0)",
    alignItems:'flex-end'
  }
});
