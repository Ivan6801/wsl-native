import React from "react";
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers/";
import AuthScreen from "./src/screens/auth";

const store = createStore(rootReducer, applyMiddleware(thunk));

// import Constants from "expo-constants";
// import firebase from "firebase/app";

// if (firebase.apps.length == 0) {
//   firebase.initializeApp(Constants.manifest.web.config.firebase);
// }

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AuthScreen />
      </SafeAreaView>
    </Provider>
  );
}
