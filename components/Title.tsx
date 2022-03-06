import Head from 'next/head';

interface TitleProps {
  children: any;
  base?: boolean;
}

const Title = ({ children, base = true }: TitleProps) => {
  return (
    <Head>
      <title>{`${base ? 'Core – ' : ''}${children}`}</title>
    </Head>
  );
};

export default Title;
