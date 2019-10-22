import { UIState } from './ui/ui';
import { AboutState } from './about/about';
import { PortfolioState } from './portfolio/portfolio';

interface GenericActionError {
  message?: string;
}

interface RootState {
  ui: UIState;
  about: AboutState;
  portfolio: PortfolioState;
}

export { GenericActionError, RootState };
