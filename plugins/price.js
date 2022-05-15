import moment from "moment-jalaali";

export default (context, inject) => {
  inject('getDelimitedPrice', getDelimitedPrice)
  inject('toCurrency', toCurrency)
  inject('persianDate', persianDate)
  inject('calculatePrice', calculatePrice)
}

function persianDate(timestamp) {
  return moment.unix(timestamp);
}

function getDelimitedPrice(price, salePrice, count = 1) {
  let calculatedPrice = calculatePrice(price, salePrice, count)
  if (calculatedPrice === null) {
    return 'ناموجود'
  } else {
    return toCurrency(calculatedPrice)
  }
}

function calculatePrice(price, salePrice, count = 1) {
  if ((price === 0 || price === null) && (salePrice === 0 || salePrice === null)) {
    return null
  } else if (price > 0) {
    if (salePrice > 0) {
      return salePrice * count
    } else if (price > 0) {
      return price * count
    }
  } else {
    return null
  }
}

function toCurrency(value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('fa-IR', {
    style: 'currency',
    currency: 'IRR',
    minimumFractionDigits: 0
  });
  const currency = formatter.format(value)
  return currency.substring(5, currency.length);
}
