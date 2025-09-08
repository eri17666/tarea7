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

describe('Stage B - Descuentos', () => {
it('no aplica descuento si subtotal < 1000', () => {
    const r = calculate({ qty: 1, price: 999 })
    expect(r.discountRate).toBe(0)
    expect(r.discount).toBe(0)
})
})

describe('Stage B - Descuentos', () => {
  it('aplica 3% si subtotal >= 1000', () => {
    const r = calculate({ qty: 1, price: 1000 })
    expect(r.discountRate).toBe(0.03)
    expect(r.discount).toBe(30)
  })
})

describe('Stage B - Descuentos', () => {
  it('aplica 5% si subtotal >= 3000', () => {
    const r = calculate({ qty: 3, price: 1000 })
    expect(r.discountRate).toBe(0.05)
    expect(r.discount).toBe(150)
  })
})

describe('Stage B - Descuentos', () => {
  it('aplica 7% si subtotal >= 7000', () => {
    const r = calculate({ qty: 7, price: 1000 })
    expect(r.discountRate).toBe(0.07)
    expect(r.discount).toBe(490)
  })
})