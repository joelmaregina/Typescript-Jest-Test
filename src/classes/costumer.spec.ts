import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Maria', 'Silva', '111.222.333-45');
    expect(sut).toHaveProperty('firstName', 'Maria');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '111.222.333-45');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Joelma', 'Silva', '608.160.906-10');
    expect(sut.getName()).toBe('Joelma Silva');
    expect(sut.getIDN()).toBe('608.160.906-10');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('IFBA', '222');
    expect(sut).toHaveProperty('name', 'IFBA');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
