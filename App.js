import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';


// or any pure javascript modules available in npm
import { Card, Appbar, Snackbar, FAB } from 'react-native-paper';

export default function App() {

  // Snackbar
  const [heartSnackbarVisible, setHeartSnackbarVisible] = React.useState(false);
  const onToggleHeartSnackBar = () => setHeartSnackbarVisible(!heartSnackbarVisible);
  const onDismissHeartSnackBar = () => setHeartSnackbarVisible(false);

  const openGHLink = () => {
    let link = document.createElement('a');
    link.href = "https://github.com/ChoiTommy/";
    link.click();
  }

  const openMyPageLink = () => {
    let link = document.createElement('a');
    link.href = "https://choitommy.github.io";
    link.click();
  }

  return (
    <View style={styles.container}>

      <Appbar.Header>
        <Appbar.Content title="Tommy Choi" />
        <Appbar.Action icon="heart" onPress={() => onToggleHeartSnackBar()} />
        <Appbar.Action icon="github" onPress={() => openGHLink()} />
      </Appbar.Header>

      <Text style={styles.paragraph}>
        Hey you, welcome to my homepage/Android app/iOS app/PWA app!
      </Text>

      <Card mode="elevated" elevation={3} style={styles.card}>
        <Text>
          Memememememememmememe
          
          mmemememememe
          
          It's memememememememe
        </Text>
      </Card>

      <Snackbar
        visible={heartSnackbarVisible}
        onDismiss={() => onDismissHeartSnackBar()}
        action={{
          label: 'Love it',
          onPress: () => {
            onDismissHeartSnackBar();
          },
        }}>
        Glad u like it :')
      </Snackbar>

      <FAB
        icon="web"
        style={styles.fab}
        onPress={() => openMyPageLink()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 24,
    borderRadius: 8,
    margin: 12
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
