import base64ToUint8Array from '../base64-to-uint8-array';

const pushManager = {
  subscribe: async () => {
    const registration = await navigator.serviceWorker.ready;

    if (!registration.pushManager) {
      throw new Error('Error subscribing');
    }

    const vapidPublicKey = process.env.REACT_APP_PUBLIC_VAPID_KEY;

    return await registration
      .pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(vapidPublicKey),
      });
  },
  unsubscribe: async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      throw new Error('Error unsubscribing');
    }

    return await subscription.unsubscribe();
  }
}
export default pushManager;