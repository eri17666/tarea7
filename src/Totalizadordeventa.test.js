import calculate from "./Totalizadordeventa";

describe('Stage A - Subtotal', () => {
it('debería existir la función calculate', () => {
    expect(typeof calculate).toBe('function')
})
})

describe('Stage A - Subtotal', () => {
  it('debería calcular subtotal = qty * price', () => {
    const r = calculate({ qty: 2, price: 100 })
    expect(r.subtotal).toBe(200)
})
})