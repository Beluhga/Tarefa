import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import {InputContainer} from './screens/style';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
   const [task, setTask] = useState('');

  function handleAddNewTask() {
    if(!task ){ // irar dar return se estiver vazia
      return;
    }
      addTask(task); // para criar uma nova task
      setTask(''); // para limpar depois de criar
    

  }

  return (
    <InputContainer>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText= {setTask}
        onSubmitEditing= {handleAddNewTask} // quando clicar no teclado do mobile
        
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Entypo name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </InputContainer>
  )
}

const styles = StyleSheet.create({
  
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
    color: '#666666'
  },
  addButton: {
    backgroundColor: '#FFF',
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});