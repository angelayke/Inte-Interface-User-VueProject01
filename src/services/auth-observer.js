import ObserverOne from "./observerOne";

export const authEvents = {
    onLogin: "onLogin",
    onLogout: "onLogout",
}

const authObserverOne = new ObserverOne (authEvents);

export default authObserverOne;