import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Image,
   TouchableWithoutFeedback, 
   KeyboardAvoidingView,
   Platform,
   TextInput,
   TouchableOpacity} from 'react-native';
   import Task from './components/task';

export default function App() {
  {/*first item 'task' is the name of the state and the second item is the funtiion we gonna use to set this state*/}

const [task, setTask] = useState();
const [taskitems, settaskitems] = useState();

  const handlewhenAdd = () =>{

    settaskitems ([...taskitems, task])
    setTask (null)
  }

  return (
    <View style={styles.container}>
      {/* layer for task */}
      
     <View style = {styles.taskWrapper }>
       <Text styles= {styles.sectiontitle}> Today's task</Text>

       <View style ={styles.items}>

         {/* this is where the task will go*/}

         
        
         <Task text= {'Task 2'}/>
         
         <Task text= {'Task 2'}/>
         

       </View>

     </View>
   
   {/*now to accept a task */}

    <KeyboardAvoidingView 
    behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
    style = {styles.writeTaskWrapper }
    >
        <TextInput style= {styles.input} placeholder ={'Enter a task'}value={task} onChangeText ={ text => setTask(text)} />

        <TouchableOpacity  onPress={()=> handlewhenAdd()}>

          <View style = {styles.addWrapper}>
            <Text styles ={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>

    </View>
         
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
     
  },
  taskWrapper:{
    padding: 80,
    paddingHorizontal: 20,
  },
  sectiontitle:{
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'pink'
    
    
  },
  items:{
    marginTop: 30,
  },
  addWrapper:{
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },

  writeTaskWrapper:{
    position :'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addText:{},
  input: { 
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'gold',
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    
  }
});
