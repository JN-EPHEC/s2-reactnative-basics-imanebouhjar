import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProfileCardProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, jobTitle, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} accessibilityRole="image" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
});

export default ProfileCard;
