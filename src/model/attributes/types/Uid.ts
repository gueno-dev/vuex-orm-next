import { v1 as uuid } from 'uuid'
import { Type } from './Type'

export class Uid extends Type {
  /**
   * Hardcoded type for introspection
   */
  readonly type: string = 'Uid'

  /**
   * Make the value for the attribute.
   */
  make(value: any): string {
    return value ?? uuid()
  }
}
