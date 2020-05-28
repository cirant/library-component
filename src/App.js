import React from 'react';
import './scss/custom.scss';

const TextCol = ({ name, type, text = '', bg = false }) => {
  const primary = ['05', '10', '20', '30', '40'];
  const secondary = ['05', '20', '40', '50'];
  const alfa = ['15', '25', '35', '65', '75', '85'];
  const neutral = ['10', '20', '30', '40', '50', '60'];
  const feedback = ['05', '10', '20', '30', '40', '50'];

  const colors = {
    primary,
    secondary,
    alfa,
    neutral,
    feedback
  };

  const mainClass = bg ? 'col-3 col-sm-2 p-0' : 'col-3 col-sm-1';
  const colClass = bg ? 'p-1' : '';

  return <div className={mainClass}>
    {
      colors[type] && colors[type].map((val) => <div key={val} className={`${name}-${val} ${colClass}`}>{text}</div>)
    }
  </div>;
}

const Box = ({ arr, prefix = '' }) => {
  return <>
    {arr.map(val => <div className={`col p-2 m-1 elevation${prefix}-${val}`}>{val}</div>)}
  </>
}

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 p-1">
          Solid Colors
          <hr className="m-0" />
        </div>
        <TextCol name="text-primary" type="primary" text="text" />
        <TextCol name="text-secondary-green" type="secondary" text="text" />
        <TextCol name="text-secondary-blue" type="secondary" text="text" />
        <TextCol name="text-secondary-purple" type="secondary" text="text" />

        <TextCol name="bg-primary" type="primary" bg={true} />
        <TextCol name="bg-secondary-green" type="secondary" bg={true} />
        <TextCol name="bg-secondary-blue" type="secondary" bg={true} />
        <TextCol name="bg-secondary-purple" type="secondary" bg={true} />
      </div>

      <div className="row">
        <div className="col-12 p-1">
          Alfa Colors
          <hr className="m-0" />
        </div>
        <TextCol name="text-primary-alfa" type="alfa" text="alfa" />
        <TextCol name="text-secondary-green-alfa" type="alfa" text="alfa" />
        <TextCol name="text-secondary-blue-alfa" type="alfa" text="alfa" />
        <TextCol name="text-secondary-purple-alfa" type="alfa" text="alfa" />

        <TextCol name="bg-primary-alfa" type="alfa" bg={true} />
        <TextCol name="bg-secondary-green-alfa" type="alfa" bg={true} />
        <TextCol name="bg-secondary-blue-alfa" type="alfa" bg={true} />
        <TextCol name="bg-secondary-purple-alfa" type="alfa" bg={true} />
      </div>

      <div className="row">
        <div className="col-12 p-1">
          Grey Colors
          <hr className="m-0" />
        </div>
        <TextCol name="text-neutral" type="neutral" text="neutral" />
        <TextCol name="bg-neutral" type="neutral" bg={true} />

        <TextCol name="text-neutral-alfa" type="alfa" text="alfa" />
        <TextCol name="bg-neutral-alfa" type="alfa" bg={true} />
      </div>

      <div className="row">
        <div className="col-12 p-1">
          Feedback Colors
          <hr className="m-0" />
        </div>
        <TextCol name="text-success" type="feedback" text="neutral" />
        <TextCol name="text-warning" type="feedback" text="neutral" />
        <TextCol name="text-info" type="feedback" text="neutral" />
        <TextCol name="text-danger" type="feedback" text="neutral" />

        <TextCol name="bg-success" type="feedback" bg={true} />
        <TextCol name="bg-warning" type="feedback" bg={true} />
        <TextCol name="bg-info" type="feedback" bg={true} />
        <TextCol name="bg-danger" type="feedback" bg={true} />
      </div>

      <div className="row">
        <div className="col-12 p-1">
          fonts
          <hr className="m-0" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1> h1 Sed ut perspiciatis unde omnis iste natus error</h1>
          <h2> h2 Sed ut perspiciatis unde omnis iste natus error</h2>
          <h3> h3 Sed ut perspiciatis unde omnis iste natus error</h3>
          <h4> h4 Sed ut perspiciatis unde omnis iste natus error</h4>
          <h5> h5 Sed ut perspiciatis unde omnis iste natus error</h5>
          <h6> h6 Sed ut perspiciatis unde omnis iste natus error</h6>
          <p> p:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vehicula nibh. Nam ultricies placerat justo, id consequat ante. Suspendisse augue arcu, lacinia in venenatis at, sagittis eu ante. Donec lobortis pellentesque risus, a aliquam mauris ullamcorper quis. Etiam rutrum aliquet erat, ut vulputate ligula consectetur sed. Mauris posuere turpis </p>
          <p className="font-weight-bold"> p:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vehicula nibh. Nam ultricies placerat justo, id consequat ante. Suspendisse augue arcu, lacinia in venenatis at, sagittis eu ante. Donec lobortis pellentesque risus, a aliquam mauris ullamcorper quis. Etiam rutrum aliquet erat, ut vulputate ligula consectetur sed. Mauris posuere turpis </p>
          <span className="note"> span Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vehicula nibh. Nam ultricies placerat justo, id consequat ante. Suspendisse augue arcu, lacinia in venenatis at, sagittis eu ante. Donec lobortis pellentesque risus, a aliquam mauris ullamcorper quis. Etiam rutrum aliquet erat, ut vulputate ligula consectetur sed. Mauris posuere turpis </span>
        </div>
      </div>

      <div className="row mb-1">

        <div className="col-12 p-1">
          Shadows
          <hr className="m-0" />
        </div>

        <Box arr={[1, 2, 3, 4, 5]} />
      </div>

      <div className="row mb-5">
        <Box arr={[1, 2, 3, 4]} prefix="-element" />
      </div>

    </div>
  );
}

export default App;
