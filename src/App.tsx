import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext, useThemeProvider } from './hooks/useTheme';
import { Navigation } from './components/Navigation';
import Dashboard from './pages/Dashboard';
import TokensPage from './pages/TokensPage';
import './App.css';

function App() {
  const themeValue = useThemeProvider();

  return (
    <ThemeContext.Provider value={themeValue}>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tokens" element={<TokensPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;