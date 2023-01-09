const pinataSDK = require("@pinata/sdk");
require("dotenv").config();
const fs = require("fs");

const pinata = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);
const readableStreamForFile = fs.createReadStream("");

pinata
  .testAuthentication()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const options = {
  pinataMetadata: {
    name: "",
    keyvalues: {
      customKey: "customValue",
      customKey2: "customValue2",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
};

const pinFileToIPFS = () => {
  return pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      // console.log(result);
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      //handle error here
      console.log(err);
    });
};

const pinJSONToIPFS = (body) => {
  return pinata
    .pinJSONToIPFS(body, options)
    .then((result) => {
    return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      //handle error here
      console.log(err);
    });
};

const getMetadata = async () => {
  const imageUrl = await pinFileToIPFS();
  console.log(imageUrl);
  const body = {

    
  };

  const metadata = await pinJSONToIPFS(body)
  console.log(metadata)
};

getMetadata();