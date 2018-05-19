self.addEventListener('push', event => {
  // Possivel problema de segurança :
  const { title, ...options } = event.data.json();
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});