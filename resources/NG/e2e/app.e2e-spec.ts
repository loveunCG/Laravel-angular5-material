import { UIStarterPage } from './app.po';

describe('ui-starter', function() {
  let page: UIStarterPage;

  beforeEach(() => {
    page = new UIStarterPage();
  });

  it('should display page', () => {
    page.navigateTo();
  });
});
