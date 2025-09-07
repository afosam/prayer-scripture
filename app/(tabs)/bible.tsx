import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Search, Book, ChevronRight, Heart } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Verse {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function BibleScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const bibleBooks = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
    'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
    'Psalms', 'Proverbs', 'Ecclesiastes', 'Isaiah', 'Jeremiah',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts',
    'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    'Revelation'
  ];

  const popularVerses: Verse[] = [
    {
      id: '1',
      book: 'John',
      chapter: 3,
      verse: 16,
      text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'
    },
    {
      id: '2',
      book: 'Jeremiah',
      chapter: 29,
      verse: 11,
      text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.'
    },
    {
      id: '3',
      book: 'Philippians',
      chapter: 4,
      verse: 13,
      text: 'I can do all this through him who gives me strength.'
    },
    {
      id: '4',
      book: 'Psalm',
      chapter: 23,
      verse: 1,
      text: 'The Lord is my shepherd, I lack nothing.'
    },
    {
      id: '5',
      book: 'Romans',
      chapter: 8,
      verse: 28,
      text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.'
    },
    {
      id: '6',
      book: 'Isaiah',
      chapter: 40,
      verse: 31,
      text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.'
    }
  ];

  const toggleFavorite = (verseId: string) => {
    setFavorites(prev => 
      prev.includes(verseId) 
        ? prev.filter(id => id !== verseId)
        : [...prev, verseId]
    );
  };

  const renderVerseCard = ({ item }: { item: Verse }) => (
    <View style={styles.verseCard}>
      <View style={styles.verseHeader}>
        <Text style={styles.verseReference}>
          {item.book} {item.chapter}:{item.verse}
        </Text>
        <TouchableOpacity
          onPress={() => toggleFavorite(item.id)}
          style={styles.favoriteButton}
        >
          <Heart 
            size={20} 
            color={favorites.includes(item.id) ? '#D4A574' : '#B8C5D1'}
            fill={favorites.includes(item.id) ? '#D4A574' : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.verseText}>{item.text}</Text>
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select for Message</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8B6F9B', '#A085B5', '#B59BCF']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Holy Bible</Text>
        <Text style={styles.headerSubtitle}>Find inspiration in God's word</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#7B8794" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search verses, books, or topics..."
            placeholderTextColor="#7B8794"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bible Books</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.booksScroll}
          >
            {bibleBooks.map((book, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.bookChip,
                  selectedBook === book && styles.bookChipSelected
                ]}
                onPress={() => setSelectedBook(book)}
              >
                <Book size={16} color={selectedBook === book ? '#FFFFFF' : '#8B6F9B'} />
                <Text style={[
                  styles.bookChipText,
                  selectedBook === book && styles.bookChipTextSelected
                ]}>
                  {book}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Verses</Text>
          <FlatList
            data={popularVerses}
            renderItem={renderVerseCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {favorites.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Favorites</Text>
            <FlatList
              data={popularVerses.filter(verse => favorites.includes(verse.id))}
              renderItem={renderVerseCard}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8D5F0',
    textAlign: 'center',
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
  },
  content: {
    flex: 1,
    padding: 20,
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
  booksScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  bookChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 8,
  },
  bookChipSelected: {
    backgroundColor: '#8B6F9B',
    borderColor: '#8B6F9B',
  },
  bookChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B6F9B',
  },
  bookChipTextSelected: {
    color: '#FFFFFF',
  },
  verseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  verseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  verseReference: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B6F9B',
  },
  favoriteButton: {
    padding: 4,
  },
  verseText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2C3E50',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  selectButton: {
    backgroundColor: '#8B6F9B',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});