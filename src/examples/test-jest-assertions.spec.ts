// O IDEAL é a criação de um teste para cada coisa (facilita encontrar onde está o erro), mas como se trata de apenas um exemplo, para redução do número de linhas de código. faremos todos os 'expects' no mesmo "it":
describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); //para checar objetos

    expect(number).not.toBeNaN();
    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('2. Should test jest assertions with objects', () => {
    const person = { name: 'Joelma', age: 29 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 29);

    expect(person.name).toBe('Joelma');
  });
});
