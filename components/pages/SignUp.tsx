import { Button } from '@components/Button';
import Full from '@components/Full';
import { Input } from '@components/Input';
import { useRouter } from 'next/dist/client/router';
import React, { createRef, useState } from 'react';

const SignUp = () => {
  const mailRef = createRef<HTMLInputElement>();
  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const discordRef = createRef<HTMLInputElement>();

  const Router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <Full className="flex items-center justify-center">
      <div className="mb-2 w-full max-w-xs flex flex-col">
        <form className="mb-2" onSubmit={handleSubmit} action="">
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="First name" type="text" className="mb-2" required />
            <Input placeholder="Last name" type="text" className="mb-2" required />
          </div>

          <Input ref={usernameRef} placeholder="Username" type="text" className="mb-2" required />
          <Input ref={passwordRef} placeholder="Password" type="password" className="mb-2" required minLength={8} />
        </form>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </div>
    </Full>
  );
};

export default SignUp;
