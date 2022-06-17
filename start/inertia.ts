/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
  errors: ({ session }) => session.flashMessages.get('errors'),
  notice: ({ session }) => session.flashMessages.get('notice'),
  authenticated: ({ auth }) => auth.isLoggedIn,
  user: ({ auth }) => auth.user,
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
