import { ReactNode, useState, useEffect, useContext, createContext } from 'react';
import { User } from '@supabase/supabase-js';
import supabase from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => void;
  login: ({ email, password}: {
    email: string;
    password: string;
    redirectToURL?: string;
  }) => Promise<void>;
  register: ({email, password, name, phone, redirectToURL}: {
    email: string;
    password: string;
    name: string;
    phone: string;
    redirectToURL?: string;
  }) => Promise<void>;
}

type UserProfile = {
  id: string;        // sync with AuthUser.id
  name: string;
  email: string;
  phone: string;
}

interface Errors {
  email?: string;
  password?: string;
  confirm_password?: string;
  name?: string;
  phone?: string;
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
  
  const register = async({
    email,
    password,
    name,
    phone,
    redirectToURL
  }: {
    email: string;
    password: string;
    name: string;
    phone: string;
    redirectToURL?: string;
  }) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name,
            name: name,
            phone: phone,
            email: email,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        throw new Error(sessionError.message);
      }

      if (!sessionData?.session?.user) {
        throw new Error('找不到註冊資料');
      }

      const { user: sessionUser } = sessionData.session;
      
      try {
        const newUserProfile: UserProfile = {
          id:    sessionUser.id,
          name:  sessionUser.user_metadata.name,
          email: sessionUser.user_metadata.email,
          phone: sessionUser.user_metadata.phone,
        } 
        const { error: createUserError } = await supabase
          .from('users')
          .insert([newUserProfile]);

        if (createUserError) {
          throw new Error(`創建使用者時發生錯誤：${createUserError.message}`);
        }

        toast.success('創建使用者成功');

        if (redirectToURL) {
          navigate(redirectToURL);
        } else {
          navigate('/');
        }

      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(error);
        }
        toast.error('系統錯誤，請稍後再試');
      } finally {
        setIsLoading(false);
      }

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
      toast.error('系統錯誤，請稍後再試');
    } finally {
      setIsLoading(false);
    }
    
  };

  const login = async ({email, password, redirectToURL}: {
    email: string,
    password: string,
    redirectToURL?: string,
  }) => {

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email, 
        password
      });
  
      if (loginError) {
        throw new Error(loginError?.message || '登入失敗，請稍後再試');
      } 

      if (!data?.user) {
        throw new Error('');
      }

      setUser(data.user);
      toast.success('登入成功');

      if (redirectToURL) {
        navigate(redirectToURL);
      } else {
        navigate('/');
      }
      
    } catch(error) {
      if (error instanceof Error) {
        console.error('登入錯誤:', error.message);
      } else {
        console.error(error);
      }
      toast.error('登入失敗，請稍後再試');
    }
  }

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const { data: { session }} = await supabase.auth.getSession();
      setUser(session?.user || null);
      setIsLoading(false);
    }
    getUser();

    const {data: authListener} = supabase.auth.onAuthStateChange((event, session) => {
      switch(event) {
        case 'SIGNED_IN':
          if (session?.user) {
            setUser(session?.user);
          } else {
            console.error('SIGNED_IN event triggered but no user found');
            setUser(null);
          }
          break;
        case 'SIGNED_OUT':
          setUser(null);
          break;
        default:
          break;
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
      login,
      register,
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
