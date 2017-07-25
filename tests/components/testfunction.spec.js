import { add } from "components/testfunction"

describe("(testfunction) adds ", () => {
    it("zeros", () => {
        expect(add(0, 0)).to.equal(0)
    })
    it("positive numbers", () => {
        expect(add(1, 1)).to.equal(2)
    })
    it("negative plus positive", () => {
        expect(add(-1, 1)).to.equal(0)
    })
    it("positive plus negative", () => {
        expect(add(1, -1)).to.equal(0)
    })
    it("negative numbers", () => {
        expect(add(-1, -1)).to.equal(-2)
    })
    it("real plus real", () => {
        expect(add(1.2, 1.2)).to.equal(2.4)
    })
})
