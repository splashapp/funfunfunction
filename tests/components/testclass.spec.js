import { TestClass } from 'components/testclass'

describe("(TestClass) add ", () => {
    let testClass = new TestClass()
    it("zeros", () => {
        expect(testClass.add(0, 0)).to.equal(0)
    })
    it("positive numbers", () => {
        expect(testClass.add(1, 1)).to.equal(2)
    })
    it("negative plus positive", () => {
        expect(testClass.add(-1, 1)).to.equal(0)
    })
    it("positive plus negative", () => {
        expect(testClass.add(1, -1)).to.equal(0)
    })
    it("negative numbers", () => {
        expect(testClass.add(-1, -1)).to.equal(-2)
    })
    it("real plus real", () => {
        expect(testClass.add(1.2, 1.2)).to.equal(2.4)
    })
})
