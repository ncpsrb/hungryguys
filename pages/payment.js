export default function Payment() {
  const payment = async () => {
      var response = await fetch("/api/midtrans");
      var data = await response.json();
    do {
       response = await fetch("/api/midtrans");
       data = await response.json();
    } while (Object.keys(data).length < 1);
    location.href = data.transactionRedirectURL;
  };
  return (
    <>
      {/* trigger payment */}
      <button id="pay-button" onClick={payment}>
        Pay!
      </button>
    </>
  );
}
