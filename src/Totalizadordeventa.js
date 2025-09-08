// src/lib/totalizer.js
function calculate({ qty, price }) {
  return { subtotal: qty * price }
}
export default calculate
