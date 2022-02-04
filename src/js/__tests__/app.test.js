import Validator from '../app';

test.each([
  ['Scooby_Doo', 'корректно'],
  ['master1', 'некорректно'],
  ['123456', 'некорректно'],
  ['12qwerty', 'некорректно'],
  ['go1234go', 'некорректно'],
  ['user12-netology', 'корректно'],
  ['user123user', 'корректно'],
  ['_user', 'некорректно'],
  ['USER-', 'некорректно'],
  ['-_-_', 'некорректно'],
  ['Mister2.0x', 'некорректно'],
  ['Rikki-Tikki-Tavi', 'корректно'],
])(
  'Введенное имя пользователя %s %s',
  (name, expected) => {
    const validator = new Validator(name);
    const received = validator.validateUsername();
    expect(received).toBe(expected);
  },
);
