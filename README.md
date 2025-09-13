# Daily Prayer & Scripture Message App

A beautiful, spiritual mobile application built with React Native and Expo that helps users create, customize, and share inspirational prayer and scripture messages.

## ✨ Features

### 📖 Built-in Bible Integration
- Searchable scripture library with popular verses
- Easy verse selection and favorites system
- Browse by book, chapter, and verse
- Quick access to inspirational passages

### ✏️ Message Editor
- Dual-text editor for scripture and personal prayer messages
- Real-time preview of your message design
- Intuitive interface for combining text with visuals

### 🎨 Customization Tools
- **Background Gallery**: Curated collection of spiritual and nature-themed wallpapers
- **Font Customization**: Multiple font styles, sizes, and colors
- **Visual Effects**: Smooth transitions and elegant overlays
- **Categories**: Nature, Spiritual, Abstract, Sunrise, Mountains, Ocean themes

### 📱 Sharing & Social Media
- Direct sharing to social media platforms
- Optimized for WhatsApp, Facebook, Instagram, and more
- Save messages to device gallery
- Easy one-tap sharing functionality

### ⏰ Scheduling System
- Daily reminder notifications
- Automatic message scheduling
- Customizable reminder times
- Multi-platform sharing automation

### 🎵 Audio Integration (Planned)
- Background music options
- Sound effects for transitions
- Voice narration capabilities
- Peaceful ambient sounds

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prayer-scripture-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the app:
   - Scan the QR code with Expo Go app on your mobile device
   - Press `i` for iOS simulator
   - Press `a` for Android emulator

## 📱 App Structure

### Navigation
The app uses tab-based navigation with five main sections:

- **🏠 Home**: Daily verse, quick actions, and user statistics
- **📖 Bible**: Scripture search and verse selection
- **✏️ Editor**: Message creation and customization
- **🖼️ Gallery**: Background image collection
- **⚙️ Settings**: App preferences and scheduling

### Key Screens

#### Home Dashboard
- Daily featured verse
- Prayer streak tracking
- Quick action buttons
- Recent message previews

#### Bible Library
- Book selection interface
- Popular verses collection
- Search functionality
- Favorites management

#### Message Editor
- Scripture text input
- Prayer/motivational message input
- Background image selection
- Font and color customization
- Real-time preview
- Export and sharing options

#### Background Gallery
- Categorized image collection
- Favorites system
- High-quality spiritual imagery
- Easy selection interface

#### Settings Panel
- Notification preferences
- Daily reminder scheduling
- Social media integration
- App appearance options

## 🎨 Design Philosophy

### Color Palette
- **Primary Blue**: `#2C5F7B` - Trust and spirituality
- **Warm Gold**: `#D4A574` - Divine light and warmth
- **Soft Purple**: `#8B6F9B` - Meditation and peace
- **Earth Green**: `#7B9B8B` - Growth and renewal
- **Light Background**: `#F8F9FA` - Purity and clarity

### Typography
- **Headers**: Bold, readable fonts for titles
- **Body Text**: Clean, legible fonts for scripture
- **Accent Text**: Elegant fonts for quotes and prayers

### User Experience
- Intuitive tab navigation
- Smooth animations and transitions
- Consistent visual hierarchy
- Accessible design principles
- Mobile-first responsive layout

## 🛠️ Technical Stack

### Frontend Framework
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and build tools
- **TypeScript**: Type-safe JavaScript development

### UI Components
- **Expo Router**: File-based navigation system
- **React Native Reanimated**: Smooth animations
- **React Native Gesture Handler**: Touch interactions
- **Lucide React Native**: Beautiful icon library

### Styling
- **StyleSheet**: React Native styling system
- **Linear Gradient**: Beautiful gradient backgrounds
- **Image Background**: Wallpaper and texture support

### Development Tools
- **Expo CLI**: Development and build tooling
- **TypeScript**: Static type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting

## 📂 Project Structure

```
prayer-scripture-app/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── index.tsx      # Home dashboard
│   │   ├── bible.tsx      # Scripture library
│   │   ├── editor.tsx     # Message editor
│   │   ├── gallery.tsx    # Background gallery
│   │   ├── settings.tsx   # App settings
│   │   └── _layout.tsx    # Tab navigation layout
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 error screen
├── hooks/                 # Custom React hooks
├── assets/                # Static assets (images, fonts)
├── package.json          # Dependencies and scripts
├── app.json             # Expo configuration
└── tsconfig.json        # TypeScript configuration
```

## 🔧 Configuration

### Expo Configuration (`app.json`)
- App name and metadata
- Platform-specific settings
- Plugin configurations
- Build and deployment settings

### TypeScript Configuration
- Strict type checking enabled
- Path aliases for clean imports
- Expo-specific type definitions

## 🚀 Building for Production

### Web Build
```bash
npm run build:web
```

### Mobile Build (requires Expo account)
```bash
# iOS
expo build:ios

# Android
expo build:android
```

## 📱 Platform Support

- **iOS**: iPhone and iPad support
- **Android**: Phone and tablet support
- **Web**: Progressive Web App capabilities

## 🤝 Contributing

We welcome contributions to make this spiritual app even better! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Write meaningful commit messages
- Test on both iOS and Android platforms
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels**: High-quality background images
- **Lucide**: Beautiful icon library
- **Expo Team**: Amazing development platform
- **React Native Community**: Continuous innovation
- **Open Source Contributors**: Making this possible

## 📞 Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Contact the development team
- Join our community discussions

## 🔮 Roadmap

### Upcoming Features
- [ ] Audio integration (background music, narration)
- [ ] Advanced visual effects and animations
- [ ] Offline Bible access
- [ ] Community sharing features
- [ ] Prayer journal integration
- [ ] Multi-language support
- [ ] Advanced scheduling options
- [ ] Cloud sync for favorites and settings

### Long-term Vision
- AI-powered verse recommendations
- Community prayer requests
- Advanced analytics and insights
- Integration with church management systems
- Collaborative message creation

---

*"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future." - Jeremiah 29:11*

Built with ❤️ and faith for the spiritual community.