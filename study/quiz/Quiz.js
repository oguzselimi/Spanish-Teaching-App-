import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import useFetch from '../hooks/UseFetch';




export default function Quiz({armutId}) {

  
 const {data} = useFetch ("https://my-json-server.typicode.com/oguzselimi/secondjson/quizdata?it="+ armutId)



  const [dataItems, setDataItems] = useState([]);

  
  useEffect(() => {
    if (data) {
      setDataItems(data);
    }
  }, [data]);
 
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionPress = (questionId, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionIndex
    });
  };

  const handleCheckAnswers = () => {
    const newDataItems = dataItems.map(item => {
      const selectedOptionIndex = selectedOptions[item.it];
      const isCorrect = item.options[selectedOptionIndex] === item.correct_option;
      return {
        ...item,
        selectedOptionIndex,
        isCorrect
      };
    });
    setDataItems(newDataItems);
  };

  const renderItem = ({ item }) => {
    
    const selectedOptionIndex = selectedOptions[item.it];
    const isCorrect = item.isCorrect;
    return (
      <View >

        <View style={{borderBottomColor:"black", borderBottomWidth:1, padding:2}}>  
        <Text style={{fontSize:20}}>{item.question}</Text>
        </View>

        {item.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(item.it, index)}
            style={{padding: 15 }}
          >
            <Text style={{backgroundColor: selectedOptionIndex === index
                  ? isCorrect
                    ? 'green'
                    : 'blue'
                  : "#f1bf00" , 
                  fontSize:15
                  }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={{ paddingTop:20, borderWidth: 1, borderColor: 'black' }}>
      <FlatList
        data={dataItems}
        keyExtractor={item => item.it.toString()}
        renderItem={renderItem}
      />
      <Button title="Check Answers" onPress={handleCheckAnswers} />
    </View>
  );
}

const styles = StyleSheet.create ({});