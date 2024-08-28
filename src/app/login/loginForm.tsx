'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      console.log(loginData,'login data')
      const response = await axios.post('/api/auth/login', { ...loginData });
      router.push('/dashboard'); 
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Login failed');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={loginData.email}
        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
        placeholder="Email address"
      />
      <Input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={loginData.password}
        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
        placeholder="Password"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" fullWidth>
        Log in
      </Button>
    </form>
  );
}