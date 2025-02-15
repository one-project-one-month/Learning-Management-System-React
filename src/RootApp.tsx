import './index.css';

import { QueryProviders } from './provider/QueryProvider';
import Routes from './routes';

export default function RoutApp() {
  return (
    <QueryProviders>
      <Routes />
    </QueryProviders>
  );
}
