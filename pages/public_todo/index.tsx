import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { NextPageWithLayout } from '@components/Layout/LayoutTypes';
import { basicFetch } from '@utils/fetch';
import { useState } from 'react';

const PublicTodo: NextPageWithLayout = () => {
  const [title, setTitle] = useState('');
  const [todoUrl, setTodoUrl] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();
    const resp = await basicFetch('/api/public_todo/create', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    });
    setTodoUrl(`${resp.url}/public_todo/${resp.resp.alias}`);
  };

  return (
    <form className="grid grid-flow-row space-y-5" onSubmit={submit}>
      <span className="text-2xl font-bold text-center">Shared Todo</span>
      <Input placeholder="Title" className="w-full" value={title} onChange={e => setTitle(e.currentTarget.value)} />
      <Input textarea readOnly className="resize-none focus:ring-0 focus:border-primary-600" placeholder="Link to copy" value={todoUrl} />
      <Button className="w-full" type="submit">
        Create Todo
      </Button>
    </form>
  );
};

PublicTodo.center = true;

export default PublicTodo;
