import Weather from './collection/Weather';

const Widgets = () => {
  return (
    <div className="w-full mr-8 max-w-screen-fxs">
      <div className="flex items-center mb-5">
        <span className="text-xl font-bold">
          Widgets <span className="text-sm font-bold text-primary-300">(1)</span>
        </span>
      </div>
      <Weather />
    </div>
  );
};

export default Widgets;
