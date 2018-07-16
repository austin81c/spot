import { SpotRoutingModule } from './spot-routing.module';

describe('SpotRoutingModule', () => {
  let spotRoutingModule: SpotRoutingModule;

  beforeEach(() => {
    spotRoutingModule = new SpotRoutingModule();
  });

  it('should create an instance', () => {
    expect(spotRoutingModule).toBeTruthy();
  });
});
