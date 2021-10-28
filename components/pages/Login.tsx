import { Button } from '@components/Button';
import Full from '@components/Full';
import { Input } from '@components/Input';
import { createRef, useState } from 'react';

const Login = () => {
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  const handleSubmit = () => {
    if (!usernameRef.current || !passwordRef.current) return;

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!(username.length < 1) || !username) {
      setErrorUsername(true);
    }
    if (!(password.length < 1) || !password) {
      setErrorPassword(true);
    }

    console.log(username, password);
  };

  return (
    <Full className="flex items-center justify-center">
      <div className="mb-2 w-full max-w-xs flex flex-col">
        <div className="mb-2">
          <Input ref={usernameRef} placeholder="Username" type="text" className="mb-4" error={errorUsername} />
          <Input ref={passwordRef} placeholder="Password" type="password" className="mb-4" error={errorPassword} />
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </Full>
  );
};

export default Login;
