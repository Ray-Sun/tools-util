'use strict'
const expect = require('chai').expect;
const util = require('../dist/index');
// const config = require('../dist/config').CONFIGURATION;

describe('main test', () => {
    it('check email sending', () => {
        let mailOptions = {
            // from: "'RS Notify' <"+config.mail.notifier.account+">",// sender address
            to: 'sunsw-cn@qq.com', // list of receivers
            subject: 'Test Tools-Util Email Sending', // Subject line
            text: 'hello', // plain text body
            html: '<strong>WORLD</strong>' // html body
        };
        return util.sendEmail(mailOptions).then(result=>{
            console.log(result);
            expect(result.accepted.length).to.equal(1);
        });
    });
});

