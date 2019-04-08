const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const indexPage = require("../app.js");


const user = {
  addUser: (name) => {
    this.name = name;
    let stu = this.name;
    return stu;
  },
  sample: () =>{
    return "hello world";
  }
}

// describe("getIndexPage", function() {
//   it("should return index page", function() {
//     let req = {}
//     // Have `res` have a send key with a function value coz we use `res.send()` in our func
//     let res = {
//       send: sinon.spy()
//     }

//     indexPage.getIndexPage(req, res);
//     // let's see what we get on res.send
//     console.log(res.send);
//   });
// });

describe("getIndexPage", function() {
  it("should send hey", function() {
    let req = {}
    // Have `res` have a send key with a function value coz we use `res.send()` in our func
    let res = {
      // replace empty function with a spy
      send: sinon.spy()
    }

    indexPage.spyder.getIndexPage(req, res);
    // let's see what we get on res.send
    console.log(res.send);
    // `res.send` called once
    expect(res.send.calledOnce).to.be.true;
    // expect to get argument `bla` on first call
    expect(res.send.firstCall.args[0]).to.equal("Hey");
  });
});

describe("User", function() {
  describe("addUser", function() {
    it("should add a user", function() {
     var mark =  sinon.spy(user, "addUser");
      var intomark = sinon.spy(user, "sample");
      user.addUser('John Doe');
      user.sample();
      sinon.assert.calledOnce(intomark);
      expect(user.sample()).to.be.equal("hello world");

      // lets log `addUser` and see what we get
      console.log(user.addUser);
     sinon.assert.calledOnce(mark);
     sinon.assert.calledWith(mark, 'John Doe');
     sinon.assert.callOrder(mark, intomark);
      //expect(user.addUser.calledOnce).to.be.true;
      expect(user.addUser('John Doe')).to.be.equal("John Doe");
    });
  });
});