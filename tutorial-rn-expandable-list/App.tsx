import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Item 1",
    subcategory: [
      { id: 1, val: "Sub 1" },
      { id: 2, val: "Sub 2" },
    ],
  },
  {
    isExpanded: true,
    category_name: "Item 2",
    subcategory: [
      { id: 3, val: "Sub 4" },
      { id: 4, val: "Sub 5" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    subcategory: [
      { id: 5, val: "Sub 6" },
      { id: 6, val: "Sub 7" },
    ],
  },
];

const ExpandableComponent = () => {
  const [layoutHeight, setLayoutHeight] = useState(0);
};

export default function App() {
  const [listDataSource, setListDataSource] = useState(CONTENT);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}></Text>
          <TouchableOpacity>
            <Text style={styles.headerButton}></Text>
          </TouchableOpacity>
        </View>

        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  titleText: {},
  headerButton: {},
});
