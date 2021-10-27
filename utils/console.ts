import { isProduction } from './env';

export class Console {
  constructor() {}

  fetch(data: any, service: string, ...props: any) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service }, ...props);
  }

  info(name: string, ...props: any) {
    console.log('%c[INFO]', 'color: #0362fc', name, ...props);
  }

  load(info: string, result: any, ...props: any) {
    console.log('%c[LOAD]', 'color: #fce303', info, { result }, ...props);
  }

  error(message: string, error: any, ...props: any) {
    console.log('&c[ERROR]', 'color: #f54242', message, { error }, ...props);
  }

  log(message: string, ...props: any) {
    console.log('%c[LOG]', 'color: #8c7086', message, ...props);
  }

  default(message?: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }
}

export default new Console();
