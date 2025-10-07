import { ScrollView, StyleSheet, View } from "react-native";
import ProfileCard from "@/components/ProfileCard";

const USERS_DATA = [
  {
    id: "1",
    name: "Alice Martin",
    jobTitle: "React Native Developer",
    imageUrl: "https://picsum.photos/seed/alice/200/200",
  },
  {
    id: "2",
    name: "Benjamin Dubois",
    jobTitle: "Product Designer",
    imageUrl: "https://picsum.photos/seed/benjamin/200/200",
  },
  {
    id: "3",
    name: "Chloé Garcia",
    jobTitle: "Project Manager",
    imageUrl: "https://picsum.photos/seed/chloe/200/200",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {USERS_DATA.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            jobTitle={user.jobTitle}
            imageUrl={user.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    paddingVertical: 24,
  },
});
