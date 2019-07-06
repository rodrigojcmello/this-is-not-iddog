import { RouteConfig } from 'react-router-config';
import uniqid from 'uniqid';
import Feed from '../screens/Feed';
import Signup from '../screens/Signup';

interface Config extends RouteConfig {
  isPrivate?: boolean;
  id: string;
}

const routes: Config[] = [
  {
    component: Signup,
    path: '/signup',
    id: uniqid()
  },
  {
    component: Feed,
    path: '/feed',
    id: uniqid(),
    isPrivate: true
  }
];

export default routes;
