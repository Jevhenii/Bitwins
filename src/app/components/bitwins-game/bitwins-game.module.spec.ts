import { BitwinsGameModule } from './bitwins-game.module';

describe('BitwinsGameModule', () => {
  let bitwinsGameModule: BitwinsGameModule;

  beforeEach(() => {
    bitwinsGameModule = new BitwinsGameModule();
  });

  it('should create an instance', () => {
    expect(bitwinsGameModule).toBeTruthy();
  });
});
