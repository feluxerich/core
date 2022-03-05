import { Button } from '@components/Button';
import Full from '@components/Full';
import { Input } from '@components/Input';
import { useRouter } from 'next/dist/client/router';
import { createRef, useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [swiggle1, setSwiggle1] = useState('');
  const [swiggle2, setSwiggl2] = useState('');
  const [disabled, setDisabled] = useState(false);

  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  const Router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!usernameRef.current || !passwordRef.current) return;
    setErrorUsername(false);
    setErrorPassword(false);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setDisabled(true);
    fetch(`/api/auth/create`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
          setErrorUsername(true);
          setErrorPassword(true);
        } else {
          Router.push('/');
        }

        setDisabled(false);
      })
      .catch(reason => console.log(reason));
  };

  return (
    <Full className="flex items-center justify-center">
      <div className="flex flex-col w-full max-w-xs mb-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <Input
              onChange={() => setErrorUsername(false)}
              ref={usernameRef}
              placeholder="Username"
              type="text"
              className={`mb-4 ${swiggle1}`}
              error={errorUsername}
              disabled={disabled}
            />
            <Input
              onChange={() => setErrorPassword(false)}
              ref={passwordRef}
              placeholder="Password"
              type="password"
              className={`mb-4 ${swiggle2}`}
              error={errorPassword}
              disabled={disabled}
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <Link href="/signup" passHref>
          <span className="mt-4 font-bold text-center cursor-pointer text-accent">Don&apos;t have an account yet? Create one</span>
        </Link>
      </div>
    </Full>
  );
};

export default Login;

// bad code
