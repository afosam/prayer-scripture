import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Type, Palette, Music, Share2, Download, Eye } from 'lucide-react-native';

export default function EditorScreen() {
  const [scriptureText, setScriptureText] = useState('For I know the plans I have for you, declares the Lord...');
  const [prayerText, setPrayerText] = useState('Trust in His perfect timing and plan for your life.');
  const [selectedBackground, setSelectedBackground] = useState('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800');
  const [fontSize, setFontSize] = useState(18);
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [selectedFont, setSelectedFont] = useState('serif');

  const backgroundImages = [
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const fontOptions = [
    { name: 'Serif', value: 'serif' },
    { name: 'Sans-serif', value: 'sans-serif' },
    { name: 'Monospace', value: 'monospace' },
  ];

  const colorOptions = ['#FFFFFF', '#000000', '#D4A574', '#8B6F9B', '#2C5F7B', '#7B9B8B'];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#D4A574', '#E6B885', '#F2CC96']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Message Editor</Text>
        <Text style={styles.headerSubtitle}>Create inspiring prayer cards</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Preview Card */}
        <View style={styles.previewSection}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <View style={styles.previewCard}>
            <ImageBackground
              source={{ uri: selectedBackground }}
              style={styles.previewBackground}
              imageStyle={styles.previewBackgroundImage}
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
                style={styles.previewOverlay}
              >
                <Text style={[
                  styles.previewScripture,
                  { 
                    fontSize: fontSize,
                    color: fontColor,
                    fontFamily: selectedFont,
                  }
                ]}>
                  "{scriptureText}"
                </Text>
                <Text style={[
                  styles.previewPrayer,
                  { 
                    fontSize: fontSize - 2,
                    color: fontColor,
                    fontFamily: selectedFont,
                  }
                ]}>
                  {prayerText}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>

        {/* Text Editor */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scripture Text</Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={4}
            value={scriptureText}
            onChangeText={setScriptureText}
            placeholder="Enter your chosen scripture verse..."
            placeholderTextColor="#7B8794"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prayer/Motivational Message</Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={3}
            value={prayerText}
            onChangeText={setPrayerText}
            placeholder="Add your personal prayer or motivational message..."
            placeholderTextColor="#7B8794"
          />
        </View>

        {/* Background Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Background</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.backgroundScroll}>
            {backgroundImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.backgroundOption,
                  selectedBackground === image && styles.backgroundOptionSelected
                ]}
                onPress={() => setSelectedBackground(image)}
              >
                <ImageBackground
                  source={{ uri: image }}
                  style={styles.backgroundThumbnail}
                  imageStyle={styles.backgroundThumbnailImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Font Customization */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Font Style</Text>
          <View style={styles.fontOptions}>
            {fontOptions.map((font, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.fontOption,
                  selectedFont === font.value && styles.fontOptionSelected
                ]}
                onPress={() => setSelectedFont(font.value)}
              >
                <Text style={[
                  styles.fontOptionText,
                  { fontFamily: font.value },
                  selectedFont === font.value && styles.fontOptionTextSelected
                ]}>
                  {font.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Font Size */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Font Size: {fontSize}px</Text>
          <View style={styles.sizeControls}>
            <TouchableOpacity
              style={styles.sizeButton}
              onPress={() => setFontSize(Math.max(12, fontSize - 2))}
            >
              <Text style={styles.sizeButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.sizeDisplay}>
              <Text style={styles.sizeDisplayText}>{fontSize}</Text>
            </View>
            <TouchableOpacity
              style={styles.sizeButton}
              onPress={() => setFontSize(Math.min(32, fontSize + 2))}
            >
              <Text style={styles.sizeButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Font Color */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Font Color</Text>
          <View style={styles.colorOptions}>
            {colorOptions.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  { backgroundColor: color },
                  fontColor === color && styles.colorOptionSelected
                ]}
                onPress={() => setFontColor(color)}
              />
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.previewButton]}>
            <Eye size={20} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.shareButton]}>
            <Share2 size={20} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.downloadButton]}>
            <Download size={20} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#F5E6D3',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  previewSection: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  previewCard: {
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  previewBackground: {
    flex: 1,
  },
  previewBackgroundImage: {
    borderRadius: 16,
  },
  previewOverlay: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  previewScripture: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 28,
  },
  previewPrayer: {
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2C3E50',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  backgroundScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  backgroundOption: {
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  backgroundOptionSelected: {
    borderColor: '#D4A574',
  },
  backgroundThumbnail: {
    width: 80,
    height: 80,
  },
  backgroundThumbnailImage: {
    borderRadius: 9,
  },
  fontOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  fontOption: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  fontOptionSelected: {
    borderColor: '#D4A574',
    backgroundColor: '#D4A574',
  },
  fontOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  fontOptionTextSelected: {
    color: '#FFFFFF',
  },
  sizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  sizeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D4A574',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sizeDisplay: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sizeDisplayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  colorOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  colorOption: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  colorOptionSelected: {
    borderColor: '#D4A574',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  previewButton: {
    backgroundColor: '#7B9B8B',
  },
  shareButton: {
    backgroundColor: '#8B6F9B',
  },
  downloadButton: {
    backgroundColor: '#2C5F7B',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});