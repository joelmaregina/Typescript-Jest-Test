import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have properties name and price', () => {
    const sut = createSut('Livro', 30.68);

    expect(sut).toHaveProperty('name', 'Livro');
    expect(sut.price).toBeCloseTo(30.68);
  });
});
