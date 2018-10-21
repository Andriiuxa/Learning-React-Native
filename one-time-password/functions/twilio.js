const twilio = require('twilio');

const accountSid = 'AC532b768dca5a4a20bc47fc992a08c266';
const authToken = '89ada3dddfb3dee118585e18517f905c';

module.exports = new twilio(accountSid, authToken);