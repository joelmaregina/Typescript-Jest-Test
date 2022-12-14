import { Persistency } from './persistency';

const createSut = () => {
  return new Persistency();
};

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //Limpa entre os 'it's

  it('Should return undefined', () => {
    // SUT => System Under Test
    const sut = createSut();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Pedido salvo com sucesso.."', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
