import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentSurname, setNewStudentSurname] = useState("");
  const [newStudentClass, setNewStudentClass] = useState("");

  const handleAddStudent = () => {
    if (newStudentName.trim() !== "" && newStudentSurname.trim() !== "" && newStudentClass.trim() !== "") {
      const newStudent = {
        id: Date.now(),
        adi: newStudentName,
        soyadi: newStudentSurname,
        sinif: newStudentClass
      };
      setStudents([...students, newStudent]);
      setNewStudentName("");
      setNewStudentSurname("");
      setNewStudentClass("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Öğrenci Listesi</Text>
      </View>

      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Öğrenci Adı"
          style={styles.Input}
          value={newStudentName}
          onChangeText={setNewStudentName}
        />
        <TextInput
          placeholder="Öğrenci Soyadı"
          style={styles.Input}
          value={newStudentSurname}
          onChangeText={setNewStudentSurname}
        />
        <TextInput
          placeholder="Öğrenci Sınıf"
          style={styles.Input}
          value={newStudentClass}
          onChangeText={setNewStudentClass}
        />
      </View>

      <TouchableOpacity style={styles.Button} onPress={handleAddStudent}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>

      <Text style={styles.midText}>Öğrenciler</Text>

      <ScrollView>
        {students.map((student) => (
          <View style={styles.listContainer} key={student.id}>
            <View style={styles.studentList}>
              <Text>Adı: {student.adi}</Text>
              <Text>Soyadı: {student.soyadi}</Text>
              <Text>Sınıf: {student.sinif}</Text>
            </View>
            <TouchableOpacity
              style={styles.studentDeleteButton}
              onPress={() => {
                const updatedStudents = students.filter(
                  (item) => item.id !== student.id
                );
                setStudents(updatedStudents);
              }}
            >
              <Text>Sil</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#800020" },

  Header: { alignItems: "center", backgroundColor: "#7D0120" },

  HeaderText: { fontSize: 40, color: "#FAE1C3", padding: 20 },

  InputContainer: {
    marginTop: 10,
    padding: 18,
  },

  Input: {
    backgroundColor: "#FFECD4",
    padding: 13,
    fontSize: 18,
    borderRadius: 30,
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#E3B883",
    margin: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    padding: 13,
  },
  midText: {
    padding: 18,
    fontSize: 20,
    color: "#FAE1C3",
  },
  listContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFECD4",
    margin: 18,
    borderRadius: 12,
  },
  studentList: {
    flex: 2,
  },
  studentDeleteButton: {
    flex: 1,
    backgroundColor: "#E3B883",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
