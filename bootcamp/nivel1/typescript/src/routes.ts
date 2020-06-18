import { Response, Request } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'antonioaads@gmail.com',
    password: '123456',
    techs: ['tech1', 'tech2'],
  });

  return response.json({ message: 'Hello World' });
}