const logEventUtil = (eventName, additionalInfoObj) => {
  let searchParams = {};

  if ('URLSearchParams' in window) {
    searchParams = new URLSearchParams(window.location.search.substring(1));
  }

  loggingjs.logEvent(null, eventName, {
    eventName: eventName,
    info: {
      input: searchParams.get('input'),
      unique_id: searchParams.get('unique_id'),
      interface: 'old',
      ...additionalInfoObj,
    },
  });
};

const onClickAddToCart = (eventName) => {
  logEventUtil(eventName);
  alert(
    'Cupcake added to cart! This is the end of the flow, you may now close this tab.',
  );
};
