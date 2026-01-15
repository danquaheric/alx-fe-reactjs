import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';





function App() {
  return (
    <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <Counter />
    </div>
  );
}

export default App;
