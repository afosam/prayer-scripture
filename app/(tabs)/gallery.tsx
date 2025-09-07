import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Download, Heart, Search, Filter } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const imageWidth = (width - 60) / 2;

interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
  isFavorite?: boolean;
}

export default function GalleryScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = ['All', 'Nature', 'Spiritual', 'Abstract', 'Sunrise', 'Mountains', 'Ocean'];

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      title: 'Golden Sunset'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Spiritual',
      title: 'Cross Silhouette'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      title: 'Mountain Vista'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Ocean',
      title: 'Peaceful Waters'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sunrise',
      title: 'Dawn Light'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Abstract',
      title: 'Soft Clouds'
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mountains',
      title: 'Majestic Peaks'
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      title: 'Forest Path'
    },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleFavorite = (imageId: string) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7B9B8B', '#95B5A5', '#AFCFBF']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Background Gallery</Text>
        <Text style={styles.headerSubtitle}>Choose the perfect backdrop for your message</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Category Filter */}
        <View style={styles.filterSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryChip,
                  selectedCategory === category && styles.categoryChipSelected
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  styles.categoryChipText,
                  selectedCategory === category && styles.categoryChipTextSelected
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Image Grid */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.imageGrid}>
          <View style={styles.imageRow}>
            {filteredImages.map((image, index) => (
              <TouchableOpacity
                key={image.id}
                style={[
                  styles.imageCard,
                  index % 2 === 1 && styles.imageCardRight
                ]}
                activeOpacity={0.8}
              >
                <ImageBackground
                  source={{ uri: image.url }}
                  style={styles.imageBackground}
                  imageStyle={styles.imageBackgroundStyle}
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    style={styles.imageOverlay}
                  >
                    <View style={styles.imageActions}>
                      <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => toggleFavorite(image.id)}
                      >
                        <Heart 
                          size={20} 
                          color={favorites.includes(image.id) ? '#D4A574' : '#FFFFFF'}
                          fill={favorites.includes(image.id) ? '#D4A574' : 'transparent'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.actionButton}>
                        <Download size={20} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageInfo}>
                      <Text style={styles.imageTitle}>{image.title}</Text>
                      <Text style={styles.imageCategory}>{image.category}</Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <View style={styles.favoritesSection}>
            <Text style={styles.sectionTitle}>Your Favorites</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {galleryImages
                .filter(img => favorites.includes(img.id))
                .map((image) => (
                  <TouchableOpacity key={image.id} style={styles.favoriteItem}>
                    <ImageBackground
                      source={{ uri: image.url }}
                      style={styles.favoriteImage}
                      imageStyle={styles.favoriteImageStyle}
                    >
                      <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.6)']}
                        style={styles.favoriteOverlay}
                      >
                        <Text style={styles.favoriteTitle}>{image.title}</Text>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        )}
      </View>
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
    color: '#E8F4F0',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  filterSection: {
    marginBottom: 20,
  },
  categoryScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryChipSelected: {
    backgroundColor: '#7B9B8B',
    borderColor: '#7B9B8B',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7B9B8B',
  },
  categoryChipTextSelected: {
    color: '#FFFFFF',
  },
  imageGrid: {
    flex: 1,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageCard: {
    width: imageWidth,
    height: imageWidth * 1.2,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  imageCardRight: {
    marginLeft: 0,
  },
  imageBackground: {
    flex: 1,
  },
  imageBackgroundStyle: {
    borderRadius: 16,
  },
  imageOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  imageActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageInfo: {
    alignItems: 'flex-start',
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  imageCategory: {
    fontSize: 12,
    color: '#D4A574',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  favoritesSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 16,
  },
  favoriteItem: {
    width: 120,
    height: 80,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  favoriteImage: {
    flex: 1,
  },
  favoriteImageStyle: {
    borderRadius: 12,
  },
  favoriteOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },
  favoriteTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});