
var http = require('http');
var crypto = require('crypto');

function App() {

  $('.submit').on('click', function() {
    console.warn('POST REQ');
    // Post to Visa
    var postData = {
      "amount": "501",
      "currency": "USD",
      "payment": {
        "cardNumber": "4111111111111111",
        "cardExpirationMonth": "10",
        "cardExpirationYear": "2016",
        "cardVerificationIndicator": "0",
        "cvn": "111",
        "cardType": "001",
        "encryptedData": "",
        "encryptedDescriptor": "",
        "encryptedEncoding": "",
        "encryptedWrappedKey": "",
        "cavv": "AAABAWFlmQAAAABjRWWZEEFgFz+=",
        "ucafAuthenticationData": "1",
        "ucafCollectionIndicator": "1",
        "xid": "xxxxVwajhHM05WUzlQN0ExNTA="
      },
      "billTo": {
        "street1": "901 Metro Center Blvd",
        "street2": "Folsom Street",
        "city": "Foster City",
        "country": "USA",
        "state": "CA",
        "postalCode": "94404",
        "firstName": "userFirst",
        "lastName": "userLast",
        "email": "bill@cybs.com",
        "buildingNumber": "24",
        "district": "san mateo",
        "company": "visa",
        "ipAddress": "10.20.408.500",
        "phoneNumber": "6508764564"
      },
      "shipTo": {
        "firstName": "userFirst",
        "lastName": "userLast",
        "street1": "901 Metro Center Blvd",
        "street2": "Folsom Street",
        "city": "Foster City",
        "state": "CA",
        "postalCode": "94404",
        "country": "USA",
        "phoneNumber": "6507686543",
        "shippingMethod": "Mail"
      },
      "vcOrderId": "",
      "commerceIndicator": "moto",
      "ignoreAvs": "YES",
      "ignoreBadCvn": "YES",
      "referenceId": "124",
      "merchantDefinedData": {
        "field1": "test1",
        "field2": "test2",
        "field3": "test3",
        "field4": "test4",
        "field5": "test5",
        "field6": "test6",
        "field7": "test7",
        "field8": "test8",
        "field9": "test9",
        "field10": "test10",
        "field11": "test11",
        "field12": "test12",
        "field13": "test13",
        "field14": "test14",
        "field15": "test15",
        "field16": "test16",
        "field17": "test17",
        "field18": "test18",
        "field19": "test19",
        "field20": "test20",
        "field21": "test21",
        "field22": "test22",
        "field23": "test23",
        "field24": "test24",
        "field25": "test25",
        "field26": "test26",
        "field27": "test27",
        "field28": "test28",
        "field29": "test29",
        "field30": "test30",
        "field31": "test31",
        "field32": "test32",
        "field33": "test33",
        "field34": "test34",
        "field35": "test35",
        "field36": "test36",
        "field37": "test37",
        "field38": "test38",
        "field39": "test39",
        "field40": "test40",
        "field41": "test41",
        "field42": "test42",
        "field43": "test43",
        "field44": "test44",
        "field45": "test45",
        "field46": "test46",
        "field47": "test47",
        "field48": "test48",
        "field49": "test49",
        "field50": "test50",
        "field51": "test51",
        "field52": "test52",
        "field53": "test53",
        "field54": "test54",
        "field55": "test55",
        "field56": "test56",
        "field57": "test57",
        "field58": "test58",
        "field59": "test59",
        "field60": "test60",
        "field61": "test51",
        "field62": "test52",
        "field63": "test53",
        "field64": "test54",
        "field65": "test55",
        "field66": "test56",
        "field67": "test57",
        "field68": "test58",
        "field69": "test59",
        "field70": "test60",
        "field71": "test51",
        "field72": "test52",
        "field73": "test53",
        "field74": "test54",
        "field75": "test55",
        "field76": "test56",
        "field77": "test57",
        "field78": "test58",
        "field79": "test59",
        "field80": "test60",
        "field81": "test51",
        "field82": "test52",
        "field83": "test53",
        "field84": "test54",
        "field85": "test55",
        "field86": "test56",
        "field87": "test57",
        "field88": "test58",
        "field89": "test59",
        "field90": "test60",
        "field91": "test51",
        "field92": "test52",
        "field93": "test53",
        "field94": "test54",
        "field95": "test55",
        "field96": "test56",
        "field97": "test57",
        "field98": "test58",
        "field99": "test59",
        "field100": "test60"
      },
      "items": [
        {
          "productSKU": "A100",
          "quantity": "1",
          "amount": "12.99",
          "taxAmount": "0.80"
        },
        {
          "productSKU": "A101",
          "quantity": "4",
          "amount": "2.99",
          "taxAmount": "0.80"
        }
      ],
      "merchantDescriptor": {
        "primary": "iufkdjjjdsccsdkjc",
        "alternate": "kdlkfklsklsk",
        "city": "san Mateo",
        "contact": "89787889887",
        "country": "USA",
        "postalCode": "94404",
        "state": "CA",
        "street": "shellBlvd"
      },
      "payerAuth": {
        "cavvAlgorithm": "2",
        "paAuthStatus": "05",
        "paAuthRawResult": "0",
        "paResStatus": "Y",
        "veResEnrolled": "Y"
      }
    };


    var timestamp = Math.floor(Date.now() / 1000);
    var path = 'payments/v1/authorizations';
    var queryString = 'apikey=TYHYMBA3KSYTAR4BKSRZ21IztKmS2s-d_cakEYEy_bBXK8gaI';
    var body = JSON.stringify(postData);
    var message = timestamp + path + queryString + body;
    var sharedSecret = '#p-Ccvz7MHJVE8cd9-Vd/P+mGhIbf{h3m$-K@3Ie';
    var hmac = crypto.createHmac('sha256', 'sharedSecret');
    hmac.update(message);

    var XPayToken = "xv2:" + timestamp + ":" + hmac.digest('hex');

    var options = {
      protocol: 'https:',
      hostname: 'sandbox.api.visa.com/cybersource/payments/v1/' +
        'authorizations?apikey=TYHYMBA3KSYTAR4BKSRZ21IztKmS2s-d_cakEYEy_bBXK8gaI',
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(postData)),
        'X-PAY-TOKEN': XPayToken
      }
    };

    var req = http.request(options, function(res) {
      console.log('STATUS:', res.statusCode);
      console.log('HEADERS:', JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        console.log('BODY:', chunk);
      });
      res.on('end', function() {
        console.log('No more data in response.');
      });
    });

    req.on('error', function(e) {
      console.log('problem with request:', e.message);
    });

    // write data to request body
    req.write(JSON.stringify(postData));
    req.end();

  });
}

module.exports = App;
