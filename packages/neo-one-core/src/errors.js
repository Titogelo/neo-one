/* @flow */
export class InvalidFormatError extends Error {
  code: string;

  constructor(reason?: string) {
    super(`Invalid format${reason == null ? '.' : `: ${reason}`}`);
    this.code = 'INVALID_FORMAT';
  }
}

export class VerifyError extends Error {
  code: string;

  constructor(reason: string) {
    super(`Verification failed: ${reason}`);
    this.code = 'VERIFY';
  }
}

export class UnsignedBlockError extends Error {
  code: string;

  constructor() {
    super('Block script does not exist because it has not been signed.');
    this.code = 'UNSIGNED_BLOCK';
  }
}