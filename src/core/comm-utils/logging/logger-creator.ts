export class LoggerCreator {
  static of(signature: string, message: string) {
    const createdMessage = '[' + signature + ']> ' + message;
    return createdMessage;
  }

  /**
   * Вывести ошибку в консоль
   * @param {string} signatureName - название сигнатуры
   * @param {string} functionName - название функции
   * @param {Error} error - ошибка
   */
  static error(
    signatureName: string,
    functionName: string,
    error: Error,
  ): void {
    console.info(
      '\x1b[31m%s\t\x1b[37m%s\t\x1b[33m%s\x1b[32m%s\t\x1b[0m',
      '[ERROR]',
      `[${new Date().toLocaleString()}]`,
      `[${signatureName}]`,
      `${functionName}`,
    );
    console.error(error);
  }

  /**
   * Вывести подробную информацию в консоль
   * @param {string} signatureName - название сигнатуры
   * @param {string} functionName - название функции
   * @param info - выводимая информация
   */
  static info(signatureName: string, functionName: string, info: any): void {
    if (process.env.MODE === 'DEV') {
      console.info(
        '\x1b[34m%s\t\x1b[37m%s\t\x1b[33m%s\t\x1b[32m%s\t\x1b[0m',
        '[INFO]',
        `[${new Date().toLocaleString()}]`,
        `[${signatureName}]`,
        `${functionName}`,
      );
      console.info(info);
    }
  }
}
