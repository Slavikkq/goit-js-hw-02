function formatMessage(message, maxLength) {
  if (message > maxLength) {
    console.log(message.slice(0, maxLength));
  }
}
