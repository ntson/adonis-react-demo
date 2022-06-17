import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class GuestOnly {
  public async handle(
    { response, auth }: HttpContextContract,
    next: () => Promise<void>
  ) {
    await auth.check();

    if (auth.isLoggedIn) {
      return response.redirect('/');
    }

    await next();
  }
}
