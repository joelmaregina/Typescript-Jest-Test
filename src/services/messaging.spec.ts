import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // SUT => System Under Test
    const sut = createSut();

    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Mensagem enviada:" and "msg"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('testee');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: ', 'testee');
  });
});
