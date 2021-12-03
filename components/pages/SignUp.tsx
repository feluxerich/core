import { Button } from '@components/Button';
import Full from '@components/Full';
import { Input } from '@components/Input';
import { basicFetch } from '@utils/fetch';
import { useRouter } from 'next/dist/client/router';
import React, { createRef, useState } from 'react';

const SignUp = () => {
  const firstnameRef = createRef<HTMLInputElement>();
  const lastnameRef = createRef<HTMLInputElement>();
  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const discordRef = createRef<HTMLInputElement>();

  const Router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await basicFetch(`/api/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstname: firstnameRef.current?.value,
        lastname: lastnameRef.current?.value,
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
        discord: discordRef.current?.value,
      }),
    });
    await basicFetch(`/api/auth/create`, {
      method: 'POST',
      body: JSON.stringify({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      }),
    });
    Router.push('/');
  };

  return (
    <Full className="flex items-center justify-center">
      <div className="flex flex-col w-full max-w-xs mb-2">
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <Input ref={firstnameRef} placeholder="First name" type="text" className="mb-2" required />
            <Input ref={lastnameRef} placeholder="Last name" type="text" className="mb-2" required />
          </div>

          <Input ref={usernameRef} placeholder="Username" type="text" className="mb-2" required />
          <Input ref={passwordRef} placeholder="Password" type="password" className="mb-2" required minLength={8} />
          <Input ref={discordRef} placeholder="Discord ID" type="discord" className="mb-2" required />
          <Button className="w-full" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </Full>
  );
};

export default SignUp;
