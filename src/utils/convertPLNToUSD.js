import {type} from "@testing-library/user-event/dist/type";

export const convertPLNToUSD = (PLN) => {
  if (typeof PLN === 'string' || typeof PLN === 'number') {
    if (typeof PLN === 'string' || PLN.length === 0) {
      return NaN
    } else if (PLN < 0) {
      return '$0.00'
    } else {
      const PLNtoUSD = PLN / 3.5
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ')
    }
  } else {
    return 'Error'
  }
}
