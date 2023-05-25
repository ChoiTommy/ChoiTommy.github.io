import React, { useState } from "react";
import { Pressable, Button, View, StyleSheet } from "react-native";
import { AppBar, HStack, IconButton, Provider, Surface, Stack, Snackbar } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import DialogBox from "./components/DialogBox";

const App = () => {
  
  // GitHub Dialog
  const [githubDialogVisible, setGithubDialogVisible] = useState(false);
  const [loveSnackbarVisible, setLoveSnackbarVisible] = useState(false);


  const onGithubDialogDismiss = () => {
    setGithubDialogVisible(false);
  }
  const onGithubDialogPositive = () => {
    setGithubDialogVisible(false);
    let link = document.createElement('a');
    link.href = "https://github.com/ChoiTommy/";
    link.click();
  }
  const onGithubDialogNegative = () => {
    setGithubDialogVisible(false);
  }
  
  return (
    <>
      <AppBar
        title="Tommy Choi"
        color="pink"
        tintColor="red"
        leading={props => (
          <IconButton 
            icon={props => <Icon name="menu" {...props} />}
            onPress={() => alert("To be implemented...")}
            {...props} 
          />
        )}
        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="heart" {...props} />}
              onPress={() => setLoveSnackbarVisible(true)}
              {...props}
            />
            <IconButton
              icon={props => <Icon name="github" {...props} />}
              onPress={() => setGithubDialogVisible(true)}
              {...props}
            />
          </HStack>
        )}
      />

      <Stack fill center spacing={4}>
        <Surface
          elevation={6}
          category="medium"
          style={{ width: 70, height: 70 }}
        />
        <Surface
          elevation={6}
          category="medium"
          style={{ width: 70, height: 70 }}
        />
        <Surface
          elevation={6}
          category="medium"
          style={{ width: 70, height: 70 }}
        />
      </Stack>
    
      <DialogBox
        visibility={githubDialogVisible}
        headerText="My GitHub homepage"
        contentText="Go to my GitHub page?"
        onDismiss={() => onGithubDialogDismiss()}
        onPressPositive={() => onGithubDialogPositive()}
        onPressNegative={() => onGithubDialogNegative()}
      />

      <Snackbar
        visibility={loveSnackbarVisible}
        message="Glad you love it :') I won't go away to stay with u"
        style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
      />

    </>
  );
}

const AppProvider = () => (
  <Provider>
    <App />
  </Provider>
);


export default AppProvider;