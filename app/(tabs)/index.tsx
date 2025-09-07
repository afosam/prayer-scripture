import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Book, CreditCard as Edit3, Calendar, Share2, Heart, Star } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const quickActions = [
    {
      title: 'Daily Verse',
      subtitle: 'Get today\'s scripture',
      icon: Book,
      color: '#8B6F9B',
      onPress: () => router.push('/bible'),
    },
    {
      title: 'Create Message',
      subtitle: 'Design your prayer card',
      icon: Edit3,
      color: '#D4A574',
      onPress: () => router.push('/editor'),
    },
    {
      title: 'Schedule',
      subtitle: 'Plan daily messages',
      icon: Calendar,
      color: '#7B9B8B',
      onPress: () => router.push('/settings'),
    },
    {
      title: 'Share',
      subtitle: 'Spread the word',
      icon: Share2,
      color: '#B87D5A',
      onPress: () => router.push('/editor'),
    },
  ];

  const todaysVerse = {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11"
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2C5F7B', '#4A7B8C', '#6B9BAD']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.subtitle}>Let's start with prayer and scripture</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Heart size={16} color="#D4A574" />
              <Text style={styles.statText}>7 days streak</Text>
            </View>
            <View style={styles.statItem}>
              <Star size={16} color="#D4A574" />
              <Text style={styles.statText}>42 messages shared</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.verseCard}>
          <Text style={styles.verseLabel}>Today's Verse</Text>
          <Text style={styles.verseText}>"{todaysVerse.text}"</Text>
          <Text style={styles.verseReference}>— {todaysVerse.reference}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.actionCard, { borderLeftColor: action.color }]}
                onPress={action.onPress}
                activeOpacity={0.7}
              >
                <View style={[styles.actionIcon, { backgroundColor: action.color + '20' }]}>
                  <action.icon size={24} color={action.color} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Messages</Text>
          <View style={styles.recentMessages}>
            <View style={styles.messagePreview}>
              <ImageBackground
                source={{ uri: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                style={styles.messageImage}
                imageStyle={styles.messageImageStyle}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.7)']}
                  style={styles.messageOverlay}
                >
                  <Text style={styles.messageText}>Trust in the Lord...</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={styles.messagePreview}>
              <ImageBackground
                source={{ uri: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                style={styles.messageImage}
                imageStyle={styles.messageImageStyle}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.7)']}
                  style={styles.messageOverlay}
                >
                  <Text style={styles.messageText}>Be still and know...</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B8C5D1',
    marginBottom: 20,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    color: '#D4A574',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  verseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#8B6F9B',
  },
  verseLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B6F9B',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  verseText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#2C3E50',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  verseReference: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7B8794',
    textAlign: 'right',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 16,
  },
  actionsGrid: {
    gap: 12,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#7B8794',
  },
  recentMessages: {
    flexDirection: 'row',
    gap: 12,
  },
  messagePreview: {
    flex: 1,
    height: 120,
  },
  messageImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageImageStyle: {
    borderRadius: 12,
  },
  messageOverlay: {
    padding: 12,
    borderRadius: 12,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});