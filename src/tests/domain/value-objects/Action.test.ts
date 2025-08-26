import {describe, expect} from "vitest";

describe('Action', () => {
    describe('constructor', () => {
        it('should throw an error if color is not an hexa string', () => {
            const actionName = 'ActionName'
            const actionColor = 'ActionColor'
            expect(new Action(actionName, actionColor)).toThrowError(ACTION_ERROR_NOT_HEXA)
        })
    })
})