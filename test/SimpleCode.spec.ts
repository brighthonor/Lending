import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect,assert } from "chai";
import { ethers } from "hardhat";
import { SimpleCode } from "../typechain-types";

describe("SimpleConde.sol TDD 테스트 진행", function () {
  async function deploySimpleCodeFixture() {
    const [owner,otherAccount] = await ethers.getSigners();
    const _message = "TDD 배포 테스트 Contract"

    const SimpleCondeFactory = await ethers.getContractFactory('SimpleCode');
    const simpleCode:SimpleCode = await SimpleCondeFactory.connect(owner).deploy(_message);

    console.log("SimpleCode Contract Address : " + await simpleCode.getAddress());
    
    return { simpleCode,owner,otherAccount };
  }

  describe("배포 테스트", async () => {
    
    it('owner주소 검증 테스트(성공할 경우): ',async () => {
      const {simpleCode,owner,otherAccount} = await loadFixture(deploySimpleCodeFixture)
      const currentOwner = await simpleCode.connect(owner).owner()
      assert(currentOwner === owner.address,"조건이 실패할 경우 나타나는 메시지")
    }) 

    it('owner주소 검증 테스트(실패할 경우): ',async () => {
      const {simpleCode,owner,otherAccount} = await loadFixture(deploySimpleCodeFixture)
      const currentOwner = await simpleCode.connect(owner).owner()
      assert(currentOwner === otherAccount.address,"조건이 실패할 경우 나타나는 메시지")
    }) 


  })

});