const express = require("express");
const router = express.Router();
const { default: Axios } = require("axios");
const { waEndpoint, waInstance, waToken } = require("../common/keys");

/* Get Qr code*/
router.get("/status", async (req, res, next) => {
  try {
    const { data, status, statusText } = await Axios.get(
      `${waEndpoint}/${waInstance}/status?token=${waToken}`
    );
    if(data.accountStatus && data.accountStatus === "authenticated"){
      data.isAuthenticated = true
    

    const uData = await Axios.get(
      `${waEndpoint}/${waInstance}/me?token=${waToken}`
    );
    if(uData.data && uData.data.id){
      data.userData = uData.data
    }
  }else{
    data.isAuthenticated = false
    
  }

    res.send(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//Get status
// router.get("/status", async (req, res, next) => {
//   try {
//     const { data, status, statusText } = await Axios.get(
//       `${waEndpoint}/${waInstance}/status?token=${waToken}`
//     );
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

//Get User datails
router.get("/me", async (req, res, next) => {
  try {
    const { data, status, statusText } = await Axios.get(
      `${waEndpoint}/${waInstance}/me?token=${waToken}`
    );
    res.send(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//Send message
router.post("/sendMessage", async(req, res, next) => {
  try {
    const params = req.body
    const numbersArr = params.mobileNo.includes(",") ?  params.mobileNo.split(",") : [params]
    let returnData;
    console.log("==========Start=============");
    for(let i =   0; i < numbersArr.length; i++){
      let v = numbersArr[i]
      let content = {
        body: params.message,
        phone: params.mobileNo.includes(",") ?  v.replace("+", "") : v.mobileNo.replace("+", ""),
      };
      const { data, status, statusText } = await Axios.post(
        `${waEndpoint}/${waInstance}/sendMessage?token=${waToken}`,
        content
      )
      returnData = data
        console.log("-----------data--------",data)
      if (params.selectedFiles && params.selectedFiles.length > 0 && data.sent && status === 200 && statusText.toLowerCase() === "ok") {
        for(let u = 0; u < params.selectedFiles.length; u++){            
        let contentAttachments = {
          body: params.selectedFiles[u].dataUrl,
          filename: params.selectedFiles[u].fileName,
          phone: params.mobileNo.includes(",") ?  v.replace("+", "") : v.mobileNo.replace("+", ""),
        };
        const resAttachemnt = await Axios.post(
          `${waEndpoint}/${waInstance}/sendFile?token=${waToken}`,
          contentAttachments
        );
      }
      }
    }
    console.log("==============End============");
    res.json(returnData) 
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//Logout
router.post("/logout", async (req, res, next) => {
  try {
    const { data, status, statusText } = await Axios.get(
      `${waEndpoint}/${waInstance}/logout?token=${waToken}`
    );
    res.send(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//Webhook
router.post("/webhook", async (req, res, next) => {
  try {
    console.log("dataa----------");
  } catch (error) {
    console.log(error);
    throw error;
  }

  // const { data, status, statusText } = await Axios.get(
  //   `${waEndpoint}/${waInstance}/logout?token=${waToken}`);
  //     res.send(data);
});

//Check phone exist
router.get("/checkPhone", async (req, res, next) => {
  try {
    const { phone } = req.query;
    const { data, status, statusText } = await Axios.get(
      `${waEndpoint}/${waInstance}/checkPhone?token=${waToken}&phone=${phone.replace(
        "+",
        ""
      )}`
    );
    res.send(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
