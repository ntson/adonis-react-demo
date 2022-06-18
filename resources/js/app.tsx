import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import '../css/app.css';

InertiaProgress.init();

const el = document.getElementById('app');

render(
  <InertiaApp
    initialComponent={null}
    initialPage={JSON.parse(el!.dataset.page!)}
    resolveComponent={(name) =>
      import(`./pages/${name}`).then((module) => module.default)
    }
    titleCallback={(title) => `${title} | Adonis React`}
  />,
  el
);
