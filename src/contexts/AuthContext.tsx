import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  role: 'user' | 'owner';
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  googleLogin: () => Promise<void>;
  appleLogin: () => Promise<void>;
  phoneLogin: (phone: string) => Promise<void>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Temporary development user
  const devUser: User = {
    id: '123',
    name: 'Development User',
    email: 'dev@example.com',
    role: 'owner', // Change this to 'user' to test user dashboard
    profileImage: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg'
  };

  const [user, setUser] = useState<User | null>(devUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Always authenticated for development

  // Placeholder functions
  const login = async () => {};
  const register = async () => {};
  const logout = () => {};
  const googleLogin = async () => {};
  const appleLogin = async () => {};
  const phoneLogin = async () => {};
  const verifyOtp = async () => {};

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    googleLogin,
    appleLogin,
    phoneLogin,
    verifyOtp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};