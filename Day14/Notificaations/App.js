import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

  useEffect(() => {
    let isMounted = true;
    const subscription = Notifications.addNotificationReceivedListener(
      (response) => {
        console.log(response);
      }
    );
    
    const subscription2 = Notifications.addNotificationClearedListener(
      (response) => {
        console.log("response of clear ---> ", response);
      }
    );

    console.log("subscription ---> ", subscription);

    return () => {
      isMounted: false,
      subscription.remove();
    };
  }, []);

  async function scheduleNotification() {
    try {
      const response = await Notifications.getPermissionAsync({});
      if(!response.granted) {
        Alert.alert("Please give the Notification Permission to this app");
        return;
      }

      await Notifications.scheduleNotificationAsync ({
        content: {
          title: "Hello, ",
          body: "This is Notification",
          data: { data: 'goes here', test: { test1: "more data"}},
        },
        trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
      });
    } catch (error) {
        console.log("Error Occurred", error);
    }
  }



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button  title="Show notification" onPress={scheduleNotification}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
