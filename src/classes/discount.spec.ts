import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    //toBe é mais preciso do que o o toBecloseTo
    expect(sut.cauculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should have 50% discount o  price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.cauculate(150.5)).toBeCloseTo(75.25);
  });

  it('Should have 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.cauculate(100)).toBeCloseTo(90);
  });
});
