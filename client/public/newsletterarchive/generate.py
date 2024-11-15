import json

f_read = open("data.json", "r")
data = json.load(f_read)
file_name = data["date"] + ".html"
date = data["date"]
file_link = "<a href=\"http://wece.ece.illinois.edu/newsletterarchive/" + data["date"] + ".html\" target=\"_blank\">"
date_string = data["date_string"]
f_write = open(file_name, "w")

html_head = """<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 15]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta charset="UTF-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>WECE Newsletter: """ + date_string + """</title>

    <style type="text/css">
        @font-face {
            font-family: "Roboto", sans-serif;
            src: url("https://fonts.googleapis.com/css?family=Roboto");
        }
        
        p {
            margin: 1em 0;
            padding: 0;
        }
        
        table {
            border-collapse: collapse;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: block;
            margin: 0;
            padding: 0;
        }
        
        img,
        a img {
            border: 0;
            height: auto;
            outline: none;
            text-decoration: none;
        }
        
        body,
        #bodyTable,
        #bodyCell {
            height: 100%;
            margin: 0;
            padding: 0;
            width: 100%;
        }
        
        #outlook a {
            padding: 0;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
        }
        
        table {
            mso-table-lspace: 0;
            mso-table-rspace: 0;
        }
        
        .ReadMsgBody {
            width: 100%;
        }
        
        .ExternalClass {
            width: 100%;
        }
        
        p,
        a,
        li,
        td,
        blockquote {
            mso-line-height-rule: exactly;
        }
        
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            cursor: default;
            text-decoration: none;
        }
        
        p,
        a,
        li,
        td,
        body,
        table,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }
        
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        
        #bodyCell {
            padding: 9px;
        }
        
        #weceLogo {
            width: 300px;
            margin: auto;
            display: block;
            padding-bottom: 30px;
        }
        
        #headerText {
            margin: auto;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 10px;
            background-color: #2eb6ad;
            border-bottom: 4px solid #0e968d;
        }
        
        .templateImage {
            height: auto;
            max-width: 564px;
        }
        
        .templateContainer {
            max-width: 600px !important;
        }
        
        #templatePreheader {
            padding-right: 9px;
            padding-left: 9px;
        }
        
        #templatePreheader .columnContainer td {
            padding: 0 9px;
        }
        
        .eventComponent {
            padding-top: 20px;
        }
        
        .row {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        .col {
            display: inline-block;
        }
        
        .sectionHeader {
            text-align: center;
        }
        
        .eventBox {
            width: 230px;
            height: 400px;
            padding: 10px;
            margin: 10px;
            border-bottom: 4px solid #0e968d;
            background-color: #2eb6ad;
            border-radius: 10px;
            display: inline-block;
            position: relative;
        }
        
        .eventBox h3 {
            color: #20272f;
            font-family: "IBM Plex Mono", monospace;
        }
        
        .eventBox h4 {
            color: #e2fffd;
        }
        
        .eventBox h5 {
            color: #14524e;
        }
        
        .focus {
            width: 400px;
            height: 550px;
            padding: 20px;
            margin: 20px;
        }
        
        .extra-long {
            height: 800px;
        }
        
        .blueBox {
            background-color: #33a8ff;
            border-bottom: 4px solid #2690de;
        }
        
        .yellowBox {
            background-color: #f5e14f;
            border-bottom: 4px solid #e3d046;
        }
        
        .btn-container {
            width: 230px;
            position: absolute;
            bottom: 10px;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        
        .btn {
            background-color: #269991;
            text-align: center;
            color: #ffffff;
            border: 2px solid #ffffff;
            padding: 5px 10px;
            margin: 5px;
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            flex: 1;
        }
        
        .fb-btn {
            background-color: #4690c3;
        }
        
        .btn a:link,
        .btn a:visited,
        .btn a:hover,
        .btn a:active {
            color: #ffffff !important;
        }
        
        .btn:hover {
            cursor: pointer;
        }
        
        .blueBtn {
            background-color: #2690de;
        }
        
        .yellowBtn {
            background-color: #e3d046;
        }
        
        #footerContent {
            padding-top: 27px;
            padding-bottom: 18px;
        }
        
        #templateHeader,
        #templateBody,
        #templateFooter {
            padding-right: 18px;
            padding-left: 18px;
        }
        /*
      @tab Page
      @section Background Style
      */
            
            body,
            #bodyTable {
                /*@editable*/
                background-color: #fafafa;
            }
            /*
      @tab Page
      @section Email Border
      */
            
            .templateContainer {
                /*@editable*/
                border: 0;
            }
            /*
      @tab Page
      @section Heading 1
      */
            
            h1 {
                /*@editable*/
                color: #20272f;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 40px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Page
      @section Heading 2
      */
            
            h2 {
                /*@editable*/
                color: #20272f;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 28px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Page
      @section Heading 3
      */
            
            h3 {
                /*@editable*/
                color: #444444;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 22px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 120%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Page
      @section Heading 4
      */
            
            h4 {
                /*@editable*/
                color: #444444;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 20px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                line-height: 120%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Page
      @section Heading 4
      */
            
            h5 {
                /*@editable*/
                color: #444444;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                line-height: 120%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Preheader
      @section Preheader Style
      */
            
            #templatePreheader {
                /*@editable*/
                background-color: #fafafa;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
            }
            /*
      @tab Preheader
      @section Preheader Text
      */
            
            #templatePreheader,
            #templatePreheader p {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Preheader
      @section Preheader Link
      */
            
            #templatePreheader a,
            #templatePreheader p a {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            /*
      @tab Header
      @section Header Style
      */
            
            #templateHeader {
                /*@editable*/
                background-color: #e2f7f6;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
                /*@editable*/
                padding-top: 18px;
                /*@editable*/
                padding-bottom: 0;
            }
            /*
      @tab Header
      @section Header Text
      */
            
            #templateHeader,
            #templateHeader h1 {
                /*@editable*/
                color: #20272f;
                /*@editable*/
                font-family: "IBM Plex Mono", monospace;
                /*@editable*/
                font-size: 36px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
            }
            
            #templateHeader h3 {
                /*@editable*/
                color: #20272f;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 16px;
                font-weight: normal;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
                padding-bottom: 20px;
            }
            /*
      @tab Header
      @section Header Link
      */
            
            #templateHeader a,
            #templateHeader p a {
                /*@editable*/
                color: #237a91;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            /*
      @tab Body
      @section Body Style
      */
            
            #templateBody {
                /*@editable*/
                background-color: #ffffff;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 2px solid #eaeaea;
                /*@editable*/
                padding-top: 0;
                /*@editable*/
                padding-bottom: 9px;
            }
            /*
      @tab Body
      @section Body Text
      */
            
            #templateBody,
            #templateBody p {
                /*@editable*/
                color: #20272f;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
            }
            /*
      @tab Body
      @section Body Link
      */
            
            #templateBody a,
            #templateBody p a {
                /*@editable*/
                color: #237a91;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            
            .eventBox a {
                color: #ffffff !important;
            }
            /*
      @tab Footer
      @section Footer Style
      */
            
            #templateFooter {
                /*@editable*/
                background-color: #fafafa;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
                /*@editable*/
                padding-top: 36px;
                /*@editable*/
                padding-bottom: 9px;
            }
            /*
      @tab Footer
      @section Social Bar Style
      */
            
            #socialBar {
                /*@editable*/
                background-color: #20272f;
                /*@editable*/
                border: 0;
                /*@editable*/
                padding: 18px;
            }
            /*
      @tab Footer
      @section Social Bar Text
      */
            
            #socialBar,
            #socialBar p {
                /*@editable*/
                color: #ffffff;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
            }
            /*
      @tab Footer
      @section Social Bar Link
      */
            
            #socialBar a,
            #socialBar p a {
                /*@editable*/
                color: #ffffff;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            /*
      @tab Footer
      @section Footer Text
      */
            
            #footerContent,
            #footerContent p {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
            }
            /*
      @tab Footer
      @section Footer Link
      */
            
            #footerContent a,
            #footerContent p a {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            /*
      @tab Footer
      @section Utility Bar Style
      */
            
            #utilityBar {
                /*@editable*/
                background-color: #fafafa;
                /*@editable*/
                border: 0;
                /*@editable*/
                padding-top: 9px;
                /*@editable*/
                padding-bottom: 9px;
            }
            /*
      @tab Footer
      @section Utility Bar Text
      */
            
            #utilityBar,
            #utilityBar p {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-family: "Roboto", sans-serif;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
            }
            /*
      @tab Footer
      @section Utility Bar Link
      */
            
            #utilityBar a,
            #utilityBar p a {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
            
            @media only screen and (max-width: 480px) {
                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                    -webkit-text-size-adjust: none !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                body {
                    width: 100% !important;
                    min-width: 100% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .templateImage {
                    width: 60% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .columnContainer {
                    max-width: 100% !important;
                    width: 100% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .mobileHide {
                    display: none;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .utilityLink {
                    display: block;
                    padding: 9px 0;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Heading 1
      */
                h1 {
                    /*@editable*/
                    font-size: 22px !important;
                    /*@editable*/
                    line-height: 175% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Heading 2
      */
                h2 {
                    /*@editable*/
                    font-size: 20px !important;
                    /*@editable*/
                    line-height: 175% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Heading 3
      */
                h3 {
                    /*@editable*/
                    font-size: 18px !important;
                    /*@editable*/
                    line-height: 175% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Heading 4
      */
                h4 {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 175% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Preheader Visibility
      */
                #templatePreheader {
                    /*@editable*/
                    display: block !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Preheader Text
      */
                #templatePreheader,
                #templatePreheader p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Header Text
      */
                #templateHeader,
                #templateHeader h1 {
                    /*@editable*/
                    font-size: 24px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
                #templateHeader h3 {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Body Text
      */
                #templateBody,
                #templateBody p {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Event Module
      */
                .row {
                    /*@tab Mobile Styles
      @section Event Module*/
                    width: 100%;
                    display: block;
                    justify-content: center;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .col {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
            
            @media only screen and (max-width: 480px) {
                .eventBox {
                    width: 85%;
                    max-width: none;
                    height: 360px;
                    padding: 10px;
                    margin: 10px;
                    border-bottom: 4px solid #0e968d;
                    background-color: #2eb6ad;
                    border-radius: 10px;
                }
                .btn-container {
                    width: 95%;
                    max-width: none;
                }
                .blueBox {
                    background-color: #33a8ff;
                    border-bottom: 4px solid #2690de;
                }
                .yellowBox {
                    background-color: #f5e14f;
                    border-bottom: 4px solid #e3d046;
                }
                .focus {
                    height: 700px;
                    padding: 20px;
                    margin: 20px;
                }
                .extra-long {
                    height: 900px;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Footer Text
      */
                #templateFooter,
                #templateFooter p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Social Bar Text
      */
                #socialBar,
                #socialBar p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
            
            @media only screen and (max-width: 480px) {
                /*
      @tab Mobile Styles
      @section Utility Bar Text
      */
                #utilityBar,
                #utilityBar p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    </style>
</head>
"""

open_body = """
<body>
    <center>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" id="bodyTable" style="height:100%;">
            <tr>
                <td align="center" valign="top" id="bodyCell">
                    <!-- BEGIN TEMPLATE // -->
                    <!--[if gte mso 9]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
              <tr>
                <td align="center" valign="top" width="600" style="width:600px;">
                  <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">"""

preheader = """<!-- BEGIN PREHEADER // -->
                        <tr>
                            <td valign="top" id="templatePreheader">
                                <!-- BEGIN MODULE: STANDARD PREHEADER // -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td valign="top">
                                            <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                          <tr>
                            <td valign="top" width="384" style="width:384px;">
                              <![endif]-->
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:384px;" width="100%" class="columnContainer">
                                                <tr>
                                                    <td valign="top">
                                                        <div mc:edit="preheader_leftcol_content">
                                                          <p>WECE Newsletter: """ + date_string + """</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!--[if mso]>
                      </td>
                      <td valign="top" width="180" style="width:180px;">
                        <![endif]-->
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:180px;" width="100%" class="columnContainer">
                                                <tr>
                                                    <td valign="top">
                                                        <div mc:edit="preheader_rightcol_content">
                                                            <p>
                                                                <a href="http://wece.ece.illinois.edu/newsletterarchive/""" + date + """.html" target="_blank">View email in your browser</a>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!--[if mso]>
                    </td>
                  </tr>
                </table>
                <![endif]-->
                                        </td>
                                    </tr>
                                </table>

                                <!-- // END MODULE: STANDARD PREHEADER -->
                            </td>
                        </tr>
                        <!-- // END PREHEADER -->"""

header = """                        <!-- BEGIN HEADER // -->
                        <tr>
                            <td valign="top" id="templateHeader">
                                <h3>""" + date_string + """</h3>
                                <!-- BEGIN MODULE: HEADER IMAGE // -->
                                <Image src="https://i.ibb.co/HXBYT9V/wece-logo-black.png" style="max-width:564px;" class="templateImage" id="weceLogo" mc:label="header_image" mc:edit="header_image" mc:allowdesigner="" mc:allowtext="" alt="wece logo" / />

                                <!-- // END MODULE: HEADER IMAGE -->
                                <h1 id="headerText">
                                    Women in Electrical and Computer Engineering
                                </h1>
                            </td>
                        </tr>
                        <!-- // END HEADER -->"""

start_body = """                        <!-- BEGIN BODY // -->
                        <tr>
                            <td valign="top" id="templateBody">
                                <!-- BEGIN MODULE: BODY CONTENT // -->
                                <!--BEGIN MODULE: EVENT COMPONENT-->
                                <div class="eventComponent">"""

end_event_component = """                                </div>
                                <br>
                                <!--// END MODULE: EVENT COMPONENT-->"""

events = []

for event in data["events"]:
  buttons = """                                                <div class="btn-container">"""
  for button in event["buttons"]:
    button_string = """                                                    <div class="btn">
                                                        <a href=\"""" + button["link"] + """\" target="_blank">
                              """ + button["text"] + """
                            </a>
                                                    </div>
                                                    """
    buttons += button_string
  buttons += """                                                </div>
  """
  event_string = """                                    <div class="col">
                                        <div class=\"eventBox """
  event_string += "focus" if event["focus"] else ""
  event_string += """\">
                                          """ + event["title"] if event["title"] else ""
  event_string += event["date_time"] if event["date_time"] else ""
  event_string += event["points"] if event["points"] else ""
  event_string += """
                                          <p>
                                            """ + event["description"]
  event_string += buttons 

  event_string += """                                            </p>
                                        </div>
                                    </div>
                                    """
  events.append(event_string)

events_string = ""
event_ct = 0
for idx, event in enumerate(events):
  focus = data["events"][idx]["focus"]

  if focus:
    if event_ct != 0:
      events_string += """                                  </div>
      """
    events_string += """                                  <div class="row">
    """
    events_string += event
    events_string += """                                  </div>
    """
  else:
    if event_ct == 0:
      events_string += """                                  <div class="row">
      """
      events_string += event
      event_ct += 1
    else:
      events_string += event
      events_string += """                                  </div>
      """
      event_ct = 0

other_announcements_string = ""
for announcement in data["other_announcements"]:
  other_announcements_string += """                                <h3>%s</h3>
                                <p>
                                    %s
                                </p>
                                <br />
                                """ % (announcement["title"], announcement["description"])

end_body = """                                <!-- // END MODULE: BODY CONTENT -->
                            </td>
                        </tr>
                        <!-- // END BODY -->
                        """

footer = """                        <!-- BEGIN FOOTER // -->
                        <tr>
                            <td valign="top" id="templateFooter">
                                <!-- BEGIN MODULE: STANDARD FOOTER // -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td valign="top" id="socialBar">
                                            <div mc:edit="social_bar">
                                                <a href="https://www.instagram.com/wece.uiuc/" class="utilityLink" target="_blank">Follow on
                            Instagram</a>
                                                <span class="mobileHide"> | </span>
                                                <a href="https://www.facebook.com/wece.uiuc/" class="utilityLink" target="_blank">Like on
                            Facebook</a>
                                                <span class="mobileHide"> | </span>
                                                <a href="http://wece.ece.illinois.edu/" class="utilityLink" target="_blank">Visit our site</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" id="footerContent">
                                            <div mc:edit="footer_content">
                                                <em>Copyright © 2021 UIUC WECE. All rights
                            reserved.</em>
                                                <br />
                                                <br />
                                                <strong>Our mailing address is:</strong>
                                                <br /> 1016 ECEB, 306 North Wright Street, Urbana, IL 61801
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" id="utilityBar">
                                            <div mc:edit="utility_bar">
                                                <!-- <a href="*|UNSUB|*" class="utilityLink">unsubscribe from this list</a>
                        <span class="mobileHide"> | </span>
                        <a href="*|UPDATE_PROFILE|*" class="utilityLink">update subscription preferences</a> -->
                                                <!-- <span class="mobileHide"> | </span> -->
                                                <a href="http://wece.ece.illinois.edu/newsletterarchive/""" + date + """.html" class="utilityLink">view
                            email in browser</a>
                                            </div>
                                        </td>
                                    </tr>
                                </table>

                                <!-- // BEGIN MODULE: STANDARD FOOTER -->
                            </td>
                        </tr>
                        <!-- // END FOOTER -->
                        """

html_end = """                    </table>

                    <!--[if gte mso 9]>
        </td>
      </tr>
    </table>
    <![endif]-->
                    <!-- // END TEMPLATE -->
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
"""

# html = html_head + open_body + preheader + header + start_body + events_string + end_event_component + other_announcements_string + end_body + footer + html_end

f_write.write(html_head)
f_write.write(open_body)
f_write.write(preheader)
f_write.write(header)
f_write.write(start_body)
f_write.write(events_string)
f_write.write(end_event_component)
f_write.write(other_announcements_string)
f_write.write(end_body)
f_write.write(footer)
f_write.write(html_end)

f_read.close()
f_write.close()