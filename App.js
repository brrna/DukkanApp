import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

