const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();
require("dotenv").config();



//post http://localhost:3001/ecpay
router.route('/')
  .get(async (req,res,next)=>{
    const ecpay_payment = require('ECPAY_Payment_node_js/lib/ecpay_payment.js')
    let base_param = {
      MerchantTradeNo: 'f0a0d7e9fae1bb72bc93', //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate: '2017/02/13 15:45:30', //ex: 2017/02/13 15:45:30
      TotalAmount: '100',
      TradeDesc: '測試交易描述',
      ItemName: '測試商品等',
      ReturnURL: 'http://localhost:3000',
      // ChooseSubPayment: '',
      // OrderResultURL: 'http://192.168.0.1/payment_result',
      // NeedExtraPaidInfo: '1',
      // ClientBackURL: 'https://www.google.com',
      // ItemURL: 'http://item.test.tw',
      // Remark: '交易備註',
      // HoldTradeAMT: '1',
      // StoreID: '',
      // CustomField1: '',
      // CustomField2: '',
      // CustomField3: '',
      // CustomField4: ''
    }
    let inv_params = {}

    const options = require('ECPAY_Payment_node_js/conf/config-example'),
    create = new ecpay_payment(options),
    htm = create.payment_client.aio_check_out_credit_onetime(parameters = base_param, invoice = inv_params)
    // console.log(htm)
    res.send(htm)
  })

module.exports = router;