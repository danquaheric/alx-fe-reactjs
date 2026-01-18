import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

import './App.css';

function App() {
  const userData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <MainContent />

        <UserProfile
          name="Alice"
          age="25"
          bio="Loves hiking and photography"
        />

        <WelcomeMessage />

        {/* Context API usage */}
        <ProfilePage />

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
