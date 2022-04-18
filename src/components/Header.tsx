import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

import {Tasks, Container2, TasksCounterBold} from './screens/style';


interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas'; // para colocar o nome la em cima, onde tem a quantidade de tarefas
  
  return (
    <Container2>
      <Image source={require('../assets/images/logo/logo.png')} />
      
      <Tasks>
        <Text style={styles.tasksCounter}>Você tem </Text>
        {<TasksCounterBold>{tasksCounter} {tasksCounterText}</TasksCounterBold> }
      </Tasks>
    </Container2>
  )
}

const styles = StyleSheet.create({
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
});