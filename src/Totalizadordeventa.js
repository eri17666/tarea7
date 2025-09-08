// src/lib/totalizer.js
export function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
function calculate({ qty, price }) {
   const subtotal=round2(qty * price)
   let discountRate=0
   if(subtotal>=7000) discountRate=0.07
   else if(subtotal >=3000) discountRate=0.05
   else if(subtotal>=1000) discountRate=0.03
   const discount=round2(subtotal * discountRate)
return { subtotal,discountRate,discount};
}
export default calculate
