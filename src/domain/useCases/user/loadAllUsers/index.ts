import { UserModel } from '@domain/models/user'

export interface LoadAllUser {
  onLoadAllUser: () => Promise<[UserModel]>
}
