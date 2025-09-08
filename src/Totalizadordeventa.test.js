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

describe('Stage A - Subtotal', () => {
it('debería redondear subtotal a 2 decimales', () => {
    const r = calculate({ qty: 3, price: 33.3333 })
    expect(r.subtotal).toBeCloseTo(100.00, 2)
})
})