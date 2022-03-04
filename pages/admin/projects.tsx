import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { basicFetch } from '@utils/fetch';
import { useState } from 'react';

const Projects = () => {
  const [id, setId] = useState(0);
  const [key, setKey] = useState('');
  const [name, setName] = useState('');
  const [route, setRoute] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState([] as string[]);
  const [tag, setTag] = useState('');
  const [languages, setLanguages] = useState([] as string[]);
  const [language, setLanguage] = useState('');
  const [owner, setOwner] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');

  const updateTags = (e: any) => {
    var value = e.currentTarget.value;
    if (value.endsWith(' ')) {
      setTags(prevArray => [...prevArray, value.trim()]);
      setTag('');
    } else {
      setTag(value);
    }
  };

  const updateLanguages = (e: any) => {
    var value = e.currentTarget.value;
    if (value.endsWith(' ')) {
      setLanguages(prevArray => [...prevArray, value.trim()]);
      setLanguage('');
    } else {
      setLanguage(value);
    }
  };

  const createProject = () => {
    basicFetch(`/api/projects/create`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        key,
        name,
        route,
        desc,
        tags: tags.join(';'),
        language: languages.join(';'),
        owner,
        type,
        url,
      }),
    }).catch(e => console.error(e));
    
    setTags([] as string[])
    setLanguages([] as string[])
  };

  return (
    <div className="flex flex-col items-center space-y-2 pt-11">
      <Input onChange={e => setId(parseInt(e.currentTarget.value))} placeholder="ID" className="w-2/6" type="number" />
      <Input onChange={e => setKey(e.currentTarget.value)} placeholder="Key" className="w-2/6" />
      <Input onChange={e => setName(e.currentTarget.value)} placeholder="Name" className="w-2/6" />
      <Input onChange={e => setRoute(e.currentTarget.value)} placeholder="Route" inputMode="url" className="w-2/6" />
      <Input onChange={e => setDesc(e.currentTarget.value)} placeholder="Description" className="w-2/6" />
      <Input onChange={updateTags} placeholder="Tags" className="w-2/6" value={tag} />
      <div className="flex flex-row justify-start h-fit">
        {tags.map(i => (
          <span key={i} className="p-1 mx-1 bg-primary-700 rounded-5">
            {i}
          </span>
        ))}
      </div>
      <Input onChange={updateLanguages} placeholder="Languages" className="w-2/6" value={language} />
      <div className="flex flex-row justify-start h-fit">
        {languages.map(i => (
          <span key={i} className="p-1 mx-1 bg-primary-700 rounded-5">
            {i}
          </span>
        ))}
      </div>
      <Input onChange={e => setOwner(e.currentTarget.value)} placeholder="Owner" className="w-2/6" />
      <Input onChange={e => setType(e.currentTarget.value)} placeholder="Type" className="w-2/6" />
      <Input onChange={e => setUrl(e.currentTarget.value)} placeholder="URL" inputMode="url" className="w-2/6" />
      <Button onClick={createProject} className="w-2/6">
        Create
      </Button>
    </div>
  );
};

export default Projects;
