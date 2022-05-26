export class UnexpectedError extends Error {
  constructor () {
    super('An nexpected error occurred!')
    this.name = 'UnexpectedError'
  }
}
