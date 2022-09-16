const { Spot } = require("@danswar/binance-connector-node");

exports.handler = async () => {
  const client = new Spot(process.env.APP_KEY, process.env.APP_SECRET);

  const { data: spot } = await client.userAsset();
  const { data: funding } = await client.fundingWallet();
  const {
    data: flexibleProducts
  } = await client.savingsFlexibleProductPosition();
  console.log({ spot, funding, flexibleProducts });
  const response = "hello";
  return response;
};
