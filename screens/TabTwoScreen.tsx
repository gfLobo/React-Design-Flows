import { Box, Rating } from '@mui/material';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


var header_background = `rgba(${Math.floor(20 + Math.random() * (100 - 20 + 1))}, ${Math.floor(20 + Math.random() * (100 - 20 + 1))}, ${Math.floor(20 + Math.random() * (100 - 20 + 1))}, 1)`;

export default function TabTwoScreen() {
  const image = { uri: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" }
  const profilePicture = { uri: "https://images.unsplash.com/photo-1534399315465-2b91232de345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
  const [value, setValue] = React.useState(0);


  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <ScrollView>
        <Box style={{
          backgroundColor: "rgb(255, 255, 255, 0)",
          width: '100%', alignSelf: 'stretch',
          height: '30%',

          backgroundImage: `linear-gradient(to bottom right)`,
          backdropFilter: "blur(10px)",
          padding: 20
        }} >
          <ScrollView >
            <View style={styles.header}>
              <View style={{ backgroundColor: "", flexDirection: 'row' }}>
                <Image style={styles.icon} source={profilePicture} />
                <View style={{ backgroundColor: "" }}>
                  <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', color: "white" }}>Haydeen Luph</Text>
                  <Text style={{ fontSize: 17, fontWeight: 'bold', color: "white" }}>45y</Text>
                </View>
              </View>
              <View style={styles.profile_status}>
                <View style={styles.touchable_profile_status}>
                  <Text style={styles.status_text}>22K</Text>
                  <Text style={{ fontWeight: 'bold', color: "white" }}>Followers</Text>
                </View>
                <View style={styles.touchable_profile_status}>
                  <Text style={styles.status_text}>1.3K</Text>
                  <Text style={{ fontWeight: 'bold', color: "white" }}>Following</Text>
                </View>
                <View style={styles.touchable_profile_status}>
                  <Text style={styles.status_text}>800</Text>
                  <Text style={{ fontWeight: 'bold', color: "white" }}>Posts</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Box>
        <Box style={{
          backgroundColor: "rgb(255, 255, 255, 0.2)",
          width: '100%',
          height: 650,
          backgroundImage: `linear-gradient(to bottom right)`,
          backdropFilter: "blur(30px)",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40
        }} >
          <View style={{ backgroundColor: "", padding: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Evaluation</Text>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                if (newValue) { setValue(newValue) };
              }}
            />
            <View style={styles.separator}></View>
            <React.Fragment>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    09:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Set</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    17:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Wedding Scene</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    20:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Costumes & Costumes</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    2:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Script Review</TimelineContent>
                </TimelineItem>
              </Timeline>
            </React.Fragment>
          </View>
        </Box>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  profile_status: {
    backgroundColor: "",
    flexDirection: "row",
    marginTop: 30
  },
  header: {
    flexDirection: 'column',
    backgroundColor: "rgb(255, 255, 255, 0)"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status_text: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    marginBottom:50
  },
  icon: {
    borderRadius: 50,
    width: 70,
    height: 70,
    marginRight: 20,
  },
  touchable_profile_status: {
    backgroundColor: "", marginRight: 20, alignItems: 'center'
  }
});
