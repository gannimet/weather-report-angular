import { TemperatureCelsiusPipe } from './temperature-celsius.pipe';

describe('TemperatureCelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureCelsiusPipe();
    expect(pipe).toBeTruthy();
  });
});
