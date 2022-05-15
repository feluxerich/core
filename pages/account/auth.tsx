import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { NextPage } from 'next';
import { useState } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const Auth: NextPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRetype, setNewPasswordRetype] = useState('');

  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [newPasswordRetypeError, setNewPasswordRetypeError] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();

    const user = jwt.decode(Cookies.get('jwt') as any);
    await fetch('/api/auth/change_password', {
      body: JSON.stringify({
        user,
        oldPassword,
        newPassword,
      }),
      method: 'POST',
    });
    if (newPassword !== newPasswordRetype) {
      setNewPasswordError(true);
      setNewPasswordRetypeError(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form id="change_password" className="grid items-center w-1/5 grid-cols-1 space-y-3 text-center" onSubmit={submit}>
        <span className="text-2xl font-bold">Change Password</span>
        <Input
          placeholder="Old Password"
          value={oldPassword}
          onChange={e => setOldPassword(e.currentTarget.value)}
          type="password"
          error={oldPasswordError}
          required
        />
        <Input
          placeholder="New Password"
          value={newPassword}
          onChange={e => setNewPassword(e.currentTarget.value)}
          type="password"
          error={newPasswordError}
          required
        />
        <Input
          placeholder="New Password"
          value={newPasswordRetype}
          onChange={e => setNewPasswordRetype(e.currentTarget.value)}
          type="password"
          error={newPasswordRetypeError}
          required
        />
        <Button type="submit">Change</Button>
      </form>
      <hr className="w-1/2 border-none bg-primary-600 h-[1px] my-5" />
      <div id="2fa">
        <span className="text-2xl font-bold">Two Factor Authentication</span>
      </div>
    </div>
  );
};

export default Auth;
