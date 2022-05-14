import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { NextPageWithLayout } from '@components/Layout/LayoutTypes';
import publicTodo from '@utils/api/publicTodo/main';
import { basicFetch } from '@utils/fetch';
import { useState } from 'react';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';

const PublicTodo: NextPageWithLayout = ({ todo }: any) => {
  const [newTodo, setNewTodo] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();
    await basicFetch('/api/public_todo/append', {
      method: 'POST',
      body: JSON.stringify({
        alias: todo.alias,
        entry: {
          content: newTodo,
          checked: false,
        },
      }),
    });
  };

  const check = async (content: string) => {
    await basicFetch('/api/public_todo/check', {
      method: 'POST',
      body: JSON.stringify({
        alias: todo.alias,
        content,
      }),
    });
  };

  return (
    <div className="w-full text-center">
      <span className="text-2xl font-bold">{todo?.title}</span>
      <ul className="grid grid-flow-row gap-3 mt-5 text-left">
        {todo.todoEntries.map((e: any) => (
          <li key={e.alias} className="flex flex-row items-center p-2 bg-primary-800 rounded-5">
            {e.checked ? (
              <IoCheckbox className="text-lg text-green-600" onClick={() => check(e.content)} />
            ) : (
              <IoCheckboxOutline className="text-lg text-green-600" onClick={() => check(e.content)} />
            )}

            {/* <IoTrashOutline className="float-right text-lg text-red-600" /> */}
            <span className="ml-5">{e.content}</span>
          </li>
        ))}
      </ul>
      <form
        className="fixed inset-x-0 bottom-0 z-50 grid items-center justify-center w-full h-10 grid-flow-col grid-cols-4 gap-5 px-5 bg-primary-700"
        onSubmit={submit}
      >
        <Input placeholder="Todo" className="w-full col-span-3 h-5/6" value={newTodo} onChange={e => setNewTodo(e.currentTarget.value)} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default PublicTodo;

export const getServerSideProps = async (context: any) => {
  const todo = await publicTodo.get(context?.query?.id);

  return {
    props: {
      todo,
    },
  };
};
