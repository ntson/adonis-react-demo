import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class SessionsController {
  public async new({ inertia }: HttpContextContract) {
    return inertia.render('auth/login');
  }

  public async create({
    request,
    response,
    auth,
    session,
  }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string({ trim: true }, [rules.minLength(8)]),
    });

    const payload = await request.validate({
      schema: loginSchema,
      messages: {
        'password.minLength': 'Password must be at least 8 characters',
      },
    });

    await auth.use('web').attempt(payload.email, payload.password);

    session.flash('notice', {
      type: 'info',
      message: 'Login successfully',
    });

    return response.status(303).redirect('/');
  }

  public async destroy({ response, auth, session }: HttpContextContract) {
    await auth.use('web').logout();

    session.flash('notice', {
      type: 'info',
      message: 'Logout successfully',
    });

    return response.status(303).redirect('/auth/login');
  }
}
