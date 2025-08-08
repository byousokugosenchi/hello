const http = require('http');

/**
 * Create an order using the provided shipping information.
 * @param {string} fullName - Customer's full name.
 * @param {string} shippingAddress - Shipping address.
 * @returns {Promise<object>} Resolves with the parsed JSON response.
 */
function createOrder(fullName, shippingAddress) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ fullName, shippingAddress });

    const req = http.request(
      'http://localhost:5002/api/v1/order/create-order',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(body));
            } catch (e) {
              resolve(body);
            }
          } else {
            reject(new Error(`Request failed with status ${res.statusCode}: ${body}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

module.exports = createOrder;

