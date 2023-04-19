const midtransClient = require("midtrans-client");
var transactionToken, transactionRedirectURL;
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-rMGdiX8hZ9OY4Q4JY-GcpJGE",
  clientKey: "Mid-client-xthpcEVu-Jw0Oiou",
});

let parameter = {
  transaction_details: {
    order_id: "test-transaction-123",
    gross_amount: 200000,
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
