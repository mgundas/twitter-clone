"use client";
import { createContext, useContext, useState } from 'react';
import { createClient } from "@/utils/supabase/server";
import type { Session, User } from '@supabase/auth-helpers-nextjs';

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        // TODO: Call Supabase
    }

    const logout = async () => {
        // TODO: Call Supabase
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}