const {
    FIREBASE_CONFIG,
    RolesConfig
} = require("iot-timeseries-label-core");

const {
    FirestoreRolesManagerAppUI
} = require("firestore-roles-manager-ui");

const config = {
    title: "IoT timeseries label — role management",
    firebase: FIREBASE_CONFIG,
    authProviders: ["google.com", "password"],
    roles: RolesConfig,
    basePath: window.location.hostname === "localhost" ? "/dist/" : "/role-management/",
};

FirestoreRolesManagerAppUI.mount("#app", config);