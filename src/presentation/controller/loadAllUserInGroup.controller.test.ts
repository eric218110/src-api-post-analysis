import { LoadAllUserInGroupController } from './loadAllUserInGroup.controller'

describe('LoadAllUserInGroupController', () => {
  describe('function handler', () => {
    test('expect function handler to be defined', () => {
      const sut = new LoadAllUserInGroupController()
      expect(sut.handler).toBeDefined()
    })
  })
})
