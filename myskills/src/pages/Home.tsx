import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native"

import { Button } from "../components/Button"
import { SkillCard } from "../components/SkillCard"

interface skillData {
  id: string,
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [skills, setSkills] = useState<skillData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setSkills(
      oldSkills => [...oldSkills, data]
    )
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldSkills => oldSkills.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={style.container}>
      <Text
        style={style.title}>REACT NATIVE
      </Text>

      <TextInput
        style={style.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        title="Add"
        onPress={handleAddNewSkill}
        activeOpacity={.7}
      />

      <Text style={[style.title, { marginVertical: 40 }]}>
        My skills
      </Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    padding: Platform.OS == 'ios' ? 15 : 10,
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7
  },
})