﻿// V-E1-DPLY-WS-01 at 13/04/2016 09:48:46
'use strict';
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '98abb7ea-a407-495b-b2b5-00a688b7b30c',
                captureConfigUrl: 'drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                appsServicesUrl: 'appsapi.veinteractive.com',
                veHostDomain: '//config1.veinteractive.com',
                promoteLanding: 'uk.findrz.com',
                evaDomain: 'cookie.veinteractive.com',
                vePlatformHostDomain: '//veplatform.veinteractive.com',

                captureConfig: {
  CaptureUrl: "drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 2072,
  datareceiverurl: "ccs2.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".ProductPrice:last",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 16070,
          HtmlAttributeTag: "Value",
          HtmlType: "em",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        },
        {
          ClientFieldName: ".CartThumb.Even img",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16073,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductName.Odd a[href*='paul']",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16074,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 12,
          HtmlPath: null
        },
        {
          ClientFieldName: ".CartItemIndividualPrice.Odd",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16075,
          HtmlAttributeTag: "Value",
          HtmlType: "td",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".cart_qty input",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16076,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductName.Odd .highlight.bold",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16139,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductPrice:first",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 16140,
          HtmlAttributeTag: "Value",
          HtmlType: "em",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "chkMain_lblDeliveryCost",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 16141,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductName.Odd a[href*='paul']",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 16142,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: "couponcode",
          DomEvent: "OnChange",
          FieldTypeName: "Name",
          FormMappingId: 20535,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 7,
          HtmlPath: null
        },
        {
          ClientFieldName: "veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 30186,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197230,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 9174,
      FormTypeId: 1,
      FormURLs: [
        "paulsboutique.com/cart.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "login_email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 16071,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "bill_email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 16072,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: ""
        },
        {
          ClientFieldName: "bill_name",
          DomEvent: "OnChange",
          FieldTypeName: "Id",
          FormMappingId: 16143,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "glnGuest_txtGuestEmailAddress",
          DomEvent: "OnChange",
          FieldTypeName: "Id",
          FormMappingId: 17995,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: ""
        },
        {
          ClientFieldName: "FormField_4",
          DomEvent: "OnChange",
          FieldTypeName: "Id",
          FormMappingId: 22748,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 30187,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "addcouponcode",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Name",
          FormMappingId: 35322,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 7,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#checkoutpaymentholder .section.group .col.right.span_2_of_4:not(#checkout_total):not(#checkout_shipping):last",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 35323,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "bill_surname",
          DomEvent: "OnChange",
          FieldTypeName: "Id",
          FormMappingId: 120298,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#ship_postcode",
          DomEvent: "OnChange",
          FieldTypeName: "Raw",
          FormMappingId: 120301,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197231,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 9175,
      FormTypeId: 1,
      FormURLs: [
        "paulsboutique.com/checkout.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [],
      FormId: 9183,
      FormTypeId: 2,
      FormURLs: [
        "pauls-boutique.com/checkout.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: [
        {
          ParameterValue: "paypalexpress",
          Paremeter: "provider"
        }
      ]
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "span#lblPaymentResponse",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 23003,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 10256,
      FormTypeId: 2,
      FormURLs: [
        "pauls-boutique.com/finishorder.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [],
      FormId: 27870,
      FormTypeId: 2,
      FormURLs: [
        "paulsboutique.com/finishorder.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".ProductImage img:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100269,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100270,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100271,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100681,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100682,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(4)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100684,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(5)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100685,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: "\t.ProductImage img:eq(6)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100687,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(7)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100688,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(8)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100690,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(9)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100691,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductImage img:eq(10)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100692,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100693,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100694,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(4)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100695,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(5)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100701,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(6)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100702,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(7)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100703,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(8)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100704,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(9)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100705,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(10)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100706,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: "\t.ProductDetails .ProductPriceRating:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100708,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100709,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(4)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100710,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(5)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100711,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(6)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100713,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(7)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100714,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(8)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100715,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(9)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100716,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails .ProductPriceRating:eq(10)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 100717,
          HtmlAttributeTag: "Value",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146184,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146206,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146207,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(4)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146208,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(5)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146209,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(6)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146210,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(7)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146211,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(8)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146212,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(9)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146213,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".ProductDetails strong a:even:eq(10)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 146214,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 187855,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197219,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 27892,
      FormTypeId: 1,
      FormURLs: [
        "paulsboutique.com"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "#productprice .price",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 53493,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: ""
        },
        {
          ClientFieldName: ".ProductThumbImage a img.image-unzoomed",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 53495,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: ""
        },
        {
          ClientFieldName: "h1",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 53496,
          HtmlAttributeTag: "Value",
          HtmlType: "h1",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: ""
        },
        {
          ClientFieldName: "window.location.href",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 53498,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".item-code span",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 53500,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 10,
          HtmlPath: ""
        },
        {
          ClientFieldName: "h2x",
          DomEvent: "OnLoad",
          FieldTypeName: "Class",
          FormMappingId: 60583,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 12,
          HtmlPath: null
        },
        {
          ClientFieldName: "h1",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 97312,
          HtmlAttributeTag: "Value",
          HtmlType: "h1",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 18,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197223,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 28504,
      FormTypeId: 4,
      FormURLs: [
        "paulsboutique.com/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".firstimage:eq(0)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102124,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".firstimage:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102125,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".firstimage:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102126,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".firstimage:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102127,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails h2:eq(0)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102128,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails h2:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102129,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails h2:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102130,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails h2:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102131,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails a:eq(0)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102132,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails a:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102133,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails a:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102134,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".xProductDetails a:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102135,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".price:eq(0)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102136,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".price:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102137,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".price:eq(2)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102138,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: ".price:eq(3)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 102139,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 16,
          HtmlPath: null
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197225,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 42375,
      FormTypeId: 1,
      FormURLs: [
        "paulsboutique.com/categories/*",
        "paulsboutique.com/categories/*/*",
        "paulsboutique.com/categories/*/*/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "#login_email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 187856,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#login_email_pop",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 197227,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "#FormField_1",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 244206,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "#FormField_4",
          DomEvent: "OnChange",
          FieldTypeName: "Raw",
          FormMappingId: 244208,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 67035,
      FormTypeId: 1,
      FormURLs: [
        "paulsboutique.com/login.php"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "98abb7ea-a407-495b-b2b5-00a688b7b30c",
  JourneyId: 2716,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['paulsboutique.com','pauls-boutique.com' ], consoleMessagesEnabled: false,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 
 cookies: { enabled: true , timeToLive: 60},

keywordsRegExp: [
	{
		source: 'Product URL',
		regexp: /\/products\/(.*)(?=\.html)/,
                replaceCharactersBySpace: '-|(%252d)|(%7B47%7D)',
	},{

                source: 'Category URL',
		regexp: /([0-9A-Za-z-]*)(?=\/$)/,
                replaceCharactersBySpace: '-'
	}
],


appsForms:[{
	appName: 'chat',
	appAgents: ['7255'],
	priority: 2,
	blackListUseRegex: false,
	whiteListUseRegex: false,
	FormBlackListURLs: [],
	FormId: 123456,
	FormTypeId: 6,
	FormURLs: ['paulsboutique.com/default.aspx', 
'paulsboutique.com/cart.php', 'paulsboutique.com/SecureArea/secure.aspx', 
'paulsboutique.com/checkout.php'],
	Paremeter: []
}],

veAds: {
                    config: {
                    timeStamp: "Fri Mar 11 2016 10:30:06 GMT+0000 (GMT Standard Time)",
                    version: "2.0.0",
                    uuid: "7b9",
                    avoidDOM: false,
                    storageAcrossProtocols: true
                  },
	pages:[
	{
		id: 1,
		name: "Product",
		type: "product",
		urls:[
			"paulsboutique.com/*", "pauls-boutique.com/*"
		],
		dynamicIdentifiers:[
		{
			selector: "#tabs-container .current div",
			criteria: "contains",
			values:["Paul's Style Notes"]
		}]
	},
	{
		id: 2,
		name: "Basket",
		type: "basket",
		urls:[
			"paulsboutique.com/cart.php",
                        "pauls-boutique.com/cart.php"
		],
		dynamicIdentifiers:[]
	},
	{
		id: 3,
		name: "Conversion",
		type: "conversion",
		urls:[
		{
			url: "pauls-boutique.com/checkout.php",
			params:{
			"provider":"paypalexpress"
			}
		},
                {
			url: "paulsboutique.com/checkout.php",
			params:{
			"provider":"paypalexpress"
			}
		},
			"pauls-boutique.com/finishorder.php",
                        "paulsboutique.com/finishorder.php"
		],
		dynamicIdentifiers:[]
	},
        {
		id: 4,
		name: "Checkout",
		type: "custom",
		urls:[
			"paulsboutique.com/checkout.php"
                        
		],
		dynamicIdentifiers:[]
	}],
	dataElements:[
	{
		id: 1,
		name: "Product id",
		type: "productId",
		fallback: "__timestamp__",
		mask: "nothing",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: ".item-code span",
			keepChecking: false,
			useMappings: false
		},
		pages:[1]
	},
	{
		id: 2,
		name: "Product name",
		type: "productList",
		fallback: "__timestamp__",
		mask: "nothing",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: ".ProductName a:visible",
			keepChecking: false,
			useMappings: false
		},
		pages:[2]
	},
	{
		id: 3,
		name: "Product price",
		type: "priceList",
		fallback: "0.00",
		mask: "currency",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: ".ProductName .highlight",
			keepChecking: false,
			useMappings: false
		},
		pages:[2]
	},
	{
		id: 4,
		name: "Order value",
		type: "orderVal",
		fallback: "0.00",
		mask: "currency",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: "#checkout_total",
			keepChecking: false,
			useMappings: false
		},
		pages:[4]
	},
	{
		id: 5,
		name: "Currency",
		type: "currency",
		fallback: "£",
		mask: "symbol",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: "#checkout_total",
			keepChecking: false,
			useMappings: false
		},
		pages:[4]
	},
	{
		id: 6,
		name: "Order id",
		type: "orderId",
		fallback: "__timestamp__",
		mask: "nothing",
		mapping: {},
		regex:{
			include:[""],
			exclude:[""]
		},
		capture:{
			type: "selector",
			mappingCriteria: "contains",
			element: "null",
			keepChecking: false,
			useMappings: false
		},
		pages:[3]
	}],
	pixels:[
	{
		id: 1,
		name: "Main Products Integration",
		type: "ve",
		config:{
			journeyCode: "mzszDboBzxcbwGHisxyE"
		}
		,
		overrides:{}
	},
	{
		id: 2,
		name: "Flex Pixel",
		type: "flex",
		config:{
			flexId: "894002"
		}
		,
		overrides:{}
	},
	{
		id: 3,
		name: "Segment Pixels for Pages",
		type: "appNexus",
		config:{
			segmentROS: "4879220",
			segmentProduct: "4879219",
			segmentConversion: "4879221",
			conversionId: "686487"
		}
		,
		overrides:{}
	},
	{
		id: 4,
		name: "Custom Pixels for Pages",
		type: "customROS",
		config:{
			type:"script",
			src:"//c.vepxl1.net/4-11159.js?id=11159&m=4"
		}
		,
		overrides:{}
	}]
}

}
,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {onPageLoad: function(){

	window.veTagData.customEvents.veAds();
},
veAds: function(){
	
	!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";var r;e("./utils").type;t.exports=r={always:function(){return!0},equal:function(e,t,n){return e=String(e),t=String(t),n||(e=e.toLowerCase(),t=t.toLowerCase()),e===t},notEqual:function(e,t,n){return!r.equal(e,t,n)},contains:function(e,t,n){return e=String(e),t=String(t),n||(e=e.toLowerCase(),t=t.toLowerCase()),t.indexOf(e)>-1},notContains:function(e,t,n){return!r.contains(e,t,n)}}},{"./utils":8}],2:[function(e,t,n){"use strict";var r=function(){return function(){}};window.debugVeAds&&window.debugVeAds.enable&&window.debugVeAds.enable("*"),t.exports=window.debugVeAds||r},{}],3:[function(e,t,n){"use strict";function r(e){return h.type(e,"jquery")||(e=p(e)),e.length?(e=e.first(),e.val()?p.trim(e.val()):p.trim(e.text())):""}function o(e){var t=[];return e.each(function(e,n){var o=r(p(n));t.push(p.trim(o))}),t}function i(e){var t,n,r;t=0,n=l.ELEMENT_MS,r=l.ELEMENT_MAX_RETRIES;var o=setInterval(function(){var n=e();t++,(n||r&&t>=r)&&clearInterval(o)},n);return o}function s(e){return p(e)}function a(e){var t=s(e),n=p.Deferred();return t.length&&n.resolve(t),i(function(){return t=s(e),t.length?(n.resolve(t),!0):!1}),n.promise()}function c(e){var t={complete:!1,value:null,fail:!1},n=null,o=s(e),a=p.Deferred();return t.remove=function(e){e?t.complete=!0:t.fail=!0},o.length&&(t.value=r(o),a.notify(o,t)),t.complete?(a.resolve(o),!0):t.fail?(a.reject(),!0):(g("#progressCheck - calling interval",t),i(function(){return o=s(e),t.value=r(o),h.type(t.value,"nan")||h.type(t.value,"undefined")||h.type(t.value,"null")||n===t.value||(n=t.value,a.notify(o,t)),t.complete?(a.resolve(o),g("#progressCheck - success",t),!0):t.fail?(a.reject(),g("#progressCheck - rejection",t),!0):void 0}),a.promise())}var u,l=e("../settings"),p=e("./jq"),h=e("./utils"),g=e("./debug")("ve:elements");t.exports=u={instantCheck:s,dynamicCheck:a,progressCheck:c,obtainValue:r,obtainValues:o}},{"../settings":25,"./debug":2,"./jq":5,"./utils":8}],4:[function(e,t,n){"use strict";function r(e){return e?o(e):void 0}function o(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0===arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===t||r.fn===t){n.splice(o,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,o=n.length;o>r;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],5:[function(e,t,n){"use strict";t.exports=window.VEjQuery||window.$},{}],6:[function(e,t,n){"use strict";var r=e("./utils").type,o=/[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,i={number:function(e){var t=String(e).match(/([\d]{3,25})/);return r(t,"array")?t[1]:""},alphanumeric:function(e){var t=String(e).match(/([\dA-Za-z]{4,25})/);return r(t,"array")?t[1]:""},currency:function(e){return String(e).replace(/[^0-9\.,]/g,"")},symbol:function(e){var t=String(e).match(o);return r(t,"array")?t[0]:""},nothing:function(e){return String(e)}};t.exports=i},{"./utils":8}],7:[function(e,t,n){"use strict";function r(e){this.pageURL=e||this.generatePageURL(),this.searchObject=this.generateSearchObject()}function o(e){if(""===e||"?"===e)return{};var t,n,r,o={};for(t=e.replace(/^\?/,"").split("&"),n=0;n<t.length;n++)r=t[n].split("="),o[r[0]]=r[1];return o}function i(e){try{var t=(e+"").toLowerCase();return t=t.replace(/http[s]?:\/\//,""),t=t.replace("#","?"),t=t.replace(";","?"),"www."===t.substr(0,4)&&(t=t.replace("www.","")),t}catch(n){return""}}var s,a=e("./utils"),c=e("./jq"),u="__MATCH__",l=/\((.*?)\)/g,p=/(\(\?)?:\w+/g,h=/[*]{1}/g,g=/[*]{2}/g,m=/[\-{}\[\]+?.,\\\^$|#\s]/g;r.prototype._getPageURL=function(){return this.locationObj?this.locationObj:this.locationObj=a.parseURL(window.location.href)},r.prototype.generateSearchObject=function(){var e=this._getPageURL();return o(e.query)},r.prototype.generatePageURL=function(){var e=this._getPageURL(),t=e.hostname+(e.pathname.length>1?e.pathname:"");return i(t)},r.prototype._patternToRegex=function(e){return e=e.replace(m,"\\$&").replace(l,"(?:$1)?").replace(p,function(e,t){return t?e:"([^/?]+)"}).replace(g,"([^?]+|[^?]?)").replace(h,"([^\\/?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},r.prototype.match=function(e){var t,n,r={},o={};return a.type(e,"object")?r=e:r.url=e,t=this.checkPatternMatches(r.url),n=this.checkParamMatches(r.params),t[u]&&n[u]?c.extend({},t,n):(o[u]=!1,o)},r.prototype.checkPatternMatches=function(e,t){var n,r,o,s,a,c,l={};if(l[u]=!1,t||(e=i(e)),n=this._patternToRegex(e),r=this._getNamedParameters(e),o=n.exec(t||this.pageURL),!o)return l;for(s=o.slice(1),l[u]=!0,a=0;a<s.length;a++)c=r[a],s[a]&&("_"===c?(l._=l._||[],l._.push(s[a])):l[c]=s[a]);return l},r.prototype.checkParamMatches=function(e){var t,n,r={},o=this;return r[u]=!0,a.objectLength(e)?(c.each(e,function(e,i){var s;return e=String(e),i=String(i),s=decodeURIComponent(i),null===o.searchObject[e]?(r[u]=!1,!1):(t=o.checkPatternMatches(i,o.searchObject[e]),n=o.checkPatternMatches(s,o.searchObject[e]),t[u]?(c.extend(r,t),"continue"):n[u]?(c.extend(r,n),"continue"):(r[u]=!1,!1))}),r):r},r.prototype._getNamedParameters=function(e){var t,n,r,o;for(t=new RegExp("((:?:[^\\/()]+)|(?:[*])|(?:[**]))","g"),n=[],r=t.exec(e);r;){if(o=r[1].slice(1),"_"==o)throw new TypeError(":_ can't be used as a pattern name in pattern: "+e);if(c.inArray(o,n)>-1)throw new TypeError("duplicate pattern name :"+o+" in pattern: "+e);n.push(o||"_"),r=t.exec(e)}return n},t.exports=s=new r,s.MATCH_PROPERTY=u,s.Matcher=r,s.escapeRegExp=m},{"./jq":5,"./utils":8}],8:[function(e,t,n){"use strict";function r(e){var t=document.createElement("a");return t.href=e,{element:t,href:t.href,host:t.host,port:"0"===t.port||""===t.port?"":t.port,hash:t.hash,hostname:t.hostname,pathname:"/"!==t.pathname.charAt(0)?"/"+t.pathname:t.pathname,protocol:t.protocol&&":"!==t.protocol?t.protocol:"https:",search:t.search,query:t.search.slice(1)}}function o(e,t){switch(l.call(e)){case"[object Date]":return t?"date"===t:"date";case"[object RegExp]":return t?"regexp"===t:"regexp";case"[object Arguments]":return t?"arguments"===t:"arguments";case"[object Array]":return t?"array"===t:"array";case"[object Error]":return t?"error"===t:"error"}return null===e?t?"null"===t:"null":void 0===e?t?"undefined"===t:"undefined":e!==e?t?"nan"===t:"nan":u&&e instanceof u?t?"jquery"===t:"jQuery":e&&1===e.nodeType?t?"element"===t:"element":(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),t?t===typeof e:typeof e)}function i(e){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}function s(e){var t=u.Deferred();return arguments.length>1&&(e=Array.prototype.slice.call(arguments)),u.each(e,function(e,n){n.done(function(){var e=[].slice.call(arguments);t.resolve.apply(t,e)})}),t.promise()}function a(e,t){return u.ajax({type:"GET",url:e,data:null,success:t,dataType:"script",cache:!0})}function c(e){var t=new Image(1,1),n=u.Deferred();return t.onload=function(){n.resolve()},t.src=e,n.promise()}var u=e("./jq"),l=Object.prototype.toString;t.exports={parseURL:r,type:o,objectLength:i,whenAny:s,getScript:a,getImage:c}},{"./jq":5}],9:[function(e,t,n){"use strict";function r(e,t){t instanceof c&&(this.page=t,this.currentPage=!0),t=t||{},this.storeConfig(e,t)}var o=(e("../common/utils"),e("./capture")),i=e("../common/emitter"),s=(e("../storage/store"),e("../settings")),a=e("../common/jq"),c=e("../pages/Page"),u=e("./types"),l=e("../common/debug"),p={__timestamp__:(new Date).toUTCString().replace(/[\s,]+/g,"-"),__random__:("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)};new i(r.prototype),r.prototype.storeConfig=function(e,t){this.config=e,this.name=e.name,this.type=e.type,this.valueType=u[e.type],this.id=e.id,this.capture=e.capture,this.fallback=e.fallback,this.urlData=t.matchingURLs||[{}],this.key=this.generateKey(),this.logger()},r.prototype.logger=function(){this.log=l("ve:dataElement:"+this.type+":"+this.id)},r.prototype.setData=function(){this.log("About to set data with the following object",this.config),o[this.capture.type](this.config,this)},r.prototype.getValue=function(){this.log("VALUE!!",this.value);var e=this.value||("list"===this.valueType?[]:"");return this.log("#getValue with value",e),e},r.prototype.generateKey=function(){return s.fromObjectConfig("uuid")+this.type+this.id},r.prototype.cacheValue=function(e){this.lastUpdated=a.now(),this.log("Caching value",e,this.lastUpdated),this.value=e},r.prototype.getFallback=function(){var e=String(p[this.fallback]||this.fallback);return this.log("#getFallback - The fallback value being obtained",e),e},t.exports=r},{"../common/debug":2,"../common/emitter":4,"../common/jq":5,"../common/utils":8,"../pages/Page":13,"../settings":25,"../storage/store":27,"./capture":10,"./types":11}],10:[function(e,t,n){"use strict";function r(e,t){var n=t.include,r=t.exclude;return y.type(n,"string")&&(n=[n]),y.type(r,"string")&&(r=[r]),y.type(n,"array")&&n.length&&(e=i(e,n)),y.type(r,"array")&&r.length&&(e=o(e,r)),e}function o(e,t){return E.each(t,function(t,n){var r;r=new RegExp(n,"gim"),e=e.replace(r,"")}),e}function i(e,t){return E.each(t,function(t,n){var r;r=new RegExp(n,"i"),e=e.match(r)&&e.match(r)[1]||e}),w("Matching with REGEX",e,t),e}function s(e,t){var n=x[t]||x.nothing;return n(e)}function a(e,t){return y.objectLength(t)?t[e]||e:e}function c(e,t){return y.type(e,"array")?(w("#runTransformations - running on a LIST of values"),E.each(e,function(n,r){e[n]=u(r,t)}),e):(w("#runTransformations - SINLE value type"),u(e,t))}function u(e,t){return w("#transform - running on value"),e=r(e,t.regex),e=s(e,t.mask),e=a(e,t.mappings)}function l(e,t){e.cacheValue(t),e.emit("store")}function p(e){var t=window,n=e.split(".");return E.each(n,function(e,r){t=t[n[e]]}),String(t)}function h(e,t){w("Running via DOM #selector",e,t);var n=e.capture.element,r="",o=function(n,o){w("#selector value found about to run transformations",n),r=A[t.valueType](n),w("#selector VALUES",r,t),r=c(r,e),l(t,r)};e.capture.keepChecking&&"list"!==t.valueType?(w("#selector keep checking active setting up progress check"),b.progressCheck(n).progress(o)):(w("#selector keep checking NOT active simpler check for element "),b.dynamicCheck(n).then(o))}function g(e,t){var n=p(e.capture.element);n=c(n,e),l(t,n)}function m(e,t){var n="";E.each(t.urlData,function(t,r){return r.matches[e.capture.element]?(n=r.matches[e.capture.element],!1):void 0}),n=c(n,e),l(t,n)}function d(e,t){var n=window.dataLayer;if(!n)return"";for(var r=t?n.reverse():n,o="",i=0;i<r.length;i++)if(r[i][e]){o=r[i][e];break}return o}function f(e,t,n){var r=d(e.capture.element,n);r=c(r,e),l(t,r)}function v(e,t){f(e,t,!0)}var y=e("../common/utils"),b=e("../common/elements"),E=e("../common/jq"),x=(e("../common/url-matcher").escapeRegExp,e("../common/masks")),w=e("../common/debug")("ve:capture");t.exports={selector:h,globalVariable:g,url:m,dataLayer:f,dataLayerReverse:v};var A={single:function(e){return w("#singleOrList.single - Obtaining single value from element."),b.obtainValue(e)},list:function(e){return w("#singleOrList.list - Obtaining multiple values from element."),b.obtainValues(e)}}},{"../common/debug":2,"../common/elements":3,"../common/jq":5,"../common/masks":6,"../common/url-matcher":7,"../common/utils":8}],11:[function(e,t,n){var r={orderId:"single",orderVal:"single",productId:"single",productList:"list",priceList:"list",currency:"single"};t.exports=r},{}],12:[function(e,t,n){"use strict";function r(e){var t=this;this.log=d("ve:main"),this.veAdsConfig=e||this.getVeAdsConfig(),this.runChecks().then(function(){t.instantiatePages()})}function o(e,t,n){var r=!1;return u.each(e,function(e,o){return o[t]===n?(r=!0,!1):void 0}),r}function i(e,t){return y[e.type]-y[t.type]}function s(e,t,n){if(e.getValue().length)return e.getValue();var r=n.getValue(e.key)||[];return r}function a(e,t){var n=[];return u.each(e,function(e,r){r.type===t&&n.push(r)}),n}var c=e("./common/utils"),u=e("./common/jq"),l=e("./pages/Page"),p=e("./storage/store"),h=e("./data/DataElement"),g=e("./settings"),m=e("./pixels/type"),d=e("./common/debug"),f=e("./data/types"),v=e("./pixels/Pixel");t.exports=r;var y={ros:1,conversion:2,product:3,category:4,basket:5,custom:6},b={id:0,name:"ROS Injected Page",type:"ros",urls:["**"],dynamicIdentifiers:[]};r.prototype.getVeAdsConfig=function(){try{return u.extend({},window.veTagData.settings.veAds)}catch(e){this.log(new Error("Please define a valid veAds object"),e)}},r.prototype.testJSON=function(){return window.JSON&&"parse"in window.JSON&&"stringify"in window.JSON},r.prototype.runChecks=function(){var e=u.Deferred();return this.testJSON()?(this.jsonAvailable=!0,this.log("JSON natively available"),e.resolve()):(this.log("NO JSON on this page, adding a script to the page."),this.jsonAvailable=!1,this.jsonPromise=u.getScript("https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js").done(function(){e.resolve()})),e.promise()},r.prototype.instantiatePages=function(){this.log("Instantiating PAGES");var e=this;o(this.veAdsConfig.pages,"type","ros")||this.veAdsConfig.pages.unshift(b),this.veAdsConfig.pages.sort(i),this.log("Pages have been sorted into a running order",this.veAdsConfig.pages),u.each(e.veAdsConfig.pages,function(t,n){if(n[g.MAIN_PAGE_PROPERTY])return"continue";var r=new l(n);n[g.MAIN_PAGE_PROPERTY]=r,e.setupPageListeners(r)})},r.prototype.setupPageListeners=function(e){this.log("Setting page listener for: "+e.name),e.once("success",u.proxy(this.setPageElements,this,e)),e.once("success",u.proxy(this.runPagePixels,this,e)),e.once("fail",u.proxy(e.off,e)),e.checkURLs()},r.prototype.setupDataListeners=function(e){this.log("#setupDataListeners - setting up data listeners for: "+e.name,e),e.once("store",u.proxy(this.storeValue,this,e))},r.prototype.storeValue=function(e){var t=e.key,n=e.getValue();return this.log("#storeValue - storing key: "+t+", with value: "+n),p.set(t,n)},r.prototype.getValue=function(e){return p.get(e)},r.prototype.setPageElements=function(e){this.log("Setting DataElements for identified page "+e.name,e);var t=this;u.each(this.veAdsConfig.dataElements,function(n,r){var o;return r[g.MAIN_DATA_ELEMENT]?(t.log("dataElement object already exists for dataElement: "+r.name,r),o=r[g.MAIN_DATA_ELEMENT],o.setData(),"continue"):void(c.type(r.pages,"array")&&r.pages.length&&u.inArray(e.id,r.pages)>-1&&(o=new h(r,e),r[g.MAIN_DATA_ELEMENT]=o,t.setupDataListeners(o),o.setData()))})},r.prototype.runPagePixels=function(e){var t=this,n=u.proxy(this.obtainDataFromStorage,this);u.each(this.veAdsConfig.pixels,function(r,o){var i,s=m[o.type];return s.hasOwnProperty(e.type)?(o[g.MAIN_PIXEL]?i=o[g.MAIN_PIXEL]:(i=new v(o,n),o[g.MAIN_PIXEL]=i),void i.run(n,e.type,e.id)):(t.log("Page type: "+e.type+" not supported by pixel: "+o.name),"continue")})},r.prototype.obtainDataFromStorage=function(e,t){var n=this,r={};return u.each(e,function(e,t){var o=a(n.veAdsConfig.dataElements,t);r[t]=n._obtainDataValue(o,f[t])}),r},r.prototype._obtainDataValue=function(e,t){var n="list"===t?[]:"",r=this;return u.each(e,function(e,t){var o=t[g.MAIN_DATA_ELEMENT]||(t[g.MAIN_DATA_ELEMENT]=new h(t));n="single"!==o.valueType||n?s(o,n,r):o.getValue()||r.getValue(o.key)}),"single"!==t||n||(this.log("FALLBACK: No value has been found checking for fallbacks"),u.each(e,function(e,t){var o=t[g.MAIN_DATA_ELEMENT];n=o.getFallback(),r.log("FALLBACK VALUE USED: Current value found for this.",n,o)})),n}},{"./common/debug":2,"./common/jq":5,"./common/utils":8,"./data/DataElement":9,"./data/types":11,"./pages/Page":13,"./pixels/Pixel":14,"./pixels/type":21,"./settings":25,"./storage/store":27}],13:[function(e,t,n){"use strict";function r(e){if(!o.type(e,"object"))throw new Error("Pages need to be called with a configuration object");this.storeConfig(e),this.logger(),this.matchingURLs=[],this.dynamic=this._checkDynamic(),this.log("Page object created")}var o=e("../common/utils"),i=e("../common/emitter"),s=e("../common/url-matcher"),a=e("../common/jq"),c=e("../settings"),u=e("../common/elements"),l=e("../common/criteria"),p=e("../common/debug");i(r.prototype),r.prototype.checkURLs=function(){var e=this;this.log("Checking through URLs"),a.each(this.urls,function(t,n){var r=s.match(n);r[s.MATCH_PROPERTY]&&e.matchingURLs.push({url:n,matches:r})}),this.matchingURLs.length&&!this.dynamic?(this.log("Page URL matches with object",this.matchingURLs),this.pageIdentified()):this.matchingURLs.length&&this.dynamic?(this.log("Page URL matches but dynamic tests are needed",this.matchingURLs),this.runDynamics()):(this.emit("fail"),this.log("ZERO MATCHES for: "+this.name))},r.prototype.runDynamics=function(){var e=[],t=this;this.log("Dynamically testing"),a.each(this.dynamicIdentifiers,function(n,r){var o;return!r.selector||r.criteria&&!r.values?(t.log("Dynamic Identifier: "+n+"1 can't run",r),"continue"):(o=u.progressCheck(r.selector),e.push(o),void o.progress(function(e,n){t.log("Update in element value",e,n),a.each(r.values,function(e,o){return t.log("Checking against: "+o),l[r.criteria](o,n.value)?(t.log("Value has been found for: "+n.value),n.remove(!0),!1):void 0}),t.stopChecks&&(t.log("Another dynamic Identifier has already passed"),n.remove())}))}),o.whenAny(e).done(function(e){t.pageIdentified()})},r.prototype.pageIdentified=function(e){this.log("Page Matches for: "+this.name,this.matchingURLs),this.stopChecks=!0,this.emit("success",this)},r.prototype.storeConfig=function(e){if(!o.type(e.id,"number"))throw new Error("Must provide an ID with every page ",e);if(!o.type(e.type,"string"))throw new Error("Must be provided with a valid type");this.config=e,this.id=e.id,this.urls=e.urls||[],this.type=e.type||c.DEFAULT_PAGE_TYPE,this.dynamicIdentifiers=e.dynamicIdentifiers||[],this.name=e.name},r.prototype.logger=function(){this.log=p("ve:page:"+this.type+":"+this.id)},r.prototype._checkDynamic=function(){return!!this.dynamicIdentifiers.length},t.exports=r},{"../common/criteria":1,"../common/debug":2,"../common/elements":3,"../common/emitter":4,"../common/jq":5,"../common/url-matcher":7,"../common/utils":8,"../settings":25}],14:[function(e,t,n){"use strict";function r(e,t){this.storeConfig(e),this.logger()}var o=e("../common/utils"),i=e("../common/emitter"),s=e("./type"),a=e("../common/debug"),c=e("../common/jq");i(r.prototype),r.prototype.run=function(e,t,n){this.pages.push(n),this.data=this.collateData(this._pixel[t].needs,e),this.generatePixels(this.data,this.config,t,n)},r.prototype.storeConfig=function(e){this.settings=e,this.config=e.config,this.id=e.id,this.type=e.type,this.name=e.name,this.overrides=e.overrides,this._pixel=s[this.type],this.pages=[]},r.prototype.logger=function(){this.log=a("ve:pixel:"+this.type+":"+this.id)},r.prototype.collateData=function(e,t){return this.log("Collating data for: ",e),t(e,this)},r.prototype.checkOverrides=function(e,t){return this.log("Checking for pixel OVERRIDES"),this.overrides.active?this.overrides.ros&&"ros"===e&&!this.overrides.pages.length?!0:this.overrides.pages.length?this.overrides.pages.length&&c.inArray(t,this.overrides.pages)>-1?!0:(this.log("The pixel has been OVERRIDDEN"),!1):!0:!0},r.prototype.generatePixels=function(e,t,n,r){var i,s=this;return this.checkOverrides(n,r)?(i=this._pixel[n]&&this._pixel[n].produces||[],i.length?(this.log("Generating Pixel(s) for: "+this.name+" with type: "+this.type),this.log("Data to be passed in will be ",e,t),void c.each(i,function(n,i){var a=i(e,t,r);a&&(o.getImage(a),s.log("Image pixel generated with `src`: "+a))})):void this.log("There are ZERO runners for this pageType:"+n)):void this.log("Pixels will not be generated")},t.exports=r},{"../common/debug":2,"../common/emitter":4,"../common/jq":5,"../common/utils":8,"./type":21}],15:[function(e,t,n){"use strict";function r(e,t){return s("#conversion - 0.data 1.config",e,t),"https://secure.adnxs.com/px?id="+t.conversionId+"&seg="+t.segmentConversion+"&order_id="+e.orderId+"&value="+e.orderVal+"&other=["+e.currency+"]&t=2"}function o(e,t){return"//secure.adnxs.com/seg?add="+t.segmentROS+"&t=2"}function i(e,t){return"//secure.adnxs.com/seg?add="+t.segmentProduct+"&t=2"}var s=e("../../common/debug")("ve:pixels:type:appNexus");t.exports={product:{needs:[],produces:[i]},conversion:{needs:["orderVal","orderId","currency"],produces:[r]},ros:{needs:[],produces:[o]}}},{"../../common/debug":2}],16:[function(e,t,n){function r(e,t){return"script"===t.type&&t.src?(i("adding script to the page"),o.getScript(t.src),!1):src}var o=e("../../common/utils"),i=e("../../common/debug")("ve:pixels:type:customConversion");t.exports={conversion:{needs:[],produces:[r]}}},{"../../common/debug":2,"../../common/utils":8}],17:[function(e,t,n){"use strict";function r(e,t,n){return s("Checking customPage Pixel",o.type(t.pages,"array"),i.inArray(n,t.pages)),o.type(t.pages,"array")&&-1===i.inArray(n,t.pages)?!1:"script"===t.type&&t.src?(o.getScript(t.src),!1):t.src}var o=e("../../common/utils"),i=e("../../common/jq"),s=e("../../common/debug")("ve:pixels:type:customPage");t.exports={custom:{needs:[],produces:[r]}}},{"../../common/debug":2,"../../common/jq":5,"../../common/utils":8}],18:[function(e,t,n){function r(e,t){return"script"===t.type&&t.src?(o.getScript(t.src),!1):t.src}var o=e("../../common/utils");t.exports={ros:{needs:[],produces:[r]}}},{"../../common/utils":8}],19:[function(e,t,n){"use strict";function r(e,t){if(!t.catConversion)return void i("No catConversion provided for Conversion page");e.productList&&e.productList.length;return"https://ad.doubleclick.net/ddm/activity/src="+t.src+";type=sales;cat="+t.catConversion+";qty="+(e.productList.length||1)+";cost="+e.orderVal+";ord="+e.orderId+"?"}function o(e){var t="cat"+e;return function(n,r){if(!r[t])return void i("No property provided for page type: "+e);var o=1e13*(Math.random()+"");return"https://ad.doubleclick.net/ddm/activity/src="+r.src+";type=invmedia;cat="+r[t]+";ord="+o}}var i=e("../../common/debug")("ve:pixels:type:dbm");t.exports={conversion:{needs:["orderVal","orderId","productList"],produces:[r]},ros:{needs:[],produces:[o("ROS")]},product:{needs:[],produces:[o("Product")]},basket:{needs:[],produces:[o("Basket")]},custom:{needs:[],produces:[o("Custom")]}}},{"../../common/debug":2}],20:[function(e,t,n){"use strict";function r(e,t){var n,r=t.flexId;return function(e){var t=document,n=t.createElement("script");n.async=!0,n.defer=!0,n.src=e,t.getElementsByTagName("head")[0].appendChild(n)}((n=window.location.href.indexOf("iatDev=1")>-1||document.cookie.indexOf("iatDev=1")>-1,"//"+("http:"!=window.location.protocol||n?"":"h")+"fp.gdmdigital.com/"+r+".js?r="+1e16*Math.random()+"&m=992&a="+r+(n?"&d=1":""))),!1}t.exports={ros:{needs:[],produces:[r]}}},{}],21:[function(e,t,n){"use strict";t.exports={ve:e("./ve"),dbm:e("./dbm"),flex:e("./flex"),smartFlex:e("./smartFlex"),appNexus:e("./appNexus"),customROS:e("./customROS"),customConversion:e("./customConversion"),customPage:e("./customPage")}},{"./appNexus":15,"./customConversion":16,"./customPage":17,"./customROS":18,"./dbm":19,"./flex":20,"./smartFlex":22,"./ve":23}],22:[function(e,t,n){"use strict";function r(e,t){var n=t.flexId;return function(e){var t=document,n=t.createElement("script");n.async=!0,n.defer=!0,n.src=e,t.getElementsByTagName("head")[0].appendChild(n)}("//c.vepxl1.net/4-"+n+".js?id="+n+"&m=4"),!1}t.exports={ros:{needs:[],produces:[r]}}},{}],23:[function(e,t,n){"use strict";function r(e,t,n){return"//veads.veinteractive.com/genieTracker.php?adgCompanyID="+t.journeyCode+"&adgItem="+encodeURIComponent(e.productId)}function o(e,t){var n=u(e.priceList);return"//veads.veinteractive.com/conversion.php?companyId="+t.journeyCode+"&items="+(n?n+"|":"")+"BASKETVAL:"+e.orderVal+"&orderId="+e.orderId}function i(e,t){var n=c(e.productList);return"//veads.veinteractive.com/genieTracker.php?adgCompanyID="+t.journeyCode+"&adgPurchasedItems="+n}function s(e,t){return"//veads.veinteractive.com/genieTracker.php?adgCompanyID="+t.journeyCode+"&adgItem="+c(e.productList)}function a(e,t){return"//veads.veinteractive.com/genieTracker.php?adgCompanyID="+t.journeyCode+"&adgBasketItems="+c(e.productList)}function c(e){var t="";return e=e||[],l.each(e,function(n,r){r=encodeURIComponent(r),t+=r+(n<e.length-1?"|":"")}),t}function u(e){var t="";return e=e||[],l.each(e,function(n,r){r=encodeURIComponent(r),t+="PROD"+(n+1)+":"+r+(n<e.length-1?"|":"")}),t}var l=e("../../common/jq");t.exports={product:{needs:["productId"],produces:[r]},conversion:{needs:["orderVal","orderId","productList","priceList"],produces:[o,i]},basket:{needs:["productList","priceList"],produces:[a]},category:{needs:["productList"],produces:[s]}}},{"../../common/jq":5}],24:[function(e,t,n){var r=e("./common/debug")("ve:run");try{r("Code is starting");var o=e("./main");new o}catch(i){r("There was an error OOPS",i)}},{"./common/debug":2,"./main":12}],25:[function(e,t,n){var r=e("./common/debug")("ve:settings");t.exports={DEFAULT_PAGE_TYPE:"custom",MAIN_PAGE_PROPERTY:"_pageObject",MAIN_DATA_ELEMENT:"_dataElementObject",MAIN_PIXEL:"_pixelObject",ELEMENT_MS:750,ELEMENT_MAX_RETRIES:3e3,fromObjectConfig:function(e){try{return window.veTagData.settings.veAds.config[e]}catch(t){r("Unable to load veAds config",t)}}}},{"./common/debug":2}],26:[function(e,t,n){"use strict";var r={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,n,r,o,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(o?"; domain="+o:"")+(r?"; path="+r:"")+(i?"; secure":""),!0},removeItem:function(e,t,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0):!1},hasItem:function(e){return e?new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;t>n;n++)e[n]=decodeURIComponent(e[n]);return e}};t.exports=r},{}],27:[function(e,t,n){"use strict";function r(){try{return c in s&&s[c]}catch(e){return!1}}var o,i={},s=window,a=s.document,c="localStorage",u="script",l=e("../common/utils"),p=e("../settings").fromObjectConfig("storageAcrossProtocols"),h=e("./cookies"),g=3600;if(i.disabled=!1,i.version="1.3.17",i.set=function(e,t){},i.get=function(e,t){},i.has=function(e){return void 0!==i.get(e)},i.remove=function(e){},i.clear=function(){},i.transact=function(e,t,n){null===n&&(n=t,t=null),null===t&&(t={});var r=i.get(e,t);n(r),i.set(e,r)},i.getAll=function(){},i.forEach=function(){},i.serialize=function(e){return JSON.stringify(e)},i.deserialize=function(e){if(!l.type("string"))return void 0;try{return JSON.parse(e)}catch(t){return e||void 0}},r())o=s[c],i.set=function(e,t){return l.type(t,"undefined")?i.remove(e):(o.setItem(e,i.serialize(t)),p&&h.setItem(e,i.serialize(t),g),t)},i.get=function(e,t){var n=i.deserialize(o.getItem(e));return n||(n=i.deserialize(h.getItem(e))),void 0===n?t:n},i.remove=function(e){o.removeItem(e)},i.clear=function(){o.clear()},i.getAll=function(){var e={};return i.forEach(function(t,n){e[t]=n}),e},i.forEach=function(e){for(var t=0;t<o.length;t++){var n=o.key(t);e(n,i.get(n))}};else if(a.documentElement.addBehavior){var m,d;try{d=new ActiveXObject("htmlfile"),d.open(),d.write("<"+u+">document.w=window</"+u+'><iframe src="/favicon.ico"></iframe>'),d.close(),m=d.w.frames[0].document,o=m.createElement("div")}catch(f){o=a.createElement("div"),m=a.body}var v=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);t.unshift(o),m.appendChild(o),o.addBehavior("#default#userData"),o.load(c);var n=e.apply(i,t);return m.removeChild(o),n}},y=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),b=function(e){return e.replace(/^d/,"___$&").replace(y,"___")};i.set=v(function(e,t,n){return t=b(t),void 0===n?i.remove(t):(e.setAttribute(t,i.serialize(n)),e.save(c),n)}),i.get=v(function(e,t,n){t=b(t);var r=i.deserialize(e.getAttribute(t));return void 0===r?n:r}),i.remove=v(function(e,t){t=b(t),e.removeAttribute(t),e.save(c)}),i.clear=v(function(e){var t=e.XMLDocument.documentElement.attributes;for(e.load(c);t.length;)e.removeAttribute(t[0].name);e.save(c)}),i.getAll=function(e){var t={};return i.forEach(function(e,n){t[e]=n}),t},i.forEach=v(function(e,t){for(var n,r=e.XMLDocument.documentElement.attributes,o=0;n=r[o];++o)t(n.name,i.deserialize(e.getAttribute(n.name)))})}try{var E="__storejs__";i.set(E,E),i.get(E)!=E&&(i.disabled=!0),i.remove(E)}catch(f){i.disabled=!0}i.enabled=!i.disabled,t.exports=i},{"../common/utils":8,"../settings":25,"./cookies":26}]},{},[24]);

}},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {
  chat: [],
  assist: [
    {
      value: "41",
      criteria: []
    }
  ],
  promote: [],
  panel: []
},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                appsMappings: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Assist",
    exit: true,
    inactivity: true,
    backButton: true,
    load: false,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: false
  },
  {
    name: "Chat",
    exit: false,
    inactivity: false,
    backButton: false,
    load: false,
    enabled: false,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: false
  }
]
            };

        if (!tag) {

            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain + '/scripts/4.12/capture-apps-4.12.11.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    }());
}
