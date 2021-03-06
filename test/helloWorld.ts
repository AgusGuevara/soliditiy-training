import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"
import { expect } from "chai"

describe("hello world", function () {
    it('should say hi', async function() {
        // 1- setup env
        // 2- deploy contract
        // 3- call functions to test

        // 2.
        const HelloWorld = await ethers.getContractFactory('HelloWorld')
        const hello = await HelloWorld.deploy()
        await hello.deployed()

        expect(await hello.hello()).to.equal('Hello, world')
    })
})