import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import User from 'App/Models/User';

export default class UsersController {
  public async new({ inertia }: HttpContextContract) {
    return inertia.render('auth/register');
  }

  public async create({
    request,
    response,
    session,
    auth,
  }: HttpContextContract) {
    const newUserSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      firstName: schema.string({ trim: true }),
      lastName: schema.string({ trim: true }),
      password: schema.string({ trim: true }, [
        rules.minLength(8),
        rules.confirmed('confirmPassword'),
      ]),
    });

    try {
      const payload = await request.validate({
        schema: newUserSchema,
        messages: {
          required: '{{ field }} is required',
          'email.unique': 'Email not available',
          'password.minLength': 'Password must be at least 8 characters',
          'confirmPassword.confirmed': 'Passwords do not match',
        },
      });

      const user = await User.create(payload);

      await auth.login(user);

      session.flash('notice', {
        type: 'info',
        message: 'User successfully created',
      });

      return response.status(303).redirect('/');
    } catch (error) {
      session.flash('errors', error.messages);
      return response.status(303).redirect('/auth/register');
    }
  }
}
