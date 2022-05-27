
import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InstaGitHubCard({githubUser}){
  const [liked, setLikedState] = useState(false);
  return(
    <View>
      {/*InstaCardHeader */}
      <View style={{flexDirection:'row', padding: 20, alignItems:'center'}}>
       <Image 
          style={{
            marginTop: 15,
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
        }}
        
        source={{
          uri:`https://github.com/${githubUser}.png`
        }}/>
        <Text>{githubUser}</Text>
      </View>

      {/*InstaCardImage */}
      <Image 
      style={{
        width:'100%',
        height: 350,
      }}  
      source={{
        uri:`https://github.com/${githubUser}.png`
      }} 
      />
        
        {/*Footer */}
      <View style={{flexDirection:'row', padding: 15, alignItems:'center'}}>
        <TouchableOpacity onPress={() => setLikedState(!liked)}>
          {liked && <Ionicons name="ios-heart" size={24} color="red" />}
          {!liked && <Ionicons name="ios-heart-outline" size={24} color="black" />}
        </TouchableOpacity>
      </View>
          
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {
      [
        'andregrosso87',
        'omariosouto',
        'gabrielfroes',
        'vweberfroes',
      ].map((githubUser) =>
        <InstaGitHubCard key={githubUser} githubUser={githubUser} />
        )
      }

      </ScrollView>
      
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
