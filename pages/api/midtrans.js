const midtransClient = require("midtrans-client");
var transactionToken, transactionRedirectURL;
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-rMGdiX8hZ9OY4Q4JY-GcpJGE",
  clientKey: "SB-Mid-client-20BeY8kZfwB3A0TX",
});

let parameter = {
  transaction_details: {
    order_id: "test-transaction-1234",
    gross_amount: 30000,
  },
  credit_card: {
    secure: true,
  },
};

snap.createTransaction(parameter).then((transaction) => {
     transactionToken = transaction.token;
     transactionRedirectURL = transaction.redirect_url;
});
export default function handler(req, res) {
    res.status(200).json({ transactionToken: transactionToken, transactionRedirectURL:transactionRedirectURL})
}
