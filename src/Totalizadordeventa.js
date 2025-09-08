// src/lib/totalizer.js
export function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
function calculate({ qty, price }) {
   const subtotal=round2(qty * price);
return { subtotal}
}
export default calculate
