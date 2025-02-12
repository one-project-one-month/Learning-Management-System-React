import Admin from './Admin';
import UnAuth from './UnAuth';

export default function Routes() {
  const isAdmin: boolean = true;

  if (isAdmin) {
    return <Admin />;
  } else {
    return <UnAuth />;
  }
}
