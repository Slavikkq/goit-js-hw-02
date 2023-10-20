function getShippingCost(country) {
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;

    default:
      console.log('Sorry, there is no delivery to your country.');
  }
  console.log(`Shipping to ${country} will cost ${price} credits`);
}
getShippingCost('Australia');
getShippingCost('Germany');
getShippingCost('China');
getShippingCost('Chile');
getShippingCost('Jamaica');
getShippingCost('Sweden');
