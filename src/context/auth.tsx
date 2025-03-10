import { ReactNode, useState, useEffect, useContext, createContext } from 'react';
import { User } from '@supabase/supabase-js';
import supabase from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('系統錯誤，請稍後再試');
    } else {
      setUser(null);
      toast.success('登出成功');
      navigate('/');
    }
  };


  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const { data: { session }} = await supabase.auth.getSession();
      setUser(session?.user || null);
      setIsLoading(false);
    }
    getUser();

    const {data: authListener} = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        setUser(session?.user || null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user,
      isLoading, 
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used in AuthProvider');
  }
  return context;
}
