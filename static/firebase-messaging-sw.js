importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// const firebaseConfig = {
//     apiKey: "AIzaSyCoXfS6KAQBUTn_jrKuR97LoXZhbI_49y8",
//     authDomain: "logapp-b6cfc.firebaseapp.com",
//     projectId: "logapp-b6cfc",
//     storageBucket: "logapp-b6cfc.appspot.com",
//     messagingSenderId: "169012847205",
//     appId: "1:169012847205:web:9e5c330380a1dc344a9c8c"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyDOle4kBrkw4xjalJFzGpt1lxQbtQxrTn8",
    authDomain: "notification-for-website.firebaseapp.com",
    projectId: "notification-for-website",
    storageBucket: "notification-for-website.appspot.com",
    messagingSenderId: "625355051912",
    appId: "1:625355051912:web:bc8d07aee4630bc947603d"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging()
    messaging.onBackgroundMessage((payload) => {
        console.log(
            "[firebase-messaging-sw.js] Received background message ",
            payload
        )
    })