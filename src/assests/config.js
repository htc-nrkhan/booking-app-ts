const configData = process.env;

const config = {};

try {
  config.apiURL =
    configData.REACT_APP_API_BASE_URI ||
    "https://writenodeedu.heartfulness.org/hceportal-dev-api/api/v1/";
  config.apiURL2 =
    configData.REACT_APP_API_BASE_URI ||
    "https://jsonplaceholder.typicode.com/";
  config.basicMailURL = "";
} catch {
  config.apiURL =
    "https://writenodeedu.heartfulness.org/hceportal-dev-api/api/v1/";
  config.basicMailURL = "";
}

config.configData = configData;

config.firebase = {
  apiKey: "AIzaSyAvebIgC-89iVvxjtcgOVoAan8mF85tdQ4",
  authDomain: "booking-app-27159.firebaseapp.com",
  projectId: "booking-app-27159",
  storageBucket: "booking-app-27159.appspot.com",
  messagingSenderId: "572692881950",
  appId: "1:572692881950:web:03f46343db01344f21c40f",
};

export default config;
