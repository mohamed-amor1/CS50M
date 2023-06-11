# React Native Cheatsheet for Novices

**Components:**

- `View`: Container for grouping and arranging other components.
- `Text`: Displays text content.
- `Image`: Renders images.
- `ScrollView`: Scrollable container for large amounts of content.
- `TextInput`: Accepts user input.
- `TouchableOpacity`: Wraps components to make them respond to touch events.
- `FlatList`: Efficiently renders large lists of data.
- `StyleSheet`: Used to create and manage styles for components.

**Props:**

- `style`: Defines styles for components.
- `onPress`: Specifies a function to be called when a component is pressed.
- `source`: Specifies the source of an image component.
- `value`: Sets or retrieves the value of a text input.
- `onChangeText`: Specifies a function to be called when the text input's value changes.
- `data`: Data array for `FlatList` or `SectionList`.
- `renderItem`: Function to render individual items in a list.

**State:**

- `useState`: Hook for managing component state.
- `setState`: Function to update the component state.

**Styling:**

- Inline Style: Define styles directly in component props.
- `StyleSheet.create`: Create a stylesheet object with predefined styles.
- Flexbox: Use `flex` property for flexible component layout.
- Predefined Styling: Use style props like `color`, `fontSize`, `fontWeight`, etc.

**Navigation:**

- `react-navigation`: Library for navigation between screens.
- Stack Navigator: Allows navigation using a stack of screens.
- Tab Navigator: Enables navigation using tabs.
- Drawer Navigator: Provides a side drawer for navigation.

**API Calls:**

- `fetch`: Fetches data from an API endpoint.
- `axios`: A popular library for making HTTP requests.

**Debugging:**

- `console.log`: Print debug information to the console.
- React Native Debugger: Standalone debugging tool.
- `react-devtools`: Chrome extension for inspecting React components.

**Development:**

- `react-native run-android`: Run the app on an Android device/emulator.
- `react-native run-ios`: Run the app on an iOS simulator/device.
- `react-native start`: Start the Metro bundler.
