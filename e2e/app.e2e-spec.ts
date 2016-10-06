import { MycantabriaVisitsPage } from './app.po';

describe('mycantabria-visits App', function() {
  let page: MycantabriaVisitsPage;

  beforeEach(() => {
    page = new MycantabriaVisitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
