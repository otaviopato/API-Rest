export class Log {
  public static info(subject: string, data?: object): void {
    if (!data) {
      console.log(subject);
      return;
    }
    console.log(subject, data);
  }

  public static error(subject: string, data?: object): void {
    if (!data) {
      console.error(subject);
      return;
    }
    console.error(subject, data);
  }
}