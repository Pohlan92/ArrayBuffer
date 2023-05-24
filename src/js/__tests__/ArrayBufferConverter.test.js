import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('тестирование ArrayBufferConverter', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  const result = bufferConverter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
