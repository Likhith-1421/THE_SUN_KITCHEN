import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { clearToken, getToken, getTokenFromUrl, setToken } from '../auth/tokenStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = useCallback((token) => {
    setToken(token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post('/api/logout');
    } catch {
      // still clear local session if backend is unreachable
    }
    clearToken();
    setIsAuthenticated(false);
    navigate('/', { replace: true });
  }, [navigate]);

  useEffect(() => {
    let cancelled = false;

    async function verifySession() {
      const urlToken = getTokenFromUrl();
      if (urlToken) {
        setToken(urlToken);
      }

      const token = getToken();
      if (!token) {
        if (!cancelled) {
          setIsAuthenticated(false);
          setLoading(false);
        }
        return;
      }

      try {
        await api.get('/api/GetProfile');
        if (!cancelled) {
          setIsAuthenticated(true);
        }
      } catch {
        clearToken();
        if (!cancelled) {
          setIsAuthenticated(false);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    verifySession();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, loading, login, logout }),
    [isAuthenticated, loading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
