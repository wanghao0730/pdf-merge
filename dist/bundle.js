(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('fs'), require('canvas'), require('http'), require('https'), require('url')) :
    typeof define === 'function' && define.amd ? define(['fs', 'canvas', 'http', 'https', 'url'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.require$$0$1, global.require$$0, global.require$$2, global.require$$3, global.require$$4));
})(this, (function (require$$0$1, require$$0, require$$2, require$$3, require$$4) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire(path) {
    	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }

    var pdfExports = {};
    var pdf = {
      get exports(){ return pdfExports; },
      set exports(v){ pdfExports = v; },
    };

    /**
     * @licstart The following is the entire license notice for the
     * JavaScript code in this page
     *
     * Copyright 2023 Mozilla Foundation
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * @licend The above is the entire license notice for the
     * JavaScript code in this page
     */

    (function (module, exports) {
    	(function webpackUniversalModuleDefinition(root,factory){module.exports=factory();})(globalThis,()=>{return(/******/(()=>{// webpackBootstrap
    /******/var __webpack_modules__=[/* 0 */,/* 1 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.VerbosityLevel=exports.Util=exports.UnknownErrorException=exports.UnexpectedResponseException=exports.UNSUPPORTED_FEATURES=exports.TextRenderingMode=exports.RenderingIntentFlag=exports.PermissionFlag=exports.PasswordResponses=exports.PasswordException=exports.PageActionEventType=exports.OPS=exports.MissingPDFException=exports.LINE_FACTOR=exports.LINE_DESCENT_FACTOR=exports.InvalidPDFException=exports.ImageKind=exports.IDENTITY_MATRIX=exports.FormatError=exports.FeatureTest=exports.FONT_IDENTITY_MATRIX=exports.DocumentActionEventType=exports.CMapCompressionType=exports.BaseException=exports.BASELINE_FACTOR=exports.AnnotationType=exports.AnnotationStateModelType=exports.AnnotationReviewState=exports.AnnotationReplyType=exports.AnnotationMode=exports.AnnotationMarkedState=exports.AnnotationFlag=exports.AnnotationFieldFlag=exports.AnnotationEditorType=exports.AnnotationEditorPrefix=exports.AnnotationEditorParamsType=exports.AnnotationBorderStyleType=exports.AnnotationActionEventType=exports.AbortException=void 0;exports.assert=assert;exports.bytesToString=bytesToString;exports.createPromiseCapability=createPromiseCapability;exports.createValidAbsoluteUrl=createValidAbsoluteUrl;exports.getModificationDate=getModificationDate;exports.getVerbosityLevel=getVerbosityLevel;exports.info=info;exports.isArrayBuffer=isArrayBuffer;exports.isArrayEqual=isArrayEqual;exports.objectFromMap=objectFromMap;exports.objectSize=objectSize;exports.setVerbosityLevel=setVerbosityLevel;exports.shadow=shadow;exports.string32=string32;exports.stringToBytes=stringToBytes;exports.stringToPDFString=stringToPDFString;exports.stringToUTF8String=stringToUTF8String;exports.unreachable=unreachable;exports.utf8StringToString=utf8StringToString;exports.warn=warn;const IDENTITY_MATRIX=[1,0,0,1,0,0];exports.IDENTITY_MATRIX=IDENTITY_MATRIX;const FONT_IDENTITY_MATRIX=[0.001,0,0,0.001,0,0];exports.FONT_IDENTITY_MATRIX=FONT_IDENTITY_MATRIX;const LINE_FACTOR=1.35;exports.LINE_FACTOR=LINE_FACTOR;const LINE_DESCENT_FACTOR=0.35;exports.LINE_DESCENT_FACTOR=LINE_DESCENT_FACTOR;const BASELINE_FACTOR=LINE_DESCENT_FACTOR/LINE_FACTOR;exports.BASELINE_FACTOR=BASELINE_FACTOR;const RenderingIntentFlag={ANY:0x01,DISPLAY:0x02,PRINT:0x04,SAVE:0x08,ANNOTATIONS_FORMS:0x10,ANNOTATIONS_STORAGE:0x20,ANNOTATIONS_DISABLE:0x40,OPLIST:0x100};exports.RenderingIntentFlag=RenderingIntentFlag;const AnnotationMode={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3};exports.AnnotationMode=AnnotationMode;const AnnotationEditorPrefix="pdfjs_internal_editor_";exports.AnnotationEditorPrefix=AnnotationEditorPrefix;const AnnotationEditorType={DISABLE:-1,NONE:0,FREETEXT:3,INK:15};exports.AnnotationEditorType=AnnotationEditorType;const AnnotationEditorParamsType={FREETEXT_SIZE:1,FREETEXT_COLOR:2,FREETEXT_OPACITY:3,INK_COLOR:11,INK_THICKNESS:12,INK_OPACITY:13};exports.AnnotationEditorParamsType=AnnotationEditorParamsType;const PermissionFlag={PRINT:0x04,MODIFY_CONTENTS:0x08,COPY:0x10,MODIFY_ANNOTATIONS:0x20,FILL_INTERACTIVE_FORMS:0x100,COPY_FOR_ACCESSIBILITY:0x200,ASSEMBLE:0x400,PRINT_HIGH_QUALITY:0x800};exports.PermissionFlag=PermissionFlag;const TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};exports.TextRenderingMode=TextRenderingMode;const ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};exports.ImageKind=ImageKind;const AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};exports.AnnotationType=AnnotationType;const AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};exports.AnnotationStateModelType=AnnotationStateModelType;const AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};exports.AnnotationMarkedState=AnnotationMarkedState;const AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};exports.AnnotationReviewState=AnnotationReviewState;const AnnotationReplyType={GROUP:"Group",REPLY:"R"};exports.AnnotationReplyType=AnnotationReplyType;const AnnotationFlag={INVISIBLE:0x01,HIDDEN:0x02,PRINT:0x04,NOZOOM:0x08,NOROTATE:0x10,NOVIEW:0x20,READONLY:0x40,LOCKED:0x80,TOGGLENOVIEW:0x100,LOCKEDCONTENTS:0x200};exports.AnnotationFlag=AnnotationFlag;const AnnotationFieldFlag={READONLY:0x0000001,REQUIRED:0x0000002,NOEXPORT:0x0000004,MULTILINE:0x0001000,PASSWORD:0x0002000,NOTOGGLETOOFF:0x0004000,RADIO:0x0008000,PUSHBUTTON:0x0010000,COMBO:0x0020000,EDIT:0x0040000,SORT:0x0080000,FILESELECT:0x0100000,MULTISELECT:0x0200000,DONOTSPELLCHECK:0x0400000,DONOTSCROLL:0x0800000,COMB:0x1000000,RICHTEXT:0x2000000,RADIOSINUNISON:0x2000000,COMMITONSELCHANGE:0x4000000};exports.AnnotationFieldFlag=AnnotationFieldFlag;const AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};exports.AnnotationBorderStyleType=AnnotationBorderStyleType;const AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"};exports.AnnotationActionEventType=AnnotationActionEventType;const DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"};exports.DocumentActionEventType=DocumentActionEventType;const PageActionEventType={O:"PageOpen",C:"PageClose"};exports.PageActionEventType=PageActionEventType;const VerbosityLevel={ERRORS:0,WARNINGS:1,INFOS:5};exports.VerbosityLevel=VerbosityLevel;const CMapCompressionType={NONE:0,BINARY:1};exports.CMapCompressionType=CMapCompressionType;const OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotation:80,endAnnotation:81,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};exports.OPS=OPS;const UNSUPPORTED_FEATURES={forms:"forms",javaScript:"javaScript",signatures:"signatures",smask:"smask",shadingPattern:"shadingPattern",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontBuildPath:"errorFontBuildPath",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent",errorContentSubStream:"errorContentSubStream"};exports.UNSUPPORTED_FEATURES=UNSUPPORTED_FEATURES;const PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};exports.PasswordResponses=PasswordResponses;let verbosity=VerbosityLevel.WARNINGS;function setVerbosityLevel(level){if(Number.isInteger(level)){verbosity=level;}}function getVerbosityLevel(){return verbosity;}function info(msg){if(verbosity>=VerbosityLevel.INFOS){console.log(`Info: ${msg}`);}}function warn(msg){if(verbosity>=VerbosityLevel.WARNINGS){console.log(`Warning: ${msg}`);}}function unreachable(msg){throw new Error(msg);}function assert(cond,msg){if(!cond){unreachable(msg);}}function _isValidProtocol(url){if(!url){return false;}switch(url.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return true;default:return false;}}function createValidAbsoluteUrl(url,baseUrl=null,options=null){if(!url){return null;}try{if(options&&typeof url==="string"){if(options.addDefaultProtocol&&url.startsWith("www.")){const dots=url.match(/\./g);if(dots&&dots.length>=2){url=`http://${url}`;}}if(options.tryConvertEncoding){try{url=stringToUTF8String(url);}catch(ex){}}}const absoluteUrl=baseUrl?new URL(url,baseUrl):new URL(url);if(_isValidProtocol(absoluteUrl)){return absoluteUrl;}}catch(ex){}return null;}function shadow(obj,prop,value,nonSerializable=false){Object.defineProperty(obj,prop,{value,enumerable:!nonSerializable,configurable:true,writable:false});return value;}const BaseException=function BaseExceptionClosure(){function BaseException(message,name){if(this.constructor===BaseException){unreachable("Cannot initialize BaseException.");}this.message=message;this.name=name;}BaseException.prototype=new Error();BaseException.constructor=BaseException;return BaseException;}();exports.BaseException=BaseException;class PasswordException extends BaseException{constructor(msg,code){super(msg,"PasswordException");this.code=code;}}exports.PasswordException=PasswordException;class UnknownErrorException extends BaseException{constructor(msg,details){super(msg,"UnknownErrorException");this.details=details;}}exports.UnknownErrorException=UnknownErrorException;class InvalidPDFException extends BaseException{constructor(msg){super(msg,"InvalidPDFException");}}exports.InvalidPDFException=InvalidPDFException;class MissingPDFException extends BaseException{constructor(msg){super(msg,"MissingPDFException");}}exports.MissingPDFException=MissingPDFException;class UnexpectedResponseException extends BaseException{constructor(msg,status){super(msg,"UnexpectedResponseException");this.status=status;}}exports.UnexpectedResponseException=UnexpectedResponseException;class FormatError extends BaseException{constructor(msg){super(msg,"FormatError");}}exports.FormatError=FormatError;class AbortException extends BaseException{constructor(msg){super(msg,"AbortException");}}exports.AbortException=AbortException;function bytesToString(bytes){if(typeof bytes!=="object"||bytes===null||bytes.length===undefined){unreachable("Invalid argument for bytesToString");}const length=bytes.length;const MAX_ARGUMENT_COUNT=8192;if(length<MAX_ARGUMENT_COUNT){return String.fromCharCode.apply(null,bytes);}const strBuf=[];for(let i=0;i<length;i+=MAX_ARGUMENT_COUNT){const chunkEnd=Math.min(i+MAX_ARGUMENT_COUNT,length);const chunk=bytes.subarray(i,chunkEnd);strBuf.push(String.fromCharCode.apply(null,chunk));}return strBuf.join("");}function stringToBytes(str){if(typeof str!=="string"){unreachable("Invalid argument for stringToBytes");}const length=str.length;const bytes=new Uint8Array(length);for(let i=0;i<length;++i){bytes[i]=str.charCodeAt(i)&0xff;}return bytes;}function string32(value){return String.fromCharCode(value>>24&0xff,value>>16&0xff,value>>8&0xff,value&0xff);}function objectSize(obj){return Object.keys(obj).length;}function objectFromMap(map){const obj=Object.create(null);for(const[key,value]of map){obj[key]=value;}return obj;}function isLittleEndian(){const buffer8=new Uint8Array(4);buffer8[0]=1;const view32=new Uint32Array(buffer8.buffer,0,1);return view32[0]===1;}function isEvalSupported(){try{new Function("");return true;}catch(e){return false;}}class FeatureTest{static get isLittleEndian(){return shadow(this,"isLittleEndian",isLittleEndian());}static get isEvalSupported(){return shadow(this,"isEvalSupported",isEvalSupported());}static get isOffscreenCanvasSupported(){return shadow(this,"isOffscreenCanvasSupported",typeof OffscreenCanvas!=="undefined");}static get platform(){if(typeof navigator==="undefined"){return shadow(this,"platform",{isWin:false,isMac:false});}return shadow(this,"platform",{isWin:navigator.platform.includes("Win"),isMac:navigator.platform.includes("Mac")});}}exports.FeatureTest=FeatureTest;const hexNumbers=[...Array(256).keys()].map(n=>n.toString(16).padStart(2,"0"));class Util{static makeHexColor(r,g,b){return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;}static scaleMinMax(transform,minMax){let temp;if(transform[0]){if(transform[0]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[0];minMax[1]*=transform[0];if(transform[3]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[3];minMax[3]*=transform[3];}else {temp=minMax[0];minMax[0]=minMax[2];minMax[2]=temp;temp=minMax[1];minMax[1]=minMax[3];minMax[3]=temp;if(transform[1]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[1];minMax[3]*=transform[1];if(transform[2]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[2];minMax[1]*=transform[2];}minMax[0]+=transform[4];minMax[1]+=transform[4];minMax[2]+=transform[5];minMax[3]+=transform[5];}static transform(m1,m2){return [m1[0]*m2[0]+m1[2]*m2[1],m1[1]*m2[0]+m1[3]*m2[1],m1[0]*m2[2]+m1[2]*m2[3],m1[1]*m2[2]+m1[3]*m2[3],m1[0]*m2[4]+m1[2]*m2[5]+m1[4],m1[1]*m2[4]+m1[3]*m2[5]+m1[5]];}static applyTransform(p,m){const xt=p[0]*m[0]+p[1]*m[2]+m[4];const yt=p[0]*m[1]+p[1]*m[3]+m[5];return [xt,yt];}static applyInverseTransform(p,m){const d=m[0]*m[3]-m[1]*m[2];const xt=(p[0]*m[3]-p[1]*m[2]+m[2]*m[5]-m[4]*m[3])/d;const yt=(-p[0]*m[1]+p[1]*m[0]+m[4]*m[1]-m[5]*m[0])/d;return [xt,yt];}static getAxialAlignedBoundingBox(r,m){const p1=Util.applyTransform(r,m);const p2=Util.applyTransform(r.slice(2,4),m);const p3=Util.applyTransform([r[0],r[3]],m);const p4=Util.applyTransform([r[2],r[1]],m);return [Math.min(p1[0],p2[0],p3[0],p4[0]),Math.min(p1[1],p2[1],p3[1],p4[1]),Math.max(p1[0],p2[0],p3[0],p4[0]),Math.max(p1[1],p2[1],p3[1],p4[1])];}static inverseTransform(m){const d=m[0]*m[3]-m[1]*m[2];return [m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[4]*m[3])/d,(m[4]*m[1]-m[5]*m[0])/d];}static singularValueDecompose2dScale(m){const transpose=[m[0],m[2],m[1],m[3]];const a=m[0]*transpose[0]+m[1]*transpose[2];const b=m[0]*transpose[1]+m[1]*transpose[3];const c=m[2]*transpose[0]+m[3]*transpose[2];const d=m[2]*transpose[1]+m[3]*transpose[3];const first=(a+d)/2;const second=Math.sqrt((a+d)**2-4*(a*d-c*b))/2;const sx=first+second||1;const sy=first-second||1;return [Math.sqrt(sx),Math.sqrt(sy)];}static normalizeRect(rect){const r=rect.slice(0);if(rect[0]>rect[2]){r[0]=rect[2];r[2]=rect[0];}if(rect[1]>rect[3]){r[1]=rect[3];r[3]=rect[1];}return r;}static intersect(rect1,rect2){const xLow=Math.max(Math.min(rect1[0],rect1[2]),Math.min(rect2[0],rect2[2]));const xHigh=Math.min(Math.max(rect1[0],rect1[2]),Math.max(rect2[0],rect2[2]));if(xLow>xHigh){return null;}const yLow=Math.max(Math.min(rect1[1],rect1[3]),Math.min(rect2[1],rect2[3]));const yHigh=Math.min(Math.max(rect1[1],rect1[3]),Math.max(rect2[1],rect2[3]));if(yLow>yHigh){return null;}return [xLow,yLow,xHigh,yHigh];}static bezierBoundingBox(x0,y0,x1,y1,x2,y2,x3,y3){const tvalues=[],bounds=[[],[]];let a,b,c,t,t1,t2,b2ac,sqrtb2ac;for(let i=0;i<2;++i){if(i===0){b=6*x0-12*x1+6*x2;a=-3*x0+9*x1-9*x2+3*x3;c=3*x1-3*x0;}else {b=6*y0-12*y1+6*y2;a=-3*y0+9*y1-9*y2+3*y3;c=3*y1-3*y0;}if(Math.abs(a)<1e-12){if(Math.abs(b)<1e-12){continue;}t=-c/b;if(0<t&&t<1){tvalues.push(t);}continue;}b2ac=b*b-4*c*a;sqrtb2ac=Math.sqrt(b2ac);if(b2ac<0){continue;}t1=(-b+sqrtb2ac)/(2*a);if(0<t1&&t1<1){tvalues.push(t1);}t2=(-b-sqrtb2ac)/(2*a);if(0<t2&&t2<1){tvalues.push(t2);}}let j=tvalues.length,mt;const jlen=j;while(j--){t=tvalues[j];mt=1-t;bounds[0][j]=mt*mt*mt*x0+3*mt*mt*t*x1+3*mt*t*t*x2+t*t*t*x3;bounds[1][j]=mt*mt*mt*y0+3*mt*mt*t*y1+3*mt*t*t*y2+t*t*t*y3;}bounds[0][jlen]=x0;bounds[1][jlen]=y0;bounds[0][jlen+1]=x3;bounds[1][jlen+1]=y3;bounds[0].length=bounds[1].length=jlen+2;return [Math.min(...bounds[0]),Math.min(...bounds[1]),Math.max(...bounds[0]),Math.max(...bounds[1])];}}exports.Util=Util;const PDFStringTranslateTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2d8,0x2c7,0x2c6,0x2d9,0x2dd,0x2db,0x2da,0x2dc,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2022,0x2020,0x2021,0x2026,0x2014,0x2013,0x192,0x2044,0x2039,0x203a,0x2212,0x2030,0x201e,0x201c,0x201d,0x2018,0x2019,0x201a,0x2122,0xfb01,0xfb02,0x141,0x152,0x160,0x178,0x17d,0x131,0x142,0x153,0x161,0x17e,0,0x20ac];function stringToPDFString(str){if(str[0]>="\xEF"){let encoding;if(str[0]==="\xFE"&&str[1]==="\xFF"){encoding="utf-16be";}else if(str[0]==="\xFF"&&str[1]==="\xFE"){encoding="utf-16le";}else if(str[0]==="\xEF"&&str[1]==="\xBB"&&str[2]==="\xBF"){encoding="utf-8";}if(encoding){try{const decoder=new TextDecoder(encoding,{fatal:true});const buffer=stringToBytes(str);return decoder.decode(buffer);}catch(ex){warn(`stringToPDFString: "${ex}".`);}}}const strBuf=[];for(let i=0,ii=str.length;i<ii;i++){const code=PDFStringTranslateTable[str.charCodeAt(i)];strBuf.push(code?String.fromCharCode(code):str.charAt(i));}return strBuf.join("");}function stringToUTF8String(str){return decodeURIComponent(escape(str));}function utf8StringToString(str){return unescape(encodeURIComponent(str));}function isArrayBuffer(v){return typeof v==="object"&&v!==null&&v.byteLength!==undefined;}function isArrayEqual(arr1,arr2){if(arr1.length!==arr2.length){return false;}for(let i=0,ii=arr1.length;i<ii;i++){if(arr1[i]!==arr2[i]){return false;}}return true;}function getModificationDate(date=new Date()){const buffer=[date.getUTCFullYear().toString(),(date.getUTCMonth()+1).toString().padStart(2,"0"),date.getUTCDate().toString().padStart(2,"0"),date.getUTCHours().toString().padStart(2,"0"),date.getUTCMinutes().toString().padStart(2,"0"),date.getUTCSeconds().toString().padStart(2,"0")];return buffer.join("");}function createPromiseCapability(){const capability=Object.create(null);let isSettled=false;Object.defineProperty(capability,"settled",{get(){return isSettled;}});capability.promise=new Promise(function(resolve,reject){capability.resolve=function(data){isSettled=true;resolve(data);};capability.reject=function(reason){isSettled=true;reject(reason);};});return capability;}/***/},/* 2 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.build=exports.RenderTask=exports.PDFWorkerUtil=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDocumentLoadingTask=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultStandardFontDataFactory=exports.DefaultCanvasFactory=exports.DefaultCMapReaderFactory=void 0;exports.getDocument=getDocument;exports.version=void 0;var _util=__w_pdfjs_require__(1);var _annotation_storage=__w_pdfjs_require__(3);var _display_utils=__w_pdfjs_require__(6);var _font_loader=__w_pdfjs_require__(9);var _canvas=__w_pdfjs_require__(11);var _worker_options=__w_pdfjs_require__(14);var _is_node=__w_pdfjs_require__(10);var _message_handler=__w_pdfjs_require__(15);var _metadata=__w_pdfjs_require__(16);var _optional_content_config=__w_pdfjs_require__(17);var _transport_stream=__w_pdfjs_require__(18);var _xfa_text=__w_pdfjs_require__(19);const DEFAULT_RANGE_CHUNK_SIZE=65536;const RENDERING_CANCELLED_TIMEOUT=100;let DefaultCanvasFactory=_display_utils.DOMCanvasFactory;exports.DefaultCanvasFactory=DefaultCanvasFactory;let DefaultCMapReaderFactory=_display_utils.DOMCMapReaderFactory;exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory;let DefaultStandardFontDataFactory=_display_utils.DOMStandardFontDataFactory;exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory;if(_is_node.isNodeJS){const{NodeCanvasFactory,NodeCMapReaderFactory,NodeStandardFontDataFactory}=__w_pdfjs_require__(20);exports.DefaultCanvasFactory=DefaultCanvasFactory=NodeCanvasFactory;exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory=NodeCMapReaderFactory;exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory=NodeStandardFontDataFactory;}let createPDFNetworkStream;{if(_is_node.isNodeJS){const{PDFNodeStream}=__w_pdfjs_require__(21);createPDFNetworkStream=params=>{return new PDFNodeStream(params);};}else {const{PDFNetworkStream}=__w_pdfjs_require__(24);const{PDFFetchStream}=__w_pdfjs_require__(25);createPDFNetworkStream=params=>{return (0, _display_utils.isValidFetchUrl)(params.url)?new PDFFetchStream(params):new PDFNetworkStream(params);};}}function getDocument(src){if(typeof src==="string"||src instanceof URL){src={url:src};}else if((0, _util.isArrayBuffer)(src)){src={data:src};}else if(src instanceof PDFDataRangeTransport){(0, _display_utils.deprecated)("`PDFDataRangeTransport`-instance, "+"please use a parameter object with `range`-property instead.");src={range:src};}else {if(typeof src!=="object"){throw new Error("Invalid parameter in getDocument, "+"need either string, URL, TypedArray, or parameter object.");}}if(!src.url&&!src.data&&!src.range){throw new Error("Invalid parameter object: need either .data, .range or .url");}const task=new PDFDocumentLoadingTask();const url=src.url?getUrlProp(src.url):null;const data=src.data?getDataProp(src.data):null;const httpHeaders=src.httpHeaders||null;const withCredentials=src.withCredentials===true;const password=src.password??null;const rangeTransport=src.range instanceof PDFDataRangeTransport?src.range:null;const rangeChunkSize=Number.isInteger(src.rangeChunkSize)&&src.rangeChunkSize>0?src.rangeChunkSize:DEFAULT_RANGE_CHUNK_SIZE;let worker=src.worker instanceof PDFWorker?src.worker:null;const verbosity=src.verbosity;const docBaseUrl=typeof src.docBaseUrl==="string"&&!(0, _display_utils.isDataScheme)(src.docBaseUrl)?src.docBaseUrl:null;const cMapUrl=typeof src.cMapUrl==="string"?src.cMapUrl:null;const cMapPacked=src.cMapPacked!==false;const CMapReaderFactory=src.CMapReaderFactory||DefaultCMapReaderFactory;const standardFontDataUrl=typeof src.standardFontDataUrl==="string"?src.standardFontDataUrl:null;const StandardFontDataFactory=src.StandardFontDataFactory||DefaultStandardFontDataFactory;const ignoreErrors=src.stopAtErrors!==true;const maxImageSize=Number.isInteger(src.maxImageSize)&&src.maxImageSize>-1?src.maxImageSize:-1;const isEvalSupported=src.isEvalSupported!==false;const isOffscreenCanvasSupported=typeof src.isOffscreenCanvasSupported==="boolean"?src.isOffscreenCanvasSupported:!_is_node.isNodeJS;const disableFontFace=typeof src.disableFontFace==="boolean"?src.disableFontFace:_is_node.isNodeJS;const fontExtraProperties=src.fontExtraProperties===true;const enableXfa=src.enableXfa===true;const ownerDocument=src.ownerDocument||globalThis.document;const disableRange=src.disableRange===true;const disableStream=src.disableStream===true;const disableAutoFetch=src.disableAutoFetch===true;const pdfBug=src.pdfBug===true;const length=rangeTransport?rangeTransport.length:src.length??NaN;const useSystemFonts=typeof src.useSystemFonts==="boolean"?src.useSystemFonts:!_is_node.isNodeJS&&!disableFontFace;const useWorkerFetch=typeof src.useWorkerFetch==="boolean"?src.useWorkerFetch:CMapReaderFactory===_display_utils.DOMCMapReaderFactory&&StandardFontDataFactory===_display_utils.DOMStandardFontDataFactory&&(0, _display_utils.isValidFetchUrl)(cMapUrl,document.baseURI)&&(0, _display_utils.isValidFetchUrl)(standardFontDataUrl,document.baseURI);const styleElement=null;(0, _util.setVerbosityLevel)(verbosity);const transportFactory=useWorkerFetch?null:{cMapReaderFactory:new CMapReaderFactory({baseUrl:cMapUrl,isCompressed:cMapPacked}),standardFontDataFactory:new StandardFontDataFactory({baseUrl:standardFontDataUrl})};if(!worker){const workerParams={verbosity,port:_worker_options.GlobalWorkerOptions.workerPort};worker=workerParams.port?PDFWorker.fromPort(workerParams):new PDFWorker(workerParams);task._worker=worker;}const docId=task.docId;const fetchDocParams={docId,apiVersion:'3.4.120',data,password,disableAutoFetch,rangeChunkSize,length,docBaseUrl,enableXfa,evaluatorOptions:{maxImageSize,disableFontFace,ignoreErrors,isEvalSupported,isOffscreenCanvasSupported,fontExtraProperties,useSystemFonts,cMapUrl:useWorkerFetch?cMapUrl:null,standardFontDataUrl:useWorkerFetch?standardFontDataUrl:null}};const transportParams={ignoreErrors,isEvalSupported,disableFontFace,fontExtraProperties,enableXfa,ownerDocument,disableAutoFetch,pdfBug,styleElement};worker.promise.then(function(){if(task.destroyed){throw new Error("Loading aborted");}const workerIdPromise=_fetchDocument(worker,fetchDocParams);const networkStreamPromise=new Promise(function(resolve){let networkStream;if(rangeTransport){networkStream=new _transport_stream.PDFDataTransportStream({length,initialData:rangeTransport.initialData,progressiveDone:rangeTransport.progressiveDone,contentDispositionFilename:rangeTransport.contentDispositionFilename,disableRange,disableStream},rangeTransport);}else if(!data){networkStream=createPDFNetworkStream({url,length,httpHeaders,withCredentials,rangeChunkSize,disableRange,disableStream});}resolve(networkStream);});return Promise.all([workerIdPromise,networkStreamPromise]).then(function([workerId,networkStream]){if(task.destroyed){throw new Error("Loading aborted");}const messageHandler=new _message_handler.MessageHandler(docId,workerId,worker.port);const transport=new WorkerTransport(messageHandler,task,networkStream,transportParams,transportFactory);task._transport=transport;messageHandler.send("Ready",null);});}).catch(task._capability.reject);return task;}async function _fetchDocument(worker,source){if(worker.destroyed){throw new Error("Worker was destroyed");}const workerId=await worker.messageHandler.sendWithPromise("GetDocRequest",source,source.data?[source.data.buffer]:null);if(worker.destroyed){throw new Error("Worker was destroyed");}return workerId;}function getUrlProp(val){if(val instanceof URL){return val.href;}try{return new URL(val,window.location).href;}catch(ex){if(_is_node.isNodeJS&&typeof val==="string"){return val;}}throw new Error("Invalid PDF url data: "+"either string or URL-object is expected in the url property.");}function getDataProp(val){if(_is_node.isNodeJS&&typeof Buffer!=="undefined"&&val instanceof Buffer){(0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`.");return new Uint8Array(val);}if(val instanceof Uint8Array&&val.byteLength===val.buffer.byteLength){return val;}if(typeof val==="string"){return (0, _util.stringToBytes)(val);}if(typeof val==="object"&&!isNaN(val?.length)||(0, _util.isArrayBuffer)(val)){return new Uint8Array(val);}throw new Error("Invalid PDF binary data: either TypedArray, "+"string, or array-like object is expected in the data property.");}class PDFDocumentLoadingTask{static#docId=0;#onUnsupportedFeature=null;constructor(){this._capability=(0, _util.createPromiseCapability)();this._transport=null;this._worker=null;this.docId=`d${PDFDocumentLoadingTask.#docId++}`;this.destroyed=false;this.onPassword=null;this.onProgress=null;}get onUnsupportedFeature(){return this.#onUnsupportedFeature;}set onUnsupportedFeature(callback){(0, _display_utils.deprecated)("The PDFDocumentLoadingTask onUnsupportedFeature property will be removed in the future.");this.#onUnsupportedFeature=callback;}get promise(){return this._capability.promise;}async destroy(){this.destroyed=true;await this._transport?.destroy();this._transport=null;if(this._worker){this._worker.destroy();this._worker=null;}}}exports.PDFDocumentLoadingTask=PDFDocumentLoadingTask;class PDFDataRangeTransport{constructor(length,initialData,progressiveDone=false,contentDispositionFilename=null){this.length=length;this.initialData=initialData;this.progressiveDone=progressiveDone;this.contentDispositionFilename=contentDispositionFilename;this._rangeListeners=[];this._progressListeners=[];this._progressiveReadListeners=[];this._progressiveDoneListeners=[];this._readyCapability=(0, _util.createPromiseCapability)();}addRangeListener(listener){this._rangeListeners.push(listener);}addProgressListener(listener){this._progressListeners.push(listener);}addProgressiveReadListener(listener){this._progressiveReadListeners.push(listener);}addProgressiveDoneListener(listener){this._progressiveDoneListeners.push(listener);}onDataRange(begin,chunk){for(const listener of this._rangeListeners){listener(begin,chunk);}}onDataProgress(loaded,total){this._readyCapability.promise.then(()=>{for(const listener of this._progressListeners){listener(loaded,total);}});}onDataProgressiveRead(chunk){this._readyCapability.promise.then(()=>{for(const listener of this._progressiveReadListeners){listener(chunk);}});}onDataProgressiveDone(){this._readyCapability.promise.then(()=>{for(const listener of this._progressiveDoneListeners){listener();}});}transportReady(){this._readyCapability.resolve();}requestDataRange(begin,end){(0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");}abort(){}}exports.PDFDataRangeTransport=PDFDataRangeTransport;class PDFDocumentProxy{constructor(pdfInfo,transport){this._pdfInfo=pdfInfo;this._transport=transport;}get annotationStorage(){return this._transport.annotationStorage;}get numPages(){return this._pdfInfo.numPages;}get fingerprints(){return this._pdfInfo.fingerprints;}get isPureXfa(){return (0, _util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa);}get allXfaHtml(){return this._transport._htmlForXfa;}getPage(pageNumber){return this._transport.getPage(pageNumber);}getPageIndex(ref){return this._transport.getPageIndex(ref);}getDestinations(){return this._transport.getDestinations();}getDestination(id){return this._transport.getDestination(id);}getPageLabels(){return this._transport.getPageLabels();}getPageLayout(){return this._transport.getPageLayout();}getPageMode(){return this._transport.getPageMode();}getViewerPreferences(){return this._transport.getViewerPreferences();}getOpenAction(){return this._transport.getOpenAction();}getAttachments(){return this._transport.getAttachments();}getJavaScript(){return this._transport.getJavaScript();}getJSActions(){return this._transport.getDocJSActions();}getOutline(){return this._transport.getOutline();}getOptionalContentConfig(){return this._transport.getOptionalContentConfig();}getPermissions(){return this._transport.getPermissions();}getMetadata(){return this._transport.getMetadata();}getMarkInfo(){return this._transport.getMarkInfo();}getData(){return this._transport.getData();}saveDocument(){return this._transport.saveDocument();}getDownloadInfo(){return this._transport.downloadInfoCapability.promise;}cleanup(keepLoadedFonts=false){return this._transport.startCleanup(keepLoadedFonts||this.isPureXfa);}destroy(){return this.loadingTask.destroy();}get loadingParams(){return this._transport.loadingParams;}get loadingTask(){return this._transport.loadingTask;}getFieldObjects(){return this._transport.getFieldObjects();}hasJSActions(){return this._transport.hasJSActions();}getCalculationOrderIds(){return this._transport.getCalculationOrderIds();}}exports.PDFDocumentProxy=PDFDocumentProxy;class PDFPageProxy{constructor(pageIndex,pageInfo,transport,ownerDocument,pdfBug=false){this._pageIndex=pageIndex;this._pageInfo=pageInfo;this._ownerDocument=ownerDocument;this._transport=transport;this._stats=pdfBug?new _display_utils.StatTimer():null;this._pdfBug=pdfBug;this.commonObjs=transport.commonObjs;this.objs=new PDFObjects();this.cleanupAfterRender=false;this.pendingCleanup=false;this._intentStates=new Map();this.destroyed=false;}get pageNumber(){return this._pageIndex+1;}get rotate(){return this._pageInfo.rotate;}get ref(){return this._pageInfo.ref;}get userUnit(){return this._pageInfo.userUnit;}get view(){return this._pageInfo.view;}getViewport({scale,rotation=this.rotate,offsetX=0,offsetY=0,dontFlip=false}={}){return new _display_utils.PageViewport({viewBox:this.view,scale,rotation,offsetX,offsetY,dontFlip});}getAnnotations({intent="display"}={}){const intentArgs=this._transport.getRenderingIntent(intent);return this._transport.getAnnotations(this._pageIndex,intentArgs.renderingIntent);}getJSActions(){return this._transport.getPageJSActions(this._pageIndex);}get isPureXfa(){return (0, _util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa);}async getXfa(){return this._transport._htmlForXfa?.children[this._pageIndex]||null;}render({canvasContext,viewport,intent="display",annotationMode=_util.AnnotationMode.ENABLE,transform=null,canvasFactory=null,background=null,optionalContentConfigPromise=null,annotationCanvasMap=null,pageColors=null,printAnnotationStorage=null}){this._stats?.time("Overall");const intentArgs=this._transport.getRenderingIntent(intent,annotationMode,printAnnotationStorage);this.pendingCleanup=false;if(!optionalContentConfigPromise){optionalContentConfigPromise=this._transport.getOptionalContentConfig();}let intentState=this._intentStates.get(intentArgs.cacheKey);if(!intentState){intentState=Object.create(null);this._intentStates.set(intentArgs.cacheKey,intentState);}if(intentState.streamReaderCancelTimeout){clearTimeout(intentState.streamReaderCancelTimeout);intentState.streamReaderCancelTimeout=null;}const canvasFactoryInstance=canvasFactory||new DefaultCanvasFactory({ownerDocument:this._ownerDocument});const intentPrint=!!(intentArgs.renderingIntent&_util.RenderingIntentFlag.PRINT);if(!intentState.displayReadyCapability){intentState.displayReadyCapability=(0, _util.createPromiseCapability)();intentState.operatorList={fnArray:[],argsArray:[],lastChunk:false,separateAnnots:null};this._stats?.time("Page Request");this._pumpOperatorList(intentArgs);}const complete=error=>{intentState.renderTasks.delete(internalRenderTask);if(this.cleanupAfterRender||intentPrint){this.pendingCleanup=true;}this._tryCleanup();if(error){internalRenderTask.capability.reject(error);this._abortOperatorList({intentState,reason:error instanceof Error?error:new Error(error)});}else {internalRenderTask.capability.resolve();}this._stats?.timeEnd("Rendering");this._stats?.timeEnd("Overall");};const internalRenderTask=new InternalRenderTask({callback:complete,params:{canvasContext,viewport,transform,background},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap,operatorList:intentState.operatorList,pageIndex:this._pageIndex,canvasFactory:canvasFactoryInstance,useRequestAnimationFrame:!intentPrint,pdfBug:this._pdfBug,pageColors});(intentState.renderTasks||=new Set()).add(internalRenderTask);const renderTask=internalRenderTask.task;Promise.all([intentState.displayReadyCapability.promise,optionalContentConfigPromise]).then(([transparency,optionalContentConfig])=>{if(this.pendingCleanup){complete();return;}this._stats?.time("Rendering");internalRenderTask.initializeGraphics({transparency,optionalContentConfig});internalRenderTask.operatorListChanged();}).catch(complete);return renderTask;}getOperatorList({intent="display",annotationMode=_util.AnnotationMode.ENABLE,printAnnotationStorage=null}={}){function operatorListChanged(){if(intentState.operatorList.lastChunk){intentState.opListReadCapability.resolve(intentState.operatorList);intentState.renderTasks.delete(opListTask);}}const intentArgs=this._transport.getRenderingIntent(intent,annotationMode,printAnnotationStorage,true);let intentState=this._intentStates.get(intentArgs.cacheKey);if(!intentState){intentState=Object.create(null);this._intentStates.set(intentArgs.cacheKey,intentState);}let opListTask;if(!intentState.opListReadCapability){opListTask=Object.create(null);opListTask.operatorListChanged=operatorListChanged;intentState.opListReadCapability=(0, _util.createPromiseCapability)();(intentState.renderTasks||=new Set()).add(opListTask);intentState.operatorList={fnArray:[],argsArray:[],lastChunk:false,separateAnnots:null};this._stats?.time("Page Request");this._pumpOperatorList(intentArgs);}return intentState.opListReadCapability.promise;}streamTextContent({disableCombineTextItems=false,includeMarkedContent=false}={}){const TEXT_CONTENT_CHUNK_SIZE=100;return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,combineTextItems:disableCombineTextItems!==true,includeMarkedContent:includeMarkedContent===true},{highWaterMark:TEXT_CONTENT_CHUNK_SIZE,size(textContent){return textContent.items.length;}});}getTextContent(params={}){if(this._transport._htmlForXfa){return this.getXfa().then(xfa=>{return _xfa_text.XfaText.textContent(xfa);});}const readableStream=this.streamTextContent(params);return new Promise(function(resolve,reject){function pump(){reader.read().then(function({value,done}){if(done){resolve(textContent);return;}Object.assign(textContent.styles,value.styles);textContent.items.push(...value.items);pump();},reject);}const reader=readableStream.getReader();const textContent={items:[],styles:Object.create(null)};pump();});}getStructTree(){return this._transport.getStructTree(this._pageIndex);}_destroy(){this.destroyed=true;const waitOn=[];for(const intentState of this._intentStates.values()){this._abortOperatorList({intentState,reason:new Error("Page was destroyed."),force:true});if(intentState.opListReadCapability){continue;}for(const internalRenderTask of intentState.renderTasks){waitOn.push(internalRenderTask.completed);internalRenderTask.cancel();}}this.objs.clear();this.pendingCleanup=false;return Promise.all(waitOn);}cleanup(resetStats=false){this.pendingCleanup=true;return this._tryCleanup(resetStats);}_tryCleanup(resetStats=false){if(!this.pendingCleanup){return false;}for(const{renderTasks,operatorList}of this._intentStates.values()){if(renderTasks.size>0||!operatorList.lastChunk){return false;}}this._intentStates.clear();this.objs.clear();if(resetStats&&this._stats){this._stats=new _display_utils.StatTimer();}this.pendingCleanup=false;return true;}_startRenderPage(transparency,cacheKey){const intentState=this._intentStates.get(cacheKey);if(!intentState){return;}this._stats?.timeEnd("Page Request");intentState.displayReadyCapability?.resolve(transparency);}_renderPageChunk(operatorListChunk,intentState){for(let i=0,ii=operatorListChunk.length;i<ii;i++){intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);}intentState.operatorList.lastChunk=operatorListChunk.lastChunk;intentState.operatorList.separateAnnots=operatorListChunk.separateAnnots;for(const internalRenderTask of intentState.renderTasks){internalRenderTask.operatorListChanged();}if(operatorListChunk.lastChunk){this._tryCleanup();}}_pumpOperatorList({renderingIntent,cacheKey,annotationStorageMap}){const readableStream=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:renderingIntent,cacheKey,annotationStorage:annotationStorageMap});const reader=readableStream.getReader();const intentState=this._intentStates.get(cacheKey);intentState.streamReader=reader;const pump=()=>{reader.read().then(({value,done})=>{if(done){intentState.streamReader=null;return;}if(this._transport.destroyed){return;}this._renderPageChunk(value,intentState);pump();},reason=>{intentState.streamReader=null;if(this._transport.destroyed){return;}if(intentState.operatorList){intentState.operatorList.lastChunk=true;for(const internalRenderTask of intentState.renderTasks){internalRenderTask.operatorListChanged();}this._tryCleanup();}if(intentState.displayReadyCapability){intentState.displayReadyCapability.reject(reason);}else if(intentState.opListReadCapability){intentState.opListReadCapability.reject(reason);}else {throw reason;}});};pump();}_abortOperatorList({intentState,reason,force=false}){if(!intentState.streamReader){return;}if(intentState.streamReaderCancelTimeout){clearTimeout(intentState.streamReaderCancelTimeout);intentState.streamReaderCancelTimeout=null;}if(!force){if(intentState.renderTasks.size>0){return;}if(reason instanceof _display_utils.RenderingCancelledException){let delay=RENDERING_CANCELLED_TIMEOUT;if(reason.extraDelay>0&&reason.extraDelay<1000){delay+=reason.extraDelay;}intentState.streamReaderCancelTimeout=setTimeout(()=>{intentState.streamReaderCancelTimeout=null;this._abortOperatorList({intentState,reason,force:true});},delay);return;}}intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(()=>{});intentState.streamReader=null;if(this._transport.destroyed){return;}for(const[curCacheKey,curIntentState]of this._intentStates){if(curIntentState===intentState){this._intentStates.delete(curCacheKey);break;}}this.cleanup();}get stats(){return this._stats;}}exports.PDFPageProxy=PDFPageProxy;class LoopbackPort{#listeners=new Set();#deferred=Promise.resolve();postMessage(obj,transfers){const event={data:structuredClone(obj,transfers)};this.#deferred.then(()=>{for(const listener of this.#listeners){listener.call(this,event);}});}addEventListener(name,listener){this.#listeners.add(listener);}removeEventListener(name,listener){this.#listeners.delete(listener);}terminate(){this.#listeners.clear();}}exports.LoopbackPort=LoopbackPort;const PDFWorkerUtil={isWorkerDisabled:false,fallbackWorkerSrc:null,fakeWorkerId:0};exports.PDFWorkerUtil=PDFWorkerUtil;{if(_is_node.isNodeJS&&typeof commonjsRequire==="function"){PDFWorkerUtil.isWorkerDisabled=true;PDFWorkerUtil.fallbackWorkerSrc="./pdf.worker.js";}else if(typeof document==="object"){const pdfjsFilePath=document?.currentScript?.src;if(pdfjsFilePath){PDFWorkerUtil.fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2");}}PDFWorkerUtil.isSameOrigin=function(baseUrl,otherUrl){let base;try{base=new URL(baseUrl);if(!base.origin||base.origin==="null"){return false;}}catch(e){return false;}const other=new URL(otherUrl,base);return base.origin===other.origin;};PDFWorkerUtil.createCDNWrapper=function(url){const wrapper=`importScripts("${url}");`;return URL.createObjectURL(new Blob([wrapper]));};}class PDFWorker{static#workerPorts=new WeakMap();constructor({name=null,port=null,verbosity=(0, _util.getVerbosityLevel)()}={}){if(port&&PDFWorker.#workerPorts.has(port)){throw new Error("Cannot use more than one PDFWorker per port.");}this.name=name;this.destroyed=false;this.verbosity=verbosity;this._readyCapability=(0, _util.createPromiseCapability)();this._port=null;this._webWorker=null;this._messageHandler=null;if(port){PDFWorker.#workerPorts.set(port,this);this._initializeFromPort(port);return;}this._initialize();}get promise(){return this._readyCapability.promise;}get port(){return this._port;}get messageHandler(){return this._messageHandler;}_initializeFromPort(port){this._port=port;this._messageHandler=new _message_handler.MessageHandler("main","worker",port);this._messageHandler.on("ready",function(){});this._readyCapability.resolve();this._messageHandler.send("configure",{verbosity:this.verbosity});}_initialize(){if(!PDFWorkerUtil.isWorkerDisabled&&!PDFWorker._mainThreadWorkerMessageHandler){let{workerSrc}=PDFWorker;try{if(!PDFWorkerUtil.isSameOrigin(window.location.href,workerSrc)){workerSrc=PDFWorkerUtil.createCDNWrapper(new URL(workerSrc,window.location).href);}const worker=new Worker(workerSrc);const messageHandler=new _message_handler.MessageHandler("main","worker",worker);const terminateEarly=()=>{worker.removeEventListener("error",onWorkerError);messageHandler.destroy();worker.terminate();if(this.destroyed){this._readyCapability.reject(new Error("Worker was destroyed"));}else {this._setupFakeWorker();}};const onWorkerError=()=>{if(!this._webWorker){terminateEarly();}};worker.addEventListener("error",onWorkerError);messageHandler.on("test",data=>{worker.removeEventListener("error",onWorkerError);if(this.destroyed){terminateEarly();return;}if(data){this._messageHandler=messageHandler;this._port=worker;this._webWorker=worker;this._readyCapability.resolve();messageHandler.send("configure",{verbosity:this.verbosity});}else {this._setupFakeWorker();messageHandler.destroy();worker.terminate();}});messageHandler.on("ready",data=>{worker.removeEventListener("error",onWorkerError);if(this.destroyed){terminateEarly();return;}try{sendTest();}catch(e){this._setupFakeWorker();}});const sendTest=()=>{const testObj=new Uint8Array();messageHandler.send("test",testObj,[testObj.buffer]);};sendTest();return;}catch(e){(0, _util.info)("The worker has been disabled.");}}this._setupFakeWorker();}_setupFakeWorker(){if(!PDFWorkerUtil.isWorkerDisabled){(0, _util.warn)("Setting up fake worker.");PDFWorkerUtil.isWorkerDisabled=true;}PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler=>{if(this.destroyed){this._readyCapability.reject(new Error("Worker was destroyed"));return;}const port=new LoopbackPort();this._port=port;const id=`fake${PDFWorkerUtil.fakeWorkerId++}`;const workerHandler=new _message_handler.MessageHandler(id+"_worker",id,port);WorkerMessageHandler.setup(workerHandler,port);const messageHandler=new _message_handler.MessageHandler(id,id+"_worker",port);this._messageHandler=messageHandler;this._readyCapability.resolve();messageHandler.send("configure",{verbosity:this.verbosity});}).catch(reason=>{this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));});}destroy(){this.destroyed=true;if(this._webWorker){this._webWorker.terminate();this._webWorker=null;}PDFWorker.#workerPorts.delete(this._port);this._port=null;if(this._messageHandler){this._messageHandler.destroy();this._messageHandler=null;}}static fromPort(params){if(!params?.port){throw new Error("PDFWorker.fromPort - invalid method signature.");}if(this.#workerPorts.has(params.port)){return this.#workerPorts.get(params.port);}return new PDFWorker(params);}static get workerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc){return _worker_options.GlobalWorkerOptions.workerSrc;}if(PDFWorkerUtil.fallbackWorkerSrc!==null){if(!_is_node.isNodeJS){(0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');}return PDFWorkerUtil.fallbackWorkerSrc;}throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');}static get _mainThreadWorkerMessageHandler(){try{return globalThis.pdfjsWorker?.WorkerMessageHandler||null;}catch(ex){return null;}}static get _setupFakeWorkerGlobal(){const loader=async()=>{const mainWorkerMessageHandler=this._mainThreadWorkerMessageHandler;if(mainWorkerMessageHandler){return mainWorkerMessageHandler;}if(_is_node.isNodeJS&&typeof commonjsRequire==="function"){const worker=eval("require")(this.workerSrc);return worker.WorkerMessageHandler;}await(0, _display_utils.loadScript)(this.workerSrc);return window.pdfjsWorker.WorkerMessageHandler;};return (0, _util.shadow)(this,"_setupFakeWorkerGlobal",loader());}}exports.PDFWorker=PDFWorker;class WorkerTransport{#methodPromises=new Map();#pageCache=new Map();#pagePromises=new Map();constructor(messageHandler,loadingTask,networkStream,params,factory){this.messageHandler=messageHandler;this.loadingTask=loadingTask;this.commonObjs=new PDFObjects();this.fontLoader=new _font_loader.FontLoader({onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:params.ownerDocument,styleElement:params.styleElement});this._params=params;this.cMapReaderFactory=factory?.cMapReaderFactory;this.standardFontDataFactory=factory?.standardFontDataFactory;this.destroyed=false;this.destroyCapability=null;this._passwordCapability=null;this._networkStream=networkStream;this._fullReader=null;this._lastProgress=null;this.downloadInfoCapability=(0, _util.createPromiseCapability)();this.setupMessageHandler();}#cacheSimpleMethod(name,data=null){const cachedPromise=this.#methodPromises.get(name);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise(name,data);this.#methodPromises.set(name,promise);return promise;}get annotationStorage(){return (0, _util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage());}getRenderingIntent(intent,annotationMode=_util.AnnotationMode.ENABLE,printAnnotationStorage=null,isOpList=false){let renderingIntent=_util.RenderingIntentFlag.DISPLAY;let annotationMap=null;switch(intent){case"any":renderingIntent=_util.RenderingIntentFlag.ANY;break;case"display":break;case"print":renderingIntent=_util.RenderingIntentFlag.PRINT;break;default:(0, _util.warn)(`getRenderingIntent - invalid intent: ${intent}`);}switch(annotationMode){case _util.AnnotationMode.DISABLE:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_DISABLE;break;case _util.AnnotationMode.ENABLE:break;case _util.AnnotationMode.ENABLE_FORMS:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_FORMS;break;case _util.AnnotationMode.ENABLE_STORAGE:renderingIntent+=_util.RenderingIntentFlag.ANNOTATIONS_STORAGE;const annotationStorage=renderingIntent&_util.RenderingIntentFlag.PRINT&&printAnnotationStorage instanceof _annotation_storage.PrintAnnotationStorage?printAnnotationStorage:this.annotationStorage;annotationMap=annotationStorage.serializable;break;default:(0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);}if(isOpList){renderingIntent+=_util.RenderingIntentFlag.OPLIST;}return {renderingIntent,cacheKey:`${renderingIntent}_${_annotation_storage.AnnotationStorage.getHash(annotationMap)}`,annotationStorageMap:annotationMap};}destroy(){if(this.destroyCapability){return this.destroyCapability.promise;}this.destroyed=true;this.destroyCapability=(0, _util.createPromiseCapability)();if(this._passwordCapability){this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));}const waitOn=[];for(const page of this.#pageCache.values()){waitOn.push(page._destroy());}this.#pageCache.clear();this.#pagePromises.clear();if(this.hasOwnProperty("annotationStorage")){this.annotationStorage.resetModified();}const terminated=this.messageHandler.sendWithPromise("Terminate",null);waitOn.push(terminated);Promise.all(waitOn).then(()=>{this.commonObjs.clear();this.fontLoader.clear();this.#methodPromises.clear();if(this._networkStream){this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));}if(this.messageHandler){this.messageHandler.destroy();this.messageHandler=null;}this.destroyCapability.resolve();},this.destroyCapability.reject);return this.destroyCapability.promise;}setupMessageHandler(){const{messageHandler,loadingTask}=this;messageHandler.on("GetReader",(data,sink)=>{(0, _util.assert)(this._networkStream,"GetReader - no `IPDFStream` instance available.");this._fullReader=this._networkStream.getFullReader();this._fullReader.onProgress=evt=>{this._lastProgress={loaded:evt.loaded,total:evt.total};};sink.onPull=()=>{this._fullReader.read().then(function({value,done}){if(done){sink.close();return;}(0, _util.assert)(value instanceof ArrayBuffer,"GetReader - expected an ArrayBuffer.");sink.enqueue(new Uint8Array(value),1,[value]);}).catch(reason=>{sink.error(reason);});};sink.onCancel=reason=>{this._fullReader.cancel(reason);sink.ready.catch(readyReason=>{if(this.destroyed){return;}throw readyReason;});};});messageHandler.on("ReaderHeadersReady",data=>{const headersCapability=(0, _util.createPromiseCapability)();const fullReader=this._fullReader;fullReader.headersReady.then(()=>{if(!fullReader.isStreamingSupported||!fullReader.isRangeSupported){if(this._lastProgress){loadingTask.onProgress?.(this._lastProgress);}fullReader.onProgress=evt=>{loadingTask.onProgress?.({loaded:evt.loaded,total:evt.total});};}headersCapability.resolve({isStreamingSupported:fullReader.isStreamingSupported,isRangeSupported:fullReader.isRangeSupported,contentLength:fullReader.contentLength});},headersCapability.reject);return headersCapability.promise;});messageHandler.on("GetRangeReader",(data,sink)=>{(0, _util.assert)(this._networkStream,"GetRangeReader - no `IPDFStream` instance available.");const rangeReader=this._networkStream.getRangeReader(data.begin,data.end);if(!rangeReader){sink.close();return;}sink.onPull=()=>{rangeReader.read().then(function({value,done}){if(done){sink.close();return;}(0, _util.assert)(value instanceof ArrayBuffer,"GetRangeReader - expected an ArrayBuffer.");sink.enqueue(new Uint8Array(value),1,[value]);}).catch(reason=>{sink.error(reason);});};sink.onCancel=reason=>{rangeReader.cancel(reason);sink.ready.catch(readyReason=>{if(this.destroyed){return;}throw readyReason;});};});messageHandler.on("GetDoc",({pdfInfo})=>{this._numPages=pdfInfo.numPages;this._htmlForXfa=pdfInfo.htmlForXfa;delete pdfInfo.htmlForXfa;loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo,this));});messageHandler.on("DocException",function(ex){let reason;switch(ex.name){case"PasswordException":reason=new _util.PasswordException(ex.message,ex.code);break;case"InvalidPDFException":reason=new _util.InvalidPDFException(ex.message);break;case"MissingPDFException":reason=new _util.MissingPDFException(ex.message);break;case"UnexpectedResponseException":reason=new _util.UnexpectedResponseException(ex.message,ex.status);break;case"UnknownErrorException":reason=new _util.UnknownErrorException(ex.message,ex.details);break;default:(0, _util.unreachable)("DocException - expected a valid Error.");}loadingTask._capability.reject(reason);});messageHandler.on("PasswordRequest",exception=>{this._passwordCapability=(0, _util.createPromiseCapability)();if(loadingTask.onPassword){const updatePassword=password=>{if(password instanceof Error){this._passwordCapability.reject(password);}else {this._passwordCapability.resolve({password});}};try{loadingTask.onPassword(updatePassword,exception.code);}catch(ex){this._passwordCapability.reject(ex);}}else {this._passwordCapability.reject(new _util.PasswordException(exception.message,exception.code));}return this._passwordCapability.promise;});messageHandler.on("DataLoaded",data=>{loadingTask.onProgress?.({loaded:data.length,total:data.length});this.downloadInfoCapability.resolve(data);});messageHandler.on("StartRenderPage",data=>{if(this.destroyed){return;}const page=this.#pageCache.get(data.pageIndex);page._startRenderPage(data.transparency,data.cacheKey);});messageHandler.on("commonobj",([id,type,exportedData])=>{if(this.destroyed){return;}if(this.commonObjs.has(id)){return;}switch(type){case"Font":const params=this._params;if("error"in exportedData){const exportedError=exportedData.error;(0, _util.warn)(`Error during font loading: ${exportedError}`);this.commonObjs.resolve(id,exportedError);break;}let fontRegistry=null;if(params.pdfBug&&globalThis.FontInspector?.enabled){fontRegistry={registerFont(font,url){globalThis.FontInspector.fontAdded(font,url);}};}const font=new _font_loader.FontFaceObject(exportedData,{isEvalSupported:params.isEvalSupported,disableFontFace:params.disableFontFace,ignoreErrors:params.ignoreErrors,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),fontRegistry});this.fontLoader.bind(font).catch(reason=>{return messageHandler.sendWithPromise("FontFallback",{id});}).finally(()=>{if(!params.fontExtraProperties&&font.data){font.data=null;}this.commonObjs.resolve(id,font);});break;case"FontPath":case"Image":this.commonObjs.resolve(id,exportedData);break;default:throw new Error(`Got unknown common object type ${type}`);}});messageHandler.on("obj",([id,pageIndex,type,imageData])=>{if(this.destroyed){return;}const pageProxy=this.#pageCache.get(pageIndex);if(pageProxy.objs.has(id)){return;}switch(type){case"Image":pageProxy.objs.resolve(id,imageData);const MAX_IMAGE_SIZE_TO_STORE=8000000;if(imageData){let length;if(imageData.bitmap){const{width,height}=imageData;length=width*height*4;}else {length=imageData.data?.length||0;}if(length>MAX_IMAGE_SIZE_TO_STORE){pageProxy.cleanupAfterRender=true;}}break;case"Pattern":pageProxy.objs.resolve(id,imageData);break;default:throw new Error(`Got unknown object type ${type}`);}});messageHandler.on("DocProgress",data=>{if(this.destroyed){return;}loadingTask.onProgress?.({loaded:data.loaded,total:data.total});});messageHandler.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this));messageHandler.on("FetchBuiltInCMap",data=>{if(this.destroyed){return Promise.reject(new Error("Worker was destroyed."));}if(!this.cMapReaderFactory){return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));}return this.cMapReaderFactory.fetch(data);});messageHandler.on("FetchStandardFontData",data=>{if(this.destroyed){return Promise.reject(new Error("Worker was destroyed."));}if(!this.standardFontDataFactory){return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));}return this.standardFontDataFactory.fetch(data);});}_onUnsupportedFeature({featureId}){if(this.destroyed){return;}this.loadingTask.onUnsupportedFeature?.(featureId);}getData(){return this.messageHandler.sendWithPromise("GetData",null);}saveDocument(){if(this.annotationStorage.size<=0){(0, _util.warn)("saveDocument called while `annotationStorage` is empty, "+"please use the getData-method instead.");}return this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:this.annotationStorage.serializable,filename:this._fullReader?.filename??null}).finally(()=>{this.annotationStorage.resetModified();});}getPage(pageNumber){if(!Number.isInteger(pageNumber)||pageNumber<=0||pageNumber>this._numPages){return Promise.reject(new Error("Invalid page request."));}const pageIndex=pageNumber-1,cachedPromise=this.#pagePromises.get(pageIndex);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise("GetPage",{pageIndex}).then(pageInfo=>{if(this.destroyed){throw new Error("Transport destroyed");}const page=new PDFPageProxy(pageIndex,pageInfo,this,this._params.ownerDocument,this._params.pdfBug);this.#pageCache.set(pageIndex,page);return page;});this.#pagePromises.set(pageIndex,promise);return promise;}getPageIndex(ref){if(typeof ref!=="object"||ref===null||!Number.isInteger(ref.num)||ref.num<0||!Number.isInteger(ref.gen)||ref.gen<0){return Promise.reject(new Error("Invalid pageIndex request."));}return this.messageHandler.sendWithPromise("GetPageIndex",{num:ref.num,gen:ref.gen});}getAnnotations(pageIndex,intent){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex,intent});}getFieldObjects(){return this.#cacheSimpleMethod("GetFieldObjects");}hasJSActions(){return this.#cacheSimpleMethod("HasJSActions");}getCalculationOrderIds(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null);}getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null);}getDestination(id){if(typeof id!=="string"){return Promise.reject(new Error("Invalid destination request."));}return this.messageHandler.sendWithPromise("GetDestination",{id});}getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null);}getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null);}getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null);}getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null);}getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null);}getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null);}getJavaScript(){return this.messageHandler.sendWithPromise("GetJavaScript",null);}getDocJSActions(){return this.messageHandler.sendWithPromise("GetDocJSActions",null);}getPageJSActions(pageIndex){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex});}getStructTree(pageIndex){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex});}getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null);}getOptionalContentConfig(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then(results=>{return new _optional_content_config.OptionalContentConfig(results);});}getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null);}getMetadata(){const name="GetMetadata",cachedPromise=this.#methodPromises.get(name);if(cachedPromise){return cachedPromise;}const promise=this.messageHandler.sendWithPromise(name,null).then(results=>{return {info:results[0],metadata:results[1]?new _metadata.Metadata(results[1]):null,contentDispositionFilename:this._fullReader?.filename??null,contentLength:this._fullReader?.contentLength??null};});this.#methodPromises.set(name,promise);return promise;}getMarkInfo(){return this.messageHandler.sendWithPromise("GetMarkInfo",null);}async startCleanup(keepLoadedFonts=false){if(this.destroyed){return;}await this.messageHandler.sendWithPromise("Cleanup",null);for(const page of this.#pageCache.values()){const cleanupSuccessful=page.cleanup();if(!cleanupSuccessful){throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);}}this.commonObjs.clear();if(!keepLoadedFonts){this.fontLoader.clear();}this.#methodPromises.clear();}get loadingParams(){const{disableAutoFetch,enableXfa}=this._params;return (0, _util.shadow)(this,"loadingParams",{disableAutoFetch,enableXfa});}}class PDFObjects{#objs=Object.create(null);#ensureObj(objId){const obj=this.#objs[objId];if(obj){return obj;}return this.#objs[objId]={capability:(0, _util.createPromiseCapability)(),data:null};}get(objId,callback=null){if(callback){const obj=this.#ensureObj(objId);obj.capability.promise.then(()=>callback(obj.data));return null;}const obj=this.#objs[objId];if(!obj?.capability.settled){throw new Error(`Requesting object that isn't resolved yet ${objId}.`);}return obj.data;}has(objId){const obj=this.#objs[objId];return obj?.capability.settled||false;}resolve(objId,data=null){const obj=this.#ensureObj(objId);obj.data=data;obj.capability.resolve();}clear(){for(const objId in this.#objs){const{data}=this.#objs[objId];data?.bitmap?.close();}this.#objs=Object.create(null);}}class RenderTask{#internalRenderTask=null;constructor(internalRenderTask){this.#internalRenderTask=internalRenderTask;this.onContinue=null;}get promise(){return this.#internalRenderTask.capability.promise;}cancel(extraDelay=0){this.#internalRenderTask.cancel(null,extraDelay);}get separateAnnots(){const{separateAnnots}=this.#internalRenderTask.operatorList;if(!separateAnnots){return false;}const{annotationCanvasMap}=this.#internalRenderTask;return separateAnnots.form||separateAnnots.canvas&&annotationCanvasMap?.size>0;}}exports.RenderTask=RenderTask;class InternalRenderTask{static#canvasInUse=new WeakSet();constructor({callback,params,objs,commonObjs,annotationCanvasMap,operatorList,pageIndex,canvasFactory,useRequestAnimationFrame=false,pdfBug=false,pageColors=null}){this.callback=callback;this.params=params;this.objs=objs;this.commonObjs=commonObjs;this.annotationCanvasMap=annotationCanvasMap;this.operatorListIdx=null;this.operatorList=operatorList;this._pageIndex=pageIndex;this.canvasFactory=canvasFactory;this._pdfBug=pdfBug;this.pageColors=pageColors;this.running=false;this.graphicsReadyCallback=null;this.graphicsReady=false;this._useRequestAnimationFrame=useRequestAnimationFrame===true&&typeof window!=="undefined";this.cancelled=false;this.capability=(0, _util.createPromiseCapability)();this.task=new RenderTask(this);this._cancelBound=this.cancel.bind(this);this._continueBound=this._continue.bind(this);this._scheduleNextBound=this._scheduleNext.bind(this);this._nextBound=this._next.bind(this);this._canvas=params.canvasContext.canvas;}get completed(){return this.capability.promise.catch(function(){});}initializeGraphics({transparency=false,optionalContentConfig}){if(this.cancelled){return;}if(this._canvas){if(InternalRenderTask.#canvasInUse.has(this._canvas)){throw new Error("Cannot use the same canvas during multiple render() operations. "+"Use different canvas or ensure previous operations were "+"cancelled or completed.");}InternalRenderTask.#canvasInUse.add(this._canvas);}if(this._pdfBug&&globalThis.StepperManager?.enabled){this.stepper=globalThis.StepperManager.create(this._pageIndex);this.stepper.init(this.operatorList);this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint();}const{canvasContext,viewport,transform,background}=this.params;this.gfx=new _canvas.CanvasGraphics(canvasContext,this.commonObjs,this.objs,this.canvasFactory,{optionalContentConfig},this.annotationCanvasMap,this.pageColors);this.gfx.beginDrawing({transform,viewport,transparency,background});this.operatorListIdx=0;this.graphicsReady=true;this.graphicsReadyCallback?.();}cancel(error=null,extraDelay=0){this.running=false;this.cancelled=true;this.gfx?.endDrawing();if(this._canvas){InternalRenderTask.#canvasInUse.delete(this._canvas);}this.callback(error||new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex+1}`,"canvas",extraDelay));}operatorListChanged(){if(!this.graphicsReady){if(!this.graphicsReadyCallback){this.graphicsReadyCallback=this._continueBound;}return;}this.stepper?.updateOperatorList(this.operatorList);if(this.running){return;}this._continue();}_continue(){this.running=true;if(this.cancelled){return;}if(this.task.onContinue){this.task.onContinue(this._scheduleNextBound);}else {this._scheduleNext();}}_scheduleNext(){if(this._useRequestAnimationFrame){window.requestAnimationFrame(()=>{this._nextBound().catch(this._cancelBound);});}else {Promise.resolve().then(this._nextBound).catch(this._cancelBound);}}async _next(){if(this.cancelled){return;}this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper);if(this.operatorListIdx===this.operatorList.argsArray.length){this.running=false;if(this.operatorList.lastChunk){this.gfx.endDrawing();if(this._canvas){InternalRenderTask.#canvasInUse.delete(this._canvas);}this.callback();}}}}const version='3.4.120';exports.version=version;const build='af6414988';exports.build=build;/***/},/* 3 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PrintAnnotationStorage=exports.AnnotationStorage=void 0;var _util=__w_pdfjs_require__(1);var _editor=__w_pdfjs_require__(4);var _murmurhash=__w_pdfjs_require__(8);class AnnotationStorage{#modified=false;#storage=new Map();constructor(){this.onSetModified=null;this.onResetModified=null;this.onAnnotationEditor=null;}getValue(key,defaultValue){const value=this.#storage.get(key);if(value===undefined){return defaultValue;}return Object.assign(defaultValue,value);}getRawValue(key){return this.#storage.get(key);}remove(key){this.#storage.delete(key);if(this.#storage.size===0){this.resetModified();}if(typeof this.onAnnotationEditor==="function"){for(const value of this.#storage.values()){if(value instanceof _editor.AnnotationEditor){return;}}this.onAnnotationEditor(null);}}setValue(key,value){const obj=this.#storage.get(key);let modified=false;if(obj!==undefined){for(const[entry,val]of Object.entries(value)){if(obj[entry]!==val){modified=true;obj[entry]=val;}}}else {modified=true;this.#storage.set(key,value);}if(modified){this.#setModified();}if(value instanceof _editor.AnnotationEditor&&typeof this.onAnnotationEditor==="function"){this.onAnnotationEditor(value.constructor._type);}}has(key){return this.#storage.has(key);}getAll(){return this.#storage.size>0?(0, _util.objectFromMap)(this.#storage):null;}setAll(obj){for(const[key,val]of Object.entries(obj)){this.setValue(key,val);}}get size(){return this.#storage.size;}#setModified(){if(!this.#modified){this.#modified=true;if(typeof this.onSetModified==="function"){this.onSetModified();}}}resetModified(){if(this.#modified){this.#modified=false;if(typeof this.onResetModified==="function"){this.onResetModified();}}}get print(){return new PrintAnnotationStorage(this);}get serializable(){if(this.#storage.size===0){return null;}const clone=new Map();for(const[key,val]of this.#storage){const serialized=val instanceof _editor.AnnotationEditor?val.serialize():val;if(serialized){clone.set(key,serialized);}}return clone;}static getHash(map){if(!map){return "";}const hash=new _murmurhash.MurmurHash3_64();for(const[key,val]of map){hash.update(`${key}:${JSON.stringify(val)}`);}return hash.hexdigest();}}exports.AnnotationStorage=AnnotationStorage;class PrintAnnotationStorage extends AnnotationStorage{#serializable=null;constructor(parent){super();this.#serializable=structuredClone(parent.serializable);}get print(){(0, _util.unreachable)("Should not call PrintAnnotationStorage.print");}get serializable(){return this.#serializable;}}exports.PrintAnnotationStorage=PrintAnnotationStorage;/***/},/* 4 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationEditor=void 0;var _tools=__w_pdfjs_require__(5);var _util=__w_pdfjs_require__(1);class AnnotationEditor{#boundFocusin=this.focusin.bind(this);#boundFocusout=this.focusout.bind(this);#hasBeenSelected=false;#isEditing=false;#isInEditMode=false;_uiManager=null;#zIndex=AnnotationEditor._zIndex++;static _colorManager=new _tools.ColorManager();static _zIndex=1;constructor(parameters){if(this.constructor===AnnotationEditor){(0, _util.unreachable)("Cannot initialize AnnotationEditor.");}this.parent=parameters.parent;this.id=parameters.id;this.width=this.height=null;this.pageIndex=parameters.parent.pageIndex;this.name=parameters.name;this.div=null;this._uiManager=parameters.uiManager;const{rotation,rawDims:{pageWidth,pageHeight,pageX,pageY}}=this.parent.viewport;this.rotation=rotation;this.pageDimensions=[pageWidth,pageHeight];this.pageTranslation=[pageX,pageY];const[width,height]=this.parentDimensions;this.x=parameters.x/width;this.y=parameters.y/height;this.isAttachedToDOM=false;}static get _defaultLineColor(){return (0, _util.shadow)(this,"_defaultLineColor",this._colorManager.getHexCode("CanvasText"));}addCommands(params){this._uiManager.addCommands(params);}get currentLayer(){return this._uiManager.currentLayer;}setInBackground(){this.div.style.zIndex=0;}setInForeground(){this.div.style.zIndex=this.#zIndex;}setParent(parent){if(parent!==null){this.pageIndex=parent.pageIndex;this.pageDimensions=parent.pageDimensions;}this.parent=parent;}focusin(event){if(!this.#hasBeenSelected){this.parent.setSelected(this);}else {this.#hasBeenSelected=false;}}focusout(event){if(!this.isAttachedToDOM){return;}const target=event.relatedTarget;if(target?.closest(`#${this.id}`)){return;}event.preventDefault();if(!this.parent?.isMultipleSelection){this.commitOrRemove();}}commitOrRemove(){if(this.isEmpty()){this.remove();}else {this.commit();}}commit(){this.addToAnnotationStorage();}addToAnnotationStorage(){this._uiManager.addToAnnotationStorage(this);}dragstart(event){const rect=this.parent.div.getBoundingClientRect();this.startX=event.clientX-rect.x;this.startY=event.clientY-rect.y;event.dataTransfer.setData("text/plain",this.id);event.dataTransfer.effectAllowed="move";}setAt(x,y,tx,ty){const[width,height]=this.parentDimensions;[tx,ty]=this.screenToPageTranslation(tx,ty);this.x=(x+tx)/width;this.y=(y+ty)/height;this.div.style.left=`${100*this.x}%`;this.div.style.top=`${100*this.y}%`;}translate(x,y){const[width,height]=this.parentDimensions;[x,y]=this.screenToPageTranslation(x,y);this.x+=x/width;this.y+=y/height;this.div.style.left=`${100*this.x}%`;this.div.style.top=`${100*this.y}%`;}screenToPageTranslation(x,y){switch(this.parentRotation){case 90:return [y,-x];case 180:return [-x,-y];case 270:return [-y,x];default:return [x,y];}}get parentScale(){return this._uiManager.viewParameters.realScale;}get parentRotation(){return this._uiManager.viewParameters.rotation;}get parentDimensions(){const{realScale}=this._uiManager.viewParameters;const[pageWidth,pageHeight]=this.pageDimensions;return [pageWidth*realScale,pageHeight*realScale];}setDims(width,height){const[parentWidth,parentHeight]=this.parentDimensions;this.div.style.width=`${100*width/parentWidth}%`;this.div.style.height=`${100*height/parentHeight}%`;}fixDims(){const{style}=this.div;const{height,width}=style;const widthPercent=width.endsWith("%");const heightPercent=height.endsWith("%");if(widthPercent&&heightPercent){return;}const[parentWidth,parentHeight]=this.parentDimensions;if(!widthPercent){style.width=`${100*parseFloat(width)/parentWidth}%`;}if(!heightPercent){style.height=`${100*parseFloat(height)/parentHeight}%`;}}getInitialTranslation(){return [0,0];}render(){this.div=document.createElement("div");this.div.setAttribute("data-editor-rotation",(360-this.rotation)%360);this.div.className=this.name;this.div.setAttribute("id",this.id);this.div.setAttribute("tabIndex",0);this.setInForeground();this.div.addEventListener("focusin",this.#boundFocusin);this.div.addEventListener("focusout",this.#boundFocusout);const[tx,ty]=this.getInitialTranslation();this.translate(tx,ty);(0, _tools.bindEvents)(this,this.div,["dragstart","pointerdown"]);return this.div;}pointerdown(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){event.preventDefault();return;}if(event.ctrlKey&&!isMac||event.shiftKey||event.metaKey&&isMac){this.parent.toggleSelected(this);}else {this.parent.setSelected(this);}this.#hasBeenSelected=true;}getRect(tx,ty){const scale=this.parentScale;const[pageWidth,pageHeight]=this.pageDimensions;const[pageX,pageY]=this.pageTranslation;const shiftX=tx/scale;const shiftY=ty/scale;const x=this.x*pageWidth;const y=this.y*pageHeight;const width=this.width*pageWidth;const height=this.height*pageHeight;switch(this.rotation){case 0:return [x+shiftX+pageX,pageHeight-y-shiftY-height+pageY,x+shiftX+width+pageX,pageHeight-y-shiftY+pageY];case 90:return [x+shiftY+pageX,pageHeight-y+shiftX+pageY,x+shiftY+height+pageX,pageHeight-y+shiftX+width+pageY];case 180:return [x-shiftX-width+pageX,pageHeight-y+shiftY+pageY,x-shiftX+pageX,pageHeight-y+shiftY+height+pageY];case 270:return [x-shiftY-height+pageX,pageHeight-y-shiftX-width+pageY,x-shiftY+pageX,pageHeight-y-shiftX+pageY];default:throw new Error("Invalid rotation");}}getRectInCurrentCoords(rect,pageHeight){const[x1,y1,x2,y2]=rect;const width=x2-x1;const height=y2-y1;switch(this.rotation){case 0:return [x1,pageHeight-y2,width,height];case 90:return [x1,pageHeight-y1,height,width];case 180:return [x2,pageHeight-y1,width,height];case 270:return [x2,pageHeight-y2,height,width];default:throw new Error("Invalid rotation");}}onceAdded(){}isEmpty(){return false;}enableEditMode(){this.#isInEditMode=true;}disableEditMode(){this.#isInEditMode=false;}isInEditMode(){return this.#isInEditMode;}shouldGetKeyboardEvents(){return false;}needsToBeRebuilt(){return this.div&&!this.isAttachedToDOM;}rebuild(){this.div?.addEventListener("focusin",this.#boundFocusin);}serialize(){(0, _util.unreachable)("An editor must be serializable");}static deserialize(data,parent,uiManager){const editor=new this.prototype.constructor({parent,id:parent.getNextId(),uiManager});editor.rotation=data.rotation;const[pageWidth,pageHeight]=editor.pageDimensions;const[x,y,width,height]=editor.getRectInCurrentCoords(data.rect,pageHeight);editor.x=x/pageWidth;editor.y=y/pageHeight;editor.width=width/pageWidth;editor.height=height/pageHeight;return editor;}remove(){this.div.removeEventListener("focusin",this.#boundFocusin);this.div.removeEventListener("focusout",this.#boundFocusout);if(!this.isEmpty()){this.commit();}this.parent.remove(this);}select(){this.div?.classList.add("selectedEditor");}unselect(){this.div?.classList.remove("selectedEditor");}updateParams(type,value){}disableEditing(){}enableEditing(){}get propertiesToUpdate(){return {};}get contentDiv(){return this.div;}get isEditing(){return this.#isEditing;}set isEditing(value){this.#isEditing=value;if(value){this.parent.setSelected(this);this.parent.setActiveEditor(this);}else {this.parent.setActiveEditor(null);}}}exports.AnnotationEditor=AnnotationEditor;/***/},/* 5 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.KeyboardManager=exports.CommandManager=exports.ColorManager=exports.AnnotationEditorUIManager=void 0;exports.bindEvents=bindEvents;exports.opacityToHex=opacityToHex;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);function bindEvents(obj,element,names){for(const name of names){element.addEventListener(name,obj[name].bind(obj));}}function opacityToHex(opacity){return Math.round(Math.min(255,Math.max(1,255*opacity))).toString(16).padStart(2,"0");}class IdManager{#id=0;getId(){return `${_util.AnnotationEditorPrefix}${this.#id++}`;}}class CommandManager{#commands=[];#locked=false;#maxSize;#position=-1;constructor(maxSize=128){this.#maxSize=maxSize;}add({cmd,undo,mustExec,type=NaN,overwriteIfSameType=false,keepUndo=false}){if(mustExec){cmd();}if(this.#locked){return;}const save={cmd,undo,type};if(this.#position===-1){if(this.#commands.length>0){this.#commands.length=0;}this.#position=0;this.#commands.push(save);return;}if(overwriteIfSameType&&this.#commands[this.#position].type===type){if(keepUndo){save.undo=this.#commands[this.#position].undo;}this.#commands[this.#position]=save;return;}const next=this.#position+1;if(next===this.#maxSize){this.#commands.splice(0,1);}else {this.#position=next;if(next<this.#commands.length){this.#commands.splice(next);}}this.#commands.push(save);}undo(){if(this.#position===-1){return;}this.#locked=true;this.#commands[this.#position].undo();this.#locked=false;this.#position-=1;}redo(){if(this.#position<this.#commands.length-1){this.#position+=1;this.#locked=true;this.#commands[this.#position].cmd();this.#locked=false;}}hasSomethingToUndo(){return this.#position!==-1;}hasSomethingToRedo(){return this.#position<this.#commands.length-1;}destroy(){this.#commands=null;}}exports.CommandManager=CommandManager;class KeyboardManager{constructor(callbacks){this.buffer=[];this.callbacks=new Map();this.allKeys=new Set();const{isMac}=_util.FeatureTest.platform;for(const[keys,callback]of callbacks){for(const key of keys){const isMacKey=key.startsWith("mac+");if(isMac&&isMacKey){this.callbacks.set(key.slice(4),callback);this.allKeys.add(key.split("+").at(-1));}else if(!isMac&&!isMacKey){this.callbacks.set(key,callback);this.allKeys.add(key.split("+").at(-1));}}}}#serialize(event){if(event.altKey){this.buffer.push("alt");}if(event.ctrlKey){this.buffer.push("ctrl");}if(event.metaKey){this.buffer.push("meta");}if(event.shiftKey){this.buffer.push("shift");}this.buffer.push(event.key);const str=this.buffer.join("+");this.buffer.length=0;return str;}exec(self,event){if(!this.allKeys.has(event.key)){return;}const callback=this.callbacks.get(this.#serialize(event));if(!callback){return;}callback.bind(self)();event.stopPropagation();event.preventDefault();}}exports.KeyboardManager=KeyboardManager;class ColorManager{static _colorsMapping=new Map([["CanvasText",[0,0,0]],["Canvas",[255,255,255]]]);get _colors(){const colors=new Map([["CanvasText",null],["Canvas",null]]);(0, _display_utils.getColorValues)(colors);return (0, _util.shadow)(this,"_colors",colors);}convert(color){const rgb=(0, _display_utils.getRGB)(color);if(!window.matchMedia("(forced-colors: active)").matches){return rgb;}for(const[name,RGB]of this._colors){if(RGB.every((x,i)=>x===rgb[i])){return ColorManager._colorsMapping.get(name);}}return rgb;}getHexCode(name){const rgb=this._colors.get(name);if(!rgb){return name;}return _util.Util.makeHexColor(...rgb);}}exports.ColorManager=ColorManager;class AnnotationEditorUIManager{#activeEditor=null;#allEditors=new Map();#allLayers=new Map();#annotationStorage=null;#commandManager=new CommandManager();#currentPageIndex=0;#editorTypes=null;#editorsToRescale=new Set();#eventBus=null;#idManager=new IdManager();#isEnabled=false;#mode=_util.AnnotationEditorType.NONE;#selectedEditors=new Set();#boundCopy=this.copy.bind(this);#boundCut=this.cut.bind(this);#boundPaste=this.paste.bind(this);#boundKeydown=this.keydown.bind(this);#boundOnEditingAction=this.onEditingAction.bind(this);#boundOnPageChanging=this.onPageChanging.bind(this);#boundOnScaleChanging=this.onScaleChanging.bind(this);#boundOnRotationChanging=this.onRotationChanging.bind(this);#previousStates={isEditing:false,isEmpty:true,hasSomethingToUndo:false,hasSomethingToRedo:false,hasSelectedEditor:false};#container=null;static _keyboardManager=new KeyboardManager([[["ctrl+a","mac+meta+a"],AnnotationEditorUIManager.prototype.selectAll],[["ctrl+z","mac+meta+z"],AnnotationEditorUIManager.prototype.undo],[["ctrl+y","ctrl+shift+Z","mac+meta+shift+Z"],AnnotationEditorUIManager.prototype.redo],[["Backspace","alt+Backspace","ctrl+Backspace","shift+Backspace","mac+Backspace","mac+alt+Backspace","mac+ctrl+Backspace","Delete","ctrl+Delete","shift+Delete"],AnnotationEditorUIManager.prototype.delete],[["Escape","mac+Escape"],AnnotationEditorUIManager.prototype.unselectAll]]);constructor(container,eventBus,annotationStorage){this.#container=container;this.#eventBus=eventBus;this.#eventBus._on("editingaction",this.#boundOnEditingAction);this.#eventBus._on("pagechanging",this.#boundOnPageChanging);this.#eventBus._on("scalechanging",this.#boundOnScaleChanging);this.#eventBus._on("rotationchanging",this.#boundOnRotationChanging);this.#annotationStorage=annotationStorage;this.viewParameters={realScale:_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS,rotation:0};}destroy(){this.#removeKeyboardManager();this.#eventBus._off("editingaction",this.#boundOnEditingAction);this.#eventBus._off("pagechanging",this.#boundOnPageChanging);this.#eventBus._off("scalechanging",this.#boundOnScaleChanging);this.#eventBus._off("rotationchanging",this.#boundOnRotationChanging);for(const layer of this.#allLayers.values()){layer.destroy();}this.#allLayers.clear();this.#allEditors.clear();this.#editorsToRescale.clear();this.#activeEditor=null;this.#selectedEditors.clear();this.#commandManager.destroy();}onPageChanging({pageNumber}){this.#currentPageIndex=pageNumber-1;}focusMainContainer(){this.#container.focus();}addShouldRescale(editor){this.#editorsToRescale.add(editor);}removeShouldRescale(editor){this.#editorsToRescale.delete(editor);}onScaleChanging({scale}){this.commitOrRemove();this.viewParameters.realScale=scale*_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS;for(const editor of this.#editorsToRescale){editor.onScaleChanging();}}onRotationChanging({pagesRotation}){this.commitOrRemove();this.viewParameters.rotation=pagesRotation;}addToAnnotationStorage(editor){if(!editor.isEmpty()&&this.#annotationStorage&&!this.#annotationStorage.has(editor.id)){this.#annotationStorage.setValue(editor.id,editor);}}#addKeyboardManager(){this.#container.addEventListener("keydown",this.#boundKeydown);}#removeKeyboardManager(){this.#container.removeEventListener("keydown",this.#boundKeydown);}#addCopyPasteListeners(){document.addEventListener("copy",this.#boundCopy);document.addEventListener("cut",this.#boundCut);document.addEventListener("paste",this.#boundPaste);}#removeCopyPasteListeners(){document.removeEventListener("copy",this.#boundCopy);document.removeEventListener("cut",this.#boundCut);document.removeEventListener("paste",this.#boundPaste);}copy(event){event.preventDefault();if(this.#activeEditor){this.#activeEditor.commitOrRemove();}if(!this.hasSelection){return;}const editors=[];for(const editor of this.#selectedEditors){if(!editor.isEmpty()){editors.push(editor.serialize());}}if(editors.length===0){return;}event.clipboardData.setData("application/pdfjs",JSON.stringify(editors));}cut(event){this.copy(event);this.delete();}paste(event){event.preventDefault();let data=event.clipboardData.getData("application/pdfjs");if(!data){return;}try{data=JSON.parse(data);}catch(ex){(0, _util.warn)(`paste: "${ex.message}".`);return;}if(!Array.isArray(data)){return;}this.unselectAll();const layer=this.#allLayers.get(this.#currentPageIndex);try{const newEditors=[];for(const editor of data){const deserializedEditor=layer.deserialize(editor);if(!deserializedEditor){return;}newEditors.push(deserializedEditor);}const cmd=()=>{for(const editor of newEditors){this.#addEditorToLayer(editor);}this.#selectEditors(newEditors);};const undo=()=>{for(const editor of newEditors){editor.remove();}};this.addCommands({cmd,undo,mustExec:true});}catch(ex){(0, _util.warn)(`paste: "${ex.message}".`);}}keydown(event){if(!this.getActive()?.shouldGetKeyboardEvents()){AnnotationEditorUIManager._keyboardManager.exec(this,event);}}onEditingAction(details){if(["undo","redo","delete","selectAll"].includes(details.name)){this[details.name]();}}#dispatchUpdateStates(details){const hasChanged=Object.entries(details).some(([key,value])=>this.#previousStates[key]!==value);if(hasChanged){this.#eventBus.dispatch("annotationeditorstateschanged",{source:this,details:Object.assign(this.#previousStates,details)});}}#dispatchUpdateUI(details){this.#eventBus.dispatch("annotationeditorparamschanged",{source:this,details});}setEditingState(isEditing){if(isEditing){this.#addKeyboardManager();this.#addCopyPasteListeners();this.#dispatchUpdateStates({isEditing:this.#mode!==_util.AnnotationEditorType.NONE,isEmpty:this.#isEmpty(),hasSomethingToUndo:this.#commandManager.hasSomethingToUndo(),hasSomethingToRedo:this.#commandManager.hasSomethingToRedo(),hasSelectedEditor:false});}else {this.#removeKeyboardManager();this.#removeCopyPasteListeners();this.#dispatchUpdateStates({isEditing:false});}}registerEditorTypes(types){if(this.#editorTypes){return;}this.#editorTypes=types;for(const editorType of this.#editorTypes){this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);}}getId(){return this.#idManager.getId();}get currentLayer(){return this.#allLayers.get(this.#currentPageIndex);}get currentPageIndex(){return this.#currentPageIndex;}addLayer(layer){this.#allLayers.set(layer.pageIndex,layer);if(this.#isEnabled){layer.enable();}else {layer.disable();}}removeLayer(layer){this.#allLayers.delete(layer.pageIndex);}updateMode(mode){this.#mode=mode;if(mode===_util.AnnotationEditorType.NONE){this.setEditingState(false);this.#disableAll();}else {this.setEditingState(true);this.#enableAll();for(const layer of this.#allLayers.values()){layer.updateMode(mode);}}}updateToolbar(mode){if(mode===this.#mode){return;}this.#eventBus.dispatch("switchannotationeditormode",{source:this,mode});}updateParams(type,value){if(!this.#editorTypes){return;}for(const editor of this.#selectedEditors){editor.updateParams(type,value);}for(const editorType of this.#editorTypes){editorType.updateDefaultParams(type,value);}}#enableAll(){if(!this.#isEnabled){this.#isEnabled=true;for(const layer of this.#allLayers.values()){layer.enable();}}}#disableAll(){this.unselectAll();if(this.#isEnabled){this.#isEnabled=false;for(const layer of this.#allLayers.values()){layer.disable();}}}getEditors(pageIndex){const editors=[];for(const editor of this.#allEditors.values()){if(editor.pageIndex===pageIndex){editors.push(editor);}}return editors;}getEditor(id){return this.#allEditors.get(id);}addEditor(editor){this.#allEditors.set(editor.id,editor);}removeEditor(editor){this.#allEditors.delete(editor.id);this.unselect(editor);this.#annotationStorage?.remove(editor.id);}#addEditorToLayer(editor){const layer=this.#allLayers.get(editor.pageIndex);if(layer){layer.addOrRebuild(editor);}else {this.addEditor(editor);}}setActiveEditor(editor){if(this.#activeEditor===editor){return;}this.#activeEditor=editor;if(editor){this.#dispatchUpdateUI(editor.propertiesToUpdate);}}toggleSelected(editor){if(this.#selectedEditors.has(editor)){this.#selectedEditors.delete(editor);editor.unselect();this.#dispatchUpdateStates({hasSelectedEditor:this.hasSelection});return;}this.#selectedEditors.add(editor);editor.select();this.#dispatchUpdateUI(editor.propertiesToUpdate);this.#dispatchUpdateStates({hasSelectedEditor:true});}setSelected(editor){for(const ed of this.#selectedEditors){if(ed!==editor){ed.unselect();}}this.#selectedEditors.clear();this.#selectedEditors.add(editor);editor.select();this.#dispatchUpdateUI(editor.propertiesToUpdate);this.#dispatchUpdateStates({hasSelectedEditor:true});}isSelected(editor){return this.#selectedEditors.has(editor);}unselect(editor){editor.unselect();this.#selectedEditors.delete(editor);this.#dispatchUpdateStates({hasSelectedEditor:this.hasSelection});}get hasSelection(){return this.#selectedEditors.size!==0;}undo(){this.#commandManager.undo();this.#dispatchUpdateStates({hasSomethingToUndo:this.#commandManager.hasSomethingToUndo(),hasSomethingToRedo:true,isEmpty:this.#isEmpty()});}redo(){this.#commandManager.redo();this.#dispatchUpdateStates({hasSomethingToUndo:true,hasSomethingToRedo:this.#commandManager.hasSomethingToRedo(),isEmpty:this.#isEmpty()});}addCommands(params){this.#commandManager.add(params);this.#dispatchUpdateStates({hasSomethingToUndo:true,hasSomethingToRedo:false,isEmpty:this.#isEmpty()});}#isEmpty(){if(this.#allEditors.size===0){return true;}if(this.#allEditors.size===1){for(const editor of this.#allEditors.values()){return editor.isEmpty();}}return false;}delete(){this.commitOrRemove();if(!this.hasSelection){return;}const editors=[...this.#selectedEditors];const cmd=()=>{for(const editor of editors){editor.remove();}};const undo=()=>{for(const editor of editors){this.#addEditorToLayer(editor);}};this.addCommands({cmd,undo,mustExec:true});}commitOrRemove(){this.#activeEditor?.commitOrRemove();}#selectEditors(editors){this.#selectedEditors.clear();for(const editor of editors){if(editor.isEmpty()){continue;}this.#selectedEditors.add(editor);editor.select();}this.#dispatchUpdateStates({hasSelectedEditor:true});}selectAll(){for(const editor of this.#selectedEditors){editor.commit();}this.#selectEditors(this.#allEditors.values());}unselectAll(){if(this.#activeEditor){this.#activeEditor.commitOrRemove();return;}if(this.#selectedEditors.size===0){return;}for(const editor of this.#selectedEditors){editor.unselect();}this.#selectedEditors.clear();this.#dispatchUpdateStates({hasSelectedEditor:false});}isActive(editor){return this.#activeEditor===editor;}getActive(){return this.#activeEditor;}getMode(){return this.#mode;}}exports.AnnotationEditorUIManager=AnnotationEditorUIManager;/***/},/* 6 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.StatTimer=exports.RenderingCancelledException=exports.PixelsPerInch=exports.PageViewport=exports.PDFDateString=exports.DOMStandardFontDataFactory=exports.DOMSVGFactory=exports.DOMCanvasFactory=exports.DOMCMapReaderFactory=exports.AnnotationPrefix=void 0;exports.deprecated=deprecated;exports.getColorValues=getColorValues;exports.getCurrentTransform=getCurrentTransform;exports.getCurrentTransformInverse=getCurrentTransformInverse;exports.getFilenameFromUrl=getFilenameFromUrl;exports.getPdfFilenameFromUrl=getPdfFilenameFromUrl;exports.getRGB=getRGB;exports.getXfaPageViewport=getXfaPageViewport;exports.isDataScheme=isDataScheme;exports.isPdfFile=isPdfFile;exports.isValidFetchUrl=isValidFetchUrl;exports.loadScript=loadScript;exports.setLayerDimensions=setLayerDimensions;var _base_factory=__w_pdfjs_require__(7);var _util=__w_pdfjs_require__(1);const SVG_NS="http://www.w3.org/2000/svg";const AnnotationPrefix="pdfjs_internal_id_";exports.AnnotationPrefix=AnnotationPrefix;class PixelsPerInch{static CSS=96.0;static PDF=72.0;static PDF_TO_CSS_UNITS=this.CSS/this.PDF;}exports.PixelsPerInch=PixelsPerInch;class DOMCanvasFactory extends _base_factory.BaseCanvasFactory{constructor({ownerDocument=globalThis.document}={}){super();this._document=ownerDocument;}_createCanvas(width,height){const canvas=this._document.createElement("canvas");canvas.width=width;canvas.height=height;return canvas;}}exports.DOMCanvasFactory=DOMCanvasFactory;async function fetchData(url,asTypedArray=false){if(isValidFetchUrl(url,document.baseURI)){const response=await fetch(url);if(!response.ok){throw new Error(response.statusText);}return asTypedArray?new Uint8Array(await response.arrayBuffer()):(0, _util.stringToBytes)(await response.text());}return new Promise((resolve,reject)=>{const request=new XMLHttpRequest();request.open("GET",url,true);if(asTypedArray){request.responseType="arraybuffer";}request.onreadystatechange=()=>{if(request.readyState!==XMLHttpRequest.DONE){return;}if(request.status===200||request.status===0){let data;if(asTypedArray&&request.response){data=new Uint8Array(request.response);}else if(!asTypedArray&&request.responseText){data=(0, _util.stringToBytes)(request.responseText);}if(data){resolve(data);return;}}reject(new Error(request.statusText));};request.send(null);});}class DOMCMapReaderFactory extends _base_factory.BaseCMapReaderFactory{_fetchData(url,compressionType){return fetchData(url,this.isCompressed).then(data=>{return {cMapData:data,compressionType};});}}exports.DOMCMapReaderFactory=DOMCMapReaderFactory;class DOMStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory{_fetchData(url){return fetchData(url,true);}}exports.DOMStandardFontDataFactory=DOMStandardFontDataFactory;class DOMSVGFactory extends _base_factory.BaseSVGFactory{_createSVG(type){return document.createElementNS(SVG_NS,type);}}exports.DOMSVGFactory=DOMSVGFactory;class PageViewport{constructor({viewBox,scale,rotation,offsetX=0,offsetY=0,dontFlip=false}){this.viewBox=viewBox;this.scale=scale;this.rotation=rotation;this.offsetX=offsetX;this.offsetY=offsetY;const centerX=(viewBox[2]+viewBox[0])/2;const centerY=(viewBox[3]+viewBox[1])/2;let rotateA,rotateB,rotateC,rotateD;rotation%=360;if(rotation<0){rotation+=360;}switch(rotation){case 180:rotateA=-1;rotateB=0;rotateC=0;rotateD=1;break;case 90:rotateA=0;rotateB=1;rotateC=1;rotateD=0;break;case 270:rotateA=0;rotateB=-1;rotateC=-1;rotateD=0;break;case 0:rotateA=1;rotateB=0;rotateC=0;rotateD=-1;break;default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");}if(dontFlip){rotateC=-rotateC;rotateD=-rotateD;}let offsetCanvasX,offsetCanvasY;let width,height;if(rotateA===0){offsetCanvasX=Math.abs(centerY-viewBox[1])*scale+offsetX;offsetCanvasY=Math.abs(centerX-viewBox[0])*scale+offsetY;width=(viewBox[3]-viewBox[1])*scale;height=(viewBox[2]-viewBox[0])*scale;}else {offsetCanvasX=Math.abs(centerX-viewBox[0])*scale+offsetX;offsetCanvasY=Math.abs(centerY-viewBox[1])*scale+offsetY;width=(viewBox[2]-viewBox[0])*scale;height=(viewBox[3]-viewBox[1])*scale;}this.transform=[rotateA*scale,rotateB*scale,rotateC*scale,rotateD*scale,offsetCanvasX-rotateA*scale*centerX-rotateC*scale*centerY,offsetCanvasY-rotateB*scale*centerX-rotateD*scale*centerY];this.width=width;this.height=height;}get rawDims(){const{viewBox}=this;return (0, _util.shadow)(this,"rawDims",{pageWidth:viewBox[2]-viewBox[0],pageHeight:viewBox[3]-viewBox[1],pageX:viewBox[0],pageY:viewBox[1]});}clone({scale=this.scale,rotation=this.rotation,offsetX=this.offsetX,offsetY=this.offsetY,dontFlip=false}={}){return new PageViewport({viewBox:this.viewBox.slice(),scale,rotation,offsetX,offsetY,dontFlip});}convertToViewportPoint(x,y){return _util.Util.applyTransform([x,y],this.transform);}convertToViewportRectangle(rect){const topLeft=_util.Util.applyTransform([rect[0],rect[1]],this.transform);const bottomRight=_util.Util.applyTransform([rect[2],rect[3]],this.transform);return [topLeft[0],topLeft[1],bottomRight[0],bottomRight[1]];}convertToPdfPoint(x,y){return _util.Util.applyInverseTransform([x,y],this.transform);}}exports.PageViewport=PageViewport;class RenderingCancelledException extends _util.BaseException{constructor(msg,type,extraDelay=0){super(msg,"RenderingCancelledException");this.type=type;this.extraDelay=extraDelay;}}exports.RenderingCancelledException=RenderingCancelledException;function isDataScheme(url){const ii=url.length;let i=0;while(i<ii&&url[i].trim()===""){i++;}return url.substring(i,i+5).toLowerCase()==="data:";}function isPdfFile(filename){return typeof filename==="string"&&/\.pdf$/i.test(filename);}function getFilenameFromUrl(url,onlyStripPath=false){if(!onlyStripPath){[url]=url.split(/[#?]/,1);}return url.substring(url.lastIndexOf("/")+1);}function getPdfFilenameFromUrl(url,defaultFilename="document.pdf"){if(typeof url!=="string"){return defaultFilename;}if(isDataScheme(url)){(0, _util.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');return defaultFilename;}const reURI=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;const reFilename=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;const splitURI=reURI.exec(url);let suggestedFilename=reFilename.exec(splitURI[1])||reFilename.exec(splitURI[2])||reFilename.exec(splitURI[3]);if(suggestedFilename){suggestedFilename=suggestedFilename[0];if(suggestedFilename.includes("%")){try{suggestedFilename=reFilename.exec(decodeURIComponent(suggestedFilename))[0];}catch(ex){}}}return suggestedFilename||defaultFilename;}class StatTimer{started=Object.create(null);times=[];time(name){if(name in this.started){(0, _util.warn)(`Timer is already running for ${name}`);}this.started[name]=Date.now();}timeEnd(name){if(!(name in this.started)){(0, _util.warn)(`Timer has not been started for ${name}`);}this.times.push({name,start:this.started[name],end:Date.now()});delete this.started[name];}toString(){const outBuf=[];let longest=0;for(const{name}of this.times){longest=Math.max(name.length,longest);}for(const{name,start,end}of this.times){outBuf.push(`${name.padEnd(longest)} ${end-start}ms\n`);}return outBuf.join("");}}exports.StatTimer=StatTimer;function isValidFetchUrl(url,baseUrl){try{const{protocol}=baseUrl?new URL(url,baseUrl):new URL(url);return protocol==="http:"||protocol==="https:";}catch(ex){return false;}}function loadScript(src,removeScriptElement=false){return new Promise((resolve,reject)=>{const script=document.createElement("script");script.src=src;script.onload=function(evt){if(removeScriptElement){script.remove();}resolve(evt);};script.onerror=function(){reject(new Error(`Cannot load script at: ${script.src}`));};(document.head||document.documentElement).append(script);});}function deprecated(details){console.log("Deprecated API usage: "+details);}let pdfDateStringRegex;class PDFDateString{static toDateObject(input){if(!input||typeof input!=="string"){return null;}if(!pdfDateStringRegex){pdfDateStringRegex=new RegExp("^D:"+"(\\d{4})"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"(\\d{2})?"+"([Z|+|-])?"+"(\\d{2})?"+"'?"+"(\\d{2})?"+"'?");}const matches=pdfDateStringRegex.exec(input);if(!matches){return null;}const year=parseInt(matches[1],10);let month=parseInt(matches[2],10);month=month>=1&&month<=12?month-1:0;let day=parseInt(matches[3],10);day=day>=1&&day<=31?day:1;let hour=parseInt(matches[4],10);hour=hour>=0&&hour<=23?hour:0;let minute=parseInt(matches[5],10);minute=minute>=0&&minute<=59?minute:0;let second=parseInt(matches[6],10);second=second>=0&&second<=59?second:0;const universalTimeRelation=matches[7]||"Z";let offsetHour=parseInt(matches[8],10);offsetHour=offsetHour>=0&&offsetHour<=23?offsetHour:0;let offsetMinute=parseInt(matches[9],10)||0;offsetMinute=offsetMinute>=0&&offsetMinute<=59?offsetMinute:0;if(universalTimeRelation==="-"){hour+=offsetHour;minute+=offsetMinute;}else if(universalTimeRelation==="+"){hour-=offsetHour;minute-=offsetMinute;}return new Date(Date.UTC(year,month,day,hour,minute,second));}}exports.PDFDateString=PDFDateString;function getXfaPageViewport(xfaPage,{scale=1,rotation=0}){const{width,height}=xfaPage.attributes.style;const viewBox=[0,0,parseInt(width),parseInt(height)];return new PageViewport({viewBox,scale,rotation});}function getRGB(color){if(color.startsWith("#")){const colorRGB=parseInt(color.slice(1),16);return [(colorRGB&0xff0000)>>16,(colorRGB&0x00ff00)>>8,colorRGB&0x0000ff];}if(color.startsWith("rgb(")){return color.slice(4,-1).split(",").map(x=>parseInt(x));}if(color.startsWith("rgba(")){return color.slice(5,-1).split(",").map(x=>parseInt(x)).slice(0,3);}(0, _util.warn)(`Not a valid color format: "${color}"`);return [0,0,0];}function getColorValues(colors){const span=document.createElement("span");span.style.visibility="hidden";document.body.append(span);for(const name of colors.keys()){span.style.color=name;const computedColor=window.getComputedStyle(span).color;colors.set(name,getRGB(computedColor));}span.remove();}function getCurrentTransform(ctx){const{a,b,c,d,e,f}=ctx.getTransform();return [a,b,c,d,e,f];}function getCurrentTransformInverse(ctx){const{a,b,c,d,e,f}=ctx.getTransform().invertSelf();return [a,b,c,d,e,f];}function setLayerDimensions(div,viewport,mustFlip=false,mustRotate=true){if(viewport instanceof PageViewport){const{pageWidth,pageHeight}=viewport.rawDims;const{style}=div;const widthStr=`calc(var(--scale-factor) * ${pageWidth}px)`;const heightStr=`calc(var(--scale-factor) * ${pageHeight}px)`;if(!mustFlip||viewport.rotation%180===0){style.width=widthStr;style.height=heightStr;}else {style.width=heightStr;style.height=widthStr;}}if(mustRotate){div.setAttribute("data-main-rotation",viewport.rotation);}}/***/},/* 7 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.BaseStandardFontDataFactory=exports.BaseSVGFactory=exports.BaseCanvasFactory=exports.BaseCMapReaderFactory=void 0;var _util=__w_pdfjs_require__(1);class BaseCanvasFactory{constructor(){if(this.constructor===BaseCanvasFactory){(0, _util.unreachable)("Cannot initialize BaseCanvasFactory.");}}create(width,height){if(width<=0||height<=0){throw new Error("Invalid canvas size");}const canvas=this._createCanvas(width,height);return {canvas,context:canvas.getContext("2d")};}reset(canvasAndContext,width,height){if(!canvasAndContext.canvas){throw new Error("Canvas is not specified");}if(width<=0||height<=0){throw new Error("Invalid canvas size");}canvasAndContext.canvas.width=width;canvasAndContext.canvas.height=height;}destroy(canvasAndContext){if(!canvasAndContext.canvas){throw new Error("Canvas is not specified");}canvasAndContext.canvas.width=0;canvasAndContext.canvas.height=0;canvasAndContext.canvas=null;canvasAndContext.context=null;}_createCanvas(width,height){(0, _util.unreachable)("Abstract method `_createCanvas` called.");}}exports.BaseCanvasFactory=BaseCanvasFactory;class BaseCMapReaderFactory{constructor({baseUrl=null,isCompressed=true}){if(this.constructor===BaseCMapReaderFactory){(0, _util.unreachable)("Cannot initialize BaseCMapReaderFactory.");}this.baseUrl=baseUrl;this.isCompressed=isCompressed;}async fetch({name}){if(!this.baseUrl){throw new Error('The CMap "baseUrl" parameter must be specified, ensure that '+'the "cMapUrl" and "cMapPacked" API parameters are provided.');}if(!name){throw new Error("CMap name must be specified.");}const url=this.baseUrl+name+(this.isCompressed?".bcmap":"");const compressionType=this.isCompressed?_util.CMapCompressionType.BINARY:_util.CMapCompressionType.NONE;return this._fetchData(url,compressionType).catch(reason=>{throw new Error(`Unable to load ${this.isCompressed?"binary ":""}CMap at: ${url}`);});}_fetchData(url,compressionType){(0, _util.unreachable)("Abstract method `_fetchData` called.");}}exports.BaseCMapReaderFactory=BaseCMapReaderFactory;class BaseStandardFontDataFactory{constructor({baseUrl=null}){if(this.constructor===BaseStandardFontDataFactory){(0, _util.unreachable)("Cannot initialize BaseStandardFontDataFactory.");}this.baseUrl=baseUrl;}async fetch({filename}){if(!this.baseUrl){throw new Error('The standard font "baseUrl" parameter must be specified, ensure that '+'the "standardFontDataUrl" API parameter is provided.');}if(!filename){throw new Error("Font filename must be specified.");}const url=`${this.baseUrl}${filename}`;return this._fetchData(url).catch(reason=>{throw new Error(`Unable to load font data at: ${url}`);});}_fetchData(url){(0, _util.unreachable)("Abstract method `_fetchData` called.");}}exports.BaseStandardFontDataFactory=BaseStandardFontDataFactory;class BaseSVGFactory{constructor(){if(this.constructor===BaseSVGFactory){(0, _util.unreachable)("Cannot initialize BaseSVGFactory.");}}create(width,height,skipDimensions=false){if(width<=0||height<=0){throw new Error("Invalid SVG dimensions");}const svg=this._createSVG("svg:svg");svg.setAttribute("version","1.1");if(!skipDimensions){svg.setAttribute("width",`${width}px`);svg.setAttribute("height",`${height}px`);}svg.setAttribute("preserveAspectRatio","none");svg.setAttribute("viewBox",`0 0 ${width} ${height}`);return svg;}createElement(type){if(typeof type!=="string"){throw new Error("Invalid SVG element type");}return this._createSVG(type);}_createSVG(type){(0, _util.unreachable)("Abstract method `_createSVG` called.");}}exports.BaseSVGFactory=BaseSVGFactory;/***/},/* 8 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.MurmurHash3_64=void 0;var _util=__w_pdfjs_require__(1);const SEED=0xc3d2e1f0;const MASK_HIGH=0xffff0000;const MASK_LOW=0xffff;class MurmurHash3_64{constructor(seed){this.h1=seed?seed&0xffffffff:SEED;this.h2=seed?seed&0xffffffff:SEED;}update(input){let data,length;if(typeof input==="string"){data=new Uint8Array(input.length*2);length=0;for(let i=0,ii=input.length;i<ii;i++){const code=input.charCodeAt(i);if(code<=0xff){data[length++]=code;}else {data[length++]=code>>>8;data[length++]=code&0xff;}}}else if((0, _util.isArrayBuffer)(input)){data=input.slice();length=data.byteLength;}else {throw new Error("Wrong data format in MurmurHash3_64_update. "+"Input must be a string or array.");}const blockCounts=length>>2;const tailLength=length-blockCounts*4;const dataUint32=new Uint32Array(data.buffer,0,blockCounts);let k1=0,k2=0;let h1=this.h1,h2=this.h2;const C1=0xcc9e2d51,C2=0x1b873593;const C1_LOW=C1&MASK_LOW,C2_LOW=C2&MASK_LOW;for(let i=0;i<blockCounts;i++){if(i&1){k1=dataUint32[i];k1=k1*C1&MASK_HIGH|k1*C1_LOW&MASK_LOW;k1=k1<<15|k1>>>17;k1=k1*C2&MASK_HIGH|k1*C2_LOW&MASK_LOW;h1^=k1;h1=h1<<13|h1>>>19;h1=h1*5+0xe6546b64;}else {k2=dataUint32[i];k2=k2*C1&MASK_HIGH|k2*C1_LOW&MASK_LOW;k2=k2<<15|k2>>>17;k2=k2*C2&MASK_HIGH|k2*C2_LOW&MASK_LOW;h2^=k2;h2=h2<<13|h2>>>19;h2=h2*5+0xe6546b64;}}k1=0;switch(tailLength){case 3:k1^=data[blockCounts*4+2]<<16;case 2:k1^=data[blockCounts*4+1]<<8;case 1:k1^=data[blockCounts*4];k1=k1*C1&MASK_HIGH|k1*C1_LOW&MASK_LOW;k1=k1<<15|k1>>>17;k1=k1*C2&MASK_HIGH|k1*C2_LOW&MASK_LOW;if(blockCounts&1){h1^=k1;}else {h2^=k1;}}this.h1=h1;this.h2=h2;}hexdigest(){let h1=this.h1,h2=this.h2;h1^=h2>>>1;h1=h1*0xed558ccd&MASK_HIGH|h1*0x8ccd&MASK_LOW;h2=h2*0xff51afd7&MASK_HIGH|((h2<<16|h1>>>16)*0xafd7ed55&MASK_HIGH)>>>16;h1^=h2>>>1;h1=h1*0x1a85ec53&MASK_HIGH|h1*0xec53&MASK_LOW;h2=h2*0xc4ceb9fe&MASK_HIGH|((h2<<16|h1>>>16)*0xb9fe1a85&MASK_HIGH)>>>16;h1^=h2>>>1;return (h1>>>0).toString(16).padStart(8,"0")+(h2>>>0).toString(16).padStart(8,"0");}}exports.MurmurHash3_64=MurmurHash3_64;/***/},/* 9 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.FontLoader=exports.FontFaceObject=void 0;var _util=__w_pdfjs_require__(1);var _is_node=__w_pdfjs_require__(10);class FontLoader{constructor({onUnsupportedFeature,ownerDocument=globalThis.document,styleElement=null}){this._onUnsupportedFeature=onUnsupportedFeature;this._document=ownerDocument;this.nativeFontFaces=[];this.styleElement=null;this.loadingRequests=[];this.loadTestFontId=0;}addNativeFontFace(nativeFontFace){this.nativeFontFaces.push(nativeFontFace);this._document.fonts.add(nativeFontFace);}insertRule(rule){if(!this.styleElement){this.styleElement=this._document.createElement("style");this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);}const styleSheet=this.styleElement.sheet;styleSheet.insertRule(rule,styleSheet.cssRules.length);}clear(){for(const nativeFontFace of this.nativeFontFaces){this._document.fonts.delete(nativeFontFace);}this.nativeFontFaces.length=0;if(this.styleElement){this.styleElement.remove();this.styleElement=null;}}async bind(font){if(font.attached||font.missingFile){return;}font.attached=true;if(this.isFontLoadingAPISupported){const nativeFontFace=font.createNativeFontFace();if(nativeFontFace){this.addNativeFontFace(nativeFontFace);try{await nativeFontFace.loaded;}catch(ex){this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.errorFontLoadNative});(0, _util.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);font.disableFontFace=true;throw ex;}}return;}const rule=font.createFontFaceRule();if(rule){this.insertRule(rule);if(this.isSyncFontLoadingSupported){return;}await new Promise(resolve=>{const request=this._queueLoadingCallback(resolve);this._prepareFontLoadEvent(font,request);});}}get isFontLoadingAPISupported(){const hasFonts=!!this._document?.fonts;return (0, _util.shadow)(this,"isFontLoadingAPISupported",hasFonts);}get isSyncFontLoadingSupported(){let supported=false;if(_is_node.isNodeJS){supported=true;}else if(typeof navigator!=="undefined"&&/Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)){supported=true;}return (0, _util.shadow)(this,"isSyncFontLoadingSupported",supported);}_queueLoadingCallback(callback){function completeRequest(){(0, _util.assert)(!request.done,"completeRequest() cannot be called twice.");request.done=true;while(loadingRequests.length>0&&loadingRequests[0].done){const otherRequest=loadingRequests.shift();setTimeout(otherRequest.callback,0);}}const{loadingRequests}=this;const request={done:false,complete:completeRequest,callback};loadingRequests.push(request);return request;}get _loadTestFont(){const testFont=atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA"+"FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA"+"ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA"+"AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1"+"AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD"+"6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM"+"AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D"+"IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA"+"AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA"+"AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB"+"AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY"+"AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA"+"AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA"+"AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC"+"AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3"+"Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj"+"FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");return (0, _util.shadow)(this,"_loadTestFont",testFont);}_prepareFontLoadEvent(font,request){function int32(data,offset){return data.charCodeAt(offset)<<24|data.charCodeAt(offset+1)<<16|data.charCodeAt(offset+2)<<8|data.charCodeAt(offset+3)&0xff;}function spliceString(s,offset,remove,insert){const chunk1=s.substring(0,offset);const chunk2=s.substring(offset+remove);return chunk1+insert+chunk2;}let i,ii;const canvas=this._document.createElement("canvas");canvas.width=1;canvas.height=1;const ctx=canvas.getContext("2d");let called=0;function isFontReady(name,callback){if(++called>30){(0, _util.warn)("Load test font never loaded.");callback();return;}ctx.font="30px "+name;ctx.fillText(".",0,20);const imageData=ctx.getImageData(0,0,1,1);if(imageData.data[3]>0){callback();return;}setTimeout(isFontReady.bind(null,name,callback));}const loadTestFontId=`lt${Date.now()}${this.loadTestFontId++}`;let data=this._loadTestFont;const COMMENT_OFFSET=976;data=spliceString(data,COMMENT_OFFSET,loadTestFontId.length,loadTestFontId);const CFF_CHECKSUM_OFFSET=16;const XXXX_VALUE=0x58585858;let checksum=int32(data,CFF_CHECKSUM_OFFSET);for(i=0,ii=loadTestFontId.length-3;i<ii;i+=4){checksum=checksum-XXXX_VALUE+int32(loadTestFontId,i)|0;}if(i<loadTestFontId.length){checksum=checksum-XXXX_VALUE+int32(loadTestFontId+"XXX",i)|0;}data=spliceString(data,CFF_CHECKSUM_OFFSET,4,(0, _util.string32)(checksum));const url=`url(data:font/opentype;base64,${btoa(data)});`;const rule=`@font-face {font-family:"${loadTestFontId}";src:${url}}`;this.insertRule(rule);const div=this._document.createElement("div");div.style.visibility="hidden";div.style.width=div.style.height="10px";div.style.position="absolute";div.style.top=div.style.left="0px";for(const name of [font.loadedName,loadTestFontId]){const span=this._document.createElement("span");span.textContent="Hi";span.style.fontFamily=name;div.append(span);}this._document.body.append(div);isFontReady(loadTestFontId,()=>{div.remove();request.complete();});}}exports.FontLoader=FontLoader;class FontFaceObject{constructor(translatedData,{isEvalSupported=true,disableFontFace=false,ignoreErrors=false,onUnsupportedFeature,fontRegistry=null}){this.compiledGlyphs=Object.create(null);for(const i in translatedData){this[i]=translatedData[i];}this.isEvalSupported=isEvalSupported!==false;this.disableFontFace=disableFontFace===true;this.ignoreErrors=ignoreErrors===true;this._onUnsupportedFeature=onUnsupportedFeature;this.fontRegistry=fontRegistry;}createNativeFontFace(){if(!this.data||this.disableFontFace){return null;}let nativeFontFace;if(!this.cssFontInfo){nativeFontFace=new FontFace(this.loadedName,this.data,{});}else {const css={weight:this.cssFontInfo.fontWeight};if(this.cssFontInfo.italicAngle){css.style=`oblique ${this.cssFontInfo.italicAngle}deg`;}nativeFontFace=new FontFace(this.cssFontInfo.fontFamily,this.data,css);}this.fontRegistry?.registerFont(this);return nativeFontFace;}createFontFaceRule(){if(!this.data||this.disableFontFace){return null;}const data=(0, _util.bytesToString)(this.data);const url=`url(data:${this.mimetype};base64,${btoa(data)});`;let rule;if(!this.cssFontInfo){rule=`@font-face {font-family:"${this.loadedName}";src:${url}}`;}else {let css=`font-weight: ${this.cssFontInfo.fontWeight};`;if(this.cssFontInfo.italicAngle){css+=`font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;}rule=`@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;}this.fontRegistry?.registerFont(this,url);return rule;}getPathGenerator(objs,character){if(this.compiledGlyphs[character]!==undefined){return this.compiledGlyphs[character];}let cmds;try{cmds=objs.get(this.loadedName+"_path_"+character);}catch(ex){if(!this.ignoreErrors){throw ex;}this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.errorFontGetPath});(0, _util.warn)(`getPathGenerator - ignoring character: "${ex}".`);return this.compiledGlyphs[character]=function(c,size){};}if(this.isEvalSupported&&_util.FeatureTest.isEvalSupported){const jsBuf=[];for(const current of cmds){const args=current.args!==undefined?current.args.join(","):"";jsBuf.push("c.",current.cmd,"(",args,");\n");}return this.compiledGlyphs[character]=new Function("c","size",jsBuf.join(""));}return this.compiledGlyphs[character]=function(c,size){for(const current of cmds){if(current.cmd==="scale"){current.args=[size,-size];}c[current.cmd].apply(c,current.args);}};}}exports.FontFaceObject=FontFaceObject;/***/},/* 10 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.isNodeJS=void 0;const isNodeJS=typeof process==="object"&&process+""==="[object process]"&&!process.versions.nw&&!(process.versions.electron&&process.type&&process.type!=="browser");exports.isNodeJS=isNodeJS;/***/},/* 11 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.CanvasGraphics=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);var _pattern_helper=__w_pdfjs_require__(12);var _image_utils=__w_pdfjs_require__(13);const MIN_FONT_SIZE=16;const MAX_FONT_SIZE=100;const MAX_GROUP_SIZE=4096;const EXECUTION_TIME=15;const EXECUTION_STEPS=10;const MAX_SIZE_TO_COMPILE=1000;const FULL_CHUNK_HEIGHT=16;function mirrorContextOperations(ctx,destCtx){if(ctx._removeMirroring){throw new Error("Context is already forwarding operations.");}ctx.__originalSave=ctx.save;ctx.__originalRestore=ctx.restore;ctx.__originalRotate=ctx.rotate;ctx.__originalScale=ctx.scale;ctx.__originalTranslate=ctx.translate;ctx.__originalTransform=ctx.transform;ctx.__originalSetTransform=ctx.setTransform;ctx.__originalResetTransform=ctx.resetTransform;ctx.__originalClip=ctx.clip;ctx.__originalMoveTo=ctx.moveTo;ctx.__originalLineTo=ctx.lineTo;ctx.__originalBezierCurveTo=ctx.bezierCurveTo;ctx.__originalRect=ctx.rect;ctx.__originalClosePath=ctx.closePath;ctx.__originalBeginPath=ctx.beginPath;ctx._removeMirroring=()=>{ctx.save=ctx.__originalSave;ctx.restore=ctx.__originalRestore;ctx.rotate=ctx.__originalRotate;ctx.scale=ctx.__originalScale;ctx.translate=ctx.__originalTranslate;ctx.transform=ctx.__originalTransform;ctx.setTransform=ctx.__originalSetTransform;ctx.resetTransform=ctx.__originalResetTransform;ctx.clip=ctx.__originalClip;ctx.moveTo=ctx.__originalMoveTo;ctx.lineTo=ctx.__originalLineTo;ctx.bezierCurveTo=ctx.__originalBezierCurveTo;ctx.rect=ctx.__originalRect;ctx.closePath=ctx.__originalClosePath;ctx.beginPath=ctx.__originalBeginPath;delete ctx._removeMirroring;};ctx.save=function ctxSave(){destCtx.save();this.__originalSave();};ctx.restore=function ctxRestore(){destCtx.restore();this.__originalRestore();};ctx.translate=function ctxTranslate(x,y){destCtx.translate(x,y);this.__originalTranslate(x,y);};ctx.scale=function ctxScale(x,y){destCtx.scale(x,y);this.__originalScale(x,y);};ctx.transform=function ctxTransform(a,b,c,d,e,f){destCtx.transform(a,b,c,d,e,f);this.__originalTransform(a,b,c,d,e,f);};ctx.setTransform=function ctxSetTransform(a,b,c,d,e,f){destCtx.setTransform(a,b,c,d,e,f);this.__originalSetTransform(a,b,c,d,e,f);};ctx.resetTransform=function ctxResetTransform(){destCtx.resetTransform();this.__originalResetTransform();};ctx.rotate=function ctxRotate(angle){destCtx.rotate(angle);this.__originalRotate(angle);};ctx.clip=function ctxRotate(rule){destCtx.clip(rule);this.__originalClip(rule);};ctx.moveTo=function(x,y){destCtx.moveTo(x,y);this.__originalMoveTo(x,y);};ctx.lineTo=function(x,y){destCtx.lineTo(x,y);this.__originalLineTo(x,y);};ctx.bezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){destCtx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);this.__originalBezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);};ctx.rect=function(x,y,width,height){destCtx.rect(x,y,width,height);this.__originalRect(x,y,width,height);};ctx.closePath=function(){destCtx.closePath();this.__originalClosePath();};ctx.beginPath=function(){destCtx.beginPath();this.__originalBeginPath();};}class CachedCanvases{constructor(canvasFactory){this.canvasFactory=canvasFactory;this.cache=Object.create(null);}getCanvas(id,width,height){let canvasEntry;if(this.cache[id]!==undefined){canvasEntry=this.cache[id];this.canvasFactory.reset(canvasEntry,width,height);}else {canvasEntry=this.canvasFactory.create(width,height);this.cache[id]=canvasEntry;}return canvasEntry;}delete(id){delete this.cache[id];}clear(){for(const id in this.cache){const canvasEntry=this.cache[id];this.canvasFactory.destroy(canvasEntry);delete this.cache[id];}}}function drawImageAtIntegerCoords(ctx,srcImg,srcX,srcY,srcW,srcH,destX,destY,destW,destH){const[a,b,c,d,tx,ty]=(0, _display_utils.getCurrentTransform)(ctx);if(b===0&&c===0){const tlX=destX*a+tx;const rTlX=Math.round(tlX);const tlY=destY*d+ty;const rTlY=Math.round(tlY);const brX=(destX+destW)*a+tx;const rWidth=Math.abs(Math.round(brX)-rTlX)||1;const brY=(destY+destH)*d+ty;const rHeight=Math.abs(Math.round(brY)-rTlY)||1;ctx.setTransform(Math.sign(a),0,0,Math.sign(d),rTlX,rTlY);ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,0,0,rWidth,rHeight);ctx.setTransform(a,b,c,d,tx,ty);return [rWidth,rHeight];}if(a===0&&d===0){const tlX=destY*c+tx;const rTlX=Math.round(tlX);const tlY=destX*b+ty;const rTlY=Math.round(tlY);const brX=(destY+destH)*c+tx;const rWidth=Math.abs(Math.round(brX)-rTlX)||1;const brY=(destX+destW)*b+ty;const rHeight=Math.abs(Math.round(brY)-rTlY)||1;ctx.setTransform(0,Math.sign(b),Math.sign(c),0,rTlX,rTlY);ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,0,0,rHeight,rWidth);ctx.setTransform(a,b,c,d,tx,ty);return [rHeight,rWidth];}ctx.drawImage(srcImg,srcX,srcY,srcW,srcH,destX,destY,destW,destH);const scaleX=Math.hypot(a,b);const scaleY=Math.hypot(c,d);return [scaleX*destW,scaleY*destH];}function compileType3Glyph(imgData){const{width,height}=imgData;if(width>MAX_SIZE_TO_COMPILE||height>MAX_SIZE_TO_COMPILE){return null;}const POINT_TO_PROCESS_LIMIT=1000;const POINT_TYPES=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]);const width1=width+1;let points=new Uint8Array(width1*(height+1));let i,j,j0;const lineSize=width+7&~7;let data=new Uint8Array(lineSize*height),pos=0;for(const elem of imgData.data){let mask=128;while(mask>0){data[pos++]=elem&mask?0:255;mask>>=1;}}let count=0;pos=0;if(data[pos]!==0){points[0]=1;++count;}for(j=1;j<width;j++){if(data[pos]!==data[pos+1]){points[j]=data[pos]?2:1;++count;}pos++;}if(data[pos]!==0){points[j]=2;++count;}for(i=1;i<height;i++){pos=i*lineSize;j0=i*width1;if(data[pos-lineSize]!==data[pos]){points[j0]=data[pos]?1:8;++count;}let sum=(data[pos]?4:0)+(data[pos-lineSize]?8:0);for(j=1;j<width;j++){sum=(sum>>2)+(data[pos+1]?4:0)+(data[pos-lineSize+1]?8:0);if(POINT_TYPES[sum]){points[j0+j]=POINT_TYPES[sum];++count;}pos++;}if(data[pos-lineSize]!==data[pos]){points[j0+j]=data[pos]?2:4;++count;}if(count>POINT_TO_PROCESS_LIMIT){return null;}}pos=lineSize*(height-1);j0=i*width1;if(data[pos]!==0){points[j0]=8;++count;}for(j=1;j<width;j++){if(data[pos]!==data[pos+1]){points[j0+j]=data[pos]?4:8;++count;}pos++;}if(data[pos]!==0){points[j0+j]=4;++count;}if(count>POINT_TO_PROCESS_LIMIT){return null;}const steps=new Int32Array([0,width1,-1,0,-width1,0,0,0,1]);const path=new Path2D();for(i=0;count&&i<=height;i++){let p=i*width1;const end=p+width;while(p<end&&!points[p]){p++;}if(p===end){continue;}path.moveTo(p%width1,i);const p0=p;let type=points[p];do{const step=steps[type];do{p+=step;}while(!points[p]);const pp=points[p];if(pp!==5&&pp!==10){type=pp;points[p]=0;}else {type=pp&0x33*type>>4;points[p]&=type>>2|type<<2;}path.lineTo(p%width1,p/width1|0);if(!points[p]){--count;}}while(p0!==p);--i;}data=null;points=null;const drawOutline=function(c){c.save();c.scale(1/width,-1/height);c.translate(0,-height);c.fill(path);c.beginPath();c.restore();};return drawOutline;}class CanvasExtraState{constructor(width,height){this.alphaIsShape=false;this.fontSize=0;this.fontSizeScale=1;this.textMatrix=_util.IDENTITY_MATRIX;this.textMatrixScale=1;this.fontMatrix=_util.FONT_IDENTITY_MATRIX;this.leading=0;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRenderingMode=_util.TextRenderingMode.FILL;this.textRise=0;this.fillColor="#000000";this.strokeColor="#000000";this.patternFill=false;this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.activeSMask=null;this.transferMaps=null;this.startNewPathAndClipBox([0,0,width,height]);}clone(){const clone=Object.create(this);clone.clipBox=this.clipBox.slice();return clone;}setCurrentPoint(x,y){this.x=x;this.y=y;}updatePathMinMax(transform,x,y){[x,y]=_util.Util.applyTransform([x,y],transform);this.minX=Math.min(this.minX,x);this.minY=Math.min(this.minY,y);this.maxX=Math.max(this.maxX,x);this.maxY=Math.max(this.maxY,y);}updateRectMinMax(transform,rect){const p1=_util.Util.applyTransform(rect,transform);const p2=_util.Util.applyTransform(rect.slice(2),transform);this.minX=Math.min(this.minX,p1[0],p2[0]);this.minY=Math.min(this.minY,p1[1],p2[1]);this.maxX=Math.max(this.maxX,p1[0],p2[0]);this.maxY=Math.max(this.maxY,p1[1],p2[1]);}updateScalingPathMinMax(transform,minMax){_util.Util.scaleMinMax(transform,minMax);this.minX=Math.min(this.minX,minMax[0]);this.maxX=Math.max(this.maxX,minMax[1]);this.minY=Math.min(this.minY,minMax[2]);this.maxY=Math.max(this.maxY,minMax[3]);}updateCurvePathMinMax(transform,x0,y0,x1,y1,x2,y2,x3,y3,minMax){const box=_util.Util.bezierBoundingBox(x0,y0,x1,y1,x2,y2,x3,y3);if(minMax){minMax[0]=Math.min(minMax[0],box[0],box[2]);minMax[1]=Math.max(minMax[1],box[0],box[2]);minMax[2]=Math.min(minMax[2],box[1],box[3]);minMax[3]=Math.max(minMax[3],box[1],box[3]);return;}this.updateRectMinMax(transform,box);}getPathBoundingBox(pathType=_pattern_helper.PathType.FILL,transform=null){const box=[this.minX,this.minY,this.maxX,this.maxY];if(pathType===_pattern_helper.PathType.STROKE){if(!transform){(0, _util.unreachable)("Stroke bounding box must include transform.");}const scale=_util.Util.singularValueDecompose2dScale(transform);const xStrokePad=scale[0]*this.lineWidth/2;const yStrokePad=scale[1]*this.lineWidth/2;box[0]-=xStrokePad;box[1]-=yStrokePad;box[2]+=xStrokePad;box[3]+=yStrokePad;}return box;}updateClipFromPath(){const intersect=_util.Util.intersect(this.clipBox,this.getPathBoundingBox());this.startNewPathAndClipBox(intersect||[0,0,0,0]);}isEmptyClip(){return this.minX===Infinity;}startNewPathAndClipBox(box){this.clipBox=box;this.minX=Infinity;this.minY=Infinity;this.maxX=0;this.maxY=0;}getClippedPathBoundingBox(pathType=_pattern_helper.PathType.FILL,transform=null){return _util.Util.intersect(this.clipBox,this.getPathBoundingBox(pathType,transform));}}function putBinaryImageData(ctx,imgData,transferMaps=null){if(typeof ImageData!=="undefined"&&imgData instanceof ImageData){ctx.putImageData(imgData,0,0);return;}const height=imgData.height,width=imgData.width;const partialChunkHeight=height%FULL_CHUNK_HEIGHT;const fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT;const totalChunks=partialChunkHeight===0?fullChunks:fullChunks+1;const chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT);let srcPos=0,destPos;const src=imgData.data;const dest=chunkImgData.data;let i,j,thisChunkHeight,elemsInThisChunk;let transferMapRed,transferMapGreen,transferMapBlue,transferMapGray;if(transferMaps){switch(transferMaps.length){case 1:transferMapRed=transferMaps[0];transferMapGreen=transferMaps[0];transferMapBlue=transferMaps[0];transferMapGray=transferMaps[0];break;case 4:transferMapRed=transferMaps[0];transferMapGreen=transferMaps[1];transferMapBlue=transferMaps[2];transferMapGray=transferMaps[3];break;}}if(imgData.kind===_util.ImageKind.GRAYSCALE_1BPP){const srcLength=src.byteLength;const dest32=new Uint32Array(dest.buffer,0,dest.byteLength>>2);const dest32DataLength=dest32.length;const fullSrcDiff=width+7>>3;let white=0xffffffff;let black=_util.FeatureTest.isLittleEndian?0xff000000:0x000000ff;if(transferMapGray){if(transferMapGray[0]===0xff&&transferMapGray[0xff]===0){[white,black]=[black,white];}}for(i=0;i<totalChunks;i++){thisChunkHeight=i<fullChunks?FULL_CHUNK_HEIGHT:partialChunkHeight;destPos=0;for(j=0;j<thisChunkHeight;j++){const srcDiff=srcLength-srcPos;let k=0;const kEnd=srcDiff>fullSrcDiff?width:srcDiff*8-7;const kEndUnrolled=kEnd&~7;let mask=0;let srcByte=0;for(;k<kEndUnrolled;k+=8){srcByte=src[srcPos++];dest32[destPos++]=srcByte&128?white:black;dest32[destPos++]=srcByte&64?white:black;dest32[destPos++]=srcByte&32?white:black;dest32[destPos++]=srcByte&16?white:black;dest32[destPos++]=srcByte&8?white:black;dest32[destPos++]=srcByte&4?white:black;dest32[destPos++]=srcByte&2?white:black;dest32[destPos++]=srcByte&1?white:black;}for(;k<kEnd;k++){if(mask===0){srcByte=src[srcPos++];mask=128;}dest32[destPos++]=srcByte&mask?white:black;mask>>=1;}}while(destPos<dest32DataLength){dest32[destPos++]=0;}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}else if(imgData.kind===_util.ImageKind.RGBA_32BPP){const hasTransferMaps=!!(transferMapRed||transferMapGreen||transferMapBlue);j=0;elemsInThisChunk=width*FULL_CHUNK_HEIGHT*4;for(i=0;i<fullChunks;i++){dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk));srcPos+=elemsInThisChunk;if(hasTransferMaps){for(let k=0;k<elemsInThisChunk;k+=4){if(transferMapRed){dest[k+0]=transferMapRed[dest[k+0]];}if(transferMapGreen){dest[k+1]=transferMapGreen[dest[k+1]];}if(transferMapBlue){dest[k+2]=transferMapBlue[dest[k+2]];}}}ctx.putImageData(chunkImgData,0,j);j+=FULL_CHUNK_HEIGHT;}if(i<totalChunks){elemsInThisChunk=width*partialChunkHeight*4;dest.set(src.subarray(srcPos,srcPos+elemsInThisChunk));if(hasTransferMaps){for(let k=0;k<elemsInThisChunk;k+=4){if(transferMapRed){dest[k+0]=transferMapRed[dest[k+0]];}if(transferMapGreen){dest[k+1]=transferMapGreen[dest[k+1]];}if(transferMapBlue){dest[k+2]=transferMapBlue[dest[k+2]];}}}ctx.putImageData(chunkImgData,0,j);}}else if(imgData.kind===_util.ImageKind.RGB_24BPP){const hasTransferMaps=!!(transferMapRed||transferMapGreen||transferMapBlue);thisChunkHeight=FULL_CHUNK_HEIGHT;elemsInThisChunk=width*thisChunkHeight;for(i=0;i<totalChunks;i++){if(i>=fullChunks){thisChunkHeight=partialChunkHeight;elemsInThisChunk=width*thisChunkHeight;}destPos=0;for(j=elemsInThisChunk;j--;){dest[destPos++]=src[srcPos++];dest[destPos++]=src[srcPos++];dest[destPos++]=src[srcPos++];dest[destPos++]=255;}if(hasTransferMaps){for(let k=0;k<destPos;k+=4){if(transferMapRed){dest[k+0]=transferMapRed[dest[k+0]];}if(transferMapGreen){dest[k+1]=transferMapGreen[dest[k+1]];}if(transferMapBlue){dest[k+2]=transferMapBlue[dest[k+2]];}}}ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}else {throw new Error(`bad image kind: ${imgData.kind}`);}}function putBinaryImageMask(ctx,imgData){if(imgData.bitmap){ctx.drawImage(imgData.bitmap,0,0);return;}const height=imgData.height,width=imgData.width;const partialChunkHeight=height%FULL_CHUNK_HEIGHT;const fullChunks=(height-partialChunkHeight)/FULL_CHUNK_HEIGHT;const totalChunks=partialChunkHeight===0?fullChunks:fullChunks+1;const chunkImgData=ctx.createImageData(width,FULL_CHUNK_HEIGHT);let srcPos=0;const src=imgData.data;const dest=chunkImgData.data;for(let i=0;i<totalChunks;i++){const thisChunkHeight=i<fullChunks?FULL_CHUNK_HEIGHT:partialChunkHeight;({srcPos}=(0, _image_utils.applyMaskImageData)({src,srcPos,dest,width,height:thisChunkHeight}));ctx.putImageData(chunkImgData,0,i*FULL_CHUNK_HEIGHT);}}function copyCtxState(sourceCtx,destCtx){const properties=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"];for(const property of properties){if(sourceCtx[property]!==undefined){destCtx[property]=sourceCtx[property];}}if(sourceCtx.setLineDash!==undefined){destCtx.setLineDash(sourceCtx.getLineDash());destCtx.lineDashOffset=sourceCtx.lineDashOffset;}}function resetCtxToDefault(ctx,foregroundColor){ctx.strokeStyle=ctx.fillStyle=foregroundColor||"#000000";ctx.fillRule="nonzero";ctx.globalAlpha=1;ctx.lineWidth=1;ctx.lineCap="butt";ctx.lineJoin="miter";ctx.miterLimit=10;ctx.globalCompositeOperation="source-over";ctx.font="10px sans-serif";if(ctx.setLineDash!==undefined){ctx.setLineDash([]);ctx.lineDashOffset=0;}}function composeSMaskBackdrop(bytes,r0,g0,b0){const length=bytes.length;for(let i=3;i<length;i+=4){const alpha=bytes[i];if(alpha===0){bytes[i-3]=r0;bytes[i-2]=g0;bytes[i-1]=b0;}else if(alpha<255){const alpha_=255-alpha;bytes[i-3]=bytes[i-3]*alpha+r0*alpha_>>8;bytes[i-2]=bytes[i-2]*alpha+g0*alpha_>>8;bytes[i-1]=bytes[i-1]*alpha+b0*alpha_>>8;}}}function composeSMaskAlpha(maskData,layerData,transferMap){const length=maskData.length;const scale=1/255;for(let i=3;i<length;i+=4){const alpha=transferMap?transferMap[maskData[i]]:maskData[i];layerData[i]=layerData[i]*alpha*scale|0;}}function composeSMaskLuminosity(maskData,layerData,transferMap){const length=maskData.length;for(let i=3;i<length;i+=4){const y=maskData[i-3]*77+maskData[i-2]*152+maskData[i-1]*28;layerData[i]=transferMap?layerData[i]*transferMap[y>>8]>>8:layerData[i]*y>>16;}}function genericComposeSMask(maskCtx,layerCtx,width,height,subtype,backdrop,transferMap,layerOffsetX,layerOffsetY,maskOffsetX,maskOffsetY){const hasBackdrop=!!backdrop;const r0=hasBackdrop?backdrop[0]:0;const g0=hasBackdrop?backdrop[1]:0;const b0=hasBackdrop?backdrop[2]:0;let composeFn;if(subtype==="Luminosity"){composeFn=composeSMaskLuminosity;}else {composeFn=composeSMaskAlpha;}const PIXELS_TO_PROCESS=1048576;const chunkSize=Math.min(height,Math.ceil(PIXELS_TO_PROCESS/width));for(let row=0;row<height;row+=chunkSize){const chunkHeight=Math.min(chunkSize,height-row);const maskData=maskCtx.getImageData(layerOffsetX-maskOffsetX,row+(layerOffsetY-maskOffsetY),width,chunkHeight);const layerData=layerCtx.getImageData(layerOffsetX,row+layerOffsetY,width,chunkHeight);if(hasBackdrop){composeSMaskBackdrop(maskData.data,r0,g0,b0);}composeFn(maskData.data,layerData.data,transferMap);layerCtx.putImageData(layerData,layerOffsetX,row+layerOffsetY);}}function composeSMask(ctx,smask,layerCtx,layerBox){const layerOffsetX=layerBox[0];const layerOffsetY=layerBox[1];const layerWidth=layerBox[2]-layerOffsetX;const layerHeight=layerBox[3]-layerOffsetY;if(layerWidth===0||layerHeight===0){return;}genericComposeSMask(smask.context,layerCtx,layerWidth,layerHeight,smask.subtype,smask.backdrop,smask.transferMap,layerOffsetX,layerOffsetY,smask.offsetX,smask.offsetY);ctx.save();ctx.globalAlpha=1;ctx.globalCompositeOperation="source-over";ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(layerCtx.canvas,0,0);ctx.restore();}function getImageSmoothingEnabled(transform,interpolate){const scale=_util.Util.singularValueDecompose2dScale(transform);scale[0]=Math.fround(scale[0]);scale[1]=Math.fround(scale[1]);const actualScale=Math.fround((globalThis.devicePixelRatio||1)*_display_utils.PixelsPerInch.PDF_TO_CSS_UNITS);if(interpolate!==undefined){return interpolate;}else if(scale[0]<=actualScale||scale[1]<=actualScale){return true;}return false;}const LINE_CAP_STYLES=["butt","round","square"];const LINE_JOIN_STYLES=["miter","round","bevel"];const NORMAL_CLIP={};const EO_CLIP={};class CanvasGraphics{constructor(canvasCtx,commonObjs,objs,canvasFactory,{optionalContentConfig,markedContentStack=null},annotationCanvasMap,pageColors){this.ctx=canvasCtx;this.current=new CanvasExtraState(this.ctx.canvas.width,this.ctx.canvas.height);this.stateStack=[];this.pendingClip=null;this.pendingEOFill=false;this.res=null;this.xobjs=null;this.commonObjs=commonObjs;this.objs=objs;this.canvasFactory=canvasFactory;this.groupStack=[];this.processingType3=null;this.baseTransform=null;this.baseTransformStack=[];this.groupLevel=0;this.smaskStack=[];this.smaskCounter=0;this.tempSMask=null;this.suspendedCtx=null;this.contentVisible=true;this.markedContentStack=markedContentStack||[];this.optionalContentConfig=optionalContentConfig;this.cachedCanvases=new CachedCanvases(this.canvasFactory);this.cachedPatterns=new Map();this.annotationCanvasMap=annotationCanvasMap;this.viewportScale=1;this.outputScaleX=1;this.outputScaleY=1;this.backgroundColor=pageColors?.background||null;this.foregroundColor=pageColors?.foreground||null;this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;this._cachedBitmapsMap=new Map();}getObject(data,fallback=null){if(typeof data==="string"){return data.startsWith("g_")?this.commonObjs.get(data):this.objs.get(data);}return fallback;}beginDrawing({transform,viewport,transparency=false,background=null}){const width=this.ctx.canvas.width;const height=this.ctx.canvas.height;const defaultBackgroundColor=background||"#ffffff";this.ctx.save();if(this.foregroundColor&&this.backgroundColor){this.ctx.fillStyle=this.foregroundColor;const fg=this.foregroundColor=this.ctx.fillStyle;this.ctx.fillStyle=this.backgroundColor;const bg=this.backgroundColor=this.ctx.fillStyle;let isValidDefaultBg=true;let defaultBg=defaultBackgroundColor;this.ctx.fillStyle=defaultBackgroundColor;defaultBg=this.ctx.fillStyle;isValidDefaultBg=typeof defaultBg==="string"&&/^#[0-9A-Fa-f]{6}$/.test(defaultBg);if(fg==="#000000"&&bg==="#ffffff"||fg===bg||!isValidDefaultBg){this.foregroundColor=this.backgroundColor=null;}else {const[rB,gB,bB]=(0, _display_utils.getRGB)(defaultBg);const newComp=x=>{x/=255;return x<=0.03928?x/12.92:((x+0.055)/1.055)**2.4;};const lumB=Math.round(0.2126*newComp(rB)+0.7152*newComp(gB)+0.0722*newComp(bB));this.selectColor=(r,g,b)=>{const lumC=0.2126*newComp(r)+0.7152*newComp(g)+0.0722*newComp(b);return Math.round(lumC)===lumB?bg:fg;};}}this.ctx.fillStyle=this.backgroundColor||defaultBackgroundColor;this.ctx.fillRect(0,0,width,height);this.ctx.restore();if(transparency){const transparentCanvas=this.cachedCanvases.getCanvas("transparent",width,height);this.compositeCtx=this.ctx;this.transparentCanvas=transparentCanvas.canvas;this.ctx=transparentCanvas.context;this.ctx.save();this.ctx.transform(...(0, _display_utils.getCurrentTransform)(this.compositeCtx));}this.ctx.save();resetCtxToDefault(this.ctx,this.foregroundColor);if(transform){this.ctx.transform(...transform);this.outputScaleX=transform[0];this.outputScaleY=transform[0];}this.ctx.transform(...viewport.transform);this.viewportScale=viewport.scale;this.baseTransform=(0, _display_utils.getCurrentTransform)(this.ctx);}executeOperatorList(operatorList,executionStartIdx,continueCallback,stepper){const argsArray=operatorList.argsArray;const fnArray=operatorList.fnArray;let i=executionStartIdx||0;const argsArrayLen=argsArray.length;if(argsArrayLen===i){return i;}const chunkOperations=argsArrayLen-i>EXECUTION_STEPS&&typeof continueCallback==="function";const endTime=chunkOperations?Date.now()+EXECUTION_TIME:0;let steps=0;const commonObjs=this.commonObjs;const objs=this.objs;let fnId;while(true){if(stepper!==undefined&&i===stepper.nextBreakPoint){stepper.breakIt(i,continueCallback);return i;}fnId=fnArray[i];if(fnId!==_util.OPS.dependency){this[fnId].apply(this,argsArray[i]);}else {for(const depObjId of argsArray[i]){const objsPool=depObjId.startsWith("g_")?commonObjs:objs;if(!objsPool.has(depObjId)){objsPool.get(depObjId,continueCallback);return i;}}}i++;if(i===argsArrayLen){return i;}if(chunkOperations&&++steps>EXECUTION_STEPS){if(Date.now()>endTime){continueCallback();return i;}steps=0;}}}#restoreInitialState(){while(this.stateStack.length||this.inSMaskMode){this.restore();}this.ctx.restore();if(this.transparentCanvas){this.ctx=this.compositeCtx;this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.drawImage(this.transparentCanvas,0,0);this.ctx.restore();this.transparentCanvas=null;}}endDrawing(){this.#restoreInitialState();this.cachedCanvases.clear();this.cachedPatterns.clear();for(const cache of this._cachedBitmapsMap.values()){for(const canvas of cache.values()){if(typeof HTMLCanvasElement!=="undefined"&&canvas instanceof HTMLCanvasElement){canvas.width=canvas.height=0;}}cache.clear();}this._cachedBitmapsMap.clear();}_scaleImage(img,inverseTransform){const width=img.width;const height=img.height;let widthScale=Math.max(Math.hypot(inverseTransform[0],inverseTransform[1]),1);let heightScale=Math.max(Math.hypot(inverseTransform[2],inverseTransform[3]),1);let paintWidth=width,paintHeight=height;let tmpCanvasId="prescale1";let tmpCanvas,tmpCtx;while(widthScale>2&&paintWidth>1||heightScale>2&&paintHeight>1){let newWidth=paintWidth,newHeight=paintHeight;if(widthScale>2&&paintWidth>1){newWidth=Math.ceil(paintWidth/2);widthScale/=paintWidth/newWidth;}if(heightScale>2&&paintHeight>1){newHeight=Math.ceil(paintHeight/2);heightScale/=paintHeight/newHeight;}tmpCanvas=this.cachedCanvases.getCanvas(tmpCanvasId,newWidth,newHeight);tmpCtx=tmpCanvas.context;tmpCtx.clearRect(0,0,newWidth,newHeight);tmpCtx.drawImage(img,0,0,paintWidth,paintHeight,0,0,newWidth,newHeight);img=tmpCanvas.canvas;paintWidth=newWidth;paintHeight=newHeight;tmpCanvasId=tmpCanvasId==="prescale1"?"prescale2":"prescale1";}return {img,paintWidth,paintHeight};}_createMaskCanvas(img){const ctx=this.ctx;const{width,height}=img;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;const currentTransform=(0, _display_utils.getCurrentTransform)(ctx);let cache,cacheKey,scaled,maskCanvas;if((img.bitmap||img.data)&&img.count>1){const mainKey=img.bitmap||img.data.buffer;cacheKey=JSON.stringify(isPatternFill?currentTransform:[currentTransform.slice(0,4),fillColor]);cache=this._cachedBitmapsMap.get(mainKey);if(!cache){cache=new Map();this._cachedBitmapsMap.set(mainKey,cache);}const cachedImage=cache.get(cacheKey);if(cachedImage&&!isPatternFill){const offsetX=Math.round(Math.min(currentTransform[0],currentTransform[2])+currentTransform[4]);const offsetY=Math.round(Math.min(currentTransform[1],currentTransform[3])+currentTransform[5]);return {canvas:cachedImage,offsetX,offsetY};}scaled=cachedImage;}if(!scaled){maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height);putBinaryImageMask(maskCanvas.context,img);}let maskToCanvas=_util.Util.transform(currentTransform,[1/width,0,0,-1/height,0,0]);maskToCanvas=_util.Util.transform(maskToCanvas,[1,0,0,1,0,-height]);const cord1=_util.Util.applyTransform([0,0],maskToCanvas);const cord2=_util.Util.applyTransform([width,height],maskToCanvas);const rect=_util.Util.normalizeRect([cord1[0],cord1[1],cord2[0],cord2[1]]);const drawnWidth=Math.round(rect[2]-rect[0])||1;const drawnHeight=Math.round(rect[3]-rect[1])||1;const fillCanvas=this.cachedCanvases.getCanvas("fillCanvas",drawnWidth,drawnHeight);const fillCtx=fillCanvas.context;const offsetX=Math.min(cord1[0],cord2[0]);const offsetY=Math.min(cord1[1],cord2[1]);fillCtx.translate(-offsetX,-offsetY);fillCtx.transform(...maskToCanvas);if(!scaled){scaled=this._scaleImage(maskCanvas.canvas,(0, _display_utils.getCurrentTransformInverse)(fillCtx));scaled=scaled.img;if(cache&&isPatternFill){cache.set(cacheKey,scaled);}}fillCtx.imageSmoothingEnabled=getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(fillCtx),img.interpolate);drawImageAtIntegerCoords(fillCtx,scaled,0,0,scaled.width,scaled.height,0,0,width,height);fillCtx.globalCompositeOperation="source-in";const inverse=_util.Util.transform((0, _display_utils.getCurrentTransformInverse)(fillCtx),[1,0,0,1,-offsetX,-offsetY]);fillCtx.fillStyle=isPatternFill?fillColor.getPattern(ctx,this,inverse,_pattern_helper.PathType.FILL):fillColor;fillCtx.fillRect(0,0,width,height);if(cache&&!isPatternFill){this.cachedCanvases.delete("fillCanvas");cache.set(cacheKey,fillCanvas.canvas);}return {canvas:fillCanvas.canvas,offsetX:Math.round(offsetX),offsetY:Math.round(offsetY)};}setLineWidth(width){if(width!==this.current.lineWidth){this._cachedScaleForStroking=null;}this.current.lineWidth=width;this.ctx.lineWidth=width;}setLineCap(style){this.ctx.lineCap=LINE_CAP_STYLES[style];}setLineJoin(style){this.ctx.lineJoin=LINE_JOIN_STYLES[style];}setMiterLimit(limit){this.ctx.miterLimit=limit;}setDash(dashArray,dashPhase){const ctx=this.ctx;if(ctx.setLineDash!==undefined){ctx.setLineDash(dashArray);ctx.lineDashOffset=dashPhase;}}setRenderingIntent(intent){}setFlatness(flatness){}setGState(states){for(const[key,value]of states){switch(key){case"LW":this.setLineWidth(value);break;case"LC":this.setLineCap(value);break;case"LJ":this.setLineJoin(value);break;case"ML":this.setMiterLimit(value);break;case"D":this.setDash(value[0],value[1]);break;case"RI":this.setRenderingIntent(value);break;case"FL":this.setFlatness(value);break;case"Font":this.setFont(value[0],value[1]);break;case"CA":this.current.strokeAlpha=value;break;case"ca":this.current.fillAlpha=value;this.ctx.globalAlpha=value;break;case"BM":this.ctx.globalCompositeOperation=value;break;case"SMask":this.current.activeSMask=value?this.tempSMask:null;this.tempSMask=null;this.checkSMaskState();break;case"TR":this.current.transferMaps=value;}}}get inSMaskMode(){return !!this.suspendedCtx;}checkSMaskState(){const inSMaskMode=this.inSMaskMode;if(this.current.activeSMask&&!inSMaskMode){this.beginSMaskMode();}else if(!this.current.activeSMask&&inSMaskMode){this.endSMaskMode();}}beginSMaskMode(){if(this.inSMaskMode){throw new Error("beginSMaskMode called while already in smask mode");}const drawnWidth=this.ctx.canvas.width;const drawnHeight=this.ctx.canvas.height;const cacheId="smaskGroupAt"+this.groupLevel;const scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight);this.suspendedCtx=this.ctx;this.ctx=scratchCanvas.context;const ctx=this.ctx;ctx.setTransform(...(0, _display_utils.getCurrentTransform)(this.suspendedCtx));copyCtxState(this.suspendedCtx,ctx);mirrorContextOperations(ctx,this.suspendedCtx);this.setGState([["BM","source-over"],["ca",1],["CA",1]]);}endSMaskMode(){if(!this.inSMaskMode){throw new Error("endSMaskMode called while not in smask mode");}this.ctx._removeMirroring();copyCtxState(this.ctx,this.suspendedCtx);this.ctx=this.suspendedCtx;this.suspendedCtx=null;}compose(dirtyBox){if(!this.current.activeSMask){return;}if(!dirtyBox){dirtyBox=[0,0,this.ctx.canvas.width,this.ctx.canvas.height];}else {dirtyBox[0]=Math.floor(dirtyBox[0]);dirtyBox[1]=Math.floor(dirtyBox[1]);dirtyBox[2]=Math.ceil(dirtyBox[2]);dirtyBox[3]=Math.ceil(dirtyBox[3]);}const smask=this.current.activeSMask;const suspendedCtx=this.suspendedCtx;composeSMask(suspendedCtx,smask,this.ctx,dirtyBox);this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);this.ctx.restore();}save(){if(this.inSMaskMode){copyCtxState(this.ctx,this.suspendedCtx);this.suspendedCtx.save();}else {this.ctx.save();}const old=this.current;this.stateStack.push(old);this.current=old.clone();}restore(){if(this.stateStack.length===0&&this.inSMaskMode){this.endSMaskMode();}if(this.stateStack.length!==0){this.current=this.stateStack.pop();if(this.inSMaskMode){this.suspendedCtx.restore();copyCtxState(this.suspendedCtx,this.ctx);}else {this.ctx.restore();}this.checkSMaskState();this.pendingClip=null;this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;}}transform(a,b,c,d,e,f){this.ctx.transform(a,b,c,d,e,f);this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;}constructPath(ops,args,minMax){const ctx=this.ctx;const current=this.current;let x=current.x,y=current.y;let startX,startY;const currentTransform=(0, _display_utils.getCurrentTransform)(ctx);const isScalingMatrix=currentTransform[0]===0&&currentTransform[3]===0||currentTransform[1]===0&&currentTransform[2]===0;const minMaxForBezier=isScalingMatrix?minMax.slice(0):null;for(let i=0,j=0,ii=ops.length;i<ii;i++){switch(ops[i]|0){case _util.OPS.rectangle:x=args[j++];y=args[j++];const width=args[j++];const height=args[j++];const xw=x+width;const yh=y+height;ctx.moveTo(x,y);if(width===0||height===0){ctx.lineTo(xw,yh);}else {ctx.lineTo(xw,y);ctx.lineTo(xw,yh);ctx.lineTo(x,yh);}if(!isScalingMatrix){current.updateRectMinMax(currentTransform,[x,y,xw,yh]);}ctx.closePath();break;case _util.OPS.moveTo:x=args[j++];y=args[j++];ctx.moveTo(x,y);if(!isScalingMatrix){current.updatePathMinMax(currentTransform,x,y);}break;case _util.OPS.lineTo:x=args[j++];y=args[j++];ctx.lineTo(x,y);if(!isScalingMatrix){current.updatePathMinMax(currentTransform,x,y);}break;case _util.OPS.curveTo:startX=x;startY=y;x=args[j+4];y=args[j+5];ctx.bezierCurveTo(args[j],args[j+1],args[j+2],args[j+3],x,y);current.updateCurvePathMinMax(currentTransform,startX,startY,args[j],args[j+1],args[j+2],args[j+3],x,y,minMaxForBezier);j+=6;break;case _util.OPS.curveTo2:startX=x;startY=y;ctx.bezierCurveTo(x,y,args[j],args[j+1],args[j+2],args[j+3]);current.updateCurvePathMinMax(currentTransform,startX,startY,x,y,args[j],args[j+1],args[j+2],args[j+3],minMaxForBezier);x=args[j+2];y=args[j+3];j+=4;break;case _util.OPS.curveTo3:startX=x;startY=y;x=args[j+2];y=args[j+3];ctx.bezierCurveTo(args[j],args[j+1],x,y,x,y);current.updateCurvePathMinMax(currentTransform,startX,startY,args[j],args[j+1],x,y,x,y,minMaxForBezier);j+=4;break;case _util.OPS.closePath:ctx.closePath();break;}}if(isScalingMatrix){current.updateScalingPathMinMax(currentTransform,minMaxForBezier);}current.setCurrentPoint(x,y);}closePath(){this.ctx.closePath();}stroke(consumePath=true){const ctx=this.ctx;const strokeColor=this.current.strokeColor;ctx.globalAlpha=this.current.strokeAlpha;if(this.contentVisible){if(typeof strokeColor==="object"&&strokeColor?.getPattern){ctx.save();ctx.strokeStyle=strokeColor.getPattern(ctx,this,(0, _display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.STROKE);this.rescaleAndStroke(false);ctx.restore();}else {this.rescaleAndStroke(true);}}if(consumePath){this.consumePath(this.current.getClippedPathBoundingBox());}ctx.globalAlpha=this.current.fillAlpha;}closeStroke(){this.closePath();this.stroke();}fill(consumePath=true){const ctx=this.ctx;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;let needRestore=false;if(isPatternFill){ctx.save();ctx.fillStyle=fillColor.getPattern(ctx,this,(0, _display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL);needRestore=true;}const intersect=this.current.getClippedPathBoundingBox();if(this.contentVisible&&intersect!==null){if(this.pendingEOFill){ctx.fill("evenodd");this.pendingEOFill=false;}else {ctx.fill();}}if(needRestore){ctx.restore();}if(consumePath){this.consumePath(intersect);}}eoFill(){this.pendingEOFill=true;this.fill();}fillStroke(){this.fill(false);this.stroke(false);this.consumePath();}eoFillStroke(){this.pendingEOFill=true;this.fillStroke();}closeFillStroke(){this.closePath();this.fillStroke();}closeEOFillStroke(){this.pendingEOFill=true;this.closePath();this.fillStroke();}endPath(){this.consumePath();}clip(){this.pendingClip=NORMAL_CLIP;}eoClip(){this.pendingClip=EO_CLIP;}beginText(){this.current.textMatrix=_util.IDENTITY_MATRIX;this.current.textMatrixScale=1;this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0;}endText(){const paths=this.pendingTextPaths;const ctx=this.ctx;if(paths===undefined){ctx.beginPath();return;}ctx.save();ctx.beginPath();for(const path of paths){ctx.setTransform(...path.transform);ctx.translate(path.x,path.y);path.addToPath(ctx,path.fontSize);}ctx.restore();ctx.clip();ctx.beginPath();delete this.pendingTextPaths;}setCharSpacing(spacing){this.current.charSpacing=spacing;}setWordSpacing(spacing){this.current.wordSpacing=spacing;}setHScale(scale){this.current.textHScale=scale/100;}setLeading(leading){this.current.leading=-leading;}setFont(fontRefName,size){const fontObj=this.commonObjs.get(fontRefName);const current=this.current;if(!fontObj){throw new Error(`Can't find font for ${fontRefName}`);}current.fontMatrix=fontObj.fontMatrix||_util.FONT_IDENTITY_MATRIX;if(current.fontMatrix[0]===0||current.fontMatrix[3]===0){(0, _util.warn)("Invalid font matrix for font "+fontRefName);}if(size<0){size=-size;current.fontDirection=-1;}else {current.fontDirection=1;}this.current.font=fontObj;this.current.fontSize=size;if(fontObj.isType3Font){return;}const name=fontObj.loadedName||"sans-serif";let bold="normal";if(fontObj.black){bold="900";}else if(fontObj.bold){bold="bold";}const italic=fontObj.italic?"italic":"normal";const typeface=`"${name}", ${fontObj.fallbackName}`;let browserFontSize=size;if(size<MIN_FONT_SIZE){browserFontSize=MIN_FONT_SIZE;}else if(size>MAX_FONT_SIZE){browserFontSize=MAX_FONT_SIZE;}this.current.fontSizeScale=size/browserFontSize;this.ctx.font=`${italic} ${bold} ${browserFontSize}px ${typeface}`;}setTextRenderingMode(mode){this.current.textRenderingMode=mode;}setTextRise(rise){this.current.textRise=rise;}moveText(x,y){this.current.x=this.current.lineX+=x;this.current.y=this.current.lineY+=y;}setLeadingMoveText(x,y){this.setLeading(-y);this.moveText(x,y);}setTextMatrix(a,b,c,d,e,f){this.current.textMatrix=[a,b,c,d,e,f];this.current.textMatrixScale=Math.hypot(a,b);this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0;}nextLine(){this.moveText(0,this.current.leading);}paintChar(character,x,y,patternTransform){const ctx=this.ctx;const current=this.current;const font=current.font;const textRenderingMode=current.textRenderingMode;const fontSize=current.fontSize/current.fontSizeScale;const fillStrokeMode=textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;const isAddToPathSet=!!(textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG);const patternFill=current.patternFill&&!font.missingFile;let addToPath;if(font.disableFontFace||isAddToPathSet||patternFill){addToPath=font.getPathGenerator(this.commonObjs,character);}if(font.disableFontFace||patternFill){ctx.save();ctx.translate(x,y);ctx.beginPath();addToPath(ctx,fontSize);if(patternTransform){ctx.setTransform(...patternTransform);}if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.fill();}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.stroke();}ctx.restore();}else {if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.fillText(character,x,y);}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){ctx.strokeText(character,x,y);}}if(isAddToPathSet){const paths=this.pendingTextPaths||(this.pendingTextPaths=[]);paths.push({transform:(0, _display_utils.getCurrentTransform)(ctx),x,y,fontSize,addToPath});}}get isFontSubpixelAAEnabled(){const{context:ctx}=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10);ctx.scale(1.5,1);ctx.fillText("I",0,10);const data=ctx.getImageData(0,0,10,10).data;let enabled=false;for(let i=3;i<data.length;i+=4){if(data[i]>0&&data[i]<255){enabled=true;break;}}return (0, _util.shadow)(this,"isFontSubpixelAAEnabled",enabled);}showText(glyphs){const current=this.current;const font=current.font;if(font.isType3Font){return this.showType3Text(glyphs);}const fontSize=current.fontSize;if(fontSize===0){return undefined;}const ctx=this.ctx;const fontSizeScale=current.fontSizeScale;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const fontDirection=current.fontDirection;const textHScale=current.textHScale*fontDirection;const glyphsLength=glyphs.length;const vertical=font.vertical;const spacingDir=vertical?1:-1;const defaultVMetrics=font.defaultVMetrics;const widthAdvanceScale=fontSize*current.fontMatrix[0];const simpleFillText=current.textRenderingMode===_util.TextRenderingMode.FILL&&!font.disableFontFace&&!current.patternFill;ctx.save();ctx.transform(...current.textMatrix);ctx.translate(current.x,current.y+current.textRise);if(fontDirection>0){ctx.scale(textHScale,-1);}else {ctx.scale(textHScale,1);}let patternTransform;if(current.patternFill){ctx.save();const pattern=current.fillColor.getPattern(ctx,this,(0, _display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL);patternTransform=(0, _display_utils.getCurrentTransform)(ctx);ctx.restore();ctx.fillStyle=pattern;}let lineWidth=current.lineWidth;const scale=current.textMatrixScale;if(scale===0||lineWidth===0){const fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){lineWidth=this.getSinglePixelWidth();}}else {lineWidth/=scale;}if(fontSizeScale!==1.0){ctx.scale(fontSizeScale,fontSizeScale);lineWidth/=fontSizeScale;}ctx.lineWidth=lineWidth;if(font.isInvalidPDFjsFont){const chars=[];let width=0;for(const glyph of glyphs){chars.push(glyph.unicode);width+=glyph.width;}ctx.fillText(chars.join(""),0,0);current.x+=width*widthAdvanceScale*textHScale;ctx.restore();this.compose();return undefined;}let x=0,i;for(i=0;i<glyphsLength;++i){const glyph=glyphs[i];if(typeof glyph==="number"){x+=spacingDir*glyph*fontSize/1000;continue;}let restoreNeeded=false;const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const character=glyph.fontChar;const accent=glyph.accent;let scaledX,scaledY;let width=glyph.width;if(vertical){const vmetric=glyph.vmetric||defaultVMetrics;const vx=-(glyph.vmetric?vmetric[1]:width*0.5)*widthAdvanceScale;const vy=vmetric[2]*widthAdvanceScale;width=vmetric?-vmetric[0]:width;scaledX=vx/fontSizeScale;scaledY=(x+vy)/fontSizeScale;}else {scaledX=x/fontSizeScale;scaledY=0;}if(font.remeasure&&width>0){const measuredWidth=ctx.measureText(character).width*1000/fontSize*fontSizeScale;if(width<measuredWidth&&this.isFontSubpixelAAEnabled){const characterScaleX=width/measuredWidth;restoreNeeded=true;ctx.save();ctx.scale(characterScaleX,1);scaledX/=characterScaleX;}else if(width!==measuredWidth){scaledX+=(width-measuredWidth)/2000*fontSize/fontSizeScale;}}if(this.contentVisible&&(glyph.isInFont||font.missingFile)){if(simpleFillText&&!accent){ctx.fillText(character,scaledX,scaledY);}else {this.paintChar(character,scaledX,scaledY,patternTransform);if(accent){const scaledAccentX=scaledX+fontSize*accent.offset.x/fontSizeScale;const scaledAccentY=scaledY-fontSize*accent.offset.y/fontSizeScale;this.paintChar(accent.fontChar,scaledAccentX,scaledAccentY,patternTransform);}}}let charWidth;if(vertical){charWidth=width*widthAdvanceScale-spacing*fontDirection;}else {charWidth=width*widthAdvanceScale+spacing*fontDirection;}x+=charWidth;if(restoreNeeded){ctx.restore();}}if(vertical){current.y-=x;}else {current.x+=x*textHScale;}ctx.restore();this.compose();return undefined;}showType3Text(glyphs){const ctx=this.ctx;const current=this.current;const font=current.font;const fontSize=current.fontSize;const fontDirection=current.fontDirection;const spacingDir=font.vertical?1:-1;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const textHScale=current.textHScale*fontDirection;const fontMatrix=current.fontMatrix||_util.FONT_IDENTITY_MATRIX;const glyphsLength=glyphs.length;const isTextInvisible=current.textRenderingMode===_util.TextRenderingMode.INVISIBLE;let i,glyph,width,spacingLength;if(isTextInvisible||fontSize===0){return;}this._cachedScaleForStroking=null;this._cachedGetSinglePixelWidth=null;ctx.save();ctx.transform(...current.textMatrix);ctx.translate(current.x,current.y);ctx.scale(textHScale,fontDirection);for(i=0;i<glyphsLength;++i){glyph=glyphs[i];if(typeof glyph==="number"){spacingLength=spacingDir*glyph*fontSize/1000;this.ctx.translate(spacingLength,0);current.x+=spacingLength*textHScale;continue;}const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const operatorList=font.charProcOperatorList[glyph.operatorListId];if(!operatorList){(0, _util.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);continue;}if(this.contentVisible){this.processingType3=glyph;this.save();ctx.scale(fontSize,fontSize);ctx.transform(...fontMatrix);this.executeOperatorList(operatorList);this.restore();}const transformed=_util.Util.applyTransform([glyph.width,0],fontMatrix);width=transformed[0]*fontSize+spacing;ctx.translate(width,0);current.x+=width*textHScale;}ctx.restore();this.processingType3=null;}setCharWidth(xWidth,yWidth){}setCharWidthAndBounds(xWidth,yWidth,llx,lly,urx,ury){this.ctx.rect(llx,lly,urx-llx,ury-lly);this.ctx.clip();this.endPath();}getColorN_Pattern(IR){let pattern;if(IR[0]==="TilingPattern"){const color=IR[1];const baseTransform=this.baseTransform||(0, _display_utils.getCurrentTransform)(this.ctx);const canvasGraphicsFactory={createCanvasGraphics:ctx=>{return new CanvasGraphics(ctx,this.commonObjs,this.objs,this.canvasFactory,{optionalContentConfig:this.optionalContentConfig,markedContentStack:this.markedContentStack});}};pattern=new _pattern_helper.TilingPattern(IR,color,this.ctx,canvasGraphicsFactory,baseTransform);}else {pattern=this._getPattern(IR[1],IR[2]);}return pattern;}setStrokeColorN(){this.current.strokeColor=this.getColorN_Pattern(arguments);}setFillColorN(){this.current.fillColor=this.getColorN_Pattern(arguments);this.current.patternFill=true;}setStrokeRGBColor(r,g,b){const color=this.selectColor?.(r,g,b)||_util.Util.makeHexColor(r,g,b);this.ctx.strokeStyle=color;this.current.strokeColor=color;}setFillRGBColor(r,g,b){const color=this.selectColor?.(r,g,b)||_util.Util.makeHexColor(r,g,b);this.ctx.fillStyle=color;this.current.fillColor=color;this.current.patternFill=false;}_getPattern(objId,matrix=null){let pattern;if(this.cachedPatterns.has(objId)){pattern=this.cachedPatterns.get(objId);}else {pattern=(0, _pattern_helper.getShadingPattern)(this.objs.get(objId));this.cachedPatterns.set(objId,pattern);}if(matrix){pattern.matrix=matrix;}return pattern;}shadingFill(objId){if(!this.contentVisible){return;}const ctx=this.ctx;this.save();const pattern=this._getPattern(objId);ctx.fillStyle=pattern.getPattern(ctx,this,(0, _display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.SHADING);const inv=(0, _display_utils.getCurrentTransformInverse)(ctx);if(inv){const canvas=ctx.canvas;const width=canvas.width;const height=canvas.height;const bl=_util.Util.applyTransform([0,0],inv);const br=_util.Util.applyTransform([0,height],inv);const ul=_util.Util.applyTransform([width,0],inv);const ur=_util.Util.applyTransform([width,height],inv);const x0=Math.min(bl[0],br[0],ul[0],ur[0]);const y0=Math.min(bl[1],br[1],ul[1],ur[1]);const x1=Math.max(bl[0],br[0],ul[0],ur[0]);const y1=Math.max(bl[1],br[1],ul[1],ur[1]);this.ctx.fillRect(x0,y0,x1-x0,y1-y0);}else {this.ctx.fillRect(-1e10,-1e10,2e10,2e10);}this.compose(this.current.getClippedPathBoundingBox());this.restore();}beginInlineImage(){(0, _util.unreachable)("Should not call beginInlineImage");}beginImageData(){(0, _util.unreachable)("Should not call beginImageData");}paintFormXObjectBegin(matrix,bbox){if(!this.contentVisible){return;}this.save();this.baseTransformStack.push(this.baseTransform);if(Array.isArray(matrix)&&matrix.length===6){this.transform(...matrix);}this.baseTransform=(0, _display_utils.getCurrentTransform)(this.ctx);if(bbox){const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];this.ctx.rect(bbox[0],bbox[1],width,height);this.current.updateRectMinMax((0, _display_utils.getCurrentTransform)(this.ctx),bbox);this.clip();this.endPath();}}paintFormXObjectEnd(){if(!this.contentVisible){return;}this.restore();this.baseTransform=this.baseTransformStack.pop();}beginGroup(group){if(!this.contentVisible){return;}this.save();if(this.inSMaskMode){this.endSMaskMode();this.current.activeSMask=null;}const currentCtx=this.ctx;if(!group.isolated){(0, _util.info)("TODO: Support non-isolated groups.");}if(group.knockout){(0, _util.warn)("Knockout groups not supported.");}const currentTransform=(0, _display_utils.getCurrentTransform)(currentCtx);if(group.matrix){currentCtx.transform(...group.matrix);}if(!group.bbox){throw new Error("Bounding box is required.");}let bounds=_util.Util.getAxialAlignedBoundingBox(group.bbox,(0, _display_utils.getCurrentTransform)(currentCtx));const canvasBounds=[0,0,currentCtx.canvas.width,currentCtx.canvas.height];bounds=_util.Util.intersect(bounds,canvasBounds)||[0,0,0,0];const offsetX=Math.floor(bounds[0]);const offsetY=Math.floor(bounds[1]);let drawnWidth=Math.max(Math.ceil(bounds[2])-offsetX,1);let drawnHeight=Math.max(Math.ceil(bounds[3])-offsetY,1);let scaleX=1,scaleY=1;if(drawnWidth>MAX_GROUP_SIZE){scaleX=drawnWidth/MAX_GROUP_SIZE;drawnWidth=MAX_GROUP_SIZE;}if(drawnHeight>MAX_GROUP_SIZE){scaleY=drawnHeight/MAX_GROUP_SIZE;drawnHeight=MAX_GROUP_SIZE;}this.current.startNewPathAndClipBox([0,0,drawnWidth,drawnHeight]);let cacheId="groupAt"+this.groupLevel;if(group.smask){cacheId+="_smask_"+this.smaskCounter++%2;}const scratchCanvas=this.cachedCanvases.getCanvas(cacheId,drawnWidth,drawnHeight);const groupCtx=scratchCanvas.context;groupCtx.scale(1/scaleX,1/scaleY);groupCtx.translate(-offsetX,-offsetY);groupCtx.transform(...currentTransform);if(group.smask){this.smaskStack.push({canvas:scratchCanvas.canvas,context:groupCtx,offsetX,offsetY,scaleX,scaleY,subtype:group.smask.subtype,backdrop:group.smask.backdrop,transferMap:group.smask.transferMap||null,startTransformInverse:null});}else {currentCtx.setTransform(1,0,0,1,0,0);currentCtx.translate(offsetX,offsetY);currentCtx.scale(scaleX,scaleY);currentCtx.save();}copyCtxState(currentCtx,groupCtx);this.ctx=groupCtx;this.setGState([["BM","source-over"],["ca",1],["CA",1]]);this.groupStack.push(currentCtx);this.groupLevel++;}endGroup(group){if(!this.contentVisible){return;}this.groupLevel--;const groupCtx=this.ctx;const ctx=this.groupStack.pop();this.ctx=ctx;this.ctx.imageSmoothingEnabled=false;if(group.smask){this.tempSMask=this.smaskStack.pop();this.restore();}else {this.ctx.restore();const currentMtx=(0, _display_utils.getCurrentTransform)(this.ctx);this.restore();this.ctx.save();this.ctx.setTransform(...currentMtx);const dirtyBox=_util.Util.getAxialAlignedBoundingBox([0,0,groupCtx.canvas.width,groupCtx.canvas.height],currentMtx);this.ctx.drawImage(groupCtx.canvas,0,0);this.ctx.restore();this.compose(dirtyBox);}}beginAnnotation(id,rect,transform,matrix,hasOwnCanvas){this.#restoreInitialState();resetCtxToDefault(this.ctx,this.foregroundColor);this.ctx.save();this.save();if(this.baseTransform){this.ctx.setTransform(...this.baseTransform);}if(Array.isArray(rect)&&rect.length===4){const width=rect[2]-rect[0];const height=rect[3]-rect[1];if(hasOwnCanvas&&this.annotationCanvasMap){transform=transform.slice();transform[4]-=rect[0];transform[5]-=rect[1];rect=rect.slice();rect[0]=rect[1]=0;rect[2]=width;rect[3]=height;const[scaleX,scaleY]=_util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(this.ctx));const{viewportScale}=this;const canvasWidth=Math.ceil(width*this.outputScaleX*viewportScale);const canvasHeight=Math.ceil(height*this.outputScaleY*viewportScale);this.annotationCanvas=this.canvasFactory.create(canvasWidth,canvasHeight);const{canvas,context}=this.annotationCanvas;this.annotationCanvasMap.set(id,canvas);this.annotationCanvas.savedCtx=this.ctx;this.ctx=context;this.ctx.setTransform(scaleX,0,0,-scaleY,0,height*scaleY);resetCtxToDefault(this.ctx,this.foregroundColor);}else {resetCtxToDefault(this.ctx,this.foregroundColor);this.ctx.rect(rect[0],rect[1],width,height);this.ctx.clip();this.endPath();}}this.current=new CanvasExtraState(this.ctx.canvas.width,this.ctx.canvas.height);this.transform(...transform);this.transform(...matrix);}endAnnotation(){if(this.annotationCanvas){this.ctx=this.annotationCanvas.savedCtx;delete this.annotationCanvas.savedCtx;delete this.annotationCanvas;}}paintImageMaskXObject(img){if(!this.contentVisible){return;}const count=img.count;img=this.getObject(img.data,img);img.count=count;const ctx=this.ctx;const glyph=this.processingType3;if(glyph){if(glyph.compiled===undefined){glyph.compiled=compileType3Glyph(img);}if(glyph.compiled){glyph.compiled(ctx);return;}}const mask=this._createMaskCanvas(img);const maskCanvas=mask.canvas;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(maskCanvas,mask.offsetX,mask.offsetY);ctx.restore();this.compose();}paintImageMaskXObjectRepeat(img,scaleX,skewX=0,skewY=0,scaleY,positions){if(!this.contentVisible){return;}img=this.getObject(img.data,img);const ctx=this.ctx;ctx.save();const currentTransform=(0, _display_utils.getCurrentTransform)(ctx);ctx.transform(scaleX,skewX,skewY,scaleY,0,0);const mask=this._createMaskCanvas(img);ctx.setTransform(1,0,0,1,mask.offsetX-currentTransform[4],mask.offsetY-currentTransform[5]);for(let i=0,ii=positions.length;i<ii;i+=2){const trans=_util.Util.transform(currentTransform,[scaleX,skewX,skewY,scaleY,positions[i],positions[i+1]]);const[x,y]=_util.Util.applyTransform([0,0],trans);ctx.drawImage(mask.canvas,x,y);}ctx.restore();this.compose();}paintImageMaskXObjectGroup(images){if(!this.contentVisible){return;}const ctx=this.ctx;const fillColor=this.current.fillColor;const isPatternFill=this.current.patternFill;for(const image of images){const{data,width,height,transform}=image;const maskCanvas=this.cachedCanvases.getCanvas("maskCanvas",width,height);const maskCtx=maskCanvas.context;maskCtx.save();const img=this.getObject(data,image);putBinaryImageMask(maskCtx,img);maskCtx.globalCompositeOperation="source-in";maskCtx.fillStyle=isPatternFill?fillColor.getPattern(maskCtx,this,(0, _display_utils.getCurrentTransformInverse)(ctx),_pattern_helper.PathType.FILL):fillColor;maskCtx.fillRect(0,0,width,height);maskCtx.restore();ctx.save();ctx.transform(...transform);ctx.scale(1,-1);drawImageAtIntegerCoords(ctx,maskCanvas.canvas,0,0,width,height,0,-1,1,1);ctx.restore();}this.compose();}paintImageXObject(objId){if(!this.contentVisible){return;}const imgData=this.getObject(objId);if(!imgData){(0, _util.warn)("Dependent image isn't ready yet");return;}this.paintInlineImageXObject(imgData);}paintImageXObjectRepeat(objId,scaleX,scaleY,positions){if(!this.contentVisible){return;}const imgData=this.getObject(objId);if(!imgData){(0, _util.warn)("Dependent image isn't ready yet");return;}const width=imgData.width;const height=imgData.height;const map=[];for(let i=0,ii=positions.length;i<ii;i+=2){map.push({transform:[scaleX,0,0,scaleY,positions[i],positions[i+1]],x:0,y:0,w:width,h:height});}this.paintInlineImageXObjectGroup(imgData,map);}paintInlineImageXObject(imgData){if(!this.contentVisible){return;}const width=imgData.width;const height=imgData.height;const ctx=this.ctx;this.save();ctx.scale(1/width,-1/height);let imgToPaint;if(typeof HTMLElement==="function"&&imgData instanceof HTMLElement||!imgData.data){imgToPaint=imgData;}else {const tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",width,height);const tmpCtx=tmpCanvas.context;putBinaryImageData(tmpCtx,imgData,this.current.transferMaps);imgToPaint=tmpCanvas.canvas;}const scaled=this._scaleImage(imgToPaint,(0, _display_utils.getCurrentTransformInverse)(ctx));ctx.imageSmoothingEnabled=getImageSmoothingEnabled((0, _display_utils.getCurrentTransform)(ctx),imgData.interpolate);drawImageAtIntegerCoords(ctx,scaled.img,0,0,scaled.paintWidth,scaled.paintHeight,0,-height,width,height);this.compose();this.restore();}paintInlineImageXObjectGroup(imgData,map){if(!this.contentVisible){return;}const ctx=this.ctx;const w=imgData.width;const h=imgData.height;const tmpCanvas=this.cachedCanvases.getCanvas("inlineImage",w,h);const tmpCtx=tmpCanvas.context;putBinaryImageData(tmpCtx,imgData,this.current.transferMaps);for(const entry of map){ctx.save();ctx.transform(...entry.transform);ctx.scale(1,-1);drawImageAtIntegerCoords(ctx,tmpCanvas.canvas,entry.x,entry.y,entry.w,entry.h,0,-1,1,1);ctx.restore();}this.compose();}paintSolidColorImageMask(){if(!this.contentVisible){return;}this.ctx.fillRect(0,0,1,1);this.compose();}markPoint(tag){}markPointProps(tag,properties){}beginMarkedContent(tag){this.markedContentStack.push({visible:true});}beginMarkedContentProps(tag,properties){if(tag==="OC"){this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(properties)});}else {this.markedContentStack.push({visible:true});}this.contentVisible=this.isContentVisible();}endMarkedContent(){this.markedContentStack.pop();this.contentVisible=this.isContentVisible();}beginCompat(){}endCompat(){}consumePath(clipBox){const isEmpty=this.current.isEmptyClip();if(this.pendingClip){this.current.updateClipFromPath();}if(!this.pendingClip){this.compose(clipBox);}const ctx=this.ctx;if(this.pendingClip){if(!isEmpty){if(this.pendingClip===EO_CLIP){ctx.clip("evenodd");}else {ctx.clip();}}this.pendingClip=null;}this.current.startNewPathAndClipBox(this.current.clipBox);ctx.beginPath();}getSinglePixelWidth(){if(!this._cachedGetSinglePixelWidth){const m=(0, _display_utils.getCurrentTransform)(this.ctx);if(m[1]===0&&m[2]===0){this._cachedGetSinglePixelWidth=1/Math.min(Math.abs(m[0]),Math.abs(m[3]));}else {const absDet=Math.abs(m[0]*m[3]-m[2]*m[1]);const normX=Math.hypot(m[0],m[2]);const normY=Math.hypot(m[1],m[3]);this._cachedGetSinglePixelWidth=Math.max(normX,normY)/absDet;}}return this._cachedGetSinglePixelWidth;}getScaleForStroking(){if(!this._cachedScaleForStroking){const{lineWidth}=this.current;const m=(0, _display_utils.getCurrentTransform)(this.ctx);let scaleX,scaleY;if(m[1]===0&&m[2]===0){const normX=Math.abs(m[0]);const normY=Math.abs(m[3]);if(lineWidth===0){scaleX=1/normX;scaleY=1/normY;}else {const scaledXLineWidth=normX*lineWidth;const scaledYLineWidth=normY*lineWidth;scaleX=scaledXLineWidth<1?1/scaledXLineWidth:1;scaleY=scaledYLineWidth<1?1/scaledYLineWidth:1;}}else {const absDet=Math.abs(m[0]*m[3]-m[2]*m[1]);const normX=Math.hypot(m[0],m[1]);const normY=Math.hypot(m[2],m[3]);if(lineWidth===0){scaleX=normY/absDet;scaleY=normX/absDet;}else {const baseArea=lineWidth*absDet;scaleX=normY>baseArea?normY/baseArea:1;scaleY=normX>baseArea?normX/baseArea:1;}}this._cachedScaleForStroking=[scaleX,scaleY];}return this._cachedScaleForStroking;}rescaleAndStroke(saveRestore){const{ctx}=this;const{lineWidth}=this.current;const[scaleX,scaleY]=this.getScaleForStroking();ctx.lineWidth=lineWidth||1;if(scaleX===1&&scaleY===1){ctx.stroke();return;}let savedMatrix,savedDashes,savedDashOffset;if(saveRestore){savedMatrix=(0, _display_utils.getCurrentTransform)(ctx);savedDashes=ctx.getLineDash().slice();savedDashOffset=ctx.lineDashOffset;}ctx.scale(scaleX,scaleY);const scale=Math.max(scaleX,scaleY);ctx.setLineDash(ctx.getLineDash().map(x=>x/scale));ctx.lineDashOffset/=scale;ctx.stroke();if(saveRestore){ctx.setTransform(...savedMatrix);ctx.setLineDash(savedDashes);ctx.lineDashOffset=savedDashOffset;}}isContentVisible(){for(let i=this.markedContentStack.length-1;i>=0;i--){if(!this.markedContentStack[i].visible){return false;}}return true;}}exports.CanvasGraphics=CanvasGraphics;for(const op in _util.OPS){if(CanvasGraphics.prototype[op]!==undefined){CanvasGraphics.prototype[_util.OPS[op]]=CanvasGraphics.prototype[op];}}/***/},/* 12 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.TilingPattern=exports.PathType=void 0;exports.getShadingPattern=getShadingPattern;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);const PathType={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"};exports.PathType=PathType;function applyBoundingBox(ctx,bbox){if(!bbox){return;}const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];const region=new Path2D();region.rect(bbox[0],bbox[1],width,height);ctx.clip(region);}class BaseShadingPattern{constructor(){if(this.constructor===BaseShadingPattern){(0, _util.unreachable)("Cannot initialize BaseShadingPattern.");}}getPattern(){(0, _util.unreachable)("Abstract method `getPattern` called.");}}class RadialAxialShadingPattern extends BaseShadingPattern{constructor(IR){super();this._type=IR[1];this._bbox=IR[2];this._colorStops=IR[3];this._p0=IR[4];this._p1=IR[5];this._r0=IR[6];this._r1=IR[7];this.matrix=null;}_createGradient(ctx){let grad;if(this._type==="axial"){grad=ctx.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]);}else if(this._type==="radial"){grad=ctx.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1);}for(const colorStop of this._colorStops){grad.addColorStop(colorStop[0],colorStop[1]);}return grad;}getPattern(ctx,owner,inverse,pathType){let pattern;if(pathType===PathType.STROKE||pathType===PathType.FILL){const ownerBBox=owner.current.getClippedPathBoundingBox(pathType,(0, _display_utils.getCurrentTransform)(ctx))||[0,0,0,0];const width=Math.ceil(ownerBBox[2]-ownerBBox[0])||1;const height=Math.ceil(ownerBBox[3]-ownerBBox[1])||1;const tmpCanvas=owner.cachedCanvases.getCanvas("pattern",width,height,true);const tmpCtx=tmpCanvas.context;tmpCtx.clearRect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);tmpCtx.beginPath();tmpCtx.rect(0,0,tmpCtx.canvas.width,tmpCtx.canvas.height);tmpCtx.translate(-ownerBBox[0],-ownerBBox[1]);inverse=_util.Util.transform(inverse,[1,0,0,1,ownerBBox[0],ownerBBox[1]]);tmpCtx.transform(...owner.baseTransform);if(this.matrix){tmpCtx.transform(...this.matrix);}applyBoundingBox(tmpCtx,this._bbox);tmpCtx.fillStyle=this._createGradient(tmpCtx);tmpCtx.fill();pattern=ctx.createPattern(tmpCanvas.canvas,"no-repeat");const domMatrix=new DOMMatrix(inverse);pattern.setTransform(domMatrix);}else {applyBoundingBox(ctx,this._bbox);pattern=this._createGradient(ctx);}return pattern;}}function drawTriangle(data,context,p1,p2,p3,c1,c2,c3){const coords=context.coords,colors=context.colors;const bytes=data.data,rowSize=data.width*4;let tmp;if(coords[p1+1]>coords[p2+1]){tmp=p1;p1=p2;p2=tmp;tmp=c1;c1=c2;c2=tmp;}if(coords[p2+1]>coords[p3+1]){tmp=p2;p2=p3;p3=tmp;tmp=c2;c2=c3;c3=tmp;}if(coords[p1+1]>coords[p2+1]){tmp=p1;p1=p2;p2=tmp;tmp=c1;c1=c2;c2=tmp;}const x1=(coords[p1]+context.offsetX)*context.scaleX;const y1=(coords[p1+1]+context.offsetY)*context.scaleY;const x2=(coords[p2]+context.offsetX)*context.scaleX;const y2=(coords[p2+1]+context.offsetY)*context.scaleY;const x3=(coords[p3]+context.offsetX)*context.scaleX;const y3=(coords[p3+1]+context.offsetY)*context.scaleY;if(y1>=y3){return;}const c1r=colors[c1],c1g=colors[c1+1],c1b=colors[c1+2];const c2r=colors[c2],c2g=colors[c2+1],c2b=colors[c2+2];const c3r=colors[c3],c3g=colors[c3+1],c3b=colors[c3+2];const minY=Math.round(y1),maxY=Math.round(y3);let xa,car,cag,cab;let xb,cbr,cbg,cbb;for(let y=minY;y<=maxY;y++){if(y<y2){let k;if(y<y1){k=0;}else {k=(y1-y)/(y1-y2);}xa=x1-(x1-x2)*k;car=c1r-(c1r-c2r)*k;cag=c1g-(c1g-c2g)*k;cab=c1b-(c1b-c2b)*k;}else {let k;if(y>y3){k=1;}else if(y2===y3){k=0;}else {k=(y2-y)/(y2-y3);}xa=x2-(x2-x3)*k;car=c2r-(c2r-c3r)*k;cag=c2g-(c2g-c3g)*k;cab=c2b-(c2b-c3b)*k;}let k;if(y<y1){k=0;}else if(y>y3){k=1;}else {k=(y1-y)/(y1-y3);}xb=x1-(x1-x3)*k;cbr=c1r-(c1r-c3r)*k;cbg=c1g-(c1g-c3g)*k;cbb=c1b-(c1b-c3b)*k;const x1_=Math.round(Math.min(xa,xb));const x2_=Math.round(Math.max(xa,xb));let j=rowSize*y+x1_*4;for(let x=x1_;x<=x2_;x++){k=(xa-x)/(xa-xb);if(k<0){k=0;}else if(k>1){k=1;}bytes[j++]=car-(car-cbr)*k|0;bytes[j++]=cag-(cag-cbg)*k|0;bytes[j++]=cab-(cab-cbb)*k|0;bytes[j++]=255;}}}function drawFigure(data,figure,context){const ps=figure.coords;const cs=figure.colors;let i,ii;switch(figure.type){case"lattice":const verticesPerRow=figure.verticesPerRow;const rows=Math.floor(ps.length/verticesPerRow)-1;const cols=verticesPerRow-1;for(i=0;i<rows;i++){let q=i*verticesPerRow;for(let j=0;j<cols;j++,q++){drawTriangle(data,context,ps[q],ps[q+1],ps[q+verticesPerRow],cs[q],cs[q+1],cs[q+verticesPerRow]);drawTriangle(data,context,ps[q+verticesPerRow+1],ps[q+1],ps[q+verticesPerRow],cs[q+verticesPerRow+1],cs[q+1],cs[q+verticesPerRow]);}}break;case"triangles":for(i=0,ii=ps.length;i<ii;i+=3){drawTriangle(data,context,ps[i],ps[i+1],ps[i+2],cs[i],cs[i+1],cs[i+2]);}break;default:throw new Error("illegal figure");}}class MeshShadingPattern extends BaseShadingPattern{constructor(IR){super();this._coords=IR[2];this._colors=IR[3];this._figures=IR[4];this._bounds=IR[5];this._bbox=IR[7];this._background=IR[8];this.matrix=null;}_createMeshCanvas(combinedScale,backgroundColor,cachedCanvases){const EXPECTED_SCALE=1.1;const MAX_PATTERN_SIZE=3000;const BORDER_SIZE=2;const offsetX=Math.floor(this._bounds[0]);const offsetY=Math.floor(this._bounds[1]);const boundsWidth=Math.ceil(this._bounds[2])-offsetX;const boundsHeight=Math.ceil(this._bounds[3])-offsetY;const width=Math.min(Math.ceil(Math.abs(boundsWidth*combinedScale[0]*EXPECTED_SCALE)),MAX_PATTERN_SIZE);const height=Math.min(Math.ceil(Math.abs(boundsHeight*combinedScale[1]*EXPECTED_SCALE)),MAX_PATTERN_SIZE);const scaleX=boundsWidth/width;const scaleY=boundsHeight/height;const context={coords:this._coords,colors:this._colors,offsetX:-offsetX,offsetY:-offsetY,scaleX:1/scaleX,scaleY:1/scaleY};const paddedWidth=width+BORDER_SIZE*2;const paddedHeight=height+BORDER_SIZE*2;const tmpCanvas=cachedCanvases.getCanvas("mesh",paddedWidth,paddedHeight,false);const tmpCtx=tmpCanvas.context;const data=tmpCtx.createImageData(width,height);if(backgroundColor){const bytes=data.data;for(let i=0,ii=bytes.length;i<ii;i+=4){bytes[i]=backgroundColor[0];bytes[i+1]=backgroundColor[1];bytes[i+2]=backgroundColor[2];bytes[i+3]=255;}}for(const figure of this._figures){drawFigure(data,figure,context);}tmpCtx.putImageData(data,BORDER_SIZE,BORDER_SIZE);const canvas=tmpCanvas.canvas;return {canvas,offsetX:offsetX-BORDER_SIZE*scaleX,offsetY:offsetY-BORDER_SIZE*scaleY,scaleX,scaleY};}getPattern(ctx,owner,inverse,pathType){applyBoundingBox(ctx,this._bbox);let scale;if(pathType===PathType.SHADING){scale=_util.Util.singularValueDecompose2dScale((0, _display_utils.getCurrentTransform)(ctx));}else {scale=_util.Util.singularValueDecompose2dScale(owner.baseTransform);if(this.matrix){const matrixScale=_util.Util.singularValueDecompose2dScale(this.matrix);scale=[scale[0]*matrixScale[0],scale[1]*matrixScale[1]];}}const temporaryPatternCanvas=this._createMeshCanvas(scale,pathType===PathType.SHADING?null:this._background,owner.cachedCanvases);if(pathType!==PathType.SHADING){ctx.setTransform(...owner.baseTransform);if(this.matrix){ctx.transform(...this.matrix);}}ctx.translate(temporaryPatternCanvas.offsetX,temporaryPatternCanvas.offsetY);ctx.scale(temporaryPatternCanvas.scaleX,temporaryPatternCanvas.scaleY);return ctx.createPattern(temporaryPatternCanvas.canvas,"no-repeat");}}class DummyShadingPattern extends BaseShadingPattern{getPattern(){return "hotpink";}}function getShadingPattern(IR){switch(IR[0]){case"RadialAxial":return new RadialAxialShadingPattern(IR);case"Mesh":return new MeshShadingPattern(IR);case"Dummy":return new DummyShadingPattern();}throw new Error(`Unknown IR type: ${IR[0]}`);}const PaintType={COLORED:1,UNCOLORED:2};class TilingPattern{static get MAX_PATTERN_SIZE(){return (0, _util.shadow)(this,"MAX_PATTERN_SIZE",3000);}constructor(IR,color,ctx,canvasGraphicsFactory,baseTransform){this.operatorList=IR[2];this.matrix=IR[3]||[1,0,0,1,0,0];this.bbox=IR[4];this.xstep=IR[5];this.ystep=IR[6];this.paintType=IR[7];this.tilingType=IR[8];this.color=color;this.ctx=ctx;this.canvasGraphicsFactory=canvasGraphicsFactory;this.baseTransform=baseTransform;}createPatternCanvas(owner){const operatorList=this.operatorList;const bbox=this.bbox;const xstep=this.xstep;const ystep=this.ystep;const paintType=this.paintType;const tilingType=this.tilingType;const color=this.color;const canvasGraphicsFactory=this.canvasGraphicsFactory;(0, _util.info)("TilingType: "+tilingType);const x0=bbox[0],y0=bbox[1],x1=bbox[2],y1=bbox[3];const matrixScale=_util.Util.singularValueDecompose2dScale(this.matrix);const curMatrixScale=_util.Util.singularValueDecompose2dScale(this.baseTransform);const combinedScale=[matrixScale[0]*curMatrixScale[0],matrixScale[1]*curMatrixScale[1]];const dimx=this.getSizeAndScale(xstep,this.ctx.canvas.width,combinedScale[0]);const dimy=this.getSizeAndScale(ystep,this.ctx.canvas.height,combinedScale[1]);const tmpCanvas=owner.cachedCanvases.getCanvas("pattern",dimx.size,dimy.size,true);const tmpCtx=tmpCanvas.context;const graphics=canvasGraphicsFactory.createCanvasGraphics(tmpCtx);graphics.groupLevel=owner.groupLevel;this.setFillAndStrokeStyleToContext(graphics,paintType,color);let adjustedX0=x0;let adjustedY0=y0;let adjustedX1=x1;let adjustedY1=y1;if(x0<0){adjustedX0=0;adjustedX1+=Math.abs(x0);}if(y0<0){adjustedY0=0;adjustedY1+=Math.abs(y0);}tmpCtx.translate(-(dimx.scale*adjustedX0),-(dimy.scale*adjustedY0));graphics.transform(dimx.scale,0,0,dimy.scale,0,0);tmpCtx.save();this.clipBbox(graphics,adjustedX0,adjustedY0,adjustedX1,adjustedY1);graphics.baseTransform=(0, _display_utils.getCurrentTransform)(graphics.ctx);graphics.executeOperatorList(operatorList);graphics.endDrawing();return {canvas:tmpCanvas.canvas,scaleX:dimx.scale,scaleY:dimy.scale,offsetX:adjustedX0,offsetY:adjustedY0};}getSizeAndScale(step,realOutputSize,scale){step=Math.abs(step);const maxSize=Math.max(TilingPattern.MAX_PATTERN_SIZE,realOutputSize);let size=Math.ceil(step*scale);if(size>=maxSize){size=maxSize;}else {scale=size/step;}return {scale,size};}clipBbox(graphics,x0,y0,x1,y1){const bboxWidth=x1-x0;const bboxHeight=y1-y0;graphics.ctx.rect(x0,y0,bboxWidth,bboxHeight);graphics.current.updateRectMinMax((0, _display_utils.getCurrentTransform)(graphics.ctx),[x0,y0,x1,y1]);graphics.clip();graphics.endPath();}setFillAndStrokeStyleToContext(graphics,paintType,color){const context=graphics.ctx,current=graphics.current;switch(paintType){case PaintType.COLORED:const ctx=this.ctx;context.fillStyle=ctx.fillStyle;context.strokeStyle=ctx.strokeStyle;current.fillColor=ctx.fillStyle;current.strokeColor=ctx.strokeStyle;break;case PaintType.UNCOLORED:const cssColor=_util.Util.makeHexColor(color[0],color[1],color[2]);context.fillStyle=cssColor;context.strokeStyle=cssColor;current.fillColor=cssColor;current.strokeColor=cssColor;break;default:throw new _util.FormatError(`Unsupported paint type: ${paintType}`);}}getPattern(ctx,owner,inverse,pathType){let matrix=inverse;if(pathType!==PathType.SHADING){matrix=_util.Util.transform(matrix,owner.baseTransform);if(this.matrix){matrix=_util.Util.transform(matrix,this.matrix);}}const temporaryPatternCanvas=this.createPatternCanvas(owner);let domMatrix=new DOMMatrix(matrix);domMatrix=domMatrix.translate(temporaryPatternCanvas.offsetX,temporaryPatternCanvas.offsetY);domMatrix=domMatrix.scale(1/temporaryPatternCanvas.scaleX,1/temporaryPatternCanvas.scaleY);const pattern=ctx.createPattern(temporaryPatternCanvas.canvas,"repeat");pattern.setTransform(domMatrix);return pattern;}}exports.TilingPattern=TilingPattern;/***/},/* 13 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.applyMaskImageData=applyMaskImageData;var _util=__w_pdfjs_require__(1);function applyMaskImageData({src,srcPos=0,dest,destPos=0,width,height,inverseDecode=false}){const opaque=_util.FeatureTest.isLittleEndian?0xff000000:0x000000ff;const[zeroMapping,oneMapping]=!inverseDecode?[opaque,0]:[0,opaque];const widthInSource=width>>3;const widthRemainder=width&7;const srcLength=src.length;dest=new Uint32Array(dest.buffer);for(let i=0;i<height;i++){for(const max=srcPos+widthInSource;srcPos<max;srcPos++){const elem=srcPos<srcLength?src[srcPos]:255;dest[destPos++]=elem&0b10000000?oneMapping:zeroMapping;dest[destPos++]=elem&0b1000000?oneMapping:zeroMapping;dest[destPos++]=elem&0b100000?oneMapping:zeroMapping;dest[destPos++]=elem&0b10000?oneMapping:zeroMapping;dest[destPos++]=elem&0b1000?oneMapping:zeroMapping;dest[destPos++]=elem&0b100?oneMapping:zeroMapping;dest[destPos++]=elem&0b10?oneMapping:zeroMapping;dest[destPos++]=elem&0b1?oneMapping:zeroMapping;}if(widthRemainder===0){continue;}const elem=srcPos<srcLength?src[srcPos++]:255;for(let j=0;j<widthRemainder;j++){dest[destPos++]=elem&1<<7-j?oneMapping:zeroMapping;}}return {srcPos,destPos};}/***/},/* 14 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.GlobalWorkerOptions=void 0;const GlobalWorkerOptions=Object.create(null);exports.GlobalWorkerOptions=GlobalWorkerOptions;GlobalWorkerOptions.workerPort=null;GlobalWorkerOptions.workerSrc="";/***/},/* 15 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.MessageHandler=void 0;var _util=__w_pdfjs_require__(1);const CallbackKind={UNKNOWN:0,DATA:1,ERROR:2};const StreamKind={UNKNOWN:0,CANCEL:1,CANCEL_COMPLETE:2,CLOSE:3,ENQUEUE:4,ERROR:5,PULL:6,PULL_COMPLETE:7,START_COMPLETE:8};function wrapReason(reason){if(!(reason instanceof Error||typeof reason==="object"&&reason!==null)){(0, _util.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');}switch(reason.name){case"AbortException":return new _util.AbortException(reason.message);case"MissingPDFException":return new _util.MissingPDFException(reason.message);case"PasswordException":return new _util.PasswordException(reason.message,reason.code);case"UnexpectedResponseException":return new _util.UnexpectedResponseException(reason.message,reason.status);case"UnknownErrorException":return new _util.UnknownErrorException(reason.message,reason.details);default:return new _util.UnknownErrorException(reason.message,reason.toString());}}class MessageHandler{constructor(sourceName,targetName,comObj){this.sourceName=sourceName;this.targetName=targetName;this.comObj=comObj;this.callbackId=1;this.streamId=1;this.streamSinks=Object.create(null);this.streamControllers=Object.create(null);this.callbackCapabilities=Object.create(null);this.actionHandler=Object.create(null);this._onComObjOnMessage=event=>{const data=event.data;if(data.targetName!==this.sourceName){return;}if(data.stream){this._processStreamMessage(data);return;}if(data.callback){const callbackId=data.callbackId;const capability=this.callbackCapabilities[callbackId];if(!capability){throw new Error(`Cannot resolve callback ${callbackId}`);}delete this.callbackCapabilities[callbackId];if(data.callback===CallbackKind.DATA){capability.resolve(data.data);}else if(data.callback===CallbackKind.ERROR){capability.reject(wrapReason(data.reason));}else {throw new Error("Unexpected callback case");}return;}const action=this.actionHandler[data.action];if(!action){throw new Error(`Unknown action from worker: ${data.action}`);}if(data.callbackId){const cbSourceName=this.sourceName;const cbTargetName=data.sourceName;new Promise(function(resolve){resolve(action(data.data));}).then(function(result){comObj.postMessage({sourceName:cbSourceName,targetName:cbTargetName,callback:CallbackKind.DATA,callbackId:data.callbackId,data:result});},function(reason){comObj.postMessage({sourceName:cbSourceName,targetName:cbTargetName,callback:CallbackKind.ERROR,callbackId:data.callbackId,reason:wrapReason(reason)});});return;}if(data.streamId){this._createStreamSink(data);return;}action(data.data);};comObj.addEventListener("message",this._onComObjOnMessage);}on(actionName,handler){const ah=this.actionHandler;if(ah[actionName]){throw new Error(`There is already an actionName called "${actionName}"`);}ah[actionName]=handler;}send(actionName,data,transfers){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:actionName,data},transfers);}sendWithPromise(actionName,data,transfers){const callbackId=this.callbackId++;const capability=(0, _util.createPromiseCapability)();this.callbackCapabilities[callbackId]=capability;try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:actionName,callbackId,data},transfers);}catch(ex){capability.reject(ex);}return capability.promise;}sendWithStream(actionName,data,queueingStrategy,transfers){const streamId=this.streamId++,sourceName=this.sourceName,targetName=this.targetName,comObj=this.comObj;return new ReadableStream({start:controller=>{const startCapability=(0, _util.createPromiseCapability)();this.streamControllers[streamId]={controller,startCall:startCapability,pullCall:null,cancelCall:null,isClosed:false};comObj.postMessage({sourceName,targetName,action:actionName,streamId,data,desiredSize:controller.desiredSize},transfers);return startCapability.promise;},pull:controller=>{const pullCapability=(0, _util.createPromiseCapability)();this.streamControllers[streamId].pullCall=pullCapability;comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL,streamId,desiredSize:controller.desiredSize});return pullCapability.promise;},cancel:reason=>{(0, _util.assert)(reason instanceof Error,"cancel must have a valid reason");const cancelCapability=(0, _util.createPromiseCapability)();this.streamControllers[streamId].cancelCall=cancelCapability;this.streamControllers[streamId].isClosed=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL,streamId,reason:wrapReason(reason)});return cancelCapability.promise;}},queueingStrategy);}_createStreamSink(data){const streamId=data.streamId,sourceName=this.sourceName,targetName=data.sourceName,comObj=this.comObj;const self=this,action=this.actionHandler[data.action];const streamSink={enqueue(chunk,size=1,transfers){if(this.isCancelled){return;}const lastDesiredSize=this.desiredSize;this.desiredSize-=size;if(lastDesiredSize>0&&this.desiredSize<=0){this.sinkCapability=(0, _util.createPromiseCapability)();this.ready=this.sinkCapability.promise;}comObj.postMessage({sourceName,targetName,stream:StreamKind.ENQUEUE,streamId,chunk},transfers);},close(){if(this.isCancelled){return;}this.isCancelled=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.CLOSE,streamId});delete self.streamSinks[streamId];},error(reason){(0, _util.assert)(reason instanceof Error,"error must have a valid reason");if(this.isCancelled){return;}this.isCancelled=true;comObj.postMessage({sourceName,targetName,stream:StreamKind.ERROR,streamId,reason:wrapReason(reason)});},sinkCapability:(0, _util.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:false,desiredSize:data.desiredSize,ready:null};streamSink.sinkCapability.resolve();streamSink.ready=streamSink.sinkCapability.promise;this.streamSinks[streamId]=streamSink;new Promise(function(resolve){resolve(action(data.data,streamSink));}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.START_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.START_COMPLETE,streamId,reason:wrapReason(reason)});});}_processStreamMessage(data){const streamId=data.streamId,sourceName=this.sourceName,targetName=data.sourceName,comObj=this.comObj;const streamController=this.streamControllers[streamId],streamSink=this.streamSinks[streamId];switch(data.stream){case StreamKind.START_COMPLETE:if(data.success){streamController.startCall.resolve();}else {streamController.startCall.reject(wrapReason(data.reason));}break;case StreamKind.PULL_COMPLETE:if(data.success){streamController.pullCall.resolve();}else {streamController.pullCall.reject(wrapReason(data.reason));}break;case StreamKind.PULL:if(!streamSink){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,success:true});break;}if(streamSink.desiredSize<=0&&data.desiredSize>0){streamSink.sinkCapability.resolve();}streamSink.desiredSize=data.desiredSize;new Promise(function(resolve){resolve(streamSink.onPull&&streamSink.onPull());}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.PULL_COMPLETE,streamId,reason:wrapReason(reason)});});break;case StreamKind.ENQUEUE:(0, _util.assert)(streamController,"enqueue should have stream controller");if(streamController.isClosed){break;}streamController.controller.enqueue(data.chunk);break;case StreamKind.CLOSE:(0, _util.assert)(streamController,"close should have stream controller");if(streamController.isClosed){break;}streamController.isClosed=true;streamController.controller.close();this._deleteStreamController(streamController,streamId);break;case StreamKind.ERROR:(0, _util.assert)(streamController,"error should have stream controller");streamController.controller.error(wrapReason(data.reason));this._deleteStreamController(streamController,streamId);break;case StreamKind.CANCEL_COMPLETE:if(data.success){streamController.cancelCall.resolve();}else {streamController.cancelCall.reject(wrapReason(data.reason));}this._deleteStreamController(streamController,streamId);break;case StreamKind.CANCEL:if(!streamSink){break;}new Promise(function(resolve){resolve(streamSink.onCancel&&streamSink.onCancel(wrapReason(data.reason)));}).then(function(){comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL_COMPLETE,streamId,success:true});},function(reason){comObj.postMessage({sourceName,targetName,stream:StreamKind.CANCEL_COMPLETE,streamId,reason:wrapReason(reason)});});streamSink.sinkCapability.reject(wrapReason(data.reason));streamSink.isCancelled=true;delete this.streamSinks[streamId];break;default:throw new Error("Unexpected stream case");}}async _deleteStreamController(streamController,streamId){await Promise.allSettled([streamController.startCall&&streamController.startCall.promise,streamController.pullCall&&streamController.pullCall.promise,streamController.cancelCall&&streamController.cancelCall.promise]);delete this.streamControllers[streamId];}destroy(){this.comObj.removeEventListener("message",this._onComObjOnMessage);}}exports.MessageHandler=MessageHandler;/***/},/* 16 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.Metadata=void 0;var _util=__w_pdfjs_require__(1);class Metadata{#metadataMap;#data;constructor({parsedData,rawData}){this.#metadataMap=parsedData;this.#data=rawData;}getRaw(){return this.#data;}get(name){return this.#metadataMap.get(name)??null;}getAll(){return (0, _util.objectFromMap)(this.#metadataMap);}has(name){return this.#metadataMap.has(name);}}exports.Metadata=Metadata;/***/},/* 17 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.OptionalContentConfig=void 0;var _util=__w_pdfjs_require__(1);var _murmurhash=__w_pdfjs_require__(8);const INTERNAL=Symbol("INTERNAL");class OptionalContentGroup{#visible=true;constructor(name,intent){this.name=name;this.intent=intent;}get visible(){return this.#visible;}_setVisible(internal,visible){if(internal!==INTERNAL){(0, _util.unreachable)("Internal method `_setVisible` called.");}this.#visible=visible;}}class OptionalContentConfig{#cachedGetHash=null;#groups=new Map();#initialHash=null;#order=null;constructor(data){this.name=null;this.creator=null;if(data===null){return;}this.name=data.name;this.creator=data.creator;this.#order=data.order;for(const group of data.groups){this.#groups.set(group.id,new OptionalContentGroup(group.name,group.intent));}if(data.baseState==="OFF"){for(const group of this.#groups.values()){group._setVisible(INTERNAL,false);}}for(const on of data.on){this.#groups.get(on)._setVisible(INTERNAL,true);}for(const off of data.off){this.#groups.get(off)._setVisible(INTERNAL,false);}this.#initialHash=this.getHash();}#evaluateVisibilityExpression(array){const length=array.length;if(length<2){return true;}const operator=array[0];for(let i=1;i<length;i++){const element=array[i];let state;if(Array.isArray(element)){state=this.#evaluateVisibilityExpression(element);}else if(this.#groups.has(element)){state=this.#groups.get(element).visible;}else {(0, _util.warn)(`Optional content group not found: ${element}`);return true;}switch(operator){case"And":if(!state){return false;}break;case"Or":if(state){return true;}break;case"Not":return !state;default:return true;}}return operator==="And";}isVisible(group){if(this.#groups.size===0){return true;}if(!group){(0, _util.warn)("Optional content group not defined.");return true;}if(group.type==="OCG"){if(!this.#groups.has(group.id)){(0, _util.warn)(`Optional content group not found: ${group.id}`);return true;}return this.#groups.get(group.id).visible;}else if(group.type==="OCMD"){if(group.expression){return this.#evaluateVisibilityExpression(group.expression);}if(!group.policy||group.policy==="AnyOn"){for(const id of group.ids){if(!this.#groups.has(id)){(0, _util.warn)(`Optional content group not found: ${id}`);return true;}if(this.#groups.get(id).visible){return true;}}return false;}else if(group.policy==="AllOn"){for(const id of group.ids){if(!this.#groups.has(id)){(0, _util.warn)(`Optional content group not found: ${id}`);return true;}if(!this.#groups.get(id).visible){return false;}}return true;}else if(group.policy==="AnyOff"){for(const id of group.ids){if(!this.#groups.has(id)){(0, _util.warn)(`Optional content group not found: ${id}`);return true;}if(!this.#groups.get(id).visible){return true;}}return false;}else if(group.policy==="AllOff"){for(const id of group.ids){if(!this.#groups.has(id)){(0, _util.warn)(`Optional content group not found: ${id}`);return true;}if(this.#groups.get(id).visible){return false;}}return true;}(0, _util.warn)(`Unknown optional content policy ${group.policy}.`);return true;}(0, _util.warn)(`Unknown group type ${group.type}.`);return true;}setVisibility(id,visible=true){if(!this.#groups.has(id)){(0, _util.warn)(`Optional content group not found: ${id}`);return;}this.#groups.get(id)._setVisible(INTERNAL,!!visible);this.#cachedGetHash=null;}get hasInitialVisibility(){return this.getHash()===this.#initialHash;}getOrder(){if(!this.#groups.size){return null;}if(this.#order){return this.#order.slice();}return [...this.#groups.keys()];}getGroups(){return this.#groups.size>0?(0, _util.objectFromMap)(this.#groups):null;}getGroup(id){return this.#groups.get(id)||null;}getHash(){if(this.#cachedGetHash!==null){return this.#cachedGetHash;}const hash=new _murmurhash.MurmurHash3_64();for(const[id,group]of this.#groups){hash.update(`${id}:${group.visible}`);}return this.#cachedGetHash=hash.hexdigest();}}exports.OptionalContentConfig=OptionalContentConfig;/***/},/* 18 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFDataTransportStream=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);class PDFDataTransportStream{constructor({length,initialData,progressiveDone=false,contentDispositionFilename=null,disableRange=false,disableStream=false},pdfDataRangeTransport){(0, _util.assert)(pdfDataRangeTransport,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');this._queuedChunks=[];this._progressiveDone=progressiveDone;this._contentDispositionFilename=contentDispositionFilename;if(initialData?.length>0){const buffer=initialData instanceof Uint8Array&&initialData.byteLength===initialData.buffer.byteLength?initialData.buffer:new Uint8Array(initialData).buffer;this._queuedChunks.push(buffer);}this._pdfDataRangeTransport=pdfDataRangeTransport;this._isStreamingSupported=!disableStream;this._isRangeSupported=!disableRange;this._contentLength=length;this._fullRequestReader=null;this._rangeReaders=[];this._pdfDataRangeTransport.addRangeListener((begin,chunk)=>{this._onReceiveData({begin,chunk});});this._pdfDataRangeTransport.addProgressListener((loaded,total)=>{this._onProgress({loaded,total});});this._pdfDataRangeTransport.addProgressiveReadListener(chunk=>{this._onReceiveData({chunk});});this._pdfDataRangeTransport.addProgressiveDoneListener(()=>{this._onProgressiveDone();});this._pdfDataRangeTransport.transportReady();}_onReceiveData({begin,chunk}){const buffer=chunk instanceof Uint8Array&&chunk.byteLength===chunk.buffer.byteLength?chunk.buffer:new Uint8Array(chunk).buffer;if(begin===undefined){if(this._fullRequestReader){this._fullRequestReader._enqueue(buffer);}else {this._queuedChunks.push(buffer);}}else {const found=this._rangeReaders.some(function(rangeReader){if(rangeReader._begin!==begin){return false;}rangeReader._enqueue(buffer);return true;});(0, _util.assert)(found,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");}}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}_onProgress(evt){if(evt.total===undefined){this._rangeReaders[0]?.onProgress?.({loaded:evt.loaded});}else {this._fullRequestReader?.onProgress?.({loaded:evt.loaded,total:evt.total});}}_onProgressiveDone(){this._fullRequestReader?.progressiveDone();this._progressiveDone=true;}_removeRangeReader(reader){const i=this._rangeReaders.indexOf(reader);if(i>=0){this._rangeReaders.splice(i,1);}}getFullReader(){(0, _util.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.");const queuedChunks=this._queuedChunks;this._queuedChunks=null;return new PDFDataTransportStreamReader(this,queuedChunks,this._progressiveDone,this._contentDispositionFilename);}getRangeReader(begin,end){if(end<=this._progressiveDataLength){return null;}const reader=new PDFDataTransportStreamRangeReader(this,begin,end);this._pdfDataRangeTransport.requestDataRange(begin,end);this._rangeReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeReaders.slice(0)){reader.cancel(reason);}this._pdfDataRangeTransport.abort();}}exports.PDFDataTransportStream=PDFDataTransportStream;class PDFDataTransportStreamReader{constructor(stream,queuedChunks,progressiveDone=false,contentDispositionFilename=null){this._stream=stream;this._done=progressiveDone||false;this._filename=(0, _display_utils.isPdfFile)(contentDispositionFilename)?contentDispositionFilename:null;this._queuedChunks=queuedChunks||[];this._loaded=0;for(const chunk of this._queuedChunks){this._loaded+=chunk.byteLength;}this._requests=[];this._headersReady=Promise.resolve();stream._fullRequestReader=this;this.onProgress=null;}_enqueue(chunk){if(this._done){return;}if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:chunk,done:false});}else {this._queuedChunks.push(chunk);}this._loaded+=chunk.byteLength;}get headersReady(){return this._headersReady;}get filename(){return this._filename;}get isRangeSupported(){return this._stream._isRangeSupported;}get isStreamingSupported(){return this._stream._isStreamingSupported;}get contentLength(){return this._stream._contentLength;}async read(){if(this._queuedChunks.length>0){const chunk=this._queuedChunks.shift();return {value:chunk,done:false};}if(this._done){return {value:undefined,done:true};}const requestCapability=(0, _util.createPromiseCapability)();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}progressiveDone(){if(this._done){return;}this._done=true;}}class PDFDataTransportStreamRangeReader{constructor(stream,begin,end){this._stream=stream;this._begin=begin;this._end=end;this._queuedChunk=null;this._requests=[];this._done=false;this.onProgress=null;}_enqueue(chunk){if(this._done){return;}if(this._requests.length===0){this._queuedChunk=chunk;}else {const requestsCapability=this._requests.shift();requestsCapability.resolve({value:chunk,done:false});for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}this._done=true;this._stream._removeRangeReader(this);}get isStreamingSupported(){return false;}async read(){if(this._queuedChunk){const chunk=this._queuedChunk;this._queuedChunk=null;return {value:chunk,done:false};}if(this._done){return {value:undefined,done:true};}const requestCapability=(0, _util.createPromiseCapability)();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;this._stream._removeRangeReader(this);}}/***/},/* 19 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.XfaText=void 0;class XfaText{static textContent(xfa){const items=[];const output={items,styles:Object.create(null)};function walk(node){if(!node){return;}let str=null;const name=node.name;if(name==="#text"){str=node.value;}else if(!XfaText.shouldBuildText(name)){return;}else if(node?.attributes?.textContent){str=node.attributes.textContent;}else if(node.value){str=node.value;}if(str!==null){items.push({str});}if(!node.children){return;}for(const child of node.children){walk(child);}}walk(xfa);return output;}static shouldBuildText(name){return !(name==="textarea"||name==="input"||name==="option"||name==="select");}}exports.XfaText=XfaText;/***/},/* 20 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.NodeStandardFontDataFactory=exports.NodeCanvasFactory=exports.NodeCMapReaderFactory=void 0;var _base_factory=__w_pdfjs_require__(7);const fetchData=function(url){return new Promise((resolve,reject)=>{const fs=require$$0$1;fs.readFile(url,(error,data)=>{if(error||!data){reject(new Error(error));return;}resolve(new Uint8Array(data));});});};class NodeCanvasFactory extends _base_factory.BaseCanvasFactory{_createCanvas(width,height){const Canvas=require$$0;return Canvas.createCanvas(width,height);}}exports.NodeCanvasFactory=NodeCanvasFactory;class NodeCMapReaderFactory extends _base_factory.BaseCMapReaderFactory{_fetchData(url,compressionType){return fetchData(url).then(data=>{return {cMapData:data,compressionType};});}}exports.NodeCMapReaderFactory=NodeCMapReaderFactory;class NodeStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory{_fetchData(url){return fetchData(url);}}exports.NodeStandardFontDataFactory=NodeStandardFontDataFactory;/***/},/* 21 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNodeStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);const fs=require$$0$1;const http=require$$2;const https=require$$3;const url=require$$4;const fileUriRegex=/^file:\/\/\/[a-zA-Z]:\//;function parseUrl(sourceUrl){const parsedUrl=url.parse(sourceUrl);if(parsedUrl.protocol==="file:"||parsedUrl.host){return parsedUrl;}if(/^[a-z]:[/\\]/i.test(sourceUrl)){return url.parse(`file:///${sourceUrl}`);}if(!parsedUrl.host){parsedUrl.protocol="file:";}return parsedUrl;}class PDFNodeStream{constructor(source){this.source=source;this.url=parseUrl(source.url);this.isHttp=this.url.protocol==="http:"||this.url.protocol==="https:";this.isFsUrl=this.url.protocol==="file:";this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}getFullReader(){(0, _util.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once.");this._fullRequestReader=this.isFsUrl?new PDFNodeStreamFsFullReader(this):new PDFNodeStreamFullReader(this);return this._fullRequestReader;}getRangeReader(start,end){if(end<=this._progressiveDataLength){return null;}const rangeReader=this.isFsUrl?new PDFNodeStreamFsRangeReader(this,start,end):new PDFNodeStreamRangeReader(this,start,end);this._rangeRequestReaders.push(rangeReader);return rangeReader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFNodeStream=PDFNodeStream;class BaseFullReader{constructor(stream){this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;const source=stream.source;this._contentLength=source.length;this._loaded=0;this._filename=null;this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._readableStream=null;this._readCapability=(0, _util.createPromiseCapability)();this._headersCapability=(0, _util.createPromiseCapability)();}get headersReady(){return this._headersCapability.promise;}get filename(){return this._filename;}get contentLength(){return this._contentLength;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;if(this._done){return {value:undefined,done:true};}if(this._storedError){throw this._storedError;}const chunk=this._readableStream.read();if(chunk===null){this._readCapability=(0, _util.createPromiseCapability)();return this.read();}this._loaded+=chunk.length;this.onProgress?.({loaded:this._loaded,total:this._contentLength});const buffer=new Uint8Array(chunk).buffer;return {value:buffer,done:false};}cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}_error(reason){this._storedError=reason;this._readCapability.resolve();}_setReadableStream(readableStream){this._readableStream=readableStream;readableStream.on("readable",()=>{this._readCapability.resolve();});readableStream.on("end",()=>{readableStream.destroy();this._done=true;this._readCapability.resolve();});readableStream.on("error",reason=>{this._error(reason);});if(!this._isStreamingSupported&&this._isRangeSupported){this._error(new _util.AbortException("streaming is disabled"));}if(this._storedError){this._readableStream.destroy(this._storedError);}}}class BaseRangeReader{constructor(stream){this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;this._loaded=0;this._readableStream=null;this._readCapability=(0, _util.createPromiseCapability)();const source=stream.source;this._isStreamingSupported=!source.disableStream;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;if(this._done){return {value:undefined,done:true};}if(this._storedError){throw this._storedError;}const chunk=this._readableStream.read();if(chunk===null){this._readCapability=(0, _util.createPromiseCapability)();return this.read();}this._loaded+=chunk.length;this.onProgress?.({loaded:this._loaded});const buffer=new Uint8Array(chunk).buffer;return {value:buffer,done:false};}cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}_error(reason){this._storedError=reason;this._readCapability.resolve();}_setReadableStream(readableStream){this._readableStream=readableStream;readableStream.on("readable",()=>{this._readCapability.resolve();});readableStream.on("end",()=>{readableStream.destroy();this._done=true;this._readCapability.resolve();});readableStream.on("error",reason=>{this._error(reason);});if(this._storedError){this._readableStream.destroy(this._storedError);}}}function createRequestOptions(parsedUrl,headers){return {protocol:parsedUrl.protocol,auth:parsedUrl.auth,host:parsedUrl.hostname,port:parsedUrl.port,path:parsedUrl.path,method:"GET",headers};}class PDFNodeStreamFullReader extends BaseFullReader{constructor(stream){super(stream);const handleResponse=response=>{if(response.statusCode===404){const error=new _util.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=error;this._headersCapability.reject(error);return;}this._headersCapability.resolve();this._setReadableStream(response);const getResponseHeader=name=>{return this._readableStream.headers[name.toLowerCase()];};const{allowRangeRequests,suggestedLength}=(0, _network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:stream.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=allowRangeRequests;this._contentLength=suggestedLength||this._contentLength;this._filename=(0, _network_utils.extractFilenameFromHeader)(getResponseHeader);};this._request=null;if(this._url.protocol==="http:"){this._request=http.request(createRequestOptions(this._url,stream.httpHeaders),handleResponse);}else {this._request=https.request(createRequestOptions(this._url,stream.httpHeaders),handleResponse);}this._request.on("error",reason=>{this._storedError=reason;this._headersCapability.reject(reason);});this._request.end();}}class PDFNodeStreamRangeReader extends BaseRangeReader{constructor(stream,start,end){super(stream);this._httpHeaders={};for(const property in stream.httpHeaders){const value=stream.httpHeaders[property];if(value===undefined){continue;}this._httpHeaders[property]=value;}this._httpHeaders.Range=`bytes=${start}-${end-1}`;const handleResponse=response=>{if(response.statusCode===404){const error=new _util.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=error;return;}this._setReadableStream(response);};this._request=null;if(this._url.protocol==="http:"){this._request=http.request(createRequestOptions(this._url,this._httpHeaders),handleResponse);}else {this._request=https.request(createRequestOptions(this._url,this._httpHeaders),handleResponse);}this._request.on("error",reason=>{this._storedError=reason;});this._request.end();}}class PDFNodeStreamFsFullReader extends BaseFullReader{constructor(stream){super(stream);let path=decodeURIComponent(this._url.path);if(fileUriRegex.test(this._url.href)){path=path.replace(/^\//,"");}fs.lstat(path,(error,stat)=>{if(error){if(error.code==="ENOENT"){error=new _util.MissingPDFException(`Missing PDF "${path}".`);}this._storedError=error;this._headersCapability.reject(error);return;}this._contentLength=stat.size;this._setReadableStream(fs.createReadStream(path));this._headersCapability.resolve();});}}class PDFNodeStreamFsRangeReader extends BaseRangeReader{constructor(stream,start,end){super(stream);let path=decodeURIComponent(this._url.path);if(fileUriRegex.test(this._url.href)){path=path.replace(/^\//,"");}this._setReadableStream(fs.createReadStream(path,{start,end:end-1}));}}/***/},/* 22 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.createResponseStatusError=createResponseStatusError;exports.extractFilenameFromHeader=extractFilenameFromHeader;exports.validateRangeRequestCapabilities=validateRangeRequestCapabilities;exports.validateResponseStatus=validateResponseStatus;var _util=__w_pdfjs_require__(1);var _content_disposition=__w_pdfjs_require__(23);var _display_utils=__w_pdfjs_require__(6);function validateRangeRequestCapabilities({getResponseHeader,isHttp,rangeChunkSize,disableRange}){const returnValues={allowRangeRequests:false,suggestedLength:undefined};const length=parseInt(getResponseHeader("Content-Length"),10);if(!Number.isInteger(length)){return returnValues;}returnValues.suggestedLength=length;if(length<=2*rangeChunkSize){return returnValues;}if(disableRange||!isHttp){return returnValues;}if(getResponseHeader("Accept-Ranges")!=="bytes"){return returnValues;}const contentEncoding=getResponseHeader("Content-Encoding")||"identity";if(contentEncoding!=="identity"){return returnValues;}returnValues.allowRangeRequests=true;return returnValues;}function extractFilenameFromHeader(getResponseHeader){const contentDisposition=getResponseHeader("Content-Disposition");if(contentDisposition){let filename=(0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);if(filename.includes("%")){try{filename=decodeURIComponent(filename);}catch(ex){}}if((0, _display_utils.isPdfFile)(filename)){return filename;}}return null;}function createResponseStatusError(status,url){if(status===404||status===0&&url.startsWith("file:")){return new _util.MissingPDFException('Missing PDF "'+url+'".');}return new _util.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`,status);}function validateResponseStatus(status){return status===200||status===206;}/***/},/* 23 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.getFilenameFromContentDispositionHeader=getFilenameFromContentDispositionHeader;var _util=__w_pdfjs_require__(1);function getFilenameFromContentDispositionHeader(contentDisposition){let needsEncodingFixup=true;let tmp=toParamRegExp("filename\\*","i").exec(contentDisposition);if(tmp){tmp=tmp[1];let filename=rfc2616unquote(tmp);filename=unescape(filename);filename=rfc5987decode(filename);filename=rfc2047decode(filename);return fixupEncoding(filename);}tmp=rfc2231getparam(contentDisposition);if(tmp){const filename=rfc2047decode(tmp);return fixupEncoding(filename);}tmp=toParamRegExp("filename","i").exec(contentDisposition);if(tmp){tmp=tmp[1];let filename=rfc2616unquote(tmp);filename=rfc2047decode(filename);return fixupEncoding(filename);}function toParamRegExp(attributePattern,flags){return new RegExp("(?:^|;)\\s*"+attributePattern+"\\s*=\\s*"+"("+'[^";\\s][^;\\s]*'+"|"+'"(?:[^"\\\\]|\\\\"?)+"?'+")",flags);}function textdecode(encoding,value){if(encoding){if(!/^[\x00-\xFF]+$/.test(value)){return value;}try{const decoder=new TextDecoder(encoding,{fatal:true});const buffer=(0,_util.stringToBytes)(value);value=decoder.decode(buffer);needsEncodingFixup=false;}catch(e){}}return value;}function fixupEncoding(value){if(needsEncodingFixup&&/[\x80-\xff]/.test(value)){value=textdecode("utf-8",value);if(needsEncodingFixup){value=textdecode("iso-8859-1",value);}}return value;}function rfc2231getparam(contentDispositionStr){const matches=[];let match;const iter=toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)","ig");while((match=iter.exec(contentDispositionStr))!==null){let[,n,quot,part]=match;n=parseInt(n,10);if(n in matches){if(n===0){break;}continue;}matches[n]=[quot,part];}const parts=[];for(let n=0;n<matches.length;++n){if(!(n in matches)){break;}let[quot,part]=matches[n];part=rfc2616unquote(part);if(quot){part=unescape(part);if(n===0){part=rfc5987decode(part);}}parts.push(part);}return parts.join("");}function rfc2616unquote(value){if(value.startsWith('"')){const parts=value.slice(1).split('\\"');for(let i=0;i<parts.length;++i){const quotindex=parts[i].indexOf('"');if(quotindex!==-1){parts[i]=parts[i].slice(0,quotindex);parts.length=i+1;}parts[i]=parts[i].replace(/\\(.)/g,"$1");}value=parts.join('"');}return value;}function rfc5987decode(extvalue){const encodingend=extvalue.indexOf("'");if(encodingend===-1){return extvalue;}const encoding=extvalue.slice(0,encodingend);const langvalue=extvalue.slice(encodingend+1);const value=langvalue.replace(/^[^']*'/,"");return textdecode(encoding,value);}function rfc2047decode(value){if(!value.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(value)){return value;}return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(matches,charset,encoding,text){if(encoding==="q"||encoding==="Q"){text=text.replace(/_/g," ");text=text.replace(/=([0-9a-fA-F]{2})/g,function(match,hex){return String.fromCharCode(parseInt(hex,16));});return textdecode(charset,text);}try{text=atob(text);}catch(e){}return textdecode(charset,text);});}return "";}/***/},/* 24 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNetworkStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);const OK_RESPONSE=200;const PARTIAL_CONTENT_RESPONSE=206;function getArrayBuffer(xhr){const data=xhr.response;if(typeof data!=="string"){return data;}return (0, _util.stringToBytes)(data).buffer;}class NetworkManager{constructor(url,args={}){this.url=url;this.isHttp=/^https?:/i.test(url);this.httpHeaders=this.isHttp&&args.httpHeaders||Object.create(null);this.withCredentials=args.withCredentials||false;this.getXhr=args.getXhr||function NetworkManager_getXhr(){return new XMLHttpRequest();};this.currXhrId=0;this.pendingRequests=Object.create(null);}requestRange(begin,end,listeners){const args={begin,end};for(const prop in listeners){args[prop]=listeners[prop];}return this.request(args);}requestFull(listeners){return this.request(listeners);}request(args){const xhr=this.getXhr();const xhrId=this.currXhrId++;const pendingRequest=this.pendingRequests[xhrId]={xhr};xhr.open("GET",this.url);xhr.withCredentials=this.withCredentials;for(const property in this.httpHeaders){const value=this.httpHeaders[property];if(value===undefined){continue;}xhr.setRequestHeader(property,value);}if(this.isHttp&&"begin"in args&&"end"in args){xhr.setRequestHeader("Range",`bytes=${args.begin}-${args.end-1}`);pendingRequest.expectedStatus=PARTIAL_CONTENT_RESPONSE;}else {pendingRequest.expectedStatus=OK_RESPONSE;}xhr.responseType="arraybuffer";if(args.onError){xhr.onerror=function(evt){args.onError(xhr.status);};}xhr.onreadystatechange=this.onStateChange.bind(this,xhrId);xhr.onprogress=this.onProgress.bind(this,xhrId);pendingRequest.onHeadersReceived=args.onHeadersReceived;pendingRequest.onDone=args.onDone;pendingRequest.onError=args.onError;pendingRequest.onProgress=args.onProgress;xhr.send(null);return xhrId;}onProgress(xhrId,evt){const pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}pendingRequest.onProgress?.(evt);}onStateChange(xhrId,evt){const pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}const xhr=pendingRequest.xhr;if(xhr.readyState>=2&&pendingRequest.onHeadersReceived){pendingRequest.onHeadersReceived();delete pendingRequest.onHeadersReceived;}if(xhr.readyState!==4){return;}if(!(xhrId in this.pendingRequests)){return;}delete this.pendingRequests[xhrId];if(xhr.status===0&&this.isHttp){pendingRequest.onError?.(xhr.status);return;}const xhrStatus=xhr.status||OK_RESPONSE;const ok_response_on_range_request=xhrStatus===OK_RESPONSE&&pendingRequest.expectedStatus===PARTIAL_CONTENT_RESPONSE;if(!ok_response_on_range_request&&xhrStatus!==pendingRequest.expectedStatus){pendingRequest.onError?.(xhr.status);return;}const chunk=getArrayBuffer(xhr);if(xhrStatus===PARTIAL_CONTENT_RESPONSE){const rangeHeader=xhr.getResponseHeader("Content-Range");const matches=/bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);pendingRequest.onDone({begin:parseInt(matches[1],10),chunk});}else if(chunk){pendingRequest.onDone({begin:0,chunk});}else {pendingRequest.onError?.(xhr.status);}}getRequestXhr(xhrId){return this.pendingRequests[xhrId].xhr;}isPendingRequest(xhrId){return xhrId in this.pendingRequests;}abortRequest(xhrId){const xhr=this.pendingRequests[xhrId].xhr;delete this.pendingRequests[xhrId];xhr.abort();}}class PDFNetworkStream{constructor(source){this._source=source;this._manager=new NetworkManager(source.url,{httpHeaders:source.httpHeaders,withCredentials:source.withCredentials});this._rangeChunkSize=source.rangeChunkSize;this._fullRequestReader=null;this._rangeRequestReaders=[];}_onRangeRequestReaderClosed(reader){const i=this._rangeRequestReaders.indexOf(reader);if(i>=0){this._rangeRequestReaders.splice(i,1);}}getFullReader(){(0, _util.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once.");this._fullRequestReader=new PDFNetworkStreamFullRequestReader(this._manager,this._source);return this._fullRequestReader;}getRangeReader(begin,end){const reader=new PDFNetworkStreamRangeRequestReader(this._manager,begin,end);reader.onClosed=this._onRangeRequestReaderClosed.bind(this);this._rangeRequestReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFNetworkStream=PDFNetworkStream;class PDFNetworkStreamFullRequestReader{constructor(manager,source){this._manager=manager;const args={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=source.url;this._fullRequestId=manager.requestFull(args);this._headersReceivedCapability=(0, _util.createPromiseCapability)();this._disableRange=source.disableRange||false;this._contentLength=source.length;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=false;this._isRangeSupported=false;this._cachedChunks=[];this._requests=[];this._done=false;this._storedError=undefined;this._filename=null;this.onProgress=null;}_onHeadersReceived(){const fullRequestXhrId=this._fullRequestId;const fullRequestXhr=this._manager.getRequestXhr(fullRequestXhrId);const getResponseHeader=name=>{return fullRequestXhr.getResponseHeader(name);};const{allowRangeRequests,suggestedLength}=(0, _network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});if(allowRangeRequests){this._isRangeSupported=true;}this._contentLength=suggestedLength||this._contentLength;this._filename=(0, _network_utils.extractFilenameFromHeader)(getResponseHeader);if(this._isRangeSupported){this._manager.abortRequest(fullRequestXhrId);}this._headersReceivedCapability.resolve();}_onDone(data){if(data){if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:data.chunk,done:false});}else {this._cachedChunks.push(data.chunk);}}this._done=true;if(this._cachedChunks.length>0){return;}for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;}_onError(status){this._storedError=(0, _network_utils.createResponseStatusError)(status,this._url);this._headersReceivedCapability.reject(this._storedError);for(const requestCapability of this._requests){requestCapability.reject(this._storedError);}this._requests.length=0;this._cachedChunks.length=0;}_onProgress(evt){this.onProgress?.({loaded:evt.loaded,total:evt.lengthComputable?evt.total:this._contentLength});}get filename(){return this._filename;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}get contentLength(){return this._contentLength;}get headersReady(){return this._headersReceivedCapability.promise;}async read(){if(this._storedError){throw this._storedError;}if(this._cachedChunks.length>0){const chunk=this._cachedChunks.shift();return {value:chunk,done:false};}if(this._done){return {value:undefined,done:true};}const requestCapability=(0, _util.createPromiseCapability)();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;this._headersReceivedCapability.reject(reason);for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;if(this._manager.isPendingRequest(this._fullRequestId)){this._manager.abortRequest(this._fullRequestId);}this._fullRequestReader=null;}}class PDFNetworkStreamRangeRequestReader{constructor(manager,begin,end){this._manager=manager;const args={onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=manager.url;this._requestId=manager.requestRange(begin,end,args);this._requests=[];this._queuedChunk=null;this._done=false;this._storedError=undefined;this.onProgress=null;this.onClosed=null;}_close(){this.onClosed?.(this);}_onDone(data){const chunk=data.chunk;if(this._requests.length>0){const requestCapability=this._requests.shift();requestCapability.resolve({value:chunk,done:false});}else {this._queuedChunk=chunk;}this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;this._close();}_onError(status){this._storedError=(0, _network_utils.createResponseStatusError)(status,this._url);for(const requestCapability of this._requests){requestCapability.reject(this._storedError);}this._requests.length=0;this._queuedChunk=null;}_onProgress(evt){if(!this.isStreamingSupported){this.onProgress?.({loaded:evt.loaded});}}get isStreamingSupported(){return false;}async read(){if(this._storedError){throw this._storedError;}if(this._queuedChunk!==null){const chunk=this._queuedChunk;this._queuedChunk=null;return {value:chunk,done:false};}if(this._done){return {value:undefined,done:true};}const requestCapability=(0, _util.createPromiseCapability)();this._requests.push(requestCapability);return requestCapability.promise;}cancel(reason){this._done=true;for(const requestCapability of this._requests){requestCapability.resolve({value:undefined,done:true});}this._requests.length=0;if(this._manager.isPendingRequest(this._requestId)){this._manager.abortRequest(this._requestId);}this._close();}}/***/},/* 25 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PDFFetchStream=void 0;var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(22);function createFetchOptions(headers,withCredentials,abortController){return {method:"GET",headers,signal:abortController.signal,mode:"cors",credentials:withCredentials?"include":"same-origin",redirect:"follow"};}function createHeaders(httpHeaders){const headers=new Headers();for(const property in httpHeaders){const value=httpHeaders[property];if(value===undefined){continue;}headers.append(property,value);}return headers;}function getArrayBuffer(val){if(val instanceof Uint8Array){return val.buffer;}if(val instanceof ArrayBuffer){return val;}(0, _util.warn)(`getArrayBuffer - unexpected data format: ${val}`);return new Uint8Array(val).buffer;}class PDFFetchStream{constructor(source){this.source=source;this.isHttp=/^https?:/i.test(source.url);this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0;}getFullReader(){(0, _util.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once.");this._fullRequestReader=new PDFFetchStreamReader(this);return this._fullRequestReader;}getRangeReader(begin,end){if(end<=this._progressiveDataLength){return null;}const reader=new PDFFetchStreamRangeReader(this,begin,end);this._rangeRequestReaders.push(reader);return reader;}cancelAllRequests(reason){this._fullRequestReader?.cancel(reason);for(const reader of this._rangeRequestReaders.slice(0)){reader.cancel(reason);}}}exports.PDFFetchStream=PDFFetchStream;class PDFFetchStreamReader{constructor(stream){this._stream=stream;this._reader=null;this._loaded=0;this._filename=null;const source=stream.source;this._withCredentials=source.withCredentials||false;this._contentLength=source.length;this._headersCapability=(0, _util.createPromiseCapability)();this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._abortController=new AbortController();this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._headers=createHeaders(this._stream.httpHeaders);const url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(response=>{if(!(0, _network_utils.validateResponseStatus)(response.status)){throw (0, _network_utils.createResponseStatusError)(response.status,url);}this._reader=response.body.getReader();this._headersCapability.resolve();const getResponseHeader=name=>{return response.headers.get(name);};const{allowRangeRequests,suggestedLength}=(0, _network_utils.validateRangeRequestCapabilities)({getResponseHeader,isHttp:this._stream.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=allowRangeRequests;this._contentLength=suggestedLength||this._contentLength;this._filename=(0, _network_utils.extractFilenameFromHeader)(getResponseHeader);if(!this._isStreamingSupported&&this._isRangeSupported){this.cancel(new _util.AbortException("Streaming is disabled."));}}).catch(this._headersCapability.reject);this.onProgress=null;}get headersReady(){return this._headersCapability.promise;}get filename(){return this._filename;}get contentLength(){return this._contentLength;}get isRangeSupported(){return this._isRangeSupported;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._headersCapability.promise;const{value,done}=await this._reader.read();if(done){return {value,done};}this._loaded+=value.byteLength;this.onProgress?.({loaded:this._loaded,total:this._contentLength});return {value:getArrayBuffer(value),done:false};}cancel(reason){this._reader?.cancel(reason);this._abortController.abort();}}class PDFFetchStreamRangeReader{constructor(stream,begin,end){this._stream=stream;this._reader=null;this._loaded=0;const source=stream.source;this._withCredentials=source.withCredentials||false;this._readCapability=(0, _util.createPromiseCapability)();this._isStreamingSupported=!source.disableStream;this._abortController=new AbortController();this._headers=createHeaders(this._stream.httpHeaders);this._headers.append("Range",`bytes=${begin}-${end-1}`);const url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(response=>{if(!(0, _network_utils.validateResponseStatus)(response.status)){throw (0, _network_utils.createResponseStatusError)(response.status,url);}this._readCapability.resolve();this._reader=response.body.getReader();}).catch(this._readCapability.reject);this.onProgress=null;}get isStreamingSupported(){return this._isStreamingSupported;}async read(){await this._readCapability.promise;const{value,done}=await this._reader.read();if(done){return {value,done};}this._loaded+=value.byteLength;this.onProgress?.({loaded:this._loaded});return {value:getArrayBuffer(value),done:false};}cancel(reason){this._reader?.cancel(reason);this._abortController.abort();}}/***/},/* 26 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.TextLayerRenderTask=void 0;exports.renderTextLayer=renderTextLayer;exports.updateTextLayer=updateTextLayer;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);const MAX_TEXT_DIVS_TO_RENDER=100000;const DEFAULT_FONT_SIZE=30;const DEFAULT_FONT_ASCENT=0.8;const ascentCache=new Map();function getCtx(size,isOffscreenCanvasSupported){let ctx;if(isOffscreenCanvasSupported&&_util.FeatureTest.isOffscreenCanvasSupported){ctx=new OffscreenCanvas(size,size).getContext("2d",{alpha:false});}else {const canvas=document.createElement("canvas");canvas.width=canvas.height=size;ctx=canvas.getContext("2d",{alpha:false});}return ctx;}function getAscent(fontFamily,isOffscreenCanvasSupported){const cachedAscent=ascentCache.get(fontFamily);if(cachedAscent){return cachedAscent;}const ctx=getCtx(DEFAULT_FONT_SIZE,isOffscreenCanvasSupported);ctx.font=`${DEFAULT_FONT_SIZE}px ${fontFamily}`;const metrics=ctx.measureText("");let ascent=metrics.fontBoundingBoxAscent;let descent=Math.abs(metrics.fontBoundingBoxDescent);if(ascent){const ratio=ascent/(ascent+descent);ascentCache.set(fontFamily,ratio);ctx.canvas.width=ctx.canvas.height=0;return ratio;}ctx.strokeStyle="red";ctx.clearRect(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE);ctx.strokeText("g",0,0);let pixels=ctx.getImageData(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE).data;descent=0;for(let i=pixels.length-1-3;i>=0;i-=4){if(pixels[i]>0){descent=Math.ceil(i/4/DEFAULT_FONT_SIZE);break;}}ctx.clearRect(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE);ctx.strokeText("A",0,DEFAULT_FONT_SIZE);pixels=ctx.getImageData(0,0,DEFAULT_FONT_SIZE,DEFAULT_FONT_SIZE).data;ascent=0;for(let i=0,ii=pixels.length;i<ii;i+=4){if(pixels[i]>0){ascent=DEFAULT_FONT_SIZE-Math.floor(i/4/DEFAULT_FONT_SIZE);break;}}ctx.canvas.width=ctx.canvas.height=0;if(ascent){const ratio=ascent/(ascent+descent);ascentCache.set(fontFamily,ratio);return ratio;}ascentCache.set(fontFamily,DEFAULT_FONT_ASCENT);return DEFAULT_FONT_ASCENT;}function appendText(task,geom,styles){const textDiv=document.createElement("span");const textDivProperties={angle:0,canvasWidth:0,hasText:geom.str!=="",hasEOL:geom.hasEOL,fontSize:0};task._textDivs.push(textDiv);const tx=_util.Util.transform(task._transform,geom.transform);let angle=Math.atan2(tx[1],tx[0]);const style=styles[geom.fontName];if(style.vertical){angle+=Math.PI/2;}const fontHeight=Math.hypot(tx[2],tx[3]);const fontAscent=fontHeight*getAscent(style.fontFamily,task._isOffscreenCanvasSupported);let left,top;if(angle===0){left=tx[4];top=tx[5]-fontAscent;}else {left=tx[4]+fontAscent*Math.sin(angle);top=tx[5]-fontAscent*Math.cos(angle);}const scaleFactorStr="calc(var(--scale-factor)*";const divStyle=textDiv.style;if(task._container===task._rootContainer){divStyle.left=`${(100*left/task._pageWidth).toFixed(2)}%`;divStyle.top=`${(100*top/task._pageHeight).toFixed(2)}%`;}else {divStyle.left=`${scaleFactorStr}${left.toFixed(2)}px)`;divStyle.top=`${scaleFactorStr}${top.toFixed(2)}px)`;}divStyle.fontSize=`${scaleFactorStr}${fontHeight.toFixed(2)}px)`;divStyle.fontFamily=style.fontFamily;textDivProperties.fontSize=fontHeight;textDiv.setAttribute("role","presentation");textDiv.textContent=geom.str;textDiv.dir=geom.dir;if(task._fontInspectorEnabled){textDiv.dataset.fontName=geom.fontName;}if(angle!==0){textDivProperties.angle=angle*(180/Math.PI);}let shouldScaleText=false;if(geom.str.length>1){shouldScaleText=true;}else if(geom.str!==" "&&geom.transform[0]!==geom.transform[3]){const absScaleX=Math.abs(geom.transform[0]),absScaleY=Math.abs(geom.transform[3]);if(absScaleX!==absScaleY&&Math.max(absScaleX,absScaleY)/Math.min(absScaleX,absScaleY)>1.5){shouldScaleText=true;}}if(shouldScaleText){textDivProperties.canvasWidth=style.vertical?geom.height:geom.width;}task._textDivProperties.set(textDiv,textDivProperties);if(task._isReadableStream){task._layoutText(textDiv);}}function layout(params){const{div,scale,properties,ctx,prevFontSize,prevFontFamily}=params;const{style}=div;let transform="";if(properties.canvasWidth!==0&&properties.hasText){const{fontFamily}=style;const{canvasWidth,fontSize}=properties;if(prevFontSize!==fontSize||prevFontFamily!==fontFamily){ctx.font=`${fontSize*scale}px ${fontFamily}`;params.prevFontSize=fontSize;params.prevFontFamily=fontFamily;}const{width}=ctx.measureText(div.textContent);if(width>0){transform=`scaleX(${canvasWidth*scale/width})`;}}if(properties.angle!==0){transform=`rotate(${properties.angle}deg) ${transform}`;}if(transform.length>0){style.transform=transform;}}function render(task){if(task._canceled){return;}const textDivs=task._textDivs;const capability=task._capability;const textDivsLength=textDivs.length;if(textDivsLength>MAX_TEXT_DIVS_TO_RENDER){capability.resolve();return;}if(!task._isReadableStream){for(const textDiv of textDivs){task._layoutText(textDiv);}}capability.resolve();}class TextLayerRenderTask{constructor({textContentSource,container,viewport,textDivs,textDivProperties,textContentItemsStr,isOffscreenCanvasSupported}){this._textContentSource=textContentSource;this._isReadableStream=textContentSource instanceof ReadableStream;this._container=this._rootContainer=container;this._textDivs=textDivs||[];this._textContentItemsStr=textContentItemsStr||[];this._isOffscreenCanvasSupported=isOffscreenCanvasSupported;this._fontInspectorEnabled=!!globalThis.FontInspector?.enabled;this._reader=null;this._textDivProperties=textDivProperties||new WeakMap();this._canceled=false;this._capability=(0, _util.createPromiseCapability)();this._layoutTextParams={prevFontSize:null,prevFontFamily:null,div:null,scale:viewport.scale*(globalThis.devicePixelRatio||1),properties:null,ctx:getCtx(0,isOffscreenCanvasSupported)};const{pageWidth,pageHeight,pageX,pageY}=viewport.rawDims;this._transform=[1,0,0,-1,-pageX,pageY+pageHeight];this._pageWidth=pageWidth;this._pageHeight=pageHeight;(0, _display_utils.setLayerDimensions)(container,viewport);this._capability.promise.finally(()=>{this._layoutTextParams=null;}).catch(()=>{});}get promise(){return this._capability.promise;}cancel(){this._canceled=true;if(this._reader){this._reader.cancel(new _util.AbortException("TextLayer task cancelled.")).catch(()=>{});this._reader=null;}this._capability.reject(new _util.AbortException("TextLayer task cancelled."));}_processItems(items,styleCache){for(const item of items){if(item.str===undefined){if(item.type==="beginMarkedContentProps"||item.type==="beginMarkedContent"){const parent=this._container;this._container=document.createElement("span");this._container.classList.add("markedContent");if(item.id!==null){this._container.setAttribute("id",`${item.id}`);}parent.append(this._container);}else if(item.type==="endMarkedContent"){this._container=this._container.parentNode;}continue;}this._textContentItemsStr.push(item.str);appendText(this,item,styleCache);}}_layoutText(textDiv){const textDivProperties=this._layoutTextParams.properties=this._textDivProperties.get(textDiv);this._layoutTextParams.div=textDiv;layout(this._layoutTextParams);if(textDivProperties.hasText){this._container.append(textDiv);}if(textDivProperties.hasEOL){const br=document.createElement("br");br.setAttribute("role","presentation");this._container.append(br);}}_render(){const capability=(0, _util.createPromiseCapability)();let styleCache=Object.create(null);if(this._isReadableStream){const pump=()=>{this._reader.read().then(({value,done})=>{if(done){capability.resolve();return;}Object.assign(styleCache,value.styles);this._processItems(value.items,styleCache);pump();},capability.reject);};this._reader=this._textContentSource.getReader();pump();}else if(this._textContentSource){const{items,styles}=this._textContentSource;this._processItems(items,styles);capability.resolve();}else {throw new Error('No "textContentSource" parameter specified.');}capability.promise.then(()=>{styleCache=null;render(this);},this._capability.reject);}}exports.TextLayerRenderTask=TextLayerRenderTask;function renderTextLayer(params){if(!params.textContentSource&&(params.textContent||params.textContentStream)){(0, _display_utils.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters "+"will be removed in the future, please use `textContentSource` instead.");params.textContentSource=params.textContent||params.textContentStream;}const task=new TextLayerRenderTask(params);task._render();return task;}function updateTextLayer({container,viewport,textDivs,textDivProperties,isOffscreenCanvasSupported,mustRotate=true,mustRescale=true}){if(mustRotate){(0, _display_utils.setLayerDimensions)(container,{rotation:viewport.rotation});}if(mustRescale){const ctx=getCtx(0,isOffscreenCanvasSupported);const scale=viewport.scale*(globalThis.devicePixelRatio||1);const params={prevFontSize:null,prevFontFamily:null,div:null,scale,properties:null,ctx};for(const div of textDivs){params.properties=textDivProperties.get(div);params.div=div;layout(params);}}}/***/},/* 27 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationEditorLayer=void 0;var _util=__w_pdfjs_require__(1);var _tools=__w_pdfjs_require__(5);var _freetext=__w_pdfjs_require__(28);var _ink=__w_pdfjs_require__(29);var _display_utils=__w_pdfjs_require__(6);class AnnotationEditorLayer{#accessibilityManager;#allowClick=false;#boundPointerup=this.pointerup.bind(this);#boundPointerdown=this.pointerdown.bind(this);#editors=new Map();#hadPointerDown=false;#isCleaningUp=false;#uiManager;static _initialized=false;constructor(options){if(!AnnotationEditorLayer._initialized){AnnotationEditorLayer._initialized=true;_freetext.FreeTextEditor.initialize(options.l10n);_ink.InkEditor.initialize(options.l10n);}options.uiManager.registerEditorTypes([_freetext.FreeTextEditor,_ink.InkEditor]);this.#uiManager=options.uiManager;this.pageIndex=options.pageIndex;this.div=options.div;this.#accessibilityManager=options.accessibilityManager;this.#uiManager.addLayer(this);}get isEmpty(){return this.#editors.size===0;}updateToolbar(mode){this.#uiManager.updateToolbar(mode);}updateMode(mode=this.#uiManager.getMode()){this.#cleanup();if(mode===_util.AnnotationEditorType.INK){this.addInkEditorIfNeeded(false);this.disableClick();}else {this.enableClick();}this.#uiManager.unselectAll();if(mode!==_util.AnnotationEditorType.NONE){this.div.classList.toggle("freeTextEditing",mode===_util.AnnotationEditorType.FREETEXT);this.div.classList.toggle("inkEditing",mode===_util.AnnotationEditorType.INK);this.div.hidden=false;}}addInkEditorIfNeeded(isCommitting){if(!isCommitting&&this.#uiManager.getMode()!==_util.AnnotationEditorType.INK){return;}if(!isCommitting){for(const editor of this.#editors.values()){if(editor.isEmpty()){editor.setInBackground();return;}}}const editor=this.#createAndAddNewEditor({offsetX:0,offsetY:0});editor.setInBackground();}setEditingState(isEditing){this.#uiManager.setEditingState(isEditing);}addCommands(params){this.#uiManager.addCommands(params);}enable(){this.div.style.pointerEvents="auto";for(const editor of this.#editors.values()){editor.enableEditing();}}disable(){this.div.style.pointerEvents="none";for(const editor of this.#editors.values()){editor.disableEditing();}this.#cleanup();if(this.isEmpty){this.div.hidden=true;}}setActiveEditor(editor){const currentActive=this.#uiManager.getActive();if(currentActive===editor){return;}this.#uiManager.setActiveEditor(editor);}enableClick(){this.div.addEventListener("pointerdown",this.#boundPointerdown);this.div.addEventListener("pointerup",this.#boundPointerup);}disableClick(){this.div.removeEventListener("pointerdown",this.#boundPointerdown);this.div.removeEventListener("pointerup",this.#boundPointerup);}attach(editor){this.#editors.set(editor.id,editor);}detach(editor){this.#editors.delete(editor.id);this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);}remove(editor){this.#uiManager.removeEditor(editor);this.detach(editor);editor.div.style.display="none";setTimeout(()=>{editor.div.style.display="";editor.div.remove();editor.isAttachedToDOM=false;if(document.activeElement===document.body){this.#uiManager.focusMainContainer();}},0);if(!this.#isCleaningUp){this.addInkEditorIfNeeded(false);}}#changeParent(editor){if(editor.parent===this){return;}this.attach(editor);editor.parent?.detach(editor);editor.setParent(this);if(editor.div&&editor.isAttachedToDOM){editor.div.remove();this.div.append(editor.div);}}add(editor){this.#changeParent(editor);this.#uiManager.addEditor(editor);this.attach(editor);if(!editor.isAttachedToDOM){const div=editor.render();this.div.append(div);editor.isAttachedToDOM=true;}this.moveEditorInDOM(editor);editor.onceAdded();this.#uiManager.addToAnnotationStorage(editor);}moveEditorInDOM(editor){this.#accessibilityManager?.moveElementInDOM(this.div,editor.div,editor.contentDiv,true);}addOrRebuild(editor){if(editor.needsToBeRebuilt()){editor.rebuild();}else {this.add(editor);}}addANewEditor(editor){const cmd=()=>{this.addOrRebuild(editor);};const undo=()=>{editor.remove();};this.addCommands({cmd,undo,mustExec:true});}addUndoableEditor(editor){const cmd=()=>{this.addOrRebuild(editor);};const undo=()=>{editor.remove();};this.addCommands({cmd,undo,mustExec:false});}getNextId(){return this.#uiManager.getId();}#createNewEditor(params){switch(this.#uiManager.getMode()){case _util.AnnotationEditorType.FREETEXT:return new _freetext.FreeTextEditor(params);case _util.AnnotationEditorType.INK:return new _ink.InkEditor(params);}return null;}deserialize(data){switch(data.annotationType){case _util.AnnotationEditorType.FREETEXT:return _freetext.FreeTextEditor.deserialize(data,this,this.#uiManager);case _util.AnnotationEditorType.INK:return _ink.InkEditor.deserialize(data,this,this.#uiManager);}return null;}#createAndAddNewEditor(event){const id=this.getNextId();const editor=this.#createNewEditor({parent:this,id,x:event.offsetX,y:event.offsetY,uiManager:this.#uiManager});if(editor){this.add(editor);}return editor;}setSelected(editor){this.#uiManager.setSelected(editor);}toggleSelected(editor){this.#uiManager.toggleSelected(editor);}isSelected(editor){return this.#uiManager.isSelected(editor);}unselect(editor){this.#uiManager.unselect(editor);}pointerup(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){return;}if(event.target!==this.div){return;}if(!this.#hadPointerDown){return;}this.#hadPointerDown=false;if(!this.#allowClick){this.#allowClick=true;return;}this.#createAndAddNewEditor(event);}pointerdown(event){const{isMac}=_util.FeatureTest.platform;if(event.button!==0||event.ctrlKey&&isMac){return;}if(event.target!==this.div){return;}this.#hadPointerDown=true;const editor=this.#uiManager.getActive();this.#allowClick=!editor||editor.isEmpty();}drop(event){const id=event.dataTransfer.getData("text/plain");const editor=this.#uiManager.getEditor(id);if(!editor){return;}event.preventDefault();event.dataTransfer.dropEffect="move";this.#changeParent(editor);const rect=this.div.getBoundingClientRect();const endX=event.clientX-rect.x;const endY=event.clientY-rect.y;editor.translate(endX-editor.startX,endY-editor.startY);this.moveEditorInDOM(editor);editor.div.focus();}dragover(event){event.preventDefault();}destroy(){if(this.#uiManager.getActive()?.parent===this){this.#uiManager.setActiveEditor(null);}for(const editor of this.#editors.values()){this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);editor.setParent(null);editor.isAttachedToDOM=false;editor.div.remove();}this.div=null;this.#editors.clear();this.#uiManager.removeLayer(this);}#cleanup(){this.#isCleaningUp=true;for(const editor of this.#editors.values()){if(editor.isEmpty()){editor.remove();}}this.#isCleaningUp=false;}render({viewport}){this.viewport=viewport;(0, _display_utils.setLayerDimensions)(this.div,viewport);(0, _tools.bindEvents)(this,this.div,["dragover","drop"]);for(const editor of this.#uiManager.getEditors(this.pageIndex)){this.add(editor);}this.updateMode();}update({viewport}){this.#uiManager.commitOrRemove();this.viewport=viewport;(0, _display_utils.setLayerDimensions)(this.div,{rotation:viewport.rotation});this.updateMode();}get pageDimensions(){const{pageWidth,pageHeight}=this.viewport.rawDims;return [pageWidth,pageHeight];}}exports.AnnotationEditorLayer=AnnotationEditorLayer;/***/},/* 28 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.FreeTextEditor=void 0;var _util=__w_pdfjs_require__(1);var _tools=__w_pdfjs_require__(5);var _editor=__w_pdfjs_require__(4);class FreeTextEditor extends _editor.AnnotationEditor{#boundEditorDivBlur=this.editorDivBlur.bind(this);#boundEditorDivFocus=this.editorDivFocus.bind(this);#boundEditorDivInput=this.editorDivInput.bind(this);#boundEditorDivKeydown=this.editorDivKeydown.bind(this);#color;#content="";#editorDivId=`${this.id}-editor`;#hasAlreadyBeenCommitted=false;#fontSize;static _freeTextDefaultContent="";static _l10nPromise;static _internalPadding=0;static _defaultColor=null;static _defaultFontSize=10;static _keyboardManager=new _tools.KeyboardManager([[["ctrl+Enter","mac+meta+Enter","Escape","mac+Escape"],FreeTextEditor.prototype.commitOrRemove]]);static _type="freetext";constructor(params){super({...params,name:"freeTextEditor"});this.#color=params.color||FreeTextEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor;this.#fontSize=params.fontSize||FreeTextEditor._defaultFontSize;}static initialize(l10n){this._l10nPromise=new Map(["free_text2_default_content","editor_free_text2_aria_label"].map(str=>[str,l10n.get(str)]));const style=getComputedStyle(document.documentElement);this._internalPadding=parseFloat(style.getPropertyValue("--freetext-padding"));}static updateDefaultParams(type,value){switch(type){case _util.AnnotationEditorParamsType.FREETEXT_SIZE:FreeTextEditor._defaultFontSize=value;break;case _util.AnnotationEditorParamsType.FREETEXT_COLOR:FreeTextEditor._defaultColor=value;break;}}updateParams(type,value){switch(type){case _util.AnnotationEditorParamsType.FREETEXT_SIZE:this.#updateFontSize(value);break;case _util.AnnotationEditorParamsType.FREETEXT_COLOR:this.#updateColor(value);break;}}static get defaultPropertiesToUpdate(){return [[_util.AnnotationEditorParamsType.FREETEXT_SIZE,FreeTextEditor._defaultFontSize],[_util.AnnotationEditorParamsType.FREETEXT_COLOR,FreeTextEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor]];}get propertiesToUpdate(){return [[_util.AnnotationEditorParamsType.FREETEXT_SIZE,this.#fontSize],[_util.AnnotationEditorParamsType.FREETEXT_COLOR,this.#color]];}#updateFontSize(fontSize){const setFontsize=size=>{this.editorDiv.style.fontSize=`calc(${size}px * var(--scale-factor))`;this.translate(0,-(size-this.#fontSize)*this.parentScale);this.#fontSize=size;this.#setEditorDimensions();};const savedFontsize=this.#fontSize;this.addCommands({cmd:()=>{setFontsize(fontSize);},undo:()=>{setFontsize(savedFontsize);},mustExec:true,type:_util.AnnotationEditorParamsType.FREETEXT_SIZE,overwriteIfSameType:true,keepUndo:true});}#updateColor(color){const savedColor=this.#color;this.addCommands({cmd:()=>{this.#color=this.editorDiv.style.color=color;},undo:()=>{this.#color=this.editorDiv.style.color=savedColor;},mustExec:true,type:_util.AnnotationEditorParamsType.FREETEXT_COLOR,overwriteIfSameType:true,keepUndo:true});}getInitialTranslation(){const scale=this.parentScale;return [-FreeTextEditor._internalPadding*scale,-(FreeTextEditor._internalPadding+this.#fontSize)*scale];}rebuild(){super.rebuild();if(this.div===null){return;}if(!this.isAttachedToDOM){this.parent.add(this);}}enableEditMode(){if(this.isInEditMode()){return;}this.parent.setEditingState(false);this.parent.updateToolbar(_util.AnnotationEditorType.FREETEXT);super.enableEditMode();this.overlayDiv.classList.remove("enabled");this.editorDiv.contentEditable=true;this.div.draggable=false;this.div.removeAttribute("aria-activedescendant");this.editorDiv.addEventListener("keydown",this.#boundEditorDivKeydown);this.editorDiv.addEventListener("focus",this.#boundEditorDivFocus);this.editorDiv.addEventListener("blur",this.#boundEditorDivBlur);this.editorDiv.addEventListener("input",this.#boundEditorDivInput);}disableEditMode(){if(!this.isInEditMode()){return;}this.parent.setEditingState(true);super.disableEditMode();this.overlayDiv.classList.add("enabled");this.editorDiv.contentEditable=false;this.div.setAttribute("aria-activedescendant",this.#editorDivId);this.div.draggable=true;this.editorDiv.removeEventListener("keydown",this.#boundEditorDivKeydown);this.editorDiv.removeEventListener("focus",this.#boundEditorDivFocus);this.editorDiv.removeEventListener("blur",this.#boundEditorDivBlur);this.editorDiv.removeEventListener("input",this.#boundEditorDivInput);this.div.focus({preventScroll:true});this.isEditing=false;this.parent.div.classList.add("freeTextEditing");}focusin(event){super.focusin(event);if(event.target!==this.editorDiv){this.editorDiv.focus();}}onceAdded(){if(this.width){return;}this.enableEditMode();this.editorDiv.focus();}isEmpty(){return !this.editorDiv||this.editorDiv.innerText.trim()==="";}remove(){this.isEditing=false;this.parent.setEditingState(true);this.parent.div.classList.add("freeTextEditing");super.remove();}#extractText(){const divs=this.editorDiv.getElementsByTagName("div");if(divs.length===0){return this.editorDiv.innerText;}const buffer=[];for(const div of divs){buffer.push(div.innerText.replace(/\r\n?|\n/,""));}return buffer.join("\n");}#setEditorDimensions(){const[parentWidth,parentHeight]=this.parentDimensions;let rect;if(this.isAttachedToDOM){rect=this.div.getBoundingClientRect();}else {const{currentLayer,div}=this;const savedDisplay=div.style.display;div.style.display="hidden";currentLayer.div.append(this.div);rect=div.getBoundingClientRect();div.remove();div.style.display=savedDisplay;}this.width=rect.width/parentWidth;this.height=rect.height/parentHeight;}commit(){if(!this.isInEditMode()){return;}super.commit();if(!this.#hasAlreadyBeenCommitted){this.#hasAlreadyBeenCommitted=true;this.parent.addUndoableEditor(this);}this.disableEditMode();this.#content=this.#extractText().trimEnd();this.#setEditorDimensions();}shouldGetKeyboardEvents(){return this.isInEditMode();}dblclick(event){this.enableEditMode();this.editorDiv.focus();}keydown(event){if(event.target===this.div&&event.key==="Enter"){this.enableEditMode();this.editorDiv.focus();}}editorDivKeydown(event){FreeTextEditor._keyboardManager.exec(this,event);}editorDivFocus(event){this.isEditing=true;}editorDivBlur(event){this.isEditing=false;}editorDivInput(event){this.parent.div.classList.toggle("freeTextEditing",this.isEmpty());}disableEditing(){this.editorDiv.setAttribute("role","comment");this.editorDiv.removeAttribute("aria-multiline");}enableEditing(){this.editorDiv.setAttribute("role","textbox");this.editorDiv.setAttribute("aria-multiline",true);}render(){if(this.div){return this.div;}let baseX,baseY;if(this.width){baseX=this.x;baseY=this.y;}super.render();this.editorDiv=document.createElement("div");this.editorDiv.className="internal";this.editorDiv.setAttribute("id",this.#editorDivId);this.enableEditing();FreeTextEditor._l10nPromise.get("editor_free_text2_aria_label").then(msg=>this.editorDiv?.setAttribute("aria-label",msg));FreeTextEditor._l10nPromise.get("free_text2_default_content").then(msg=>this.editorDiv?.setAttribute("default-content",msg));this.editorDiv.contentEditable=true;const{style}=this.editorDiv;style.fontSize=`calc(${this.#fontSize}px * var(--scale-factor))`;style.color=this.#color;this.div.append(this.editorDiv);this.overlayDiv=document.createElement("div");this.overlayDiv.classList.add("overlay","enabled");this.div.append(this.overlayDiv);(0, _tools.bindEvents)(this,this.div,["dblclick","keydown"]);if(this.width){const[parentWidth,parentHeight]=this.parentDimensions;this.setAt(baseX*parentWidth,baseY*parentHeight,this.width*parentWidth,this.height*parentHeight);for(const line of this.#content.split("\n")){const div=document.createElement("div");div.append(line?document.createTextNode(line):document.createElement("br"));this.editorDiv.append(div);}this.div.draggable=true;this.editorDiv.contentEditable=false;}else {this.div.draggable=false;this.editorDiv.contentEditable=true;}return this.div;}get contentDiv(){return this.editorDiv;}static deserialize(data,parent,uiManager){const editor=super.deserialize(data,parent,uiManager);editor.#fontSize=data.fontSize;editor.#color=_util.Util.makeHexColor(...data.color);editor.#content=data.value;return editor;}serialize(){if(this.isEmpty()){return null;}const padding=FreeTextEditor._internalPadding*this.parentScale;const rect=this.getRect(padding,padding);const color=_editor.AnnotationEditor._colorManager.convert(this.isAttachedToDOM?getComputedStyle(this.editorDiv).color:this.#color);return {annotationType:_util.AnnotationEditorType.FREETEXT,color,fontSize:this.#fontSize,value:this.#content,pageIndex:this.pageIndex,rect,rotation:this.rotation};}}exports.FreeTextEditor=FreeTextEditor;/***/},/* 29 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.InkEditor=void 0;Object.defineProperty(exports,"fitCurve",{enumerable:true,get:function(){return _pdfjsFitCurve.fitCurve;}});var _util=__w_pdfjs_require__(1);var _editor=__w_pdfjs_require__(4);var _pdfjsFitCurve=__w_pdfjs_require__(30);var _tools=__w_pdfjs_require__(5);const RESIZER_SIZE=16;const TIME_TO_WAIT_BEFORE_FIXING_DIMS=100;class InkEditor extends _editor.AnnotationEditor{#aspectRatio=0;#baseHeight=0;#baseWidth=0;#boundCanvasPointermove=this.canvasPointermove.bind(this);#boundCanvasPointerleave=this.canvasPointerleave.bind(this);#boundCanvasPointerup=this.canvasPointerup.bind(this);#boundCanvasPointerdown=this.canvasPointerdown.bind(this);#disableEditing=false;#isCanvasInitialized=false;#lastPoint=null;#observer=null;#realWidth=0;#realHeight=0;#requestFrameCallback=null;static _defaultColor=null;static _defaultOpacity=1;static _defaultThickness=1;static _l10nPromise;static _type="ink";constructor(params){super({...params,name:"inkEditor"});this.color=params.color||null;this.thickness=params.thickness||null;this.opacity=params.opacity||null;this.paths=[];this.bezierPath2D=[];this.currentPath=[];this.scaleFactor=1;this.translationX=this.translationY=0;this.x=0;this.y=0;}static initialize(l10n){this._l10nPromise=new Map(["editor_ink_canvas_aria_label","editor_ink2_aria_label"].map(str=>[str,l10n.get(str)]));}static updateDefaultParams(type,value){switch(type){case _util.AnnotationEditorParamsType.INK_THICKNESS:InkEditor._defaultThickness=value;break;case _util.AnnotationEditorParamsType.INK_COLOR:InkEditor._defaultColor=value;break;case _util.AnnotationEditorParamsType.INK_OPACITY:InkEditor._defaultOpacity=value/100;break;}}updateParams(type,value){switch(type){case _util.AnnotationEditorParamsType.INK_THICKNESS:this.#updateThickness(value);break;case _util.AnnotationEditorParamsType.INK_COLOR:this.#updateColor(value);break;case _util.AnnotationEditorParamsType.INK_OPACITY:this.#updateOpacity(value);break;}}static get defaultPropertiesToUpdate(){return [[_util.AnnotationEditorParamsType.INK_THICKNESS,InkEditor._defaultThickness],[_util.AnnotationEditorParamsType.INK_COLOR,InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor],[_util.AnnotationEditorParamsType.INK_OPACITY,Math.round(InkEditor._defaultOpacity*100)]];}get propertiesToUpdate(){return [[_util.AnnotationEditorParamsType.INK_THICKNESS,this.thickness||InkEditor._defaultThickness],[_util.AnnotationEditorParamsType.INK_COLOR,this.color||InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor],[_util.AnnotationEditorParamsType.INK_OPACITY,Math.round(100*(this.opacity??InkEditor._defaultOpacity))]];}#updateThickness(thickness){const savedThickness=this.thickness;this.addCommands({cmd:()=>{this.thickness=thickness;this.#fitToContent();},undo:()=>{this.thickness=savedThickness;this.#fitToContent();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_THICKNESS,overwriteIfSameType:true,keepUndo:true});}#updateColor(color){const savedColor=this.color;this.addCommands({cmd:()=>{this.color=color;this.#redraw();},undo:()=>{this.color=savedColor;this.#redraw();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_COLOR,overwriteIfSameType:true,keepUndo:true});}#updateOpacity(opacity){opacity/=100;const savedOpacity=this.opacity;this.addCommands({cmd:()=>{this.opacity=opacity;this.#redraw();},undo:()=>{this.opacity=savedOpacity;this.#redraw();},mustExec:true,type:_util.AnnotationEditorParamsType.INK_OPACITY,overwriteIfSameType:true,keepUndo:true});}rebuild(){super.rebuild();if(this.div===null){return;}if(!this.canvas){this.#createCanvas();this.#createObserver();}if(!this.isAttachedToDOM){this.parent.add(this);this.#setCanvasDims();}this.#fitToContent();}remove(){if(this.canvas===null){return;}if(!this.isEmpty()){this.commit();}this.canvas.width=this.canvas.height=0;this.canvas.remove();this.canvas=null;this.#observer.disconnect();this.#observer=null;super.remove();}setParent(parent){if(!this.parent&&parent){this._uiManager.removeShouldRescale(this);}else if(this.parent&&parent===null){this._uiManager.addShouldRescale(this);}super.setParent(parent);}onScaleChanging(){const[parentWidth,parentHeight]=this.parentDimensions;const width=this.width*parentWidth;const height=this.height*parentHeight;this.setDimensions(width,height);}enableEditMode(){if(this.#disableEditing||this.canvas===null){return;}super.enableEditMode();this.div.draggable=false;this.canvas.addEventListener("pointerdown",this.#boundCanvasPointerdown);this.canvas.addEventListener("pointerup",this.#boundCanvasPointerup);}disableEditMode(){if(!this.isInEditMode()||this.canvas===null){return;}super.disableEditMode();this.div.draggable=!this.isEmpty();this.div.classList.remove("editing");this.canvas.removeEventListener("pointerdown",this.#boundCanvasPointerdown);this.canvas.removeEventListener("pointerup",this.#boundCanvasPointerup);}onceAdded(){this.div.draggable=!this.isEmpty();}isEmpty(){return this.paths.length===0||this.paths.length===1&&this.paths[0].length===0;}#getInitialBBox(){const{parentRotation,parentDimensions:[width,height]}=this;switch(parentRotation){case 90:return [0,height,height,width];case 180:return [width,height,width,height];case 270:return [width,0,height,width];default:return [0,0,width,height];}}#setStroke(){const{ctx,color,opacity,thickness,parentScale,scaleFactor}=this;ctx.lineWidth=thickness*parentScale/scaleFactor;ctx.lineCap="round";ctx.lineJoin="round";ctx.miterLimit=10;ctx.strokeStyle=`${color}${(0, _tools.opacityToHex)(opacity)}`;}#startDrawing(x,y){this.isEditing=true;if(!this.#isCanvasInitialized){this.#isCanvasInitialized=true;this.#setCanvasDims();this.thickness||=InkEditor._defaultThickness;this.color||=InkEditor._defaultColor||_editor.AnnotationEditor._defaultLineColor;this.opacity??=InkEditor._defaultOpacity;}this.currentPath.push([x,y]);this.#lastPoint=null;this.#setStroke();this.ctx.beginPath();this.ctx.moveTo(x,y);this.#requestFrameCallback=()=>{if(!this.#requestFrameCallback){return;}if(this.#lastPoint){if(this.isEmpty()){this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);}else {this.#redraw();}this.ctx.lineTo(...this.#lastPoint);this.#lastPoint=null;this.ctx.stroke();}window.requestAnimationFrame(this.#requestFrameCallback);};window.requestAnimationFrame(this.#requestFrameCallback);}#draw(x,y){const[lastX,lastY]=this.currentPath.at(-1);if(x===lastX&&y===lastY){return;}this.currentPath.push([x,y]);this.#lastPoint=[x,y];}#stopDrawing(x,y){this.ctx.closePath();this.#requestFrameCallback=null;x=Math.min(Math.max(x,0),this.canvas.width);y=Math.min(Math.max(y,0),this.canvas.height);const[lastX,lastY]=this.currentPath.at(-1);if(x!==lastX||y!==lastY){this.currentPath.push([x,y]);}let bezier;if(this.currentPath.length!==1){bezier=(0, _pdfjsFitCurve.fitCurve)(this.currentPath,30,null);}else {const xy=[x,y];bezier=[[xy,xy.slice(),xy.slice(),xy]];}const path2D=InkEditor.#buildPath2D(bezier);this.currentPath.length=0;const cmd=()=>{this.paths.push(bezier);this.bezierPath2D.push(path2D);this.rebuild();};const undo=()=>{this.paths.pop();this.bezierPath2D.pop();if(this.paths.length===0){this.remove();}else {if(!this.canvas){this.#createCanvas();this.#createObserver();}this.#fitToContent();}};this.addCommands({cmd,undo,mustExec:true});}#redraw(){if(this.isEmpty()){this.#updateTransform();return;}this.#setStroke();const{canvas,ctx}=this;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);this.#updateTransform();for(const path of this.bezierPath2D){ctx.stroke(path);}}commit(){if(this.#disableEditing){return;}super.commit();this.isEditing=false;this.disableEditMode();this.setInForeground();this.#disableEditing=true;this.div.classList.add("disabled");this.#fitToContent(true);this.parent.addInkEditorIfNeeded(true);this.parent.moveEditorInDOM(this);this.div.focus({preventScroll:true});}focusin(event){super.focusin(event);this.enableEditMode();}canvasPointerdown(event){if(event.button!==0||!this.isInEditMode()||this.#disableEditing){return;}this.setInForeground();if(event.type!=="mouse"){this.div.focus();}event.stopPropagation();this.canvas.addEventListener("pointerleave",this.#boundCanvasPointerleave);this.canvas.addEventListener("pointermove",this.#boundCanvasPointermove);this.#startDrawing(event.offsetX,event.offsetY);}canvasPointermove(event){event.stopPropagation();this.#draw(event.offsetX,event.offsetY);}canvasPointerup(event){if(event.button!==0){return;}if(this.isInEditMode()&&this.currentPath.length!==0){event.stopPropagation();this.#endDrawing(event);this.setInBackground();}}canvasPointerleave(event){this.#endDrawing(event);this.setInBackground();}#endDrawing(event){this.#stopDrawing(event.offsetX,event.offsetY);this.canvas.removeEventListener("pointerleave",this.#boundCanvasPointerleave);this.canvas.removeEventListener("pointermove",this.#boundCanvasPointermove);this.addToAnnotationStorage();}#createCanvas(){this.canvas=document.createElement("canvas");this.canvas.width=this.canvas.height=0;this.canvas.className="inkEditorCanvas";InkEditor._l10nPromise.get("editor_ink_canvas_aria_label").then(msg=>this.canvas?.setAttribute("aria-label",msg));this.div.append(this.canvas);this.ctx=this.canvas.getContext("2d");}#createObserver(){let timeoutId=null;this.#observer=new ResizeObserver(entries=>{const rect=entries[0].contentRect;if(rect.width&&rect.height){if(timeoutId!==null){clearTimeout(timeoutId);}timeoutId=setTimeout(()=>{this.fixDims();timeoutId=null;},TIME_TO_WAIT_BEFORE_FIXING_DIMS);this.setDimensions(rect.width,rect.height);}});this.#observer.observe(this.div);}render(){if(this.div){return this.div;}let baseX,baseY;if(this.width){baseX=this.x;baseY=this.y;}super.render();InkEditor._l10nPromise.get("editor_ink2_aria_label").then(msg=>this.div?.setAttribute("aria-label",msg));const[x,y,w,h]=this.#getInitialBBox();this.setAt(x,y,0,0);this.setDims(w,h);this.#createCanvas();if(this.width){const[parentWidth,parentHeight]=this.parentDimensions;this.setAt(baseX*parentWidth,baseY*parentHeight,this.width*parentWidth,this.height*parentHeight);this.#isCanvasInitialized=true;this.#setCanvasDims();this.setDims(this.width*parentWidth,this.height*parentHeight);this.#redraw();this.#setMinDims();this.div.classList.add("disabled");}else {this.div.classList.add("editing");this.enableEditMode();}this.#createObserver();return this.div;}#setCanvasDims(){if(!this.#isCanvasInitialized){return;}const[parentWidth,parentHeight]=this.parentDimensions;this.canvas.width=Math.ceil(this.width*parentWidth);this.canvas.height=Math.ceil(this.height*parentHeight);this.#updateTransform();}setDimensions(width,height){const roundedWidth=Math.round(width);const roundedHeight=Math.round(height);if(this.#realWidth===roundedWidth&&this.#realHeight===roundedHeight){return;}this.#realWidth=roundedWidth;this.#realHeight=roundedHeight;this.canvas.style.visibility="hidden";if(this.#aspectRatio&&Math.abs(this.#aspectRatio-width/height)>1e-2){height=Math.ceil(width/this.#aspectRatio);this.setDims(width,height);}const[parentWidth,parentHeight]=this.parentDimensions;this.width=width/parentWidth;this.height=height/parentHeight;if(this.#disableEditing){this.#setScaleFactor(width,height);}this.#setCanvasDims();this.#redraw();this.canvas.style.visibility="visible";}#setScaleFactor(width,height){const padding=this.#getPadding();const scaleFactorW=(width-padding)/this.#baseWidth;const scaleFactorH=(height-padding)/this.#baseHeight;this.scaleFactor=Math.min(scaleFactorW,scaleFactorH);}#updateTransform(){const padding=this.#getPadding()/2;this.ctx.setTransform(this.scaleFactor,0,0,this.scaleFactor,this.translationX*this.scaleFactor+padding,this.translationY*this.scaleFactor+padding);}static#buildPath2D(bezier){const path2D=new Path2D();for(let i=0,ii=bezier.length;i<ii;i++){const[first,control1,control2,second]=bezier[i];if(i===0){path2D.moveTo(...first);}path2D.bezierCurveTo(control1[0],control1[1],control2[0],control2[1],second[0],second[1]);}return path2D;}#serializePaths(s,tx,ty,h){const NUMBER_OF_POINTS_ON_BEZIER_CURVE=4;const paths=[];const padding=this.thickness/2;let buffer,points;for(const bezier of this.paths){buffer=[];points=[];for(let i=0,ii=bezier.length;i<ii;i++){const[first,control1,control2,second]=bezier[i];const p10=s*(first[0]+tx)+padding;const p11=h-s*(first[1]+ty)-padding;const p20=s*(control1[0]+tx)+padding;const p21=h-s*(control1[1]+ty)-padding;const p30=s*(control2[0]+tx)+padding;const p31=h-s*(control2[1]+ty)-padding;const p40=s*(second[0]+tx)+padding;const p41=h-s*(second[1]+ty)-padding;if(i===0){buffer.push(p10,p11);points.push(p10,p11);}buffer.push(p20,p21,p30,p31,p40,p41);this.#extractPointsOnBezier(p10,p11,p20,p21,p30,p31,p40,p41,NUMBER_OF_POINTS_ON_BEZIER_CURVE,points);}paths.push({bezier:buffer,points});}return paths;}#extractPointsOnBezier(p10,p11,p20,p21,p30,p31,p40,p41,n,points){if(this.#isAlmostFlat(p10,p11,p20,p21,p30,p31,p40,p41)){points.push(p40,p41);return;}for(let i=1;i<n-1;i++){const t=i/n;const mt=1-t;let q10=t*p10+mt*p20;let q11=t*p11+mt*p21;let q20=t*p20+mt*p30;let q21=t*p21+mt*p31;const q30=t*p30+mt*p40;const q31=t*p31+mt*p41;q10=t*q10+mt*q20;q11=t*q11+mt*q21;q20=t*q20+mt*q30;q21=t*q21+mt*q31;q10=t*q10+mt*q20;q11=t*q11+mt*q21;points.push(q10,q11);}points.push(p40,p41);}#isAlmostFlat(p10,p11,p20,p21,p30,p31,p40,p41){const tol=10;const ax=(3*p20-2*p10-p40)**2;const ay=(3*p21-2*p11-p41)**2;const bx=(3*p30-p10-2*p40)**2;const by=(3*p31-p11-2*p41)**2;return Math.max(ax,bx)+Math.max(ay,by)<=tol;}#getBbox(){let xMin=Infinity;let xMax=-Infinity;let yMin=Infinity;let yMax=-Infinity;for(const path of this.paths){for(const[first,control1,control2,second]of path){const bbox=_util.Util.bezierBoundingBox(...first,...control1,...control2,...second);xMin=Math.min(xMin,bbox[0]);yMin=Math.min(yMin,bbox[1]);xMax=Math.max(xMax,bbox[2]);yMax=Math.max(yMax,bbox[3]);}}return [xMin,yMin,xMax,yMax];}#getPadding(){return this.#disableEditing?Math.ceil(this.thickness*this.parentScale):0;}#fitToContent(firstTime=false){if(this.isEmpty()){return;}if(!this.#disableEditing){this.#redraw();return;}const bbox=this.#getBbox();const padding=this.#getPadding();this.#baseWidth=Math.max(RESIZER_SIZE,bbox[2]-bbox[0]);this.#baseHeight=Math.max(RESIZER_SIZE,bbox[3]-bbox[1]);const width=Math.ceil(padding+this.#baseWidth*this.scaleFactor);const height=Math.ceil(padding+this.#baseHeight*this.scaleFactor);const[parentWidth,parentHeight]=this.parentDimensions;this.width=width/parentWidth;this.height=height/parentHeight;this.#aspectRatio=width/height;this.#setMinDims();const prevTranslationX=this.translationX;const prevTranslationY=this.translationY;this.translationX=-bbox[0];this.translationY=-bbox[1];this.#setCanvasDims();this.#redraw();this.#realWidth=width;this.#realHeight=height;this.setDims(width,height);const unscaledPadding=firstTime?padding/this.scaleFactor/2:0;this.translate(prevTranslationX-this.translationX-unscaledPadding,prevTranslationY-this.translationY-unscaledPadding);}#setMinDims(){const{style}=this.div;if(this.#aspectRatio>=1){style.minHeight=`${RESIZER_SIZE}px`;style.minWidth=`${Math.round(this.#aspectRatio*RESIZER_SIZE)}px`;}else {style.minWidth=`${RESIZER_SIZE}px`;style.minHeight=`${Math.round(RESIZER_SIZE/this.#aspectRatio)}px`;}}static deserialize(data,parent,uiManager){const editor=super.deserialize(data,parent,uiManager);editor.thickness=data.thickness;editor.color=_util.Util.makeHexColor(...data.color);editor.opacity=data.opacity;const[pageWidth,pageHeight]=editor.pageDimensions;const width=editor.width*pageWidth;const height=editor.height*pageHeight;const scaleFactor=editor.parentScale;const padding=data.thickness/2;editor.#aspectRatio=width/height;editor.#disableEditing=true;editor.#realWidth=Math.round(width);editor.#realHeight=Math.round(height);for(const{bezier}of data.paths){const path=[];editor.paths.push(path);let p0=scaleFactor*(bezier[0]-padding);let p1=scaleFactor*(height-bezier[1]-padding);for(let i=2,ii=bezier.length;i<ii;i+=6){const p10=scaleFactor*(bezier[i]-padding);const p11=scaleFactor*(height-bezier[i+1]-padding);const p20=scaleFactor*(bezier[i+2]-padding);const p21=scaleFactor*(height-bezier[i+3]-padding);const p30=scaleFactor*(bezier[i+4]-padding);const p31=scaleFactor*(height-bezier[i+5]-padding);path.push([[p0,p1],[p10,p11],[p20,p21],[p30,p31]]);p0=p30;p1=p31;}const path2D=this.#buildPath2D(path);editor.bezierPath2D.push(path2D);}const bbox=editor.#getBbox();editor.#baseWidth=Math.max(RESIZER_SIZE,bbox[2]-bbox[0]);editor.#baseHeight=Math.max(RESIZER_SIZE,bbox[3]-bbox[1]);editor.#setScaleFactor(width,height);return editor;}serialize(){if(this.isEmpty()){return null;}const rect=this.getRect(0,0);const height=this.rotation%180===0?rect[3]-rect[1]:rect[2]-rect[0];const color=_editor.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);return {annotationType:_util.AnnotationEditorType.INK,color,thickness:this.thickness,opacity:this.opacity,paths:this.#serializePaths(this.scaleFactor/this.parentScale,this.translationX,this.translationY,height),pageIndex:this.pageIndex,rect,rotation:this.rotation};}}exports.InkEditor=InkEditor;/***/},/* 30 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.fitCurve=void 0;const fitCurve=__w_pdfjs_require__(31);exports.fitCurve=fitCurve;/***/},/* 31 */ /***/module=>{function fitCurve(points,maxError,progressCallback){if(!Array.isArray(points)){throw new TypeError("First argument should be an array");}points.forEach(point=>{if(!Array.isArray(point)||point.some(item=>typeof item!=='number')||point.length!==points[0].length){throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.");}});points=points.filter((point,i)=>i===0||!point.every((val,j)=>val===points[i-1][j]));if(points.length<2){return [];}const len=points.length;const leftTangent=createTangent(points[1],points[0]);const rightTangent=createTangent(points[len-2],points[len-1]);return fitCubic(points,leftTangent,rightTangent,maxError,progressCallback);}function fitCubic(points,leftTangent,rightTangent,error,progressCallback){const MaxIterations=20;var bezCurve,u,uPrime,maxError,prevErr,splitPoint,prevSplit,centerVector,toCenterTangent,fromCenterTangent,beziers,dist,i;if(points.length===2){dist=maths.vectorLen(maths.subtract(points[0],points[1]))/3.0;bezCurve=[points[0],maths.addArrays(points[0],maths.mulItems(leftTangent,dist)),maths.addArrays(points[1],maths.mulItems(rightTangent,dist)),points[1]];return [bezCurve];}u=chordLengthParameterize(points);[bezCurve,maxError,splitPoint]=generateAndReport(points,u,u,leftTangent,rightTangent,progressCallback);if(maxError===0||maxError<error){return [bezCurve];}if(maxError<error*error){uPrime=u;prevErr=maxError;prevSplit=splitPoint;for(i=0;i<MaxIterations;i++){uPrime=reparameterize(bezCurve,points,uPrime);[bezCurve,maxError,splitPoint]=generateAndReport(points,u,uPrime,leftTangent,rightTangent,progressCallback);if(maxError<error){return [bezCurve];}else if(splitPoint===prevSplit){let errChange=maxError/prevErr;if(errChange>.9999&&errChange<1.0001){break;}}prevErr=maxError;prevSplit=splitPoint;}}beziers=[];centerVector=maths.subtract(points[splitPoint-1],points[splitPoint+1]);if(centerVector.every(val=>val===0)){centerVector=maths.subtract(points[splitPoint-1],points[splitPoint]);[centerVector[0],centerVector[1]]=[-centerVector[1],centerVector[0]];}toCenterTangent=maths.normalize(centerVector);fromCenterTangent=maths.mulItems(toCenterTangent,-1);beziers=beziers.concat(fitCubic(points.slice(0,splitPoint+1),leftTangent,toCenterTangent,error,progressCallback));beziers=beziers.concat(fitCubic(points.slice(splitPoint),fromCenterTangent,rightTangent,error,progressCallback));return beziers;}function generateAndReport(points,paramsOrig,paramsPrime,leftTangent,rightTangent,progressCallback){var bezCurve,maxError,splitPoint;bezCurve=generateBezier(points,paramsPrime,leftTangent,rightTangent);[maxError,splitPoint]=computeMaxError(points,bezCurve,paramsOrig);if(progressCallback){progressCallback({bez:bezCurve,points:points,params:paramsOrig,maxErr:maxError,maxPoint:splitPoint});}return [bezCurve,maxError,splitPoint];}function generateBezier(points,parameters,leftTangent,rightTangent){var bezCurve,A,a,C,X,det_C0_C1,det_C0_X,det_X_C1,alpha_l,alpha_r,epsilon,segLength,i,len,tmp,u,ux,firstPoint=points[0],lastPoint=points[points.length-1];bezCurve=[firstPoint,null,null,lastPoint];A=maths.zeros_Xx2x2(parameters.length);for(i=0,len=parameters.length;i<len;i++){u=parameters[i];ux=1-u;a=A[i];a[0]=maths.mulItems(leftTangent,3*u*(ux*ux));a[1]=maths.mulItems(rightTangent,3*ux*(u*u));}C=[[0,0],[0,0]];X=[0,0];for(i=0,len=points.length;i<len;i++){u=parameters[i];a=A[i];C[0][0]+=maths.dot(a[0],a[0]);C[0][1]+=maths.dot(a[0],a[1]);C[1][0]+=maths.dot(a[0],a[1]);C[1][1]+=maths.dot(a[1],a[1]);tmp=maths.subtract(points[i],bezier.q([firstPoint,firstPoint,lastPoint,lastPoint],u));X[0]+=maths.dot(a[0],tmp);X[1]+=maths.dot(a[1],tmp);}det_C0_C1=C[0][0]*C[1][1]-C[1][0]*C[0][1];det_C0_X=C[0][0]*X[1]-C[1][0]*X[0];det_X_C1=X[0]*C[1][1]-X[1]*C[0][1];alpha_l=det_C0_C1===0?0:det_X_C1/det_C0_C1;alpha_r=det_C0_C1===0?0:det_C0_X/det_C0_C1;segLength=maths.vectorLen(maths.subtract(firstPoint,lastPoint));epsilon=1.0e-6*segLength;if(alpha_l<epsilon||alpha_r<epsilon){bezCurve[1]=maths.addArrays(firstPoint,maths.mulItems(leftTangent,segLength/3.0));bezCurve[2]=maths.addArrays(lastPoint,maths.mulItems(rightTangent,segLength/3.0));}else {bezCurve[1]=maths.addArrays(firstPoint,maths.mulItems(leftTangent,alpha_l));bezCurve[2]=maths.addArrays(lastPoint,maths.mulItems(rightTangent,alpha_r));}return bezCurve;}function reparameterize(bezier,points,parameters){return parameters.map((p,i)=>newtonRaphsonRootFind(bezier,points[i],p));}function newtonRaphsonRootFind(bez,point,u){var d=maths.subtract(bezier.q(bez,u),point),qprime=bezier.qprime(bez,u),numerator=maths.mulMatrix(d,qprime),denominator=maths.sum(maths.squareItems(qprime))+2*maths.mulMatrix(d,bezier.qprimeprime(bez,u));if(denominator===0){return u;}else {return u-numerator/denominator;}}function chordLengthParameterize(points){var u=[],currU,prevU,prevP;points.forEach((p,i)=>{currU=i?prevU+maths.vectorLen(maths.subtract(p,prevP)):0;u.push(currU);prevU=currU;prevP=p;});u=u.map(x=>x/prevU);return u;}function computeMaxError(points,bez,parameters){var dist,maxDist,splitPoint,v,i,count,point,t;maxDist=0;splitPoint=Math.floor(points.length/2);const t_distMap=mapTtoRelativeDistances(bez,10);for(i=0,count=points.length;i<count;i++){point=points[i];t=find_t(bez,parameters[i],t_distMap,10);v=maths.subtract(bezier.q(bez,t),point);dist=v[0]*v[0]+v[1]*v[1];if(dist>maxDist){maxDist=dist;splitPoint=i;}}return [maxDist,splitPoint];}var mapTtoRelativeDistances=function(bez,B_parts){var B_t_curr;var B_t_dist=[0];var B_t_prev=bez[0];var sumLen=0;for(var i=1;i<=B_parts;i++){B_t_curr=bezier.q(bez,i/B_parts);sumLen+=maths.vectorLen(maths.subtract(B_t_curr,B_t_prev));B_t_dist.push(sumLen);B_t_prev=B_t_curr;}B_t_dist=B_t_dist.map(x=>x/sumLen);return B_t_dist;};function find_t(bez,param,t_distMap,B_parts){if(param<0){return 0;}if(param>1){return 1;}var lenMax,lenMin,tMax,tMin,t;for(var i=1;i<=B_parts;i++){if(param<=t_distMap[i]){tMin=(i-1)/B_parts;tMax=i/B_parts;lenMin=t_distMap[i-1];lenMax=t_distMap[i];t=(param-lenMin)/(lenMax-lenMin)*(tMax-tMin)+tMin;break;}}return t;}function createTangent(pointA,pointB){return maths.normalize(maths.subtract(pointA,pointB));}class maths{static zeros_Xx2x2(x){var zs=[];while(x--){zs.push([0,0]);}return zs;}static mulItems(items,multiplier){return items.map(x=>x*multiplier);}static mulMatrix(m1,m2){return m1.reduce((sum,x1,i)=>sum+x1*m2[i],0);}static subtract(arr1,arr2){return arr1.map((x1,i)=>x1-arr2[i]);}static addArrays(arr1,arr2){return arr1.map((x1,i)=>x1+arr2[i]);}static addItems(items,addition){return items.map(x=>x+addition);}static sum(items){return items.reduce((sum,x)=>sum+x);}static dot(m1,m2){return maths.mulMatrix(m1,m2);}static vectorLen(v){return Math.hypot(...v);}static divItems(items,divisor){return items.map(x=>x/divisor);}static squareItems(items){return items.map(x=>x*x);}static normalize(v){return this.divItems(v,this.vectorLen(v));}}class bezier{static q(ctrlPoly,t){var tx=1.0-t;var pA=maths.mulItems(ctrlPoly[0],tx*tx*tx),pB=maths.mulItems(ctrlPoly[1],3*tx*tx*t),pC=maths.mulItems(ctrlPoly[2],3*tx*t*t),pD=maths.mulItems(ctrlPoly[3],t*t*t);return maths.addArrays(maths.addArrays(pA,pB),maths.addArrays(pC,pD));}static qprime(ctrlPoly,t){var tx=1.0-t;var pA=maths.mulItems(maths.subtract(ctrlPoly[1],ctrlPoly[0]),3*tx*tx),pB=maths.mulItems(maths.subtract(ctrlPoly[2],ctrlPoly[1]),6*tx*t),pC=maths.mulItems(maths.subtract(ctrlPoly[3],ctrlPoly[2]),3*t*t);return maths.addArrays(maths.addArrays(pA,pB),pC);}static qprimeprime(ctrlPoly,t){return maths.addArrays(maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[2],maths.mulItems(ctrlPoly[1],2)),ctrlPoly[0]),6*(1.0-t)),maths.mulItems(maths.addArrays(maths.subtract(ctrlPoly[3],maths.mulItems(ctrlPoly[2],2)),ctrlPoly[1]),6*t));}}module.exports=fitCurve;module.exports.fitCubic=fitCubic;module.exports.createTangent=createTangent;/***/},/* 32 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationLayer=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(6);var _annotation_storage=__w_pdfjs_require__(3);var _scripting_utils=__w_pdfjs_require__(33);var _xfa_layer=__w_pdfjs_require__(34);const DEFAULT_TAB_INDEX=1000;const DEFAULT_FONT_SIZE=9;const GetElementsByNameSet=new WeakSet();function getRectDims(rect){return {width:rect[2]-rect[0],height:rect[3]-rect[1]};}class AnnotationElementFactory{static create(parameters){const subtype=parameters.data.annotationType;switch(subtype){case _util.AnnotationType.LINK:return new LinkAnnotationElement(parameters);case _util.AnnotationType.TEXT:return new TextAnnotationElement(parameters);case _util.AnnotationType.WIDGET:const fieldType=parameters.data.fieldType;switch(fieldType){case"Tx":return new TextWidgetAnnotationElement(parameters);case"Btn":if(parameters.data.radioButton){return new RadioButtonWidgetAnnotationElement(parameters);}else if(parameters.data.checkBox){return new CheckboxWidgetAnnotationElement(parameters);}return new PushButtonWidgetAnnotationElement(parameters);case"Ch":return new ChoiceWidgetAnnotationElement(parameters);}return new WidgetAnnotationElement(parameters);case _util.AnnotationType.POPUP:return new PopupAnnotationElement(parameters);case _util.AnnotationType.FREETEXT:return new FreeTextAnnotationElement(parameters);case _util.AnnotationType.LINE:return new LineAnnotationElement(parameters);case _util.AnnotationType.SQUARE:return new SquareAnnotationElement(parameters);case _util.AnnotationType.CIRCLE:return new CircleAnnotationElement(parameters);case _util.AnnotationType.POLYLINE:return new PolylineAnnotationElement(parameters);case _util.AnnotationType.CARET:return new CaretAnnotationElement(parameters);case _util.AnnotationType.INK:return new InkAnnotationElement(parameters);case _util.AnnotationType.POLYGON:return new PolygonAnnotationElement(parameters);case _util.AnnotationType.HIGHLIGHT:return new HighlightAnnotationElement(parameters);case _util.AnnotationType.UNDERLINE:return new UnderlineAnnotationElement(parameters);case _util.AnnotationType.SQUIGGLY:return new SquigglyAnnotationElement(parameters);case _util.AnnotationType.STRIKEOUT:return new StrikeOutAnnotationElement(parameters);case _util.AnnotationType.STAMP:return new StampAnnotationElement(parameters);case _util.AnnotationType.FILEATTACHMENT:return new FileAttachmentAnnotationElement(parameters);default:return new AnnotationElement(parameters);}}}class AnnotationElement{constructor(parameters,{isRenderable=false,ignoreBorder=false,createQuadrilaterals=false}={}){this.isRenderable=isRenderable;this.data=parameters.data;this.layer=parameters.layer;this.page=parameters.page;this.viewport=parameters.viewport;this.linkService=parameters.linkService;this.downloadManager=parameters.downloadManager;this.imageResourcesPath=parameters.imageResourcesPath;this.renderForms=parameters.renderForms;this.svgFactory=parameters.svgFactory;this.annotationStorage=parameters.annotationStorage;this.enableScripting=parameters.enableScripting;this.hasJSActions=parameters.hasJSActions;this._fieldObjects=parameters.fieldObjects;if(isRenderable){this.container=this._createContainer(ignoreBorder);}if(createQuadrilaterals){this.quadrilaterals=this._createQuadrilaterals(ignoreBorder);}}_createContainer(ignoreBorder=false){const{data,page,viewport}=this;const container=document.createElement("section");container.setAttribute("data-annotation-id",data.id);const{pageWidth,pageHeight,pageX,pageY}=viewport.rawDims;const{width,height}=getRectDims(data.rect);const rect=_util.Util.normalizeRect([data.rect[0],page.view[3]-data.rect[1]+page.view[1],data.rect[2],page.view[3]-data.rect[3]+page.view[1]]);if(!ignoreBorder&&data.borderStyle.width>0){container.style.borderWidth=`${data.borderStyle.width}px`;const horizontalRadius=data.borderStyle.horizontalCornerRadius;const verticalRadius=data.borderStyle.verticalCornerRadius;if(horizontalRadius>0||verticalRadius>0){const radius=`calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;container.style.borderRadius=radius;}else if(this instanceof RadioButtonWidgetAnnotationElement){const radius=`calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;container.style.borderRadius=radius;}switch(data.borderStyle.style){case _util.AnnotationBorderStyleType.SOLID:container.style.borderStyle="solid";break;case _util.AnnotationBorderStyleType.DASHED:container.style.borderStyle="dashed";break;case _util.AnnotationBorderStyleType.BEVELED:(0, _util.warn)("Unimplemented border style: beveled");break;case _util.AnnotationBorderStyleType.INSET:(0, _util.warn)("Unimplemented border style: inset");break;case _util.AnnotationBorderStyleType.UNDERLINE:container.style.borderBottomStyle="solid";break;}const borderColor=data.borderColor||null;if(borderColor){container.style.borderColor=_util.Util.makeHexColor(borderColor[0]|0,borderColor[1]|0,borderColor[2]|0);}else {container.style.borderWidth=0;}}container.style.left=`${100*(rect[0]-pageX)/pageWidth}%`;container.style.top=`${100*(rect[1]-pageY)/pageHeight}%`;const{rotation}=data;if(data.hasOwnCanvas||rotation===0){container.style.width=`${100*width/pageWidth}%`;container.style.height=`${100*height/pageHeight}%`;}else {this.setRotation(rotation,container);}return container;}setRotation(angle,container=this.container){const{pageWidth,pageHeight}=this.viewport.rawDims;const{width,height}=getRectDims(this.data.rect);let elementWidth,elementHeight;if(angle%180===0){elementWidth=100*width/pageWidth;elementHeight=100*height/pageHeight;}else {elementWidth=100*height/pageWidth;elementHeight=100*width/pageHeight;}container.style.width=`${elementWidth}%`;container.style.height=`${elementHeight}%`;container.setAttribute("data-main-rotation",(360-angle)%360);}get _commonActions(){const setColor=(jsName,styleName,event)=>{const color=event.detail[jsName];event.target.style[styleName]=_scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));};return (0, _util.shadow)(this,"_commonActions",{display:event=>{const hidden=event.detail.display%2===1;this.container.style.visibility=hidden?"hidden":"visible";this.annotationStorage.setValue(this.data.id,{hidden,print:event.detail.display===0||event.detail.display===3});},print:event=>{this.annotationStorage.setValue(this.data.id,{print:event.detail.print});},hidden:event=>{this.container.style.visibility=event.detail.hidden?"hidden":"visible";this.annotationStorage.setValue(this.data.id,{hidden:event.detail.hidden});},focus:event=>{setTimeout(()=>event.target.focus({preventScroll:false}),0);},userName:event=>{event.target.title=event.detail.userName;},readonly:event=>{if(event.detail.readonly){event.target.setAttribute("readonly","");}else {event.target.removeAttribute("readonly");}},required:event=>{this._setRequired(event.target,event.detail.required);},bgColor:event=>{setColor("bgColor","backgroundColor",event);},fillColor:event=>{setColor("fillColor","backgroundColor",event);},fgColor:event=>{setColor("fgColor","color",event);},textColor:event=>{setColor("textColor","color",event);},borderColor:event=>{setColor("borderColor","borderColor",event);},strokeColor:event=>{setColor("strokeColor","borderColor",event);},rotation:event=>{const angle=event.detail.rotation;this.setRotation(angle);this.annotationStorage.setValue(this.data.id,{rotation:angle});}});}_dispatchEventFromSandbox(actions,jsEvent){const commonActions=this._commonActions;for(const name of Object.keys(jsEvent.detail)){const action=actions[name]||commonActions[name];action?.(jsEvent);}}_setDefaultPropertiesFromJS(element){if(!this.enableScripting){return;}const storedData=this.annotationStorage.getRawValue(this.data.id);if(!storedData){return;}const commonActions=this._commonActions;for(const[actionName,detail]of Object.entries(storedData)){const action=commonActions[actionName];if(action){const eventProxy={detail:{[actionName]:detail},target:element};action(eventProxy);delete storedData[actionName];}}}_createQuadrilaterals(ignoreBorder=false){if(!this.data.quadPoints){return null;}const quadrilaterals=[];const savedRect=this.data.rect;for(const quadPoint of this.data.quadPoints){this.data.rect=[quadPoint[2].x,quadPoint[2].y,quadPoint[1].x,quadPoint[1].y];quadrilaterals.push(this._createContainer(ignoreBorder));}this.data.rect=savedRect;return quadrilaterals;}_createPopup(trigger,data){let container=this.container;if(this.quadrilaterals){trigger=trigger||this.quadrilaterals;container=this.quadrilaterals[0];}if(!trigger){trigger=document.createElement("div");trigger.className="popupTriggerArea";container.append(trigger);}const popupElement=new PopupElement({container,trigger,color:data.color,titleObj:data.titleObj,modificationDate:data.modificationDate,contentsObj:data.contentsObj,richText:data.richText,hideWrapper:true});const popup=popupElement.render();popup.style.left="100%";container.append(popup);}_renderQuadrilaterals(className){for(const quadrilateral of this.quadrilaterals){quadrilateral.className=className;}return this.quadrilaterals;}render(){(0, _util.unreachable)("Abstract method `AnnotationElement.render` called");}_getElementsByName(name,skipId=null){const fields=[];if(this._fieldObjects){const fieldObj=this._fieldObjects[name];if(fieldObj){for(const{page,id,exportValues}of fieldObj){if(page===-1){continue;}if(id===skipId){continue;}const exportValue=typeof exportValues==="string"?exportValues:null;const domElement=document.querySelector(`[data-element-id="${id}"]`);if(domElement&&!GetElementsByNameSet.has(domElement)){(0, _util.warn)(`_getElementsByName - element not allowed: ${id}`);continue;}fields.push({id,exportValue,domElement});}}return fields;}for(const domElement of document.getElementsByName(name)){const{exportValue}=domElement;const id=domElement.getAttribute("data-element-id");if(id===skipId){continue;}if(!GetElementsByNameSet.has(domElement)){continue;}fields.push({id,exportValue,domElement});}return fields;}}class LinkAnnotationElement extends AnnotationElement{constructor(parameters,options=null){super(parameters,{isRenderable:true,ignoreBorder:!!options?.ignoreBorder,createQuadrilaterals:true});this.isTooltipOnly=parameters.data.isTooltipOnly;}render(){const{data,linkService}=this;const link=document.createElement("a");link.setAttribute("data-element-id",data.id);let isBound=false;if(data.url){linkService.addLinkAttributes(link,data.url,data.newWindow);isBound=true;}else if(data.action){this._bindNamedAction(link,data.action);isBound=true;}else if(data.attachment){this._bindAttachment(link,data.attachment);isBound=true;}else if(data.setOCGState){this.#bindSetOCGState(link,data.setOCGState);isBound=true;}else if(data.dest){this._bindLink(link,data.dest);isBound=true;}else {if(data.actions&&(data.actions.Action||data.actions["Mouse Up"]||data.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions){this._bindJSAction(link,data);isBound=true;}if(data.resetForm){this._bindResetFormAction(link,data.resetForm);isBound=true;}else if(this.isTooltipOnly&&!isBound){this._bindLink(link,"");isBound=true;}}if(this.quadrilaterals){return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral,index)=>{const linkElement=index===0?link:link.cloneNode();quadrilateral.append(linkElement);return quadrilateral;});}this.container.className="linkAnnotation";if(isBound){this.container.append(link);}return this.container;}#setInternalLink(){this.container.setAttribute("data-internal-link","");}_bindLink(link,destination){link.href=this.linkService.getDestinationHash(destination);link.onclick=()=>{if(destination){this.linkService.goToDestination(destination);}return false;};if(destination||destination===""){this.#setInternalLink();}}_bindNamedAction(link,action){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.linkService.executeNamedAction(action);return false;};this.#setInternalLink();}_bindAttachment(link,attachment){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.downloadManager?.openOrDownloadData(this.container,attachment.content,attachment.filename);return false;};this.#setInternalLink();}#bindSetOCGState(link,action){link.href=this.linkService.getAnchorUrl("");link.onclick=()=>{this.linkService.executeSetOCGState(action);return false;};this.#setInternalLink();}_bindJSAction(link,data){link.href=this.linkService.getAnchorUrl("");const map=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]);for(const name of Object.keys(data.actions)){const jsName=map.get(name);if(!jsName){continue;}link[jsName]=()=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:data.id,name}});return false;};}if(!link.onclick){link.onclick=()=>false;}this.#setInternalLink();}_bindResetFormAction(link,resetForm){const otherClickAction=link.onclick;if(!otherClickAction){link.href=this.linkService.getAnchorUrl("");}this.#setInternalLink();if(!this._fieldObjects){(0, _util.warn)(`_bindResetFormAction - "resetForm" action not supported, `+"ensure that the `fieldObjects` parameter is provided.");if(!otherClickAction){link.onclick=()=>false;}return;}link.onclick=()=>{otherClickAction?.();const{fields:resetFormFields,refs:resetFormRefs,include}=resetForm;const allFields=[];if(resetFormFields.length!==0||resetFormRefs.length!==0){const fieldIds=new Set(resetFormRefs);for(const fieldName of resetFormFields){const fields=this._fieldObjects[fieldName]||[];for(const{id}of fields){fieldIds.add(id);}}for(const fields of Object.values(this._fieldObjects)){for(const field of fields){if(fieldIds.has(field.id)===include){allFields.push(field);}}}}else {for(const fields of Object.values(this._fieldObjects)){allFields.push(...fields);}}const storage=this.annotationStorage;const allIds=[];for(const field of allFields){const{id}=field;allIds.push(id);switch(field.type){case"text":{const value=field.defaultValue||"";storage.setValue(id,{value});break;}case"checkbox":case"radiobutton":{const value=field.defaultValue===field.exportValues;storage.setValue(id,{value});break;}case"combobox":case"listbox":{const value=field.defaultValue||"";storage.setValue(id,{value});break;}default:continue;}const domElement=document.querySelector(`[data-element-id="${id}"]`);if(!domElement){continue;}else if(!GetElementsByNameSet.has(domElement)){(0, _util.warn)(`_bindResetFormAction - element not allowed: ${id}`);continue;}domElement.dispatchEvent(new Event("resetform"));}if(this.enableScripting){this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:"app",ids:allIds,name:"ResetForm"}});}return false;};}}class TextAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable});}render(){this.container.className="textAnnotation";const image=document.createElement("img");image.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg";image.alt="[{{type}} Annotation]";image.dataset.l10nId="text_annotation_type";image.dataset.l10nArgs=JSON.stringify({type:this.data.name});if(!this.data.hasPopup){this._createPopup(image,this.data);}this.container.append(image);return this.container;}}class WidgetAnnotationElement extends AnnotationElement{render(){if(this.data.alternativeText){this.container.title=this.data.alternativeText;}return this.container;}_getKeyModifier(event){const{isWin,isMac}=_util.FeatureTest.platform;return isWin&&event.ctrlKey||isMac&&event.metaKey;}_setEventListener(element,baseName,eventName,valueGetter){if(baseName.includes("mouse")){element.addEventListener(baseName,event=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:eventName,value:valueGetter(event),shift:event.shiftKey,modifier:this._getKeyModifier(event)}});});}else {element.addEventListener(baseName,event=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:eventName,value:valueGetter(event)}});});}}_setEventListeners(element,names,getter){for(const[baseName,eventName]of names){if(eventName==="Action"||this.data.actions?.[eventName]){this._setEventListener(element,baseName,eventName,getter);}}}_setBackgroundColor(element){const color=this.data.backgroundColor||null;element.style.backgroundColor=color===null?"transparent":_util.Util.makeHexColor(color[0],color[1],color[2]);}_setTextStyle(element){const TEXT_ALIGNMENT=["left","center","right"];const{fontColor}=this.data.defaultAppearanceData;const fontSize=this.data.defaultAppearanceData.fontSize||DEFAULT_FONT_SIZE;const style=element.style;let computedFontSize;const BORDER_SIZE=2;const roundToOneDecimal=x=>Math.round(10*x)/10;if(this.data.multiLine){const height=Math.abs(this.data.rect[3]-this.data.rect[1]-BORDER_SIZE);const numberOfLines=Math.round(height/(_util.LINE_FACTOR*fontSize))||1;const lineHeight=height/numberOfLines;computedFontSize=Math.min(fontSize,roundToOneDecimal(lineHeight/_util.LINE_FACTOR));}else {const height=Math.abs(this.data.rect[3]-this.data.rect[1]-BORDER_SIZE);computedFontSize=Math.min(fontSize,roundToOneDecimal(height/_util.LINE_FACTOR));}style.fontSize=`calc(${computedFontSize}px * var(--scale-factor))`;style.color=_util.Util.makeHexColor(fontColor[0],fontColor[1],fontColor[2]);if(this.data.textAlignment!==null){style.textAlign=TEXT_ALIGNMENT[this.data.textAlignment];}}_setRequired(element,isRequired){if(isRequired){element.setAttribute("required",true);}else {element.removeAttribute("required");}element.setAttribute("aria-required",isRequired);}}class TextWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){const isRenderable=parameters.renderForms||!parameters.data.hasAppearance&&!!parameters.data.fieldValue;super(parameters,{isRenderable});}setPropertyOnSiblings(base,key,value,keyInStorage){const storage=this.annotationStorage;for(const element of this._getElementsByName(base.name,base.id)){if(element.domElement){element.domElement[key]=value;}storage.setValue(element.id,{[keyInStorage]:value});}}render(){const storage=this.annotationStorage;const id=this.data.id;this.container.className="textWidgetAnnotation";let element=null;if(this.renderForms){const storedData=storage.getValue(id,{value:this.data.fieldValue});let textContent=storedData.formattedValue||storedData.value||"";const maxLen=storage.getValue(id,{charLimit:this.data.maxLen}).charLimit;if(maxLen&&textContent.length>maxLen){textContent=textContent.slice(0,maxLen);}const elementData={userValue:textContent,formattedValue:null,lastCommittedValue:null,commitKey:1};if(this.data.multiLine){element=document.createElement("textarea");element.textContent=textContent;if(this.data.doNotScroll){element.style.overflowY="hidden";}}else {element=document.createElement("input");element.type="text";element.setAttribute("value",textContent);if(this.data.doNotScroll){element.style.overflowX="hidden";}}GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=this.data.readOnly;element.name=this.data.fieldName;element.tabIndex=DEFAULT_TAB_INDEX;this._setRequired(element,this.data.required);if(maxLen){element.maxLength=maxLen;}element.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});this.setPropertyOnSiblings(element,"value",event.target.value,"value");});element.addEventListener("resetform",event=>{const defaultValue=this.data.defaultFieldValue??"";element.value=elementData.userValue=defaultValue;elementData.formattedValue=null;});let blurListener=event=>{const{formattedValue}=elementData;if(formattedValue!==null&&formattedValue!==undefined){event.target.value=formattedValue;}event.target.scrollLeft=0;};if(this.enableScripting&&this.hasJSActions){element.addEventListener("focus",event=>{const{target}=event;if(elementData.userValue){target.value=elementData.userValue;}elementData.lastCommittedValue=target.value;elementData.commitKey=1;});element.addEventListener("updatefromsandbox",jsEvent=>{const actions={value(event){elementData.userValue=event.detail.value??"";storage.setValue(id,{value:elementData.userValue.toString()});event.target.value=elementData.userValue;},formattedValue(event){const{formattedValue}=event.detail;elementData.formattedValue=formattedValue;if(formattedValue!==null&&formattedValue!==undefined&&event.target!==document.activeElement){event.target.value=formattedValue;}storage.setValue(id,{formattedValue});},selRange(event){event.target.setSelectionRange(...event.detail.selRange);},charLimit:event=>{const{charLimit}=event.detail;const{target}=event;if(charLimit===0){target.removeAttribute("maxLength");return;}target.setAttribute("maxLength",charLimit);let value=elementData.userValue;if(!value||value.length<=charLimit){return;}value=value.slice(0,charLimit);target.value=elementData.userValue=value;storage.setValue(id,{value});this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey:1,selStart:target.selectionStart,selEnd:target.selectionEnd}});}};this._dispatchEventFromSandbox(actions,jsEvent);});element.addEventListener("keydown",event=>{elementData.commitKey=1;let commitKey=-1;if(event.key==="Escape"){commitKey=0;}else if(event.key==="Enter"&&!this.data.multiLine){commitKey=2;}else if(event.key==="Tab"){elementData.commitKey=3;}if(commitKey===-1){return;}const{value}=event.target;if(elementData.lastCommittedValue===value){return;}elementData.lastCommittedValue=value;elementData.userValue=value;this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey,selStart:event.target.selectionStart,selEnd:event.target.selectionEnd}});});const _blurListener=blurListener;blurListener=null;element.addEventListener("blur",event=>{if(!event.relatedTarget){return;}const{value}=event.target;elementData.userValue=value;if(elementData.lastCommittedValue!==value){this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,willCommit:true,commitKey:elementData.commitKey,selStart:event.target.selectionStart,selEnd:event.target.selectionEnd}});}_blurListener(event);});if(this.data.actions?.Keystroke){element.addEventListener("beforeinput",event=>{elementData.lastCommittedValue=null;const{data,target}=event;const{value,selectionStart,selectionEnd}=target;let selStart=selectionStart,selEnd=selectionEnd;switch(event.inputType){case"deleteWordBackward":{const match=value.substring(0,selectionStart).match(/\w*[^\w]*$/);if(match){selStart-=match[0].length;}break;}case"deleteWordForward":{const match=value.substring(selectionStart).match(/^[^\w]*\w*/);if(match){selEnd+=match[0].length;}break;}case"deleteContentBackward":if(selectionStart===selectionEnd){selStart-=1;}break;case"deleteContentForward":if(selectionStart===selectionEnd){selEnd+=1;}break;}event.preventDefault();this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value,change:data||"",willCommit:false,selStart,selEnd}});});}this._setEventListeners(element,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.value);}if(blurListener){element.addEventListener("blur",blurListener);}if(this.data.comb){const fieldWidth=this.data.rect[2]-this.data.rect[0];const combWidth=fieldWidth/maxLen;element.classList.add("comb");element.style.letterSpacing=`calc(${combWidth}px * var(--scale-factor) - 1ch)`;}}else {element=document.createElement("div");element.textContent=this.data.fieldValue;element.style.verticalAlign="middle";element.style.display="table-cell";}this._setTextStyle(element);this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){const storage=this.annotationStorage;const data=this.data;const id=data.id;let value=storage.getValue(id,{value:data.exportValue===data.fieldValue}).value;if(typeof value==="string"){value=value!=="Off";storage.setValue(id,{value});}this.container.className="buttonWidgetAnnotation checkBox";const element=document.createElement("input");GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=data.readOnly;this._setRequired(element,this.data.required);element.type="checkbox";element.name=data.fieldName;if(value){element.setAttribute("checked",true);}element.setAttribute("exportValue",data.exportValue);element.tabIndex=DEFAULT_TAB_INDEX;element.addEventListener("change",event=>{const{name,checked}=event.target;for(const checkbox of this._getElementsByName(name,id)){const curChecked=checked&&checkbox.exportValue===data.exportValue;if(checkbox.domElement){checkbox.domElement.checked=curChecked;}storage.setValue(checkbox.id,{value:curChecked});}storage.setValue(id,{value:checked});});element.addEventListener("resetform",event=>{const defaultValue=data.defaultFieldValue||"Off";event.target.checked=defaultValue===data.exportValue;});if(this.enableScripting&&this.hasJSActions){element.addEventListener("updatefromsandbox",jsEvent=>{const actions={value(event){event.target.checked=event.detail.value!=="Off";storage.setValue(id,{value:event.target.checked});}};this._dispatchEventFromSandbox(actions,jsEvent);});this._setEventListeners(element,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.checked);}this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){this.container.className="buttonWidgetAnnotation radioButton";const storage=this.annotationStorage;const data=this.data;const id=data.id;let value=storage.getValue(id,{value:data.fieldValue===data.buttonValue}).value;if(typeof value==="string"){value=value!==data.buttonValue;storage.setValue(id,{value});}const element=document.createElement("input");GetElementsByNameSet.add(element);element.setAttribute("data-element-id",id);element.disabled=data.readOnly;this._setRequired(element,this.data.required);element.type="radio";element.name=data.fieldName;if(value){element.setAttribute("checked",true);}element.tabIndex=DEFAULT_TAB_INDEX;element.addEventListener("change",event=>{const{name,checked}=event.target;for(const radio of this._getElementsByName(name,id)){storage.setValue(radio.id,{value:false});}storage.setValue(id,{value:checked});});element.addEventListener("resetform",event=>{const defaultValue=data.defaultFieldValue;event.target.checked=defaultValue!==null&&defaultValue!==undefined&&defaultValue===data.buttonValue;});if(this.enableScripting&&this.hasJSActions){const pdfButtonValue=data.buttonValue;element.addEventListener("updatefromsandbox",jsEvent=>{const actions={value:event=>{const checked=pdfButtonValue===event.detail.value;for(const radio of this._getElementsByName(event.target.name)){const curChecked=checked&&radio.id===id;if(radio.domElement){radio.domElement.checked=curChecked;}storage.setValue(radio.id,{value:curChecked});}}};this._dispatchEventFromSandbox(actions,jsEvent);});this._setEventListeners(element,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],event=>event.target.checked);}this._setBackgroundColor(element);this._setDefaultPropertiesFromJS(element);this.container.append(element);return this.container;}}class PushButtonWidgetAnnotationElement extends LinkAnnotationElement{constructor(parameters){super(parameters,{ignoreBorder:parameters.data.hasAppearance});}render(){const container=super.render();container.className="buttonWidgetAnnotation pushButton";if(this.data.alternativeText){container.title=this.data.alternativeText;}const linkElement=container.lastChild;if(this.enableScripting&&this.hasJSActions&&linkElement){this._setDefaultPropertiesFromJS(linkElement);linkElement.addEventListener("updatefromsandbox",jsEvent=>{this._dispatchEventFromSandbox({},jsEvent);});}return container;}}class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement{constructor(parameters){super(parameters,{isRenderable:parameters.renderForms});}render(){this.container.className="choiceWidgetAnnotation";const storage=this.annotationStorage;const id=this.data.id;const storedData=storage.getValue(id,{value:this.data.fieldValue});const selectElement=document.createElement("select");GetElementsByNameSet.add(selectElement);selectElement.setAttribute("data-element-id",id);selectElement.disabled=this.data.readOnly;this._setRequired(selectElement,this.data.required);selectElement.name=this.data.fieldName;selectElement.tabIndex=DEFAULT_TAB_INDEX;let addAnEmptyEntry=this.data.combo&&this.data.options.length>0;if(!this.data.combo){selectElement.size=this.data.options.length;if(this.data.multiSelect){selectElement.multiple=true;}}selectElement.addEventListener("resetform",event=>{const defaultValue=this.data.defaultFieldValue;for(const option of selectElement.options){option.selected=option.value===defaultValue;}});for(const option of this.data.options){const optionElement=document.createElement("option");optionElement.textContent=option.displayValue;optionElement.value=option.exportValue;if(storedData.value.includes(option.exportValue)){optionElement.setAttribute("selected",true);addAnEmptyEntry=false;}selectElement.append(optionElement);}let removeEmptyEntry=null;if(addAnEmptyEntry){const noneOptionElement=document.createElement("option");noneOptionElement.value=" ";noneOptionElement.setAttribute("hidden",true);noneOptionElement.setAttribute("selected",true);selectElement.prepend(noneOptionElement);removeEmptyEntry=()=>{noneOptionElement.remove();selectElement.removeEventListener("input",removeEmptyEntry);removeEmptyEntry=null;};selectElement.addEventListener("input",removeEmptyEntry);}const getValue=isExport=>{const name=isExport?"value":"textContent";const{options,multiple}=selectElement;if(!multiple){return options.selectedIndex===-1?null:options[options.selectedIndex][name];}return Array.prototype.filter.call(options,option=>option.selected).map(option=>option[name]);};let selectedValues=getValue(false);const getItems=event=>{const options=event.target.options;return Array.prototype.map.call(options,option=>{return {displayValue:option.textContent,exportValue:option.value};});};if(this.enableScripting&&this.hasJSActions){selectElement.addEventListener("updatefromsandbox",jsEvent=>{const actions={value(event){removeEmptyEntry?.();const value=event.detail.value;const values=new Set(Array.isArray(value)?value:[value]);for(const option of selectElement.options){option.selected=values.has(option.value);}storage.setValue(id,{value:getValue(true)});selectedValues=getValue(false);},multipleSelection(event){selectElement.multiple=true;},remove(event){const options=selectElement.options;const index=event.detail.remove;options[index].selected=false;selectElement.remove(index);if(options.length>0){const i=Array.prototype.findIndex.call(options,option=>option.selected);if(i===-1){options[0].selected=true;}}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},clear(event){while(selectElement.length!==0){selectElement.remove(0);}storage.setValue(id,{value:null,items:[]});selectedValues=getValue(false);},insert(event){const{index,displayValue,exportValue}=event.detail.insert;const selectChild=selectElement.children[index];const optionElement=document.createElement("option");optionElement.textContent=displayValue;optionElement.value=exportValue;if(selectChild){selectChild.before(optionElement);}else {selectElement.append(optionElement);}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},items(event){const{items}=event.detail;while(selectElement.length!==0){selectElement.remove(0);}for(const item of items){const{displayValue,exportValue}=item;const optionElement=document.createElement("option");optionElement.textContent=displayValue;optionElement.value=exportValue;selectElement.append(optionElement);}if(selectElement.options.length>0){selectElement.options[0].selected=true;}storage.setValue(id,{value:getValue(true),items:getItems(event)});selectedValues=getValue(false);},indices(event){const indices=new Set(event.detail.indices);for(const option of event.target.options){option.selected=indices.has(option.index);}storage.setValue(id,{value:getValue(true)});selectedValues=getValue(false);},editable(event){event.target.disabled=!event.detail.editable;}};this._dispatchEventFromSandbox(actions,jsEvent);});selectElement.addEventListener("input",event=>{const exportValue=getValue(true);storage.setValue(id,{value:exportValue});event.preventDefault();this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id,name:"Keystroke",value:selectedValues,changeEx:exportValue,willCommit:false,commitKey:1,keyDown:false}});});this._setEventListeners(selectElement,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"],["input","Validate"]],event=>event.target.value);}else {selectElement.addEventListener("input",function(event){storage.setValue(id,{value:getValue(true)});});}if(this.data.combo){this._setTextStyle(selectElement);}this._setBackgroundColor(selectElement);this._setDefaultPropertiesFromJS(selectElement);this.container.append(selectElement);return this.container;}}class PopupAnnotationElement extends AnnotationElement{static IGNORE_TYPES=new Set(["Line","Square","Circle","PolyLine","Polygon","Ink"]);constructor(parameters){const{data}=parameters;const isRenderable=!PopupAnnotationElement.IGNORE_TYPES.has(data.parentType)&&!!(data.titleObj?.str||data.contentsObj?.str||data.richText?.str);super(parameters,{isRenderable});}render(){this.container.className="popupAnnotation";const parentElements=this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);if(parentElements.length===0){return this.container;}const popup=new PopupElement({container:this.container,trigger:Array.from(parentElements),color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate,contentsObj:this.data.contentsObj,richText:this.data.richText});const page=this.page;const rect=_util.Util.normalizeRect([this.data.parentRect[0],page.view[3]-this.data.parentRect[1]+page.view[1],this.data.parentRect[2],page.view[3]-this.data.parentRect[3]+page.view[1]]);const popupLeft=rect[0]+this.data.parentRect[2]-this.data.parentRect[0];const popupTop=rect[1];const{pageWidth,pageHeight,pageX,pageY}=this.viewport.rawDims;this.container.style.left=`${100*(popupLeft-pageX)/pageWidth}%`;this.container.style.top=`${100*(popupTop-pageY)/pageHeight}%`;this.container.append(popup.render());return this.container;}}class PopupElement{constructor(parameters){this.container=parameters.container;this.trigger=parameters.trigger;this.color=parameters.color;this.titleObj=parameters.titleObj;this.modificationDate=parameters.modificationDate;this.contentsObj=parameters.contentsObj;this.richText=parameters.richText;this.hideWrapper=parameters.hideWrapper||false;this.pinned=false;}render(){const BACKGROUND_ENLIGHT=0.7;const wrapper=document.createElement("div");wrapper.className="popupWrapper";this.hideElement=this.hideWrapper?wrapper:this.container;this.hideElement.hidden=true;const popup=document.createElement("div");popup.className="popup";const color=this.color;if(color){const r=BACKGROUND_ENLIGHT*(255-color[0])+color[0];const g=BACKGROUND_ENLIGHT*(255-color[1])+color[1];const b=BACKGROUND_ENLIGHT*(255-color[2])+color[2];popup.style.backgroundColor=_util.Util.makeHexColor(r|0,g|0,b|0);}const title=document.createElement("h1");title.dir=this.titleObj.dir;title.textContent=this.titleObj.str;popup.append(title);const dateObject=_display_utils.PDFDateString.toDateObject(this.modificationDate);if(dateObject){const modificationDate=document.createElement("span");modificationDate.className="popupDate";modificationDate.textContent="{{date}}, {{time}}";modificationDate.dataset.l10nId="annotation_date_string";modificationDate.dataset.l10nArgs=JSON.stringify({date:dateObject.toLocaleDateString(),time:dateObject.toLocaleTimeString()});popup.append(modificationDate);}if(this.richText?.str&&(!this.contentsObj?.str||this.contentsObj.str===this.richText.str)){_xfa_layer.XfaLayer.render({xfaHtml:this.richText.html,intent:"richText",div:popup});popup.lastChild.className="richText popupContent";}else {const contents=this._formatContents(this.contentsObj);popup.append(contents);}if(!Array.isArray(this.trigger)){this.trigger=[this.trigger];}for(const element of this.trigger){element.addEventListener("click",this._toggle.bind(this));element.addEventListener("mouseover",this._show.bind(this,false));element.addEventListener("mouseout",this._hide.bind(this,false));}popup.addEventListener("click",this._hide.bind(this,true));wrapper.append(popup);return wrapper;}_formatContents({str,dir}){const p=document.createElement("p");p.className="popupContent";p.dir=dir;const lines=str.split(/(?:\r\n?|\n)/);for(let i=0,ii=lines.length;i<ii;++i){const line=lines[i];p.append(document.createTextNode(line));if(i<ii-1){p.append(document.createElement("br"));}}return p;}_toggle(){if(this.pinned){this._hide(true);}else {this._show(true);}}_show(pin=false){if(pin){this.pinned=true;}if(this.hideElement.hidden){this.hideElement.hidden=false;this.container.style.zIndex=parseInt(this.container.style.zIndex)+1000;}}_hide(unpin=true){if(unpin){this.pinned=false;}if(!this.hideElement.hidden&&!this.pinned){this.hideElement.hidden=true;this.container.style.zIndex=parseInt(this.container.style.zIndex)-1000;}}}class FreeTextAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.textContent=parameters.data.textContent;}render(){this.container.className="freeTextAnnotation";if(this.textContent){const content=document.createElement("div");content.className="annotationTextContent";content.setAttribute("role","comment");for(const line of this.textContent){const lineSpan=document.createElement("span");lineSpan.textContent=line;content.append(lineSpan);}this.container.append(content);}if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class LineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.className="lineAnnotation";const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const line=this.svgFactory.createElement("svg:line");line.setAttribute("x1",data.rect[2]-data.lineCoordinates[0]);line.setAttribute("y1",data.rect[3]-data.lineCoordinates[1]);line.setAttribute("x2",data.rect[2]-data.lineCoordinates[2]);line.setAttribute("y2",data.rect[3]-data.lineCoordinates[3]);line.setAttribute("stroke-width",data.borderStyle.width||1);line.setAttribute("stroke","transparent");line.setAttribute("fill","transparent");svg.append(line);this.container.append(svg);this._createPopup(line,data);return this.container;}}class SquareAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.className="squareAnnotation";const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const borderWidth=data.borderStyle.width;const square=this.svgFactory.createElement("svg:rect");square.setAttribute("x",borderWidth/2);square.setAttribute("y",borderWidth/2);square.setAttribute("width",width-borderWidth);square.setAttribute("height",height-borderWidth);square.setAttribute("stroke-width",borderWidth||1);square.setAttribute("stroke","transparent");square.setAttribute("fill","transparent");svg.append(square);this.container.append(svg);this._createPopup(square,data);return this.container;}}class CircleAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.className="circleAnnotation";const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);const borderWidth=data.borderStyle.width;const circle=this.svgFactory.createElement("svg:ellipse");circle.setAttribute("cx",width/2);circle.setAttribute("cy",height/2);circle.setAttribute("rx",width/2-borderWidth/2);circle.setAttribute("ry",height/2-borderWidth/2);circle.setAttribute("stroke-width",borderWidth||1);circle.setAttribute("stroke","transparent");circle.setAttribute("fill","transparent");svg.append(circle);this.container.append(svg);this._createPopup(circle,data);return this.container;}}class PolylineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.containerClassName="polylineAnnotation";this.svgElementName="svg:polyline";}render(){this.container.className=this.containerClassName;const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);let points=[];for(const coordinate of data.vertices){const x=coordinate.x-data.rect[0];const y=data.rect[3]-coordinate.y;points.push(x+","+y);}points=points.join(" ");const polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute("points",points);polyline.setAttribute("stroke-width",data.borderStyle.width||1);polyline.setAttribute("stroke","transparent");polyline.setAttribute("fill","transparent");svg.append(polyline);this.container.append(svg);this._createPopup(polyline,data);return this.container;}}class PolygonAnnotationElement extends PolylineAnnotationElement{constructor(parameters){super(parameters);this.containerClassName="polygonAnnotation";this.svgElementName="svg:polygon";}}class CaretAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.className="caretAnnotation";if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class InkAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});this.containerClassName="inkAnnotation";this.svgElementName="svg:polyline";}render(){this.container.className=this.containerClassName;const data=this.data;const{width,height}=getRectDims(data.rect);const svg=this.svgFactory.create(width,height,true);for(const inkList of data.inkLists){let points=[];for(const coordinate of inkList){const x=coordinate.x-data.rect[0];const y=data.rect[3]-coordinate.y;points.push(`${x},${y}`);}points=points.join(" ");const polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute("points",points);polyline.setAttribute("stroke-width",data.borderStyle.width||1);polyline.setAttribute("stroke","transparent");polyline.setAttribute("fill","transparent");this._createPopup(polyline,data);svg.append(polyline);}this.container.append(svg);return this.container;}}class HighlightAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("highlightAnnotation");}this.container.className="highlightAnnotation";return this.container;}}class UnderlineAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("underlineAnnotation");}this.container.className="underlineAnnotation";return this.container;}}class SquigglyAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("squigglyAnnotation");}this.container.className="squigglyAnnotation";return this.container;}}class StrikeOutAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true,createQuadrilaterals:true});}render(){if(!this.data.hasPopup){this._createPopup(null,this.data);}if(this.quadrilaterals){return this._renderQuadrilaterals("strikeoutAnnotation");}this.container.className="strikeoutAnnotation";return this.container;}}class StampAnnotationElement extends AnnotationElement{constructor(parameters){const isRenderable=!!(parameters.data.hasPopup||parameters.data.titleObj?.str||parameters.data.contentsObj?.str||parameters.data.richText?.str);super(parameters,{isRenderable,ignoreBorder:true});}render(){this.container.className="stampAnnotation";if(!this.data.hasPopup){this._createPopup(null,this.data);}return this.container;}}class FileAttachmentAnnotationElement extends AnnotationElement{constructor(parameters){super(parameters,{isRenderable:true});const{filename,content}=this.data.file;this.filename=(0, _display_utils.getFilenameFromUrl)(filename,true);this.content=content;this.linkService.eventBus?.dispatch("fileattachmentannotation",{source:this,filename,content});}render(){this.container.className="fileAttachmentAnnotation";let trigger;if(this.data.hasAppearance){trigger=document.createElement("div");}else {trigger=document.createElement("img");trigger.src=`${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name)?"paperclip":"pushpin"}.svg`;}trigger.className="popupTriggerArea";trigger.addEventListener("dblclick",this._download.bind(this));if(!this.data.hasPopup&&(this.data.titleObj?.str||this.data.contentsObj?.str||this.data.richText)){this._createPopup(trigger,this.data);}this.container.append(trigger);return this.container;}_download(){this.downloadManager?.openOrDownloadData(this.container,this.content,this.filename);}}class AnnotationLayer{static#appendElement(element,id,div,accessibilityManager){const contentElement=element.firstChild||element;contentElement.id=`${_display_utils.AnnotationPrefix}${id}`;div.append(element);accessibilityManager?.moveElementInDOM(div,element,contentElement,false);}static render(params){const{annotations,div,viewport,accessibilityManager}=params;(0, _display_utils.setLayerDimensions)(div,viewport);const elementParams={data:null,layer:div,page:params.page,viewport,linkService:params.linkService,downloadManager:params.downloadManager,imageResourcesPath:params.imageResourcesPath||"",renderForms:params.renderForms!==false,svgFactory:new _display_utils.DOMSVGFactory(),annotationStorage:params.annotationStorage||new _annotation_storage.AnnotationStorage(),enableScripting:params.enableScripting===true,hasJSActions:params.hasJSActions,fieldObjects:params.fieldObjects};let zIndex=0;for(const data of annotations){if(data.annotationType!==_util.AnnotationType.POPUP){const{width,height}=getRectDims(data.rect);if(width<=0||height<=0){continue;}}elementParams.data=data;const element=AnnotationElementFactory.create(elementParams);if(!element.isRenderable){continue;}const rendered=element.render();if(data.hidden){rendered.style.visibility="hidden";}if(Array.isArray(rendered)){for(const renderedElement of rendered){renderedElement.style.zIndex=zIndex++;AnnotationLayer.#appendElement(renderedElement,data.id,div,accessibilityManager);}}else {rendered.style.zIndex=zIndex++;if(element instanceof PopupAnnotationElement){div.prepend(rendered);}else {AnnotationLayer.#appendElement(rendered,data.id,div,accessibilityManager);}}}this.#setAnnotationCanvasMap(div,params.annotationCanvasMap);}static update(params){const{annotationCanvasMap,div,viewport}=params;(0, _display_utils.setLayerDimensions)(div,{rotation:viewport.rotation});this.#setAnnotationCanvasMap(div,annotationCanvasMap);div.hidden=false;}static#setAnnotationCanvasMap(div,annotationCanvasMap){if(!annotationCanvasMap){return;}for(const[id,canvas]of annotationCanvasMap){const element=div.querySelector(`[data-annotation-id="${id}"]`);if(!element){continue;}const{firstChild}=element;if(!firstChild){element.append(canvas);}else if(firstChild.nodeName==="CANVAS"){firstChild.replaceWith(canvas);}else {firstChild.before(canvas);}}annotationCanvasMap.clear();}}exports.AnnotationLayer=AnnotationLayer;/***/},/* 33 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.ColorConverters=void 0;function makeColorComp(n){return Math.floor(Math.max(0,Math.min(1,n))*255).toString(16).padStart(2,"0");}class ColorConverters{static CMYK_G([c,y,m,k]){return ["G",1-Math.min(1,0.3*c+0.59*m+0.11*y+k)];}static G_CMYK([g]){return ["CMYK",0,0,0,1-g];}static G_RGB([g]){return ["RGB",g,g,g];}static G_HTML([g]){const G=makeColorComp(g);return `#${G}${G}${G}`;}static RGB_G([r,g,b]){return ["G",0.3*r+0.59*g+0.11*b];}static RGB_HTML([r,g,b]){const R=makeColorComp(r);const G=makeColorComp(g);const B=makeColorComp(b);return `#${R}${G}${B}`;}static T_HTML(){return "#00000000";}static CMYK_RGB([c,y,m,k]){return ["RGB",1-Math.min(1,c+k),1-Math.min(1,m+k),1-Math.min(1,y+k)];}static CMYK_HTML(components){const rgb=this.CMYK_RGB(components).slice(1);return this.RGB_HTML(rgb);}static RGB_CMYK([r,g,b]){const c=1-r;const m=1-g;const y=1-b;const k=Math.min(c,m,y);return ["CMYK",c,m,y,k];}}exports.ColorConverters=ColorConverters;/***/},/* 34 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.XfaLayer=void 0;var _xfa_text=__w_pdfjs_require__(19);class XfaLayer{static setupStorage(html,id,element,storage,intent){const storedData=storage.getValue(id,{value:null});switch(element.name){case"textarea":if(storedData.value!==null){html.textContent=storedData.value;}if(intent==="print"){break;}html.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});});break;case"input":if(element.attributes.type==="radio"||element.attributes.type==="checkbox"){if(storedData.value===element.attributes.xfaOn){html.setAttribute("checked",true);}else if(storedData.value===element.attributes.xfaOff){html.removeAttribute("checked");}if(intent==="print"){break;}html.addEventListener("change",event=>{storage.setValue(id,{value:event.target.checked?event.target.getAttribute("xfaOn"):event.target.getAttribute("xfaOff")});});}else {if(storedData.value!==null){html.setAttribute("value",storedData.value);}if(intent==="print"){break;}html.addEventListener("input",event=>{storage.setValue(id,{value:event.target.value});});}break;case"select":if(storedData.value!==null){for(const option of element.children){if(option.attributes.value===storedData.value){option.attributes.selected=true;}}}html.addEventListener("input",event=>{const options=event.target.options;const value=options.selectedIndex===-1?"":options[options.selectedIndex].value;storage.setValue(id,{value});});break;}}static setAttributes({html,element,storage=null,intent,linkService}){const{attributes}=element;const isHTMLAnchorElement=html instanceof HTMLAnchorElement;if(attributes.type==="radio"){attributes.name=`${attributes.name}-${intent}`;}for(const[key,value]of Object.entries(attributes)){if(value===null||value===undefined){continue;}switch(key){case"class":if(value.length){html.setAttribute(key,value.join(" "));}break;case"dataId":break;case"id":html.setAttribute("data-element-id",value);break;case"style":Object.assign(html.style,value);break;case"textContent":html.textContent=value;break;default:if(!isHTMLAnchorElement||key!=="href"&&key!=="newWindow"){html.setAttribute(key,value);}}}if(isHTMLAnchorElement){linkService.addLinkAttributes(html,attributes.href,attributes.newWindow);}if(storage&&attributes.dataId){this.setupStorage(html,attributes.dataId,element,storage);}}static render(parameters){const storage=parameters.annotationStorage;const linkService=parameters.linkService;const root=parameters.xfaHtml;const intent=parameters.intent||"display";const rootHtml=document.createElement(root.name);if(root.attributes){this.setAttributes({html:rootHtml,element:root,intent,linkService});}const stack=[[root,-1,rootHtml]];const rootDiv=parameters.div;rootDiv.append(rootHtml);if(parameters.viewport){const transform=`matrix(${parameters.viewport.transform.join(",")})`;rootDiv.style.transform=transform;}if(intent!=="richText"){rootDiv.setAttribute("class","xfaLayer xfaFont");}const textDivs=[];while(stack.length>0){const[parent,i,html]=stack.at(-1);if(i+1===parent.children.length){stack.pop();continue;}const child=parent.children[++stack.at(-1)[1]];if(child===null){continue;}const{name}=child;if(name==="#text"){const node=document.createTextNode(child.value);textDivs.push(node);html.append(node);continue;}let childHtml;if(child?.attributes?.xmlns){childHtml=document.createElementNS(child.attributes.xmlns,name);}else {childHtml=document.createElement(name);}html.append(childHtml);if(child.attributes){this.setAttributes({html:childHtml,element:child,storage,intent,linkService});}if(child.children&&child.children.length>0){stack.push([child,-1,childHtml]);}else if(child.value){const node=document.createTextNode(child.value);if(_xfa_text.XfaText.shouldBuildText(name)){textDivs.push(node);}childHtml.append(node);}}for(const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")){el.setAttribute("readOnly",true);}return {textDivs};}static update(parameters){const transform=`matrix(${parameters.viewport.transform.join(",")})`;parameters.div.style.transform=transform;parameters.div.hidden=false;}}exports.XfaLayer=XfaLayer;/***/},/* 35 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.SVGGraphics=void 0;var _display_utils=__w_pdfjs_require__(6);var _util=__w_pdfjs_require__(1);var _is_node=__w_pdfjs_require__(10);let SVGGraphics=class{constructor(){(0, _util.unreachable)("Not implemented: SVGGraphics");}};exports.SVGGraphics=SVGGraphics;{const SVG_DEFAULTS={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"};const XML_NS="http://www.w3.org/XML/1998/namespace";const XLINK_NS="http://www.w3.org/1999/xlink";const LINE_CAP_STYLES=["butt","round","square"];const LINE_JOIN_STYLES=["miter","round","bevel"];const createObjectURL=function(data,contentType="",forceDataSchema=false){if(URL.createObjectURL&&typeof Blob!=="undefined"&&!forceDataSchema){return URL.createObjectURL(new Blob([data],{type:contentType}));}const digits="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let buffer=`data:${contentType};base64,`;for(let i=0,ii=data.length;i<ii;i+=3){const b1=data[i]&0xff;const b2=data[i+1]&0xff;const b3=data[i+2]&0xff;const d1=b1>>2,d2=(b1&3)<<4|b2>>4;const d3=i+1<ii?(b2&0xf)<<2|b3>>6:64;const d4=i+2<ii?b3&0x3f:64;buffer+=digits[d1]+digits[d2]+digits[d3]+digits[d4];}return buffer;};const convertImgDataToPng=function(){const PNG_HEADER=new Uint8Array([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);const CHUNK_WRAPPER_SIZE=12;const crcTable=new Int32Array(256);for(let i=0;i<256;i++){let c=i;for(let h=0;h<8;h++){if(c&1){c=0xedb88320^c>>1&0x7fffffff;}else {c=c>>1&0x7fffffff;}}crcTable[i]=c;}function crc32(data,start,end){let crc=-1;for(let i=start;i<end;i++){const a=(crc^data[i])&0xff;const b=crcTable[a];crc=crc>>>8^b;}return crc^-1;}function writePngChunk(type,body,data,offset){let p=offset;const len=body.length;data[p]=len>>24&0xff;data[p+1]=len>>16&0xff;data[p+2]=len>>8&0xff;data[p+3]=len&0xff;p+=4;data[p]=type.charCodeAt(0)&0xff;data[p+1]=type.charCodeAt(1)&0xff;data[p+2]=type.charCodeAt(2)&0xff;data[p+3]=type.charCodeAt(3)&0xff;p+=4;data.set(body,p);p+=body.length;const crc=crc32(data,offset+4,p);data[p]=crc>>24&0xff;data[p+1]=crc>>16&0xff;data[p+2]=crc>>8&0xff;data[p+3]=crc&0xff;}function adler32(data,start,end){let a=1;let b=0;for(let i=start;i<end;++i){a=(a+(data[i]&0xff))%65521;b=(b+a)%65521;}return b<<16|a;}function deflateSync(literals){if(!_is_node.isNodeJS){return deflateSyncUncompressed(literals);}try{let input;if(parseInt(process.versions.node)>=8){input=literals;}else {input=Buffer.from(literals);}const output=require("zlib").deflateSync(input,{level:9});return output instanceof Uint8Array?output:new Uint8Array(output);}catch(e){(0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e);}return deflateSyncUncompressed(literals);}function deflateSyncUncompressed(literals){let len=literals.length;const maxBlockLength=0xffff;const deflateBlocks=Math.ceil(len/maxBlockLength);const idat=new Uint8Array(2+len+deflateBlocks*5+4);let pi=0;idat[pi++]=0x78;idat[pi++]=0x9c;let pos=0;while(len>maxBlockLength){idat[pi++]=0x00;idat[pi++]=0xff;idat[pi++]=0xff;idat[pi++]=0x00;idat[pi++]=0x00;idat.set(literals.subarray(pos,pos+maxBlockLength),pi);pi+=maxBlockLength;pos+=maxBlockLength;len-=maxBlockLength;}idat[pi++]=0x01;idat[pi++]=len&0xff;idat[pi++]=len>>8&0xff;idat[pi++]=~len&0xffff&0xff;idat[pi++]=(~len&0xffff)>>8&0xff;idat.set(literals.subarray(pos),pi);pi+=literals.length-pos;const adler=adler32(literals,0,literals.length);idat[pi++]=adler>>24&0xff;idat[pi++]=adler>>16&0xff;idat[pi++]=adler>>8&0xff;idat[pi++]=adler&0xff;return idat;}function encode(imgData,kind,forceDataSchema,isMask){const width=imgData.width;const height=imgData.height;let bitDepth,colorType,lineSize;const bytes=imgData.data;switch(kind){case _util.ImageKind.GRAYSCALE_1BPP:colorType=0;bitDepth=1;lineSize=width+7>>3;break;case _util.ImageKind.RGB_24BPP:colorType=2;bitDepth=8;lineSize=width*3;break;case _util.ImageKind.RGBA_32BPP:colorType=6;bitDepth=8;lineSize=width*4;break;default:throw new Error("invalid format");}const literals=new Uint8Array((1+lineSize)*height);let offsetLiterals=0,offsetBytes=0;for(let y=0;y<height;++y){literals[offsetLiterals++]=0;literals.set(bytes.subarray(offsetBytes,offsetBytes+lineSize),offsetLiterals);offsetBytes+=lineSize;offsetLiterals+=lineSize;}if(kind===_util.ImageKind.GRAYSCALE_1BPP&&isMask){offsetLiterals=0;for(let y=0;y<height;y++){offsetLiterals++;for(let i=0;i<lineSize;i++){literals[offsetLiterals++]^=0xff;}}}const ihdr=new Uint8Array([width>>24&0xff,width>>16&0xff,width>>8&0xff,width&0xff,height>>24&0xff,height>>16&0xff,height>>8&0xff,height&0xff,bitDepth,colorType,0x00,0x00,0x00]);const idat=deflateSync(literals);const pngLength=PNG_HEADER.length+CHUNK_WRAPPER_SIZE*3+ihdr.length+idat.length;const data=new Uint8Array(pngLength);let offset=0;data.set(PNG_HEADER,offset);offset+=PNG_HEADER.length;writePngChunk("IHDR",ihdr,data,offset);offset+=CHUNK_WRAPPER_SIZE+ihdr.length;writePngChunk("IDATA",idat,data,offset);offset+=CHUNK_WRAPPER_SIZE+idat.length;writePngChunk("IEND",new Uint8Array(0),data,offset);return createObjectURL(data,"image/png",forceDataSchema);}return function convertImgDataToPng(imgData,forceDataSchema,isMask){const kind=imgData.kind===undefined?_util.ImageKind.GRAYSCALE_1BPP:imgData.kind;return encode(imgData,kind,forceDataSchema,isMask);};}();class SVGExtraState{constructor(){this.fontSizeScale=1;this.fontWeight=SVG_DEFAULTS.fontWeight;this.fontSize=0;this.textMatrix=_util.IDENTITY_MATRIX;this.fontMatrix=_util.FONT_IDENTITY_MATRIX;this.leading=0;this.textRenderingMode=_util.TextRenderingMode.FILL;this.textMatrixScale=1;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRise=0;this.fillColor=SVG_DEFAULTS.fillColor;this.strokeColor="#000000";this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.lineJoin="";this.lineCap="";this.miterLimit=0;this.dashArray=[];this.dashPhase=0;this.dependencies=[];this.activeClipUrl=null;this.clipGroup=null;this.maskId="";}clone(){return Object.create(this);}setCurrentPoint(x,y){this.x=x;this.y=y;}}function opListToTree(opList){let opTree=[];const tmp=[];for(const opListElement of opList){if(opListElement.fn==="save"){opTree.push({fnId:92,fn:"group",items:[]});tmp.push(opTree);opTree=opTree.at(-1).items;continue;}if(opListElement.fn==="restore"){opTree=tmp.pop();}else {opTree.push(opListElement);}}return opTree;}function pf(value){if(Number.isInteger(value)){return value.toString();}const s=value.toFixed(10);let i=s.length-1;if(s[i]!=="0"){return s;}do{i--;}while(s[i]==="0");return s.substring(0,s[i]==="."?i:i+1);}function pm(m){if(m[4]===0&&m[5]===0){if(m[1]===0&&m[2]===0){if(m[0]===1&&m[3]===1){return "";}return `scale(${pf(m[0])} ${pf(m[3])})`;}if(m[0]===m[3]&&m[1]===-m[2]){const a=Math.acos(m[0])*180/Math.PI;return `rotate(${pf(a)})`;}}else {if(m[0]===1&&m[1]===0&&m[2]===0&&m[3]===1){return `translate(${pf(m[4])} ${pf(m[5])})`;}}return `matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} `+`${pf(m[5])})`;}let clipCount=0;let maskCount=0;let shadingCount=0;exports.SVGGraphics=SVGGraphics=class{constructor(commonObjs,objs,forceDataSchema=false){(0, _display_utils.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future.");this.svgFactory=new _display_utils.DOMSVGFactory();this.current=new SVGExtraState();this.transformMatrix=_util.IDENTITY_MATRIX;this.transformStack=[];this.extraStack=[];this.commonObjs=commonObjs;this.objs=objs;this.pendingClip=null;this.pendingEOFill=false;this.embedFonts=false;this.embeddedFonts=Object.create(null);this.cssStyle=null;this.forceDataSchema=!!forceDataSchema;this._operatorIdMapping=[];for(const op in _util.OPS){this._operatorIdMapping[_util.OPS[op]]=op;}}getObject(data,fallback=null){if(typeof data==="string"){return data.startsWith("g_")?this.commonObjs.get(data):this.objs.get(data);}return fallback;}save(){this.transformStack.push(this.transformMatrix);const old=this.current;this.extraStack.push(old);this.current=old.clone();}restore(){this.transformMatrix=this.transformStack.pop();this.current=this.extraStack.pop();this.pendingClip=null;this.tgrp=null;}group(items){this.save();this.executeOpTree(items);this.restore();}loadDependencies(operatorList){const fnArray=operatorList.fnArray;const argsArray=operatorList.argsArray;for(let i=0,ii=fnArray.length;i<ii;i++){if(fnArray[i]!==_util.OPS.dependency){continue;}for(const obj of argsArray[i]){const objsPool=obj.startsWith("g_")?this.commonObjs:this.objs;const promise=new Promise(resolve=>{objsPool.get(obj,resolve);});this.current.dependencies.push(promise);}}return Promise.all(this.current.dependencies);}transform(a,b,c,d,e,f){const transformMatrix=[a,b,c,d,e,f];this.transformMatrix=_util.Util.transform(this.transformMatrix,transformMatrix);this.tgrp=null;}getSVG(operatorList,viewport){this.viewport=viewport;const svgElement=this._initialize(viewport);return this.loadDependencies(operatorList).then(()=>{this.transformMatrix=_util.IDENTITY_MATRIX;this.executeOpTree(this.convertOpList(operatorList));return svgElement;});}convertOpList(operatorList){const operatorIdMapping=this._operatorIdMapping;const argsArray=operatorList.argsArray;const fnArray=operatorList.fnArray;const opList=[];for(let i=0,ii=fnArray.length;i<ii;i++){const fnId=fnArray[i];opList.push({fnId,fn:operatorIdMapping[fnId],args:argsArray[i]});}return opListToTree(opList);}executeOpTree(opTree){for(const opTreeElement of opTree){const fn=opTreeElement.fn;const fnId=opTreeElement.fnId;const args=opTreeElement.args;switch(fnId|0){case _util.OPS.beginText:this.beginText();break;case _util.OPS.dependency:break;case _util.OPS.setLeading:this.setLeading(args);break;case _util.OPS.setLeadingMoveText:this.setLeadingMoveText(args[0],args[1]);break;case _util.OPS.setFont:this.setFont(args);break;case _util.OPS.showText:this.showText(args[0]);break;case _util.OPS.showSpacedText:this.showText(args[0]);break;case _util.OPS.endText:this.endText();break;case _util.OPS.moveText:this.moveText(args[0],args[1]);break;case _util.OPS.setCharSpacing:this.setCharSpacing(args[0]);break;case _util.OPS.setWordSpacing:this.setWordSpacing(args[0]);break;case _util.OPS.setHScale:this.setHScale(args[0]);break;case _util.OPS.setTextMatrix:this.setTextMatrix(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.setTextRise:this.setTextRise(args[0]);break;case _util.OPS.setTextRenderingMode:this.setTextRenderingMode(args[0]);break;case _util.OPS.setLineWidth:this.setLineWidth(args[0]);break;case _util.OPS.setLineJoin:this.setLineJoin(args[0]);break;case _util.OPS.setLineCap:this.setLineCap(args[0]);break;case _util.OPS.setMiterLimit:this.setMiterLimit(args[0]);break;case _util.OPS.setFillRGBColor:this.setFillRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeRGBColor:this.setStrokeRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeColorN:this.setStrokeColorN(args);break;case _util.OPS.setFillColorN:this.setFillColorN(args);break;case _util.OPS.shadingFill:this.shadingFill(args[0]);break;case _util.OPS.setDash:this.setDash(args[0],args[1]);break;case _util.OPS.setRenderingIntent:this.setRenderingIntent(args[0]);break;case _util.OPS.setFlatness:this.setFlatness(args[0]);break;case _util.OPS.setGState:this.setGState(args[0]);break;case _util.OPS.fill:this.fill();break;case _util.OPS.eoFill:this.eoFill();break;case _util.OPS.stroke:this.stroke();break;case _util.OPS.fillStroke:this.fillStroke();break;case _util.OPS.eoFillStroke:this.eoFillStroke();break;case _util.OPS.clip:this.clip("nonzero");break;case _util.OPS.eoClip:this.clip("evenodd");break;case _util.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case _util.OPS.paintImageXObject:this.paintImageXObject(args[0]);break;case _util.OPS.paintInlineImageXObject:this.paintInlineImageXObject(args[0]);break;case _util.OPS.paintImageMaskXObject:this.paintImageMaskXObject(args[0]);break;case _util.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(args[0],args[1]);break;case _util.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case _util.OPS.closePath:this.closePath();break;case _util.OPS.closeStroke:this.closeStroke();break;case _util.OPS.closeFillStroke:this.closeFillStroke();break;case _util.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case _util.OPS.nextLine:this.nextLine();break;case _util.OPS.transform:this.transform(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.constructPath:this.constructPath(args[0],args[1]);break;case _util.OPS.endPath:this.endPath();break;case 92:this.group(opTreeElement.items);break;default:(0, _util.warn)(`Unimplemented operator ${fn}`);break;}}}setWordSpacing(wordSpacing){this.current.wordSpacing=wordSpacing;}setCharSpacing(charSpacing){this.current.charSpacing=charSpacing;}nextLine(){this.moveText(0,this.current.leading);}setTextMatrix(a,b,c,d,e,f){const current=this.current;current.textMatrix=current.lineMatrix=[a,b,c,d,e,f];current.textMatrixScale=Math.hypot(a,b);current.x=current.lineX=0;current.y=current.lineY=0;current.xcoords=[];current.ycoords=[];current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);current.tspan.setAttributeNS(null,"y",pf(-current.y));current.txtElement=this.svgFactory.createElement("svg:text");current.txtElement.append(current.tspan);}beginText(){const current=this.current;current.x=current.lineX=0;current.y=current.lineY=0;current.textMatrix=_util.IDENTITY_MATRIX;current.lineMatrix=_util.IDENTITY_MATRIX;current.textMatrixScale=1;current.tspan=this.svgFactory.createElement("svg:tspan");current.txtElement=this.svgFactory.createElement("svg:text");current.txtgrp=this.svgFactory.createElement("svg:g");current.xcoords=[];current.ycoords=[];}moveText(x,y){const current=this.current;current.x=current.lineX+=x;current.y=current.lineY+=y;current.xcoords=[];current.ycoords=[];current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);current.tspan.setAttributeNS(null,"y",pf(-current.y));}showText(glyphs){const current=this.current;const font=current.font;const fontSize=current.fontSize;if(fontSize===0){return;}const fontSizeScale=current.fontSizeScale;const charSpacing=current.charSpacing;const wordSpacing=current.wordSpacing;const fontDirection=current.fontDirection;const textHScale=current.textHScale*fontDirection;const vertical=font.vertical;const spacingDir=vertical?1:-1;const defaultVMetrics=font.defaultVMetrics;const widthAdvanceScale=fontSize*current.fontMatrix[0];let x=0;for(const glyph of glyphs){if(glyph===null){x+=fontDirection*wordSpacing;continue;}else if(typeof glyph==="number"){x+=spacingDir*glyph*fontSize/1000;continue;}const spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;const character=glyph.fontChar;let scaledX,scaledY;let width=glyph.width;if(vertical){let vx;const vmetric=glyph.vmetric||defaultVMetrics;vx=glyph.vmetric?vmetric[1]:width*0.5;vx=-vx*widthAdvanceScale;const vy=vmetric[2]*widthAdvanceScale;width=vmetric?-vmetric[0]:width;scaledX=vx/fontSizeScale;scaledY=(x+vy)/fontSizeScale;}else {scaledX=x/fontSizeScale;scaledY=0;}if(glyph.isInFont||font.missingFile){current.xcoords.push(current.x+scaledX);if(vertical){current.ycoords.push(-current.y+scaledY);}current.tspan.textContent+=character;}let charWidth;if(vertical){charWidth=width*widthAdvanceScale-spacing*fontDirection;}else {charWidth=width*widthAdvanceScale+spacing*fontDirection;}x+=charWidth;}current.tspan.setAttributeNS(null,"x",current.xcoords.map(pf).join(" "));if(vertical){current.tspan.setAttributeNS(null,"y",current.ycoords.map(pf).join(" "));}else {current.tspan.setAttributeNS(null,"y",pf(-current.y));}if(vertical){current.y-=x;}else {current.x+=x*textHScale;}current.tspan.setAttributeNS(null,"font-family",current.fontFamily);current.tspan.setAttributeNS(null,"font-size",`${pf(current.fontSize)}px`);if(current.fontStyle!==SVG_DEFAULTS.fontStyle){current.tspan.setAttributeNS(null,"font-style",current.fontStyle);}if(current.fontWeight!==SVG_DEFAULTS.fontWeight){current.tspan.setAttributeNS(null,"font-weight",current.fontWeight);}const fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){if(current.fillColor!==SVG_DEFAULTS.fillColor){current.tspan.setAttributeNS(null,"fill",current.fillColor);}if(current.fillAlpha<1){current.tspan.setAttributeNS(null,"fill-opacity",current.fillAlpha);}}else if(current.textRenderingMode===_util.TextRenderingMode.ADD_TO_PATH){current.tspan.setAttributeNS(null,"fill","transparent");}else {current.tspan.setAttributeNS(null,"fill","none");}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){const lineWidthScale=1/(current.textMatrixScale||1);this._setStrokeAttributes(current.tspan,lineWidthScale);}let textMatrix=current.textMatrix;if(current.textRise!==0){textMatrix=textMatrix.slice();textMatrix[5]+=current.textRise;}current.txtElement.setAttributeNS(null,"transform",`${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);current.txtElement.setAttributeNS(XML_NS,"xml:space","preserve");current.txtElement.append(current.tspan);current.txtgrp.append(current.txtElement);this._ensureTransformGroup().append(current.txtElement);}setLeadingMoveText(x,y){this.setLeading(-y);this.moveText(x,y);}addFontStyle(fontObj){if(!fontObj.data){throw new Error("addFontStyle: No font data available, "+'ensure that the "fontExtraProperties" API parameter is set.');}if(!this.cssStyle){this.cssStyle=this.svgFactory.createElement("svg:style");this.cssStyle.setAttributeNS(null,"type","text/css");this.defs.append(this.cssStyle);}const url=createObjectURL(fontObj.data,fontObj.mimetype,this.forceDataSchema);this.cssStyle.textContent+=`@font-face { font-family: "${fontObj.loadedName}";`+` src: url(${url}); }\n`;}setFont(details){const current=this.current;const fontObj=this.commonObjs.get(details[0]);let size=details[1];current.font=fontObj;if(this.embedFonts&&!fontObj.missingFile&&!this.embeddedFonts[fontObj.loadedName]){this.addFontStyle(fontObj);this.embeddedFonts[fontObj.loadedName]=fontObj;}current.fontMatrix=fontObj.fontMatrix||_util.FONT_IDENTITY_MATRIX;let bold="normal";if(fontObj.black){bold="900";}else if(fontObj.bold){bold="bold";}const italic=fontObj.italic?"italic":"normal";if(size<0){size=-size;current.fontDirection=-1;}else {current.fontDirection=1;}current.fontSize=size;current.fontFamily=fontObj.loadedName;current.fontWeight=bold;current.fontStyle=italic;current.tspan=this.svgFactory.createElement("svg:tspan");current.tspan.setAttributeNS(null,"y",pf(-current.y));current.xcoords=[];current.ycoords=[];}endText(){const current=this.current;if(current.textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG&&current.txtElement?.hasChildNodes()){current.element=current.txtElement;this.clip("nonzero");this.endPath();}}setLineWidth(width){if(width>0){this.current.lineWidth=width;}}setLineCap(style){this.current.lineCap=LINE_CAP_STYLES[style];}setLineJoin(style){this.current.lineJoin=LINE_JOIN_STYLES[style];}setMiterLimit(limit){this.current.miterLimit=limit;}setStrokeAlpha(strokeAlpha){this.current.strokeAlpha=strokeAlpha;}setStrokeRGBColor(r,g,b){this.current.strokeColor=_util.Util.makeHexColor(r,g,b);}setFillAlpha(fillAlpha){this.current.fillAlpha=fillAlpha;}setFillRGBColor(r,g,b){this.current.fillColor=_util.Util.makeHexColor(r,g,b);this.current.tspan=this.svgFactory.createElement("svg:tspan");this.current.xcoords=[];this.current.ycoords=[];}setStrokeColorN(args){this.current.strokeColor=this._makeColorN_Pattern(args);}setFillColorN(args){this.current.fillColor=this._makeColorN_Pattern(args);}shadingFill(args){const width=this.viewport.width;const height=this.viewport.height;const inv=_util.Util.inverseTransform(this.transformMatrix);const bl=_util.Util.applyTransform([0,0],inv);const br=_util.Util.applyTransform([0,height],inv);const ul=_util.Util.applyTransform([width,0],inv);const ur=_util.Util.applyTransform([width,height],inv);const x0=Math.min(bl[0],br[0],ul[0],ur[0]);const y0=Math.min(bl[1],br[1],ul[1],ur[1]);const x1=Math.max(bl[0],br[0],ul[0],ur[0]);const y1=Math.max(bl[1],br[1],ul[1],ur[1]);const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x",x0);rect.setAttributeNS(null,"y",y0);rect.setAttributeNS(null,"width",x1-x0);rect.setAttributeNS(null,"height",y1-y0);rect.setAttributeNS(null,"fill",this._makeShadingPattern(args));if(this.current.fillAlpha<1){rect.setAttributeNS(null,"fill-opacity",this.current.fillAlpha);}this._ensureTransformGroup().append(rect);}_makeColorN_Pattern(args){if(args[0]==="TilingPattern"){return this._makeTilingPattern(args);}return this._makeShadingPattern(args);}_makeTilingPattern(args){const color=args[1];const operatorList=args[2];const matrix=args[3]||_util.IDENTITY_MATRIX;const[x0,y0,x1,y1]=args[4];const xstep=args[5];const ystep=args[6];const paintType=args[7];const tilingId=`shading${shadingCount++}`;const[tx0,ty0,tx1,ty1]=_util.Util.normalizeRect([..._util.Util.applyTransform([x0,y0],matrix),..._util.Util.applyTransform([x1,y1],matrix)]);const[xscale,yscale]=_util.Util.singularValueDecompose2dScale(matrix);const txstep=xstep*xscale;const tystep=ystep*yscale;const tiling=this.svgFactory.createElement("svg:pattern");tiling.setAttributeNS(null,"id",tilingId);tiling.setAttributeNS(null,"patternUnits","userSpaceOnUse");tiling.setAttributeNS(null,"width",txstep);tiling.setAttributeNS(null,"height",tystep);tiling.setAttributeNS(null,"x",`${tx0}`);tiling.setAttributeNS(null,"y",`${ty0}`);const svg=this.svg;const transformMatrix=this.transformMatrix;const fillColor=this.current.fillColor;const strokeColor=this.current.strokeColor;const bbox=this.svgFactory.create(tx1-tx0,ty1-ty0);this.svg=bbox;this.transformMatrix=matrix;if(paintType===2){const cssColor=_util.Util.makeHexColor(...color);this.current.fillColor=cssColor;this.current.strokeColor=cssColor;}this.executeOpTree(this.convertOpList(operatorList));this.svg=svg;this.transformMatrix=transformMatrix;this.current.fillColor=fillColor;this.current.strokeColor=strokeColor;tiling.append(bbox.childNodes[0]);this.defs.append(tiling);return `url(#${tilingId})`;}_makeShadingPattern(args){if(typeof args==="string"){args=this.objs.get(args);}switch(args[0]){case"RadialAxial":const shadingId=`shading${shadingCount++}`;const colorStops=args[3];let gradient;switch(args[1]){case"axial":const point0=args[4];const point1=args[5];gradient=this.svgFactory.createElement("svg:linearGradient");gradient.setAttributeNS(null,"id",shadingId);gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");gradient.setAttributeNS(null,"x1",point0[0]);gradient.setAttributeNS(null,"y1",point0[1]);gradient.setAttributeNS(null,"x2",point1[0]);gradient.setAttributeNS(null,"y2",point1[1]);break;case"radial":const focalPoint=args[4];const circlePoint=args[5];const focalRadius=args[6];const circleRadius=args[7];gradient=this.svgFactory.createElement("svg:radialGradient");gradient.setAttributeNS(null,"id",shadingId);gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");gradient.setAttributeNS(null,"cx",circlePoint[0]);gradient.setAttributeNS(null,"cy",circlePoint[1]);gradient.setAttributeNS(null,"r",circleRadius);gradient.setAttributeNS(null,"fx",focalPoint[0]);gradient.setAttributeNS(null,"fy",focalPoint[1]);gradient.setAttributeNS(null,"fr",focalRadius);break;default:throw new Error(`Unknown RadialAxial type: ${args[1]}`);}for(const colorStop of colorStops){const stop=this.svgFactory.createElement("svg:stop");stop.setAttributeNS(null,"offset",colorStop[0]);stop.setAttributeNS(null,"stop-color",colorStop[1]);gradient.append(stop);}this.defs.append(gradient);return `url(#${shadingId})`;case"Mesh":(0, _util.warn)("Unimplemented pattern Mesh");return null;case"Dummy":return "hotpink";default:throw new Error(`Unknown IR type: ${args[0]}`);}}setDash(dashArray,dashPhase){this.current.dashArray=dashArray;this.current.dashPhase=dashPhase;}constructPath(ops,args){const current=this.current;let x=current.x,y=current.y;let d=[];let j=0;for(const op of ops){switch(op|0){case _util.OPS.rectangle:x=args[j++];y=args[j++];const width=args[j++];const height=args[j++];const xw=x+width;const yh=y+height;d.push("M",pf(x),pf(y),"L",pf(xw),pf(y),"L",pf(xw),pf(yh),"L",pf(x),pf(yh),"Z");break;case _util.OPS.moveTo:x=args[j++];y=args[j++];d.push("M",pf(x),pf(y));break;case _util.OPS.lineTo:x=args[j++];y=args[j++];d.push("L",pf(x),pf(y));break;case _util.OPS.curveTo:x=args[j+4];y=args[j+5];d.push("C",pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]),pf(x),pf(y));j+=6;break;case _util.OPS.curveTo2:d.push("C",pf(x),pf(y),pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]));x=args[j+2];y=args[j+3];j+=4;break;case _util.OPS.curveTo3:x=args[j+2];y=args[j+3];d.push("C",pf(args[j]),pf(args[j+1]),pf(x),pf(y),pf(x),pf(y));j+=4;break;case _util.OPS.closePath:d.push("Z");break;}}d=d.join(" ");if(current.path&&ops.length>0&&ops[0]!==_util.OPS.rectangle&&ops[0]!==_util.OPS.moveTo){d=current.path.getAttributeNS(null,"d")+d;}else {current.path=this.svgFactory.createElement("svg:path");this._ensureTransformGroup().append(current.path);}current.path.setAttributeNS(null,"d",d);current.path.setAttributeNS(null,"fill","none");current.element=current.path;current.setCurrentPoint(x,y);}endPath(){const current=this.current;current.path=null;if(!this.pendingClip){return;}if(!current.element){this.pendingClip=null;return;}const clipId=`clippath${clipCount++}`;const clipPath=this.svgFactory.createElement("svg:clipPath");clipPath.setAttributeNS(null,"id",clipId);clipPath.setAttributeNS(null,"transform",pm(this.transformMatrix));const clipElement=current.element.cloneNode(true);if(this.pendingClip==="evenodd"){clipElement.setAttributeNS(null,"clip-rule","evenodd");}else {clipElement.setAttributeNS(null,"clip-rule","nonzero");}this.pendingClip=null;clipPath.append(clipElement);this.defs.append(clipPath);if(current.activeClipUrl){current.clipGroup=null;for(const prev of this.extraStack){prev.clipGroup=null;}clipPath.setAttributeNS(null,"clip-path",current.activeClipUrl);}current.activeClipUrl=`url(#${clipId})`;this.tgrp=null;}clip(type){this.pendingClip=type;}closePath(){const current=this.current;if(current.path){const d=`${current.path.getAttributeNS(null,"d")}Z`;current.path.setAttributeNS(null,"d",d);}}setLeading(leading){this.current.leading=-leading;}setTextRise(textRise){this.current.textRise=textRise;}setTextRenderingMode(textRenderingMode){this.current.textRenderingMode=textRenderingMode;}setHScale(scale){this.current.textHScale=scale/100;}setRenderingIntent(intent){}setFlatness(flatness){}setGState(states){for(const[key,value]of states){switch(key){case"LW":this.setLineWidth(value);break;case"LC":this.setLineCap(value);break;case"LJ":this.setLineJoin(value);break;case"ML":this.setMiterLimit(value);break;case"D":this.setDash(value[0],value[1]);break;case"RI":this.setRenderingIntent(value);break;case"FL":this.setFlatness(value);break;case"Font":this.setFont(value);break;case"CA":this.setStrokeAlpha(value);break;case"ca":this.setFillAlpha(value);break;default:(0, _util.warn)(`Unimplemented graphic state operator ${key}`);break;}}}fill(){const current=this.current;if(current.element){current.element.setAttributeNS(null,"fill",current.fillColor);current.element.setAttributeNS(null,"fill-opacity",current.fillAlpha);this.endPath();}}stroke(){const current=this.current;if(current.element){this._setStrokeAttributes(current.element);current.element.setAttributeNS(null,"fill","none");this.endPath();}}_setStrokeAttributes(element,lineWidthScale=1){const current=this.current;let dashArray=current.dashArray;if(lineWidthScale!==1&&dashArray.length>0){dashArray=dashArray.map(function(value){return lineWidthScale*value;});}element.setAttributeNS(null,"stroke",current.strokeColor);element.setAttributeNS(null,"stroke-opacity",current.strokeAlpha);element.setAttributeNS(null,"stroke-miterlimit",pf(current.miterLimit));element.setAttributeNS(null,"stroke-linecap",current.lineCap);element.setAttributeNS(null,"stroke-linejoin",current.lineJoin);element.setAttributeNS(null,"stroke-width",pf(lineWidthScale*current.lineWidth)+"px");element.setAttributeNS(null,"stroke-dasharray",dashArray.map(pf).join(" "));element.setAttributeNS(null,"stroke-dashoffset",pf(lineWidthScale*current.dashPhase)+"px");}eoFill(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd");this.fill();}fillStroke(){this.stroke();this.fill();}eoFillStroke(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd");this.fillStroke();}closeStroke(){this.closePath();this.stroke();}closeFillStroke(){this.closePath();this.fillStroke();}closeEOFillStroke(){this.closePath();this.eoFillStroke();}paintSolidColorImageMask(){const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x","0");rect.setAttributeNS(null,"y","0");rect.setAttributeNS(null,"width","1px");rect.setAttributeNS(null,"height","1px");rect.setAttributeNS(null,"fill",this.current.fillColor);this._ensureTransformGroup().append(rect);}paintImageXObject(objId){const imgData=this.getObject(objId);if(!imgData){(0, _util.warn)(`Dependent image with object ID ${objId} is not ready yet`);return;}this.paintInlineImageXObject(imgData);}paintInlineImageXObject(imgData,mask){const width=imgData.width;const height=imgData.height;const imgSrc=convertImgDataToPng(imgData,this.forceDataSchema,!!mask);const cliprect=this.svgFactory.createElement("svg:rect");cliprect.setAttributeNS(null,"x","0");cliprect.setAttributeNS(null,"y","0");cliprect.setAttributeNS(null,"width",pf(width));cliprect.setAttributeNS(null,"height",pf(height));this.current.element=cliprect;this.clip("nonzero");const imgEl=this.svgFactory.createElement("svg:image");imgEl.setAttributeNS(XLINK_NS,"xlink:href",imgSrc);imgEl.setAttributeNS(null,"x","0");imgEl.setAttributeNS(null,"y",pf(-height));imgEl.setAttributeNS(null,"width",pf(width)+"px");imgEl.setAttributeNS(null,"height",pf(height)+"px");imgEl.setAttributeNS(null,"transform",`scale(${pf(1/width)} ${pf(-1/height)})`);if(mask){mask.append(imgEl);}else {this._ensureTransformGroup().append(imgEl);}}paintImageMaskXObject(img){const imgData=this.getObject(img.data,img);if(imgData.bitmap){(0, _util.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, "+"ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");return;}const current=this.current;const width=imgData.width;const height=imgData.height;const fillColor=current.fillColor;current.maskId=`mask${maskCount++}`;const mask=this.svgFactory.createElement("svg:mask");mask.setAttributeNS(null,"id",current.maskId);const rect=this.svgFactory.createElement("svg:rect");rect.setAttributeNS(null,"x","0");rect.setAttributeNS(null,"y","0");rect.setAttributeNS(null,"width",pf(width));rect.setAttributeNS(null,"height",pf(height));rect.setAttributeNS(null,"fill",fillColor);rect.setAttributeNS(null,"mask",`url(#${current.maskId})`);this.defs.append(mask);this._ensureTransformGroup().append(rect);this.paintInlineImageXObject(imgData,mask);}paintFormXObjectBegin(matrix,bbox){if(Array.isArray(matrix)&&matrix.length===6){this.transform(matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5]);}if(bbox){const width=bbox[2]-bbox[0];const height=bbox[3]-bbox[1];const cliprect=this.svgFactory.createElement("svg:rect");cliprect.setAttributeNS(null,"x",bbox[0]);cliprect.setAttributeNS(null,"y",bbox[1]);cliprect.setAttributeNS(null,"width",pf(width));cliprect.setAttributeNS(null,"height",pf(height));this.current.element=cliprect;this.clip("nonzero");this.endPath();}}paintFormXObjectEnd(){}_initialize(viewport){const svg=this.svgFactory.create(viewport.width,viewport.height);const definitions=this.svgFactory.createElement("svg:defs");svg.append(definitions);this.defs=definitions;const rootGroup=this.svgFactory.createElement("svg:g");rootGroup.setAttributeNS(null,"transform",pm(viewport.transform));svg.append(rootGroup);this.svg=rootGroup;return svg;}_ensureClipGroup(){if(!this.current.clipGroup){const clipGroup=this.svgFactory.createElement("svg:g");clipGroup.setAttributeNS(null,"clip-path",this.current.activeClipUrl);this.svg.append(clipGroup);this.current.clipGroup=clipGroup;}return this.current.clipGroup;}_ensureTransformGroup(){if(!this.tgrp){this.tgrp=this.svgFactory.createElement("svg:g");this.tgrp.setAttributeNS(null,"transform",pm(this.transformMatrix));if(this.current.activeClipUrl){this._ensureClipGroup().append(this.tgrp);}else {this.svg.append(this.tgrp);}}return this.tgrp;}};}/***/}/******/];/************************************************************************/ /******/ // The module cache
    	/******/var __webpack_module_cache__={};/******/ /******/ // The require function
    	/******/function __w_pdfjs_require__(moduleId){/******/ // Check if module is in cache
    	/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
    	/******/var module=__webpack_module_cache__[moduleId]={/******/ // no module.id needed
    	/******/ // no module.loaded needed
    	/******/exports:{}/******/};/******/ /******/ // Execute the module function
    	/******/__webpack_modules__[moduleId](module,module.exports,__w_pdfjs_require__);/******/ /******/ // Return the exports of the module
    	/******/return module.exports;/******/}/******/ /************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    	(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"AbortException",{enumerable:true,get:function(){return _util.AbortException;}});Object.defineProperty(exports,"AnnotationEditorLayer",{enumerable:true,get:function(){return _annotation_editor_layer.AnnotationEditorLayer;}});Object.defineProperty(exports,"AnnotationEditorParamsType",{enumerable:true,get:function(){return _util.AnnotationEditorParamsType;}});Object.defineProperty(exports,"AnnotationEditorType",{enumerable:true,get:function(){return _util.AnnotationEditorType;}});Object.defineProperty(exports,"AnnotationEditorUIManager",{enumerable:true,get:function(){return _tools.AnnotationEditorUIManager;}});Object.defineProperty(exports,"AnnotationLayer",{enumerable:true,get:function(){return _annotation_layer.AnnotationLayer;}});Object.defineProperty(exports,"AnnotationMode",{enumerable:true,get:function(){return _util.AnnotationMode;}});Object.defineProperty(exports,"CMapCompressionType",{enumerable:true,get:function(){return _util.CMapCompressionType;}});Object.defineProperty(exports,"FeatureTest",{enumerable:true,get:function(){return _util.FeatureTest;}});Object.defineProperty(exports,"GlobalWorkerOptions",{enumerable:true,get:function(){return _worker_options.GlobalWorkerOptions;}});Object.defineProperty(exports,"InvalidPDFException",{enumerable:true,get:function(){return _util.InvalidPDFException;}});Object.defineProperty(exports,"MissingPDFException",{enumerable:true,get:function(){return _util.MissingPDFException;}});Object.defineProperty(exports,"OPS",{enumerable:true,get:function(){return _util.OPS;}});Object.defineProperty(exports,"PDFDataRangeTransport",{enumerable:true,get:function(){return _api.PDFDataRangeTransport;}});Object.defineProperty(exports,"PDFDateString",{enumerable:true,get:function(){return _display_utils.PDFDateString;}});Object.defineProperty(exports,"PDFWorker",{enumerable:true,get:function(){return _api.PDFWorker;}});Object.defineProperty(exports,"PasswordResponses",{enumerable:true,get:function(){return _util.PasswordResponses;}});Object.defineProperty(exports,"PermissionFlag",{enumerable:true,get:function(){return _util.PermissionFlag;}});Object.defineProperty(exports,"PixelsPerInch",{enumerable:true,get:function(){return _display_utils.PixelsPerInch;}});Object.defineProperty(exports,"RenderingCancelledException",{enumerable:true,get:function(){return _display_utils.RenderingCancelledException;}});Object.defineProperty(exports,"SVGGraphics",{enumerable:true,get:function(){return _svg.SVGGraphics;}});Object.defineProperty(exports,"UNSUPPORTED_FEATURES",{enumerable:true,get:function(){return _util.UNSUPPORTED_FEATURES;}});Object.defineProperty(exports,"UnexpectedResponseException",{enumerable:true,get:function(){return _util.UnexpectedResponseException;}});Object.defineProperty(exports,"Util",{enumerable:true,get:function(){return _util.Util;}});Object.defineProperty(exports,"VerbosityLevel",{enumerable:true,get:function(){return _util.VerbosityLevel;}});Object.defineProperty(exports,"XfaLayer",{enumerable:true,get:function(){return _xfa_layer.XfaLayer;}});Object.defineProperty(exports,"build",{enumerable:true,get:function(){return _api.build;}});Object.defineProperty(exports,"createPromiseCapability",{enumerable:true,get:function(){return _util.createPromiseCapability;}});Object.defineProperty(exports,"createValidAbsoluteUrl",{enumerable:true,get:function(){return _util.createValidAbsoluteUrl;}});Object.defineProperty(exports,"getDocument",{enumerable:true,get:function(){return _api.getDocument;}});Object.defineProperty(exports,"getFilenameFromUrl",{enumerable:true,get:function(){return _display_utils.getFilenameFromUrl;}});Object.defineProperty(exports,"getPdfFilenameFromUrl",{enumerable:true,get:function(){return _display_utils.getPdfFilenameFromUrl;}});Object.defineProperty(exports,"getXfaPageViewport",{enumerable:true,get:function(){return _display_utils.getXfaPageViewport;}});Object.defineProperty(exports,"isDataScheme",{enumerable:true,get:function(){return _display_utils.isDataScheme;}});Object.defineProperty(exports,"isPdfFile",{enumerable:true,get:function(){return _display_utils.isPdfFile;}});Object.defineProperty(exports,"loadScript",{enumerable:true,get:function(){return _display_utils.loadScript;}});Object.defineProperty(exports,"renderTextLayer",{enumerable:true,get:function(){return _text_layer.renderTextLayer;}});Object.defineProperty(exports,"setLayerDimensions",{enumerable:true,get:function(){return _display_utils.setLayerDimensions;}});Object.defineProperty(exports,"shadow",{enumerable:true,get:function(){return _util.shadow;}});Object.defineProperty(exports,"updateTextLayer",{enumerable:true,get:function(){return _text_layer.updateTextLayer;}});Object.defineProperty(exports,"version",{enumerable:true,get:function(){return _api.version;}});var _util=__w_pdfjs_require__(1);var _api=__w_pdfjs_require__(2);var _display_utils=__w_pdfjs_require__(6);var _text_layer=__w_pdfjs_require__(26);var _annotation_editor_layer=__w_pdfjs_require__(27);var _tools=__w_pdfjs_require__(5);var _annotation_layer=__w_pdfjs_require__(32);var _worker_options=__w_pdfjs_require__(14);var _svg=__w_pdfjs_require__(35);var _xfa_layer=__w_pdfjs_require__(34);})();/******/return __webpack_exports__;/******/})());});
    } (pdf));

    var pdf_workerExports = {};
    var pdf_worker = {
      get exports(){ return pdf_workerExports; },
      set exports(v){ pdf_workerExports = v; },
    };

    var path2dPolyfill_esm = {};

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var hasRequiredPath2dPolyfill_esm;

    function requirePath2dPolyfill_esm () {
    	if (hasRequiredPath2dPolyfill_esm) return path2dPolyfill_esm;
    	hasRequiredPath2dPolyfill_esm = 1;
    	function __spreadArray(to, from, pack) {
    	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    	    if (ar || !(i in from)) {
    	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
    	      ar[i] = from[i];
    	    }
    	  }
    	  return to.concat(ar || Array.prototype.slice.call(from));
    	}
    	var ARG_LENGTH = {
    	  a: 7,
    	  c: 6,
    	  h: 1,
    	  l: 2,
    	  m: 2,
    	  q: 4,
    	  s: 4,
    	  t: 2,
    	  v: 1,
    	  z: 0
    	};
    	var SEGMENT_PATTERN = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
    	var NUMBER = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
    	function parseValues(args) {
    	  var numbers = args.match(NUMBER);
    	  return numbers ? numbers.map(Number) : [];
    	}
    	/**
    	 * parse an svg path data string. Generates an Array
    	 * of commands where each command is an Array of the
    	 * form `[command, arg1, arg2, ...]`
    	 *
    	 * https://www.w3.org/TR/SVG/paths.html#PathDataGeneralInformation
    	 * @ignore
    	 *
    	 * @param {string} path
    	 * @returns {array}
    	 */
    	function parsePath(path) {
    	  var data = [];
    	  var p = String(path).trim();
    	  // A path data segment (if there is one) must begin with a "moveto" command
    	  if (p[0] !== "M" && p[0] !== "m") {
    	    return data;
    	  }
    	  p.replace(SEGMENT_PATTERN, function (_, command, args) {
    	    var theArgs = parseValues(args);
    	    var type = command.toLowerCase();
    	    var theCommand = command;
    	    // overloaded moveTo
    	    if (type === "m" && theArgs.length > 2) {
    	      data.push(__spreadArray([theCommand], theArgs.splice(0, 2), true));
    	      type = "l";
    	      theCommand = theCommand === "m" ? "l" : "L";
    	    }
    	    // Ignore invalid commands
    	    if (theArgs.length < ARG_LENGTH[type]) {
    	      return "";
    	    }
    	    data.push(__spreadArray([theCommand], theArgs.splice(0, ARG_LENGTH[type]), true));
    	    // The command letter can be eliminated on subsequent commands if the
    	    // same command is used multiple times in a row (e.g., you can drop the
    	    // second "L" in "M 100 200 L 200 100 L -100 -200" and use
    	    // "M 100 200 L 200 100 -100 -200" instead).
    	    while (theArgs.length >= ARG_LENGTH[type] && theArgs.length && ARG_LENGTH[type]) {
    	      data.push(__spreadArray([theCommand], theArgs.splice(0, ARG_LENGTH[type]), true));
    	    }
    	    return "";
    	  });
    	  return data;
    	}
    	function rotatePoint(point, angle) {
    	  var nx = point.x * Math.cos(angle) - point.y * Math.sin(angle);
    	  var ny = point.y * Math.cos(angle) + point.x * Math.sin(angle);
    	  point.x = nx;
    	  point.y = ny;
    	}
    	function translatePoint(point, dx, dy) {
    	  point.x += dx;
    	  point.y += dy;
    	}
    	function scalePoint(point, s) {
    	  point.x *= s;
    	  point.y *= s;
    	}
    	/**
    	 * Implements a browser's Path2D api
    	 */
    	var Path2D = /** @class */function () {
    	  function Path2D(path) {
    	    var _a;
    	    this.commands = [];
    	    if (path && path instanceof Path2D) {
    	      (_a = this.commands).push.apply(_a, path.commands);
    	    } else if (path) {
    	      this.commands = parsePath(path);
    	    }
    	  }
    	  Path2D.prototype.addPath = function (path) {
    	    var _a;
    	    if (path && path instanceof Path2D) {
    	      (_a = this.commands).push.apply(_a, path.commands);
    	    }
    	  };
    	  Path2D.prototype.moveTo = function (x, y) {
    	    this.commands.push(["M", x, y]);
    	  };
    	  Path2D.prototype.lineTo = function (x, y) {
    	    this.commands.push(["L", x, y]);
    	  };
    	  Path2D.prototype.arc = function (x, y, r, start, end, ccw) {
    	    this.commands.push(["AC", x, y, r, start, end, !!ccw]);
    	  };
    	  Path2D.prototype.arcTo = function (x1, y1, x2, y2, r) {
    	    this.commands.push(["AT", x1, y1, x2, y2, r]);
    	  };
    	  Path2D.prototype.ellipse = function (x, y, rx, ry, angle, start, end, ccw) {
    	    this.commands.push(["E", x, y, rx, ry, angle, start, end, !!ccw]);
    	  };
    	  Path2D.prototype.closePath = function () {
    	    this.commands.push(["Z"]);
    	  };
    	  Path2D.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    	    this.commands.push(["C", cp1x, cp1y, cp2x, cp2y, x, y]);
    	  };
    	  Path2D.prototype.quadraticCurveTo = function (cpx, cpy, x, y) {
    	    this.commands.push(["Q", cpx, cpy, x, y]);
    	  };
    	  Path2D.prototype.rect = function (x, y, width, height) {
    	    this.commands.push(["R", x, y, width, height]);
    	  };
    	  Path2D.prototype.roundRect = function (x, y, width, height, radii) {
    	    if (typeof radii === "undefined") {
    	      this.commands.push(["RR", x, y, width, height, 0]);
    	    } else {
    	      this.commands.push(["RR", x, y, width, height, radii]);
    	    }
    	  };
    	  return Path2D;
    	}();
    	function buildPath(ctx, commands) {
    	  var x = 0;
    	  var y = 0;
    	  var endAngle;
    	  var startAngle;
    	  var largeArcFlag;
    	  var sweepFlag;
    	  var endPoint;
    	  var midPoint;
    	  var angle;
    	  var lambda;
    	  var t1;
    	  var t2;
    	  var x1;
    	  var y1;
    	  var r;
    	  var rx;
    	  var ry;
    	  var w;
    	  var h;
    	  var pathType;
    	  var centerPoint;
    	  var ccw;
    	  var radii;
    	  var cpx = null;
    	  var cpy = null;
    	  var qcpx = null;
    	  var qcpy = null;
    	  var startPoint = null;
    	  var currentPoint = null;
    	  ctx.beginPath();
    	  for (var i = 0; i < commands.length; ++i) {
    	    pathType = commands[i][0];
    	    // Reset control point if command is not cubic
    	    if (pathType !== "S" && pathType !== "s" && pathType !== "C" && pathType !== "c") {
    	      cpx = null;
    	      cpy = null;
    	    }
    	    if (pathType !== "T" && pathType !== "t" && pathType !== "Q" && pathType !== "q") {
    	      qcpx = null;
    	      qcpy = null;
    	    }
    	    var c = void 0;
    	    switch (pathType) {
    	      case "m":
    	      case "M":
    	        c = commands[i];
    	        if (pathType === "m") {
    	          x += c[1];
    	          y += c[2];
    	        } else {
    	          x = c[1];
    	          y = c[2];
    	        }
    	        if (pathType === "M" || !startPoint) {
    	          startPoint = {
    	            x: x,
    	            y: y
    	          };
    	        }
    	        ctx.moveTo(x, y);
    	        break;
    	      case "l":
    	        c = commands[i];
    	        x += c[1];
    	        y += c[2];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "L":
    	        c = commands[i];
    	        x = c[1];
    	        y = c[2];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "H":
    	        c = commands[i];
    	        x = c[1];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "h":
    	        c = commands[i];
    	        x += c[1];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "V":
    	        c = commands[i];
    	        y = c[1];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "v":
    	        c = commands[i];
    	        y += c[1];
    	        ctx.lineTo(x, y);
    	        break;
    	      case "a":
    	      case "A":
    	        c = commands[i];
    	        if (currentPoint === null) {
    	          throw new Error("This should never happen");
    	        }
    	        if (pathType === "a") {
    	          x += c[6];
    	          y += c[7];
    	        } else {
    	          x = c[6];
    	          y = c[7];
    	        }
    	        rx = c[1]; // rx
    	        ry = c[2]; // ry
    	        angle = c[3] * Math.PI / 180;
    	        largeArcFlag = !!c[4];
    	        sweepFlag = !!c[5];
    	        endPoint = {
    	          x: x,
    	          y: y
    	        };
    	        // https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
    	        midPoint = {
    	          x: (currentPoint.x - endPoint.x) / 2,
    	          y: (currentPoint.y - endPoint.y) / 2
    	        };
    	        rotatePoint(midPoint, -angle);
    	        // radius correction
    	        lambda = midPoint.x * midPoint.x / (rx * rx) + midPoint.y * midPoint.y / (ry * ry);
    	        if (lambda > 1) {
    	          lambda = Math.sqrt(lambda);
    	          rx *= lambda;
    	          ry *= lambda;
    	        }
    	        centerPoint = {
    	          x: rx * midPoint.y / ry,
    	          y: -(ry * midPoint.x) / rx
    	        };
    	        t1 = rx * rx * ry * ry;
    	        t2 = rx * rx * midPoint.y * midPoint.y + ry * ry * midPoint.x * midPoint.x;
    	        if (sweepFlag !== largeArcFlag) {
    	          scalePoint(centerPoint, Math.sqrt((t1 - t2) / t2) || 0);
    	        } else {
    	          scalePoint(centerPoint, -Math.sqrt((t1 - t2) / t2) || 0);
    	        }
    	        startAngle = Math.atan2((midPoint.y - centerPoint.y) / ry, (midPoint.x - centerPoint.x) / rx);
    	        endAngle = Math.atan2(-(midPoint.y + centerPoint.y) / ry, -(midPoint.x + centerPoint.x) / rx);
    	        rotatePoint(centerPoint, angle);
    	        translatePoint(centerPoint, (endPoint.x + currentPoint.x) / 2, (endPoint.y + currentPoint.y) / 2);
    	        ctx.save();
    	        ctx.translate(centerPoint.x, centerPoint.y);
    	        ctx.rotate(angle);
    	        ctx.scale(rx, ry);
    	        ctx.arc(0, 0, 1, startAngle, endAngle, !sweepFlag);
    	        ctx.restore();
    	        break;
    	      case "C":
    	        c = commands[i];
    	        cpx = c[3]; // Last control point
    	        cpy = c[4];
    	        x = c[5];
    	        y = c[6];
    	        ctx.bezierCurveTo(c[1], c[2], cpx, cpy, x, y);
    	        break;
    	      case "c":
    	        c = commands[i];
    	        ctx.bezierCurveTo(c[1] + x, c[2] + y, c[3] + x, c[4] + y, c[5] + x, c[6] + y);
    	        cpx = c[3] + x; // Last control point
    	        cpy = c[4] + y;
    	        x += c[5];
    	        y += c[6];
    	        break;
    	      case "S":
    	        c = commands[i];
    	        if (cpx === null || cpy === null) {
    	          cpx = x;
    	          cpy = y;
    	        }
    	        ctx.bezierCurveTo(2 * x - cpx, 2 * y - cpy, c[1], c[2], c[3], c[4]);
    	        cpx = c[1]; // last control point
    	        cpy = c[2];
    	        x = c[3];
    	        y = c[4];
    	        break;
    	      case "s":
    	        c = commands[i];
    	        if (cpx === null || cpy === null) {
    	          cpx = x;
    	          cpy = y;
    	        }
    	        ctx.bezierCurveTo(2 * x - cpx, 2 * y - cpy, c[1] + x, c[2] + y, c[3] + x, c[4] + y);
    	        cpx = c[1] + x; // last control point
    	        cpy = c[2] + y;
    	        x += c[3];
    	        y += c[4];
    	        break;
    	      case "Q":
    	        c = commands[i];
    	        qcpx = c[1]; // last control point
    	        qcpy = c[2];
    	        x = c[3];
    	        y = c[4];
    	        ctx.quadraticCurveTo(qcpx, qcpy, x, y);
    	        break;
    	      case "q":
    	        c = commands[i];
    	        qcpx = c[1] + x; // last control point
    	        qcpy = c[2] + y;
    	        x += c[3];
    	        y += c[4];
    	        ctx.quadraticCurveTo(qcpx, qcpy, x, y);
    	        break;
    	      case "T":
    	        c = commands[i];
    	        if (qcpx === null || qcpy === null) {
    	          qcpx = x;
    	          qcpy = y;
    	        }
    	        qcpx = 2 * x - qcpx; // last control point
    	        qcpy = 2 * y - qcpy;
    	        x = c[1];
    	        y = c[2];
    	        ctx.quadraticCurveTo(qcpx, qcpy, x, y);
    	        break;
    	      case "t":
    	        c = commands[i];
    	        if (qcpx === null || qcpy === null) {
    	          qcpx = x;
    	          qcpy = y;
    	        }
    	        qcpx = 2 * x - qcpx; // last control point
    	        qcpy = 2 * y - qcpy;
    	        x += c[1];
    	        y += c[2];
    	        ctx.quadraticCurveTo(qcpx, qcpy, x, y);
    	        break;
    	      case "z":
    	      case "Z":
    	        if (startPoint) {
    	          x = startPoint.x;
    	          y = startPoint.y;
    	        }
    	        startPoint = null;
    	        ctx.closePath();
    	        break;
    	      case "AC":
    	        // arc
    	        c = commands[i];
    	        x = c[1];
    	        y = c[2];
    	        r = c[3];
    	        startAngle = c[4];
    	        endAngle = c[5];
    	        ccw = c[6];
    	        ctx.arc(x, y, r, startAngle, endAngle, ccw);
    	        break;
    	      case "AT":
    	        // arcTo
    	        c = commands[i];
    	        x1 = c[1];
    	        y1 = c[2];
    	        x = c[3];
    	        y = c[4];
    	        r = c[5];
    	        ctx.arcTo(x1, y1, x, y, r);
    	        break;
    	      case "E":
    	        // ellipse
    	        c = commands[i];
    	        x = c[1];
    	        y = c[2];
    	        rx = c[3];
    	        ry = c[4];
    	        angle = c[5];
    	        startAngle = c[6];
    	        endAngle = c[7];
    	        ccw = c[8];
    	        ctx.save();
    	        ctx.translate(x, y);
    	        ctx.rotate(angle);
    	        ctx.scale(rx, ry);
    	        ctx.arc(0, 0, 1, startAngle, endAngle, ccw);
    	        ctx.restore();
    	        break;
    	      case "R":
    	        // rect
    	        c = commands[i];
    	        x = c[1];
    	        y = c[2];
    	        w = c[3];
    	        h = c[4];
    	        startPoint = {
    	          x: x,
    	          y: y
    	        };
    	        ctx.rect(x, y, w, h);
    	        break;
    	      case "RR":
    	        // roundedRect
    	        c = commands[i];
    	        x = c[1];
    	        y = c[2];
    	        w = c[3];
    	        h = c[4];
    	        radii = c[5];
    	        startPoint = {
    	          x: x,
    	          y: y
    	        };
    	        ctx.roundRect(x, y, w, h, radii);
    	        break;
    	    }
    	    if (!currentPoint) {
    	      currentPoint = {
    	        x: x,
    	        y: y
    	      };
    	    } else {
    	      currentPoint.x = x;
    	      currentPoint.y = y;
    	    }
    	  }
    	}
    	/**
    	 * Polyfills CanvasRenderingContext2D stroke, fill and isPointInPath so that they support Path2D objects.
    	 * @param {WindowLike} window - window like object containing a CanvasRenderingContext2D constructor
    	 */
    	function polyfillPath2D(window) {
    	  if (!window || !window.CanvasRenderingContext2D || window.Path2D) return;
    	  var CanvasRenderingContext2D = window.CanvasRenderingContext2D;
    	  /* eslint-disable @typescript-eslint/unbound-method */
    	  // setting unbound functions here. Make sure this is set in function call later
    	  var cFill = CanvasRenderingContext2D.prototype.fill;
    	  var cStroke = CanvasRenderingContext2D.prototype.stroke;
    	  var cIsPointInPath = CanvasRenderingContext2D.prototype.isPointInPath;
    	  /* eslint-enable @typescript-eslint/unbound-method */
    	  CanvasRenderingContext2D.prototype.fill = function fill() {
    	    var args = [];
    	    for (var _i = 0; _i < arguments.length; _i++) {
    	      args[_i] = arguments[_i];
    	    }
    	    if (args[0] instanceof Path2D) {
    	      var path = args[0];
    	      var fillRule = args[1] || "nonzero";
    	      buildPath(this, path.commands);
    	      cFill.apply(this, [fillRule]);
    	    } else {
    	      var fillRule = args[0] || "nonzero";
    	      return cFill.apply(this, [fillRule]);
    	    }
    	  };
    	  CanvasRenderingContext2D.prototype.stroke = function stroke(path) {
    	    if (path) {
    	      buildPath(this, path.commands);
    	    }
    	    cStroke.apply(this);
    	  };
    	  CanvasRenderingContext2D.prototype.isPointInPath = function isPointInPath() {
    	    var args = [];
    	    for (var _i = 0; _i < arguments.length; _i++) {
    	      args[_i] = arguments[_i];
    	    }
    	    if (args[0] instanceof Path2D) {
    	      // first argument is a Path2D object
    	      var path = args[0];
    	      var x = args[1];
    	      var y = args[2];
    	      var fillRule = args[3] || "nonzero";
    	      buildPath(this, path.commands);
    	      return cIsPointInPath.apply(this, [x, y, fillRule]);
    	    } else {
    	      return cIsPointInPath.apply(this, args);
    	    }
    	  };
    	  window.Path2D = Path2D;
    	}
    	function roundRect(x, y, width, height, radii) {
    	  var _this = this;
    	  if (radii === void 0) {
    	    radii = 0;
    	  }
    	  if (typeof radii === "number") {
    	    // eslint-disable-next-line no-param-reassign
    	    radii = [radii];
    	  }
    	  // check for range error
    	  if (Array.isArray(radii)) {
    	    if (radii.length === 0 || radii.length > 4) {
    	      throw new RangeError("Failed to execute 'roundRect' on '".concat(this.constructor.name, "': ").concat(radii.length, " radii provided. Between one and four radii are necessary."));
    	    }
    	    radii.forEach(function (v) {
    	      if (v < 0) {
    	        throw new RangeError("Failed to execute 'roundRect' on '".concat(_this.constructor.name, "': Radius value ").concat(v, " is negative."));
    	      }
    	    });
    	  } else {
    	    return;
    	  }
    	  if (radii.length === 1 && radii[0] === 0) {
    	    return this.rect(x, y, width, height);
    	  }
    	  // set the corners
    	  // tl = top left radius
    	  // tr = top right radius
    	  // br = bottom right radius
    	  // bl = bottom left radius
    	  var minRadius = Math.min(width, height) / 2;
    	  var tr, br, bl;
    	  var tl = tr = br = bl = Math.min(minRadius, radii[0]);
    	  if (radii.length === 2) {
    	    tr = bl = Math.min(minRadius, radii[1]);
    	  }
    	  if (radii.length === 3) {
    	    tr = bl = Math.min(minRadius, radii[1]);
    	    br = Math.min(minRadius, radii[2]);
    	  }
    	  if (radii.length === 4) {
    	    tr = Math.min(minRadius, radii[1]);
    	    br = Math.min(minRadius, radii[2]);
    	    bl = Math.min(minRadius, radii[3]);
    	  }
    	  // begin with closing current path
    	  // this.closePath();
    	  // let's draw the rounded rectangle
    	  this.moveTo(x, y + height - bl);
    	  this.arcTo(x, y, x + tl, y, tl);
    	  this.arcTo(x + width, y, x + width, y + tr, tr);
    	  this.arcTo(x + width, y + height, x + width - br, y + height, br);
    	  this.arcTo(x, y + height, x, y + height - bl, bl);
    	  // and move to rects control point for further path drawing
    	  this.moveTo(x, y);
    	}
    	/**
    	 * Polyfills roundRect on CanvasRenderingContext2D and Path2D
    	 * @param {WindowLike} window - window like object containing both CanvasRenderingContext2D and Path2D constructor
    	 */
    	function polyfillRoundRect(window) {
    	  if (!window || !window.CanvasRenderingContext2D) return;
    	  var CanvasRenderingContext2D = window.CanvasRenderingContext2D,
    	    Path2D = window.Path2D;
    	  // polyfill unsupported roundRect for e.g. firefox https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect#browser_compatibility
    	  if (CanvasRenderingContext2D && !CanvasRenderingContext2D.prototype.roundRect) {
    	    CanvasRenderingContext2D.prototype.roundRect = roundRect;
    	  }
    	  if (Path2D && !Path2D.prototype.roundRect) {
    	    Path2D.prototype.roundRect = roundRect;
    	  }
    	}
    	polyfillPath2D(window);
    	polyfillRoundRect(window);
    	return path2dPolyfill_esm;
    }

    var ponyfillExports = {};
    var ponyfill = {
      get exports(){ return ponyfillExports; },
      set exports(v){ ponyfillExports = v; },
    };

    /**
     * web-streams-polyfill v3.2.1
     */

    var hasRequiredPonyfill;

    function requirePonyfill () {
    	if (hasRequiredPonyfill) return ponyfillExports;
    	hasRequiredPonyfill = 1;
    	(function (module, exports) {
    		(function (global, factory) {
    		  factory(exports) ;
    		})(commonjsGlobal, function (exports) {

    		  /// <reference lib="es2015.symbol" />
    		  var SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol : function (description) {
    		    return "Symbol(" + description + ")";
    		  };

    		  /// <reference lib="dom" />
    		  function noop() {
    		    return undefined;
    		  }
    		  function getGlobals() {
    		    if (typeof self !== 'undefined') {
    		      return self;
    		    } else if (typeof window !== 'undefined') {
    		      return window;
    		    } else if (typeof commonjsGlobal !== 'undefined') {
    		      return commonjsGlobal;
    		    }
    		    return undefined;
    		  }
    		  var globals = getGlobals();
    		  function typeIsObject(x) {
    		    return typeof x === 'object' && x !== null || typeof x === 'function';
    		  }
    		  var rethrowAssertionErrorRejection = noop;
    		  var originalPromise = Promise;
    		  var originalPromiseThen = Promise.prototype.then;
    		  var originalPromiseResolve = Promise.resolve.bind(originalPromise);
    		  var originalPromiseReject = Promise.reject.bind(originalPromise);
    		  function newPromise(executor) {
    		    return new originalPromise(executor);
    		  }
    		  function promiseResolvedWith(value) {
    		    return originalPromiseResolve(value);
    		  }
    		  function promiseRejectedWith(reason) {
    		    return originalPromiseReject(reason);
    		  }
    		  function PerformPromiseThen(promise, onFulfilled, onRejected) {
    		    // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
    		    // approximation.
    		    return originalPromiseThen.call(promise, onFulfilled, onRejected);
    		  }
    		  function uponPromise(promise, onFulfilled, onRejected) {
    		    PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
    		  }
    		  function uponFulfillment(promise, onFulfilled) {
    		    uponPromise(promise, onFulfilled);
    		  }
    		  function uponRejection(promise, onRejected) {
    		    uponPromise(promise, undefined, onRejected);
    		  }
    		  function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
    		    return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
    		  }
    		  function setPromiseIsHandledToTrue(promise) {
    		    PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
    		  }
    		  var queueMicrotask = function () {
    		    var globalQueueMicrotask = globals && globals.queueMicrotask;
    		    if (typeof globalQueueMicrotask === 'function') {
    		      return globalQueueMicrotask;
    		    }
    		    var resolvedPromise = promiseResolvedWith(undefined);
    		    return function (fn) {
    		      return PerformPromiseThen(resolvedPromise, fn);
    		    };
    		  }();
    		  function reflectCall(F, V, args) {
    		    if (typeof F !== 'function') {
    		      throw new TypeError('Argument is not a function');
    		    }
    		    return Function.prototype.apply.call(F, V, args);
    		  }
    		  function promiseCall(F, V, args) {
    		    try {
    		      return promiseResolvedWith(reflectCall(F, V, args));
    		    } catch (value) {
    		      return promiseRejectedWith(value);
    		    }
    		  }

    		  // Original from Chromium
    		  // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
    		  var QUEUE_MAX_ARRAY_SIZE = 16384;
    		  /**
    		   * Simple queue structure.
    		   *
    		   * Avoids scalability issues with using a packed array directly by using
    		   * multiple arrays in a linked list and keeping the array size bounded.
    		   */
    		  var SimpleQueue = /** @class */function () {
    		    function SimpleQueue() {
    		      this._cursor = 0;
    		      this._size = 0;
    		      // _front and _back are always defined.
    		      this._front = {
    		        _elements: [],
    		        _next: undefined
    		      };
    		      this._back = this._front;
    		      // The cursor is used to avoid calling Array.shift().
    		      // It contains the index of the front element of the array inside the
    		      // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
    		      this._cursor = 0;
    		      // When there is only one node, size === elements.length - cursor.
    		      this._size = 0;
    		    }
    		    Object.defineProperty(SimpleQueue.prototype, "length", {
    		      get: function () {
    		        return this._size;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    // For exception safety, this method is structured in order:
    		    // 1. Read state
    		    // 2. Calculate required state mutations
    		    // 3. Perform state mutations
    		    SimpleQueue.prototype.push = function (element) {
    		      var oldBack = this._back;
    		      var newBack = oldBack;
    		      if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
    		        newBack = {
    		          _elements: [],
    		          _next: undefined
    		        };
    		      }
    		      // push() is the mutation most likely to throw an exception, so it
    		      // goes first.
    		      oldBack._elements.push(element);
    		      if (newBack !== oldBack) {
    		        this._back = newBack;
    		        oldBack._next = newBack;
    		      }
    		      ++this._size;
    		    };
    		    // Like push(), shift() follows the read -> calculate -> mutate pattern for
    		    // exception safety.
    		    SimpleQueue.prototype.shift = function () {
    		      // must not be called on an empty queue
    		      var oldFront = this._front;
    		      var newFront = oldFront;
    		      var oldCursor = this._cursor;
    		      var newCursor = oldCursor + 1;
    		      var elements = oldFront._elements;
    		      var element = elements[oldCursor];
    		      if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
    		        newFront = oldFront._next;
    		        newCursor = 0;
    		      }
    		      // No mutations before this point.
    		      --this._size;
    		      this._cursor = newCursor;
    		      if (oldFront !== newFront) {
    		        this._front = newFront;
    		      }
    		      // Permit shifted element to be garbage collected.
    		      elements[oldCursor] = undefined;
    		      return element;
    		    };
    		    // The tricky thing about forEach() is that it can be called
    		    // re-entrantly. The queue may be mutated inside the callback. It is easy to
    		    // see that push() within the callback has no negative effects since the end
    		    // of the queue is checked for on every iteration. If shift() is called
    		    // repeatedly within the callback then the next iteration may return an
    		    // element that has been removed. In this case the callback will be called
    		    // with undefined values until we either "catch up" with elements that still
    		    // exist or reach the back of the queue.
    		    SimpleQueue.prototype.forEach = function (callback) {
    		      var i = this._cursor;
    		      var node = this._front;
    		      var elements = node._elements;
    		      while (i !== elements.length || node._next !== undefined) {
    		        if (i === elements.length) {
    		          node = node._next;
    		          elements = node._elements;
    		          i = 0;
    		          if (elements.length === 0) {
    		            break;
    		          }
    		        }
    		        callback(elements[i]);
    		        ++i;
    		      }
    		    };
    		    // Return the element that would be returned if shift() was called now,
    		    // without modifying the queue.
    		    SimpleQueue.prototype.peek = function () {
    		      // must not be called on an empty queue
    		      var front = this._front;
    		      var cursor = this._cursor;
    		      return front._elements[cursor];
    		    };
    		    return SimpleQueue;
    		  }();
    		  function ReadableStreamReaderGenericInitialize(reader, stream) {
    		    reader._ownerReadableStream = stream;
    		    stream._reader = reader;
    		    if (stream._state === 'readable') {
    		      defaultReaderClosedPromiseInitialize(reader);
    		    } else if (stream._state === 'closed') {
    		      defaultReaderClosedPromiseInitializeAsResolved(reader);
    		    } else {
    		      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    		    }
    		  }
    		  // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
    		  // check.
    		  function ReadableStreamReaderGenericCancel(reader, reason) {
    		    var stream = reader._ownerReadableStream;
    		    return ReadableStreamCancel(stream, reason);
    		  }
    		  function ReadableStreamReaderGenericRelease(reader) {
    		    if (reader._ownerReadableStream._state === 'readable') {
    		      defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
    		    } else {
    		      defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
    		    }
    		    reader._ownerReadableStream._reader = undefined;
    		    reader._ownerReadableStream = undefined;
    		  }
    		  // Helper functions for the readers.
    		  function readerLockException(name) {
    		    return new TypeError('Cannot ' + name + ' a stream using a released reader');
    		  }
    		  // Helper functions for the ReadableStreamDefaultReader.
    		  function defaultReaderClosedPromiseInitialize(reader) {
    		    reader._closedPromise = newPromise(function (resolve, reject) {
    		      reader._closedPromise_resolve = resolve;
    		      reader._closedPromise_reject = reject;
    		    });
    		  }
    		  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    		    defaultReaderClosedPromiseInitialize(reader);
    		    defaultReaderClosedPromiseReject(reader, reason);
    		  }
    		  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    		    defaultReaderClosedPromiseInitialize(reader);
    		    defaultReaderClosedPromiseResolve(reader);
    		  }
    		  function defaultReaderClosedPromiseReject(reader, reason) {
    		    if (reader._closedPromise_reject === undefined) {
    		      return;
    		    }
    		    setPromiseIsHandledToTrue(reader._closedPromise);
    		    reader._closedPromise_reject(reason);
    		    reader._closedPromise_resolve = undefined;
    		    reader._closedPromise_reject = undefined;
    		  }
    		  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    		    defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
    		  }
    		  function defaultReaderClosedPromiseResolve(reader) {
    		    if (reader._closedPromise_resolve === undefined) {
    		      return;
    		    }
    		    reader._closedPromise_resolve(undefined);
    		    reader._closedPromise_resolve = undefined;
    		    reader._closedPromise_reject = undefined;
    		  }
    		  var AbortSteps = SymbolPolyfill('[[AbortSteps]]');
    		  var ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
    		  var CancelSteps = SymbolPolyfill('[[CancelSteps]]');
    		  var PullSteps = SymbolPolyfill('[[PullSteps]]');

    		  /// <reference lib="es2015.core" />
    		  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
    		  var NumberIsFinite = Number.isFinite || function (x) {
    		    return typeof x === 'number' && isFinite(x);
    		  };

    		  /// <reference lib="es2015.core" />
    		  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
    		  var MathTrunc = Math.trunc || function (v) {
    		    return v < 0 ? Math.ceil(v) : Math.floor(v);
    		  };

    		  // https://heycam.github.io/webidl/#idl-dictionaries
    		  function isDictionary(x) {
    		    return typeof x === 'object' || typeof x === 'function';
    		  }
    		  function assertDictionary(obj, context) {
    		    if (obj !== undefined && !isDictionary(obj)) {
    		      throw new TypeError(context + " is not an object.");
    		    }
    		  }
    		  // https://heycam.github.io/webidl/#idl-callback-functions
    		  function assertFunction(x, context) {
    		    if (typeof x !== 'function') {
    		      throw new TypeError(context + " is not a function.");
    		    }
    		  }
    		  // https://heycam.github.io/webidl/#idl-object
    		  function isObject(x) {
    		    return typeof x === 'object' && x !== null || typeof x === 'function';
    		  }
    		  function assertObject(x, context) {
    		    if (!isObject(x)) {
    		      throw new TypeError(context + " is not an object.");
    		    }
    		  }
    		  function assertRequiredArgument(x, position, context) {
    		    if (x === undefined) {
    		      throw new TypeError("Parameter " + position + " is required in '" + context + "'.");
    		    }
    		  }
    		  function assertRequiredField(x, field, context) {
    		    if (x === undefined) {
    		      throw new TypeError(field + " is required in '" + context + "'.");
    		    }
    		  }
    		  // https://heycam.github.io/webidl/#idl-unrestricted-double
    		  function convertUnrestrictedDouble(value) {
    		    return Number(value);
    		  }
    		  function censorNegativeZero(x) {
    		    return x === 0 ? 0 : x;
    		  }
    		  function integerPart(x) {
    		    return censorNegativeZero(MathTrunc(x));
    		  }
    		  // https://heycam.github.io/webidl/#idl-unsigned-long-long
    		  function convertUnsignedLongLongWithEnforceRange(value, context) {
    		    var lowerBound = 0;
    		    var upperBound = Number.MAX_SAFE_INTEGER;
    		    var x = Number(value);
    		    x = censorNegativeZero(x);
    		    if (!NumberIsFinite(x)) {
    		      throw new TypeError(context + " is not a finite number");
    		    }
    		    x = integerPart(x);
    		    if (x < lowerBound || x > upperBound) {
    		      throw new TypeError(context + " is outside the accepted range of " + lowerBound + " to " + upperBound + ", inclusive");
    		    }
    		    if (!NumberIsFinite(x) || x === 0) {
    		      return 0;
    		    }
    		    // TODO Use BigInt if supported?
    		    // let xBigInt = BigInt(integerPart(x));
    		    // xBigInt = BigInt.asUintN(64, xBigInt);
    		    // return Number(xBigInt);
    		    return x;
    		  }
    		  function assertReadableStream(x, context) {
    		    if (!IsReadableStream(x)) {
    		      throw new TypeError(context + " is not a ReadableStream.");
    		    }
    		  }

    		  // Abstract operations for the ReadableStream.
    		  function AcquireReadableStreamDefaultReader(stream) {
    		    return new ReadableStreamDefaultReader(stream);
    		  }
    		  // ReadableStream API exposed for controllers.
    		  function ReadableStreamAddReadRequest(stream, readRequest) {
    		    stream._reader._readRequests.push(readRequest);
    		  }
    		  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    		    var reader = stream._reader;
    		    var readRequest = reader._readRequests.shift();
    		    if (done) {
    		      readRequest._closeSteps();
    		    } else {
    		      readRequest._chunkSteps(chunk);
    		    }
    		  }
    		  function ReadableStreamGetNumReadRequests(stream) {
    		    return stream._reader._readRequests.length;
    		  }
    		  function ReadableStreamHasDefaultReader(stream) {
    		    var reader = stream._reader;
    		    if (reader === undefined) {
    		      return false;
    		    }
    		    if (!IsReadableStreamDefaultReader(reader)) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  /**
    		   * A default reader vended by a {@link ReadableStream}.
    		   *
    		   * @public
    		   */
    		  var ReadableStreamDefaultReader = /** @class */function () {
    		    function ReadableStreamDefaultReader(stream) {
    		      assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
    		      assertReadableStream(stream, 'First parameter');
    		      if (IsReadableStreamLocked(stream)) {
    		        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
    		      }
    		      ReadableStreamReaderGenericInitialize(this, stream);
    		      this._readRequests = new SimpleQueue();
    		    }
    		    Object.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
    		      /**
    		       * Returns a promise that will be fulfilled when the stream becomes closed,
    		       * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
    		       */
    		      get: function () {
    		        if (!IsReadableStreamDefaultReader(this)) {
    		          return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
    		        }
    		        return this._closedPromise;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
    		     */
    		    ReadableStreamDefaultReader.prototype.cancel = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsReadableStreamDefaultReader(this)) {
    		        return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
    		      }
    		      if (this._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('cancel'));
    		      }
    		      return ReadableStreamReaderGenericCancel(this, reason);
    		    };
    		    /**
    		     * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
    		     *
    		     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
    		     */
    		    ReadableStreamDefaultReader.prototype.read = function () {
    		      if (!IsReadableStreamDefaultReader(this)) {
    		        return promiseRejectedWith(defaultReaderBrandCheckException('read'));
    		      }
    		      if (this._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('read from'));
    		      }
    		      var resolvePromise;
    		      var rejectPromise;
    		      var promise = newPromise(function (resolve, reject) {
    		        resolvePromise = resolve;
    		        rejectPromise = reject;
    		      });
    		      var readRequest = {
    		        _chunkSteps: function (chunk) {
    		          return resolvePromise({
    		            value: chunk,
    		            done: false
    		          });
    		        },
    		        _closeSteps: function () {
    		          return resolvePromise({
    		            value: undefined,
    		            done: true
    		          });
    		        },
    		        _errorSteps: function (e) {
    		          return rejectPromise(e);
    		        }
    		      };
    		      ReadableStreamDefaultReaderRead(this, readRequest);
    		      return promise;
    		    };
    		    /**
    		     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
    		     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
    		     * from now on; otherwise, the reader will appear closed.
    		     *
    		     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
    		     * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
    		     * do so will throw a `TypeError` and leave the reader locked to the stream.
    		     */
    		    ReadableStreamDefaultReader.prototype.releaseLock = function () {
    		      if (!IsReadableStreamDefaultReader(this)) {
    		        throw defaultReaderBrandCheckException('releaseLock');
    		      }
    		      if (this._ownerReadableStream === undefined) {
    		        return;
    		      }
    		      if (this._readRequests.length > 0) {
    		        throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
    		      }
    		      ReadableStreamReaderGenericRelease(this);
    		    };
    		    return ReadableStreamDefaultReader;
    		  }();
    		  Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    		    cancel: {
    		      enumerable: true
    		    },
    		    read: {
    		      enumerable: true
    		    },
    		    releaseLock: {
    		      enumerable: true
    		    },
    		    closed: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableStreamDefaultReader',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the readers.
    		  function IsReadableStreamDefaultReader(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
    		      return false;
    		    }
    		    return x instanceof ReadableStreamDefaultReader;
    		  }
    		  function ReadableStreamDefaultReaderRead(reader, readRequest) {
    		    var stream = reader._ownerReadableStream;
    		    stream._disturbed = true;
    		    if (stream._state === 'closed') {
    		      readRequest._closeSteps();
    		    } else if (stream._state === 'errored') {
    		      readRequest._errorSteps(stream._storedError);
    		    } else {
    		      stream._readableStreamController[PullSteps](readRequest);
    		    }
    		  }
    		  // Helper functions for the ReadableStreamDefaultReader.
    		  function defaultReaderBrandCheckException(name) {
    		    return new TypeError("ReadableStreamDefaultReader.prototype." + name + " can only be used on a ReadableStreamDefaultReader");
    		  }

    		  /// <reference lib="es2018.asynciterable" />
    		  var _a;
    		  var AsyncIteratorPrototype;
    		  if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
    		    // We're running inside a ES2018+ environment, but we're compiling to an older syntax.
    		    // We cannot access %AsyncIteratorPrototype% without non-ES2018 syntax, but we can re-create it.
    		    AsyncIteratorPrototype = (_a = {},
    		    // 25.1.3.1 %AsyncIteratorPrototype% [ @@asyncIterator ] ( )
    		    // https://tc39.github.io/ecma262/#sec-asynciteratorprototype-asynciterator
    		    _a[SymbolPolyfill.asyncIterator] = function () {
    		      return this;
    		    }, _a);
    		    Object.defineProperty(AsyncIteratorPrototype, SymbolPolyfill.asyncIterator, {
    		      enumerable: false
    		    });
    		  }

    		  /// <reference lib="es2018.asynciterable" />
    		  var ReadableStreamAsyncIteratorImpl = /** @class */function () {
    		    function ReadableStreamAsyncIteratorImpl(reader, preventCancel) {
    		      this._ongoingPromise = undefined;
    		      this._isFinished = false;
    		      this._reader = reader;
    		      this._preventCancel = preventCancel;
    		    }
    		    ReadableStreamAsyncIteratorImpl.prototype.next = function () {
    		      var _this = this;
    		      var nextSteps = function () {
    		        return _this._nextSteps();
    		      };
    		      this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
    		      return this._ongoingPromise;
    		    };
    		    ReadableStreamAsyncIteratorImpl.prototype.return = function (value) {
    		      var _this = this;
    		      var returnSteps = function () {
    		        return _this._returnSteps(value);
    		      };
    		      return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
    		    };
    		    ReadableStreamAsyncIteratorImpl.prototype._nextSteps = function () {
    		      var _this = this;
    		      if (this._isFinished) {
    		        return Promise.resolve({
    		          value: undefined,
    		          done: true
    		        });
    		      }
    		      var reader = this._reader;
    		      if (reader._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('iterate'));
    		      }
    		      var resolvePromise;
    		      var rejectPromise;
    		      var promise = newPromise(function (resolve, reject) {
    		        resolvePromise = resolve;
    		        rejectPromise = reject;
    		      });
    		      var readRequest = {
    		        _chunkSteps: function (chunk) {
    		          _this._ongoingPromise = undefined;
    		          // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
    		          // FIXME Is this a bug in the specification, or in the test?
    		          queueMicrotask(function () {
    		            return resolvePromise({
    		              value: chunk,
    		              done: false
    		            });
    		          });
    		        },
    		        _closeSteps: function () {
    		          _this._ongoingPromise = undefined;
    		          _this._isFinished = true;
    		          ReadableStreamReaderGenericRelease(reader);
    		          resolvePromise({
    		            value: undefined,
    		            done: true
    		          });
    		        },
    		        _errorSteps: function (reason) {
    		          _this._ongoingPromise = undefined;
    		          _this._isFinished = true;
    		          ReadableStreamReaderGenericRelease(reader);
    		          rejectPromise(reason);
    		        }
    		      };
    		      ReadableStreamDefaultReaderRead(reader, readRequest);
    		      return promise;
    		    };
    		    ReadableStreamAsyncIteratorImpl.prototype._returnSteps = function (value) {
    		      if (this._isFinished) {
    		        return Promise.resolve({
    		          value: value,
    		          done: true
    		        });
    		      }
    		      this._isFinished = true;
    		      var reader = this._reader;
    		      if (reader._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('finish iterating'));
    		      }
    		      if (!this._preventCancel) {
    		        var result = ReadableStreamReaderGenericCancel(reader, value);
    		        ReadableStreamReaderGenericRelease(reader);
    		        return transformPromiseWith(result, function () {
    		          return {
    		            value: value,
    		            done: true
    		          };
    		        });
    		      }
    		      ReadableStreamReaderGenericRelease(reader);
    		      return promiseResolvedWith({
    		        value: value,
    		        done: true
    		      });
    		    };
    		    return ReadableStreamAsyncIteratorImpl;
    		  }();
    		  var ReadableStreamAsyncIteratorPrototype = {
    		    next: function () {
    		      if (!IsReadableStreamAsyncIterator(this)) {
    		        return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
    		      }
    		      return this._asyncIteratorImpl.next();
    		    },
    		    return: function (value) {
    		      if (!IsReadableStreamAsyncIterator(this)) {
    		        return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
    		      }
    		      return this._asyncIteratorImpl.return(value);
    		    }
    		  };
    		  if (AsyncIteratorPrototype !== undefined) {
    		    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    		  }
    		  // Abstract operations for the ReadableStream.
    		  function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
    		    var reader = AcquireReadableStreamDefaultReader(stream);
    		    var impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
    		    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
    		    iterator._asyncIteratorImpl = impl;
    		    return iterator;
    		  }
    		  function IsReadableStreamAsyncIterator(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
    		      return false;
    		    }
    		    try {
    		      // noinspection SuspiciousTypeOfGuard
    		      return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
    		    } catch (_a) {
    		      return false;
    		    }
    		  }
    		  // Helper functions for the ReadableStream.
    		  function streamAsyncIteratorBrandCheckException(name) {
    		    return new TypeError("ReadableStreamAsyncIterator." + name + " can only be used on a ReadableSteamAsyncIterator");
    		  }

    		  /// <reference lib="es2015.core" />
    		  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
    		  var NumberIsNaN = Number.isNaN || function (x) {
    		    // eslint-disable-next-line no-self-compare
    		    return x !== x;
    		  };
    		  function CreateArrayFromList(elements) {
    		    // We use arrays to represent lists, so this is basically a no-op.
    		    // Do a slice though just in case we happen to depend on the unique-ness.
    		    return elements.slice();
    		  }
    		  function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
    		    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
    		  }
    		  // Not implemented correctly
    		  function TransferArrayBuffer(O) {
    		    return O;
    		  }
    		  // Not implemented correctly
    		  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    		  function IsDetachedBuffer(O) {
    		    return false;
    		  }
    		  function ArrayBufferSlice(buffer, begin, end) {
    		    // ArrayBuffer.prototype.slice is not available on IE10
    		    // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
    		    if (buffer.slice) {
    		      return buffer.slice(begin, end);
    		    }
    		    var length = end - begin;
    		    var slice = new ArrayBuffer(length);
    		    CopyDataBlockBytes(slice, 0, buffer, begin, length);
    		    return slice;
    		  }
    		  function IsNonNegativeNumber(v) {
    		    if (typeof v !== 'number') {
    		      return false;
    		    }
    		    if (NumberIsNaN(v)) {
    		      return false;
    		    }
    		    if (v < 0) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  function CloneAsUint8Array(O) {
    		    var buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
    		    return new Uint8Array(buffer);
    		  }
    		  function DequeueValue(container) {
    		    var pair = container._queue.shift();
    		    container._queueTotalSize -= pair.size;
    		    if (container._queueTotalSize < 0) {
    		      container._queueTotalSize = 0;
    		    }
    		    return pair.value;
    		  }
    		  function EnqueueValueWithSize(container, value, size) {
    		    if (!IsNonNegativeNumber(size) || size === Infinity) {
    		      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    		    }
    		    container._queue.push({
    		      value: value,
    		      size: size
    		    });
    		    container._queueTotalSize += size;
    		  }
    		  function PeekQueueValue(container) {
    		    var pair = container._queue.peek();
    		    return pair.value;
    		  }
    		  function ResetQueue(container) {
    		    container._queue = new SimpleQueue();
    		    container._queueTotalSize = 0;
    		  }

    		  /**
    		   * A pull-into request in a {@link ReadableByteStreamController}.
    		   *
    		   * @public
    		   */
    		  var ReadableStreamBYOBRequest = /** @class */function () {
    		    function ReadableStreamBYOBRequest() {
    		      throw new TypeError('Illegal constructor');
    		    }
    		    Object.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
    		      /**
    		       * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
    		       */
    		      get: function () {
    		        if (!IsReadableStreamBYOBRequest(this)) {
    		          throw byobRequestBrandCheckException('view');
    		        }
    		        return this._view;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    ReadableStreamBYOBRequest.prototype.respond = function (bytesWritten) {
    		      if (!IsReadableStreamBYOBRequest(this)) {
    		        throw byobRequestBrandCheckException('respond');
    		      }
    		      assertRequiredArgument(bytesWritten, 1, 'respond');
    		      bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
    		      if (this._associatedReadableByteStreamController === undefined) {
    		        throw new TypeError('This BYOB request has been invalidated');
    		      }
    		      if (IsDetachedBuffer(this._view.buffer)) ;
    		      ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
    		    };
    		    ReadableStreamBYOBRequest.prototype.respondWithNewView = function (view) {
    		      if (!IsReadableStreamBYOBRequest(this)) {
    		        throw byobRequestBrandCheckException('respondWithNewView');
    		      }
    		      assertRequiredArgument(view, 1, 'respondWithNewView');
    		      if (!ArrayBuffer.isView(view)) {
    		        throw new TypeError('You can only respond with array buffer views');
    		      }
    		      if (this._associatedReadableByteStreamController === undefined) {
    		        throw new TypeError('This BYOB request has been invalidated');
    		      }
    		      if (IsDetachedBuffer(view.buffer)) ;
    		      ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
    		    };
    		    return ReadableStreamBYOBRequest;
    		  }();
    		  Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    		    respond: {
    		      enumerable: true
    		    },
    		    respondWithNewView: {
    		      enumerable: true
    		    },
    		    view: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableStreamBYOBRequest',
    		      configurable: true
    		    });
    		  }
    		  /**
    		   * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
    		   *
    		   * @public
    		   */
    		  var ReadableByteStreamController = /** @class */function () {
    		    function ReadableByteStreamController() {
    		      throw new TypeError('Illegal constructor');
    		    }
    		    Object.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
    		      /**
    		       * Returns the current BYOB pull request, or `null` if there isn't one.
    		       */
    		      get: function () {
    		        if (!IsReadableByteStreamController(this)) {
    		          throw byteStreamControllerBrandCheckException('byobRequest');
    		        }
    		        return ReadableByteStreamControllerGetBYOBRequest(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
    		      /**
    		       * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
    		       * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
    		       */
    		      get: function () {
    		        if (!IsReadableByteStreamController(this)) {
    		          throw byteStreamControllerBrandCheckException('desiredSize');
    		        }
    		        return ReadableByteStreamControllerGetDesiredSize(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
    		     * the stream, but once those are read, the stream will become closed.
    		     */
    		    ReadableByteStreamController.prototype.close = function () {
    		      if (!IsReadableByteStreamController(this)) {
    		        throw byteStreamControllerBrandCheckException('close');
    		      }
    		      if (this._closeRequested) {
    		        throw new TypeError('The stream has already been closed; do not close it again!');
    		      }
    		      var state = this._controlledReadableByteStream._state;
    		      if (state !== 'readable') {
    		        throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be closed");
    		      }
    		      ReadableByteStreamControllerClose(this);
    		    };
    		    ReadableByteStreamController.prototype.enqueue = function (chunk) {
    		      if (!IsReadableByteStreamController(this)) {
    		        throw byteStreamControllerBrandCheckException('enqueue');
    		      }
    		      assertRequiredArgument(chunk, 1, 'enqueue');
    		      if (!ArrayBuffer.isView(chunk)) {
    		        throw new TypeError('chunk must be an array buffer view');
    		      }
    		      if (chunk.byteLength === 0) {
    		        throw new TypeError('chunk must have non-zero byteLength');
    		      }
    		      if (chunk.buffer.byteLength === 0) {
    		        throw new TypeError("chunk's buffer must have non-zero byteLength");
    		      }
    		      if (this._closeRequested) {
    		        throw new TypeError('stream is closed or draining');
    		      }
    		      var state = this._controlledReadableByteStream._state;
    		      if (state !== 'readable') {
    		        throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be enqueued to");
    		      }
    		      ReadableByteStreamControllerEnqueue(this, chunk);
    		    };
    		    /**
    		     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
    		     */
    		    ReadableByteStreamController.prototype.error = function (e) {
    		      if (e === void 0) {
    		        e = undefined;
    		      }
    		      if (!IsReadableByteStreamController(this)) {
    		        throw byteStreamControllerBrandCheckException('error');
    		      }
    		      ReadableByteStreamControllerError(this, e);
    		    };
    		    /** @internal */
    		    ReadableByteStreamController.prototype[CancelSteps] = function (reason) {
    		      ReadableByteStreamControllerClearPendingPullIntos(this);
    		      ResetQueue(this);
    		      var result = this._cancelAlgorithm(reason);
    		      ReadableByteStreamControllerClearAlgorithms(this);
    		      return result;
    		    };
    		    /** @internal */
    		    ReadableByteStreamController.prototype[PullSteps] = function (readRequest) {
    		      var stream = this._controlledReadableByteStream;
    		      if (this._queueTotalSize > 0) {
    		        var entry = this._queue.shift();
    		        this._queueTotalSize -= entry.byteLength;
    		        ReadableByteStreamControllerHandleQueueDrain(this);
    		        var view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
    		        readRequest._chunkSteps(view);
    		        return;
    		      }
    		      var autoAllocateChunkSize = this._autoAllocateChunkSize;
    		      if (autoAllocateChunkSize !== undefined) {
    		        var buffer = void 0;
    		        try {
    		          buffer = new ArrayBuffer(autoAllocateChunkSize);
    		        } catch (bufferE) {
    		          readRequest._errorSteps(bufferE);
    		          return;
    		        }
    		        var pullIntoDescriptor = {
    		          buffer: buffer,
    		          bufferByteLength: autoAllocateChunkSize,
    		          byteOffset: 0,
    		          byteLength: autoAllocateChunkSize,
    		          bytesFilled: 0,
    		          elementSize: 1,
    		          viewConstructor: Uint8Array,
    		          readerType: 'default'
    		        };
    		        this._pendingPullIntos.push(pullIntoDescriptor);
    		      }
    		      ReadableStreamAddReadRequest(stream, readRequest);
    		      ReadableByteStreamControllerCallPullIfNeeded(this);
    		    };
    		    return ReadableByteStreamController;
    		  }();
    		  Object.defineProperties(ReadableByteStreamController.prototype, {
    		    close: {
    		      enumerable: true
    		    },
    		    enqueue: {
    		      enumerable: true
    		    },
    		    error: {
    		      enumerable: true
    		    },
    		    byobRequest: {
    		      enumerable: true
    		    },
    		    desiredSize: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableByteStreamController',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the ReadableByteStreamController.
    		  function IsReadableByteStreamController(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
    		      return false;
    		    }
    		    return x instanceof ReadableByteStreamController;
    		  }
    		  function IsReadableStreamBYOBRequest(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
    		      return false;
    		    }
    		    return x instanceof ReadableStreamBYOBRequest;
    		  }
    		  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    		    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    		    if (!shouldPull) {
    		      return;
    		    }
    		    if (controller._pulling) {
    		      controller._pullAgain = true;
    		      return;
    		    }
    		    controller._pulling = true;
    		    // TODO: Test controller argument
    		    var pullPromise = controller._pullAlgorithm();
    		    uponPromise(pullPromise, function () {
    		      controller._pulling = false;
    		      if (controller._pullAgain) {
    		        controller._pullAgain = false;
    		        ReadableByteStreamControllerCallPullIfNeeded(controller);
    		      }
    		    }, function (e) {
    		      ReadableByteStreamControllerError(controller, e);
    		    });
    		  }
    		  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    		    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    		    controller._pendingPullIntos = new SimpleQueue();
    		  }
    		  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    		    var done = false;
    		    if (stream._state === 'closed') {
    		      done = true;
    		    }
    		    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    		    if (pullIntoDescriptor.readerType === 'default') {
    		      ReadableStreamFulfillReadRequest(stream, filledView, done);
    		    } else {
    		      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    		    }
    		  }
    		  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    		    var bytesFilled = pullIntoDescriptor.bytesFilled;
    		    var elementSize = pullIntoDescriptor.elementSize;
    		    return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
    		  }
    		  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    		    controller._queue.push({
    		      buffer: buffer,
    		      byteOffset: byteOffset,
    		      byteLength: byteLength
    		    });
    		    controller._queueTotalSize += byteLength;
    		  }
    		  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    		    var elementSize = pullIntoDescriptor.elementSize;
    		    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    		    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    		    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    		    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    		    var totalBytesToCopyRemaining = maxBytesToCopy;
    		    var ready = false;
    		    if (maxAlignedBytes > currentAlignedBytes) {
    		      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
    		      ready = true;
    		    }
    		    var queue = controller._queue;
    		    while (totalBytesToCopyRemaining > 0) {
    		      var headOfQueue = queue.peek();
    		      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
    		      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    		      CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
    		      if (headOfQueue.byteLength === bytesToCopy) {
    		        queue.shift();
    		      } else {
    		        headOfQueue.byteOffset += bytesToCopy;
    		        headOfQueue.byteLength -= bytesToCopy;
    		      }
    		      controller._queueTotalSize -= bytesToCopy;
    		      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
    		      totalBytesToCopyRemaining -= bytesToCopy;
    		    }
    		    return ready;
    		  }
    		  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    		    pullIntoDescriptor.bytesFilled += size;
    		  }
    		  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    		    if (controller._queueTotalSize === 0 && controller._closeRequested) {
    		      ReadableByteStreamControllerClearAlgorithms(controller);
    		      ReadableStreamClose(controller._controlledReadableByteStream);
    		    } else {
    		      ReadableByteStreamControllerCallPullIfNeeded(controller);
    		    }
    		  }
    		  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    		    if (controller._byobRequest === null) {
    		      return;
    		    }
    		    controller._byobRequest._associatedReadableByteStreamController = undefined;
    		    controller._byobRequest._view = null;
    		    controller._byobRequest = null;
    		  }
    		  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    		    while (controller._pendingPullIntos.length > 0) {
    		      if (controller._queueTotalSize === 0) {
    		        return;
    		      }
    		      var pullIntoDescriptor = controller._pendingPullIntos.peek();
    		      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
    		        ReadableByteStreamControllerShiftPendingPullInto(controller);
    		        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    		      }
    		    }
    		  }
    		  function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
    		    var stream = controller._controlledReadableByteStream;
    		    var elementSize = 1;
    		    if (view.constructor !== DataView) {
    		      elementSize = view.constructor.BYTES_PER_ELEMENT;
    		    }
    		    var ctor = view.constructor;
    		    // try {
    		    var buffer = TransferArrayBuffer(view.buffer);
    		    // } catch (e) {
    		    //   readIntoRequest._errorSteps(e);
    		    //   return;
    		    // }
    		    var pullIntoDescriptor = {
    		      buffer: buffer,
    		      bufferByteLength: buffer.byteLength,
    		      byteOffset: view.byteOffset,
    		      byteLength: view.byteLength,
    		      bytesFilled: 0,
    		      elementSize: elementSize,
    		      viewConstructor: ctor,
    		      readerType: 'byob'
    		    };
    		    if (controller._pendingPullIntos.length > 0) {
    		      controller._pendingPullIntos.push(pullIntoDescriptor);
    		      // No ReadableByteStreamControllerCallPullIfNeeded() call since:
    		      // - No change happens on desiredSize
    		      // - The source has already been notified of that there's at least 1 pending read(view)
    		      ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    		      return;
    		    }
    		    if (stream._state === 'closed') {
    		      var emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
    		      readIntoRequest._closeSteps(emptyView);
    		      return;
    		    }
    		    if (controller._queueTotalSize > 0) {
    		      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
    		        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    		        ReadableByteStreamControllerHandleQueueDrain(controller);
    		        readIntoRequest._chunkSteps(filledView);
    		        return;
    		      }
    		      if (controller._closeRequested) {
    		        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
    		        ReadableByteStreamControllerError(controller, e);
    		        readIntoRequest._errorSteps(e);
    		        return;
    		      }
    		    }
    		    controller._pendingPullIntos.push(pullIntoDescriptor);
    		    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    		    ReadableByteStreamControllerCallPullIfNeeded(controller);
    		  }
    		  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    		    var stream = controller._controlledReadableByteStream;
    		    if (ReadableStreamHasBYOBReader(stream)) {
    		      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
    		        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
    		        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
    		      }
    		    }
    		  }
    		  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    		    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    		    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
    		      return;
    		    }
    		    ReadableByteStreamControllerShiftPendingPullInto(controller);
    		    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    		    if (remainderSize > 0) {
    		      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    		      var remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
    		      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    		    }
    		    pullIntoDescriptor.bytesFilled -= remainderSize;
    		    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    		    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    		  }
    		  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    		    var firstDescriptor = controller._pendingPullIntos.peek();
    		    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    		    var state = controller._controlledReadableByteStream._state;
    		    if (state === 'closed') {
    		      ReadableByteStreamControllerRespondInClosedState(controller);
    		    } else {
    		      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    		    }
    		    ReadableByteStreamControllerCallPullIfNeeded(controller);
    		  }
    		  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    		    var descriptor = controller._pendingPullIntos.shift();
    		    return descriptor;
    		  }
    		  function ReadableByteStreamControllerShouldCallPull(controller) {
    		    var stream = controller._controlledReadableByteStream;
    		    if (stream._state !== 'readable') {
    		      return false;
    		    }
    		    if (controller._closeRequested) {
    		      return false;
    		    }
    		    if (!controller._started) {
    		      return false;
    		    }
    		    if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    		      return true;
    		    }
    		    if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
    		      return true;
    		    }
    		    var desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
    		    if (desiredSize > 0) {
    		      return true;
    		    }
    		    return false;
    		  }
    		  function ReadableByteStreamControllerClearAlgorithms(controller) {
    		    controller._pullAlgorithm = undefined;
    		    controller._cancelAlgorithm = undefined;
    		  }
    		  // A client of ReadableByteStreamController may use these functions directly to bypass state check.
    		  function ReadableByteStreamControllerClose(controller) {
    		    var stream = controller._controlledReadableByteStream;
    		    if (controller._closeRequested || stream._state !== 'readable') {
    		      return;
    		    }
    		    if (controller._queueTotalSize > 0) {
    		      controller._closeRequested = true;
    		      return;
    		    }
    		    if (controller._pendingPullIntos.length > 0) {
    		      var firstPendingPullInto = controller._pendingPullIntos.peek();
    		      if (firstPendingPullInto.bytesFilled > 0) {
    		        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
    		        ReadableByteStreamControllerError(controller, e);
    		        throw e;
    		      }
    		    }
    		    ReadableByteStreamControllerClearAlgorithms(controller);
    		    ReadableStreamClose(stream);
    		  }
    		  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    		    var stream = controller._controlledReadableByteStream;
    		    if (controller._closeRequested || stream._state !== 'readable') {
    		      return;
    		    }
    		    var buffer = chunk.buffer;
    		    var byteOffset = chunk.byteOffset;
    		    var byteLength = chunk.byteLength;
    		    var transferredBuffer = TransferArrayBuffer(buffer);
    		    if (controller._pendingPullIntos.length > 0) {
    		      var firstPendingPullInto = controller._pendingPullIntos.peek();
    		      if (IsDetachedBuffer(firstPendingPullInto.buffer)) ;
    		      firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
    		    }
    		    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    		    if (ReadableStreamHasDefaultReader(stream)) {
    		      if (ReadableStreamGetNumReadRequests(stream) === 0) {
    		        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    		      } else {
    		        if (controller._pendingPullIntos.length > 0) {
    		          ReadableByteStreamControllerShiftPendingPullInto(controller);
    		        }
    		        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
    		        ReadableStreamFulfillReadRequest(stream, transferredView, false);
    		      }
    		    } else if (ReadableStreamHasBYOBReader(stream)) {
    		      // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
    		      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    		      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    		    } else {
    		      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    		    }
    		    ReadableByteStreamControllerCallPullIfNeeded(controller);
    		  }
    		  function ReadableByteStreamControllerError(controller, e) {
    		    var stream = controller._controlledReadableByteStream;
    		    if (stream._state !== 'readable') {
    		      return;
    		    }
    		    ReadableByteStreamControllerClearPendingPullIntos(controller);
    		    ResetQueue(controller);
    		    ReadableByteStreamControllerClearAlgorithms(controller);
    		    ReadableStreamError(stream, e);
    		  }
    		  function ReadableByteStreamControllerGetBYOBRequest(controller) {
    		    if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
    		      var firstDescriptor = controller._pendingPullIntos.peek();
    		      var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
    		      var byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
    		      SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
    		      controller._byobRequest = byobRequest;
    		    }
    		    return controller._byobRequest;
    		  }
    		  function ReadableByteStreamControllerGetDesiredSize(controller) {
    		    var state = controller._controlledReadableByteStream._state;
    		    if (state === 'errored') {
    		      return null;
    		    }
    		    if (state === 'closed') {
    		      return 0;
    		    }
    		    return controller._strategyHWM - controller._queueTotalSize;
    		  }
    		  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    		    var firstDescriptor = controller._pendingPullIntos.peek();
    		    var state = controller._controlledReadableByteStream._state;
    		    if (state === 'closed') {
    		      if (bytesWritten !== 0) {
    		        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
    		      }
    		    } else {
    		      if (bytesWritten === 0) {
    		        throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
    		      }
    		      if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
    		        throw new RangeError('bytesWritten out of range');
    		      }
    		    }
    		    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    		    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
    		  }
    		  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    		    var firstDescriptor = controller._pendingPullIntos.peek();
    		    var state = controller._controlledReadableByteStream._state;
    		    if (state === 'closed') {
    		      if (view.byteLength !== 0) {
    		        throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
    		      }
    		    } else {
    		      if (view.byteLength === 0) {
    		        throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
    		      }
    		    }
    		    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
    		      throw new RangeError('The region specified by view does not match byobRequest');
    		    }
    		    if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
    		      throw new RangeError('The buffer of view has different capacity than byobRequest');
    		    }
    		    if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
    		      throw new RangeError('The region specified by view is larger than byobRequest');
    		    }
    		    var viewByteLength = view.byteLength;
    		    firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
    		    ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
    		  }
    		  function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
    		    controller._controlledReadableByteStream = stream;
    		    controller._pullAgain = false;
    		    controller._pulling = false;
    		    controller._byobRequest = null;
    		    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    		    controller._queue = controller._queueTotalSize = undefined;
    		    ResetQueue(controller);
    		    controller._closeRequested = false;
    		    controller._started = false;
    		    controller._strategyHWM = highWaterMark;
    		    controller._pullAlgorithm = pullAlgorithm;
    		    controller._cancelAlgorithm = cancelAlgorithm;
    		    controller._autoAllocateChunkSize = autoAllocateChunkSize;
    		    controller._pendingPullIntos = new SimpleQueue();
    		    stream._readableStreamController = controller;
    		    var startResult = startAlgorithm();
    		    uponPromise(promiseResolvedWith(startResult), function () {
    		      controller._started = true;
    		      ReadableByteStreamControllerCallPullIfNeeded(controller);
    		    }, function (r) {
    		      ReadableByteStreamControllerError(controller, r);
    		    });
    		  }
    		  function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
    		    var controller = Object.create(ReadableByteStreamController.prototype);
    		    var startAlgorithm = function () {
    		      return undefined;
    		    };
    		    var pullAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    var cancelAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    if (underlyingByteSource.start !== undefined) {
    		      startAlgorithm = function () {
    		        return underlyingByteSource.start(controller);
    		      };
    		    }
    		    if (underlyingByteSource.pull !== undefined) {
    		      pullAlgorithm = function () {
    		        return underlyingByteSource.pull(controller);
    		      };
    		    }
    		    if (underlyingByteSource.cancel !== undefined) {
    		      cancelAlgorithm = function (reason) {
    		        return underlyingByteSource.cancel(reason);
    		      };
    		    }
    		    var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
    		    if (autoAllocateChunkSize === 0) {
    		      throw new TypeError('autoAllocateChunkSize must be greater than 0');
    		    }
    		    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
    		  }
    		  function SetUpReadableStreamBYOBRequest(request, controller, view) {
    		    request._associatedReadableByteStreamController = controller;
    		    request._view = view;
    		  }
    		  // Helper functions for the ReadableStreamBYOBRequest.
    		  function byobRequestBrandCheckException(name) {
    		    return new TypeError("ReadableStreamBYOBRequest.prototype." + name + " can only be used on a ReadableStreamBYOBRequest");
    		  }
    		  // Helper functions for the ReadableByteStreamController.
    		  function byteStreamControllerBrandCheckException(name) {
    		    return new TypeError("ReadableByteStreamController.prototype." + name + " can only be used on a ReadableByteStreamController");
    		  }

    		  // Abstract operations for the ReadableStream.
    		  function AcquireReadableStreamBYOBReader(stream) {
    		    return new ReadableStreamBYOBReader(stream);
    		  }
    		  // ReadableStream API exposed for controllers.
    		  function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
    		    stream._reader._readIntoRequests.push(readIntoRequest);
    		  }
    		  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    		    var reader = stream._reader;
    		    var readIntoRequest = reader._readIntoRequests.shift();
    		    if (done) {
    		      readIntoRequest._closeSteps(chunk);
    		    } else {
    		      readIntoRequest._chunkSteps(chunk);
    		    }
    		  }
    		  function ReadableStreamGetNumReadIntoRequests(stream) {
    		    return stream._reader._readIntoRequests.length;
    		  }
    		  function ReadableStreamHasBYOBReader(stream) {
    		    var reader = stream._reader;
    		    if (reader === undefined) {
    		      return false;
    		    }
    		    if (!IsReadableStreamBYOBReader(reader)) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  /**
    		   * A BYOB reader vended by a {@link ReadableStream}.
    		   *
    		   * @public
    		   */
    		  var ReadableStreamBYOBReader = /** @class */function () {
    		    function ReadableStreamBYOBReader(stream) {
    		      assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
    		      assertReadableStream(stream, 'First parameter');
    		      if (IsReadableStreamLocked(stream)) {
    		        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
    		      }
    		      if (!IsReadableByteStreamController(stream._readableStreamController)) {
    		        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
    		      }
    		      ReadableStreamReaderGenericInitialize(this, stream);
    		      this._readIntoRequests = new SimpleQueue();
    		    }
    		    Object.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
    		      /**
    		       * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
    		       * the reader's lock is released before the stream finishes closing.
    		       */
    		      get: function () {
    		        if (!IsReadableStreamBYOBReader(this)) {
    		          return promiseRejectedWith(byobReaderBrandCheckException('closed'));
    		        }
    		        return this._closedPromise;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
    		     */
    		    ReadableStreamBYOBReader.prototype.cancel = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsReadableStreamBYOBReader(this)) {
    		        return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
    		      }
    		      if (this._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('cancel'));
    		      }
    		      return ReadableStreamReaderGenericCancel(this, reason);
    		    };
    		    /**
    		     * Attempts to reads bytes into view, and returns a promise resolved with the result.
    		     *
    		     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
    		     */
    		    ReadableStreamBYOBReader.prototype.read = function (view) {
    		      if (!IsReadableStreamBYOBReader(this)) {
    		        return promiseRejectedWith(byobReaderBrandCheckException('read'));
    		      }
    		      if (!ArrayBuffer.isView(view)) {
    		        return promiseRejectedWith(new TypeError('view must be an array buffer view'));
    		      }
    		      if (view.byteLength === 0) {
    		        return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
    		      }
    		      if (view.buffer.byteLength === 0) {
    		        return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
    		      }
    		      if (IsDetachedBuffer(view.buffer)) ;
    		      if (this._ownerReadableStream === undefined) {
    		        return promiseRejectedWith(readerLockException('read from'));
    		      }
    		      var resolvePromise;
    		      var rejectPromise;
    		      var promise = newPromise(function (resolve, reject) {
    		        resolvePromise = resolve;
    		        rejectPromise = reject;
    		      });
    		      var readIntoRequest = {
    		        _chunkSteps: function (chunk) {
    		          return resolvePromise({
    		            value: chunk,
    		            done: false
    		          });
    		        },
    		        _closeSteps: function (chunk) {
    		          return resolvePromise({
    		            value: chunk,
    		            done: true
    		          });
    		        },
    		        _errorSteps: function (e) {
    		          return rejectPromise(e);
    		        }
    		      };
    		      ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
    		      return promise;
    		    };
    		    /**
    		     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
    		     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
    		     * from now on; otherwise, the reader will appear closed.
    		     *
    		     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
    		     * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
    		     * do so will throw a `TypeError` and leave the reader locked to the stream.
    		     */
    		    ReadableStreamBYOBReader.prototype.releaseLock = function () {
    		      if (!IsReadableStreamBYOBReader(this)) {
    		        throw byobReaderBrandCheckException('releaseLock');
    		      }
    		      if (this._ownerReadableStream === undefined) {
    		        return;
    		      }
    		      if (this._readIntoRequests.length > 0) {
    		        throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
    		      }
    		      ReadableStreamReaderGenericRelease(this);
    		    };
    		    return ReadableStreamBYOBReader;
    		  }();
    		  Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    		    cancel: {
    		      enumerable: true
    		    },
    		    read: {
    		      enumerable: true
    		    },
    		    releaseLock: {
    		      enumerable: true
    		    },
    		    closed: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableStreamBYOBReader',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the readers.
    		  function IsReadableStreamBYOBReader(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
    		      return false;
    		    }
    		    return x instanceof ReadableStreamBYOBReader;
    		  }
    		  function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
    		    var stream = reader._ownerReadableStream;
    		    stream._disturbed = true;
    		    if (stream._state === 'errored') {
    		      readIntoRequest._errorSteps(stream._storedError);
    		    } else {
    		      ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    		    }
    		  }
    		  // Helper functions for the ReadableStreamBYOBReader.
    		  function byobReaderBrandCheckException(name) {
    		    return new TypeError("ReadableStreamBYOBReader.prototype." + name + " can only be used on a ReadableStreamBYOBReader");
    		  }
    		  function ExtractHighWaterMark(strategy, defaultHWM) {
    		    var highWaterMark = strategy.highWaterMark;
    		    if (highWaterMark === undefined) {
    		      return defaultHWM;
    		    }
    		    if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
    		      throw new RangeError('Invalid highWaterMark');
    		    }
    		    return highWaterMark;
    		  }
    		  function ExtractSizeAlgorithm(strategy) {
    		    var size = strategy.size;
    		    if (!size) {
    		      return function () {
    		        return 1;
    		      };
    		    }
    		    return size;
    		  }
    		  function convertQueuingStrategy(init, context) {
    		    assertDictionary(init, context);
    		    var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    		    var size = init === null || init === void 0 ? void 0 : init.size;
    		    return {
    		      highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
    		      size: size === undefined ? undefined : convertQueuingStrategySize(size, context + " has member 'size' that")
    		    };
    		  }
    		  function convertQueuingStrategySize(fn, context) {
    		    assertFunction(fn, context);
    		    return function (chunk) {
    		      return convertUnrestrictedDouble(fn(chunk));
    		    };
    		  }
    		  function convertUnderlyingSink(original, context) {
    		    assertDictionary(original, context);
    		    var abort = original === null || original === void 0 ? void 0 : original.abort;
    		    var close = original === null || original === void 0 ? void 0 : original.close;
    		    var start = original === null || original === void 0 ? void 0 : original.start;
    		    var type = original === null || original === void 0 ? void 0 : original.type;
    		    var write = original === null || original === void 0 ? void 0 : original.write;
    		    return {
    		      abort: abort === undefined ? undefined : convertUnderlyingSinkAbortCallback(abort, original, context + " has member 'abort' that"),
    		      close: close === undefined ? undefined : convertUnderlyingSinkCloseCallback(close, original, context + " has member 'close' that"),
    		      start: start === undefined ? undefined : convertUnderlyingSinkStartCallback(start, original, context + " has member 'start' that"),
    		      write: write === undefined ? undefined : convertUnderlyingSinkWriteCallback(write, original, context + " has member 'write' that"),
    		      type: type
    		    };
    		  }
    		  function convertUnderlyingSinkAbortCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (reason) {
    		      return promiseCall(fn, original, [reason]);
    		    };
    		  }
    		  function convertUnderlyingSinkCloseCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function () {
    		      return promiseCall(fn, original, []);
    		    };
    		  }
    		  function convertUnderlyingSinkStartCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (controller) {
    		      return reflectCall(fn, original, [controller]);
    		    };
    		  }
    		  function convertUnderlyingSinkWriteCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (chunk, controller) {
    		      return promiseCall(fn, original, [chunk, controller]);
    		    };
    		  }
    		  function assertWritableStream(x, context) {
    		    if (!IsWritableStream(x)) {
    		      throw new TypeError(context + " is not a WritableStream.");
    		    }
    		  }
    		  function isAbortSignal(value) {
    		    if (typeof value !== 'object' || value === null) {
    		      return false;
    		    }
    		    try {
    		      return typeof value.aborted === 'boolean';
    		    } catch (_a) {
    		      // AbortSignal.prototype.aborted throws if its brand check fails
    		      return false;
    		    }
    		  }
    		  var supportsAbortController = typeof AbortController === 'function';
    		  /**
    		   * Construct a new AbortController, if supported by the platform.
    		   *
    		   * @internal
    		   */
    		  function createAbortController() {
    		    if (supportsAbortController) {
    		      return new AbortController();
    		    }
    		    return undefined;
    		  }

    		  /**
    		   * A writable stream represents a destination for data, into which you can write.
    		   *
    		   * @public
    		   */
    		  var WritableStream = /** @class */function () {
    		    function WritableStream(rawUnderlyingSink, rawStrategy) {
    		      if (rawUnderlyingSink === void 0) {
    		        rawUnderlyingSink = {};
    		      }
    		      if (rawStrategy === void 0) {
    		        rawStrategy = {};
    		      }
    		      if (rawUnderlyingSink === undefined) {
    		        rawUnderlyingSink = null;
    		      } else {
    		        assertObject(rawUnderlyingSink, 'First parameter');
    		      }
    		      var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
    		      var underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
    		      InitializeWritableStream(this);
    		      var type = underlyingSink.type;
    		      if (type !== undefined) {
    		        throw new RangeError('Invalid type is specified');
    		      }
    		      var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
    		      var highWaterMark = ExtractHighWaterMark(strategy, 1);
    		      SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
    		    }
    		    Object.defineProperty(WritableStream.prototype, "locked", {
    		      /**
    		       * Returns whether or not the writable stream is locked to a writer.
    		       */
    		      get: function () {
    		        if (!IsWritableStream(this)) {
    		          throw streamBrandCheckException$2('locked');
    		        }
    		        return IsWritableStreamLocked(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
    		     * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
    		     * mechanism of the underlying sink.
    		     *
    		     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
    		     * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
    		     * the stream) if the stream is currently locked.
    		     */
    		    WritableStream.prototype.abort = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsWritableStream(this)) {
    		        return promiseRejectedWith(streamBrandCheckException$2('abort'));
    		      }
    		      if (IsWritableStreamLocked(this)) {
    		        return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
    		      }
    		      return WritableStreamAbort(this, reason);
    		    };
    		    /**
    		     * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
    		     * close behavior. During this time any further attempts to write will fail (without erroring the stream).
    		     *
    		     * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
    		     * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
    		     * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
    		     */
    		    WritableStream.prototype.close = function () {
    		      if (!IsWritableStream(this)) {
    		        return promiseRejectedWith(streamBrandCheckException$2('close'));
    		      }
    		      if (IsWritableStreamLocked(this)) {
    		        return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
    		      }
    		      if (WritableStreamCloseQueuedOrInFlight(this)) {
    		        return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
    		      }
    		      return WritableStreamClose(this);
    		    };
    		    /**
    		     * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
    		     * is locked, no other writer can be acquired until this one is released.
    		     *
    		     * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
    		     * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
    		     * the same time, which would cause the resulting written data to be unpredictable and probably useless.
    		     */
    		    WritableStream.prototype.getWriter = function () {
    		      if (!IsWritableStream(this)) {
    		        throw streamBrandCheckException$2('getWriter');
    		      }
    		      return AcquireWritableStreamDefaultWriter(this);
    		    };
    		    return WritableStream;
    		  }();
    		  Object.defineProperties(WritableStream.prototype, {
    		    abort: {
    		      enumerable: true
    		    },
    		    close: {
    		      enumerable: true
    		    },
    		    getWriter: {
    		      enumerable: true
    		    },
    		    locked: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'WritableStream',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the WritableStream.
    		  function AcquireWritableStreamDefaultWriter(stream) {
    		    return new WritableStreamDefaultWriter(stream);
    		  }
    		  // Throws if and only if startAlgorithm throws.
    		  function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    		    if (highWaterMark === void 0) {
    		      highWaterMark = 1;
    		    }
    		    if (sizeAlgorithm === void 0) {
    		      sizeAlgorithm = function () {
    		        return 1;
    		      };
    		    }
    		    var stream = Object.create(WritableStream.prototype);
    		    InitializeWritableStream(stream);
    		    var controller = Object.create(WritableStreamDefaultController.prototype);
    		    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    		    return stream;
    		  }
    		  function InitializeWritableStream(stream) {
    		    stream._state = 'writable';
    		    // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
    		    // 'erroring' or 'errored'. May be set to an undefined value.
    		    stream._storedError = undefined;
    		    stream._writer = undefined;
    		    // Initialize to undefined first because the constructor of the controller checks this
    		    // variable to validate the caller.
    		    stream._writableStreamController = undefined;
    		    // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
    		    // producer without waiting for the queued writes to finish.
    		    stream._writeRequests = new SimpleQueue();
    		    // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
    		    // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
    		    stream._inFlightWriteRequest = undefined;
    		    // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
    		    // has been detached.
    		    stream._closeRequest = undefined;
    		    // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
    		    // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
    		    stream._inFlightCloseRequest = undefined;
    		    // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
    		    stream._pendingAbortRequest = undefined;
    		    // The backpressure signal set by the controller.
    		    stream._backpressure = false;
    		  }
    		  function IsWritableStream(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
    		      return false;
    		    }
    		    return x instanceof WritableStream;
    		  }
    		  function IsWritableStreamLocked(stream) {
    		    if (stream._writer === undefined) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  function WritableStreamAbort(stream, reason) {
    		    var _a;
    		    if (stream._state === 'closed' || stream._state === 'errored') {
    		      return promiseResolvedWith(undefined);
    		    }
    		    stream._writableStreamController._abortReason = reason;
    		    (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
    		    // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
    		    // but it doesn't know that signaling abort runs author code that might have changed the state.
    		    // Widen the type again by casting to WritableStreamState.
    		    var state = stream._state;
    		    if (state === 'closed' || state === 'errored') {
    		      return promiseResolvedWith(undefined);
    		    }
    		    if (stream._pendingAbortRequest !== undefined) {
    		      return stream._pendingAbortRequest._promise;
    		    }
    		    var wasAlreadyErroring = false;
    		    if (state === 'erroring') {
    		      wasAlreadyErroring = true;
    		      // reason will not be used, so don't keep a reference to it.
    		      reason = undefined;
    		    }
    		    var promise = newPromise(function (resolve, reject) {
    		      stream._pendingAbortRequest = {
    		        _promise: undefined,
    		        _resolve: resolve,
    		        _reject: reject,
    		        _reason: reason,
    		        _wasAlreadyErroring: wasAlreadyErroring
    		      };
    		    });
    		    stream._pendingAbortRequest._promise = promise;
    		    if (!wasAlreadyErroring) {
    		      WritableStreamStartErroring(stream, reason);
    		    }
    		    return promise;
    		  }
    		  function WritableStreamClose(stream) {
    		    var state = stream._state;
    		    if (state === 'closed' || state === 'errored') {
    		      return promiseRejectedWith(new TypeError("The stream (in " + state + " state) is not in the writable state and cannot be closed"));
    		    }
    		    var promise = newPromise(function (resolve, reject) {
    		      var closeRequest = {
    		        _resolve: resolve,
    		        _reject: reject
    		      };
    		      stream._closeRequest = closeRequest;
    		    });
    		    var writer = stream._writer;
    		    if (writer !== undefined && stream._backpressure && state === 'writable') {
    		      defaultWriterReadyPromiseResolve(writer);
    		    }
    		    WritableStreamDefaultControllerClose(stream._writableStreamController);
    		    return promise;
    		  }
    		  // WritableStream API exposed for controllers.
    		  function WritableStreamAddWriteRequest(stream) {
    		    var promise = newPromise(function (resolve, reject) {
    		      var writeRequest = {
    		        _resolve: resolve,
    		        _reject: reject
    		      };
    		      stream._writeRequests.push(writeRequest);
    		    });
    		    return promise;
    		  }
    		  function WritableStreamDealWithRejection(stream, error) {
    		    var state = stream._state;
    		    if (state === 'writable') {
    		      WritableStreamStartErroring(stream, error);
    		      return;
    		    }
    		    WritableStreamFinishErroring(stream);
    		  }
    		  function WritableStreamStartErroring(stream, reason) {
    		    var controller = stream._writableStreamController;
    		    stream._state = 'erroring';
    		    stream._storedError = reason;
    		    var writer = stream._writer;
    		    if (writer !== undefined) {
    		      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    		    }
    		    if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
    		      WritableStreamFinishErroring(stream);
    		    }
    		  }
    		  function WritableStreamFinishErroring(stream) {
    		    stream._state = 'errored';
    		    stream._writableStreamController[ErrorSteps]();
    		    var storedError = stream._storedError;
    		    stream._writeRequests.forEach(function (writeRequest) {
    		      writeRequest._reject(storedError);
    		    });
    		    stream._writeRequests = new SimpleQueue();
    		    if (stream._pendingAbortRequest === undefined) {
    		      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    		      return;
    		    }
    		    var abortRequest = stream._pendingAbortRequest;
    		    stream._pendingAbortRequest = undefined;
    		    if (abortRequest._wasAlreadyErroring) {
    		      abortRequest._reject(storedError);
    		      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    		      return;
    		    }
    		    var promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
    		    uponPromise(promise, function () {
    		      abortRequest._resolve();
    		      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    		    }, function (reason) {
    		      abortRequest._reject(reason);
    		      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    		    });
    		  }
    		  function WritableStreamFinishInFlightWrite(stream) {
    		    stream._inFlightWriteRequest._resolve(undefined);
    		    stream._inFlightWriteRequest = undefined;
    		  }
    		  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    		    stream._inFlightWriteRequest._reject(error);
    		    stream._inFlightWriteRequest = undefined;
    		    WritableStreamDealWithRejection(stream, error);
    		  }
    		  function WritableStreamFinishInFlightClose(stream) {
    		    stream._inFlightCloseRequest._resolve(undefined);
    		    stream._inFlightCloseRequest = undefined;
    		    var state = stream._state;
    		    if (state === 'erroring') {
    		      // The error was too late to do anything, so it is ignored.
    		      stream._storedError = undefined;
    		      if (stream._pendingAbortRequest !== undefined) {
    		        stream._pendingAbortRequest._resolve();
    		        stream._pendingAbortRequest = undefined;
    		      }
    		    }
    		    stream._state = 'closed';
    		    var writer = stream._writer;
    		    if (writer !== undefined) {
    		      defaultWriterClosedPromiseResolve(writer);
    		    }
    		  }
    		  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    		    stream._inFlightCloseRequest._reject(error);
    		    stream._inFlightCloseRequest = undefined;
    		    // Never execute sink abort() after sink close().
    		    if (stream._pendingAbortRequest !== undefined) {
    		      stream._pendingAbortRequest._reject(error);
    		      stream._pendingAbortRequest = undefined;
    		    }
    		    WritableStreamDealWithRejection(stream, error);
    		  }
    		  // TODO(ricea): Fix alphabetical order.
    		  function WritableStreamCloseQueuedOrInFlight(stream) {
    		    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  function WritableStreamHasOperationMarkedInFlight(stream) {
    		    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  function WritableStreamMarkCloseRequestInFlight(stream) {
    		    stream._inFlightCloseRequest = stream._closeRequest;
    		    stream._closeRequest = undefined;
    		  }
    		  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    		    stream._inFlightWriteRequest = stream._writeRequests.shift();
    		  }
    		  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    		    if (stream._closeRequest !== undefined) {
    		      stream._closeRequest._reject(stream._storedError);
    		      stream._closeRequest = undefined;
    		    }
    		    var writer = stream._writer;
    		    if (writer !== undefined) {
    		      defaultWriterClosedPromiseReject(writer, stream._storedError);
    		    }
    		  }
    		  function WritableStreamUpdateBackpressure(stream, backpressure) {
    		    var writer = stream._writer;
    		    if (writer !== undefined && backpressure !== stream._backpressure) {
    		      if (backpressure) {
    		        defaultWriterReadyPromiseReset(writer);
    		      } else {
    		        defaultWriterReadyPromiseResolve(writer);
    		      }
    		    }
    		    stream._backpressure = backpressure;
    		  }
    		  /**
    		   * A default writer vended by a {@link WritableStream}.
    		   *
    		   * @public
    		   */
    		  var WritableStreamDefaultWriter = /** @class */function () {
    		    function WritableStreamDefaultWriter(stream) {
    		      assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
    		      assertWritableStream(stream, 'First parameter');
    		      if (IsWritableStreamLocked(stream)) {
    		        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
    		      }
    		      this._ownerWritableStream = stream;
    		      stream._writer = this;
    		      var state = stream._state;
    		      if (state === 'writable') {
    		        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
    		          defaultWriterReadyPromiseInitialize(this);
    		        } else {
    		          defaultWriterReadyPromiseInitializeAsResolved(this);
    		        }
    		        defaultWriterClosedPromiseInitialize(this);
    		      } else if (state === 'erroring') {
    		        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
    		        defaultWriterClosedPromiseInitialize(this);
    		      } else if (state === 'closed') {
    		        defaultWriterReadyPromiseInitializeAsResolved(this);
    		        defaultWriterClosedPromiseInitializeAsResolved(this);
    		      } else {
    		        var storedError = stream._storedError;
    		        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
    		        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
    		      }
    		    }
    		    Object.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
    		      /**
    		       * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
    		       * the writer’s lock is released before the stream finishes closing.
    		       */
    		      get: function () {
    		        if (!IsWritableStreamDefaultWriter(this)) {
    		          return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
    		        }
    		        return this._closedPromise;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
    		      /**
    		       * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
    		       * A producer can use this information to determine the right amount of data to write.
    		       *
    		       * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
    		       * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
    		       * the writer’s lock is released.
    		       */
    		      get: function () {
    		        if (!IsWritableStreamDefaultWriter(this)) {
    		          throw defaultWriterBrandCheckException('desiredSize');
    		        }
    		        if (this._ownerWritableStream === undefined) {
    		          throw defaultWriterLockException('desiredSize');
    		        }
    		        return WritableStreamDefaultWriterGetDesiredSize(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
    		      /**
    		       * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
    		       * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
    		       * back to zero or below, the getter will return a new promise that stays pending until the next transition.
    		       *
    		       * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
    		       * rejected.
    		       */
    		      get: function () {
    		        if (!IsWritableStreamDefaultWriter(this)) {
    		          return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
    		        }
    		        return this._readyPromise;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
    		     */
    		    WritableStreamDefaultWriter.prototype.abort = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsWritableStreamDefaultWriter(this)) {
    		        return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
    		      }
    		      if (this._ownerWritableStream === undefined) {
    		        return promiseRejectedWith(defaultWriterLockException('abort'));
    		      }
    		      return WritableStreamDefaultWriterAbort(this, reason);
    		    };
    		    /**
    		     * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
    		     */
    		    WritableStreamDefaultWriter.prototype.close = function () {
    		      if (!IsWritableStreamDefaultWriter(this)) {
    		        return promiseRejectedWith(defaultWriterBrandCheckException('close'));
    		      }
    		      var stream = this._ownerWritableStream;
    		      if (stream === undefined) {
    		        return promiseRejectedWith(defaultWriterLockException('close'));
    		      }
    		      if (WritableStreamCloseQueuedOrInFlight(stream)) {
    		        return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
    		      }
    		      return WritableStreamDefaultWriterClose(this);
    		    };
    		    /**
    		     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
    		     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
    		     * now on; otherwise, the writer will appear closed.
    		     *
    		     * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
    		     * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
    		     * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
    		     * other producers from writing in an interleaved manner.
    		     */
    		    WritableStreamDefaultWriter.prototype.releaseLock = function () {
    		      if (!IsWritableStreamDefaultWriter(this)) {
    		        throw defaultWriterBrandCheckException('releaseLock');
    		      }
    		      var stream = this._ownerWritableStream;
    		      if (stream === undefined) {
    		        return;
    		      }
    		      WritableStreamDefaultWriterRelease(this);
    		    };
    		    WritableStreamDefaultWriter.prototype.write = function (chunk) {
    		      if (chunk === void 0) {
    		        chunk = undefined;
    		      }
    		      if (!IsWritableStreamDefaultWriter(this)) {
    		        return promiseRejectedWith(defaultWriterBrandCheckException('write'));
    		      }
    		      if (this._ownerWritableStream === undefined) {
    		        return promiseRejectedWith(defaultWriterLockException('write to'));
    		      }
    		      return WritableStreamDefaultWriterWrite(this, chunk);
    		    };
    		    return WritableStreamDefaultWriter;
    		  }();
    		  Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    		    abort: {
    		      enumerable: true
    		    },
    		    close: {
    		      enumerable: true
    		    },
    		    releaseLock: {
    		      enumerable: true
    		    },
    		    write: {
    		      enumerable: true
    		    },
    		    closed: {
    		      enumerable: true
    		    },
    		    desiredSize: {
    		      enumerable: true
    		    },
    		    ready: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'WritableStreamDefaultWriter',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the WritableStreamDefaultWriter.
    		  function IsWritableStreamDefaultWriter(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
    		      return false;
    		    }
    		    return x instanceof WritableStreamDefaultWriter;
    		  }
    		  // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
    		  function WritableStreamDefaultWriterAbort(writer, reason) {
    		    var stream = writer._ownerWritableStream;
    		    return WritableStreamAbort(stream, reason);
    		  }
    		  function WritableStreamDefaultWriterClose(writer) {
    		    var stream = writer._ownerWritableStream;
    		    return WritableStreamClose(stream);
    		  }
    		  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    		    var stream = writer._ownerWritableStream;
    		    var state = stream._state;
    		    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
    		      return promiseResolvedWith(undefined);
    		    }
    		    if (state === 'errored') {
    		      return promiseRejectedWith(stream._storedError);
    		    }
    		    return WritableStreamDefaultWriterClose(writer);
    		  }
    		  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    		    if (writer._closedPromiseState === 'pending') {
    		      defaultWriterClosedPromiseReject(writer, error);
    		    } else {
    		      defaultWriterClosedPromiseResetToRejected(writer, error);
    		    }
    		  }
    		  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    		    if (writer._readyPromiseState === 'pending') {
    		      defaultWriterReadyPromiseReject(writer, error);
    		    } else {
    		      defaultWriterReadyPromiseResetToRejected(writer, error);
    		    }
    		  }
    		  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    		    var stream = writer._ownerWritableStream;
    		    var state = stream._state;
    		    if (state === 'errored' || state === 'erroring') {
    		      return null;
    		    }
    		    if (state === 'closed') {
    		      return 0;
    		    }
    		    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
    		  }
    		  function WritableStreamDefaultWriterRelease(writer) {
    		    var stream = writer._ownerWritableStream;
    		    var releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
    		    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    		    // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
    		    // rejected until afterwards. This means that simply testing state will not work.
    		    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    		    stream._writer = undefined;
    		    writer._ownerWritableStream = undefined;
    		  }
    		  function WritableStreamDefaultWriterWrite(writer, chunk) {
    		    var stream = writer._ownerWritableStream;
    		    var controller = stream._writableStreamController;
    		    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    		    if (stream !== writer._ownerWritableStream) {
    		      return promiseRejectedWith(defaultWriterLockException('write to'));
    		    }
    		    var state = stream._state;
    		    if (state === 'errored') {
    		      return promiseRejectedWith(stream._storedError);
    		    }
    		    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
    		      return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
    		    }
    		    if (state === 'erroring') {
    		      return promiseRejectedWith(stream._storedError);
    		    }
    		    var promise = WritableStreamAddWriteRequest(stream);
    		    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    		    return promise;
    		  }
    		  var closeSentinel = {};
    		  /**
    		   * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
    		   *
    		   * @public
    		   */
    		  var WritableStreamDefaultController = /** @class */function () {
    		    function WritableStreamDefaultController() {
    		      throw new TypeError('Illegal constructor');
    		    }
    		    Object.defineProperty(WritableStreamDefaultController.prototype, "abortReason", {
    		      /**
    		       * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
    		       *
    		       * @deprecated
    		       *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
    		       *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
    		       */
    		      get: function () {
    		        if (!IsWritableStreamDefaultController(this)) {
    		          throw defaultControllerBrandCheckException$2('abortReason');
    		        }
    		        return this._abortReason;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(WritableStreamDefaultController.prototype, "signal", {
    		      /**
    		       * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
    		       */
    		      get: function () {
    		        if (!IsWritableStreamDefaultController(this)) {
    		          throw defaultControllerBrandCheckException$2('signal');
    		        }
    		        if (this._abortController === undefined) {
    		          // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
    		          // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
    		          // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
    		          throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
    		        }
    		        return this._abortController.signal;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
    		     *
    		     * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
    		     * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
    		     * normal lifecycle of interactions with the underlying sink.
    		     */
    		    WritableStreamDefaultController.prototype.error = function (e) {
    		      if (e === void 0) {
    		        e = undefined;
    		      }
    		      if (!IsWritableStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException$2('error');
    		      }
    		      var state = this._controlledWritableStream._state;
    		      if (state !== 'writable') {
    		        // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
    		        // just treat it as a no-op.
    		        return;
    		      }
    		      WritableStreamDefaultControllerError(this, e);
    		    };
    		    /** @internal */
    		    WritableStreamDefaultController.prototype[AbortSteps] = function (reason) {
    		      var result = this._abortAlgorithm(reason);
    		      WritableStreamDefaultControllerClearAlgorithms(this);
    		      return result;
    		    };
    		    /** @internal */
    		    WritableStreamDefaultController.prototype[ErrorSteps] = function () {
    		      ResetQueue(this);
    		    };
    		    return WritableStreamDefaultController;
    		  }();
    		  Object.defineProperties(WritableStreamDefaultController.prototype, {
    		    abortReason: {
    		      enumerable: true
    		    },
    		    signal: {
    		      enumerable: true
    		    },
    		    error: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'WritableStreamDefaultController',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations implementing interface required by the WritableStream.
    		  function IsWritableStreamDefaultController(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
    		      return false;
    		    }
    		    return x instanceof WritableStreamDefaultController;
    		  }
    		  function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    		    controller._controlledWritableStream = stream;
    		    stream._writableStreamController = controller;
    		    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    		    controller._queue = undefined;
    		    controller._queueTotalSize = undefined;
    		    ResetQueue(controller);
    		    controller._abortReason = undefined;
    		    controller._abortController = createAbortController();
    		    controller._started = false;
    		    controller._strategySizeAlgorithm = sizeAlgorithm;
    		    controller._strategyHWM = highWaterMark;
    		    controller._writeAlgorithm = writeAlgorithm;
    		    controller._closeAlgorithm = closeAlgorithm;
    		    controller._abortAlgorithm = abortAlgorithm;
    		    var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    		    WritableStreamUpdateBackpressure(stream, backpressure);
    		    var startResult = startAlgorithm();
    		    var startPromise = promiseResolvedWith(startResult);
    		    uponPromise(startPromise, function () {
    		      controller._started = true;
    		      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    		    }, function (r) {
    		      controller._started = true;
    		      WritableStreamDealWithRejection(stream, r);
    		    });
    		  }
    		  function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
    		    var controller = Object.create(WritableStreamDefaultController.prototype);
    		    var startAlgorithm = function () {
    		      return undefined;
    		    };
    		    var writeAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    var closeAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    var abortAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    if (underlyingSink.start !== undefined) {
    		      startAlgorithm = function () {
    		        return underlyingSink.start(controller);
    		      };
    		    }
    		    if (underlyingSink.write !== undefined) {
    		      writeAlgorithm = function (chunk) {
    		        return underlyingSink.write(chunk, controller);
    		      };
    		    }
    		    if (underlyingSink.close !== undefined) {
    		      closeAlgorithm = function () {
    		        return underlyingSink.close();
    		      };
    		    }
    		    if (underlyingSink.abort !== undefined) {
    		      abortAlgorithm = function (reason) {
    		        return underlyingSink.abort(reason);
    		      };
    		    }
    		    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    		  }
    		  // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
    		  function WritableStreamDefaultControllerClearAlgorithms(controller) {
    		    controller._writeAlgorithm = undefined;
    		    controller._closeAlgorithm = undefined;
    		    controller._abortAlgorithm = undefined;
    		    controller._strategySizeAlgorithm = undefined;
    		  }
    		  function WritableStreamDefaultControllerClose(controller) {
    		    EnqueueValueWithSize(controller, closeSentinel, 0);
    		    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    		  }
    		  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    		    try {
    		      return controller._strategySizeAlgorithm(chunk);
    		    } catch (chunkSizeE) {
    		      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
    		      return 1;
    		    }
    		  }
    		  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    		    return controller._strategyHWM - controller._queueTotalSize;
    		  }
    		  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    		    try {
    		      EnqueueValueWithSize(controller, chunk, chunkSize);
    		    } catch (enqueueE) {
    		      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
    		      return;
    		    }
    		    var stream = controller._controlledWritableStream;
    		    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
    		      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    		      WritableStreamUpdateBackpressure(stream, backpressure);
    		    }
    		    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    		  }
    		  // Abstract operations for the WritableStreamDefaultController.
    		  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    		    var stream = controller._controlledWritableStream;
    		    if (!controller._started) {
    		      return;
    		    }
    		    if (stream._inFlightWriteRequest !== undefined) {
    		      return;
    		    }
    		    var state = stream._state;
    		    if (state === 'erroring') {
    		      WritableStreamFinishErroring(stream);
    		      return;
    		    }
    		    if (controller._queue.length === 0) {
    		      return;
    		    }
    		    var value = PeekQueueValue(controller);
    		    if (value === closeSentinel) {
    		      WritableStreamDefaultControllerProcessClose(controller);
    		    } else {
    		      WritableStreamDefaultControllerProcessWrite(controller, value);
    		    }
    		  }
    		  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    		    if (controller._controlledWritableStream._state === 'writable') {
    		      WritableStreamDefaultControllerError(controller, error);
    		    }
    		  }
    		  function WritableStreamDefaultControllerProcessClose(controller) {
    		    var stream = controller._controlledWritableStream;
    		    WritableStreamMarkCloseRequestInFlight(stream);
    		    DequeueValue(controller);
    		    var sinkClosePromise = controller._closeAlgorithm();
    		    WritableStreamDefaultControllerClearAlgorithms(controller);
    		    uponPromise(sinkClosePromise, function () {
    		      WritableStreamFinishInFlightClose(stream);
    		    }, function (reason) {
    		      WritableStreamFinishInFlightCloseWithError(stream, reason);
    		    });
    		  }
    		  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    		    var stream = controller._controlledWritableStream;
    		    WritableStreamMarkFirstWriteRequestInFlight(stream);
    		    var sinkWritePromise = controller._writeAlgorithm(chunk);
    		    uponPromise(sinkWritePromise, function () {
    		      WritableStreamFinishInFlightWrite(stream);
    		      var state = stream._state;
    		      DequeueValue(controller);
    		      if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
    		        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    		        WritableStreamUpdateBackpressure(stream, backpressure);
    		      }
    		      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    		    }, function (reason) {
    		      if (stream._state === 'writable') {
    		        WritableStreamDefaultControllerClearAlgorithms(controller);
    		      }
    		      WritableStreamFinishInFlightWriteWithError(stream, reason);
    		    });
    		  }
    		  function WritableStreamDefaultControllerGetBackpressure(controller) {
    		    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    		    return desiredSize <= 0;
    		  }
    		  // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
    		  function WritableStreamDefaultControllerError(controller, error) {
    		    var stream = controller._controlledWritableStream;
    		    WritableStreamDefaultControllerClearAlgorithms(controller);
    		    WritableStreamStartErroring(stream, error);
    		  }
    		  // Helper functions for the WritableStream.
    		  function streamBrandCheckException$2(name) {
    		    return new TypeError("WritableStream.prototype." + name + " can only be used on a WritableStream");
    		  }
    		  // Helper functions for the WritableStreamDefaultController.
    		  function defaultControllerBrandCheckException$2(name) {
    		    return new TypeError("WritableStreamDefaultController.prototype." + name + " can only be used on a WritableStreamDefaultController");
    		  }
    		  // Helper functions for the WritableStreamDefaultWriter.
    		  function defaultWriterBrandCheckException(name) {
    		    return new TypeError("WritableStreamDefaultWriter.prototype." + name + " can only be used on a WritableStreamDefaultWriter");
    		  }
    		  function defaultWriterLockException(name) {
    		    return new TypeError('Cannot ' + name + ' a stream using a released writer');
    		  }
    		  function defaultWriterClosedPromiseInitialize(writer) {
    		    writer._closedPromise = newPromise(function (resolve, reject) {
    		      writer._closedPromise_resolve = resolve;
    		      writer._closedPromise_reject = reject;
    		      writer._closedPromiseState = 'pending';
    		    });
    		  }
    		  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    		    defaultWriterClosedPromiseInitialize(writer);
    		    defaultWriterClosedPromiseReject(writer, reason);
    		  }
    		  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    		    defaultWriterClosedPromiseInitialize(writer);
    		    defaultWriterClosedPromiseResolve(writer);
    		  }
    		  function defaultWriterClosedPromiseReject(writer, reason) {
    		    if (writer._closedPromise_reject === undefined) {
    		      return;
    		    }
    		    setPromiseIsHandledToTrue(writer._closedPromise);
    		    writer._closedPromise_reject(reason);
    		    writer._closedPromise_resolve = undefined;
    		    writer._closedPromise_reject = undefined;
    		    writer._closedPromiseState = 'rejected';
    		  }
    		  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    		    defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
    		  }
    		  function defaultWriterClosedPromiseResolve(writer) {
    		    if (writer._closedPromise_resolve === undefined) {
    		      return;
    		    }
    		    writer._closedPromise_resolve(undefined);
    		    writer._closedPromise_resolve = undefined;
    		    writer._closedPromise_reject = undefined;
    		    writer._closedPromiseState = 'resolved';
    		  }
    		  function defaultWriterReadyPromiseInitialize(writer) {
    		    writer._readyPromise = newPromise(function (resolve, reject) {
    		      writer._readyPromise_resolve = resolve;
    		      writer._readyPromise_reject = reject;
    		    });
    		    writer._readyPromiseState = 'pending';
    		  }
    		  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    		    defaultWriterReadyPromiseInitialize(writer);
    		    defaultWriterReadyPromiseReject(writer, reason);
    		  }
    		  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    		    defaultWriterReadyPromiseInitialize(writer);
    		    defaultWriterReadyPromiseResolve(writer);
    		  }
    		  function defaultWriterReadyPromiseReject(writer, reason) {
    		    if (writer._readyPromise_reject === undefined) {
    		      return;
    		    }
    		    setPromiseIsHandledToTrue(writer._readyPromise);
    		    writer._readyPromise_reject(reason);
    		    writer._readyPromise_resolve = undefined;
    		    writer._readyPromise_reject = undefined;
    		    writer._readyPromiseState = 'rejected';
    		  }
    		  function defaultWriterReadyPromiseReset(writer) {
    		    defaultWriterReadyPromiseInitialize(writer);
    		  }
    		  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    		    defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
    		  }
    		  function defaultWriterReadyPromiseResolve(writer) {
    		    if (writer._readyPromise_resolve === undefined) {
    		      return;
    		    }
    		    writer._readyPromise_resolve(undefined);
    		    writer._readyPromise_resolve = undefined;
    		    writer._readyPromise_reject = undefined;
    		    writer._readyPromiseState = 'fulfilled';
    		  }

    		  /// <reference lib="dom" />
    		  var NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;

    		  /// <reference types="node" />
    		  function isDOMExceptionConstructor(ctor) {
    		    if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
    		      return false;
    		    }
    		    try {
    		      new ctor();
    		      return true;
    		    } catch (_a) {
    		      return false;
    		    }
    		  }
    		  function createDOMExceptionPolyfill() {
    		    // eslint-disable-next-line no-shadow
    		    var ctor = function DOMException(message, name) {
    		      this.message = message || '';
    		      this.name = name || 'Error';
    		      if (Error.captureStackTrace) {
    		        Error.captureStackTrace(this, this.constructor);
    		      }
    		    };
    		    ctor.prototype = Object.create(Error.prototype);
    		    Object.defineProperty(ctor.prototype, 'constructor', {
    		      value: ctor,
    		      writable: true,
    		      configurable: true
    		    });
    		    return ctor;
    		  }
    		  // eslint-disable-next-line no-redeclare
    		  var DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
    		  function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
    		    var reader = AcquireReadableStreamDefaultReader(source);
    		    var writer = AcquireWritableStreamDefaultWriter(dest);
    		    source._disturbed = true;
    		    var shuttingDown = false;
    		    // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
    		    var currentWrite = promiseResolvedWith(undefined);
    		    return newPromise(function (resolve, reject) {
    		      var abortAlgorithm;
    		      if (signal !== undefined) {
    		        abortAlgorithm = function () {
    		          var error = new DOMException$1('Aborted', 'AbortError');
    		          var actions = [];
    		          if (!preventAbort) {
    		            actions.push(function () {
    		              if (dest._state === 'writable') {
    		                return WritableStreamAbort(dest, error);
    		              }
    		              return promiseResolvedWith(undefined);
    		            });
    		          }
    		          if (!preventCancel) {
    		            actions.push(function () {
    		              if (source._state === 'readable') {
    		                return ReadableStreamCancel(source, error);
    		              }
    		              return promiseResolvedWith(undefined);
    		            });
    		          }
    		          shutdownWithAction(function () {
    		            return Promise.all(actions.map(function (action) {
    		              return action();
    		            }));
    		          }, true, error);
    		        };
    		        if (signal.aborted) {
    		          abortAlgorithm();
    		          return;
    		        }
    		        signal.addEventListener('abort', abortAlgorithm);
    		      }
    		      // Using reader and writer, read all chunks from this and write them to dest
    		      // - Backpressure must be enforced
    		      // - Shutdown must stop all activity
    		      function pipeLoop() {
    		        return newPromise(function (resolveLoop, rejectLoop) {
    		          function next(done) {
    		            if (done) {
    		              resolveLoop();
    		            } else {
    		              // Use `PerformPromiseThen` instead of `uponPromise` to avoid
    		              // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
    		              PerformPromiseThen(pipeStep(), next, rejectLoop);
    		            }
    		          }
    		          next(false);
    		        });
    		      }
    		      function pipeStep() {
    		        if (shuttingDown) {
    		          return promiseResolvedWith(true);
    		        }
    		        return PerformPromiseThen(writer._readyPromise, function () {
    		          return newPromise(function (resolveRead, rejectRead) {
    		            ReadableStreamDefaultReaderRead(reader, {
    		              _chunkSteps: function (chunk) {
    		                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
    		                resolveRead(false);
    		              },
    		              _closeSteps: function () {
    		                return resolveRead(true);
    		              },
    		              _errorSteps: rejectRead
    		            });
    		          });
    		        });
    		      }
    		      // Errors must be propagated forward
    		      isOrBecomesErrored(source, reader._closedPromise, function (storedError) {
    		        if (!preventAbort) {
    		          shutdownWithAction(function () {
    		            return WritableStreamAbort(dest, storedError);
    		          }, true, storedError);
    		        } else {
    		          shutdown(true, storedError);
    		        }
    		      });
    		      // Errors must be propagated backward
    		      isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
    		        if (!preventCancel) {
    		          shutdownWithAction(function () {
    		            return ReadableStreamCancel(source, storedError);
    		          }, true, storedError);
    		        } else {
    		          shutdown(true, storedError);
    		        }
    		      });
    		      // Closing must be propagated forward
    		      isOrBecomesClosed(source, reader._closedPromise, function () {
    		        if (!preventClose) {
    		          shutdownWithAction(function () {
    		            return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
    		          });
    		        } else {
    		          shutdown();
    		        }
    		      });
    		      // Closing must be propagated backward
    		      if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
    		        var destClosed_1 = new TypeError('the destination writable stream closed before all data could be piped to it');
    		        if (!preventCancel) {
    		          shutdownWithAction(function () {
    		            return ReadableStreamCancel(source, destClosed_1);
    		          }, true, destClosed_1);
    		        } else {
    		          shutdown(true, destClosed_1);
    		        }
    		      }
    		      setPromiseIsHandledToTrue(pipeLoop());
    		      function waitForWritesToFinish() {
    		        // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
    		        // for that too.
    		        var oldCurrentWrite = currentWrite;
    		        return PerformPromiseThen(currentWrite, function () {
    		          return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
    		        });
    		      }
    		      function isOrBecomesErrored(stream, promise, action) {
    		        if (stream._state === 'errored') {
    		          action(stream._storedError);
    		        } else {
    		          uponRejection(promise, action);
    		        }
    		      }
    		      function isOrBecomesClosed(stream, promise, action) {
    		        if (stream._state === 'closed') {
    		          action();
    		        } else {
    		          uponFulfillment(promise, action);
    		        }
    		      }
    		      function shutdownWithAction(action, originalIsError, originalError) {
    		        if (shuttingDown) {
    		          return;
    		        }
    		        shuttingDown = true;
    		        if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
    		          uponFulfillment(waitForWritesToFinish(), doTheRest);
    		        } else {
    		          doTheRest();
    		        }
    		        function doTheRest() {
    		          uponPromise(action(), function () {
    		            return finalize(originalIsError, originalError);
    		          }, function (newError) {
    		            return finalize(true, newError);
    		          });
    		        }
    		      }
    		      function shutdown(isError, error) {
    		        if (shuttingDown) {
    		          return;
    		        }
    		        shuttingDown = true;
    		        if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
    		          uponFulfillment(waitForWritesToFinish(), function () {
    		            return finalize(isError, error);
    		          });
    		        } else {
    		          finalize(isError, error);
    		        }
    		      }
    		      function finalize(isError, error) {
    		        WritableStreamDefaultWriterRelease(writer);
    		        ReadableStreamReaderGenericRelease(reader);
    		        if (signal !== undefined) {
    		          signal.removeEventListener('abort', abortAlgorithm);
    		        }
    		        if (isError) {
    		          reject(error);
    		        } else {
    		          resolve(undefined);
    		        }
    		      }
    		    });
    		  }

    		  /**
    		   * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
    		   *
    		   * @public
    		   */
    		  var ReadableStreamDefaultController = /** @class */function () {
    		    function ReadableStreamDefaultController() {
    		      throw new TypeError('Illegal constructor');
    		    }
    		    Object.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
    		      /**
    		       * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
    		       * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
    		       */
    		      get: function () {
    		        if (!IsReadableStreamDefaultController(this)) {
    		          throw defaultControllerBrandCheckException$1('desiredSize');
    		        }
    		        return ReadableStreamDefaultControllerGetDesiredSize(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
    		     * the stream, but once those are read, the stream will become closed.
    		     */
    		    ReadableStreamDefaultController.prototype.close = function () {
    		      if (!IsReadableStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException$1('close');
    		      }
    		      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
    		        throw new TypeError('The stream is not in a state that permits close');
    		      }
    		      ReadableStreamDefaultControllerClose(this);
    		    };
    		    ReadableStreamDefaultController.prototype.enqueue = function (chunk) {
    		      if (chunk === void 0) {
    		        chunk = undefined;
    		      }
    		      if (!IsReadableStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException$1('enqueue');
    		      }
    		      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
    		        throw new TypeError('The stream is not in a state that permits enqueue');
    		      }
    		      return ReadableStreamDefaultControllerEnqueue(this, chunk);
    		    };
    		    /**
    		     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
    		     */
    		    ReadableStreamDefaultController.prototype.error = function (e) {
    		      if (e === void 0) {
    		        e = undefined;
    		      }
    		      if (!IsReadableStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException$1('error');
    		      }
    		      ReadableStreamDefaultControllerError(this, e);
    		    };
    		    /** @internal */
    		    ReadableStreamDefaultController.prototype[CancelSteps] = function (reason) {
    		      ResetQueue(this);
    		      var result = this._cancelAlgorithm(reason);
    		      ReadableStreamDefaultControllerClearAlgorithms(this);
    		      return result;
    		    };
    		    /** @internal */
    		    ReadableStreamDefaultController.prototype[PullSteps] = function (readRequest) {
    		      var stream = this._controlledReadableStream;
    		      if (this._queue.length > 0) {
    		        var chunk = DequeueValue(this);
    		        if (this._closeRequested && this._queue.length === 0) {
    		          ReadableStreamDefaultControllerClearAlgorithms(this);
    		          ReadableStreamClose(stream);
    		        } else {
    		          ReadableStreamDefaultControllerCallPullIfNeeded(this);
    		        }
    		        readRequest._chunkSteps(chunk);
    		      } else {
    		        ReadableStreamAddReadRequest(stream, readRequest);
    		        ReadableStreamDefaultControllerCallPullIfNeeded(this);
    		      }
    		    };
    		    return ReadableStreamDefaultController;
    		  }();
    		  Object.defineProperties(ReadableStreamDefaultController.prototype, {
    		    close: {
    		      enumerable: true
    		    },
    		    enqueue: {
    		      enumerable: true
    		    },
    		    error: {
    		      enumerable: true
    		    },
    		    desiredSize: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableStreamDefaultController',
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the ReadableStreamDefaultController.
    		  function IsReadableStreamDefaultController(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
    		      return false;
    		    }
    		    return x instanceof ReadableStreamDefaultController;
    		  }
    		  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    		    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    		    if (!shouldPull) {
    		      return;
    		    }
    		    if (controller._pulling) {
    		      controller._pullAgain = true;
    		      return;
    		    }
    		    controller._pulling = true;
    		    var pullPromise = controller._pullAlgorithm();
    		    uponPromise(pullPromise, function () {
    		      controller._pulling = false;
    		      if (controller._pullAgain) {
    		        controller._pullAgain = false;
    		        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    		      }
    		    }, function (e) {
    		      ReadableStreamDefaultControllerError(controller, e);
    		    });
    		  }
    		  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    		    var stream = controller._controlledReadableStream;
    		    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    		      return false;
    		    }
    		    if (!controller._started) {
    		      return false;
    		    }
    		    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    		      return true;
    		    }
    		    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    		    if (desiredSize > 0) {
    		      return true;
    		    }
    		    return false;
    		  }
    		  function ReadableStreamDefaultControllerClearAlgorithms(controller) {
    		    controller._pullAlgorithm = undefined;
    		    controller._cancelAlgorithm = undefined;
    		    controller._strategySizeAlgorithm = undefined;
    		  }
    		  // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
    		  function ReadableStreamDefaultControllerClose(controller) {
    		    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    		      return;
    		    }
    		    var stream = controller._controlledReadableStream;
    		    controller._closeRequested = true;
    		    if (controller._queue.length === 0) {
    		      ReadableStreamDefaultControllerClearAlgorithms(controller);
    		      ReadableStreamClose(stream);
    		    }
    		  }
    		  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    		    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    		      return;
    		    }
    		    var stream = controller._controlledReadableStream;
    		    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    		      ReadableStreamFulfillReadRequest(stream, chunk, false);
    		    } else {
    		      var chunkSize = void 0;
    		      try {
    		        chunkSize = controller._strategySizeAlgorithm(chunk);
    		      } catch (chunkSizeE) {
    		        ReadableStreamDefaultControllerError(controller, chunkSizeE);
    		        throw chunkSizeE;
    		      }
    		      try {
    		        EnqueueValueWithSize(controller, chunk, chunkSize);
    		      } catch (enqueueE) {
    		        ReadableStreamDefaultControllerError(controller, enqueueE);
    		        throw enqueueE;
    		      }
    		    }
    		    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    		  }
    		  function ReadableStreamDefaultControllerError(controller, e) {
    		    var stream = controller._controlledReadableStream;
    		    if (stream._state !== 'readable') {
    		      return;
    		    }
    		    ResetQueue(controller);
    		    ReadableStreamDefaultControllerClearAlgorithms(controller);
    		    ReadableStreamError(stream, e);
    		  }
    		  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    		    var state = controller._controlledReadableStream._state;
    		    if (state === 'errored') {
    		      return null;
    		    }
    		    if (state === 'closed') {
    		      return 0;
    		    }
    		    return controller._strategyHWM - controller._queueTotalSize;
    		  }
    		  // This is used in the implementation of TransformStream.
    		  function ReadableStreamDefaultControllerHasBackpressure(controller) {
    		    if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
    		    var state = controller._controlledReadableStream._state;
    		    if (!controller._closeRequested && state === 'readable') {
    		      return true;
    		    }
    		    return false;
    		  }
    		  function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    		    controller._controlledReadableStream = stream;
    		    controller._queue = undefined;
    		    controller._queueTotalSize = undefined;
    		    ResetQueue(controller);
    		    controller._started = false;
    		    controller._closeRequested = false;
    		    controller._pullAgain = false;
    		    controller._pulling = false;
    		    controller._strategySizeAlgorithm = sizeAlgorithm;
    		    controller._strategyHWM = highWaterMark;
    		    controller._pullAlgorithm = pullAlgorithm;
    		    controller._cancelAlgorithm = cancelAlgorithm;
    		    stream._readableStreamController = controller;
    		    var startResult = startAlgorithm();
    		    uponPromise(promiseResolvedWith(startResult), function () {
    		      controller._started = true;
    		      ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    		    }, function (r) {
    		      ReadableStreamDefaultControllerError(controller, r);
    		    });
    		  }
    		  function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
    		    var controller = Object.create(ReadableStreamDefaultController.prototype);
    		    var startAlgorithm = function () {
    		      return undefined;
    		    };
    		    var pullAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    var cancelAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    if (underlyingSource.start !== undefined) {
    		      startAlgorithm = function () {
    		        return underlyingSource.start(controller);
    		      };
    		    }
    		    if (underlyingSource.pull !== undefined) {
    		      pullAlgorithm = function () {
    		        return underlyingSource.pull(controller);
    		      };
    		    }
    		    if (underlyingSource.cancel !== undefined) {
    		      cancelAlgorithm = function (reason) {
    		        return underlyingSource.cancel(reason);
    		      };
    		    }
    		    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    		  }
    		  // Helper functions for the ReadableStreamDefaultController.
    		  function defaultControllerBrandCheckException$1(name) {
    		    return new TypeError("ReadableStreamDefaultController.prototype." + name + " can only be used on a ReadableStreamDefaultController");
    		  }
    		  function ReadableStreamTee(stream, cloneForBranch2) {
    		    if (IsReadableByteStreamController(stream._readableStreamController)) {
    		      return ReadableByteStreamTee(stream);
    		    }
    		    return ReadableStreamDefaultTee(stream);
    		  }
    		  function ReadableStreamDefaultTee(stream, cloneForBranch2) {
    		    var reader = AcquireReadableStreamDefaultReader(stream);
    		    var reading = false;
    		    var readAgain = false;
    		    var canceled1 = false;
    		    var canceled2 = false;
    		    var reason1;
    		    var reason2;
    		    var branch1;
    		    var branch2;
    		    var resolveCancelPromise;
    		    var cancelPromise = newPromise(function (resolve) {
    		      resolveCancelPromise = resolve;
    		    });
    		    function pullAlgorithm() {
    		      if (reading) {
    		        readAgain = true;
    		        return promiseResolvedWith(undefined);
    		      }
    		      reading = true;
    		      var readRequest = {
    		        _chunkSteps: function (chunk) {
    		          // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
    		          // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
    		          // successful synchronously-available reads get ahead of asynchronously-available errors.
    		          queueMicrotask(function () {
    		            readAgain = false;
    		            var chunk1 = chunk;
    		            var chunk2 = chunk;
    		            // There is no way to access the cloning code right now in the reference implementation.
    		            // If we add one then we'll need an implementation for serializable objects.
    		            // if (!canceled2 && cloneForBranch2) {
    		            //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
    		            // }
    		            if (!canceled1) {
    		              ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
    		            }
    		            if (!canceled2) {
    		              ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
    		            }
    		            reading = false;
    		            if (readAgain) {
    		              pullAlgorithm();
    		            }
    		          });
    		        },
    		        _closeSteps: function () {
    		          reading = false;
    		          if (!canceled1) {
    		            ReadableStreamDefaultControllerClose(branch1._readableStreamController);
    		          }
    		          if (!canceled2) {
    		            ReadableStreamDefaultControllerClose(branch2._readableStreamController);
    		          }
    		          if (!canceled1 || !canceled2) {
    		            resolveCancelPromise(undefined);
    		          }
    		        },
    		        _errorSteps: function () {
    		          reading = false;
    		        }
    		      };
    		      ReadableStreamDefaultReaderRead(reader, readRequest);
    		      return promiseResolvedWith(undefined);
    		    }
    		    function cancel1Algorithm(reason) {
    		      canceled1 = true;
    		      reason1 = reason;
    		      if (canceled2) {
    		        var compositeReason = CreateArrayFromList([reason1, reason2]);
    		        var cancelResult = ReadableStreamCancel(stream, compositeReason);
    		        resolveCancelPromise(cancelResult);
    		      }
    		      return cancelPromise;
    		    }
    		    function cancel2Algorithm(reason) {
    		      canceled2 = true;
    		      reason2 = reason;
    		      if (canceled1) {
    		        var compositeReason = CreateArrayFromList([reason1, reason2]);
    		        var cancelResult = ReadableStreamCancel(stream, compositeReason);
    		        resolveCancelPromise(cancelResult);
    		      }
    		      return cancelPromise;
    		    }
    		    function startAlgorithm() {
    		      // do nothing
    		    }
    		    branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
    		    branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
    		    uponRejection(reader._closedPromise, function (r) {
    		      ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
    		      ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
    		      if (!canceled1 || !canceled2) {
    		        resolveCancelPromise(undefined);
    		      }
    		    });
    		    return [branch1, branch2];
    		  }
    		  function ReadableByteStreamTee(stream) {
    		    var reader = AcquireReadableStreamDefaultReader(stream);
    		    var reading = false;
    		    var readAgainForBranch1 = false;
    		    var readAgainForBranch2 = false;
    		    var canceled1 = false;
    		    var canceled2 = false;
    		    var reason1;
    		    var reason2;
    		    var branch1;
    		    var branch2;
    		    var resolveCancelPromise;
    		    var cancelPromise = newPromise(function (resolve) {
    		      resolveCancelPromise = resolve;
    		    });
    		    function forwardReaderError(thisReader) {
    		      uponRejection(thisReader._closedPromise, function (r) {
    		        if (thisReader !== reader) {
    		          return;
    		        }
    		        ReadableByteStreamControllerError(branch1._readableStreamController, r);
    		        ReadableByteStreamControllerError(branch2._readableStreamController, r);
    		        if (!canceled1 || !canceled2) {
    		          resolveCancelPromise(undefined);
    		        }
    		      });
    		    }
    		    function pullWithDefaultReader() {
    		      if (IsReadableStreamBYOBReader(reader)) {
    		        ReadableStreamReaderGenericRelease(reader);
    		        reader = AcquireReadableStreamDefaultReader(stream);
    		        forwardReaderError(reader);
    		      }
    		      var readRequest = {
    		        _chunkSteps: function (chunk) {
    		          // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
    		          // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
    		          // successful synchronously-available reads get ahead of asynchronously-available errors.
    		          queueMicrotask(function () {
    		            readAgainForBranch1 = false;
    		            readAgainForBranch2 = false;
    		            var chunk1 = chunk;
    		            var chunk2 = chunk;
    		            if (!canceled1 && !canceled2) {
    		              try {
    		                chunk2 = CloneAsUint8Array(chunk);
    		              } catch (cloneE) {
    		                ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
    		                ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
    		                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
    		                return;
    		              }
    		            }
    		            if (!canceled1) {
    		              ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
    		            }
    		            if (!canceled2) {
    		              ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
    		            }
    		            reading = false;
    		            if (readAgainForBranch1) {
    		              pull1Algorithm();
    		            } else if (readAgainForBranch2) {
    		              pull2Algorithm();
    		            }
    		          });
    		        },
    		        _closeSteps: function () {
    		          reading = false;
    		          if (!canceled1) {
    		            ReadableByteStreamControllerClose(branch1._readableStreamController);
    		          }
    		          if (!canceled2) {
    		            ReadableByteStreamControllerClose(branch2._readableStreamController);
    		          }
    		          if (branch1._readableStreamController._pendingPullIntos.length > 0) {
    		            ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
    		          }
    		          if (branch2._readableStreamController._pendingPullIntos.length > 0) {
    		            ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
    		          }
    		          if (!canceled1 || !canceled2) {
    		            resolveCancelPromise(undefined);
    		          }
    		        },
    		        _errorSteps: function () {
    		          reading = false;
    		        }
    		      };
    		      ReadableStreamDefaultReaderRead(reader, readRequest);
    		    }
    		    function pullWithBYOBReader(view, forBranch2) {
    		      if (IsReadableStreamDefaultReader(reader)) {
    		        ReadableStreamReaderGenericRelease(reader);
    		        reader = AcquireReadableStreamBYOBReader(stream);
    		        forwardReaderError(reader);
    		      }
    		      var byobBranch = forBranch2 ? branch2 : branch1;
    		      var otherBranch = forBranch2 ? branch1 : branch2;
    		      var readIntoRequest = {
    		        _chunkSteps: function (chunk) {
    		          // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
    		          // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
    		          // successful synchronously-available reads get ahead of asynchronously-available errors.
    		          queueMicrotask(function () {
    		            readAgainForBranch1 = false;
    		            readAgainForBranch2 = false;
    		            var byobCanceled = forBranch2 ? canceled2 : canceled1;
    		            var otherCanceled = forBranch2 ? canceled1 : canceled2;
    		            if (!otherCanceled) {
    		              var clonedChunk = void 0;
    		              try {
    		                clonedChunk = CloneAsUint8Array(chunk);
    		              } catch (cloneE) {
    		                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
    		                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
    		                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
    		                return;
    		              }
    		              if (!byobCanceled) {
    		                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
    		              }
    		              ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
    		            } else if (!byobCanceled) {
    		              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
    		            }
    		            reading = false;
    		            if (readAgainForBranch1) {
    		              pull1Algorithm();
    		            } else if (readAgainForBranch2) {
    		              pull2Algorithm();
    		            }
    		          });
    		        },
    		        _closeSteps: function (chunk) {
    		          reading = false;
    		          var byobCanceled = forBranch2 ? canceled2 : canceled1;
    		          var otherCanceled = forBranch2 ? canceled1 : canceled2;
    		          if (!byobCanceled) {
    		            ReadableByteStreamControllerClose(byobBranch._readableStreamController);
    		          }
    		          if (!otherCanceled) {
    		            ReadableByteStreamControllerClose(otherBranch._readableStreamController);
    		          }
    		          if (chunk !== undefined) {
    		            if (!byobCanceled) {
    		              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
    		            }
    		            if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
    		              ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
    		            }
    		          }
    		          if (!byobCanceled || !otherCanceled) {
    		            resolveCancelPromise(undefined);
    		          }
    		        },
    		        _errorSteps: function () {
    		          reading = false;
    		        }
    		      };
    		      ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
    		    }
    		    function pull1Algorithm() {
    		      if (reading) {
    		        readAgainForBranch1 = true;
    		        return promiseResolvedWith(undefined);
    		      }
    		      reading = true;
    		      var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
    		      if (byobRequest === null) {
    		        pullWithDefaultReader();
    		      } else {
    		        pullWithBYOBReader(byobRequest._view, false);
    		      }
    		      return promiseResolvedWith(undefined);
    		    }
    		    function pull2Algorithm() {
    		      if (reading) {
    		        readAgainForBranch2 = true;
    		        return promiseResolvedWith(undefined);
    		      }
    		      reading = true;
    		      var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
    		      if (byobRequest === null) {
    		        pullWithDefaultReader();
    		      } else {
    		        pullWithBYOBReader(byobRequest._view, true);
    		      }
    		      return promiseResolvedWith(undefined);
    		    }
    		    function cancel1Algorithm(reason) {
    		      canceled1 = true;
    		      reason1 = reason;
    		      if (canceled2) {
    		        var compositeReason = CreateArrayFromList([reason1, reason2]);
    		        var cancelResult = ReadableStreamCancel(stream, compositeReason);
    		        resolveCancelPromise(cancelResult);
    		      }
    		      return cancelPromise;
    		    }
    		    function cancel2Algorithm(reason) {
    		      canceled2 = true;
    		      reason2 = reason;
    		      if (canceled1) {
    		        var compositeReason = CreateArrayFromList([reason1, reason2]);
    		        var cancelResult = ReadableStreamCancel(stream, compositeReason);
    		        resolveCancelPromise(cancelResult);
    		      }
    		      return cancelPromise;
    		    }
    		    function startAlgorithm() {
    		      return;
    		    }
    		    branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
    		    branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
    		    forwardReaderError(reader);
    		    return [branch1, branch2];
    		  }
    		  function convertUnderlyingDefaultOrByteSource(source, context) {
    		    assertDictionary(source, context);
    		    var original = source;
    		    var autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
    		    var cancel = original === null || original === void 0 ? void 0 : original.cancel;
    		    var pull = original === null || original === void 0 ? void 0 : original.pull;
    		    var start = original === null || original === void 0 ? void 0 : original.start;
    		    var type = original === null || original === void 0 ? void 0 : original.type;
    		    return {
    		      autoAllocateChunkSize: autoAllocateChunkSize === undefined ? undefined : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, context + " has member 'autoAllocateChunkSize' that"),
    		      cancel: cancel === undefined ? undefined : convertUnderlyingSourceCancelCallback(cancel, original, context + " has member 'cancel' that"),
    		      pull: pull === undefined ? undefined : convertUnderlyingSourcePullCallback(pull, original, context + " has member 'pull' that"),
    		      start: start === undefined ? undefined : convertUnderlyingSourceStartCallback(start, original, context + " has member 'start' that"),
    		      type: type === undefined ? undefined : convertReadableStreamType(type, context + " has member 'type' that")
    		    };
    		  }
    		  function convertUnderlyingSourceCancelCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (reason) {
    		      return promiseCall(fn, original, [reason]);
    		    };
    		  }
    		  function convertUnderlyingSourcePullCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (controller) {
    		      return promiseCall(fn, original, [controller]);
    		    };
    		  }
    		  function convertUnderlyingSourceStartCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (controller) {
    		      return reflectCall(fn, original, [controller]);
    		    };
    		  }
    		  function convertReadableStreamType(type, context) {
    		    type = "" + type;
    		    if (type !== 'bytes') {
    		      throw new TypeError(context + " '" + type + "' is not a valid enumeration value for ReadableStreamType");
    		    }
    		    return type;
    		  }
    		  function convertReaderOptions(options, context) {
    		    assertDictionary(options, context);
    		    var mode = options === null || options === void 0 ? void 0 : options.mode;
    		    return {
    		      mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, context + " has member 'mode' that")
    		    };
    		  }
    		  function convertReadableStreamReaderMode(mode, context) {
    		    mode = "" + mode;
    		    if (mode !== 'byob') {
    		      throw new TypeError(context + " '" + mode + "' is not a valid enumeration value for ReadableStreamReaderMode");
    		    }
    		    return mode;
    		  }
    		  function convertIteratorOptions(options, context) {
    		    assertDictionary(options, context);
    		    var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    		    return {
    		      preventCancel: Boolean(preventCancel)
    		    };
    		  }
    		  function convertPipeOptions(options, context) {
    		    assertDictionary(options, context);
    		    var preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
    		    var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    		    var preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
    		    var signal = options === null || options === void 0 ? void 0 : options.signal;
    		    if (signal !== undefined) {
    		      assertAbortSignal(signal, context + " has member 'signal' that");
    		    }
    		    return {
    		      preventAbort: Boolean(preventAbort),
    		      preventCancel: Boolean(preventCancel),
    		      preventClose: Boolean(preventClose),
    		      signal: signal
    		    };
    		  }
    		  function assertAbortSignal(signal, context) {
    		    if (!isAbortSignal(signal)) {
    		      throw new TypeError(context + " is not an AbortSignal.");
    		    }
    		  }
    		  function convertReadableWritablePair(pair, context) {
    		    assertDictionary(pair, context);
    		    var readable = pair === null || pair === void 0 ? void 0 : pair.readable;
    		    assertRequiredField(readable, 'readable', 'ReadableWritablePair');
    		    assertReadableStream(readable, context + " has member 'readable' that");
    		    var writable = pair === null || pair === void 0 ? void 0 : pair.writable;
    		    assertRequiredField(writable, 'writable', 'ReadableWritablePair');
    		    assertWritableStream(writable, context + " has member 'writable' that");
    		    return {
    		      readable: readable,
    		      writable: writable
    		    };
    		  }

    		  /**
    		   * A readable stream represents a source of data, from which you can read.
    		   *
    		   * @public
    		   */
    		  var ReadableStream = /** @class */function () {
    		    function ReadableStream(rawUnderlyingSource, rawStrategy) {
    		      if (rawUnderlyingSource === void 0) {
    		        rawUnderlyingSource = {};
    		      }
    		      if (rawStrategy === void 0) {
    		        rawStrategy = {};
    		      }
    		      if (rawUnderlyingSource === undefined) {
    		        rawUnderlyingSource = null;
    		      } else {
    		        assertObject(rawUnderlyingSource, 'First parameter');
    		      }
    		      var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
    		      var underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
    		      InitializeReadableStream(this);
    		      if (underlyingSource.type === 'bytes') {
    		        if (strategy.size !== undefined) {
    		          throw new RangeError('The strategy for a byte stream cannot have a size function');
    		        }
    		        var highWaterMark = ExtractHighWaterMark(strategy, 0);
    		        SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
    		      } else {
    		        var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
    		        var highWaterMark = ExtractHighWaterMark(strategy, 1);
    		        SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
    		      }
    		    }
    		    Object.defineProperty(ReadableStream.prototype, "locked", {
    		      /**
    		       * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
    		       */
    		      get: function () {
    		        if (!IsReadableStream(this)) {
    		          throw streamBrandCheckException$1('locked');
    		        }
    		        return IsReadableStreamLocked(this);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    /**
    		     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
    		     *
    		     * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
    		     * method, which might or might not use it.
    		     */
    		    ReadableStream.prototype.cancel = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsReadableStream(this)) {
    		        return promiseRejectedWith(streamBrandCheckException$1('cancel'));
    		      }
    		      if (IsReadableStreamLocked(this)) {
    		        return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
    		      }
    		      return ReadableStreamCancel(this, reason);
    		    };
    		    ReadableStream.prototype.getReader = function (rawOptions) {
    		      if (rawOptions === void 0) {
    		        rawOptions = undefined;
    		      }
    		      if (!IsReadableStream(this)) {
    		        throw streamBrandCheckException$1('getReader');
    		      }
    		      var options = convertReaderOptions(rawOptions, 'First parameter');
    		      if (options.mode === undefined) {
    		        return AcquireReadableStreamDefaultReader(this);
    		      }
    		      return AcquireReadableStreamBYOBReader(this);
    		    };
    		    ReadableStream.prototype.pipeThrough = function (rawTransform, rawOptions) {
    		      if (rawOptions === void 0) {
    		        rawOptions = {};
    		      }
    		      if (!IsReadableStream(this)) {
    		        throw streamBrandCheckException$1('pipeThrough');
    		      }
    		      assertRequiredArgument(rawTransform, 1, 'pipeThrough');
    		      var transform = convertReadableWritablePair(rawTransform, 'First parameter');
    		      var options = convertPipeOptions(rawOptions, 'Second parameter');
    		      if (IsReadableStreamLocked(this)) {
    		        throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
    		      }
    		      if (IsWritableStreamLocked(transform.writable)) {
    		        throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
    		      }
    		      var promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    		      setPromiseIsHandledToTrue(promise);
    		      return transform.readable;
    		    };
    		    ReadableStream.prototype.pipeTo = function (destination, rawOptions) {
    		      if (rawOptions === void 0) {
    		        rawOptions = {};
    		      }
    		      if (!IsReadableStream(this)) {
    		        return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
    		      }
    		      if (destination === undefined) {
    		        return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
    		      }
    		      if (!IsWritableStream(destination)) {
    		        return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
    		      }
    		      var options;
    		      try {
    		        options = convertPipeOptions(rawOptions, 'Second parameter');
    		      } catch (e) {
    		        return promiseRejectedWith(e);
    		      }
    		      if (IsReadableStreamLocked(this)) {
    		        return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
    		      }
    		      if (IsWritableStreamLocked(destination)) {
    		        return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
    		      }
    		      return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    		    };
    		    /**
    		     * Tees this readable stream, returning a two-element array containing the two resulting branches as
    		     * new {@link ReadableStream} instances.
    		     *
    		     * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
    		     * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
    		     * propagated to the stream's underlying source.
    		     *
    		     * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
    		     * this could allow interference between the two branches.
    		     */
    		    ReadableStream.prototype.tee = function () {
    		      if (!IsReadableStream(this)) {
    		        throw streamBrandCheckException$1('tee');
    		      }
    		      var branches = ReadableStreamTee(this);
    		      return CreateArrayFromList(branches);
    		    };
    		    ReadableStream.prototype.values = function (rawOptions) {
    		      if (rawOptions === void 0) {
    		        rawOptions = undefined;
    		      }
    		      if (!IsReadableStream(this)) {
    		        throw streamBrandCheckException$1('values');
    		      }
    		      var options = convertIteratorOptions(rawOptions, 'First parameter');
    		      return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
    		    };
    		    return ReadableStream;
    		  }();
    		  Object.defineProperties(ReadableStream.prototype, {
    		    cancel: {
    		      enumerable: true
    		    },
    		    getReader: {
    		      enumerable: true
    		    },
    		    pipeThrough: {
    		      enumerable: true
    		    },
    		    pipeTo: {
    		      enumerable: true
    		    },
    		    tee: {
    		      enumerable: true
    		    },
    		    values: {
    		      enumerable: true
    		    },
    		    locked: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ReadableStream',
    		      configurable: true
    		    });
    		  }
    		  if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
    		    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
    		      value: ReadableStream.prototype.values,
    		      writable: true,
    		      configurable: true
    		    });
    		  }
    		  // Abstract operations for the ReadableStream.
    		  // Throws if and only if startAlgorithm throws.
    		  function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    		    if (highWaterMark === void 0) {
    		      highWaterMark = 1;
    		    }
    		    if (sizeAlgorithm === void 0) {
    		      sizeAlgorithm = function () {
    		        return 1;
    		      };
    		    }
    		    var stream = Object.create(ReadableStream.prototype);
    		    InitializeReadableStream(stream);
    		    var controller = Object.create(ReadableStreamDefaultController.prototype);
    		    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    		    return stream;
    		  }
    		  // Throws if and only if startAlgorithm throws.
    		  function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
    		    var stream = Object.create(ReadableStream.prototype);
    		    InitializeReadableStream(stream);
    		    var controller = Object.create(ReadableByteStreamController.prototype);
    		    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
    		    return stream;
    		  }
    		  function InitializeReadableStream(stream) {
    		    stream._state = 'readable';
    		    stream._reader = undefined;
    		    stream._storedError = undefined;
    		    stream._disturbed = false;
    		  }
    		  function IsReadableStream(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
    		      return false;
    		    }
    		    return x instanceof ReadableStream;
    		  }
    		  function IsReadableStreamLocked(stream) {
    		    if (stream._reader === undefined) {
    		      return false;
    		    }
    		    return true;
    		  }
    		  // ReadableStream API exposed for controllers.
    		  function ReadableStreamCancel(stream, reason) {
    		    stream._disturbed = true;
    		    if (stream._state === 'closed') {
    		      return promiseResolvedWith(undefined);
    		    }
    		    if (stream._state === 'errored') {
    		      return promiseRejectedWith(stream._storedError);
    		    }
    		    ReadableStreamClose(stream);
    		    var reader = stream._reader;
    		    if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
    		      reader._readIntoRequests.forEach(function (readIntoRequest) {
    		        readIntoRequest._closeSteps(undefined);
    		      });
    		      reader._readIntoRequests = new SimpleQueue();
    		    }
    		    var sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
    		    return transformPromiseWith(sourceCancelPromise, noop);
    		  }
    		  function ReadableStreamClose(stream) {
    		    stream._state = 'closed';
    		    var reader = stream._reader;
    		    if (reader === undefined) {
    		      return;
    		    }
    		    defaultReaderClosedPromiseResolve(reader);
    		    if (IsReadableStreamDefaultReader(reader)) {
    		      reader._readRequests.forEach(function (readRequest) {
    		        readRequest._closeSteps();
    		      });
    		      reader._readRequests = new SimpleQueue();
    		    }
    		  }
    		  function ReadableStreamError(stream, e) {
    		    stream._state = 'errored';
    		    stream._storedError = e;
    		    var reader = stream._reader;
    		    if (reader === undefined) {
    		      return;
    		    }
    		    defaultReaderClosedPromiseReject(reader, e);
    		    if (IsReadableStreamDefaultReader(reader)) {
    		      reader._readRequests.forEach(function (readRequest) {
    		        readRequest._errorSteps(e);
    		      });
    		      reader._readRequests = new SimpleQueue();
    		    } else {
    		      reader._readIntoRequests.forEach(function (readIntoRequest) {
    		        readIntoRequest._errorSteps(e);
    		      });
    		      reader._readIntoRequests = new SimpleQueue();
    		    }
    		  }
    		  // Helper functions for the ReadableStream.
    		  function streamBrandCheckException$1(name) {
    		    return new TypeError("ReadableStream.prototype." + name + " can only be used on a ReadableStream");
    		  }
    		  function convertQueuingStrategyInit(init, context) {
    		    assertDictionary(init, context);
    		    var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    		    assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
    		    return {
    		      highWaterMark: convertUnrestrictedDouble(highWaterMark)
    		    };
    		  }

    		  // The size function must not have a prototype property nor be a constructor
    		  var byteLengthSizeFunction = function (chunk) {
    		    return chunk.byteLength;
    		  };
    		  try {
    		    Object.defineProperty(byteLengthSizeFunction, 'name', {
    		      value: 'size',
    		      configurable: true
    		    });
    		  } catch (_a) {
    		    // This property is non-configurable in older browsers, so ignore if this throws.
    		    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
    		  }
    		  /**
    		   * A queuing strategy that counts the number of bytes in each chunk.
    		   *
    		   * @public
    		   */
    		  var ByteLengthQueuingStrategy = /** @class */function () {
    		    function ByteLengthQueuingStrategy(options) {
    		      assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
    		      options = convertQueuingStrategyInit(options, 'First parameter');
    		      this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
    		    }
    		    Object.defineProperty(ByteLengthQueuingStrategy.prototype, "highWaterMark", {
    		      /**
    		       * Returns the high water mark provided to the constructor.
    		       */
    		      get: function () {
    		        if (!IsByteLengthQueuingStrategy(this)) {
    		          throw byteLengthBrandCheckException('highWaterMark');
    		        }
    		        return this._byteLengthQueuingStrategyHighWaterMark;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(ByteLengthQueuingStrategy.prototype, "size", {
    		      /**
    		       * Measures the size of `chunk` by returning the value of its `byteLength` property.
    		       */
    		      get: function () {
    		        if (!IsByteLengthQueuingStrategy(this)) {
    		          throw byteLengthBrandCheckException('size');
    		        }
    		        return byteLengthSizeFunction;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    return ByteLengthQueuingStrategy;
    		  }();
    		  Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    		    highWaterMark: {
    		      enumerable: true
    		    },
    		    size: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'ByteLengthQueuingStrategy',
    		      configurable: true
    		    });
    		  }
    		  // Helper functions for the ByteLengthQueuingStrategy.
    		  function byteLengthBrandCheckException(name) {
    		    return new TypeError("ByteLengthQueuingStrategy.prototype." + name + " can only be used on a ByteLengthQueuingStrategy");
    		  }
    		  function IsByteLengthQueuingStrategy(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
    		      return false;
    		    }
    		    return x instanceof ByteLengthQueuingStrategy;
    		  }

    		  // The size function must not have a prototype property nor be a constructor
    		  var countSizeFunction = function () {
    		    return 1;
    		  };
    		  try {
    		    Object.defineProperty(countSizeFunction, 'name', {
    		      value: 'size',
    		      configurable: true
    		    });
    		  } catch (_a) {
    		    // This property is non-configurable in older browsers, so ignore if this throws.
    		    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
    		  }
    		  /**
    		   * A queuing strategy that counts the number of chunks.
    		   *
    		   * @public
    		   */
    		  var CountQueuingStrategy = /** @class */function () {
    		    function CountQueuingStrategy(options) {
    		      assertRequiredArgument(options, 1, 'CountQueuingStrategy');
    		      options = convertQueuingStrategyInit(options, 'First parameter');
    		      this._countQueuingStrategyHighWaterMark = options.highWaterMark;
    		    }
    		    Object.defineProperty(CountQueuingStrategy.prototype, "highWaterMark", {
    		      /**
    		       * Returns the high water mark provided to the constructor.
    		       */
    		      get: function () {
    		        if (!IsCountQueuingStrategy(this)) {
    		          throw countBrandCheckException('highWaterMark');
    		        }
    		        return this._countQueuingStrategyHighWaterMark;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(CountQueuingStrategy.prototype, "size", {
    		      /**
    		       * Measures the size of `chunk` by always returning 1.
    		       * This ensures that the total queue size is a count of the number of chunks in the queue.
    		       */
    		      get: function () {
    		        if (!IsCountQueuingStrategy(this)) {
    		          throw countBrandCheckException('size');
    		        }
    		        return countSizeFunction;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    return CountQueuingStrategy;
    		  }();
    		  Object.defineProperties(CountQueuingStrategy.prototype, {
    		    highWaterMark: {
    		      enumerable: true
    		    },
    		    size: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'CountQueuingStrategy',
    		      configurable: true
    		    });
    		  }
    		  // Helper functions for the CountQueuingStrategy.
    		  function countBrandCheckException(name) {
    		    return new TypeError("CountQueuingStrategy.prototype." + name + " can only be used on a CountQueuingStrategy");
    		  }
    		  function IsCountQueuingStrategy(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
    		      return false;
    		    }
    		    return x instanceof CountQueuingStrategy;
    		  }
    		  function convertTransformer(original, context) {
    		    assertDictionary(original, context);
    		    var flush = original === null || original === void 0 ? void 0 : original.flush;
    		    var readableType = original === null || original === void 0 ? void 0 : original.readableType;
    		    var start = original === null || original === void 0 ? void 0 : original.start;
    		    var transform = original === null || original === void 0 ? void 0 : original.transform;
    		    var writableType = original === null || original === void 0 ? void 0 : original.writableType;
    		    return {
    		      flush: flush === undefined ? undefined : convertTransformerFlushCallback(flush, original, context + " has member 'flush' that"),
    		      readableType: readableType,
    		      start: start === undefined ? undefined : convertTransformerStartCallback(start, original, context + " has member 'start' that"),
    		      transform: transform === undefined ? undefined : convertTransformerTransformCallback(transform, original, context + " has member 'transform' that"),
    		      writableType: writableType
    		    };
    		  }
    		  function convertTransformerFlushCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (controller) {
    		      return promiseCall(fn, original, [controller]);
    		    };
    		  }
    		  function convertTransformerStartCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (controller) {
    		      return reflectCall(fn, original, [controller]);
    		    };
    		  }
    		  function convertTransformerTransformCallback(fn, original, context) {
    		    assertFunction(fn, context);
    		    return function (chunk, controller) {
    		      return promiseCall(fn, original, [chunk, controller]);
    		    };
    		  }

    		  // Class TransformStream
    		  /**
    		   * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
    		   * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
    		   * In a manner specific to the transform stream in question, writes to the writable side result in new data being
    		   * made available for reading from the readable side.
    		   *
    		   * @public
    		   */
    		  var TransformStream = /** @class */function () {
    		    function TransformStream(rawTransformer, rawWritableStrategy, rawReadableStrategy) {
    		      if (rawTransformer === void 0) {
    		        rawTransformer = {};
    		      }
    		      if (rawWritableStrategy === void 0) {
    		        rawWritableStrategy = {};
    		      }
    		      if (rawReadableStrategy === void 0) {
    		        rawReadableStrategy = {};
    		      }
    		      if (rawTransformer === undefined) {
    		        rawTransformer = null;
    		      }
    		      var writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
    		      var readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
    		      var transformer = convertTransformer(rawTransformer, 'First parameter');
    		      if (transformer.readableType !== undefined) {
    		        throw new RangeError('Invalid readableType specified');
    		      }
    		      if (transformer.writableType !== undefined) {
    		        throw new RangeError('Invalid writableType specified');
    		      }
    		      var readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
    		      var readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
    		      var writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
    		      var writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
    		      var startPromise_resolve;
    		      var startPromise = newPromise(function (resolve) {
    		        startPromise_resolve = resolve;
    		      });
    		      InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    		      SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
    		      if (transformer.start !== undefined) {
    		        startPromise_resolve(transformer.start(this._transformStreamController));
    		      } else {
    		        startPromise_resolve(undefined);
    		      }
    		    }
    		    Object.defineProperty(TransformStream.prototype, "readable", {
    		      /**
    		       * The readable side of the transform stream.
    		       */
    		      get: function () {
    		        if (!IsTransformStream(this)) {
    		          throw streamBrandCheckException('readable');
    		        }
    		        return this._readable;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    Object.defineProperty(TransformStream.prototype, "writable", {
    		      /**
    		       * The writable side of the transform stream.
    		       */
    		      get: function () {
    		        if (!IsTransformStream(this)) {
    		          throw streamBrandCheckException('writable');
    		        }
    		        return this._writable;
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    return TransformStream;
    		  }();
    		  Object.defineProperties(TransformStream.prototype, {
    		    readable: {
    		      enumerable: true
    		    },
    		    writable: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'TransformStream',
    		      configurable: true
    		    });
    		  }
    		  function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
    		    function startAlgorithm() {
    		      return startPromise;
    		    }
    		    function writeAlgorithm(chunk) {
    		      return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
    		    }
    		    function abortAlgorithm(reason) {
    		      return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
    		    }
    		    function closeAlgorithm() {
    		      return TransformStreamDefaultSinkCloseAlgorithm(stream);
    		    }
    		    stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
    		    function pullAlgorithm() {
    		      return TransformStreamDefaultSourcePullAlgorithm(stream);
    		    }
    		    function cancelAlgorithm(reason) {
    		      TransformStreamErrorWritableAndUnblockWrite(stream, reason);
    		      return promiseResolvedWith(undefined);
    		    }
    		    stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    		    // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
    		    stream._backpressure = undefined;
    		    stream._backpressureChangePromise = undefined;
    		    stream._backpressureChangePromise_resolve = undefined;
    		    TransformStreamSetBackpressure(stream, true);
    		    stream._transformStreamController = undefined;
    		  }
    		  function IsTransformStream(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
    		      return false;
    		    }
    		    return x instanceof TransformStream;
    		  }
    		  // This is a no-op if both sides are already errored.
    		  function TransformStreamError(stream, e) {
    		    ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
    		    TransformStreamErrorWritableAndUnblockWrite(stream, e);
    		  }
    		  function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
    		    TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
    		    WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
    		    if (stream._backpressure) {
    		      // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
    		      // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
    		      // _backpressure is set.
    		      TransformStreamSetBackpressure(stream, false);
    		    }
    		  }
    		  function TransformStreamSetBackpressure(stream, backpressure) {
    		    // Passes also when called during construction.
    		    if (stream._backpressureChangePromise !== undefined) {
    		      stream._backpressureChangePromise_resolve();
    		    }
    		    stream._backpressureChangePromise = newPromise(function (resolve) {
    		      stream._backpressureChangePromise_resolve = resolve;
    		    });
    		    stream._backpressure = backpressure;
    		  }
    		  // Class TransformStreamDefaultController
    		  /**
    		   * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
    		   *
    		   * @public
    		   */
    		  var TransformStreamDefaultController = /** @class */function () {
    		    function TransformStreamDefaultController() {
    		      throw new TypeError('Illegal constructor');
    		    }
    		    Object.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
    		      /**
    		       * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
    		       */
    		      get: function () {
    		        if (!IsTransformStreamDefaultController(this)) {
    		          throw defaultControllerBrandCheckException('desiredSize');
    		        }
    		        var readableController = this._controlledTransformStream._readable._readableStreamController;
    		        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
    		      },
    		      enumerable: false,
    		      configurable: true
    		    });
    		    TransformStreamDefaultController.prototype.enqueue = function (chunk) {
    		      if (chunk === void 0) {
    		        chunk = undefined;
    		      }
    		      if (!IsTransformStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException('enqueue');
    		      }
    		      TransformStreamDefaultControllerEnqueue(this, chunk);
    		    };
    		    /**
    		     * Errors both the readable side and the writable side of the controlled transform stream, making all future
    		     * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
    		     */
    		    TransformStreamDefaultController.prototype.error = function (reason) {
    		      if (reason === void 0) {
    		        reason = undefined;
    		      }
    		      if (!IsTransformStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException('error');
    		      }
    		      TransformStreamDefaultControllerError(this, reason);
    		    };
    		    /**
    		     * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
    		     * transformer only needs to consume a portion of the chunks written to the writable side.
    		     */
    		    TransformStreamDefaultController.prototype.terminate = function () {
    		      if (!IsTransformStreamDefaultController(this)) {
    		        throw defaultControllerBrandCheckException('terminate');
    		      }
    		      TransformStreamDefaultControllerTerminate(this);
    		    };
    		    return TransformStreamDefaultController;
    		  }();
    		  Object.defineProperties(TransformStreamDefaultController.prototype, {
    		    enqueue: {
    		      enumerable: true
    		    },
    		    error: {
    		      enumerable: true
    		    },
    		    terminate: {
    		      enumerable: true
    		    },
    		    desiredSize: {
    		      enumerable: true
    		    }
    		  });
    		  if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    		    Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
    		      value: 'TransformStreamDefaultController',
    		      configurable: true
    		    });
    		  }
    		  // Transform Stream Default Controller Abstract Operations
    		  function IsTransformStreamDefaultController(x) {
    		    if (!typeIsObject(x)) {
    		      return false;
    		    }
    		    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
    		      return false;
    		    }
    		    return x instanceof TransformStreamDefaultController;
    		  }
    		  function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
    		    controller._controlledTransformStream = stream;
    		    stream._transformStreamController = controller;
    		    controller._transformAlgorithm = transformAlgorithm;
    		    controller._flushAlgorithm = flushAlgorithm;
    		  }
    		  function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
    		    var controller = Object.create(TransformStreamDefaultController.prototype);
    		    var transformAlgorithm = function (chunk) {
    		      try {
    		        TransformStreamDefaultControllerEnqueue(controller, chunk);
    		        return promiseResolvedWith(undefined);
    		      } catch (transformResultE) {
    		        return promiseRejectedWith(transformResultE);
    		      }
    		    };
    		    var flushAlgorithm = function () {
    		      return promiseResolvedWith(undefined);
    		    };
    		    if (transformer.transform !== undefined) {
    		      transformAlgorithm = function (chunk) {
    		        return transformer.transform(chunk, controller);
    		      };
    		    }
    		    if (transformer.flush !== undefined) {
    		      flushAlgorithm = function () {
    		        return transformer.flush(controller);
    		      };
    		    }
    		    SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
    		  }
    		  function TransformStreamDefaultControllerClearAlgorithms(controller) {
    		    controller._transformAlgorithm = undefined;
    		    controller._flushAlgorithm = undefined;
    		  }
    		  function TransformStreamDefaultControllerEnqueue(controller, chunk) {
    		    var stream = controller._controlledTransformStream;
    		    var readableController = stream._readable._readableStreamController;
    		    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
    		      throw new TypeError('Readable side is not in a state that permits enqueue');
    		    }
    		    // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
    		    // accept TransformStreamDefaultControllerEnqueue() calls.
    		    try {
    		      ReadableStreamDefaultControllerEnqueue(readableController, chunk);
    		    } catch (e) {
    		      // This happens when readableStrategy.size() throws.
    		      TransformStreamErrorWritableAndUnblockWrite(stream, e);
    		      throw stream._readable._storedError;
    		    }
    		    var backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
    		    if (backpressure !== stream._backpressure) {
    		      TransformStreamSetBackpressure(stream, true);
    		    }
    		  }
    		  function TransformStreamDefaultControllerError(controller, e) {
    		    TransformStreamError(controller._controlledTransformStream, e);
    		  }
    		  function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
    		    var transformPromise = controller._transformAlgorithm(chunk);
    		    return transformPromiseWith(transformPromise, undefined, function (r) {
    		      TransformStreamError(controller._controlledTransformStream, r);
    		      throw r;
    		    });
    		  }
    		  function TransformStreamDefaultControllerTerminate(controller) {
    		    var stream = controller._controlledTransformStream;
    		    var readableController = stream._readable._readableStreamController;
    		    ReadableStreamDefaultControllerClose(readableController);
    		    var error = new TypeError('TransformStream terminated');
    		    TransformStreamErrorWritableAndUnblockWrite(stream, error);
    		  }
    		  // TransformStreamDefaultSink Algorithms
    		  function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
    		    var controller = stream._transformStreamController;
    		    if (stream._backpressure) {
    		      var backpressureChangePromise = stream._backpressureChangePromise;
    		      return transformPromiseWith(backpressureChangePromise, function () {
    		        var writable = stream._writable;
    		        var state = writable._state;
    		        if (state === 'erroring') {
    		          throw writable._storedError;
    		        }
    		        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    		      });
    		    }
    		    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    		  }
    		  function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
    		    // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
    		    // errored.
    		    TransformStreamError(stream, reason);
    		    return promiseResolvedWith(undefined);
    		  }
    		  function TransformStreamDefaultSinkCloseAlgorithm(stream) {
    		    // stream._readable cannot change after construction, so caching it across a call to user code is safe.
    		    var readable = stream._readable;
    		    var controller = stream._transformStreamController;
    		    var flushPromise = controller._flushAlgorithm();
    		    TransformStreamDefaultControllerClearAlgorithms(controller);
    		    // Return a promise that is fulfilled with undefined on success.
    		    return transformPromiseWith(flushPromise, function () {
    		      if (readable._state === 'errored') {
    		        throw readable._storedError;
    		      }
    		      ReadableStreamDefaultControllerClose(readable._readableStreamController);
    		    }, function (r) {
    		      TransformStreamError(stream, r);
    		      throw readable._storedError;
    		    });
    		  }
    		  // TransformStreamDefaultSource Algorithms
    		  function TransformStreamDefaultSourcePullAlgorithm(stream) {
    		    // Invariant. Enforced by the promises returned by start() and pull().
    		    TransformStreamSetBackpressure(stream, false);
    		    // Prevent the next pull() call until there is backpressure.
    		    return stream._backpressureChangePromise;
    		  }
    		  // Helper functions for the TransformStreamDefaultController.
    		  function defaultControllerBrandCheckException(name) {
    		    return new TypeError("TransformStreamDefaultController.prototype." + name + " can only be used on a TransformStreamDefaultController");
    		  }
    		  // Helper functions for the TransformStream.
    		  function streamBrandCheckException(name) {
    		    return new TypeError("TransformStream.prototype." + name + " can only be used on a TransformStream");
    		  }
    		  exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
    		  exports.CountQueuingStrategy = CountQueuingStrategy;
    		  exports.ReadableByteStreamController = ReadableByteStreamController;
    		  exports.ReadableStream = ReadableStream;
    		  exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
    		  exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
    		  exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
    		  exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
    		  exports.TransformStream = TransformStream;
    		  exports.TransformStreamDefaultController = TransformStreamDefaultController;
    		  exports.WritableStream = WritableStream;
    		  exports.WritableStreamDefaultController = WritableStreamDefaultController;
    		  exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
    		  Object.defineProperty(exports, '__esModule', {
    		    value: true
    		  });
    		});
    } (ponyfill, ponyfillExports));
    	return ponyfillExports;
    }

    /**
     * @licstart The following is the entire license notice for the
     * JavaScript code in this page
     *
     * Copyright 2023 Mozilla Foundation
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * @licend The above is the entire license notice for the
     * JavaScript code in this page
     */

    (function (module, exports) {
    	(function webpackUniversalModuleDefinition(root,factory){module.exports=factory();})(globalThis,()=>{return(/******/(()=>{// webpackBootstrap
    	/******/var __webpack_modules__=[/* 0 */,/* 1 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.WorkerTask=exports.WorkerMessageHandler=void 0;var _util=__w_pdfjs_require__(2);var _core_utils=__w_pdfjs_require__(136);var _primitives=__w_pdfjs_require__(137);var _pdf_manager=__w_pdfjs_require__(139);var _cleanup_helper=__w_pdfjs_require__(202);var _writer=__w_pdfjs_require__(196);var _is_node=__w_pdfjs_require__(4);var _message_handler=__w_pdfjs_require__(233);var _worker_stream=__w_pdfjs_require__(234);class WorkerTask{constructor(name){this.name=name;this.terminated=false;this._capability=(0, _util.createPromiseCapability)();}get finished(){return this._capability.promise;}finish(){this._capability.resolve();}terminate(){this.terminated=true;}ensureNotTerminated(){if(this.terminated){throw new Error("Worker task was terminated");}}}exports.WorkerTask=WorkerTask;class WorkerMessageHandler{static setup(handler,port){let testMessageProcessed=false;handler.on("test",function(data){if(testMessageProcessed){return;}testMessageProcessed=true;handler.send("test",data instanceof Uint8Array);});handler.on("configure",function(data){(0, _util.setVerbosityLevel)(data.verbosity);});handler.on("GetDocRequest",function(data){return WorkerMessageHandler.createDocumentHandler(data,port);});}static createDocumentHandler(docParams,port){let pdfManager;let terminated=false;let cancelXHRs=null;const WorkerTasks=new Set();const verbosity=(0, _util.getVerbosityLevel)();const{docId,apiVersion}=docParams;const workerVersion='3.4.120';if(apiVersion!==workerVersion){throw new Error(`The API version "${apiVersion}" does not match `+`the Worker version "${workerVersion}".`);}const enumerableProperties=[];for(const property in []){enumerableProperties.push(property);}if(enumerableProperties.length){throw new Error("The `Array.prototype` contains unexpected enumerable properties: "+enumerableProperties.join(", ")+"; thus breaking e.g. `for...in` iteration of `Array`s.");}if(typeof ReadableStream==="undefined"){const partialMsg="The browser/environment lacks native support for critical "+"functionality used by the PDF.js library (e.g. `ReadableStream`); ";if(_is_node.isNodeJS){throw new Error(partialMsg+"please use a `legacy`-build instead.");}throw new Error(partialMsg+"please update to a supported browser.");}const workerHandlerName=docId+"_worker";let handler=new _message_handler.MessageHandler(workerHandlerName,docId,port);function ensureNotTerminated(){if(terminated){throw new Error("Worker was terminated");}}function startWorkerTask(task){WorkerTasks.add(task);}function finishWorkerTask(task){task.finish();WorkerTasks.delete(task);}async function loadDocument(recoveryMode){await pdfManager.ensureDoc("checkHeader");await pdfManager.ensureDoc("parseStartXRef");await pdfManager.ensureDoc("parse",[recoveryMode]);await pdfManager.ensureDoc("checkFirstPage",[recoveryMode]);await pdfManager.ensureDoc("checkLastPage",[recoveryMode]);const isPureXfa=await pdfManager.ensureDoc("isPureXfa");if(isPureXfa){const task=new WorkerTask("loadXfaFonts");startWorkerTask(task);await Promise.all([pdfManager.loadXfaFonts(handler,task).catch(reason=>{}).then(()=>finishWorkerTask(task)),pdfManager.loadXfaImages()]);}const[numPages,fingerprints]=await Promise.all([pdfManager.ensureDoc("numPages"),pdfManager.ensureDoc("fingerprints")]);const htmlForXfa=isPureXfa?await pdfManager.ensureDoc("htmlForXfa"):null;return {numPages,fingerprints,htmlForXfa};}function getPdfManager(_ref){let{data,password,disableAutoFetch,rangeChunkSize,length,docBaseUrl,enableXfa,evaluatorOptions}=_ref;const pdfManagerArgs={source:null,disableAutoFetch,docBaseUrl,docId,enableXfa,evaluatorOptions,handler,length,password,rangeChunkSize};const pdfManagerCapability=(0, _util.createPromiseCapability)();let newPdfManager;if(data){try{pdfManagerArgs.source=data;newPdfManager=new _pdf_manager.LocalPdfManager(pdfManagerArgs);pdfManagerCapability.resolve(newPdfManager);}catch(ex){pdfManagerCapability.reject(ex);}return pdfManagerCapability.promise;}let pdfStream,cachedChunks=[];try{pdfStream=new _worker_stream.PDFWorkerStream(handler);}catch(ex){pdfManagerCapability.reject(ex);return pdfManagerCapability.promise;}const fullRequest=pdfStream.getFullReader();fullRequest.headersReady.then(function(){if(!fullRequest.isRangeSupported){return;}pdfManagerArgs.source=pdfStream;pdfManagerArgs.length=fullRequest.contentLength;pdfManagerArgs.disableAutoFetch=pdfManagerArgs.disableAutoFetch||fullRequest.isStreamingSupported;newPdfManager=new _pdf_manager.NetworkPdfManager(pdfManagerArgs);for(const chunk of cachedChunks){newPdfManager.sendProgressiveData(chunk);}cachedChunks=[];pdfManagerCapability.resolve(newPdfManager);cancelXHRs=null;}).catch(function(reason){pdfManagerCapability.reject(reason);cancelXHRs=null;});let loaded=0;const flushChunks=function(){const pdfFile=(0, _core_utils.arrayBuffersToBytes)(cachedChunks);if(length&&pdfFile.length!==length){(0, _util.warn)("reported HTTP length is different from actual");}try{pdfManagerArgs.source=pdfFile;newPdfManager=new _pdf_manager.LocalPdfManager(pdfManagerArgs);pdfManagerCapability.resolve(newPdfManager);}catch(ex){pdfManagerCapability.reject(ex);}cachedChunks=[];};new Promise(function(resolve,reject){const readChunk=function(_ref2){let{value,done}=_ref2;try{ensureNotTerminated();if(done){if(!newPdfManager){flushChunks();}cancelXHRs=null;return;}loaded+=value.byteLength;if(!fullRequest.isStreamingSupported){handler.send("DocProgress",{loaded,total:Math.max(loaded,fullRequest.contentLength||0)});}if(newPdfManager){newPdfManager.sendProgressiveData(value);}else {cachedChunks.push(value);}fullRequest.read().then(readChunk,reject);}catch(e){reject(e);}};fullRequest.read().then(readChunk,reject);}).catch(function(e){pdfManagerCapability.reject(e);cancelXHRs=null;});cancelXHRs=function(reason){pdfStream.cancelAllRequests(reason);};return pdfManagerCapability.promise;}function setupDoc(data){function onSuccess(doc){ensureNotTerminated();handler.send("GetDoc",{pdfInfo:doc});}function onFailure(ex){ensureNotTerminated();if(ex instanceof _util.PasswordException){const task=new WorkerTask(`PasswordException: response ${ex.code}`);startWorkerTask(task);handler.sendWithPromise("PasswordRequest",ex).then(function(_ref3){let{password}=_ref3;finishWorkerTask(task);pdfManager.updatePassword(password);pdfManagerReady();}).catch(function(){finishWorkerTask(task);handler.send("DocException",ex);});}else if(ex instanceof _util.InvalidPDFException||ex instanceof _util.MissingPDFException||ex instanceof _util.UnexpectedResponseException||ex instanceof _util.UnknownErrorException){handler.send("DocException",ex);}else {handler.send("DocException",new _util.UnknownErrorException(ex.message,ex.toString()));}}function pdfManagerReady(){ensureNotTerminated();loadDocument(false).then(onSuccess,function(reason){ensureNotTerminated();if(!(reason instanceof _core_utils.XRefParseException)){onFailure(reason);return;}pdfManager.requestLoadedStream().then(function(){ensureNotTerminated();loadDocument(true).then(onSuccess,onFailure);});});}ensureNotTerminated();getPdfManager(data).then(function(newPdfManager){if(terminated){newPdfManager.terminate(new _util.AbortException("Worker was terminated."));throw new Error("Worker was terminated");}pdfManager=newPdfManager;pdfManager.requestLoadedStream(true).then(stream=>{handler.send("DataLoaded",{length:stream.bytes.byteLength});});}).then(pdfManagerReady,onFailure);}handler.on("GetPage",function(data){return pdfManager.getPage(data.pageIndex).then(function(page){return Promise.all([pdfManager.ensure(page,"rotate"),pdfManager.ensure(page,"ref"),pdfManager.ensure(page,"userUnit"),pdfManager.ensure(page,"view")]).then(function(_ref4){let[rotate,ref,userUnit,view]=_ref4;return {rotate,ref,userUnit,view};});});});handler.on("GetPageIndex",function(data){const pageRef=_primitives.Ref.get(data.num,data.gen);return pdfManager.ensureCatalog("getPageIndex",[pageRef]);});handler.on("GetDestinations",function(data){return pdfManager.ensureCatalog("destinations");});handler.on("GetDestination",function(data){return pdfManager.ensureCatalog("getDestination",[data.id]);});handler.on("GetPageLabels",function(data){return pdfManager.ensureCatalog("pageLabels");});handler.on("GetPageLayout",function(data){return pdfManager.ensureCatalog("pageLayout");});handler.on("GetPageMode",function(data){return pdfManager.ensureCatalog("pageMode");});handler.on("GetViewerPreferences",function(data){return pdfManager.ensureCatalog("viewerPreferences");});handler.on("GetOpenAction",function(data){return pdfManager.ensureCatalog("openAction");});handler.on("GetAttachments",function(data){return pdfManager.ensureCatalog("attachments");});handler.on("GetJavaScript",function(data){return pdfManager.ensureCatalog("javaScript");});handler.on("GetDocJSActions",function(data){return pdfManager.ensureCatalog("jsActions");});handler.on("GetPageJSActions",function(_ref5){let{pageIndex}=_ref5;return pdfManager.getPage(pageIndex).then(function(page){return pdfManager.ensure(page,"jsActions");});});handler.on("GetOutline",function(data){return pdfManager.ensureCatalog("documentOutline");});handler.on("GetOptionalContentConfig",function(data){return pdfManager.ensureCatalog("optionalContentConfig");});handler.on("GetPermissions",function(data){return pdfManager.ensureCatalog("permissions");});handler.on("GetMetadata",function(data){return Promise.all([pdfManager.ensureDoc("documentInfo"),pdfManager.ensureCatalog("metadata")]);});handler.on("GetMarkInfo",function(data){return pdfManager.ensureCatalog("markInfo");});handler.on("GetData",function(data){return pdfManager.requestLoadedStream().then(function(stream){return stream.bytes;});});handler.on("GetAnnotations",function(_ref6){let{pageIndex,intent}=_ref6;return pdfManager.getPage(pageIndex).then(function(page){const task=new WorkerTask(`GetAnnotations: page ${pageIndex}`);startWorkerTask(task);return page.getAnnotationsData(handler,task,intent).then(data=>{finishWorkerTask(task);return data;},reason=>{finishWorkerTask(task);throw reason;});});});handler.on("GetFieldObjects",function(data){return pdfManager.ensureDoc("fieldObjects");});handler.on("HasJSActions",function(data){return pdfManager.ensureDoc("hasJSActions");});handler.on("GetCalculationOrderIds",function(data){return pdfManager.ensureDoc("calculationOrderIds");});handler.on("SaveDocument",function(_ref7){let{isPureXfa,numPages,annotationStorage,filename}=_ref7;const promises=[pdfManager.requestLoadedStream(),pdfManager.ensureCatalog("acroForm"),pdfManager.ensureCatalog("acroFormRef"),pdfManager.ensureDoc("xref"),pdfManager.ensureDoc("startXRef")];const newAnnotationsByPage=!isPureXfa?(0, _core_utils.getNewAnnotationsMap)(annotationStorage):null;if(newAnnotationsByPage){for(const[pageIndex,annotations]of newAnnotationsByPage){promises.push(pdfManager.getPage(pageIndex).then(page=>{const task=new WorkerTask(`Save (editor): page ${pageIndex}`);return page.saveNewAnnotations(handler,task,annotations).finally(function(){finishWorkerTask(task);});}));}}if(isPureXfa){promises.push(pdfManager.serializeXfaData(annotationStorage));}else {for(let pageIndex=0;pageIndex<numPages;pageIndex++){promises.push(pdfManager.getPage(pageIndex).then(function(page){const task=new WorkerTask(`Save: page ${pageIndex}`);return page.save(handler,task,annotationStorage).finally(function(){finishWorkerTask(task);});}));}}return Promise.all(promises).then(function(_ref8){let[stream,acroForm,acroFormRef,xref,startXRef,...refs]=_ref8;let newRefs=[];let xfaData=null;if(isPureXfa){xfaData=refs[0];if(!xfaData){return stream.bytes;}}else {newRefs=refs.flat(2);if(newRefs.length===0){return stream.bytes;}}const needAppearances=acroFormRef&&acroForm instanceof _primitives.Dict&&newRefs.some(ref=>ref.needAppearances);const xfa=acroForm instanceof _primitives.Dict&&acroForm.get("XFA")||null;let xfaDatasetsRef=null;let hasXfaDatasetsEntry=false;if(Array.isArray(xfa)){for(let i=0,ii=xfa.length;i<ii;i+=2){if(xfa[i]==="datasets"){xfaDatasetsRef=xfa[i+1];hasXfaDatasetsEntry=true;}}if(xfaDatasetsRef===null){xfaDatasetsRef=xref.getNewTemporaryRef();}}else if(xfa){(0, _util.warn)("Unsupported XFA type.");}let newXrefInfo=Object.create(null);if(xref.trailer){const infoObj=Object.create(null);const xrefInfo=xref.trailer.get("Info")||null;if(xrefInfo instanceof _primitives.Dict){xrefInfo.forEach((key,value)=>{if(typeof value==="string"){infoObj[key]=(0, _util.stringToPDFString)(value);}});}newXrefInfo={rootRef:xref.trailer.getRaw("Root")||null,encryptRef:xref.trailer.getRaw("Encrypt")||null,newRef:xref.getNewTemporaryRef(),infoRef:xref.trailer.getRaw("Info")||null,info:infoObj,fileIds:xref.trailer.get("ID")||null,startXRef,filename};}try{return (0,_writer.incrementalUpdate)({originalData:stream.bytes,xrefInfo:newXrefInfo,newRefs,xref,hasXfa:!!xfa,xfaDatasetsRef,hasXfaDatasetsEntry,needAppearances,acroFormRef,acroForm,xfaData});}finally{xref.resetNewTemporaryRef();}});});handler.on("GetOperatorList",function(data,sink){const pageIndex=data.pageIndex;pdfManager.getPage(pageIndex).then(function(page){const task=new WorkerTask(`GetOperatorList: page ${pageIndex}`);startWorkerTask(task);const start=verbosity>=_util.VerbosityLevel.INFOS?Date.now():0;page.getOperatorList({handler,sink,task,intent:data.intent,cacheKey:data.cacheKey,annotationStorage:data.annotationStorage}).then(function(operatorListInfo){finishWorkerTask(task);if(start){(0, _util.info)(`page=${pageIndex+1} - getOperatorList: time=`+`${Date.now()-start}ms, len=${operatorListInfo.length}`);}sink.close();},function(reason){finishWorkerTask(task);if(task.terminated){return;}sink.error(reason);});});});handler.on("GetTextContent",function(data,sink){const pageIndex=data.pageIndex;pdfManager.getPage(pageIndex).then(function(page){const task=new WorkerTask("GetTextContent: page "+pageIndex);startWorkerTask(task);const start=verbosity>=_util.VerbosityLevel.INFOS?Date.now():0;page.extractTextContent({handler,task,sink,includeMarkedContent:data.includeMarkedContent,combineTextItems:data.combineTextItems}).then(function(){finishWorkerTask(task);if(start){(0, _util.info)(`page=${pageIndex+1} - getTextContent: time=`+`${Date.now()-start}ms`);}sink.close();},function(reason){finishWorkerTask(task);if(task.terminated){return;}sink.error(reason);});});});handler.on("GetStructTree",function(data){return pdfManager.getPage(data.pageIndex).then(function(page){return pdfManager.ensure(page,"getStructTree");});});handler.on("FontFallback",function(data){return pdfManager.fontFallback(data.id,handler);});handler.on("Cleanup",function(data){return pdfManager.cleanup(true);});handler.on("Terminate",function(data){terminated=true;const waitOn=[];if(pdfManager){pdfManager.terminate(new _util.AbortException("Worker was terminated."));const cleanupPromise=pdfManager.cleanup();waitOn.push(cleanupPromise);pdfManager=null;}else {(0, _cleanup_helper.clearGlobalCaches)();}if(cancelXHRs){cancelXHRs(new _util.AbortException("Worker was terminated."));}for(const task of WorkerTasks){waitOn.push(task.finished);task.terminate();}return Promise.all(waitOn).then(function(){handler.destroy();handler=null;});});handler.on("Ready",function(data){setupDoc(docParams);docParams=null;});return workerHandlerName;}static initializeFromPort(port){const handler=new _message_handler.MessageHandler("worker","main",port);WorkerMessageHandler.setup(handler,port);handler.send("ready",null);}}exports.WorkerMessageHandler=WorkerMessageHandler;function isMessagePort(maybePort){return typeof maybePort.postMessage==="function"&&"onmessage"in maybePort;}if(typeof window==="undefined"&&!_is_node.isNodeJS&&typeof self!=="undefined"&&isMessagePort(self)){WorkerMessageHandler.initializeFromPort(self);}/***/},/* 2 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.VerbosityLevel=exports.Util=exports.UnknownErrorException=exports.UnexpectedResponseException=exports.UNSUPPORTED_FEATURES=exports.TextRenderingMode=exports.RenderingIntentFlag=exports.PermissionFlag=exports.PasswordResponses=exports.PasswordException=exports.PageActionEventType=exports.OPS=exports.MissingPDFException=exports.LINE_FACTOR=exports.LINE_DESCENT_FACTOR=exports.InvalidPDFException=exports.ImageKind=exports.IDENTITY_MATRIX=exports.FormatError=exports.FeatureTest=exports.FONT_IDENTITY_MATRIX=exports.DocumentActionEventType=exports.CMapCompressionType=exports.BaseException=exports.BASELINE_FACTOR=exports.AnnotationType=exports.AnnotationStateModelType=exports.AnnotationReviewState=exports.AnnotationReplyType=exports.AnnotationMode=exports.AnnotationMarkedState=exports.AnnotationFlag=exports.AnnotationFieldFlag=exports.AnnotationEditorType=exports.AnnotationEditorPrefix=exports.AnnotationEditorParamsType=exports.AnnotationBorderStyleType=exports.AnnotationActionEventType=exports.AbortException=void 0;exports.assert=assert;exports.bytesToString=bytesToString;exports.createPromiseCapability=createPromiseCapability;exports.createValidAbsoluteUrl=createValidAbsoluteUrl;exports.getModificationDate=getModificationDate;exports.getVerbosityLevel=getVerbosityLevel;exports.info=info;exports.isArrayBuffer=isArrayBuffer;exports.isArrayEqual=isArrayEqual;exports.objectFromMap=objectFromMap;exports.objectSize=objectSize;exports.setVerbosityLevel=setVerbosityLevel;exports.shadow=shadow;exports.string32=string32;exports.stringToBytes=stringToBytes;exports.stringToPDFString=stringToPDFString;exports.stringToUTF8String=stringToUTF8String;exports.unreachable=unreachable;exports.utf8StringToString=utf8StringToString;exports.warn=warn;if(!globalThis._pdfjsCompatibilityChecked){globalThis._pdfjsCompatibilityChecked=true;__w_pdfjs_require__(3);}const IDENTITY_MATRIX=[1,0,0,1,0,0];exports.IDENTITY_MATRIX=IDENTITY_MATRIX;const FONT_IDENTITY_MATRIX=[0.001,0,0,0.001,0,0];exports.FONT_IDENTITY_MATRIX=FONT_IDENTITY_MATRIX;const LINE_FACTOR=1.35;exports.LINE_FACTOR=LINE_FACTOR;const LINE_DESCENT_FACTOR=0.35;exports.LINE_DESCENT_FACTOR=LINE_DESCENT_FACTOR;const BASELINE_FACTOR=LINE_DESCENT_FACTOR/LINE_FACTOR;exports.BASELINE_FACTOR=BASELINE_FACTOR;const RenderingIntentFlag={ANY:0x01,DISPLAY:0x02,PRINT:0x04,SAVE:0x08,ANNOTATIONS_FORMS:0x10,ANNOTATIONS_STORAGE:0x20,ANNOTATIONS_DISABLE:0x40,OPLIST:0x100};exports.RenderingIntentFlag=RenderingIntentFlag;const AnnotationMode={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3};exports.AnnotationMode=AnnotationMode;const AnnotationEditorPrefix="pdfjs_internal_editor_";exports.AnnotationEditorPrefix=AnnotationEditorPrefix;const AnnotationEditorType={DISABLE:-1,NONE:0,FREETEXT:3,INK:15};exports.AnnotationEditorType=AnnotationEditorType;const AnnotationEditorParamsType={FREETEXT_SIZE:1,FREETEXT_COLOR:2,FREETEXT_OPACITY:3,INK_COLOR:11,INK_THICKNESS:12,INK_OPACITY:13};exports.AnnotationEditorParamsType=AnnotationEditorParamsType;const PermissionFlag={PRINT:0x04,MODIFY_CONTENTS:0x08,COPY:0x10,MODIFY_ANNOTATIONS:0x20,FILL_INTERACTIVE_FORMS:0x100,COPY_FOR_ACCESSIBILITY:0x200,ASSEMBLE:0x400,PRINT_HIGH_QUALITY:0x800};exports.PermissionFlag=PermissionFlag;const TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};exports.TextRenderingMode=TextRenderingMode;const ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};exports.ImageKind=ImageKind;const AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};exports.AnnotationType=AnnotationType;const AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};exports.AnnotationStateModelType=AnnotationStateModelType;const AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};exports.AnnotationMarkedState=AnnotationMarkedState;const AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};exports.AnnotationReviewState=AnnotationReviewState;const AnnotationReplyType={GROUP:"Group",REPLY:"R"};exports.AnnotationReplyType=AnnotationReplyType;const AnnotationFlag={INVISIBLE:0x01,HIDDEN:0x02,PRINT:0x04,NOZOOM:0x08,NOROTATE:0x10,NOVIEW:0x20,READONLY:0x40,LOCKED:0x80,TOGGLENOVIEW:0x100,LOCKEDCONTENTS:0x200};exports.AnnotationFlag=AnnotationFlag;const AnnotationFieldFlag={READONLY:0x0000001,REQUIRED:0x0000002,NOEXPORT:0x0000004,MULTILINE:0x0001000,PASSWORD:0x0002000,NOTOGGLETOOFF:0x0004000,RADIO:0x0008000,PUSHBUTTON:0x0010000,COMBO:0x0020000,EDIT:0x0040000,SORT:0x0080000,FILESELECT:0x0100000,MULTISELECT:0x0200000,DONOTSPELLCHECK:0x0400000,DONOTSCROLL:0x0800000,COMB:0x1000000,RICHTEXT:0x2000000,RADIOSINUNISON:0x2000000,COMMITONSELCHANGE:0x4000000};exports.AnnotationFieldFlag=AnnotationFieldFlag;const AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};exports.AnnotationBorderStyleType=AnnotationBorderStyleType;const AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"};exports.AnnotationActionEventType=AnnotationActionEventType;const DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"};exports.DocumentActionEventType=DocumentActionEventType;const PageActionEventType={O:"PageOpen",C:"PageClose"};exports.PageActionEventType=PageActionEventType;const VerbosityLevel={ERRORS:0,WARNINGS:1,INFOS:5};exports.VerbosityLevel=VerbosityLevel;const CMapCompressionType={NONE:0,BINARY:1};exports.CMapCompressionType=CMapCompressionType;const OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotation:80,endAnnotation:81,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};exports.OPS=OPS;const UNSUPPORTED_FEATURES={forms:"forms",javaScript:"javaScript",signatures:"signatures",smask:"smask",shadingPattern:"shadingPattern",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontBuildPath:"errorFontBuildPath",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent",errorContentSubStream:"errorContentSubStream"};exports.UNSUPPORTED_FEATURES=UNSUPPORTED_FEATURES;const PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};exports.PasswordResponses=PasswordResponses;let verbosity=VerbosityLevel.WARNINGS;function setVerbosityLevel(level){if(Number.isInteger(level)){verbosity=level;}}function getVerbosityLevel(){return verbosity;}function info(msg){if(verbosity>=VerbosityLevel.INFOS){console.log(`Info: ${msg}`);}}function warn(msg){if(verbosity>=VerbosityLevel.WARNINGS){console.log(`Warning: ${msg}`);}}function unreachable(msg){throw new Error(msg);}function assert(cond,msg){if(!cond){unreachable(msg);}}function _isValidProtocol(url){if(!url){return false;}switch(url.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return true;default:return false;}}function createValidAbsoluteUrl(url){let baseUrl=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;let options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!url){return null;}try{if(options&&typeof url==="string"){if(options.addDefaultProtocol&&url.startsWith("www.")){const dots=url.match(/\./g);if(dots&&dots.length>=2){url=`http://${url}`;}}if(options.tryConvertEncoding){try{url=stringToUTF8String(url);}catch(ex){}}}const absoluteUrl=baseUrl?new URL(url,baseUrl):new URL(url);if(_isValidProtocol(absoluteUrl)){return absoluteUrl;}}catch(ex){}return null;}function shadow(obj,prop,value){let nonSerializable=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;Object.defineProperty(obj,prop,{value,enumerable:!nonSerializable,configurable:true,writable:false});return value;}const BaseException=function BaseExceptionClosure(){function BaseException(message,name){if(this.constructor===BaseException){unreachable("Cannot initialize BaseException.");}this.message=message;this.name=name;}BaseException.prototype=new Error();BaseException.constructor=BaseException;return BaseException;}();exports.BaseException=BaseException;class PasswordException extends BaseException{constructor(msg,code){super(msg,"PasswordException");this.code=code;}}exports.PasswordException=PasswordException;class UnknownErrorException extends BaseException{constructor(msg,details){super(msg,"UnknownErrorException");this.details=details;}}exports.UnknownErrorException=UnknownErrorException;class InvalidPDFException extends BaseException{constructor(msg){super(msg,"InvalidPDFException");}}exports.InvalidPDFException=InvalidPDFException;class MissingPDFException extends BaseException{constructor(msg){super(msg,"MissingPDFException");}}exports.MissingPDFException=MissingPDFException;class UnexpectedResponseException extends BaseException{constructor(msg,status){super(msg,"UnexpectedResponseException");this.status=status;}}exports.UnexpectedResponseException=UnexpectedResponseException;class FormatError extends BaseException{constructor(msg){super(msg,"FormatError");}}exports.FormatError=FormatError;class AbortException extends BaseException{constructor(msg){super(msg,"AbortException");}}exports.AbortException=AbortException;function bytesToString(bytes){if(typeof bytes!=="object"||bytes===null||bytes.length===undefined){unreachable("Invalid argument for bytesToString");}const length=bytes.length;const MAX_ARGUMENT_COUNT=8192;if(length<MAX_ARGUMENT_COUNT){return String.fromCharCode.apply(null,bytes);}const strBuf=[];for(let i=0;i<length;i+=MAX_ARGUMENT_COUNT){const chunkEnd=Math.min(i+MAX_ARGUMENT_COUNT,length);const chunk=bytes.subarray(i,chunkEnd);strBuf.push(String.fromCharCode.apply(null,chunk));}return strBuf.join("");}function stringToBytes(str){if(typeof str!=="string"){unreachable("Invalid argument for stringToBytes");}const length=str.length;const bytes=new Uint8Array(length);for(let i=0;i<length;++i){bytes[i]=str.charCodeAt(i)&0xff;}return bytes;}function string32(value){return String.fromCharCode(value>>24&0xff,value>>16&0xff,value>>8&0xff,value&0xff);}function objectSize(obj){return Object.keys(obj).length;}function objectFromMap(map){const obj=Object.create(null);for(const[key,value]of map){obj[key]=value;}return obj;}function isLittleEndian(){const buffer8=new Uint8Array(4);buffer8[0]=1;const view32=new Uint32Array(buffer8.buffer,0,1);return view32[0]===1;}function isEvalSupported(){try{new Function("");return true;}catch(e){return false;}}class FeatureTest{static get isLittleEndian(){return shadow(this,"isLittleEndian",isLittleEndian());}static get isEvalSupported(){return shadow(this,"isEvalSupported",isEvalSupported());}static get isOffscreenCanvasSupported(){return shadow(this,"isOffscreenCanvasSupported",typeof OffscreenCanvas!=="undefined");}static get platform(){if(typeof navigator==="undefined"){return shadow(this,"platform",{isWin:false,isMac:false});}return shadow(this,"platform",{isWin:navigator.platform.includes("Win"),isMac:navigator.platform.includes("Mac")});}}exports.FeatureTest=FeatureTest;const hexNumbers=[...Array(256).keys()].map(n=>n.toString(16).padStart(2,"0"));class Util{static makeHexColor(r,g,b){return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;}static scaleMinMax(transform,minMax){let temp;if(transform[0]){if(transform[0]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[0];minMax[1]*=transform[0];if(transform[3]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[3];minMax[3]*=transform[3];}else {temp=minMax[0];minMax[0]=minMax[2];minMax[2]=temp;temp=minMax[1];minMax[1]=minMax[3];minMax[3]=temp;if(transform[1]<0){temp=minMax[2];minMax[2]=minMax[3];minMax[3]=temp;}minMax[2]*=transform[1];minMax[3]*=transform[1];if(transform[2]<0){temp=minMax[0];minMax[0]=minMax[1];minMax[1]=temp;}minMax[0]*=transform[2];minMax[1]*=transform[2];}minMax[0]+=transform[4];minMax[1]+=transform[4];minMax[2]+=transform[5];minMax[3]+=transform[5];}static transform(m1,m2){return [m1[0]*m2[0]+m1[2]*m2[1],m1[1]*m2[0]+m1[3]*m2[1],m1[0]*m2[2]+m1[2]*m2[3],m1[1]*m2[2]+m1[3]*m2[3],m1[0]*m2[4]+m1[2]*m2[5]+m1[4],m1[1]*m2[4]+m1[3]*m2[5]+m1[5]];}static applyTransform(p,m){const xt=p[0]*m[0]+p[1]*m[2]+m[4];const yt=p[0]*m[1]+p[1]*m[3]+m[5];return [xt,yt];}static applyInverseTransform(p,m){const d=m[0]*m[3]-m[1]*m[2];const xt=(p[0]*m[3]-p[1]*m[2]+m[2]*m[5]-m[4]*m[3])/d;const yt=(-p[0]*m[1]+p[1]*m[0]+m[4]*m[1]-m[5]*m[0])/d;return [xt,yt];}static getAxialAlignedBoundingBox(r,m){const p1=Util.applyTransform(r,m);const p2=Util.applyTransform(r.slice(2,4),m);const p3=Util.applyTransform([r[0],r[3]],m);const p4=Util.applyTransform([r[2],r[1]],m);return [Math.min(p1[0],p2[0],p3[0],p4[0]),Math.min(p1[1],p2[1],p3[1],p4[1]),Math.max(p1[0],p2[0],p3[0],p4[0]),Math.max(p1[1],p2[1],p3[1],p4[1])];}static inverseTransform(m){const d=m[0]*m[3]-m[1]*m[2];return [m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[4]*m[3])/d,(m[4]*m[1]-m[5]*m[0])/d];}static singularValueDecompose2dScale(m){const transpose=[m[0],m[2],m[1],m[3]];const a=m[0]*transpose[0]+m[1]*transpose[2];const b=m[0]*transpose[1]+m[1]*transpose[3];const c=m[2]*transpose[0]+m[3]*transpose[2];const d=m[2]*transpose[1]+m[3]*transpose[3];const first=(a+d)/2;const second=Math.sqrt((a+d)**2-4*(a*d-c*b))/2;const sx=first+second||1;const sy=first-second||1;return [Math.sqrt(sx),Math.sqrt(sy)];}static normalizeRect(rect){const r=rect.slice(0);if(rect[0]>rect[2]){r[0]=rect[2];r[2]=rect[0];}if(rect[1]>rect[3]){r[1]=rect[3];r[3]=rect[1];}return r;}static intersect(rect1,rect2){const xLow=Math.max(Math.min(rect1[0],rect1[2]),Math.min(rect2[0],rect2[2]));const xHigh=Math.min(Math.max(rect1[0],rect1[2]),Math.max(rect2[0],rect2[2]));if(xLow>xHigh){return null;}const yLow=Math.max(Math.min(rect1[1],rect1[3]),Math.min(rect2[1],rect2[3]));const yHigh=Math.min(Math.max(rect1[1],rect1[3]),Math.max(rect2[1],rect2[3]));if(yLow>yHigh){return null;}return [xLow,yLow,xHigh,yHigh];}static bezierBoundingBox(x0,y0,x1,y1,x2,y2,x3,y3){const tvalues=[],bounds=[[],[]];let a,b,c,t,t1,t2,b2ac,sqrtb2ac;for(let i=0;i<2;++i){if(i===0){b=6*x0-12*x1+6*x2;a=-3*x0+9*x1-9*x2+3*x3;c=3*x1-3*x0;}else {b=6*y0-12*y1+6*y2;a=-3*y0+9*y1-9*y2+3*y3;c=3*y1-3*y0;}if(Math.abs(a)<1e-12){if(Math.abs(b)<1e-12){continue;}t=-c/b;if(0<t&&t<1){tvalues.push(t);}continue;}b2ac=b*b-4*c*a;sqrtb2ac=Math.sqrt(b2ac);if(b2ac<0){continue;}t1=(-b+sqrtb2ac)/(2*a);if(0<t1&&t1<1){tvalues.push(t1);}t2=(-b-sqrtb2ac)/(2*a);if(0<t2&&t2<1){tvalues.push(t2);}}let j=tvalues.length,mt;const jlen=j;while(j--){t=tvalues[j];mt=1-t;bounds[0][j]=mt*mt*mt*x0+3*mt*mt*t*x1+3*mt*t*t*x2+t*t*t*x3;bounds[1][j]=mt*mt*mt*y0+3*mt*mt*t*y1+3*mt*t*t*y2+t*t*t*y3;}bounds[0][jlen]=x0;bounds[1][jlen]=y0;bounds[0][jlen+1]=x3;bounds[1][jlen+1]=y3;bounds[0].length=bounds[1].length=jlen+2;return [Math.min(...bounds[0]),Math.min(...bounds[1]),Math.max(...bounds[0]),Math.max(...bounds[1])];}}exports.Util=Util;const PDFStringTranslateTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2d8,0x2c7,0x2c6,0x2d9,0x2dd,0x2db,0x2da,0x2dc,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x2022,0x2020,0x2021,0x2026,0x2014,0x2013,0x192,0x2044,0x2039,0x203a,0x2212,0x2030,0x201e,0x201c,0x201d,0x2018,0x2019,0x201a,0x2122,0xfb01,0xfb02,0x141,0x152,0x160,0x178,0x17d,0x131,0x142,0x153,0x161,0x17e,0,0x20ac];function stringToPDFString(str){if(str[0]>="\xEF"){let encoding;if(str[0]==="\xFE"&&str[1]==="\xFF"){encoding="utf-16be";}else if(str[0]==="\xFF"&&str[1]==="\xFE"){encoding="utf-16le";}else if(str[0]==="\xEF"&&str[1]==="\xBB"&&str[2]==="\xBF"){encoding="utf-8";}if(encoding){try{const decoder=new TextDecoder(encoding,{fatal:true});const buffer=stringToBytes(str);return decoder.decode(buffer);}catch(ex){warn(`stringToPDFString: "${ex}".`);}}}const strBuf=[];for(let i=0,ii=str.length;i<ii;i++){const code=PDFStringTranslateTable[str.charCodeAt(i)];strBuf.push(code?String.fromCharCode(code):str.charAt(i));}return strBuf.join("");}function stringToUTF8String(str){return decodeURIComponent(escape(str));}function utf8StringToString(str){return unescape(encodeURIComponent(str));}function isArrayBuffer(v){return typeof v==="object"&&v!==null&&v.byteLength!==undefined;}function isArrayEqual(arr1,arr2){if(arr1.length!==arr2.length){return false;}for(let i=0,ii=arr1.length;i<ii;i++){if(arr1[i]!==arr2[i]){return false;}}return true;}function getModificationDate(){let date=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date();const buffer=[date.getUTCFullYear().toString(),(date.getUTCMonth()+1).toString().padStart(2,"0"),date.getUTCDate().toString().padStart(2,"0"),date.getUTCHours().toString().padStart(2,"0"),date.getUTCMinutes().toString().padStart(2,"0"),date.getUTCSeconds().toString().padStart(2,"0")];return buffer.join("");}function createPromiseCapability(){const capability=Object.create(null);let isSettled=false;Object.defineProperty(capability,"settled",{get(){return isSettled;}});capability.promise=new Promise(function(resolve,reject){capability.resolve=function(data){isSettled=true;resolve(data);};capability.reject=function(reason){isSettled=true;reject(reason);};});return capability;}/***/},/* 3 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var _is_node=__w_pdfjs_require__(4);(function checkNodeBtoa(){if(globalThis.btoa||!_is_node.isNodeJS){return;}globalThis.btoa=function(chars){return Buffer.from(chars,"binary").toString("base64");};})();(function checkNodeAtob(){if(globalThis.atob||!_is_node.isNodeJS){return;}globalThis.atob=function(input){return Buffer.from(input,"base64").toString("binary");};})();(function checkDOMMatrix(){if(globalThis.DOMMatrix||!_is_node.isNodeJS){return;}globalThis.DOMMatrix=require$$0.DOMMatrix;})();(function checkPath2D(){if(globalThis.Path2D||!_is_node.isNodeJS){return;}const{CanvasRenderingContext2D}=require$$0;const{polyfillPath2D}=requirePath2dPolyfill_esm();globalThis.CanvasRenderingContext2D=CanvasRenderingContext2D;polyfillPath2D(globalThis);})();(function checkReadableStream(){if(globalThis.ReadableStream||!_is_node.isNodeJS){return;}globalThis.ReadableStream=requirePonyfill().ReadableStream;})();(function checkArrayAt(){if(Array.prototype.at){return;}__w_pdfjs_require__(5);})();(function checkTypedArrayAt(){if(Uint8Array.prototype.at){return;}__w_pdfjs_require__(79);})();(function checkStructuredClone(){if(globalThis.structuredClone){return;}__w_pdfjs_require__(89);})();/***/},/* 4 */ /***/(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.isNodeJS=void 0;const isNodeJS=typeof process==="object"&&process+""==="[object process]"&&!process.versions.nw&&!(process.versions.electron&&process.type&&process.type!=="browser");exports.isNodeJS=isNodeJS;/***/},/* 5 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{__w_pdfjs_require__(6);var entryUnbind=__w_pdfjs_require__(78);module.exports=entryUnbind('Array','at');/***/},/* 6 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var $=__w_pdfjs_require__(7);var toObject=__w_pdfjs_require__(44);var lengthOfArrayLike=__w_pdfjs_require__(68);var toIntegerOrInfinity=__w_pdfjs_require__(66);var addToUnscopables=__w_pdfjs_require__(73);$({target:'Array',proto:true},{at:function at(index){var O=toObject(this);var len=lengthOfArrayLike(O);var relativeIndex=toIntegerOrInfinity(index);var k=relativeIndex>=0?relativeIndex:len+relativeIndex;return k<0||k>=len?undefined:O[k];}});addToUnscopables('at');/***/},/* 7 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var getOwnPropertyDescriptor=__w_pdfjs_require__(9).f;var createNonEnumerableProperty=__w_pdfjs_require__(48);var defineBuiltIn=__w_pdfjs_require__(52);var defineGlobalProperty=__w_pdfjs_require__(42);var copyConstructorProperties=__w_pdfjs_require__(60);var isForced=__w_pdfjs_require__(72);module.exports=function(options,source){var TARGET=options.target;var GLOBAL=options.global;var STATIC=options.stat;var FORCED,target,key,targetProperty,sourceProperty,descriptor;if(GLOBAL){target=global;}else if(STATIC){target=global[TARGET]||defineGlobalProperty(TARGET,{});}else {target=(global[TARGET]||{}).prototype;}if(target)for(key in source){sourceProperty=source[key];if(options.dontCallGetSet){descriptor=getOwnPropertyDescriptor(target,key);targetProperty=descriptor&&descriptor.value;}else targetProperty=target[key];FORCED=isForced(GLOBAL?key:TARGET+(STATIC?'.':'#')+key,options.forced);if(!FORCED&&targetProperty!==undefined){if(typeof sourceProperty==typeof targetProperty)continue;copyConstructorProperties(sourceProperty,targetProperty);}if(options.sham||targetProperty&&targetProperty.sham){createNonEnumerableProperty(sourceProperty,'sham',true);}defineBuiltIn(target,key,sourceProperty,options);}};/***/},/* 8 */ /***/module=>{var check=function(it){return it&&it.Math==Math&&it;};module.exports=check(typeof globalThis=='object'&&globalThis)||check(typeof window=='object'&&window)||check(typeof self=='object'&&self)||check(typeof commonjsGlobal=='object'&&commonjsGlobal)||function(){return this;}()||Function('return this')();/***/},/* 9 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var call=__w_pdfjs_require__(12);var propertyIsEnumerableModule=__w_pdfjs_require__(14);var createPropertyDescriptor=__w_pdfjs_require__(15);var toIndexedObject=__w_pdfjs_require__(16);var toPropertyKey=__w_pdfjs_require__(22);var hasOwn=__w_pdfjs_require__(43);var IE8_DOM_DEFINE=__w_pdfjs_require__(46);var $getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;exports.f=DESCRIPTORS?$getOwnPropertyDescriptor:function getOwnPropertyDescriptor(O,P){O=toIndexedObject(O);P=toPropertyKey(P);if(IE8_DOM_DEFINE)try{return $getOwnPropertyDescriptor(O,P);}catch(error){}if(hasOwn(O,P))return createPropertyDescriptor(!call(propertyIsEnumerableModule.f,O,P),O[P]);};/***/},/* 10 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);module.exports=!fails(function(){return Object.defineProperty({},1,{get:function(){return 7;}})[1]!=7;});/***/},/* 11 */ /***/module=>{module.exports=function(exec){try{return !!exec();}catch(error){return true;}};/***/},/* 12 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var NATIVE_BIND=__w_pdfjs_require__(13);var call=Function.prototype.call;module.exports=NATIVE_BIND?call.bind(call):function(){return call.apply(call,arguments);};/***/},/* 13 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);module.exports=!fails(function(){var test=function(){}.bind();return typeof test!='function'||test.hasOwnProperty('prototype');});/***/},/* 14 */ /***/(__unused_webpack_module,exports)=>{var $propertyIsEnumerable={}.propertyIsEnumerable;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var NASHORN_BUG=getOwnPropertyDescriptor&&!$propertyIsEnumerable.call({1:2},1);exports.f=NASHORN_BUG?function propertyIsEnumerable(V){var descriptor=getOwnPropertyDescriptor(this,V);return !!descriptor&&descriptor.enumerable;}:$propertyIsEnumerable;/***/},/* 15 */ /***/module=>{module.exports=function(bitmap,value){return {enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};/***/},/* 16 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var IndexedObject=__w_pdfjs_require__(17);var requireObjectCoercible=__w_pdfjs_require__(20);module.exports=function(it){return IndexedObject(requireObjectCoercible(it));};/***/},/* 17 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var fails=__w_pdfjs_require__(11);var classof=__w_pdfjs_require__(19);var $Object=Object;var split=uncurryThis(''.split);module.exports=fails(function(){return !$Object('z').propertyIsEnumerable(0);})?function(it){return classof(it)=='String'?split(it,''):$Object(it);}:$Object;/***/},/* 18 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var NATIVE_BIND=__w_pdfjs_require__(13);var FunctionPrototype=Function.prototype;var call=FunctionPrototype.call;var uncurryThisWithBind=NATIVE_BIND&&FunctionPrototype.bind.bind(call,call);module.exports=NATIVE_BIND?uncurryThisWithBind:function(fn){return function(){return call.apply(fn,arguments);};};/***/},/* 19 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var toString=uncurryThis({}.toString);var stringSlice=uncurryThis(''.slice);module.exports=function(it){return stringSlice(toString(it),8,-1);};/***/},/* 20 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isNullOrUndefined=__w_pdfjs_require__(21);var $TypeError=TypeError;module.exports=function(it){if(isNullOrUndefined(it))throw $TypeError("Can't call method on "+it);return it;};/***/},/* 21 */ /***/module=>{module.exports=function(it){return it===null||it===undefined;};/***/},/* 22 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toPrimitive=__w_pdfjs_require__(23);var isSymbol=__w_pdfjs_require__(27);module.exports=function(argument){var key=toPrimitive(argument,'string');return isSymbol(key)?key:key+'';};/***/},/* 23 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var call=__w_pdfjs_require__(12);var isObject=__w_pdfjs_require__(24);var isSymbol=__w_pdfjs_require__(27);var getMethod=__w_pdfjs_require__(34);var ordinaryToPrimitive=__w_pdfjs_require__(37);var wellKnownSymbol=__w_pdfjs_require__(38);var $TypeError=TypeError;var TO_PRIMITIVE=wellKnownSymbol('toPrimitive');module.exports=function(input,pref){if(!isObject(input)||isSymbol(input))return input;var exoticToPrim=getMethod(input,TO_PRIMITIVE);var result;if(exoticToPrim){if(pref===undefined)pref='default';result=call(exoticToPrim,input,pref);if(!isObject(result)||isSymbol(result))return result;throw $TypeError("Can't convert object to primitive value");}if(pref===undefined)pref='number';return ordinaryToPrimitive(input,pref);};/***/},/* 24 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isCallable=__w_pdfjs_require__(25);var $documentAll=__w_pdfjs_require__(26);var documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(it){return typeof it=='object'?it!==null:isCallable(it)||it===documentAll;}:function(it){return typeof it=='object'?it!==null:isCallable(it);};/***/},/* 25 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var $documentAll=__w_pdfjs_require__(26);var documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(argument){return typeof argument=='function'||argument===documentAll;}:function(argument){return typeof argument=='function';};/***/},/* 26 */ /***/module=>{var documentAll=typeof document=='object'&&document.all;var IS_HTMLDDA=typeof documentAll=='undefined'&&documentAll!==undefined;module.exports={all:documentAll,IS_HTMLDDA:IS_HTMLDDA};/***/},/* 27 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var getBuiltIn=__w_pdfjs_require__(28);var isCallable=__w_pdfjs_require__(25);var isPrototypeOf=__w_pdfjs_require__(29);var USE_SYMBOL_AS_UID=__w_pdfjs_require__(30);var $Object=Object;module.exports=USE_SYMBOL_AS_UID?function(it){return typeof it=='symbol';}:function(it){var $Symbol=getBuiltIn('Symbol');return isCallable($Symbol)&&isPrototypeOf($Symbol.prototype,$Object(it));};/***/},/* 28 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var isCallable=__w_pdfjs_require__(25);var aFunction=function(argument){return isCallable(argument)?argument:undefined;};module.exports=function(namespace,method){return arguments.length<2?aFunction(global[namespace]):global[namespace]&&global[namespace][method];};/***/},/* 29 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);module.exports=uncurryThis({}.isPrototypeOf);/***/},/* 30 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var NATIVE_SYMBOL=__w_pdfjs_require__(31);module.exports=NATIVE_SYMBOL&&!Symbol.sham&&typeof Symbol.iterator=='symbol';/***/},/* 31 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var V8_VERSION=__w_pdfjs_require__(32);var fails=__w_pdfjs_require__(11);module.exports=!!Object.getOwnPropertySymbols&&!fails(function(){var symbol=Symbol();return !String(symbol)||!(Object(symbol)instanceof Symbol)||!Symbol.sham&&V8_VERSION&&V8_VERSION<41;});/***/},/* 32 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var userAgent=__w_pdfjs_require__(33);var process=global.process;var Deno=global.Deno;var versions=process&&process.versions||Deno&&Deno.version;var v8=versions&&versions.v8;var match,version;if(v8){match=v8.split('.');version=match[0]>0&&match[0]<4?1:+(match[0]+match[1]);}if(!version&&userAgent){match=userAgent.match(/Edge\/(\d+)/);if(!match||match[1]>=74){match=userAgent.match(/Chrome\/(\d+)/);if(match)version=+match[1];}}module.exports=version;/***/},/* 33 */ /***/module=>{module.exports=typeof navigator!='undefined'&&String(navigator.userAgent)||'';/***/},/* 34 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var aCallable=__w_pdfjs_require__(35);var isNullOrUndefined=__w_pdfjs_require__(21);module.exports=function(V,P){var func=V[P];return isNullOrUndefined(func)?undefined:aCallable(func);};/***/},/* 35 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isCallable=__w_pdfjs_require__(25);var tryToString=__w_pdfjs_require__(36);var $TypeError=TypeError;module.exports=function(argument){if(isCallable(argument))return argument;throw $TypeError(tryToString(argument)+' is not a function');};/***/},/* 36 */ /***/module=>{var $String=String;module.exports=function(argument){try{return $String(argument);}catch(error){return 'Object';}};/***/},/* 37 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var call=__w_pdfjs_require__(12);var isCallable=__w_pdfjs_require__(25);var isObject=__w_pdfjs_require__(24);var $TypeError=TypeError;module.exports=function(input,pref){var fn,val;if(pref==='string'&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;if(isCallable(fn=input.valueOf)&&!isObject(val=call(fn,input)))return val;if(pref!=='string'&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;throw $TypeError("Can't convert object to primitive value");};/***/},/* 38 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var shared=__w_pdfjs_require__(39);var hasOwn=__w_pdfjs_require__(43);var uid=__w_pdfjs_require__(45);var NATIVE_SYMBOL=__w_pdfjs_require__(31);var USE_SYMBOL_AS_UID=__w_pdfjs_require__(30);var Symbol=global.Symbol;var WellKnownSymbolsStore=shared('wks');var createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol['for']||Symbol:Symbol&&Symbol.withoutSetter||uid;module.exports=function(name){if(!hasOwn(WellKnownSymbolsStore,name)){WellKnownSymbolsStore[name]=NATIVE_SYMBOL&&hasOwn(Symbol,name)?Symbol[name]:createWellKnownSymbol('Symbol.'+name);}return WellKnownSymbolsStore[name];};/***/},/* 39 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var IS_PURE=__w_pdfjs_require__(40);var store=__w_pdfjs_require__(41);(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:'3.27.2',mode:IS_PURE?'pure':'global',copyright:'© 2014-2023 Denis Pushkarev (zloirock.ru)',license:'https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE',source:'https://github.com/zloirock/core-js'});/***/},/* 40 */ /***/module=>{module.exports=false;/***/},/* 41 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var defineGlobalProperty=__w_pdfjs_require__(42);var SHARED='__core-js_shared__';var store=global[SHARED]||defineGlobalProperty(SHARED,{});module.exports=store;/***/},/* 42 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var defineProperty=Object.defineProperty;module.exports=function(key,value){try{defineProperty(global,key,{value:value,configurable:true,writable:true});}catch(error){global[key]=value;}return value;};/***/},/* 43 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var toObject=__w_pdfjs_require__(44);var hasOwnProperty=uncurryThis({}.hasOwnProperty);module.exports=Object.hasOwn||function hasOwn(it,key){return hasOwnProperty(toObject(it),key);};/***/},/* 44 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var requireObjectCoercible=__w_pdfjs_require__(20);var $Object=Object;module.exports=function(argument){return $Object(requireObjectCoercible(argument));};/***/},/* 45 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var id=0;var postfix=Math.random();var toString=uncurryThis(1.0.toString);module.exports=function(key){return 'Symbol('+(key===undefined?'':key)+')_'+toString(++id+postfix,36);};/***/},/* 46 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var fails=__w_pdfjs_require__(11);var createElement=__w_pdfjs_require__(47);module.exports=!DESCRIPTORS&&!fails(function(){return Object.defineProperty(createElement('div'),'a',{get:function(){return 7;}}).a!=7;});/***/},/* 47 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var isObject=__w_pdfjs_require__(24);var document=global.document;var EXISTS=isObject(document)&&isObject(document.createElement);module.exports=function(it){return EXISTS?document.createElement(it):{};};/***/},/* 48 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var definePropertyModule=__w_pdfjs_require__(49);var createPropertyDescriptor=__w_pdfjs_require__(15);module.exports=DESCRIPTORS?function(object,key,value){return definePropertyModule.f(object,key,createPropertyDescriptor(1,value));}:function(object,key,value){object[key]=value;return object;};/***/},/* 49 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var IE8_DOM_DEFINE=__w_pdfjs_require__(46);var V8_PROTOTYPE_DEFINE_BUG=__w_pdfjs_require__(50);var anObject=__w_pdfjs_require__(51);var toPropertyKey=__w_pdfjs_require__(22);var $TypeError=TypeError;var $defineProperty=Object.defineProperty;var $getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var ENUMERABLE='enumerable';var CONFIGURABLE='configurable';var WRITABLE='writable';exports.f=DESCRIPTORS?V8_PROTOTYPE_DEFINE_BUG?function defineProperty(O,P,Attributes){anObject(O);P=toPropertyKey(P);anObject(Attributes);if(typeof O==='function'&&P==='prototype'&&'value'in Attributes&&WRITABLE in Attributes&&!Attributes[WRITABLE]){var current=$getOwnPropertyDescriptor(O,P);if(current&&current[WRITABLE]){O[P]=Attributes.value;Attributes={configurable:CONFIGURABLE in Attributes?Attributes[CONFIGURABLE]:current[CONFIGURABLE],enumerable:ENUMERABLE in Attributes?Attributes[ENUMERABLE]:current[ENUMERABLE],writable:false};}}return $defineProperty(O,P,Attributes);}:$defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPropertyKey(P);anObject(Attributes);if(IE8_DOM_DEFINE)try{return $defineProperty(O,P,Attributes);}catch(error){}if('get'in Attributes||'set'in Attributes)throw $TypeError('Accessors not supported');if('value'in Attributes)O[P]=Attributes.value;return O;};/***/},/* 50 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var fails=__w_pdfjs_require__(11);module.exports=DESCRIPTORS&&fails(function(){return Object.defineProperty(function(){},'prototype',{value:42,writable:false}).prototype!=42;});/***/},/* 51 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isObject=__w_pdfjs_require__(24);var $String=String;var $TypeError=TypeError;module.exports=function(argument){if(isObject(argument))return argument;throw $TypeError($String(argument)+' is not an object');};/***/},/* 52 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isCallable=__w_pdfjs_require__(25);var definePropertyModule=__w_pdfjs_require__(49);var makeBuiltIn=__w_pdfjs_require__(53);var defineGlobalProperty=__w_pdfjs_require__(42);module.exports=function(O,key,value,options){if(!options)options={};var simple=options.enumerable;var name=options.name!==undefined?options.name:key;if(isCallable(value))makeBuiltIn(value,name,options);if(options.global){if(simple)O[key]=value;else defineGlobalProperty(key,value);}else {try{if(!options.unsafe)delete O[key];else if(O[key])simple=true;}catch(error){}if(simple)O[key]=value;else definePropertyModule.f(O,key,{value:value,enumerable:false,configurable:!options.nonConfigurable,writable:!options.nonWritable});}return O;};/***/},/* 53 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var fails=__w_pdfjs_require__(11);var isCallable=__w_pdfjs_require__(25);var hasOwn=__w_pdfjs_require__(43);var DESCRIPTORS=__w_pdfjs_require__(10);var CONFIGURABLE_FUNCTION_NAME=__w_pdfjs_require__(54).CONFIGURABLE;var inspectSource=__w_pdfjs_require__(55);var InternalStateModule=__w_pdfjs_require__(56);var enforceInternalState=InternalStateModule.enforce;var getInternalState=InternalStateModule.get;var $String=String;var defineProperty=Object.defineProperty;var stringSlice=uncurryThis(''.slice);var replace=uncurryThis(''.replace);var join=uncurryThis([].join);var CONFIGURABLE_LENGTH=DESCRIPTORS&&!fails(function(){return defineProperty(function(){},'length',{value:8}).length!==8;});var TEMPLATE=String(String).split('String');var makeBuiltIn=module.exports=function(value,name,options){if(stringSlice($String(name),0,7)==='Symbol('){name='['+replace($String(name),/^Symbol\(([^)]*)\)/,'$1')+']';}if(options&&options.getter)name='get '+name;if(options&&options.setter)name='set '+name;if(!hasOwn(value,'name')||CONFIGURABLE_FUNCTION_NAME&&value.name!==name){if(DESCRIPTORS)defineProperty(value,'name',{value:name,configurable:true});else value.name=name;}if(CONFIGURABLE_LENGTH&&options&&hasOwn(options,'arity')&&value.length!==options.arity){defineProperty(value,'length',{value:options.arity});}try{if(options&&hasOwn(options,'constructor')&&options.constructor){if(DESCRIPTORS)defineProperty(value,'prototype',{writable:false});}else if(value.prototype)value.prototype=undefined;}catch(error){}var state=enforceInternalState(value);if(!hasOwn(state,'source')){state.source=join(TEMPLATE,typeof name=='string'?name:'');}return value;};Function.prototype.toString=makeBuiltIn(function toString(){return isCallable(this)&&getInternalState(this).source||inspectSource(this);},'toString');/***/},/* 54 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var hasOwn=__w_pdfjs_require__(43);var FunctionPrototype=Function.prototype;var getDescriptor=DESCRIPTORS&&Object.getOwnPropertyDescriptor;var EXISTS=hasOwn(FunctionPrototype,'name');var PROPER=EXISTS&&function something(){}.name==='something';var CONFIGURABLE=EXISTS&&(!DESCRIPTORS||DESCRIPTORS&&getDescriptor(FunctionPrototype,'name').configurable);module.exports={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE};/***/},/* 55 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var isCallable=__w_pdfjs_require__(25);var store=__w_pdfjs_require__(41);var functionToString=uncurryThis(Function.toString);if(!isCallable(store.inspectSource)){store.inspectSource=function(it){return functionToString(it);};}module.exports=store.inspectSource;/***/},/* 56 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var NATIVE_WEAK_MAP=__w_pdfjs_require__(57);var global=__w_pdfjs_require__(8);var isObject=__w_pdfjs_require__(24);var createNonEnumerableProperty=__w_pdfjs_require__(48);var hasOwn=__w_pdfjs_require__(43);var shared=__w_pdfjs_require__(41);var sharedKey=__w_pdfjs_require__(58);var hiddenKeys=__w_pdfjs_require__(59);var OBJECT_ALREADY_INITIALIZED='Object already initialized';var TypeError=global.TypeError;var WeakMap=global.WeakMap;var set,get,has;var enforce=function(it){return has(it)?get(it):set(it,{});};var getterFor=function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE){throw TypeError('Incompatible receiver, '+TYPE+' required');}return state;};};if(NATIVE_WEAK_MAP||shared.state){var store=shared.state||(shared.state=new WeakMap());store.get=store.get;store.has=store.has;store.set=store.set;set=function(it,metadata){if(store.has(it))throw TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;store.set(it,metadata);return metadata;};get=function(it){return store.get(it)||{};};has=function(it){return store.has(it);};}else {var STATE=sharedKey('state');hiddenKeys[STATE]=true;set=function(it,metadata){if(hasOwn(it,STATE))throw TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;createNonEnumerableProperty(it,STATE,metadata);return metadata;};get=function(it){return hasOwn(it,STATE)?it[STATE]:{};};has=function(it){return hasOwn(it,STATE);};}module.exports={set:set,get:get,has:has,enforce:enforce,getterFor:getterFor};/***/},/* 57 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var isCallable=__w_pdfjs_require__(25);var WeakMap=global.WeakMap;module.exports=isCallable(WeakMap)&&/native code/.test(String(WeakMap));/***/},/* 58 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var shared=__w_pdfjs_require__(39);var uid=__w_pdfjs_require__(45);var keys=shared('keys');module.exports=function(key){return keys[key]||(keys[key]=uid(key));};/***/},/* 59 */ /***/module=>{module.exports={};/***/},/* 60 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var hasOwn=__w_pdfjs_require__(43);var ownKeys=__w_pdfjs_require__(61);var getOwnPropertyDescriptorModule=__w_pdfjs_require__(9);var definePropertyModule=__w_pdfjs_require__(49);module.exports=function(target,source,exceptions){var keys=ownKeys(source);var defineProperty=definePropertyModule.f;var getOwnPropertyDescriptor=getOwnPropertyDescriptorModule.f;for(var i=0;i<keys.length;i++){var key=keys[i];if(!hasOwn(target,key)&&!(exceptions&&hasOwn(exceptions,key))){defineProperty(target,key,getOwnPropertyDescriptor(source,key));}}};/***/},/* 61 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var getBuiltIn=__w_pdfjs_require__(28);var uncurryThis=__w_pdfjs_require__(18);var getOwnPropertyNamesModule=__w_pdfjs_require__(62);var getOwnPropertySymbolsModule=__w_pdfjs_require__(71);var anObject=__w_pdfjs_require__(51);var concat=uncurryThis([].concat);module.exports=getBuiltIn('Reflect','ownKeys')||function ownKeys(it){var keys=getOwnPropertyNamesModule.f(anObject(it));var getOwnPropertySymbols=getOwnPropertySymbolsModule.f;return getOwnPropertySymbols?concat(keys,getOwnPropertySymbols(it)):keys;};/***/},/* 62 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var internalObjectKeys=__w_pdfjs_require__(63);var enumBugKeys=__w_pdfjs_require__(70);var hiddenKeys=enumBugKeys.concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return internalObjectKeys(O,hiddenKeys);};/***/},/* 63 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var hasOwn=__w_pdfjs_require__(43);var toIndexedObject=__w_pdfjs_require__(16);var indexOf=__w_pdfjs_require__(64).indexOf;var hiddenKeys=__w_pdfjs_require__(59);var push=uncurryThis([].push);module.exports=function(object,names){var O=toIndexedObject(object);var i=0;var result=[];var key;for(key in O)!hasOwn(hiddenKeys,key)&&hasOwn(O,key)&&push(result,key);while(names.length>i)if(hasOwn(O,key=names[i++])){~indexOf(result,key)||push(result,key);}return result;};/***/},/* 64 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toIndexedObject=__w_pdfjs_require__(16);var toAbsoluteIndex=__w_pdfjs_require__(65);var lengthOfArrayLike=__w_pdfjs_require__(68);var createMethod=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIndexedObject($this);var length=lengthOfArrayLike(O);var index=toAbsoluteIndex(fromIndex,length);var value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true;}else for(;length>index;index++){if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;}return !IS_INCLUDES&&-1;};};module.exports={includes:createMethod(true),indexOf:createMethod(false)};/***/},/* 65 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toIntegerOrInfinity=__w_pdfjs_require__(66);var max=Math.max;var min=Math.min;module.exports=function(index,length){var integer=toIntegerOrInfinity(index);return integer<0?max(integer+length,0):min(integer,length);};/***/},/* 66 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var trunc=__w_pdfjs_require__(67);module.exports=function(argument){var number=+argument;return number!==number||number===0?0:trunc(number);};/***/},/* 67 */ /***/module=>{var ceil=Math.ceil;var floor=Math.floor;module.exports=Math.trunc||function trunc(x){var n=+x;return (n>0?floor:ceil)(n);};/***/},/* 68 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toLength=__w_pdfjs_require__(69);module.exports=function(obj){return toLength(obj.length);};/***/},/* 69 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toIntegerOrInfinity=__w_pdfjs_require__(66);var min=Math.min;module.exports=function(argument){return argument>0?min(toIntegerOrInfinity(argument),0x1FFFFFFFFFFFFF):0;};/***/},/* 70 */ /***/module=>{module.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];/***/},/* 71 */ /***/(__unused_webpack_module,exports)=>{exports.f=Object.getOwnPropertySymbols;/***/},/* 72 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);var isCallable=__w_pdfjs_require__(25);var replacement=/#|\.prototype\./;var isForced=function(feature,detection){var value=data[normalize(feature)];return value==POLYFILL?true:value==NATIVE?false:isCallable(detection)?fails(detection):!!detection;};var normalize=isForced.normalize=function(string){return String(string).replace(replacement,'.').toLowerCase();};var data=isForced.data={};var NATIVE=isForced.NATIVE='N';var POLYFILL=isForced.POLYFILL='P';module.exports=isForced;/***/},/* 73 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var wellKnownSymbol=__w_pdfjs_require__(38);var create=__w_pdfjs_require__(74);var defineProperty=__w_pdfjs_require__(49).f;var UNSCOPABLES=wellKnownSymbol('unscopables');var ArrayPrototype=Array.prototype;if(ArrayPrototype[UNSCOPABLES]==undefined){defineProperty(ArrayPrototype,UNSCOPABLES,{configurable:true,value:create(null)});}module.exports=function(key){ArrayPrototype[UNSCOPABLES][key]=true;};/***/},/* 74 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var anObject=__w_pdfjs_require__(51);var definePropertiesModule=__w_pdfjs_require__(75);var enumBugKeys=__w_pdfjs_require__(70);var hiddenKeys=__w_pdfjs_require__(59);var html=__w_pdfjs_require__(77);var documentCreateElement=__w_pdfjs_require__(47);var sharedKey=__w_pdfjs_require__(58);var GT='>';var LT='<';var PROTOTYPE='prototype';var SCRIPT='script';var IE_PROTO=sharedKey('IE_PROTO');var EmptyConstructor=function(){};var scriptTag=function(content){return LT+SCRIPT+GT+content+LT+'/'+SCRIPT+GT;};var NullProtoObjectViaActiveX=function(activeXDocument){activeXDocument.write(scriptTag(''));activeXDocument.close();var temp=activeXDocument.parentWindow.Object;activeXDocument=null;return temp;};var NullProtoObjectViaIFrame=function(){var iframe=documentCreateElement('iframe');var JS='java'+SCRIPT+':';var iframeDocument;iframe.style.display='none';html.appendChild(iframe);iframe.src=String(JS);iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(scriptTag('document.F=Object'));iframeDocument.close();return iframeDocument.F;};var activeXDocument;var NullProtoObject=function(){try{activeXDocument=new ActiveXObject('htmlfile');}catch(error){}NullProtoObject=typeof document!='undefined'?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);var length=enumBugKeys.length;while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];return NullProtoObject();};hiddenKeys[IE_PROTO]=true;module.exports=Object.create||function create(O,Properties){var result;if(O!==null){EmptyConstructor[PROTOTYPE]=anObject(O);result=new EmptyConstructor();EmptyConstructor[PROTOTYPE]=null;result[IE_PROTO]=O;}else result=NullProtoObject();return Properties===undefined?result:definePropertiesModule.f(result,Properties);};/***/},/* 75 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{var DESCRIPTORS=__w_pdfjs_require__(10);var V8_PROTOTYPE_DEFINE_BUG=__w_pdfjs_require__(50);var definePropertyModule=__w_pdfjs_require__(49);var anObject=__w_pdfjs_require__(51);var toIndexedObject=__w_pdfjs_require__(16);var objectKeys=__w_pdfjs_require__(76);exports.f=DESCRIPTORS&&!V8_PROTOTYPE_DEFINE_BUG?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var props=toIndexedObject(Properties);var keys=objectKeys(Properties);var length=keys.length;var index=0;var key;while(length>index)definePropertyModule.f(O,key=keys[index++],props[key]);return O;};/***/},/* 76 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var internalObjectKeys=__w_pdfjs_require__(63);var enumBugKeys=__w_pdfjs_require__(70);module.exports=Object.keys||function keys(O){return internalObjectKeys(O,enumBugKeys);};/***/},/* 77 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var getBuiltIn=__w_pdfjs_require__(28);module.exports=getBuiltIn('document','documentElement');/***/},/* 78 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);var uncurryThis=__w_pdfjs_require__(18);module.exports=function(CONSTRUCTOR,METHOD){return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);};/***/},/* 79 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{__w_pdfjs_require__(80);/***/},/* 80 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var ArrayBufferViewCore=__w_pdfjs_require__(81);var lengthOfArrayLike=__w_pdfjs_require__(68);var toIntegerOrInfinity=__w_pdfjs_require__(66);var aTypedArray=ArrayBufferViewCore.aTypedArray;var exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod;exportTypedArrayMethod('at',function at(index){var O=aTypedArray(this);var len=lengthOfArrayLike(O);var relativeIndex=toIntegerOrInfinity(index);var k=relativeIndex>=0?relativeIndex:len+relativeIndex;return k<0||k>=len?undefined:O[k];});/***/},/* 81 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var NATIVE_ARRAY_BUFFER=__w_pdfjs_require__(82);var DESCRIPTORS=__w_pdfjs_require__(10);var global=__w_pdfjs_require__(8);var isCallable=__w_pdfjs_require__(25);var isObject=__w_pdfjs_require__(24);var hasOwn=__w_pdfjs_require__(43);var classof=__w_pdfjs_require__(83);var tryToString=__w_pdfjs_require__(36);var createNonEnumerableProperty=__w_pdfjs_require__(48);var defineBuiltIn=__w_pdfjs_require__(52);var defineProperty=__w_pdfjs_require__(49).f;var isPrototypeOf=__w_pdfjs_require__(29);var getPrototypeOf=__w_pdfjs_require__(85);var setPrototypeOf=__w_pdfjs_require__(87);var wellKnownSymbol=__w_pdfjs_require__(38);var uid=__w_pdfjs_require__(45);var InternalStateModule=__w_pdfjs_require__(56);var enforceInternalState=InternalStateModule.enforce;var getInternalState=InternalStateModule.get;var Int8Array=global.Int8Array;var Int8ArrayPrototype=Int8Array&&Int8Array.prototype;var Uint8ClampedArray=global.Uint8ClampedArray;var Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype;var TypedArray=Int8Array&&getPrototypeOf(Int8Array);var TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype);var ObjectPrototype=Object.prototype;var TypeError=global.TypeError;var TO_STRING_TAG=wellKnownSymbol('toStringTag');var TYPED_ARRAY_TAG=uid('TYPED_ARRAY_TAG');var TYPED_ARRAY_CONSTRUCTOR='TypedArrayConstructor';var NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf&&classof(global.opera)!=='Opera';var TYPED_ARRAY_TAG_REQUIRED=false;var NAME,Constructor,Prototype;var TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8};var BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8};var isView=function isView(it){if(!isObject(it))return false;var klass=classof(it);return klass==='DataView'||hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass);};var getTypedArrayConstructor=function(it){var proto=getPrototypeOf(it);if(!isObject(proto))return;var state=getInternalState(proto);return state&&hasOwn(state,TYPED_ARRAY_CONSTRUCTOR)?state[TYPED_ARRAY_CONSTRUCTOR]:getTypedArrayConstructor(proto);};var isTypedArray=function(it){if(!isObject(it))return false;var klass=classof(it);return hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass);};var aTypedArray=function(it){if(isTypedArray(it))return it;throw TypeError('Target is not a typed array');};var aTypedArrayConstructor=function(C){if(isCallable(C)&&(!setPrototypeOf||isPrototypeOf(TypedArray,C)))return C;throw TypeError(tryToString(C)+' is not a typed array constructor');};var exportTypedArrayMethod=function(KEY,property,forced,options){if(!DESCRIPTORS)return;if(forced)for(var ARRAY in TypedArrayConstructorsList){var TypedArrayConstructor=global[ARRAY];if(TypedArrayConstructor&&hasOwn(TypedArrayConstructor.prototype,KEY))try{delete TypedArrayConstructor.prototype[KEY];}catch(error){try{TypedArrayConstructor.prototype[KEY]=property;}catch(error2){}}}if(!TypedArrayPrototype[KEY]||forced){defineBuiltIn(TypedArrayPrototype,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[KEY]||property,options);}};var exportTypedArrayStaticMethod=function(KEY,property,forced){var ARRAY,TypedArrayConstructor;if(!DESCRIPTORS)return;if(setPrototypeOf){if(forced)for(ARRAY in TypedArrayConstructorsList){TypedArrayConstructor=global[ARRAY];if(TypedArrayConstructor&&hasOwn(TypedArrayConstructor,KEY))try{delete TypedArrayConstructor[KEY];}catch(error){}}if(!TypedArray[KEY]||forced){try{return defineBuiltIn(TypedArray,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&TypedArray[KEY]||property);}catch(error){}}else return;}for(ARRAY in TypedArrayConstructorsList){TypedArrayConstructor=global[ARRAY];if(TypedArrayConstructor&&(!TypedArrayConstructor[KEY]||forced)){defineBuiltIn(TypedArrayConstructor,KEY,property);}}};for(NAME in TypedArrayConstructorsList){Constructor=global[NAME];Prototype=Constructor&&Constructor.prototype;if(Prototype)enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor;else NATIVE_ARRAY_BUFFER_VIEWS=false;}for(NAME in BigIntArrayConstructorsList){Constructor=global[NAME];Prototype=Constructor&&Constructor.prototype;if(Prototype)enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor;}if(!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable(TypedArray)||TypedArray===Function.prototype){TypedArray=function TypedArray(){throw TypeError('Incorrect invocation');};if(NATIVE_ARRAY_BUFFER_VIEWS)for(NAME in TypedArrayConstructorsList){if(global[NAME])setPrototypeOf(global[NAME],TypedArray);}}if(!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype){TypedArrayPrototype=TypedArray.prototype;if(NATIVE_ARRAY_BUFFER_VIEWS)for(NAME in TypedArrayConstructorsList){if(global[NAME])setPrototypeOf(global[NAME].prototype,TypedArrayPrototype);}}if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype){setPrototypeOf(Uint8ClampedArrayPrototype,TypedArrayPrototype);}if(DESCRIPTORS&&!hasOwn(TypedArrayPrototype,TO_STRING_TAG)){TYPED_ARRAY_TAG_REQUIRED=true;defineProperty(TypedArrayPrototype,TO_STRING_TAG,{get:function(){return isObject(this)?this[TYPED_ARRAY_TAG]:undefined;}});for(NAME in TypedArrayConstructorsList)if(global[NAME]){createNonEnumerableProperty(global[NAME],TYPED_ARRAY_TAG,NAME);}}module.exports={NATIVE_ARRAY_BUFFER_VIEWS:NATIVE_ARRAY_BUFFER_VIEWS,TYPED_ARRAY_TAG:TYPED_ARRAY_TAG_REQUIRED&&TYPED_ARRAY_TAG,aTypedArray:aTypedArray,aTypedArrayConstructor:aTypedArrayConstructor,exportTypedArrayMethod:exportTypedArrayMethod,exportTypedArrayStaticMethod:exportTypedArrayStaticMethod,getTypedArrayConstructor:getTypedArrayConstructor,isView:isView,isTypedArray:isTypedArray,TypedArray:TypedArray,TypedArrayPrototype:TypedArrayPrototype};/***/},/* 82 */ /***/module=>{module.exports=typeof ArrayBuffer!='undefined'&&typeof DataView!='undefined';/***/},/* 83 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var TO_STRING_TAG_SUPPORT=__w_pdfjs_require__(84);var isCallable=__w_pdfjs_require__(25);var classofRaw=__w_pdfjs_require__(19);var wellKnownSymbol=__w_pdfjs_require__(38);var TO_STRING_TAG=wellKnownSymbol('toStringTag');var $Object=Object;var CORRECT_ARGUMENTS=classofRaw(function(){return arguments;}())=='Arguments';var tryGet=function(it,key){try{return it[key];}catch(error){}};module.exports=TO_STRING_TAG_SUPPORT?classofRaw:function(it){var O,tag,result;return it===undefined?'Undefined':it===null?'Null':typeof(tag=tryGet(O=$Object(it),TO_STRING_TAG))=='string'?tag:CORRECT_ARGUMENTS?classofRaw(O):(result=classofRaw(O))=='Object'&&isCallable(O.callee)?'Arguments':result;};/***/},/* 84 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var wellKnownSymbol=__w_pdfjs_require__(38);var TO_STRING_TAG=wellKnownSymbol('toStringTag');var test={};test[TO_STRING_TAG]='z';module.exports=String(test)==='[object z]';/***/},/* 85 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var hasOwn=__w_pdfjs_require__(43);var isCallable=__w_pdfjs_require__(25);var toObject=__w_pdfjs_require__(44);var sharedKey=__w_pdfjs_require__(58);var CORRECT_PROTOTYPE_GETTER=__w_pdfjs_require__(86);var IE_PROTO=sharedKey('IE_PROTO');var $Object=Object;var ObjectPrototype=$Object.prototype;module.exports=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(O){var object=toObject(O);if(hasOwn(object,IE_PROTO))return object[IE_PROTO];var constructor=object.constructor;if(isCallable(constructor)&&object instanceof constructor){return constructor.prototype;}return object instanceof $Object?ObjectPrototype:null;};/***/},/* 86 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);module.exports=!fails(function(){function F(){}F.prototype.constructor=null;return Object.getPrototypeOf(new F())!==F.prototype;});/***/},/* 87 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var anObject=__w_pdfjs_require__(51);var aPossiblePrototype=__w_pdfjs_require__(88);module.exports=Object.setPrototypeOf||('__proto__'in{}?function(){var CORRECT_SETTER=false;var test={};var setter;try{setter=uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__').set);setter(test,[]);CORRECT_SETTER=test instanceof Array;}catch(error){}return function setPrototypeOf(O,proto){anObject(O);aPossiblePrototype(proto);if(CORRECT_SETTER)setter(O,proto);else O.__proto__=proto;return O;};}():undefined);/***/},/* 88 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isCallable=__w_pdfjs_require__(25);var $String=String;var $TypeError=TypeError;module.exports=function(argument){if(typeof argument=='object'||isCallable(argument))return argument;throw $TypeError("Can't set "+$String(argument)+' as a prototype');};/***/},/* 89 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{__w_pdfjs_require__(90);__w_pdfjs_require__(97);__w_pdfjs_require__(99);__w_pdfjs_require__(122);__w_pdfjs_require__(124);var path=__w_pdfjs_require__(135);module.exports=path.structuredClone;/***/},/* 90 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toIndexedObject=__w_pdfjs_require__(16);var addToUnscopables=__w_pdfjs_require__(73);var Iterators=__w_pdfjs_require__(91);var InternalStateModule=__w_pdfjs_require__(56);var defineProperty=__w_pdfjs_require__(49).f;var defineIterator=__w_pdfjs_require__(92);var createIterResultObject=__w_pdfjs_require__(96);var IS_PURE=__w_pdfjs_require__(40);var DESCRIPTORS=__w_pdfjs_require__(10);var ARRAY_ITERATOR='Array Iterator';var setInternalState=InternalStateModule.set;var getInternalState=InternalStateModule.getterFor(ARRAY_ITERATOR);module.exports=defineIterator(Array,'Array',function(iterated,kind){setInternalState(this,{type:ARRAY_ITERATOR,target:toIndexedObject(iterated),index:0,kind:kind});},function(){var state=getInternalState(this);var target=state.target;var kind=state.kind;var index=state.index++;if(!target||index>=target.length){state.target=undefined;return createIterResultObject(undefined,true);}if(kind=='keys')return createIterResultObject(index,false);if(kind=='values')return createIterResultObject(target[index],false);return createIterResultObject([index,target[index]],false);},'values');var values=Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');if(!IS_PURE&&DESCRIPTORS&&values.name!=='values')try{defineProperty(values,'name',{value:'values'});}catch(error){}/***/},/* 91 */ /***/module=>{module.exports={};/***/},/* 92 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var $=__w_pdfjs_require__(7);var call=__w_pdfjs_require__(12);var IS_PURE=__w_pdfjs_require__(40);var FunctionName=__w_pdfjs_require__(54);var isCallable=__w_pdfjs_require__(25);var createIteratorConstructor=__w_pdfjs_require__(93);var getPrototypeOf=__w_pdfjs_require__(85);var setPrototypeOf=__w_pdfjs_require__(87);var setToStringTag=__w_pdfjs_require__(95);var createNonEnumerableProperty=__w_pdfjs_require__(48);var defineBuiltIn=__w_pdfjs_require__(52);var wellKnownSymbol=__w_pdfjs_require__(38);var Iterators=__w_pdfjs_require__(91);var IteratorsCore=__w_pdfjs_require__(94);var PROPER_FUNCTION_NAME=FunctionName.PROPER;var CONFIGURABLE_FUNCTION_NAME=FunctionName.CONFIGURABLE;var IteratorPrototype=IteratorsCore.IteratorPrototype;var BUGGY_SAFARI_ITERATORS=IteratorsCore.BUGGY_SAFARI_ITERATORS;var ITERATOR=wellKnownSymbol('iterator');var KEYS='keys';var VALUES='values';var ENTRIES='entries';var returnThis=function(){return this;};module.exports=function(Iterable,NAME,IteratorConstructor,next,DEFAULT,IS_SET,FORCED){createIteratorConstructor(IteratorConstructor,NAME,next);var getIterationMethod=function(KIND){if(KIND===DEFAULT&&defaultIterator)return defaultIterator;if(!BUGGY_SAFARI_ITERATORS&&KIND in IterablePrototype)return IterablePrototype[KIND];switch(KIND){case KEYS:return function keys(){return new IteratorConstructor(this,KIND);};case VALUES:return function values(){return new IteratorConstructor(this,KIND);};case ENTRIES:return function entries(){return new IteratorConstructor(this,KIND);};}return function(){return new IteratorConstructor(this);};};var TO_STRING_TAG=NAME+' Iterator';var INCORRECT_VALUES_NAME=false;var IterablePrototype=Iterable.prototype;var nativeIterator=IterablePrototype[ITERATOR]||IterablePrototype['@@iterator']||DEFAULT&&IterablePrototype[DEFAULT];var defaultIterator=!BUGGY_SAFARI_ITERATORS&&nativeIterator||getIterationMethod(DEFAULT);var anyNativeIterator=NAME=='Array'?IterablePrototype.entries||nativeIterator:nativeIterator;var CurrentIteratorPrototype,methods,KEY;if(anyNativeIterator){CurrentIteratorPrototype=getPrototypeOf(anyNativeIterator.call(new Iterable()));if(CurrentIteratorPrototype!==Object.prototype&&CurrentIteratorPrototype.next){if(!IS_PURE&&getPrototypeOf(CurrentIteratorPrototype)!==IteratorPrototype){if(setPrototypeOf){setPrototypeOf(CurrentIteratorPrototype,IteratorPrototype);}else if(!isCallable(CurrentIteratorPrototype[ITERATOR])){defineBuiltIn(CurrentIteratorPrototype,ITERATOR,returnThis);}}setToStringTag(CurrentIteratorPrototype,TO_STRING_TAG,true,true);if(IS_PURE)Iterators[TO_STRING_TAG]=returnThis;}}if(PROPER_FUNCTION_NAME&&DEFAULT==VALUES&&nativeIterator&&nativeIterator.name!==VALUES){if(!IS_PURE&&CONFIGURABLE_FUNCTION_NAME){createNonEnumerableProperty(IterablePrototype,'name',VALUES);}else {INCORRECT_VALUES_NAME=true;defaultIterator=function values(){return call(nativeIterator,this);};}}if(DEFAULT){methods={values:getIterationMethod(VALUES),keys:IS_SET?defaultIterator:getIterationMethod(KEYS),entries:getIterationMethod(ENTRIES)};if(FORCED)for(KEY in methods){if(BUGGY_SAFARI_ITERATORS||INCORRECT_VALUES_NAME||!(KEY in IterablePrototype)){defineBuiltIn(IterablePrototype,KEY,methods[KEY]);}}else $({target:NAME,proto:true,forced:BUGGY_SAFARI_ITERATORS||INCORRECT_VALUES_NAME},methods);}if((!IS_PURE||FORCED)&&IterablePrototype[ITERATOR]!==defaultIterator){defineBuiltIn(IterablePrototype,ITERATOR,defaultIterator,{name:DEFAULT});}Iterators[NAME]=defaultIterator;return methods;};/***/},/* 93 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var IteratorPrototype=__w_pdfjs_require__(94).IteratorPrototype;var create=__w_pdfjs_require__(74);var createPropertyDescriptor=__w_pdfjs_require__(15);var setToStringTag=__w_pdfjs_require__(95);var Iterators=__w_pdfjs_require__(91);var returnThis=function(){return this;};module.exports=function(IteratorConstructor,NAME,next,ENUMERABLE_NEXT){var TO_STRING_TAG=NAME+' Iterator';IteratorConstructor.prototype=create(IteratorPrototype,{next:createPropertyDescriptor(+!ENUMERABLE_NEXT,next)});setToStringTag(IteratorConstructor,TO_STRING_TAG,false,true);Iterators[TO_STRING_TAG]=returnThis;return IteratorConstructor;};/***/},/* 94 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);var isCallable=__w_pdfjs_require__(25);var isObject=__w_pdfjs_require__(24);var create=__w_pdfjs_require__(74);var getPrototypeOf=__w_pdfjs_require__(85);var defineBuiltIn=__w_pdfjs_require__(52);var wellKnownSymbol=__w_pdfjs_require__(38);var IS_PURE=__w_pdfjs_require__(40);var ITERATOR=wellKnownSymbol('iterator');var BUGGY_SAFARI_ITERATORS=false;var IteratorPrototype,PrototypeOfArrayIteratorPrototype,arrayIterator;if([].keys){arrayIterator=[].keys();if(!('next'in arrayIterator))BUGGY_SAFARI_ITERATORS=true;else {PrototypeOfArrayIteratorPrototype=getPrototypeOf(getPrototypeOf(arrayIterator));if(PrototypeOfArrayIteratorPrototype!==Object.prototype)IteratorPrototype=PrototypeOfArrayIteratorPrototype;}}var NEW_ITERATOR_PROTOTYPE=!isObject(IteratorPrototype)||fails(function(){var test={};return IteratorPrototype[ITERATOR].call(test)!==test;});if(NEW_ITERATOR_PROTOTYPE)IteratorPrototype={};else if(IS_PURE)IteratorPrototype=create(IteratorPrototype);if(!isCallable(IteratorPrototype[ITERATOR])){defineBuiltIn(IteratorPrototype,ITERATOR,function(){return this;});}module.exports={IteratorPrototype:IteratorPrototype,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS};/***/},/* 95 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var defineProperty=__w_pdfjs_require__(49).f;var hasOwn=__w_pdfjs_require__(43);var wellKnownSymbol=__w_pdfjs_require__(38);var TO_STRING_TAG=wellKnownSymbol('toStringTag');module.exports=function(target,TAG,STATIC){if(target&&!STATIC)target=target.prototype;if(target&&!hasOwn(target,TO_STRING_TAG)){defineProperty(target,TO_STRING_TAG,{configurable:true,value:TAG});}};/***/},/* 96 */ /***/module=>{module.exports=function(value,done){return {value:value,done:done};};/***/},/* 97 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var TO_STRING_TAG_SUPPORT=__w_pdfjs_require__(84);var defineBuiltIn=__w_pdfjs_require__(52);var toString=__w_pdfjs_require__(98);if(!TO_STRING_TAG_SUPPORT){defineBuiltIn(Object.prototype,'toString',toString,{unsafe:true});}/***/},/* 98 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var TO_STRING_TAG_SUPPORT=__w_pdfjs_require__(84);var classof=__w_pdfjs_require__(83);module.exports=TO_STRING_TAG_SUPPORT?{}.toString:function toString(){return '[object '+classof(this)+']';};/***/},/* 99 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{__w_pdfjs_require__(100);/***/},/* 100 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var collection=__w_pdfjs_require__(101);var collectionStrong=__w_pdfjs_require__(119);collection('Map',function(init){return function Map(){return init(this,arguments.length?arguments[0]:undefined);};},collectionStrong);/***/},/* 101 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var $=__w_pdfjs_require__(7);var global=__w_pdfjs_require__(8);var uncurryThis=__w_pdfjs_require__(18);var isForced=__w_pdfjs_require__(72);var defineBuiltIn=__w_pdfjs_require__(52);var InternalMetadataModule=__w_pdfjs_require__(102);var iterate=__w_pdfjs_require__(109);var anInstance=__w_pdfjs_require__(116);var isCallable=__w_pdfjs_require__(25);var isNullOrUndefined=__w_pdfjs_require__(21);var isObject=__w_pdfjs_require__(24);var fails=__w_pdfjs_require__(11);var checkCorrectnessOfIteration=__w_pdfjs_require__(117);var setToStringTag=__w_pdfjs_require__(95);var inheritIfRequired=__w_pdfjs_require__(118);module.exports=function(CONSTRUCTOR_NAME,wrapper,common){var IS_MAP=CONSTRUCTOR_NAME.indexOf('Map')!==-1;var IS_WEAK=CONSTRUCTOR_NAME.indexOf('Weak')!==-1;var ADDER=IS_MAP?'set':'add';var NativeConstructor=global[CONSTRUCTOR_NAME];var NativePrototype=NativeConstructor&&NativeConstructor.prototype;var Constructor=NativeConstructor;var exported={};var fixMethod=function(KEY){var uncurriedNativeMethod=uncurryThis(NativePrototype[KEY]);defineBuiltIn(NativePrototype,KEY,KEY=='add'?function add(value){uncurriedNativeMethod(this,value===0?0:value);return this;}:KEY=='delete'?function(key){return IS_WEAK&&!isObject(key)?false:uncurriedNativeMethod(this,key===0?0:key);}:KEY=='get'?function get(key){return IS_WEAK&&!isObject(key)?undefined:uncurriedNativeMethod(this,key===0?0:key);}:KEY=='has'?function has(key){return IS_WEAK&&!isObject(key)?false:uncurriedNativeMethod(this,key===0?0:key);}:function set(key,value){uncurriedNativeMethod(this,key===0?0:key,value);return this;});};var REPLACE=isForced(CONSTRUCTOR_NAME,!isCallable(NativeConstructor)||!(IS_WEAK||NativePrototype.forEach&&!fails(function(){new NativeConstructor().entries().next();})));if(REPLACE){Constructor=common.getConstructor(wrapper,CONSTRUCTOR_NAME,IS_MAP,ADDER);InternalMetadataModule.enable();}else if(isForced(CONSTRUCTOR_NAME,true)){var instance=new Constructor();var HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance;var THROWS_ON_PRIMITIVES=fails(function(){instance.has(1);});var ACCEPT_ITERABLES=checkCorrectnessOfIteration(function(iterable){new NativeConstructor(iterable);});var BUGGY_ZERO=!IS_WEAK&&fails(function(){var $instance=new NativeConstructor();var index=5;while(index--)$instance[ADDER](index,index);return !$instance.has(-0);});if(!ACCEPT_ITERABLES){Constructor=wrapper(function(dummy,iterable){anInstance(dummy,NativePrototype);var that=inheritIfRequired(new NativeConstructor(),dummy,Constructor);if(!isNullOrUndefined(iterable))iterate(iterable,that[ADDER],{that:that,AS_ENTRIES:IS_MAP});return that;});Constructor.prototype=NativePrototype;NativePrototype.constructor=Constructor;}if(THROWS_ON_PRIMITIVES||BUGGY_ZERO){fixMethod('delete');fixMethod('has');IS_MAP&&fixMethod('get');}if(BUGGY_ZERO||HASNT_CHAINING)fixMethod(ADDER);if(IS_WEAK&&NativePrototype.clear)delete NativePrototype.clear;}exported[CONSTRUCTOR_NAME]=Constructor;$({global:true,constructor:true,forced:Constructor!=NativeConstructor},exported);setToStringTag(Constructor,CONSTRUCTOR_NAME);if(!IS_WEAK)common.setStrong(Constructor,CONSTRUCTOR_NAME,IS_MAP);return Constructor;};/***/},/* 102 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var $=__w_pdfjs_require__(7);var uncurryThis=__w_pdfjs_require__(18);var hiddenKeys=__w_pdfjs_require__(59);var isObject=__w_pdfjs_require__(24);var hasOwn=__w_pdfjs_require__(43);var defineProperty=__w_pdfjs_require__(49).f;var getOwnPropertyNamesModule=__w_pdfjs_require__(62);var getOwnPropertyNamesExternalModule=__w_pdfjs_require__(103);var isExtensible=__w_pdfjs_require__(106);var uid=__w_pdfjs_require__(45);var FREEZING=__w_pdfjs_require__(108);var REQUIRED=false;var METADATA=uid('meta');var id=0;var setMetadata=function(it){defineProperty(it,METADATA,{value:{objectID:'O'+id++,weakData:{}}});};var fastKey=function(it,create){if(!isObject(it))return typeof it=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!hasOwn(it,METADATA)){if(!isExtensible(it))return 'F';if(!create)return 'E';setMetadata(it);}return it[METADATA].objectID;};var getWeakData=function(it,create){if(!hasOwn(it,METADATA)){if(!isExtensible(it))return true;if(!create)return false;setMetadata(it);}return it[METADATA].weakData;};var onFreeze=function(it){if(FREEZING&&REQUIRED&&isExtensible(it)&&!hasOwn(it,METADATA))setMetadata(it);return it;};var enable=function(){meta.enable=function(){};REQUIRED=true;var getOwnPropertyNames=getOwnPropertyNamesModule.f;var splice=uncurryThis([].splice);var test={};test[METADATA]=1;if(getOwnPropertyNames(test).length){getOwnPropertyNamesModule.f=function(it){var result=getOwnPropertyNames(it);for(var i=0,length=result.length;i<length;i++){if(result[i]===METADATA){splice(result,i,1);break;}}return result;};$({target:'Object',stat:true,forced:true},{getOwnPropertyNames:getOwnPropertyNamesExternalModule.f});}};var meta=module.exports={enable:enable,fastKey:fastKey,getWeakData:getWeakData,onFreeze:onFreeze};hiddenKeys[METADATA]=true;/***/},/* 103 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var classof=__w_pdfjs_require__(19);var toIndexedObject=__w_pdfjs_require__(16);var $getOwnPropertyNames=__w_pdfjs_require__(62).f;var arraySlice=__w_pdfjs_require__(104);var windowNames=typeof window=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function(it){try{return $getOwnPropertyNames(it);}catch(error){return arraySlice(windowNames);}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&classof(it)=='Window'?getWindowNames(it):$getOwnPropertyNames(toIndexedObject(it));};/***/},/* 104 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toAbsoluteIndex=__w_pdfjs_require__(65);var lengthOfArrayLike=__w_pdfjs_require__(68);var createProperty=__w_pdfjs_require__(105);var $Array=Array;var max=Math.max;module.exports=function(O,start,end){var length=lengthOfArrayLike(O);var k=toAbsoluteIndex(start,length);var fin=toAbsoluteIndex(end===undefined?length:end,length);var result=$Array(max(fin-k,0));for(var n=0;k<fin;k++,n++)createProperty(result,n,O[k]);result.length=n;return result;};/***/},/* 105 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var toPropertyKey=__w_pdfjs_require__(22);var definePropertyModule=__w_pdfjs_require__(49);var createPropertyDescriptor=__w_pdfjs_require__(15);module.exports=function(object,key,value){var propertyKey=toPropertyKey(key);if(propertyKey in object)definePropertyModule.f(object,propertyKey,createPropertyDescriptor(0,value));else object[propertyKey]=value;};/***/},/* 106 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);var isObject=__w_pdfjs_require__(24);var classof=__w_pdfjs_require__(19);var ARRAY_BUFFER_NON_EXTENSIBLE=__w_pdfjs_require__(107);var $isExtensible=Object.isExtensible;var FAILS_ON_PRIMITIVES=fails(function(){});module.exports=FAILS_ON_PRIMITIVES||ARRAY_BUFFER_NON_EXTENSIBLE?function isExtensible(it){if(!isObject(it))return false;if(ARRAY_BUFFER_NON_EXTENSIBLE&&classof(it)=='ArrayBuffer')return false;return $isExtensible?$isExtensible(it):true;}:$isExtensible;/***/},/* 107 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);module.exports=fails(function(){if(typeof ArrayBuffer=='function'){var buffer=new ArrayBuffer(8);if(Object.isExtensible(buffer))Object.defineProperty(buffer,'a',{value:8});}});/***/},/* 108 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);module.exports=!fails(function(){return Object.isExtensible(Object.preventExtensions({}));});/***/},/* 109 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var bind=__w_pdfjs_require__(110);var call=__w_pdfjs_require__(12);var anObject=__w_pdfjs_require__(51);var tryToString=__w_pdfjs_require__(36);var isArrayIteratorMethod=__w_pdfjs_require__(112);var lengthOfArrayLike=__w_pdfjs_require__(68);var isPrototypeOf=__w_pdfjs_require__(29);var getIterator=__w_pdfjs_require__(113);var getIteratorMethod=__w_pdfjs_require__(114);var iteratorClose=__w_pdfjs_require__(115);var $TypeError=TypeError;var Result=function(stopped,result){this.stopped=stopped;this.result=result;};var ResultPrototype=Result.prototype;module.exports=function(iterable,unboundFunction,options){var that=options&&options.that;var AS_ENTRIES=!!(options&&options.AS_ENTRIES);var IS_RECORD=!!(options&&options.IS_RECORD);var IS_ITERATOR=!!(options&&options.IS_ITERATOR);var INTERRUPTED=!!(options&&options.INTERRUPTED);var fn=bind(unboundFunction,that);var iterator,iterFn,index,length,result,next,step;var stop=function(condition){if(iterator)iteratorClose(iterator,'normal',condition);return new Result(true,condition);};var callFn=function(value){if(AS_ENTRIES){anObject(value);return INTERRUPTED?fn(value[0],value[1],stop):fn(value[0],value[1]);}return INTERRUPTED?fn(value,stop):fn(value);};if(IS_RECORD){iterator=iterable.iterator;}else if(IS_ITERATOR){iterator=iterable;}else {iterFn=getIteratorMethod(iterable);if(!iterFn)throw $TypeError(tryToString(iterable)+' is not iterable');if(isArrayIteratorMethod(iterFn)){for(index=0,length=lengthOfArrayLike(iterable);length>index;index++){result=callFn(iterable[index]);if(result&&isPrototypeOf(ResultPrototype,result))return result;}return new Result(false);}iterator=getIterator(iterable,iterFn);}next=IS_RECORD?iterable.next:iterator.next;while(!(step=call(next,iterator)).done){try{result=callFn(step.value);}catch(error){iteratorClose(iterator,'throw',error);}if(typeof result=='object'&&result&&isPrototypeOf(ResultPrototype,result))return result;}return new Result(false);};/***/},/* 110 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(111);var aCallable=__w_pdfjs_require__(35);var NATIVE_BIND=__w_pdfjs_require__(13);var bind=uncurryThis(uncurryThis.bind);module.exports=function(fn,that){aCallable(fn);return that===undefined?fn:NATIVE_BIND?bind(fn,that):function(){return fn.apply(that,arguments);};};/***/},/* 111 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var classofRaw=__w_pdfjs_require__(19);var uncurryThis=__w_pdfjs_require__(18);module.exports=function(fn){if(classofRaw(fn)==='Function')return uncurryThis(fn);};/***/},/* 112 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var wellKnownSymbol=__w_pdfjs_require__(38);var Iterators=__w_pdfjs_require__(91);var ITERATOR=wellKnownSymbol('iterator');var ArrayPrototype=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayPrototype[ITERATOR]===it);};/***/},/* 113 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var call=__w_pdfjs_require__(12);var aCallable=__w_pdfjs_require__(35);var anObject=__w_pdfjs_require__(51);var tryToString=__w_pdfjs_require__(36);var getIteratorMethod=__w_pdfjs_require__(114);var $TypeError=TypeError;module.exports=function(argument,usingIterator){var iteratorMethod=arguments.length<2?getIteratorMethod(argument):usingIterator;if(aCallable(iteratorMethod))return anObject(call(iteratorMethod,argument));throw $TypeError(tryToString(argument)+' is not iterable');};/***/},/* 114 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var classof=__w_pdfjs_require__(83);var getMethod=__w_pdfjs_require__(34);var isNullOrUndefined=__w_pdfjs_require__(21);var Iterators=__w_pdfjs_require__(91);var wellKnownSymbol=__w_pdfjs_require__(38);var ITERATOR=wellKnownSymbol('iterator');module.exports=function(it){if(!isNullOrUndefined(it))return getMethod(it,ITERATOR)||getMethod(it,'@@iterator')||Iterators[classof(it)];};/***/},/* 115 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var call=__w_pdfjs_require__(12);var anObject=__w_pdfjs_require__(51);var getMethod=__w_pdfjs_require__(34);module.exports=function(iterator,kind,value){var innerResult,innerError;anObject(iterator);try{innerResult=getMethod(iterator,'return');if(!innerResult){if(kind==='throw')throw value;return value;}innerResult=call(innerResult,iterator);}catch(error){innerError=true;innerResult=error;}if(kind==='throw')throw value;if(innerError)throw innerResult;anObject(innerResult);return value;};/***/},/* 116 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isPrototypeOf=__w_pdfjs_require__(29);var $TypeError=TypeError;module.exports=function(it,Prototype){if(isPrototypeOf(Prototype,it))return it;throw $TypeError('Incorrect invocation');};/***/},/* 117 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var wellKnownSymbol=__w_pdfjs_require__(38);var ITERATOR=wellKnownSymbol('iterator');var SAFE_CLOSING=false;try{var called=0;var iteratorWithReturn={next:function(){return {done:!!called++};},'return':function(){SAFE_CLOSING=true;}};iteratorWithReturn[ITERATOR]=function(){return this;};Array.from(iteratorWithReturn,function(){throw 2;});}catch(error){}module.exports=function(exec,SKIP_CLOSING){if(!SKIP_CLOSING&&!SAFE_CLOSING)return false;var ITERATION_SUPPORT=false;try{var object={};object[ITERATOR]=function(){return {next:function(){return {done:ITERATION_SUPPORT=true};}};};exec(object);}catch(error){}return ITERATION_SUPPORT;};/***/},/* 118 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var isCallable=__w_pdfjs_require__(25);var isObject=__w_pdfjs_require__(24);var setPrototypeOf=__w_pdfjs_require__(87);module.exports=function($this,dummy,Wrapper){var NewTarget,NewTargetPrototype;if(setPrototypeOf&&isCallable(NewTarget=dummy.constructor)&&NewTarget!==Wrapper&&isObject(NewTargetPrototype=NewTarget.prototype)&&NewTargetPrototype!==Wrapper.prototype)setPrototypeOf($this,NewTargetPrototype);return $this;};/***/},/* 119 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var defineProperty=__w_pdfjs_require__(49).f;var create=__w_pdfjs_require__(74);var defineBuiltIns=__w_pdfjs_require__(120);var bind=__w_pdfjs_require__(110);var anInstance=__w_pdfjs_require__(116);var isNullOrUndefined=__w_pdfjs_require__(21);var iterate=__w_pdfjs_require__(109);var defineIterator=__w_pdfjs_require__(92);var createIterResultObject=__w_pdfjs_require__(96);var setSpecies=__w_pdfjs_require__(121);var DESCRIPTORS=__w_pdfjs_require__(10);var fastKey=__w_pdfjs_require__(102).fastKey;var InternalStateModule=__w_pdfjs_require__(56);var setInternalState=InternalStateModule.set;var internalStateGetterFor=InternalStateModule.getterFor;module.exports={getConstructor:function(wrapper,CONSTRUCTOR_NAME,IS_MAP,ADDER){var Constructor=wrapper(function(that,iterable){anInstance(that,Prototype);setInternalState(that,{type:CONSTRUCTOR_NAME,index:create(null),first:undefined,last:undefined,size:0});if(!DESCRIPTORS)that.size=0;if(!isNullOrUndefined(iterable))iterate(iterable,that[ADDER],{that:that,AS_ENTRIES:IS_MAP});});var Prototype=Constructor.prototype;var getInternalState=internalStateGetterFor(CONSTRUCTOR_NAME);var define=function(that,key,value){var state=getInternalState(that);var entry=getEntry(that,key);var previous,index;if(entry){entry.value=value;}else {state.last=entry={index:index=fastKey(key,true),key:key,value:value,previous:previous=state.last,next:undefined,removed:false};if(!state.first)state.first=entry;if(previous)previous.next=entry;if(DESCRIPTORS)state.size++;else that.size++;if(index!=='F')state.index[index]=entry;}return that;};var getEntry=function(that,key){var state=getInternalState(that);var index=fastKey(key);var entry;if(index!=='F')return state.index[index];for(entry=state.first;entry;entry=entry.next){if(entry.key==key)return entry;}};defineBuiltIns(Prototype,{clear:function clear(){var that=this;var state=getInternalState(that);var data=state.index;var entry=state.first;while(entry){entry.removed=true;if(entry.previous)entry.previous=entry.previous.next=undefined;delete data[entry.index];entry=entry.next;}state.first=state.last=undefined;if(DESCRIPTORS)state.size=0;else that.size=0;},'delete':function(key){var that=this;var state=getInternalState(that);var entry=getEntry(that,key);if(entry){var next=entry.next;var prev=entry.previous;delete state.index[entry.index];entry.removed=true;if(prev)prev.next=next;if(next)next.previous=prev;if(state.first==entry)state.first=next;if(state.last==entry)state.last=prev;if(DESCRIPTORS)state.size--;else that.size--;}return !!entry;},forEach:function forEach(callbackfn){var state=getInternalState(this);var boundFunction=bind(callbackfn,arguments.length>1?arguments[1]:undefined);var entry;while(entry=entry?entry.next:state.first){boundFunction(entry.value,entry.key,this);while(entry&&entry.removed)entry=entry.previous;}},has:function has(key){return !!getEntry(this,key);}});defineBuiltIns(Prototype,IS_MAP?{get:function get(key){var entry=getEntry(this,key);return entry&&entry.value;},set:function set(key,value){return define(this,key===0?0:key,value);}}:{add:function add(value){return define(this,value=value===0?0:value,value);}});if(DESCRIPTORS)defineProperty(Prototype,'size',{get:function(){return getInternalState(this).size;}});return Constructor;},setStrong:function(Constructor,CONSTRUCTOR_NAME,IS_MAP){var ITERATOR_NAME=CONSTRUCTOR_NAME+' Iterator';var getInternalCollectionState=internalStateGetterFor(CONSTRUCTOR_NAME);var getInternalIteratorState=internalStateGetterFor(ITERATOR_NAME);defineIterator(Constructor,CONSTRUCTOR_NAME,function(iterated,kind){setInternalState(this,{type:ITERATOR_NAME,target:iterated,state:getInternalCollectionState(iterated),kind:kind,last:undefined});},function(){var state=getInternalIteratorState(this);var kind=state.kind;var entry=state.last;while(entry&&entry.removed)entry=entry.previous;if(!state.target||!(state.last=entry=entry?entry.next:state.state.first)){state.target=undefined;return createIterResultObject(undefined,true);}if(kind=='keys')return createIterResultObject(entry.key,false);if(kind=='values')return createIterResultObject(entry.value,false);return createIterResultObject([entry.key,entry.value],false);},IS_MAP?'entries':'values',!IS_MAP,true);setSpecies(CONSTRUCTOR_NAME);}};/***/},/* 120 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var defineBuiltIn=__w_pdfjs_require__(52);module.exports=function(target,src,options){for(var key in src)defineBuiltIn(target,key,src[key],options);return target;};/***/},/* 121 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var getBuiltIn=__w_pdfjs_require__(28);var definePropertyModule=__w_pdfjs_require__(49);var wellKnownSymbol=__w_pdfjs_require__(38);var DESCRIPTORS=__w_pdfjs_require__(10);var SPECIES=wellKnownSymbol('species');module.exports=function(CONSTRUCTOR_NAME){var Constructor=getBuiltIn(CONSTRUCTOR_NAME);var defineProperty=definePropertyModule.f;if(DESCRIPTORS&&Constructor&&!Constructor[SPECIES]){defineProperty(Constructor,SPECIES,{configurable:true,get:function(){return this;}});}};/***/},/* 122 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{__w_pdfjs_require__(123);/***/},/* 123 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var collection=__w_pdfjs_require__(101);var collectionStrong=__w_pdfjs_require__(119);collection('Set',function(init){return function Set(){return init(this,arguments.length?arguments[0]:undefined);};},collectionStrong);/***/},/* 124 */ /***/(__unused_webpack_module,__unused_webpack_exports,__w_pdfjs_require__)=>{var IS_PURE=__w_pdfjs_require__(40);var $=__w_pdfjs_require__(7);var global=__w_pdfjs_require__(8);var getBuiltin=__w_pdfjs_require__(28);var uncurryThis=__w_pdfjs_require__(18);var fails=__w_pdfjs_require__(11);var uid=__w_pdfjs_require__(45);var isCallable=__w_pdfjs_require__(25);var isConstructor=__w_pdfjs_require__(125);var isNullOrUndefined=__w_pdfjs_require__(21);var isObject=__w_pdfjs_require__(24);var isSymbol=__w_pdfjs_require__(27);var iterate=__w_pdfjs_require__(109);var anObject=__w_pdfjs_require__(51);var classof=__w_pdfjs_require__(83);var hasOwn=__w_pdfjs_require__(43);var createProperty=__w_pdfjs_require__(105);var createNonEnumerableProperty=__w_pdfjs_require__(48);var lengthOfArrayLike=__w_pdfjs_require__(68);var validateArgumentsLength=__w_pdfjs_require__(126);var getRegExpFlags=__w_pdfjs_require__(127);var MapHelpers=__w_pdfjs_require__(129);var SetHelpers=__w_pdfjs_require__(130);var ERROR_STACK_INSTALLABLE=__w_pdfjs_require__(131);var V8=__w_pdfjs_require__(32);var IS_BROWSER=__w_pdfjs_require__(132);var IS_DENO=__w_pdfjs_require__(133);var IS_NODE=__w_pdfjs_require__(134);var Object=global.Object;var Array=global.Array;var Date=global.Date;var Error=global.Error;var EvalError=global.EvalError;var RangeError=global.RangeError;var ReferenceError=global.ReferenceError;var SyntaxError=global.SyntaxError;var TypeError=global.TypeError;var URIError=global.URIError;var PerformanceMark=global.PerformanceMark;var WebAssembly=global.WebAssembly;var CompileError=WebAssembly&&WebAssembly.CompileError||Error;var LinkError=WebAssembly&&WebAssembly.LinkError||Error;var RuntimeError=WebAssembly&&WebAssembly.RuntimeError||Error;var DOMException=getBuiltin('DOMException');var Map=MapHelpers.Map;var mapHas=MapHelpers.has;var mapGet=MapHelpers.get;var mapSet=MapHelpers.set;var Set=SetHelpers.Set;var setAdd=SetHelpers.add;var objectKeys=getBuiltin('Object','keys');var push=uncurryThis([].push);var thisBooleanValue=uncurryThis(true.valueOf);var thisNumberValue=uncurryThis(1.0.valueOf);var thisStringValue=uncurryThis(''.valueOf);var thisTimeValue=uncurryThis(Date.prototype.getTime);var PERFORMANCE_MARK=uid('structuredClone');var DATA_CLONE_ERROR='DataCloneError';var TRANSFERRING='Transferring';var checkBasicSemantic=function(structuredCloneImplementation){return !fails(function(){var set1=new global.Set([7]);var set2=structuredCloneImplementation(set1);var number=structuredCloneImplementation(Object(7));return set2==set1||!set2.has(7)||typeof number!='object'||number!=7;})&&structuredCloneImplementation;};var checkErrorsCloning=function(structuredCloneImplementation,$Error){return !fails(function(){var error=new $Error();var test=structuredCloneImplementation({a:error,b:error});return !(test&&test.a===test.b&&test.a instanceof $Error&&test.a.stack===error.stack);});};var checkNewErrorsCloningSemantic=function(structuredCloneImplementation){return !fails(function(){var test=structuredCloneImplementation(new global.AggregateError([1],PERFORMANCE_MARK,{cause:3}));return test.name!='AggregateError'||test.errors[0]!=1||test.message!=PERFORMANCE_MARK||test.cause!=3;});};var nativeStructuredClone=global.structuredClone;var FORCED_REPLACEMENT=IS_PURE||!checkErrorsCloning(nativeStructuredClone,Error)||!checkErrorsCloning(nativeStructuredClone,DOMException)||!checkNewErrorsCloningSemantic(nativeStructuredClone);var structuredCloneFromMark=!nativeStructuredClone&&checkBasicSemantic(function(value){return new PerformanceMark(PERFORMANCE_MARK,{detail:value}).detail;});var nativeRestrictedStructuredClone=checkBasicSemantic(nativeStructuredClone)||structuredCloneFromMark;var throwUncloneable=function(type){throw new DOMException('Uncloneable type: '+type,DATA_CLONE_ERROR);};var throwUnpolyfillable=function(type,action){throw new DOMException((action||'Cloning')+' of '+type+' cannot be properly polyfilled in this engine',DATA_CLONE_ERROR);};var createDataTransfer=function(){var dataTransfer;try{dataTransfer=new global.DataTransfer();}catch(error){try{dataTransfer=new global.ClipboardEvent('').clipboardData;}catch(error2){}}return dataTransfer&&dataTransfer.items&&dataTransfer.files?dataTransfer:null;};var structuredCloneInternal=function(value,map){if(isSymbol(value))throwUncloneable('Symbol');if(!isObject(value))return value;if(map){if(mapHas(map,value))return mapGet(map,value);}else map=new Map();var type=classof(value);var deep=false;var C,name,cloned,dataTransfer,i,length,keys,key,source,target;switch(type){case'Array':cloned=Array(lengthOfArrayLike(value));deep=true;break;case'Object':cloned={};deep=true;break;case'Map':cloned=new Map();deep=true;break;case'Set':cloned=new Set();deep=true;break;case'RegExp':cloned=new RegExp(value.source,getRegExpFlags(value));break;case'Error':name=value.name;switch(name){case'AggregateError':cloned=getBuiltin('AggregateError')([]);break;case'EvalError':cloned=EvalError();break;case'RangeError':cloned=RangeError();break;case'ReferenceError':cloned=ReferenceError();break;case'SyntaxError':cloned=SyntaxError();break;case'TypeError':cloned=TypeError();break;case'URIError':cloned=URIError();break;case'CompileError':cloned=CompileError();break;case'LinkError':cloned=LinkError();break;case'RuntimeError':cloned=RuntimeError();break;default:cloned=Error();}deep=true;break;case'DOMException':cloned=new DOMException(value.message,value.name);deep=true;break;case'DataView':case'Int8Array':case'Uint8Array':case'Uint8ClampedArray':case'Int16Array':case'Uint16Array':case'Int32Array':case'Uint32Array':case'Float32Array':case'Float64Array':case'BigInt64Array':case'BigUint64Array':C=global[type];if(!isObject(C))throwUnpolyfillable(type);cloned=new C(structuredCloneInternal(value.buffer,map),value.byteOffset,type==='DataView'?value.byteLength:value.length);break;case'DOMQuad':try{cloned=new DOMQuad(structuredCloneInternal(value.p1,map),structuredCloneInternal(value.p2,map),structuredCloneInternal(value.p3,map),structuredCloneInternal(value.p4,map));}catch(error){if(nativeRestrictedStructuredClone){cloned=nativeRestrictedStructuredClone(value);}else throwUnpolyfillable(type);}break;case'FileList':dataTransfer=createDataTransfer();if(dataTransfer){for(i=0,length=lengthOfArrayLike(value);i<length;i++){dataTransfer.items.add(structuredCloneInternal(value[i],map));}cloned=dataTransfer.files;}else if(nativeRestrictedStructuredClone){cloned=nativeRestrictedStructuredClone(value);}else throwUnpolyfillable(type);break;case'ImageData':try{cloned=new ImageData(structuredCloneInternal(value.data,map),value.width,value.height,{colorSpace:value.colorSpace});}catch(error){if(nativeRestrictedStructuredClone){cloned=nativeRestrictedStructuredClone(value);}else throwUnpolyfillable(type);}break;default:if(nativeRestrictedStructuredClone){cloned=nativeRestrictedStructuredClone(value);}else switch(type){case'BigInt':cloned=Object(value.valueOf());break;case'Boolean':cloned=Object(thisBooleanValue(value));break;case'Number':cloned=Object(thisNumberValue(value));break;case'String':cloned=Object(thisStringValue(value));break;case'Date':cloned=new Date(thisTimeValue(value));break;case'ArrayBuffer':C=global.DataView;if(!C&&typeof value.slice!='function')throwUnpolyfillable(type);try{if(typeof value.slice=='function'){cloned=value.slice(0);}else {length=value.byteLength;cloned=new ArrayBuffer(length);source=new C(value);target=new C(cloned);for(i=0;i<length;i++){target.setUint8(i,source.getUint8(i));}}}catch(error){throw new DOMException('ArrayBuffer is detached',DATA_CLONE_ERROR);}break;case'SharedArrayBuffer':cloned=value;break;case'Blob':try{cloned=value.slice(0,value.size,value.type);}catch(error){throwUnpolyfillable(type);}break;case'DOMPoint':case'DOMPointReadOnly':C=global[type];try{cloned=C.fromPoint?C.fromPoint(value):new C(value.x,value.y,value.z,value.w);}catch(error){throwUnpolyfillable(type);}break;case'DOMRect':case'DOMRectReadOnly':C=global[type];try{cloned=C.fromRect?C.fromRect(value):new C(value.x,value.y,value.width,value.height);}catch(error){throwUnpolyfillable(type);}break;case'DOMMatrix':case'DOMMatrixReadOnly':C=global[type];try{cloned=C.fromMatrix?C.fromMatrix(value):new C(value);}catch(error){throwUnpolyfillable(type);}break;case'AudioData':case'VideoFrame':if(!isCallable(value.clone))throwUnpolyfillable(type);try{cloned=value.clone();}catch(error){throwUncloneable(type);}break;case'File':try{cloned=new File([value],value.name,value);}catch(error){throwUnpolyfillable(type);}break;case'CropTarget':case'CryptoKey':case'FileSystemDirectoryHandle':case'FileSystemFileHandle':case'FileSystemHandle':case'GPUCompilationInfo':case'GPUCompilationMessage':case'ImageBitmap':case'RTCCertificate':case'WebAssembly.Module':throwUnpolyfillable(type);default:throwUncloneable(type);}}mapSet(map,value,cloned);if(deep)switch(type){case'Array':case'Object':keys=objectKeys(value);for(i=0,length=lengthOfArrayLike(keys);i<length;i++){key=keys[i];createProperty(cloned,key,structuredCloneInternal(value[key],map));}break;case'Map':value.forEach(function(v,k){mapSet(cloned,structuredCloneInternal(k,map),structuredCloneInternal(v,map));});break;case'Set':value.forEach(function(v){setAdd(cloned,structuredCloneInternal(v,map));});break;case'Error':createNonEnumerableProperty(cloned,'message',structuredCloneInternal(value.message,map));if(hasOwn(value,'cause')){createNonEnumerableProperty(cloned,'cause',structuredCloneInternal(value.cause,map));}if(name=='AggregateError'){cloned.errors=structuredCloneInternal(value.errors,map);}case'DOMException':if(ERROR_STACK_INSTALLABLE){createNonEnumerableProperty(cloned,'stack',structuredCloneInternal(value.stack,map));}}return cloned;};var PROPER_TRANSFER=nativeStructuredClone&&!fails(function(){if(IS_DENO&&V8>92||IS_NODE&&V8>94||IS_BROWSER&&V8>97)return false;var buffer=new ArrayBuffer(8);var clone=nativeStructuredClone(buffer,{transfer:[buffer]});return buffer.byteLength!=0||clone.byteLength!=8;});var tryToTransfer=function(rawTransfer,map){if(!isObject(rawTransfer))throw TypeError('Transfer option cannot be converted to a sequence');var transfer=[];iterate(rawTransfer,function(value){push(transfer,anObject(value));});var i=0;var length=lengthOfArrayLike(transfer);var value,type,C,transferredArray,transferred,canvas,context;if(PROPER_TRANSFER){transferredArray=nativeStructuredClone(transfer,{transfer:transfer});while(i<length)mapSet(map,transfer[i],transferredArray[i++]);}else while(i<length){value=transfer[i++];if(mapHas(map,value))throw new DOMException('Duplicate transferable',DATA_CLONE_ERROR);type=classof(value);switch(type){case'ImageBitmap':C=global.OffscreenCanvas;if(!isConstructor(C))throwUnpolyfillable(type,TRANSFERRING);try{canvas=new C(value.width,value.height);context=canvas.getContext('bitmaprenderer');context.transferFromImageBitmap(value);transferred=canvas.transferToImageBitmap();}catch(error){}break;case'AudioData':case'VideoFrame':if(!isCallable(value.clone)||!isCallable(value.close))throwUnpolyfillable(type,TRANSFERRING);try{transferred=value.clone();value.close();}catch(error){}break;case'ArrayBuffer':case'MediaSourceHandle':case'MessagePort':case'OffscreenCanvas':case'ReadableStream':case'TransformStream':case'WritableStream':throwUnpolyfillable(type,TRANSFERRING);}if(transferred===undefined)throw new DOMException('This object cannot be transferred: '+type,DATA_CLONE_ERROR);mapSet(map,value,transferred);}};$({global:true,enumerable:true,sham:!PROPER_TRANSFER,forced:FORCED_REPLACEMENT},{structuredClone:function structuredClone(value){var options=validateArgumentsLength(arguments.length,1)>1&&!isNullOrUndefined(arguments[1])?anObject(arguments[1]):undefined;var transfer=options?options.transfer:undefined;var map;if(transfer!==undefined){map=new Map();tryToTransfer(transfer,map);}return structuredCloneInternal(value,map);}});/***/},/* 125 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var fails=__w_pdfjs_require__(11);var isCallable=__w_pdfjs_require__(25);var classof=__w_pdfjs_require__(83);var getBuiltIn=__w_pdfjs_require__(28);var inspectSource=__w_pdfjs_require__(55);var noop=function(){};var empty=[];var construct=getBuiltIn('Reflect','construct');var constructorRegExp=/^\s*(?:class|function)\b/;var exec=uncurryThis(constructorRegExp.exec);var INCORRECT_TO_STRING=!constructorRegExp.exec(noop);var isConstructorModern=function isConstructor(argument){if(!isCallable(argument))return false;try{construct(noop,empty,argument);return true;}catch(error){return false;}};var isConstructorLegacy=function isConstructor(argument){if(!isCallable(argument))return false;switch(classof(argument)){case'AsyncFunction':case'GeneratorFunction':case'AsyncGeneratorFunction':return false;}try{return INCORRECT_TO_STRING||!!exec(constructorRegExp,inspectSource(argument));}catch(error){return true;}};isConstructorLegacy.sham=true;module.exports=!construct||fails(function(){var called;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern(function(){called=true;})||called;})?isConstructorLegacy:isConstructorModern;/***/},/* 126 */ /***/module=>{var $TypeError=TypeError;module.exports=function(passed,required){if(passed<required)throw $TypeError('Not enough arguments');return passed;};/***/},/* 127 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var call=__w_pdfjs_require__(12);var hasOwn=__w_pdfjs_require__(43);var isPrototypeOf=__w_pdfjs_require__(29);var regExpFlags=__w_pdfjs_require__(128);var RegExpPrototype=RegExp.prototype;module.exports=function(R){var flags=R.flags;return flags===undefined&&!('flags'in RegExpPrototype)&&!hasOwn(R,'flags')&&isPrototypeOf(RegExpPrototype,R)?call(regExpFlags,R):flags;};/***/},/* 128 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var anObject=__w_pdfjs_require__(51);module.exports=function(){var that=anObject(this);var result='';if(that.hasIndices)result+='d';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.dotAll)result+='s';if(that.unicode)result+='u';if(that.unicodeSets)result+='v';if(that.sticky)result+='y';return result;};/***/},/* 129 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var MapPrototype=Map.prototype;module.exports={Map:Map,set:uncurryThis(MapPrototype.set),get:uncurryThis(MapPrototype.get),has:uncurryThis(MapPrototype.has),remove:uncurryThis(MapPrototype['delete']),proto:MapPrototype};/***/},/* 130 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var uncurryThis=__w_pdfjs_require__(18);var SetPrototype=Set.prototype;module.exports={Set:Set,add:uncurryThis(SetPrototype.add),has:uncurryThis(SetPrototype.has),remove:uncurryThis(SetPrototype['delete']),proto:SetPrototype,$has:SetPrototype.has,$keys:SetPrototype.keys};/***/},/* 131 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var fails=__w_pdfjs_require__(11);var createPropertyDescriptor=__w_pdfjs_require__(15);module.exports=!fails(function(){var error=Error('a');if(!('stack'in error))return true;Object.defineProperty(error,'stack',createPropertyDescriptor(1,7));return error.stack!==7;});/***/},/* 132 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var IS_DENO=__w_pdfjs_require__(133);var IS_NODE=__w_pdfjs_require__(134);module.exports=!IS_DENO&&!IS_NODE&&typeof window=='object'&&typeof document=='object';/***/},/* 133 */ /***/module=>{module.exports=typeof Deno=='object'&&Deno&&typeof Deno.version=='object';/***/},/* 134 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var classof=__w_pdfjs_require__(19);module.exports=typeof process!='undefined'&&classof(process)=='process';/***/},/* 135 */ /***/(module,__unused_webpack_exports,__w_pdfjs_require__)=>{var global=__w_pdfjs_require__(8);module.exports=global;/***/},/* 136 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.XRefParseException=exports.XRefEntryException=exports.ParserEOFException=exports.PDF_VERSION_REGEXP=exports.MissingDataException=void 0;exports.arrayBuffersToBytes=arrayBuffersToBytes;exports.collectActions=collectActions;exports.encodeToXmlString=encodeToXmlString;exports.escapePDFName=escapePDFName;exports.escapeString=escapeString;exports.getArrayLookupTableFactory=getArrayLookupTableFactory;exports.getInheritableProperty=getInheritableProperty;exports.getLookupTableFactory=getLookupTableFactory;exports.getNewAnnotationsMap=getNewAnnotationsMap;exports.getRotationMatrix=getRotationMatrix;exports.isAscii=isAscii;exports.isWhiteSpace=isWhiteSpace;exports.log2=log2;exports.numberToString=numberToString;exports.parseXFAPath=parseXFAPath;exports.readInt8=readInt8;exports.readUint16=readUint16;exports.readUint32=readUint32;exports.recoverJsURL=recoverJsURL;exports.stringToUTF16HexString=stringToUTF16HexString;exports.stringToUTF16String=stringToUTF16String;exports.toRomanNumerals=toRomanNumerals;exports.validateCSSFont=validateCSSFont;var _util=__w_pdfjs_require__(2);var _primitives=__w_pdfjs_require__(137);var _base_stream=__w_pdfjs_require__(138);const PDF_VERSION_REGEXP=/^[1-9]\.\d$/;exports.PDF_VERSION_REGEXP=PDF_VERSION_REGEXP;function getLookupTableFactory(initializer){let lookup;return function(){if(initializer){lookup=Object.create(null);initializer(lookup);initializer=null;}return lookup;};}function getArrayLookupTableFactory(initializer){let lookup;return function(){if(initializer){let arr=initializer();initializer=null;lookup=Object.create(null);for(let i=0,ii=arr.length;i<ii;i+=2){lookup[arr[i]]=arr[i+1];}arr=null;}return lookup;};}class MissingDataException extends _util.BaseException{constructor(begin,end){super(`Missing data [${begin}, ${end})`,"MissingDataException");this.begin=begin;this.end=end;}}exports.MissingDataException=MissingDataException;class ParserEOFException extends _util.BaseException{constructor(msg){super(msg,"ParserEOFException");}}exports.ParserEOFException=ParserEOFException;class XRefEntryException extends _util.BaseException{constructor(msg){super(msg,"XRefEntryException");}}exports.XRefEntryException=XRefEntryException;class XRefParseException extends _util.BaseException{constructor(msg){super(msg,"XRefParseException");}}exports.XRefParseException=XRefParseException;function arrayBuffersToBytes(arr){const length=arr.length;if(length===0){return new Uint8Array(0);}if(length===1){return new Uint8Array(arr[0]);}let dataLength=0;for(let i=0;i<length;i++){dataLength+=arr[i].byteLength;}const data=new Uint8Array(dataLength);let pos=0;for(let i=0;i<length;i++){const item=new Uint8Array(arr[i]);data.set(item,pos);pos+=item.byteLength;}return data;}function getInheritableProperty(_ref){let{dict,key,getArray=false,stopWhenFound=true}=_ref;let values;const visited=new _primitives.RefSet();while(dict instanceof _primitives.Dict&&!(dict.objId&&visited.has(dict.objId))){if(dict.objId){visited.put(dict.objId);}const value=getArray?dict.getArray(key):dict.get(key);if(value!==undefined){if(stopWhenFound){return value;}if(!values){values=[];}values.push(value);}dict=dict.get("Parent");}return values;}const ROMAN_NUMBER_MAP=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];function toRomanNumerals(number){let lowerCase=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;(0, _util.assert)(Number.isInteger(number)&&number>0,"The number should be a positive integer.");const romanBuf=[];let pos;while(number>=1000){number-=1000;romanBuf.push("M");}pos=number/100|0;number%=100;romanBuf.push(ROMAN_NUMBER_MAP[pos]);pos=number/10|0;number%=10;romanBuf.push(ROMAN_NUMBER_MAP[10+pos]);romanBuf.push(ROMAN_NUMBER_MAP[20+number]);const romanStr=romanBuf.join("");return lowerCase?romanStr.toLowerCase():romanStr;}function log2(x){if(x<=0){return 0;}return Math.ceil(Math.log2(x));}function readInt8(data,offset){return data[offset]<<24>>24;}function readUint16(data,offset){return data[offset]<<8|data[offset+1];}function readUint32(data,offset){return (data[offset]<<24|data[offset+1]<<16|data[offset+2]<<8|data[offset+3])>>>0;}function isWhiteSpace(ch){return ch===0x20||ch===0x09||ch===0x0d||ch===0x0a;}function parseXFAPath(path){const positionPattern=/(.+)\[(\d+)\]$/;return path.split(".").map(component=>{const m=component.match(positionPattern);if(m){return {name:m[1],pos:parseInt(m[2],10)};}return {name:component,pos:0};});}function escapePDFName(str){const buffer=[];let start=0;for(let i=0,ii=str.length;i<ii;i++){const char=str.charCodeAt(i);if(char<0x21||char>0x7e||char===0x23||char===0x28||char===0x29||char===0x3c||char===0x3e||char===0x5b||char===0x5d||char===0x7b||char===0x7d||char===0x2f||char===0x25){if(start<i){buffer.push(str.substring(start,i));}buffer.push(`#${char.toString(16)}`);start=i+1;}}if(buffer.length===0){return str;}if(start<str.length){buffer.push(str.substring(start,str.length));}return buffer.join("");}function escapeString(str){return str.replace(/([()\\\n\r])/g,match=>{if(match==="\n"){return "\\n";}else if(match==="\r"){return "\\r";}return `\\${match}`;});}function _collectJS(entry,xref,list,parents){if(!entry){return;}let parent=null;if(entry instanceof _primitives.Ref){if(parents.has(entry)){return;}parent=entry;parents.put(parent);entry=xref.fetch(entry);}if(Array.isArray(entry)){for(const element of entry){_collectJS(element,xref,list,parents);}}else if(entry instanceof _primitives.Dict){if((0, _primitives.isName)(entry.get("S"),"JavaScript")){const js=entry.get("JS");let code;if(js instanceof _base_stream.BaseStream){code=js.getString();}else if(typeof js==="string"){code=js;}code=code&&(0, _util.stringToPDFString)(code).replace(/\u0000/g,"");if(code){list.push(code);}}_collectJS(entry.getRaw("Next"),xref,list,parents);}if(parent){parents.remove(parent);}}function collectActions(xref,dict,eventType){const actions=Object.create(null);const additionalActionsDicts=getInheritableProperty({dict,key:"AA",stopWhenFound:false});if(additionalActionsDicts){for(let i=additionalActionsDicts.length-1;i>=0;i--){const additionalActions=additionalActionsDicts[i];if(!(additionalActions instanceof _primitives.Dict)){continue;}for(const key of additionalActions.getKeys()){const action=eventType[key];if(!action){continue;}const actionDict=additionalActions.getRaw(key);const parents=new _primitives.RefSet();const list=[];_collectJS(actionDict,xref,list,parents);if(list.length>0){actions[action]=list;}}}}if(dict.has("A")){const actionDict=dict.get("A");const parents=new _primitives.RefSet();const list=[];_collectJS(actionDict,xref,list,parents);if(list.length>0){actions.Action=list;}}return (0, _util.objectSize)(actions)>0?actions:null;}const XMLEntities={0x3c:"&lt;",0x3e:"&gt;",0x26:"&amp;",0x22:"&quot;",0x27:"&apos;"};function encodeToXmlString(str){const buffer=[];let start=0;for(let i=0,ii=str.length;i<ii;i++){const char=str.codePointAt(i);if(0x20<=char&&char<=0x7e){const entity=XMLEntities[char];if(entity){if(start<i){buffer.push(str.substring(start,i));}buffer.push(entity);start=i+1;}}else {if(start<i){buffer.push(str.substring(start,i));}buffer.push(`&#x${char.toString(16).toUpperCase()};`);if(char>0xd7ff&&(char<0xe000||char>0xfffd)){i++;}start=i+1;}}if(buffer.length===0){return str;}if(start<str.length){buffer.push(str.substring(start,str.length));}return buffer.join("");}function validateCSSFont(cssFontInfo){const DEFAULT_CSS_FONT_OBLIQUE="14";const DEFAULT_CSS_FONT_WEIGHT="400";const CSS_FONT_WEIGHT_VALUES=new Set(["100","200","300","400","500","600","700","800","900","1000","normal","bold","bolder","lighter"]);const{fontFamily,fontWeight,italicAngle}=cssFontInfo;if(/^".*"$/.test(fontFamily)){if(/[^\\]"/.test(fontFamily.slice(1,fontFamily.length-1))){(0, _util.warn)(`XFA - FontFamily contains some unescaped ": ${fontFamily}.`);return false;}}else if(/^'.*'$/.test(fontFamily)){if(/[^\\]'/.test(fontFamily.slice(1,fontFamily.length-1))){(0, _util.warn)(`XFA - FontFamily contains some unescaped ': ${fontFamily}.`);return false;}}else {for(const ident of fontFamily.split(/[ \t]+/)){if(/^(\d|(-(\d|-)))/.test(ident)||!/^[\w-\\]+$/.test(ident)){(0, _util.warn)(`XFA - FontFamily contains some invalid <custom-ident>: ${fontFamily}.`);return false;}}}const weight=fontWeight?fontWeight.toString():"";cssFontInfo.fontWeight=CSS_FONT_WEIGHT_VALUES.has(weight)?weight:DEFAULT_CSS_FONT_WEIGHT;const angle=parseFloat(italicAngle);cssFontInfo.italicAngle=isNaN(angle)||angle<-90||angle>90?DEFAULT_CSS_FONT_OBLIQUE:italicAngle.toString();return true;}function recoverJsURL(str){const URL_OPEN_METHODS=["app.launchURL","window.open","xfa.host.gotoURL"];const regex=new RegExp("^\\s*("+URL_OPEN_METHODS.join("|").split(".").join("\\.")+")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))","i");const jsUrl=regex.exec(str);if(jsUrl&&jsUrl[2]){const url=jsUrl[2];let newWindow=false;if(jsUrl[3]==="true"&&jsUrl[1]==="app.launchURL"){newWindow=true;}return {url,newWindow};}return null;}function numberToString(value){if(Number.isInteger(value)){return value.toString();}const roundedValue=Math.round(value*100);if(roundedValue%100===0){return (roundedValue/100).toString();}if(roundedValue%10===0){return value.toFixed(1);}return value.toFixed(2);}function getNewAnnotationsMap(annotationStorage){if(!annotationStorage){return null;}const newAnnotationsByPage=new Map();for(const[key,value]of annotationStorage){if(!key.startsWith(_util.AnnotationEditorPrefix)){continue;}let annotations=newAnnotationsByPage.get(value.pageIndex);if(!annotations){annotations=[];newAnnotationsByPage.set(value.pageIndex,annotations);}annotations.push(value);}return newAnnotationsByPage.size>0?newAnnotationsByPage:null;}function isAscii(str){return /^[\x00-\x7F]*$/.test(str);}function stringToUTF16HexString(str){const buf=[];for(let i=0,ii=str.length;i<ii;i++){const char=str.charCodeAt(i);buf.push((char>>8&0xff).toString(16).padStart(2,"0"),(char&0xff).toString(16).padStart(2,"0"));}return buf.join("");}function stringToUTF16String(str){let bigEndian=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;const buf=[];if(bigEndian){buf.push("\xFE\xFF");}for(let i=0,ii=str.length;i<ii;i++){const char=str.charCodeAt(i);buf.push(String.fromCharCode(char>>8&0xff),String.fromCharCode(char&0xff));}return buf.join("");}function getRotationMatrix(rotation,width,height){switch(rotation){case 90:return [0,1,-1,0,width,0];case 180:return [-1,0,0,-1,width,height];case 270:return [0,-1,1,0,0,height];default:throw new Error("Invalid rotation");}}/***/},/* 137 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.RefSetCache=exports.RefSet=exports.Ref=exports.Name=exports.EOF=exports.Dict=exports.Cmd=exports.CIRCULAR_REF=void 0;exports.clearPrimitiveCaches=clearPrimitiveCaches;exports.isCmd=isCmd;exports.isDict=isDict;exports.isName=isName;exports.isRefsEqual=isRefsEqual;var _util=__w_pdfjs_require__(2);const CIRCULAR_REF=Symbol("CIRCULAR_REF");exports.CIRCULAR_REF=CIRCULAR_REF;const EOF=Symbol("EOF");exports.EOF=EOF;const Name=function NameClosure(){let nameCache=Object.create(null);class Name{constructor(name){this.name=name;}static get(name){return nameCache[name]||(nameCache[name]=new Name(name));}static _clearCache(){nameCache=Object.create(null);}}return Name;}();exports.Name=Name;const Cmd=function CmdClosure(){let cmdCache=Object.create(null);class Cmd{constructor(cmd){this.cmd=cmd;}static get(cmd){return cmdCache[cmd]||(cmdCache[cmd]=new Cmd(cmd));}static _clearCache(){cmdCache=Object.create(null);}}return Cmd;}();exports.Cmd=Cmd;const nonSerializable=function nonSerializableClosure(){return nonSerializable;};class Dict{constructor(){let xref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this._map=Object.create(null);this.xref=xref;this.objId=null;this.suppressEncryption=false;this.__nonSerializable__=nonSerializable;}assignXref(newXref){this.xref=newXref;}get size(){return Object.keys(this._map).length;}get(key1,key2,key3){let value=this._map[key1];if(value===undefined&&key2!==undefined){value=this._map[key2];if(value===undefined&&key3!==undefined){value=this._map[key3];}}if(value instanceof Ref&&this.xref){return this.xref.fetch(value,this.suppressEncryption);}return value;}async getAsync(key1,key2,key3){let value=this._map[key1];if(value===undefined&&key2!==undefined){value=this._map[key2];if(value===undefined&&key3!==undefined){value=this._map[key3];}}if(value instanceof Ref&&this.xref){return this.xref.fetchAsync(value,this.suppressEncryption);}return value;}getArray(key1,key2,key3){let value=this._map[key1];if(value===undefined&&key2!==undefined){value=this._map[key2];if(value===undefined&&key3!==undefined){value=this._map[key3];}}if(value instanceof Ref&&this.xref){value=this.xref.fetch(value,this.suppressEncryption);}if(Array.isArray(value)){value=value.slice();for(let i=0,ii=value.length;i<ii;i++){if(value[i]instanceof Ref&&this.xref){value[i]=this.xref.fetch(value[i],this.suppressEncryption);}}}return value;}getRaw(key){return this._map[key];}getKeys(){return Object.keys(this._map);}getRawValues(){return Object.values(this._map);}set(key,value){this._map[key]=value;}has(key){return this._map[key]!==undefined;}forEach(callback){for(const key in this._map){callback(key,this.get(key));}}static get empty(){const emptyDict=new Dict(null);emptyDict.set=(key,value)=>{(0, _util.unreachable)("Should not call `set` on the empty dictionary.");};return (0, _util.shadow)(this,"empty",emptyDict);}static merge(_ref){let{xref,dictArray,mergeSubDicts=false}=_ref;const mergedDict=new Dict(xref),properties=new Map();for(const dict of dictArray){if(!(dict instanceof Dict)){continue;}for(const[key,value]of Object.entries(dict._map)){let property=properties.get(key);if(property===undefined){property=[];properties.set(key,property);}else if(!mergeSubDicts||!(value instanceof Dict)){continue;}property.push(value);}}for(const[name,values]of properties){if(values.length===1||!(values[0]instanceof Dict)){mergedDict._map[name]=values[0];continue;}const subDict=new Dict(xref);for(const dict of values){for(const[key,value]of Object.entries(dict._map)){if(subDict._map[key]===undefined){subDict._map[key]=value;}}}if(subDict.size>0){mergedDict._map[name]=subDict;}}properties.clear();return mergedDict.size>0?mergedDict:Dict.empty;}}exports.Dict=Dict;const Ref=function RefClosure(){let refCache=Object.create(null);class Ref{constructor(num,gen){this.num=num;this.gen=gen;}toString(){if(this.gen===0){return `${this.num}R`;}return `${this.num}R${this.gen}`;}static get(num,gen){const key=gen===0?`${num}R`:`${num}R${gen}`;return refCache[key]||(refCache[key]=new Ref(num,gen));}static _clearCache(){refCache=Object.create(null);}}return Ref;}();exports.Ref=Ref;class RefSet{constructor(){let parent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this._set=new Set(parent&&parent._set);}has(ref){return this._set.has(ref.toString());}put(ref){this._set.add(ref.toString());}remove(ref){this._set.delete(ref.toString());}[Symbol.iterator](){return this._set.values();}clear(){this._set.clear();}}exports.RefSet=RefSet;class RefSetCache{constructor(){this._map=new Map();}get size(){return this._map.size;}get(ref){return this._map.get(ref.toString());}has(ref){return this._map.has(ref.toString());}put(ref,obj){this._map.set(ref.toString(),obj);}putAlias(ref,aliasRef){this._map.set(ref.toString(),this.get(aliasRef));}[Symbol.iterator](){return this._map.values();}clear(){this._map.clear();}}exports.RefSetCache=RefSetCache;function isName(v,name){return v instanceof Name&&(name===undefined||v.name===name);}function isCmd(v,cmd){return v instanceof Cmd&&(cmd===undefined||v.cmd===cmd);}function isDict(v,type){return v instanceof Dict&&(type===undefined||isName(v.get("Type"),type));}function isRefsEqual(v1,v2){return v1.num===v2.num&&v1.gen===v2.gen;}function clearPrimitiveCaches(){Cmd._clearCache();Name._clearCache();Ref._clearCache();}/***/},/* 138 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.BaseStream=void 0;var _util=__w_pdfjs_require__(2);class BaseStream{constructor(){if(this.constructor===BaseStream){(0, _util.unreachable)("Cannot initialize BaseStream.");}}get length(){(0, _util.unreachable)("Abstract getter `length` accessed");}get isEmpty(){(0, _util.unreachable)("Abstract getter `isEmpty` accessed");}get isDataLoaded(){return (0, _util.shadow)(this,"isDataLoaded",true);}getByte(){(0, _util.unreachable)("Abstract method `getByte` called");}getBytes(length){(0, _util.unreachable)("Abstract method `getBytes` called");}peekByte(){const peekedByte=this.getByte();if(peekedByte!==-1){this.pos--;}return peekedByte;}peekBytes(length){const bytes=this.getBytes(length);this.pos-=bytes.length;return bytes;}getUint16(){const b0=this.getByte();const b1=this.getByte();if(b0===-1||b1===-1){return -1;}return (b0<<8)+b1;}getInt32(){const b0=this.getByte();const b1=this.getByte();const b2=this.getByte();const b3=this.getByte();return (b0<<24)+(b1<<16)+(b2<<8)+b3;}getByteRange(begin,end){(0, _util.unreachable)("Abstract method `getByteRange` called");}getString(length){return (0, _util.bytesToString)(this.getBytes(length));}skip(n){this.pos+=n||1;}reset(){(0, _util.unreachable)("Abstract method `reset` called");}moveStart(){(0, _util.unreachable)("Abstract method `moveStart` called");}makeSubStream(start,length){(0, _util.unreachable)("Abstract method `makeSubStream` called");}getBaseStreams(){return null;}}exports.BaseStream=BaseStream;/***/},/* 139 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.NetworkPdfManager=exports.LocalPdfManager=void 0;var _util=__w_pdfjs_require__(2);var _chunked_stream=__w_pdfjs_require__(140);var _core_utils=__w_pdfjs_require__(136);var _document=__w_pdfjs_require__(142);var _stream=__w_pdfjs_require__(141);function parseDocBaseUrl(url){if(url){const absoluteUrl=(0, _util.createValidAbsoluteUrl)(url);if(absoluteUrl){return absoluteUrl.href;}(0, _util.warn)(`Invalid absolute docBaseUrl: "${url}".`);}return null;}class BasePdfManager{constructor(args){if(this.constructor===BasePdfManager){(0, _util.unreachable)("Cannot initialize BasePdfManager.");}this._docBaseUrl=parseDocBaseUrl(args.docBaseUrl);this._docId=args.docId;this._password=args.password;this.enableXfa=args.enableXfa;this.evaluatorOptions=args.evaluatorOptions;}get docId(){return this._docId;}get password(){return this._password;}get docBaseUrl(){const catalog=this.pdfDocument.catalog;return (0, _util.shadow)(this,"docBaseUrl",catalog.baseUrl||this._docBaseUrl);}ensureDoc(prop,args){return this.ensure(this.pdfDocument,prop,args);}ensureXRef(prop,args){return this.ensure(this.pdfDocument.xref,prop,args);}ensureCatalog(prop,args){return this.ensure(this.pdfDocument.catalog,prop,args);}getPage(pageIndex){return this.pdfDocument.getPage(pageIndex);}fontFallback(id,handler){return this.pdfDocument.fontFallback(id,handler);}loadXfaFonts(handler,task){return this.pdfDocument.loadXfaFonts(handler,task);}loadXfaImages(){return this.pdfDocument.loadXfaImages();}serializeXfaData(annotationStorage){return this.pdfDocument.serializeXfaData(annotationStorage);}cleanup(){let manuallyTriggered=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.pdfDocument.cleanup(manuallyTriggered);}async ensure(obj,prop,args){(0, _util.unreachable)("Abstract method `ensure` called");}requestRange(begin,end){(0, _util.unreachable)("Abstract method `requestRange` called");}requestLoadedStream(){(0, _util.unreachable)("Abstract method `requestLoadedStream` called");}sendProgressiveData(chunk){(0, _util.unreachable)("Abstract method `sendProgressiveData` called");}updatePassword(password){this._password=password;}terminate(reason){(0, _util.unreachable)("Abstract method `terminate` called");}}class LocalPdfManager extends BasePdfManager{constructor(args){super(args);const stream=new _stream.Stream(args.source);this.pdfDocument=new _document.PDFDocument(this,stream);this._loadedStreamPromise=Promise.resolve(stream);}async ensure(obj,prop,args){const value=obj[prop];if(typeof value==="function"){return value.apply(obj,args);}return value;}requestRange(begin,end){return Promise.resolve();}requestLoadedStream(){return this._loadedStreamPromise;}terminate(reason){}}exports.LocalPdfManager=LocalPdfManager;class NetworkPdfManager extends BasePdfManager{constructor(args){super(args);this.streamManager=new _chunked_stream.ChunkedStreamManager(args.source,{msgHandler:args.handler,length:args.length,disableAutoFetch:args.disableAutoFetch,rangeChunkSize:args.rangeChunkSize});this.pdfDocument=new _document.PDFDocument(this,this.streamManager.getStream());}async ensure(obj,prop,args){try{const value=obj[prop];if(typeof value==="function"){return value.apply(obj,args);}return value;}catch(ex){if(!(ex instanceof _core_utils.MissingDataException)){throw ex;}await this.requestRange(ex.begin,ex.end);return this.ensure(obj,prop,args);}}requestRange(begin,end){return this.streamManager.requestRange(begin,end);}requestLoadedStream(){let noFetch=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.streamManager.requestAllChunks(noFetch);}sendProgressiveData(chunk){this.streamManager.onReceiveData({chunk});}terminate(reason){this.streamManager.abort(reason);}}exports.NetworkPdfManager=NetworkPdfManager;/***/},/* 140 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.ChunkedStreamManager=exports.ChunkedStream=void 0;var _core_utils=__w_pdfjs_require__(136);var _util=__w_pdfjs_require__(2);var _stream=__w_pdfjs_require__(141);class ChunkedStream extends _stream.Stream{constructor(length,chunkSize,manager){super(new Uint8Array(length),0,length,null);this.chunkSize=chunkSize;this._loadedChunks=new Set();this.numChunks=Math.ceil(length/chunkSize);this.manager=manager;this.progressiveDataLength=0;this.lastSuccessfulEnsureByteChunk=-1;}getMissingChunks(){const chunks=[];for(let chunk=0,n=this.numChunks;chunk<n;++chunk){if(!this._loadedChunks.has(chunk)){chunks.push(chunk);}}return chunks;}get numChunksLoaded(){return this._loadedChunks.size;}get isDataLoaded(){return this.numChunksLoaded===this.numChunks;}onReceiveData(begin,chunk){const chunkSize=this.chunkSize;if(begin%chunkSize!==0){throw new Error(`Bad begin offset: ${begin}`);}const end=begin+chunk.byteLength;if(end%chunkSize!==0&&end!==this.bytes.length){throw new Error(`Bad end offset: ${end}`);}this.bytes.set(new Uint8Array(chunk),begin);const beginChunk=Math.floor(begin/chunkSize);const endChunk=Math.floor((end-1)/chunkSize)+1;for(let curChunk=beginChunk;curChunk<endChunk;++curChunk){this._loadedChunks.add(curChunk);}}onReceiveProgressiveData(data){let position=this.progressiveDataLength;const beginChunk=Math.floor(position/this.chunkSize);this.bytes.set(new Uint8Array(data),position);position+=data.byteLength;this.progressiveDataLength=position;const endChunk=position>=this.end?this.numChunks:Math.floor(position/this.chunkSize);for(let curChunk=beginChunk;curChunk<endChunk;++curChunk){this._loadedChunks.add(curChunk);}}ensureByte(pos){if(pos<this.progressiveDataLength){return;}const chunk=Math.floor(pos/this.chunkSize);if(chunk>this.numChunks){return;}if(chunk===this.lastSuccessfulEnsureByteChunk){return;}if(!this._loadedChunks.has(chunk)){throw new _core_utils.MissingDataException(pos,pos+1);}this.lastSuccessfulEnsureByteChunk=chunk;}ensureRange(begin,end){if(begin>=end){return;}if(end<=this.progressiveDataLength){return;}const beginChunk=Math.floor(begin/this.chunkSize);if(beginChunk>this.numChunks){return;}const endChunk=Math.min(Math.floor((end-1)/this.chunkSize)+1,this.numChunks);for(let chunk=beginChunk;chunk<endChunk;++chunk){if(!this._loadedChunks.has(chunk)){throw new _core_utils.MissingDataException(begin,end);}}}nextEmptyChunk(beginChunk){const numChunks=this.numChunks;for(let i=0;i<numChunks;++i){const chunk=(beginChunk+i)%numChunks;if(!this._loadedChunks.has(chunk)){return chunk;}}return null;}hasChunk(chunk){return this._loadedChunks.has(chunk);}getByte(){const pos=this.pos;if(pos>=this.end){return -1;}if(pos>=this.progressiveDataLength){this.ensureByte(pos);}return this.bytes[this.pos++];}getBytes(length){const bytes=this.bytes;const pos=this.pos;const strEnd=this.end;if(!length){if(strEnd>this.progressiveDataLength){this.ensureRange(pos,strEnd);}return bytes.subarray(pos,strEnd);}let end=pos+length;if(end>strEnd){end=strEnd;}if(end>this.progressiveDataLength){this.ensureRange(pos,end);}this.pos=end;return bytes.subarray(pos,end);}getByteRange(begin,end){if(begin<0){begin=0;}if(end>this.end){end=this.end;}if(end>this.progressiveDataLength){this.ensureRange(begin,end);}return this.bytes.subarray(begin,end);}makeSubStream(start,length){let dict=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(length){if(start+length>this.progressiveDataLength){this.ensureRange(start,start+length);}}else {if(start>=this.progressiveDataLength){this.ensureByte(start);}}function ChunkedStreamSubstream(){}ChunkedStreamSubstream.prototype=Object.create(this);ChunkedStreamSubstream.prototype.getMissingChunks=function(){const chunkSize=this.chunkSize;const beginChunk=Math.floor(this.start/chunkSize);const endChunk=Math.floor((this.end-1)/chunkSize)+1;const missingChunks=[];for(let chunk=beginChunk;chunk<endChunk;++chunk){if(!this._loadedChunks.has(chunk)){missingChunks.push(chunk);}}return missingChunks;};Object.defineProperty(ChunkedStreamSubstream.prototype,"isDataLoaded",{get(){if(this.numChunksLoaded===this.numChunks){return true;}return this.getMissingChunks().length===0;},configurable:true});const subStream=new ChunkedStreamSubstream();subStream.pos=subStream.start=start;subStream.end=start+length||this.end;subStream.dict=dict;return subStream;}getBaseStreams(){return [this];}}exports.ChunkedStream=ChunkedStream;class ChunkedStreamManager{constructor(pdfNetworkStream,args){this.length=args.length;this.chunkSize=args.rangeChunkSize;this.stream=new ChunkedStream(this.length,this.chunkSize,this);this.pdfNetworkStream=pdfNetworkStream;this.disableAutoFetch=args.disableAutoFetch;this.msgHandler=args.msgHandler;this.currRequestId=0;this._chunksNeededByRequest=new Map();this._requestsByChunk=new Map();this._promisesByRequest=new Map();this.progressiveDataLength=0;this.aborted=false;this._loadedStreamCapability=(0, _util.createPromiseCapability)();}sendRequest(begin,end){const rangeReader=this.pdfNetworkStream.getRangeReader(begin,end);if(!rangeReader.isStreamingSupported){rangeReader.onProgress=this.onProgress.bind(this);}let chunks=[],loaded=0;return new Promise((resolve,reject)=>{const readChunk=_ref=>{let{value,done}=_ref;try{if(done){const chunkData=(0,_core_utils.arrayBuffersToBytes)(chunks);chunks=null;resolve(chunkData);return;}loaded+=value.byteLength;if(rangeReader.isStreamingSupported){this.onProgress({loaded});}chunks.push(value);rangeReader.read().then(readChunk,reject);}catch(e){reject(e);}};rangeReader.read().then(readChunk,reject);}).then(data=>{if(this.aborted){return;}this.onReceiveData({chunk:data,begin});});}requestAllChunks(){let noFetch=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(!noFetch){const missingChunks=this.stream.getMissingChunks();this._requestChunks(missingChunks);}return this._loadedStreamCapability.promise;}_requestChunks(chunks){const requestId=this.currRequestId++;const chunksNeeded=new Set();this._chunksNeededByRequest.set(requestId,chunksNeeded);for(const chunk of chunks){if(!this.stream.hasChunk(chunk)){chunksNeeded.add(chunk);}}if(chunksNeeded.size===0){return Promise.resolve();}const capability=(0, _util.createPromiseCapability)();this._promisesByRequest.set(requestId,capability);const chunksToRequest=[];for(const chunk of chunksNeeded){let requestIds=this._requestsByChunk.get(chunk);if(!requestIds){requestIds=[];this._requestsByChunk.set(chunk,requestIds);chunksToRequest.push(chunk);}requestIds.push(requestId);}if(chunksToRequest.length>0){const groupedChunksToRequest=this.groupChunks(chunksToRequest);for(const groupedChunk of groupedChunksToRequest){const begin=groupedChunk.beginChunk*this.chunkSize;const end=Math.min(groupedChunk.endChunk*this.chunkSize,this.length);this.sendRequest(begin,end).catch(capability.reject);}}return capability.promise.catch(reason=>{if(this.aborted){return;}throw reason;});}getStream(){return this.stream;}requestRange(begin,end){end=Math.min(end,this.length);const beginChunk=this.getBeginChunk(begin);const endChunk=this.getEndChunk(end);const chunks=[];for(let chunk=beginChunk;chunk<endChunk;++chunk){chunks.push(chunk);}return this._requestChunks(chunks);}requestRanges(){let ranges=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];const chunksToRequest=[];for(const range of ranges){const beginChunk=this.getBeginChunk(range.begin);const endChunk=this.getEndChunk(range.end);for(let chunk=beginChunk;chunk<endChunk;++chunk){if(!chunksToRequest.includes(chunk)){chunksToRequest.push(chunk);}}}chunksToRequest.sort(function(a,b){return a-b;});return this._requestChunks(chunksToRequest);}groupChunks(chunks){const groupedChunks=[];let beginChunk=-1;let prevChunk=-1;for(let i=0,ii=chunks.length;i<ii;++i){const chunk=chunks[i];if(beginChunk<0){beginChunk=chunk;}if(prevChunk>=0&&prevChunk+1!==chunk){groupedChunks.push({beginChunk,endChunk:prevChunk+1});beginChunk=chunk;}if(i+1===chunks.length){groupedChunks.push({beginChunk,endChunk:chunk+1});}prevChunk=chunk;}return groupedChunks;}onProgress(args){this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize+args.loaded,total:this.length});}onReceiveData(args){const chunk=args.chunk;const isProgressive=args.begin===undefined;const begin=isProgressive?this.progressiveDataLength:args.begin;const end=begin+chunk.byteLength;const beginChunk=Math.floor(begin/this.chunkSize);const endChunk=end<this.length?Math.floor(end/this.chunkSize):Math.ceil(end/this.chunkSize);if(isProgressive){this.stream.onReceiveProgressiveData(chunk);this.progressiveDataLength=end;}else {this.stream.onReceiveData(begin,chunk);}if(this.stream.isDataLoaded){this._loadedStreamCapability.resolve(this.stream);}const loadedRequests=[];for(let curChunk=beginChunk;curChunk<endChunk;++curChunk){const requestIds=this._requestsByChunk.get(curChunk);if(!requestIds){continue;}this._requestsByChunk.delete(curChunk);for(const requestId of requestIds){const chunksNeeded=this._chunksNeededByRequest.get(requestId);if(chunksNeeded.has(curChunk)){chunksNeeded.delete(curChunk);}if(chunksNeeded.size>0){continue;}loadedRequests.push(requestId);}}if(!this.disableAutoFetch&&this._requestsByChunk.size===0){let nextEmptyChunk;if(this.stream.numChunksLoaded===1){const lastChunk=this.stream.numChunks-1;if(!this.stream.hasChunk(lastChunk)){nextEmptyChunk=lastChunk;}}else {nextEmptyChunk=this.stream.nextEmptyChunk(endChunk);}if(Number.isInteger(nextEmptyChunk)){this._requestChunks([nextEmptyChunk]);}}for(const requestId of loadedRequests){const capability=this._promisesByRequest.get(requestId);this._promisesByRequest.delete(requestId);capability.resolve();}this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize,total:this.length});}onError(err){this._loadedStreamCapability.reject(err);}getBeginChunk(begin){return Math.floor(begin/this.chunkSize);}getEndChunk(end){return Math.floor((end-1)/this.chunkSize)+1;}abort(reason){this.aborted=true;if(this.pdfNetworkStream){this.pdfNetworkStream.cancelAllRequests(reason);}for(const capability of this._promisesByRequest.values()){capability.reject(reason);}}}exports.ChunkedStreamManager=ChunkedStreamManager;/***/},/* 141 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.StringStream=exports.Stream=exports.NullStream=void 0;var _base_stream=__w_pdfjs_require__(138);var _util=__w_pdfjs_require__(2);class Stream extends _base_stream.BaseStream{constructor(arrayBuffer,start,length,dict){super();this.bytes=arrayBuffer instanceof Uint8Array?arrayBuffer:new Uint8Array(arrayBuffer);this.start=start||0;this.pos=this.start;this.end=start+length||this.bytes.length;this.dict=dict;}get length(){return this.end-this.start;}get isEmpty(){return this.length===0;}getByte(){if(this.pos>=this.end){return -1;}return this.bytes[this.pos++];}getBytes(length){const bytes=this.bytes;const pos=this.pos;const strEnd=this.end;if(!length){return bytes.subarray(pos,strEnd);}let end=pos+length;if(end>strEnd){end=strEnd;}this.pos=end;return bytes.subarray(pos,end);}getByteRange(begin,end){if(begin<0){begin=0;}if(end>this.end){end=this.end;}return this.bytes.subarray(begin,end);}reset(){this.pos=this.start;}moveStart(){this.start=this.pos;}makeSubStream(start,length){let dict=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;return new Stream(this.bytes.buffer,start,length,dict);}}exports.Stream=Stream;class StringStream extends Stream{constructor(str){super((0, _util.stringToBytes)(str));}}exports.StringStream=StringStream;class NullStream extends Stream{constructor(){super(new Uint8Array(0));}}exports.NullStream=NullStream;/***/},/* 142 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.Page=exports.PDFDocument=void 0;var _annotation=__w_pdfjs_require__(143);var _util=__w_pdfjs_require__(2);var _core_utils=__w_pdfjs_require__(136);var _primitives=__w_pdfjs_require__(137);var _xfa_fonts=__w_pdfjs_require__(182);var _base_stream=__w_pdfjs_require__(138);var _crypto=__w_pdfjs_require__(198);var _catalog=__w_pdfjs_require__(200);var _cleanup_helper=__w_pdfjs_require__(202);var _dataset_reader=__w_pdfjs_require__(231);var _parser=__w_pdfjs_require__(148);var _stream=__w_pdfjs_require__(141);var _object_loader=__w_pdfjs_require__(206);var _operator_list=__w_pdfjs_require__(193);var _evaluator=__w_pdfjs_require__(146);var _decode_stream=__w_pdfjs_require__(150);var _struct_tree=__w_pdfjs_require__(205);var _writer=__w_pdfjs_require__(196);var _factory=__w_pdfjs_require__(207);var _xref=__w_pdfjs_require__(232);const DEFAULT_USER_UNIT=1.0;const LETTER_SIZE_MEDIABOX=[0,0,612,792];class Page{constructor(_ref){let{pdfManager,xref,pageIndex,pageDict,ref,globalIdFactory,fontCache,builtInCMapCache,standardFontDataCache,globalImageCache,nonBlendModesSet,xfaFactory}=_ref;this.pdfManager=pdfManager;this.pageIndex=pageIndex;this.pageDict=pageDict;this.xref=xref;this.ref=ref;this.fontCache=fontCache;this.builtInCMapCache=builtInCMapCache;this.standardFontDataCache=standardFontDataCache;this.globalImageCache=globalImageCache;this.nonBlendModesSet=nonBlendModesSet;this.evaluatorOptions=pdfManager.evaluatorOptions;this.resourcesPromise=null;this.xfaFactory=xfaFactory;const idCounters={obj:0};this._localIdFactory=class extends globalIdFactory{static createObjId(){return `p${pageIndex}_${++idCounters.obj}`;}static getPageObjId(){return `page${ref.toString()}`;}};}_getInheritableProperty(key){let getArray=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;const value=(0, _core_utils.getInheritableProperty)({dict:this.pageDict,key,getArray,stopWhenFound:false});if(!Array.isArray(value)){return value;}if(value.length===1||!(value[0]instanceof _primitives.Dict)){return value[0];}return _primitives.Dict.merge({xref:this.xref,dictArray:value});}get content(){return this.pageDict.getArray("Contents");}get resources(){const resources=this._getInheritableProperty("Resources");return (0, _util.shadow)(this,"resources",resources instanceof _primitives.Dict?resources:_primitives.Dict.empty);}_getBoundingBox(name){if(this.xfaData){return this.xfaData.bbox;}let box=this._getInheritableProperty(name,true);if(Array.isArray(box)&&box.length===4){box=_util.Util.normalizeRect(box);if(box[2]-box[0]>0&&box[3]-box[1]>0){return box;}(0, _util.warn)(`Empty, or invalid, /${name} entry.`);}return null;}get mediaBox(){return (0, _util.shadow)(this,"mediaBox",this._getBoundingBox("MediaBox")||LETTER_SIZE_MEDIABOX);}get cropBox(){return (0, _util.shadow)(this,"cropBox",this._getBoundingBox("CropBox")||this.mediaBox);}get userUnit(){let obj=this.pageDict.get("UserUnit");if(typeof obj!=="number"||obj<=0){obj=DEFAULT_USER_UNIT;}return (0, _util.shadow)(this,"userUnit",obj);}get view(){const{cropBox,mediaBox}=this;if(cropBox!==mediaBox&&!(0, _util.isArrayEqual)(cropBox,mediaBox)){const box=_util.Util.intersect(cropBox,mediaBox);if(box&&box[2]-box[0]>0&&box[3]-box[1]>0){return (0, _util.shadow)(this,"view",box);}(0, _util.warn)("Empty /CropBox and /MediaBox intersection.");}return (0, _util.shadow)(this,"view",mediaBox);}get rotate(){let rotate=this._getInheritableProperty("Rotate")||0;if(rotate%90!==0){rotate=0;}else if(rotate>=360){rotate%=360;}else if(rotate<0){rotate=(rotate%360+360)%360;}return (0, _util.shadow)(this,"rotate",rotate);}_onSubStreamError(handler,reason,objId){if(this.evaluatorOptions.ignoreErrors){handler.send("UnsupportedFeature",{featureId:_util.UNSUPPORTED_FEATURES.errorContentSubStream});(0, _util.warn)(`getContentStream - ignoring sub-stream (${objId}): "${reason}".`);return;}throw reason;}getContentStream(handler){return this.pdfManager.ensure(this,"content").then(content=>{if(content instanceof _base_stream.BaseStream){return content;}if(Array.isArray(content)){return new _decode_stream.StreamsSequenceStream(content,this._onSubStreamError.bind(this,handler));}return new _stream.NullStream();});}get xfaData(){return (0, _util.shadow)(this,"xfaData",this.xfaFactory?{bbox:this.xfaFactory.getBoundingBox(this.pageIndex)}:null);}async saveNewAnnotations(handler,task,annotations){if(this.xfaFactory){throw new Error("XFA: Cannot save new annotations.");}const partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,standardFontDataCache:this.standardFontDataCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions});const pageDict=this.pageDict;const annotationsArray=this.annotations.slice();const newData=await _annotation.AnnotationFactory.saveNewAnnotations(partialEvaluator,task,annotations);for(const{ref}of newData.annotations){annotationsArray.push(ref);}const savedDict=pageDict.get("Annots");pageDict.set("Annots",annotationsArray);const buffer=[];let transform=null;if(this.xref.encrypt){transform=this.xref.encrypt.createCipherTransform(this.ref.num,this.ref.gen);}(0, _writer.writeObject)(this.ref,pageDict,buffer,transform);if(savedDict){pageDict.set("Annots",savedDict);}const objects=newData.dependencies;objects.push({ref:this.ref,data:buffer.join("")},...newData.annotations);return objects;}save(handler,task,annotationStorage){const partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,standardFontDataCache:this.standardFontDataCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions});return this._parsedAnnotations.then(function(annotations){const newRefsPromises=[];for(const annotation of annotations){if(!annotation.mustBePrinted(annotationStorage)){continue;}newRefsPromises.push(annotation.save(partialEvaluator,task,annotationStorage).catch(function(reason){(0, _util.warn)("save - ignoring annotation data during "+`"${task.name}" task: "${reason}".`);return null;}));}return Promise.all(newRefsPromises).then(function(newRefs){return newRefs.filter(newRef=>!!newRef);});});}loadResources(keys){if(!this.resourcesPromise){this.resourcesPromise=this.pdfManager.ensure(this,"resources");}return this.resourcesPromise.then(()=>{const objectLoader=new _object_loader.ObjectLoader(this.resources,keys,this.xref);return objectLoader.load();});}getOperatorList(_ref2){let{handler,sink,task,intent,cacheKey,annotationStorage=null}=_ref2;const contentStreamPromise=this.getContentStream(handler);const resourcesPromise=this.loadResources(["ColorSpace","ExtGState","Font","Pattern","Properties","Shading","XObject"]);const partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,standardFontDataCache:this.standardFontDataCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions});const newAnnotationsByPage=!this.xfaFactory?(0, _core_utils.getNewAnnotationsMap)(annotationStorage):null;let newAnnotationsPromise=Promise.resolve(null);if(newAnnotationsByPage){const newAnnotations=newAnnotationsByPage.get(this.pageIndex);if(newAnnotations){newAnnotationsPromise=_annotation.AnnotationFactory.printNewAnnotations(partialEvaluator,task,newAnnotations);}}const dataPromises=Promise.all([contentStreamPromise,resourcesPromise]);const pageListPromise=dataPromises.then(_ref3=>{let[contentStream]=_ref3;const opList=new _operator_list.OperatorList(intent,sink);handler.send("StartRenderPage",{transparency:partialEvaluator.hasBlendModes(this.resources,this.nonBlendModesSet),pageIndex:this.pageIndex,cacheKey});return partialEvaluator.getOperatorList({stream:contentStream,task,resources:this.resources,operatorList:opList}).then(function(){return opList;});});return Promise.all([pageListPromise,this._parsedAnnotations,newAnnotationsPromise]).then(function(_ref4){let[pageOpList,annotations,newAnnotations]=_ref4;if(newAnnotations){annotations=annotations.concat(newAnnotations);}if(annotations.length===0||intent&_util.RenderingIntentFlag.ANNOTATIONS_DISABLE){pageOpList.flush(true);return {length:pageOpList.totalLength};}const renderForms=!!(intent&_util.RenderingIntentFlag.ANNOTATIONS_FORMS),intentAny=!!(intent&_util.RenderingIntentFlag.ANY),intentDisplay=!!(intent&_util.RenderingIntentFlag.DISPLAY),intentPrint=!!(intent&_util.RenderingIntentFlag.PRINT);const opListPromises=[];for(const annotation of annotations){if(intentAny||intentDisplay&&annotation.mustBeViewed(annotationStorage)||intentPrint&&annotation.mustBePrinted(annotationStorage)){opListPromises.push(annotation.getOperatorList(partialEvaluator,task,intent,renderForms,annotationStorage).catch(function(reason){(0, _util.warn)("getOperatorList - ignoring annotation data during "+`"${task.name}" task: "${reason}".`);return {opList:null,separateForm:false,separateCanvas:false};}));}}return Promise.all(opListPromises).then(function(opLists){let form=false,canvas=false;for(const{opList,separateForm,separateCanvas}of opLists){pageOpList.addOpList(opList);if(separateForm){form=separateForm;}if(separateCanvas){canvas=separateCanvas;}}pageOpList.flush(true,{form,canvas});return {length:pageOpList.totalLength};});});}extractTextContent(_ref5){let{handler,task,includeMarkedContent,sink,combineTextItems}=_ref5;const contentStreamPromise=this.getContentStream(handler);const resourcesPromise=this.loadResources(["ExtGState","Font","Properties","XObject"]);const dataPromises=Promise.all([contentStreamPromise,resourcesPromise]);return dataPromises.then(_ref6=>{let[contentStream]=_ref6;const partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,standardFontDataCache:this.standardFontDataCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions});return partialEvaluator.getTextContent({stream:contentStream,task,resources:this.resources,includeMarkedContent,combineTextItems,sink,viewBox:this.view});});}async getStructTree(){const structTreeRoot=await this.pdfManager.ensureCatalog("structTreeRoot");if(!structTreeRoot){return null;}const structTree=await this.pdfManager.ensure(this,"_parseStructTree",[structTreeRoot]);return structTree.serializable;}_parseStructTree(structTreeRoot){const tree=new _struct_tree.StructTreePage(structTreeRoot,this.pageDict);tree.parse();return tree;}async getAnnotationsData(handler,task,intent){const annotations=await this._parsedAnnotations;if(annotations.length===0){return [];}const textContentPromises=[];const annotationsData=[];let partialEvaluator;const intentAny=!!(intent&_util.RenderingIntentFlag.ANY),intentDisplay=!!(intent&_util.RenderingIntentFlag.DISPLAY),intentPrint=!!(intent&_util.RenderingIntentFlag.PRINT);for(const annotation of annotations){const isVisible=intentAny||intentDisplay&&annotation.viewable;if(isVisible||intentPrint&&annotation.printable){annotationsData.push(annotation.data);}if(annotation.hasTextContent&&isVisible){if(!partialEvaluator){partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:this.pageIndex,idFactory:this._localIdFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,standardFontDataCache:this.standardFontDataCache,globalImageCache:this.globalImageCache,options:this.evaluatorOptions});}textContentPromises.push(annotation.extractTextContent(partialEvaluator,task,this.view).catch(function(reason){(0, _util.warn)(`getAnnotationsData - ignoring textContent during "${task.name}" task: "${reason}".`);}));}}await Promise.all(textContentPromises);return annotationsData;}get annotations(){const annots=this._getInheritableProperty("Annots");return (0, _util.shadow)(this,"annotations",Array.isArray(annots)?annots:[]);}get _parsedAnnotations(){const parsedAnnotations=this.pdfManager.ensure(this,"annotations").then(()=>{const annotationPromises=[];for(const annotationRef of this.annotations){annotationPromises.push(_annotation.AnnotationFactory.create(this.xref,annotationRef,this.pdfManager,this._localIdFactory,false).catch(function(reason){(0, _util.warn)(`_parsedAnnotations: "${reason}".`);return null;}));}return Promise.all(annotationPromises).then(function(annotations){if(annotations.length===0){return annotations;}const sortedAnnotations=[];let popupAnnotations;for(const annotation of annotations){if(!annotation){continue;}if(annotation instanceof _annotation.PopupAnnotation){if(!popupAnnotations){popupAnnotations=[];}popupAnnotations.push(annotation);continue;}sortedAnnotations.push(annotation);}if(popupAnnotations){sortedAnnotations.push(...popupAnnotations);}return sortedAnnotations;});});return (0, _util.shadow)(this,"_parsedAnnotations",parsedAnnotations);}get jsActions(){const actions=(0, _core_utils.collectActions)(this.xref,this.pageDict,_util.PageActionEventType);return (0, _util.shadow)(this,"jsActions",actions);}}exports.Page=Page;const PDF_HEADER_SIGNATURE=new Uint8Array([0x25,0x50,0x44,0x46,0x2d]);const STARTXREF_SIGNATURE=new Uint8Array([0x73,0x74,0x61,0x72,0x74,0x78,0x72,0x65,0x66]);const ENDOBJ_SIGNATURE=new Uint8Array([0x65,0x6e,0x64,0x6f,0x62,0x6a]);const FINGERPRINT_FIRST_BYTES=1024;const EMPTY_FINGERPRINT="\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";function find(stream,signature){let limit=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1024;let backwards=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;const signatureLength=signature.length;const scanBytes=stream.peekBytes(limit);const scanLength=scanBytes.length-signatureLength;if(scanLength<=0){return false;}if(backwards){const signatureEnd=signatureLength-1;let pos=scanBytes.length-1;while(pos>=signatureEnd){let j=0;while(j<signatureLength&&scanBytes[pos-j]===signature[signatureEnd-j]){j++;}if(j>=signatureLength){stream.pos+=pos-signatureEnd;return true;}pos--;}}else {let pos=0;while(pos<=scanLength){let j=0;while(j<signatureLength&&scanBytes[pos+j]===signature[j]){j++;}if(j>=signatureLength){stream.pos+=pos;return true;}pos++;}}return false;}class PDFDocument{constructor(pdfManager,stream){if(stream.length<=0){throw new _util.InvalidPDFException("The PDF file is empty, i.e. its size is zero bytes.");}this.pdfManager=pdfManager;this.stream=stream;this.xref=new _xref.XRef(stream,pdfManager);this._pagePromises=new Map();this._version=null;const idCounters={font:0};this._globalIdFactory=class{static getDocId(){return `g_${pdfManager.docId}`;}static createFontId(){return `f${++idCounters.font}`;}static createObjId(){(0, _util.unreachable)("Abstract method `createObjId` called.");}static getPageObjId(){(0, _util.unreachable)("Abstract method `getPageObjId` called.");}};}parse(recoveryMode){this.xref.parse(recoveryMode);this.catalog=new _catalog.Catalog(this.pdfManager,this.xref);}get linearization(){let linearization=null;try{linearization=_parser.Linearization.create(this.stream);}catch(err){if(err instanceof _core_utils.MissingDataException){throw err;}(0, _util.info)(err);}return (0, _util.shadow)(this,"linearization",linearization);}get startXRef(){const stream=this.stream;let startXRef=0;if(this.linearization){stream.reset();if(find(stream,ENDOBJ_SIGNATURE)){startXRef=stream.pos+6-stream.start;}}else {const step=1024;const startXRefLength=STARTXREF_SIGNATURE.length;let found=false,pos=stream.end;while(!found&&pos>0){pos-=step-startXRefLength;if(pos<0){pos=0;}stream.pos=pos;found=find(stream,STARTXREF_SIGNATURE,step,true);}if(found){stream.skip(9);let ch;do{ch=stream.getByte();}while((0, _core_utils.isWhiteSpace)(ch));let str="";while(ch>=0x20&&ch<=0x39){str+=String.fromCharCode(ch);ch=stream.getByte();}startXRef=parseInt(str,10);if(isNaN(startXRef)){startXRef=0;}}}return (0, _util.shadow)(this,"startXRef",startXRef);}checkHeader(){const stream=this.stream;stream.reset();if(!find(stream,PDF_HEADER_SIGNATURE)){return;}stream.moveStart();stream.skip(PDF_HEADER_SIGNATURE.length);let version="",ch;while((ch=stream.getByte())>0x20&&version.length<7){version+=String.fromCharCode(ch);}if(_core_utils.PDF_VERSION_REGEXP.test(version)){this._version=version;}else {(0, _util.warn)(`Invalid PDF header version: ${version}`);}}parseStartXRef(){this.xref.setStartXRef(this.startXRef);}get numPages(){let num=0;if(this.catalog.hasActualNumPages){num=this.catalog.numPages;}else if(this.xfaFactory){num=this.xfaFactory.getNumPages();}else if(this.linearization){num=this.linearization.numPages;}else {num=this.catalog.numPages;}return (0, _util.shadow)(this,"numPages",num);}_hasOnlyDocumentSignatures(fields){let recursionDepth=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;const RECURSION_LIMIT=10;if(!Array.isArray(fields)){return false;}return fields.every(field=>{field=this.xref.fetchIfRef(field);if(!(field instanceof _primitives.Dict)){return false;}if(field.has("Kids")){if(++recursionDepth>RECURSION_LIMIT){(0, _util.warn)("_hasOnlyDocumentSignatures: maximum recursion depth reached");return false;}return this._hasOnlyDocumentSignatures(field.get("Kids"),recursionDepth);}const isSignature=(0, _primitives.isName)(field.get("FT"),"Sig");const rectangle=field.get("Rect");const isInvisible=Array.isArray(rectangle)&&rectangle.every(value=>value===0);return isSignature&&isInvisible;});}get _xfaStreams(){const acroForm=this.catalog.acroForm;if(!acroForm){return null;}const xfa=acroForm.get("XFA");const entries={"xdp:xdp":"",template:"",datasets:"",config:"",connectionSet:"",localeSet:"",stylesheet:"","/xdp:xdp":""};if(xfa instanceof _base_stream.BaseStream&&!xfa.isEmpty){entries["xdp:xdp"]=xfa;return entries;}if(!Array.isArray(xfa)||xfa.length===0){return null;}for(let i=0,ii=xfa.length;i<ii;i+=2){let name;if(i===0){name="xdp:xdp";}else if(i===ii-2){name="/xdp:xdp";}else {name=xfa[i];}if(!entries.hasOwnProperty(name)){continue;}const data=this.xref.fetchIfRef(xfa[i+1]);if(!(data instanceof _base_stream.BaseStream)||data.isEmpty){continue;}entries[name]=data;}return entries;}get xfaDatasets(){const streams=this._xfaStreams;if(!streams){return (0, _util.shadow)(this,"xfaDatasets",null);}for(const key of ["datasets","xdp:xdp"]){const stream=streams[key];if(!stream){continue;}try{const str=(0,_util.stringToUTF8String)(stream.getString());const data={[key]:str};return (0,_util.shadow)(this,"xfaDatasets",new _dataset_reader.DatasetReader(data));}catch(_){(0, _util.warn)("XFA - Invalid utf-8 string.");break;}}return (0, _util.shadow)(this,"xfaDatasets",null);}get xfaData(){const streams=this._xfaStreams;if(!streams){return null;}const data=Object.create(null);for(const[key,stream]of Object.entries(streams)){if(!stream){continue;}try{data[key]=(0,_util.stringToUTF8String)(stream.getString());}catch(_){(0, _util.warn)("XFA - Invalid utf-8 string.");return null;}}return data;}get xfaFactory(){let data;if(this.pdfManager.enableXfa&&this.catalog.needsRendering&&this.formInfo.hasXfa&&!this.formInfo.hasAcroForm){data=this.xfaData;}return (0, _util.shadow)(this,"xfaFactory",data?new _factory.XFAFactory(data):null);}get isPureXfa(){return this.xfaFactory?this.xfaFactory.isValid():false;}get htmlForXfa(){return this.xfaFactory?this.xfaFactory.getPages():null;}async loadXfaImages(){const xfaImagesDict=await this.pdfManager.ensureCatalog("xfaImages");if(!xfaImagesDict){return;}const keys=xfaImagesDict.getKeys();const objectLoader=new _object_loader.ObjectLoader(xfaImagesDict,keys,this.xref);await objectLoader.load();const xfaImages=new Map();for(const key of keys){const stream=xfaImagesDict.get(key);if(stream instanceof _base_stream.BaseStream){xfaImages.set(key,stream.getBytes());}}this.xfaFactory.setImages(xfaImages);}async loadXfaFonts(handler,task){const acroForm=await this.pdfManager.ensureCatalog("acroForm");if(!acroForm){return;}const resources=await acroForm.getAsync("DR");if(!(resources instanceof _primitives.Dict)){return;}const objectLoader=new _object_loader.ObjectLoader(resources,["Font"],this.xref);await objectLoader.load();const fontRes=resources.get("Font");if(!(fontRes instanceof _primitives.Dict)){return;}const options=Object.assign(Object.create(null),this.pdfManager.evaluatorOptions);options.useSystemFonts=false;const partialEvaluator=new _evaluator.PartialEvaluator({xref:this.xref,handler,pageIndex:-1,idFactory:this._globalIdFactory,fontCache:this.catalog.fontCache,builtInCMapCache:this.catalog.builtInCMapCache,standardFontDataCache:this.catalog.standardFontDataCache,options});const operatorList=new _operator_list.OperatorList();const pdfFonts=[];const initialState={get font(){return pdfFonts.at(-1);},set font(font){pdfFonts.push(font);},clone(){return this;}};const fonts=new Map();fontRes.forEach((fontName,font)=>{fonts.set(fontName,font);});const promises=[];for(const[fontName,font]of fonts){const descriptor=font.get("FontDescriptor");if(!(descriptor instanceof _primitives.Dict)){continue;}let fontFamily=descriptor.get("FontFamily");fontFamily=fontFamily.replace(/[ ]+(\d)/g,"$1");const fontWeight=descriptor.get("FontWeight");const italicAngle=-descriptor.get("ItalicAngle");const cssFontInfo={fontFamily,fontWeight,italicAngle};if(!(0, _core_utils.validateCSSFont)(cssFontInfo)){continue;}promises.push(partialEvaluator.handleSetFont(resources,[_primitives.Name.get(fontName),1],null,operatorList,task,initialState,null,cssFontInfo).catch(function(reason){(0, _util.warn)(`loadXfaFonts: "${reason}".`);return null;}));}await Promise.all(promises);const missingFonts=this.xfaFactory.setFonts(pdfFonts);if(!missingFonts){return;}options.ignoreErrors=true;promises.length=0;pdfFonts.length=0;const reallyMissingFonts=new Set();for(const missing of missingFonts){if(!(0, _xfa_fonts.getXfaFontName)(`${missing}-Regular`)){reallyMissingFonts.add(missing);}}if(reallyMissingFonts.size){missingFonts.push("PdfJS-Fallback");}for(const missing of missingFonts){if(reallyMissingFonts.has(missing)){continue;}for(const fontInfo of [{name:"Regular",fontWeight:400,italicAngle:0},{name:"Bold",fontWeight:700,italicAngle:0},{name:"Italic",fontWeight:400,italicAngle:12},{name:"BoldItalic",fontWeight:700,italicAngle:12}]){const name=`${missing}-${fontInfo.name}`;const dict=(0, _xfa_fonts.getXfaFontDict)(name);promises.push(partialEvaluator.handleSetFont(resources,[_primitives.Name.get(name),1],null,operatorList,task,initialState,dict,{fontFamily:missing,fontWeight:fontInfo.fontWeight,italicAngle:fontInfo.italicAngle}).catch(function(reason){(0, _util.warn)(`loadXfaFonts: "${reason}".`);return null;}));}}await Promise.all(promises);this.xfaFactory.appendFonts(pdfFonts,reallyMissingFonts);}async serializeXfaData(annotationStorage){return this.xfaFactory?this.xfaFactory.serializeData(annotationStorage):null;}get version(){return this.catalog.version||this._version;}get formInfo(){const formInfo={hasFields:false,hasAcroForm:false,hasXfa:false,hasSignatures:false};const acroForm=this.catalog.acroForm;if(!acroForm){return (0, _util.shadow)(this,"formInfo",formInfo);}try{const fields=acroForm.get("Fields");const hasFields=Array.isArray(fields)&&fields.length>0;formInfo.hasFields=hasFields;const xfa=acroForm.get("XFA");formInfo.hasXfa=Array.isArray(xfa)&&xfa.length>0||xfa instanceof _base_stream.BaseStream&&!xfa.isEmpty;const sigFlags=acroForm.get("SigFlags");const hasSignatures=!!(sigFlags&0x1);const hasOnlyDocumentSignatures=hasSignatures&&this._hasOnlyDocumentSignatures(fields);formInfo.hasAcroForm=hasFields&&!hasOnlyDocumentSignatures;formInfo.hasSignatures=hasSignatures;}catch(ex){if(ex instanceof _core_utils.MissingDataException){throw ex;}(0, _util.warn)(`Cannot fetch form information: "${ex}".`);}return (0, _util.shadow)(this,"formInfo",formInfo);}get documentInfo(){const docInfo={PDFFormatVersion:this.version,Language:this.catalog.lang,EncryptFilterName:this.xref.encrypt?this.xref.encrypt.filterName:null,IsLinearized:!!this.linearization,IsAcroFormPresent:this.formInfo.hasAcroForm,IsXFAPresent:this.formInfo.hasXfa,IsCollectionPresent:!!this.catalog.collection,IsSignaturesPresent:this.formInfo.hasSignatures};let infoDict;try{infoDict=this.xref.trailer.get("Info");}catch(err){if(err instanceof _core_utils.MissingDataException){throw err;}(0, _util.info)("The document information dictionary is invalid.");}if(!(infoDict instanceof _primitives.Dict)){return (0, _util.shadow)(this,"documentInfo",docInfo);}for(const key of infoDict.getKeys()){const value=infoDict.get(key);switch(key){case"Title":case"Author":case"Subject":case"Keywords":case"Creator":case"Producer":case"CreationDate":case"ModDate":if(typeof value==="string"){docInfo[key]=(0, _util.stringToPDFString)(value);continue;}break;case"Trapped":if(value instanceof _primitives.Name){docInfo[key]=value;continue;}break;default:let customValue;switch(typeof value){case"string":customValue=(0, _util.stringToPDFString)(value);break;case"number":case"boolean":customValue=value;break;default:if(value instanceof _primitives.Name){customValue=value;}break;}if(customValue===undefined){(0, _util.warn)(`Bad value, for custom key "${key}", in Info: ${value}.`);continue;}if(!docInfo.Custom){docInfo.Custom=Object.create(null);}docInfo.Custom[key]=customValue;continue;}(0, _util.warn)(`Bad value, for key "${key}", in Info: ${value}.`);}return (0, _util.shadow)(this,"documentInfo",docInfo);}get fingerprints(){function validate(data){return typeof data==="string"&&data.length>0&&data!==EMPTY_FINGERPRINT;}function hexString(hash){const buf=[];for(const num of hash){const hex=num.toString(16);buf.push(hex.padStart(2,"0"));}return buf.join("");}const idArray=this.xref.trailer.get("ID");let hashOriginal,hashModified;if(Array.isArray(idArray)&&validate(idArray[0])){hashOriginal=(0, _util.stringToBytes)(idArray[0]);if(idArray[1]!==idArray[0]&&validate(idArray[1])){hashModified=(0, _util.stringToBytes)(idArray[1]);}}else {hashOriginal=(0, _crypto.calculateMD5)(this.stream.getByteRange(0,FINGERPRINT_FIRST_BYTES),0,FINGERPRINT_FIRST_BYTES);}return (0, _util.shadow)(this,"fingerprints",[hexString(hashOriginal),hashModified?hexString(hashModified):null]);}async _getLinearizationPage(pageIndex){const{catalog,linearization,xref}=this;const ref=_primitives.Ref.get(linearization.objectNumberFirst,0);try{const obj=await xref.fetchAsync(ref);if(obj instanceof _primitives.Dict){let type=obj.getRaw("Type");if(type instanceof _primitives.Ref){type=await xref.fetchAsync(type);}if((0,_primitives.isName)(type,"Page")||!obj.has("Type")&&!obj.has("Kids")){if(!catalog.pageKidsCountCache.has(ref)){catalog.pageKidsCountCache.put(ref,1);}if(!catalog.pageIndexCache.has(ref)){catalog.pageIndexCache.put(ref,0);}return [obj,ref];}}throw new _util.FormatError("The Linearization dictionary doesn't point to a valid Page dictionary.");}catch(reason){(0, _util.warn)(`_getLinearizationPage: "${reason.message}".`);return catalog.getPageDict(pageIndex);}}getPage(pageIndex){const cachedPromise=this._pagePromises.get(pageIndex);if(cachedPromise){return cachedPromise;}const{catalog,linearization,xfaFactory}=this;let promise;if(xfaFactory){promise=Promise.resolve([_primitives.Dict.empty,null]);}else if(linearization&&linearization.pageFirst===pageIndex){promise=this._getLinearizationPage(pageIndex);}else {promise=catalog.getPageDict(pageIndex);}promise=promise.then(_ref7=>{let[pageDict,ref]=_ref7;return new Page({pdfManager:this.pdfManager,xref:this.xref,pageIndex,pageDict,ref,globalIdFactory:this._globalIdFactory,fontCache:catalog.fontCache,builtInCMapCache:catalog.builtInCMapCache,standardFontDataCache:catalog.standardFontDataCache,globalImageCache:catalog.globalImageCache,nonBlendModesSet:catalog.nonBlendModesSet,xfaFactory});});this._pagePromises.set(pageIndex,promise);return promise;}async checkFirstPage(){let recoveryMode=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(recoveryMode){return;}try{await this.getPage(0);}catch(reason){if(reason instanceof _core_utils.XRefEntryException){this._pagePromises.delete(0);await this.cleanup();throw new _core_utils.XRefParseException();}}}async checkLastPage(){let recoveryMode=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;const{catalog,pdfManager}=this;catalog.setActualNumPages();let numPages;try{await Promise.all([pdfManager.ensureDoc("xfaFactory"),pdfManager.ensureDoc("linearization"),pdfManager.ensureCatalog("numPages")]);if(this.xfaFactory){return;}else if(this.linearization){numPages=this.linearization.numPages;}else {numPages=catalog.numPages;}if(!Number.isInteger(numPages)){throw new _util.FormatError("Page count is not an integer.");}else if(numPages<=1){return;}await this.getPage(numPages-1);}catch(reason){this._pagePromises.delete(numPages-1);await this.cleanup();if(reason instanceof _core_utils.XRefEntryException&&!recoveryMode){throw new _core_utils.XRefParseException();}(0, _util.warn)(`checkLastPage - invalid /Pages tree /Count: ${numPages}.`);let pagesTree;try{pagesTree=await catalog.getAllPageDicts(recoveryMode);}catch(reasonAll){if(reasonAll instanceof _core_utils.XRefEntryException&&!recoveryMode){throw new _core_utils.XRefParseException();}catalog.setActualNumPages(1);return;}for(const[pageIndex,[pageDict,ref]]of pagesTree){let promise;if(pageDict instanceof Error){promise=Promise.reject(pageDict);promise.catch(()=>{});}else {promise=Promise.resolve(new Page({pdfManager,xref:this.xref,pageIndex,pageDict,ref,globalIdFactory:this._globalIdFactory,fontCache:catalog.fontCache,builtInCMapCache:catalog.builtInCMapCache,standardFontDataCache:catalog.standardFontDataCache,globalImageCache:catalog.globalImageCache,nonBlendModesSet:catalog.nonBlendModesSet,xfaFactory:null}));}this._pagePromises.set(pageIndex,promise);}catalog.setActualNumPages(pagesTree.size);}}fontFallback(id,handler){return this.catalog.fontFallback(id,handler);}async cleanup(){let manuallyTriggered=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return this.catalog?this.catalog.cleanup(manuallyTriggered):(0, _cleanup_helper.clearGlobalCaches)();}_collectFieldObjects(name,fieldRef,promises){const field=this.xref.fetchIfRef(fieldRef);if(field.has("T")){const partName=(0, _util.stringToPDFString)(field.get("T"));if(name===""){name=partName;}else {name=`${name}.${partName}`;}}if(!promises.has(name)){promises.set(name,[]);}promises.get(name).push(_annotation.AnnotationFactory.create(this.xref,fieldRef,this.pdfManager,this._localIdFactory,true).then(annotation=>annotation&&annotation.getFieldObject()).catch(function(reason){(0, _util.warn)(`_collectFieldObjects: "${reason}".`);return null;}));if(field.has("Kids")){const kids=field.get("Kids");for(const kid of kids){this._collectFieldObjects(name,kid,promises);}}}get fieldObjects(){if(!this.formInfo.hasFields){return (0, _util.shadow)(this,"fieldObjects",Promise.resolve(null));}const allFields=Object.create(null);const fieldPromises=new Map();for(const fieldRef of this.catalog.acroForm.get("Fields")){this._collectFieldObjects("",fieldRef,fieldPromises);}const allPromises=[];for(const[name,promises]of fieldPromises){allPromises.push(Promise.all(promises).then(fields=>{fields=fields.filter(field=>!!field);if(fields.length>0){allFields[name]=fields;}}));}return (0, _util.shadow)(this,"fieldObjects",Promise.all(allPromises).then(()=>allFields));}get hasJSActions(){const promise=this.pdfManager.ensureDoc("_parseHasJSActions");return (0, _util.shadow)(this,"hasJSActions",promise);}async _parseHasJSActions(){const[catalogJsActions,fieldObjects]=await Promise.all([this.pdfManager.ensureCatalog("jsActions"),this.pdfManager.ensureDoc("fieldObjects")]);if(catalogJsActions){return true;}if(fieldObjects){return Object.values(fieldObjects).some(fieldObject=>fieldObject.some(object=>object.actions!==null));}return false;}get calculationOrderIds(){const acroForm=this.catalog.acroForm;if(!acroForm||!acroForm.has("CO")){return (0, _util.shadow)(this,"calculationOrderIds",null);}const calculationOrder=acroForm.get("CO");if(!Array.isArray(calculationOrder)||calculationOrder.length===0){return (0, _util.shadow)(this,"calculationOrderIds",null);}const ids=[];for(const id of calculationOrder){if(id instanceof _primitives.Ref){ids.push(id.toString());}}if(ids.length===0){return (0, _util.shadow)(this,"calculationOrderIds",null);}return (0, _util.shadow)(this,"calculationOrderIds",ids);}}exports.PDFDocument=PDFDocument;/***/},/* 143 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.PopupAnnotation=exports.MarkupAnnotation=exports.AnnotationFactory=exports.AnnotationBorderStyle=exports.Annotation=void 0;exports.getQuadPoints=getQuadPoints;var _util=__w_pdfjs_require__(2);var _core_utils=__w_pdfjs_require__(136);var _default_appearance=__w_pdfjs_require__(144);var _primitives=__w_pdfjs_require__(137);var _writer=__w_pdfjs_require__(196);var _base_stream=__w_pdfjs_require__(138);var _bidi=__w_pdfjs_require__(191);var _catalog=__w_pdfjs_require__(200);var _colorspace=__w_pdfjs_require__(145);var _file_spec=__w_pdfjs_require__(203);var _object_loader=__w_pdfjs_require__(206);var _operator_list=__w_pdfjs_require__(193);var _stream=__w_pdfjs_require__(141);var _factory=__w_pdfjs_require__(207);class AnnotationFactory{static create(xref,ref,pdfManager,idFactory,collectFields){return Promise.all([pdfManager.ensureCatalog("acroForm"),pdfManager.ensureCatalog("baseUrl"),pdfManager.ensureCatalog("attachments"),pdfManager.ensureDoc("xfaDatasets"),collectFields?this._getPageIndex(xref,ref,pdfManager):-1]).then(_ref=>{let[acroForm,baseUrl,attachments,xfaDatasets,pageIndex]=_ref;return pdfManager.ensure(this,"_create",[xref,ref,pdfManager,idFactory,acroForm,attachments,xfaDatasets,collectFields,pageIndex]);});}static _create(xref,ref,pdfManager,idFactory,acroForm){let attachments=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;let xfaDatasets=arguments.length>6?arguments[6]:undefined;let collectFields=arguments.length>7?arguments[7]:undefined;let pageIndex=arguments.length>8&&arguments[8]!==undefined?arguments[8]:-1;const dict=xref.fetchIfRef(ref);if(!(dict instanceof _primitives.Dict)){return undefined;}const id=ref instanceof _primitives.Ref?ref.toString():`annot_${idFactory.createObjId()}`;let subtype=dict.get("Subtype");subtype=subtype instanceof _primitives.Name?subtype.name:null;const acroFormDict=acroForm instanceof _primitives.Dict?acroForm:_primitives.Dict.empty;const parameters={xref,ref,dict,subtype,id,pdfManager,acroForm:acroFormDict,attachments,xfaDatasets,collectFields,needAppearances:!collectFields&&acroFormDict.get("NeedAppearances")===true,pageIndex,isOffscreenCanvasSupported:_util.FeatureTest.isOffscreenCanvasSupported&&pdfManager.evaluatorOptions.isOffscreenCanvasSupported};switch(subtype){case"Link":return new LinkAnnotation(parameters);case"Text":return new TextAnnotation(parameters);case"Widget":let fieldType=(0, _core_utils.getInheritableProperty)({dict,key:"FT"});fieldType=fieldType instanceof _primitives.Name?fieldType.name:null;switch(fieldType){case"Tx":return new TextWidgetAnnotation(parameters);case"Btn":return new ButtonWidgetAnnotation(parameters);case"Ch":return new ChoiceWidgetAnnotation(parameters);case"Sig":return new SignatureWidgetAnnotation(parameters);}(0, _util.warn)(`Unimplemented widget field type "${fieldType}", `+"falling back to base field type.");return new WidgetAnnotation(parameters);case"Popup":return new PopupAnnotation(parameters);case"FreeText":return new FreeTextAnnotation(parameters);case"Line":return new LineAnnotation(parameters);case"Square":return new SquareAnnotation(parameters);case"Circle":return new CircleAnnotation(parameters);case"PolyLine":return new PolylineAnnotation(parameters);case"Polygon":return new PolygonAnnotation(parameters);case"Caret":return new CaretAnnotation(parameters);case"Ink":return new InkAnnotation(parameters);case"Highlight":return new HighlightAnnotation(parameters);case"Underline":return new UnderlineAnnotation(parameters);case"Squiggly":return new SquigglyAnnotation(parameters);case"StrikeOut":return new StrikeOutAnnotation(parameters);case"Stamp":return new StampAnnotation(parameters);case"FileAttachment":return new FileAttachmentAnnotation(parameters);default:if(!collectFields){if(!subtype){(0, _util.warn)("Annotation is missing the required /Subtype.");}else {(0, _util.warn)(`Unimplemented annotation type "${subtype}", `+"falling back to base annotation.");}}return new Annotation(parameters);}}static async _getPageIndex(xref,ref,pdfManager){try{const annotDict=await xref.fetchIfRefAsync(ref);if(!(annotDict instanceof _primitives.Dict)){return -1;}const pageRef=annotDict.getRaw("P");if(!(pageRef instanceof _primitives.Ref)){return -1;}const pageIndex=await pdfManager.ensureCatalog("getPageIndex",[pageRef]);return pageIndex;}catch(ex){(0, _util.warn)(`_getPageIndex: "${ex}".`);return -1;}}static async saveNewAnnotations(evaluator,task,annotations){const xref=evaluator.xref;let baseFontRef;const dependencies=[];const promises=[];for(const annotation of annotations){switch(annotation.annotationType){case _util.AnnotationEditorType.FREETEXT:if(!baseFontRef){const baseFont=new _primitives.Dict(xref);baseFont.set("BaseFont",_primitives.Name.get("Helvetica"));baseFont.set("Type",_primitives.Name.get("Font"));baseFont.set("Subtype",_primitives.Name.get("Type1"));baseFont.set("Encoding",_primitives.Name.get("WinAnsiEncoding"));const buffer=[];baseFontRef=xref.getNewTemporaryRef();(0, _writer.writeObject)(baseFontRef,baseFont,buffer,null);dependencies.push({ref:baseFontRef,data:buffer.join("")});}promises.push(FreeTextAnnotation.createNewAnnotation(xref,annotation,dependencies,{evaluator,task,baseFontRef}));break;case _util.AnnotationEditorType.INK:promises.push(InkAnnotation.createNewAnnotation(xref,annotation,dependencies));}}return {annotations:await Promise.all(promises),dependencies};}static async printNewAnnotations(evaluator,task,annotations){if(!annotations){return null;}const xref=evaluator.xref;const promises=[];const isOffscreenCanvasSupported=_util.FeatureTest.isOffscreenCanvasSupported&&evaluator.options.isOffscreenCanvasSupported;for(const annotation of annotations){switch(annotation.annotationType){case _util.AnnotationEditorType.FREETEXT:promises.push(FreeTextAnnotation.createNewPrintAnnotation(xref,annotation,{evaluator,task,isOffscreenCanvasSupported}));break;case _util.AnnotationEditorType.INK:promises.push(InkAnnotation.createNewPrintAnnotation(xref,annotation,{isOffscreenCanvasSupported}));break;}}return Promise.all(promises);}}exports.AnnotationFactory=AnnotationFactory;function getRgbColor(color){let defaultColor=arguments.length>1&&arguments[1]!==undefined?arguments[1]:new Uint8ClampedArray(3);if(!Array.isArray(color)){return defaultColor;}const rgbColor=defaultColor||new Uint8ClampedArray(3);switch(color.length){case 0:return null;case 1:_colorspace.ColorSpace.singletons.gray.getRgbItem(color,0,rgbColor,0);return rgbColor;case 3:_colorspace.ColorSpace.singletons.rgb.getRgbItem(color,0,rgbColor,0);return rgbColor;case 4:_colorspace.ColorSpace.singletons.cmyk.getRgbItem(color,0,rgbColor,0);return rgbColor;default:return defaultColor;}}function getPdfColorArray(color){return Array.from(color,c=>c/255);}function getQuadPoints(dict,rect){const quadPoints=dict.getArray("QuadPoints");if(!Array.isArray(quadPoints)||quadPoints.length===0||quadPoints.length%8>0){return null;}const quadPointsLists=[];for(let i=0,ii=quadPoints.length/8;i<ii;i++){let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;for(let j=i*8,jj=i*8+8;j<jj;j+=2){const x=quadPoints[j];const y=quadPoints[j+1];minX=Math.min(x,minX);maxX=Math.max(x,maxX);minY=Math.min(y,minY);maxY=Math.max(y,maxY);}if(rect!==null&&(minX<rect[0]||maxX>rect[2]||minY<rect[1]||maxY>rect[3])){return null;}quadPointsLists.push([{x:minX,y:maxY},{x:maxX,y:maxY},{x:minX,y:minY},{x:maxX,y:minY}]);}return quadPointsLists;}function getTransformMatrix(rect,bbox,matrix){const[minX,minY,maxX,maxY]=_util.Util.getAxialAlignedBoundingBox(bbox,matrix);if(minX===maxX||minY===maxY){return [1,0,0,1,rect[0],rect[1]];}const xRatio=(rect[2]-rect[0])/(maxX-minX);const yRatio=(rect[3]-rect[1])/(maxY-minY);return [xRatio,0,0,yRatio,rect[0]-minX*xRatio,rect[1]-minY*yRatio];}class Annotation{constructor(params){const{dict,xref}=params;this.setTitle(dict.get("T"));this.setContents(dict.get("Contents"));this.setModificationDate(dict.get("M"));this.setFlags(dict.get("F"));this.setRectangle(dict.getArray("Rect"));this.setColor(dict.getArray("C"));this.setBorderStyle(dict);this.setAppearance(dict);this.setOptionalContent(dict);const MK=dict.get("MK");this.setBorderAndBackgroundColors(MK);this.setRotation(MK);this._streams=[];if(this.appearance){this._streams.push(this.appearance);}this.data={annotationFlags:this.flags,borderStyle:this.borderStyle,color:this.color,backgroundColor:this.backgroundColor,borderColor:this.borderColor,rotation:this.rotation,contentsObj:this._contents,hasAppearance:!!this.appearance,id:params.id,modificationDate:this.modificationDate,rect:this.rectangle,subtype:params.subtype,hasOwnCanvas:false};if(params.collectFields){const kids=dict.get("Kids");if(Array.isArray(kids)){const kidIds=[];for(const kid of kids){if(kid instanceof _primitives.Ref){kidIds.push(kid.toString());}}if(kidIds.length!==0){this.data.kidIds=kidIds;}}this.data.actions=(0, _core_utils.collectActions)(xref,dict,_util.AnnotationActionEventType);this.data.fieldName=this._constructFieldName(dict);this.data.pageIndex=params.pageIndex;}this._isOffscreenCanvasSupported=params.isOffscreenCanvasSupported;this._fallbackFontDict=null;this._needAppearances=false;}_hasFlag(flags,flag){return !!(flags&flag);}_isViewable(flags){return !this._hasFlag(flags,_util.AnnotationFlag.INVISIBLE)&&!this._hasFlag(flags,_util.AnnotationFlag.NOVIEW);}_isPrintable(flags){return this._hasFlag(flags,_util.AnnotationFlag.PRINT)&&!this._hasFlag(flags,_util.AnnotationFlag.INVISIBLE);}mustBeViewed(annotationStorage){const storageEntry=annotationStorage&&annotationStorage.get(this.data.id);if(storageEntry&&storageEntry.hidden!==undefined){return !storageEntry.hidden;}return this.viewable&&!this._hasFlag(this.flags,_util.AnnotationFlag.HIDDEN);}mustBePrinted(annotationStorage){const storageEntry=annotationStorage&&annotationStorage.get(this.data.id);if(storageEntry&&storageEntry.print!==undefined){return storageEntry.print;}return this.printable;}get viewable(){if(this.data.quadPoints===null){return false;}if(this.flags===0){return true;}return this._isViewable(this.flags);}get printable(){if(this.data.quadPoints===null){return false;}if(this.flags===0){return false;}return this._isPrintable(this.flags);}_parseStringHelper(data){const str=typeof data==="string"?(0, _util.stringToPDFString)(data):"";const dir=str&&(0, _bidi.bidi)(str).dir==="rtl"?"rtl":"ltr";return {str,dir};}setDefaultAppearance(params){const defaultAppearance=(0, _core_utils.getInheritableProperty)({dict:params.dict,key:"DA"})||params.acroForm.get("DA");this._defaultAppearance=typeof defaultAppearance==="string"?defaultAppearance:"";this.data.defaultAppearanceData=(0, _default_appearance.parseDefaultAppearance)(this._defaultAppearance);}setTitle(title){this._title=this._parseStringHelper(title);}setContents(contents){this._contents=this._parseStringHelper(contents);}setModificationDate(modificationDate){this.modificationDate=typeof modificationDate==="string"?modificationDate:null;}setFlags(flags){this.flags=Number.isInteger(flags)&&flags>0?flags:0;}hasFlag(flag){return this._hasFlag(this.flags,flag);}setRectangle(rectangle){if(Array.isArray(rectangle)&&rectangle.length===4){this.rectangle=_util.Util.normalizeRect(rectangle);}else {this.rectangle=[0,0,0,0];}}setColor(color){this.color=getRgbColor(color);}setLineEndings(lineEndings){this.lineEndings=["None","None"];if(Array.isArray(lineEndings)&&lineEndings.length===2){for(let i=0;i<2;i++){const obj=lineEndings[i];if(obj instanceof _primitives.Name){switch(obj.name){case"None":continue;case"Square":case"Circle":case"Diamond":case"OpenArrow":case"ClosedArrow":case"Butt":case"ROpenArrow":case"RClosedArrow":case"Slash":this.lineEndings[i]=obj.name;continue;}}(0, _util.warn)(`Ignoring invalid lineEnding: ${obj}`);}}}setRotation(mk){this.rotation=0;if(mk instanceof _primitives.Dict){let angle=mk.get("R")||0;if(Number.isInteger(angle)&&angle!==0){angle%=360;if(angle<0){angle+=360;}if(angle%90===0){this.rotation=angle;}}}}setBorderAndBackgroundColors(mk){if(mk instanceof _primitives.Dict){this.borderColor=getRgbColor(mk.getArray("BC"),null);this.backgroundColor=getRgbColor(mk.getArray("BG"),null);}else {this.borderColor=this.backgroundColor=null;}}setBorderStyle(borderStyle){this.borderStyle=new AnnotationBorderStyle();if(!(borderStyle instanceof _primitives.Dict)){return;}if(borderStyle.has("BS")){const dict=borderStyle.get("BS");const dictType=dict.get("Type");if(!dictType||(0, _primitives.isName)(dictType,"Border")){this.borderStyle.setWidth(dict.get("W"),this.rectangle);this.borderStyle.setStyle(dict.get("S"));this.borderStyle.setDashArray(dict.getArray("D"));}}else if(borderStyle.has("Border")){const array=borderStyle.getArray("Border");if(Array.isArray(array)&&array.length>=3){this.borderStyle.setHorizontalCornerRadius(array[0]);this.borderStyle.setVerticalCornerRadius(array[1]);this.borderStyle.setWidth(array[2],this.rectangle);if(array.length===4){this.borderStyle.setDashArray(array[3],true);}}}else {this.borderStyle.setWidth(0);}}setAppearance(dict){this.appearance=null;const appearanceStates=dict.get("AP");if(!(appearanceStates instanceof _primitives.Dict)){return;}const normalAppearanceState=appearanceStates.get("N");if(normalAppearanceState instanceof _base_stream.BaseStream){this.appearance=normalAppearanceState;return;}if(!(normalAppearanceState instanceof _primitives.Dict)){return;}const as=dict.get("AS");if(!(as instanceof _primitives.Name)||!normalAppearanceState.has(as.name)){return;}const appearance=normalAppearanceState.get(as.name);if(appearance instanceof _base_stream.BaseStream){this.appearance=appearance;}}setOptionalContent(dict){this.oc=null;const oc=dict.get("OC");if(oc instanceof _primitives.Name){(0, _util.warn)("setOptionalContent: Support for /Name-entry is not implemented.");}else if(oc instanceof _primitives.Dict){this.oc=oc;}}loadResources(keys,appearance){return appearance.dict.getAsync("Resources").then(resources=>{if(!resources){return undefined;}const objectLoader=new _object_loader.ObjectLoader(resources,keys,resources.xref);return objectLoader.load().then(function(){return resources;});});}async getOperatorList(evaluator,task,intent,renderForms,annotationStorage){const data=this.data;let appearance=this.appearance;const isUsingOwnCanvas=!!(this.data.hasOwnCanvas&&intent&_util.RenderingIntentFlag.DISPLAY);if(!appearance){if(!isUsingOwnCanvas){return {opList:new _operator_list.OperatorList(),separateForm:false,separateCanvas:false};}appearance=new _stream.StringStream("");appearance.dict=new _primitives.Dict();}const appearanceDict=appearance.dict;const resources=await this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"],appearance);const bbox=appearanceDict.getArray("BBox")||[0,0,1,1];const matrix=appearanceDict.getArray("Matrix")||[1,0,0,1,0,0];const transform=getTransformMatrix(data.rect,bbox,matrix);const opList=new _operator_list.OperatorList();let optionalContent;if(this.oc){optionalContent=await evaluator.parseMarkedContentProps(this.oc,null);}if(optionalContent!==undefined){opList.addOp(_util.OPS.beginMarkedContentProps,["OC",optionalContent]);}opList.addOp(_util.OPS.beginAnnotation,[data.id,data.rect,transform,matrix,isUsingOwnCanvas]);await evaluator.getOperatorList({stream:appearance,task,resources,operatorList:opList,fallbackFontDict:this._fallbackFontDict});opList.addOp(_util.OPS.endAnnotation,[]);if(optionalContent!==undefined){opList.addOp(_util.OPS.endMarkedContent,[]);}this.reset();return {opList,separateForm:false,separateCanvas:isUsingOwnCanvas};}async save(evaluator,task,annotationStorage){return null;}get hasTextContent(){return false;}async extractTextContent(evaluator,task,viewBox){if(!this.appearance){return;}const resources=await this.loadResources(["ExtGState","Font","Properties","XObject"],this.appearance);const text=[];const buffer=[];const sink={desiredSize:Math.Infinity,ready:true,enqueue(chunk,size){for(const item of chunk.items){buffer.push(item.str);if(item.hasEOL){text.push(buffer.join(""));buffer.length=0;}}}};await evaluator.getTextContent({stream:this.appearance,task,resources,includeMarkedContent:true,combineTextItems:true,sink,viewBox});this.reset();if(buffer.length){text.push(buffer.join(""));}if(text.length>0){this.data.textContent=text;}}getFieldObject(){if(this.data.kidIds){return {id:this.data.id,actions:this.data.actions,name:this.data.fieldName,strokeColor:this.data.borderColor,fillColor:this.data.backgroundColor,type:"",kidIds:this.data.kidIds,page:this.data.pageIndex,rotation:this.rotation};}return null;}reset(){for(const stream of this._streams){stream.reset();}}_constructFieldName(dict){if(!dict.has("T")&&!dict.has("Parent")){(0, _util.warn)("Unknown field name, falling back to empty field name.");return "";}if(!dict.has("Parent")){return (0, _util.stringToPDFString)(dict.get("T"));}const fieldName=[];if(dict.has("T")){fieldName.unshift((0, _util.stringToPDFString)(dict.get("T")));}let loopDict=dict;const visited=new _primitives.RefSet();if(dict.objId){visited.put(dict.objId);}while(loopDict.has("Parent")){loopDict=loopDict.get("Parent");if(!(loopDict instanceof _primitives.Dict)||loopDict.objId&&visited.has(loopDict.objId)){break;}if(loopDict.objId){visited.put(loopDict.objId);}if(loopDict.has("T")){const t=(0, _util.stringToPDFString)(loopDict.get("T"));if(!t.startsWith("#")){fieldName.unshift(t);}}}return fieldName.join(".");}}exports.Annotation=Annotation;class AnnotationBorderStyle{constructor(){this.width=1;this.style=_util.AnnotationBorderStyleType.SOLID;this.dashArray=[3];this.horizontalCornerRadius=0;this.verticalCornerRadius=0;}setWidth(width){let rect=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[0,0,0,0];if(width instanceof _primitives.Name){this.width=0;return;}if(typeof width==="number"){if(width>0){const maxWidth=(rect[2]-rect[0])/2;const maxHeight=(rect[3]-rect[1])/2;if(maxWidth>0&&maxHeight>0&&(width>maxWidth||width>maxHeight)){(0, _util.warn)(`AnnotationBorderStyle.setWidth - ignoring width: ${width}`);width=1;}}this.width=width;}}setStyle(style){if(!(style instanceof _primitives.Name)){return;}switch(style.name){case"S":this.style=_util.AnnotationBorderStyleType.SOLID;break;case"D":this.style=_util.AnnotationBorderStyleType.DASHED;break;case"B":this.style=_util.AnnotationBorderStyleType.BEVELED;break;case"I":this.style=_util.AnnotationBorderStyleType.INSET;break;case"U":this.style=_util.AnnotationBorderStyleType.UNDERLINE;break;}}setDashArray(dashArray){let forceStyle=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(Array.isArray(dashArray)&&dashArray.length>0){let isValid=true;let allZeros=true;for(const element of dashArray){const validNumber=+element>=0;if(!validNumber){isValid=false;break;}else if(element>0){allZeros=false;}}if(isValid&&!allZeros){this.dashArray=dashArray;if(forceStyle){this.setStyle(_primitives.Name.get("D"));}}else {this.width=0;}}else if(dashArray){this.width=0;}}setHorizontalCornerRadius(radius){if(Number.isInteger(radius)){this.horizontalCornerRadius=radius;}}setVerticalCornerRadius(radius){if(Number.isInteger(radius)){this.verticalCornerRadius=radius;}}}exports.AnnotationBorderStyle=AnnotationBorderStyle;class MarkupAnnotation extends Annotation{constructor(params){super(params);const{dict}=params;if(dict.has("IRT")){const rawIRT=dict.getRaw("IRT");this.data.inReplyTo=rawIRT instanceof _primitives.Ref?rawIRT.toString():null;const rt=dict.get("RT");this.data.replyType=rt instanceof _primitives.Name?rt.name:_util.AnnotationReplyType.REPLY;}if(this.data.replyType===_util.AnnotationReplyType.GROUP){const parent=dict.get("IRT");this.setTitle(parent.get("T"));this.data.titleObj=this._title;this.setContents(parent.get("Contents"));this.data.contentsObj=this._contents;if(!parent.has("CreationDate")){this.data.creationDate=null;}else {this.setCreationDate(parent.get("CreationDate"));this.data.creationDate=this.creationDate;}if(!parent.has("M")){this.data.modificationDate=null;}else {this.setModificationDate(parent.get("M"));this.data.modificationDate=this.modificationDate;}this.data.hasPopup=parent.has("Popup");if(!parent.has("C")){this.data.color=null;}else {this.setColor(parent.getArray("C"));this.data.color=this.color;}}else {this.data.titleObj=this._title;this.setCreationDate(dict.get("CreationDate"));this.data.creationDate=this.creationDate;this.data.hasPopup=dict.has("Popup");if(!dict.has("C")){this.data.color=null;}}if(dict.has("RC")){this.data.richText=_factory.XFAFactory.getRichTextAsHtml(dict.get("RC"));}}setCreationDate(creationDate){this.creationDate=typeof creationDate==="string"?creationDate:null;}_setDefaultAppearance(_ref2){let{xref,extra,strokeColor,fillColor,blendMode,strokeAlpha,fillAlpha,pointsCallback}=_ref2;let minX=Number.MAX_VALUE;let minY=Number.MAX_VALUE;let maxX=Number.MIN_VALUE;let maxY=Number.MIN_VALUE;const buffer=["q"];if(extra){buffer.push(extra);}if(strokeColor){buffer.push(`${strokeColor[0]} ${strokeColor[1]} ${strokeColor[2]} RG`);}if(fillColor){buffer.push(`${fillColor[0]} ${fillColor[1]} ${fillColor[2]} rg`);}let pointsArray=this.data.quadPoints;if(!pointsArray){pointsArray=[[{x:this.rectangle[0],y:this.rectangle[3]},{x:this.rectangle[2],y:this.rectangle[3]},{x:this.rectangle[0],y:this.rectangle[1]},{x:this.rectangle[2],y:this.rectangle[1]}]];}for(const points of pointsArray){const[mX,MX,mY,MY]=pointsCallback(buffer,points);minX=Math.min(minX,mX);maxX=Math.max(maxX,MX);minY=Math.min(minY,mY);maxY=Math.max(maxY,MY);}buffer.push("Q");const formDict=new _primitives.Dict(xref);const appearanceStreamDict=new _primitives.Dict(xref);appearanceStreamDict.set("Subtype",_primitives.Name.get("Form"));const appearanceStream=new _stream.StringStream(buffer.join(" "));appearanceStream.dict=appearanceStreamDict;formDict.set("Fm0",appearanceStream);const gsDict=new _primitives.Dict(xref);if(blendMode){gsDict.set("BM",_primitives.Name.get(blendMode));}if(typeof strokeAlpha==="number"){gsDict.set("CA",strokeAlpha);}if(typeof fillAlpha==="number"){gsDict.set("ca",fillAlpha);}const stateDict=new _primitives.Dict(xref);stateDict.set("GS0",gsDict);const resources=new _primitives.Dict(xref);resources.set("ExtGState",stateDict);resources.set("XObject",formDict);const appearanceDict=new _primitives.Dict(xref);appearanceDict.set("Resources",resources);const bbox=this.data.rect=[minX,minY,maxX,maxY];appearanceDict.set("BBox",bbox);this.appearance=new _stream.StringStream("/GS0 gs /Fm0 Do");this.appearance.dict=appearanceDict;this._streams.push(this.appearance,appearanceStream);}static async createNewAnnotation(xref,annotation,dependencies,params){const annotationRef=xref.getNewTemporaryRef();const ap=await this.createNewAppearanceStream(annotation,xref,params);const buffer=[];let annotationDict;if(ap){const apRef=xref.getNewTemporaryRef();annotationDict=this.createNewDict(annotation,xref,{apRef});const transform=xref.encrypt?xref.encrypt.createCipherTransform(apRef.num,apRef.gen):null;(0, _writer.writeObject)(apRef,ap,buffer,transform);dependencies.push({ref:apRef,data:buffer.join("")});}else {annotationDict=this.createNewDict(annotation,xref,{});}buffer.length=0;const transform=xref.encrypt?xref.encrypt.createCipherTransform(annotationRef.num,annotationRef.gen):null;(0, _writer.writeObject)(annotationRef,annotationDict,buffer,transform);return {ref:annotationRef,data:buffer.join("")};}static async createNewPrintAnnotation(xref,annotation,params){const ap=await this.createNewAppearanceStream(annotation,xref,params);const annotationDict=this.createNewDict(annotation,xref,{ap});return new this.prototype.constructor({dict:annotationDict,xref,isOffscreenCanvasSupported:params.isOffscreenCanvasSupported});}}exports.MarkupAnnotation=MarkupAnnotation;class WidgetAnnotation extends Annotation{constructor(params){super(params);const{dict,xref}=params;const data=this.data;this.ref=params.ref;this._needAppearances=params.needAppearances;data.annotationType=_util.AnnotationType.WIDGET;if(data.fieldName===undefined){data.fieldName=this._constructFieldName(dict);}if(data.actions===undefined){data.actions=(0, _core_utils.collectActions)(xref,dict,_util.AnnotationActionEventType);}let fieldValue=(0, _core_utils.getInheritableProperty)({dict,key:"V",getArray:true});data.fieldValue=this._decodeFormValue(fieldValue);const defaultFieldValue=(0, _core_utils.getInheritableProperty)({dict,key:"DV",getArray:true});data.defaultFieldValue=this._decodeFormValue(defaultFieldValue);if(fieldValue===undefined&&params.xfaDatasets){const path=this._title.str;if(path){this._hasValueFromXFA=true;data.fieldValue=fieldValue=params.xfaDatasets.getValue(path);}}if(fieldValue===undefined&&data.defaultFieldValue!==null){data.fieldValue=data.defaultFieldValue;}data.alternativeText=(0, _util.stringToPDFString)(dict.get("TU")||"");this.setDefaultAppearance(params);data.hasAppearance=this._needAppearances&&data.fieldValue!==undefined&&data.fieldValue!==null||data.hasAppearance;const fieldType=(0, _core_utils.getInheritableProperty)({dict,key:"FT"});data.fieldType=fieldType instanceof _primitives.Name?fieldType.name:null;const localResources=(0, _core_utils.getInheritableProperty)({dict,key:"DR"});const acroFormResources=params.acroForm.get("DR");const appearanceResources=this.appearance&&this.appearance.dict.get("Resources");this._fieldResources={localResources,acroFormResources,appearanceResources,mergedResources:_primitives.Dict.merge({xref,dictArray:[localResources,appearanceResources,acroFormResources],mergeSubDicts:true})};data.fieldFlags=(0, _core_utils.getInheritableProperty)({dict,key:"Ff"});if(!Number.isInteger(data.fieldFlags)||data.fieldFlags<0){data.fieldFlags=0;}data.readOnly=this.hasFieldFlag(_util.AnnotationFieldFlag.READONLY);data.required=this.hasFieldFlag(_util.AnnotationFieldFlag.REQUIRED);data.hidden=this._hasFlag(data.annotationFlags,_util.AnnotationFlag.HIDDEN);}_decodeFormValue(formValue){if(Array.isArray(formValue)){return formValue.filter(item=>typeof item==="string").map(item=>(0, _util.stringToPDFString)(item));}else if(formValue instanceof _primitives.Name){return (0, _util.stringToPDFString)(formValue.name);}else if(typeof formValue==="string"){return (0, _util.stringToPDFString)(formValue);}return null;}hasFieldFlag(flag){return !!(this.data.fieldFlags&flag);}getRotationMatrix(annotationStorage){const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;let rotation=storageEntry&&storageEntry.rotation;if(rotation===undefined){rotation=this.rotation;}if(rotation===0){return _util.IDENTITY_MATRIX;}const width=this.data.rect[2]-this.data.rect[0];const height=this.data.rect[3]-this.data.rect[1];return (0, _core_utils.getRotationMatrix)(rotation,width,height);}getBorderAndBackgroundAppearances(annotationStorage){const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;let rotation=storageEntry&&storageEntry.rotation;if(rotation===undefined){rotation=this.rotation;}if(!this.backgroundColor&&!this.borderColor){return "";}const width=this.data.rect[2]-this.data.rect[0];const height=this.data.rect[3]-this.data.rect[1];const rect=rotation===0||rotation===180?`0 0 ${width} ${height} re`:`0 0 ${height} ${width} re`;let str="";if(this.backgroundColor){str=`${(0, _default_appearance.getPdfColor)(this.backgroundColor,true)} ${rect} f `;}if(this.borderColor){const borderWidth=this.borderStyle.width||1;str+=`${borderWidth} w ${(0, _default_appearance.getPdfColor)(this.borderColor,false)} ${rect} S `;}return str;}async getOperatorList(evaluator,task,intent,renderForms,annotationStorage){if(renderForms&&!(this instanceof SignatureWidgetAnnotation)){return {opList:new _operator_list.OperatorList(),separateForm:true,separateCanvas:false};}if(!this._hasText){return super.getOperatorList(evaluator,task,intent,renderForms,annotationStorage);}const content=await this._getAppearance(evaluator,task,intent,annotationStorage);if(this.appearance&&content===null){return super.getOperatorList(evaluator,task,intent,renderForms,annotationStorage);}const opList=new _operator_list.OperatorList();if(!this._defaultAppearance||content===null){return {opList,separateForm:false,separateCanvas:false};}const matrix=[1,0,0,1,0,0];const bbox=[0,0,this.data.rect[2]-this.data.rect[0],this.data.rect[3]-this.data.rect[1]];const transform=getTransformMatrix(this.data.rect,bbox,matrix);let optionalContent;if(this.oc){optionalContent=await evaluator.parseMarkedContentProps(this.oc,null);}if(optionalContent!==undefined){opList.addOp(_util.OPS.beginMarkedContentProps,["OC",optionalContent]);}opList.addOp(_util.OPS.beginAnnotation,[this.data.id,this.data.rect,transform,this.getRotationMatrix(annotationStorage),false]);const stream=new _stream.StringStream(content);await evaluator.getOperatorList({stream,task,resources:this._fieldResources.mergedResources,operatorList:opList});opList.addOp(_util.OPS.endAnnotation,[]);if(optionalContent!==undefined){opList.addOp(_util.OPS.endMarkedContent,[]);}return {opList,separateForm:false,separateCanvas:false};}_getMKDict(rotation){const mk=new _primitives.Dict(null);if(rotation){mk.set("R",rotation);}if(this.borderColor){mk.set("BC",getPdfColorArray(this.borderColor));}if(this.backgroundColor){mk.set("BG",getPdfColorArray(this.backgroundColor));}return mk.size>0?mk:null;}amendSavedDict(annotationStorage,dict){}async save(evaluator,task,annotationStorage){const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;let value=storageEntry&&storageEntry.value;let rotation=storageEntry&&storageEntry.rotation;if(value===this.data.fieldValue||value===undefined){if(!this._hasValueFromXFA&&rotation===undefined){return null;}value=value||this.data.fieldValue;}if(rotation===undefined&&!this._hasValueFromXFA&&Array.isArray(value)&&Array.isArray(this.data.fieldValue)&&value.length===this.data.fieldValue.length&&value.every((x,i)=>x===this.data.fieldValue[i])){return null;}if(rotation===undefined){rotation=this.rotation;}let appearance=null;if(!this._needAppearances){appearance=await this._getAppearance(evaluator,task,_util.RenderingIntentFlag.SAVE,annotationStorage);if(appearance===null){return null;}}let needAppearances=false;if(appearance&&appearance.needAppearances){needAppearances=true;appearance=null;}const{xref}=evaluator;const originalDict=xref.fetchIfRef(this.ref);if(!(originalDict instanceof _primitives.Dict)){return null;}const dict=new _primitives.Dict(xref);for(const key of originalDict.getKeys()){if(key!=="AP"){dict.set(key,originalDict.getRaw(key));}}const xfa={path:this.data.fieldName,value};const encoder=val=>{return (0, _core_utils.isAscii)(val)?val:(0, _core_utils.stringToUTF16String)(val,true);};dict.set("V",Array.isArray(value)?value.map(encoder):encoder(value));this.amendSavedDict(annotationStorage,dict);const maybeMK=this._getMKDict(rotation);if(maybeMK){dict.set("MK",maybeMK);}const encrypt=xref.encrypt;const originalTransform=encrypt?encrypt.createCipherTransform(this.ref.num,this.ref.gen):null;const buffer=[];const changes=[{ref:this.ref,data:"",xfa,needAppearances}];if(appearance!==null){const newRef=xref.getNewTemporaryRef();const AP=new _primitives.Dict(xref);dict.set("AP",AP);AP.set("N",newRef);let newTransform=null;if(encrypt){newTransform=encrypt.createCipherTransform(newRef.num,newRef.gen);}const resources=this._getSaveFieldResources(xref);const appearanceStream=new _stream.StringStream(appearance);const appearanceDict=appearanceStream.dict=new _primitives.Dict(xref);appearanceDict.set("Subtype",_primitives.Name.get("Form"));appearanceDict.set("Resources",resources);appearanceDict.set("BBox",[0,0,this.data.rect[2]-this.data.rect[0],this.data.rect[3]-this.data.rect[1]]);const rotationMatrix=this.getRotationMatrix(annotationStorage);if(rotationMatrix!==_util.IDENTITY_MATRIX){appearanceDict.set("Matrix",rotationMatrix);}(0, _writer.writeObject)(newRef,appearanceStream,buffer,newTransform);changes.push({ref:newRef,data:buffer.join(""),xfa:null,needAppearances:false});buffer.length=0;}dict.set("M",`D:${(0, _util.getModificationDate)()}`);(0, _writer.writeObject)(this.ref,dict,buffer,originalTransform);changes[0].data=buffer.join("");return changes;}async _getAppearance(evaluator,task,intent,annotationStorage){const isPassword=this.hasFieldFlag(_util.AnnotationFieldFlag.PASSWORD);if(isPassword){return null;}const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;let value,rotation;if(storageEntry){value=storageEntry.formattedValue||storageEntry.value;rotation=storageEntry.rotation;}if(rotation===undefined&&value===undefined&&!this._needAppearances){if(!this._hasValueFromXFA||this.appearance){return null;}}const colors=this.getBorderAndBackgroundAppearances(annotationStorage);if(value===undefined){value=this.data.fieldValue;if(!value){return `/Tx BMC q ${colors}Q EMC`;}}if(Array.isArray(value)&&value.length===1){value=value[0];}(0, _util.assert)(typeof value==="string","Expected `value` to be a string.");value=value.trim();if(this.data.combo){const option=this.data.options.find(_ref3=>{let{exportValue}=_ref3;return value===exportValue;});value=option&&option.displayValue||value;}if(value===""){return `/Tx BMC q ${colors}Q EMC`;}if(rotation===undefined){rotation=this.rotation;}let lineCount=-1;let lines;if(this.data.multiLine){lines=value.split(/\r\n?|\n/).map(line=>line.normalize("NFC"));lineCount=lines.length;}else {lines=[value.replace(/\r\n?|\n/,"").normalize("NFC")];}const defaultPadding=1;const defaultHPadding=2;let totalHeight=this.data.rect[3]-this.data.rect[1];let totalWidth=this.data.rect[2]-this.data.rect[0];if(rotation===90||rotation===270){[totalWidth,totalHeight]=[totalHeight,totalWidth];}if(!this._defaultAppearance){this.data.defaultAppearanceData=(0, _default_appearance.parseDefaultAppearance)(this._defaultAppearance="/Helvetica 0 Tf 0 g");}let font=await WidgetAnnotation._getFontData(evaluator,task,this.data.defaultAppearanceData,this._fieldResources.mergedResources);let defaultAppearance,fontSize,lineHeight;const encodedLines=[];let encodingError=false;for(const line of lines){const encodedString=font.encodeString(line);if(encodedString.length>1){encodingError=true;}encodedLines.push(encodedString.join(""));}if(encodingError&&intent&_util.RenderingIntentFlag.SAVE){return {needAppearances:true};}if(encodingError&&this._isOffscreenCanvasSupported){const fontFamily=this.data.comb?"monospace":"sans-serif";const fakeUnicodeFont=new _default_appearance.FakeUnicodeFont(evaluator.xref,fontFamily);const resources=fakeUnicodeFont.createFontResources(lines.join(""));const newFont=resources.getRaw("Font");if(this._fieldResources.mergedResources.has("Font")){const oldFont=this._fieldResources.mergedResources.get("Font");for(const key of newFont.getKeys()){oldFont.set(key,newFont.getRaw(key));}}else {this._fieldResources.mergedResources.set("Font",newFont);}const fontName=fakeUnicodeFont.fontName.name;font=await WidgetAnnotation._getFontData(evaluator,task,{fontName,fontSize:0},resources);for(let i=0,ii=encodedLines.length;i<ii;i++){encodedLines[i]=(0, _core_utils.stringToUTF16String)(lines[i]);}const savedDefaultAppearance=Object.assign(Object.create(null),this.data.defaultAppearanceData);this.data.defaultAppearanceData.fontSize=0;this.data.defaultAppearanceData.fontName=fontName;[defaultAppearance,fontSize,lineHeight]=this._computeFontSize(totalHeight-2*defaultPadding,totalWidth-2*defaultHPadding,value,font,lineCount);this.data.defaultAppearanceData=savedDefaultAppearance;}else {if(!this._isOffscreenCanvasSupported){(0, _util.warn)("_getAppearance: OffscreenCanvas is not supported, annotation may not render correctly.");}[defaultAppearance,fontSize,lineHeight]=this._computeFontSize(totalHeight-2*defaultPadding,totalWidth-2*defaultHPadding,value,font,lineCount);}let descent=font.descent;if(isNaN(descent)){descent=_util.BASELINE_FACTOR*lineHeight;}else {descent=Math.max(_util.BASELINE_FACTOR*lineHeight,Math.abs(descent)*fontSize);}const defaultVPadding=Math.min(Math.floor((totalHeight-fontSize)/2),defaultPadding);const alignment=this.data.textAlignment;if(this.data.multiLine){return this._getMultilineAppearance(defaultAppearance,encodedLines,font,fontSize,totalWidth,totalHeight,alignment,defaultHPadding,defaultVPadding,descent,lineHeight,annotationStorage);}if(this.data.comb){return this._getCombAppearance(defaultAppearance,font,encodedLines[0],fontSize,totalWidth,totalHeight,defaultHPadding,defaultVPadding,descent,lineHeight,annotationStorage);}const bottomPadding=defaultVPadding+descent;if(alignment===0||alignment>2){return `/Tx BMC q ${colors}BT `+defaultAppearance+` 1 0 0 1 ${(0, _core_utils.numberToString)(defaultHPadding)} ${(0, _core_utils.numberToString)(bottomPadding)} Tm (${(0, _core_utils.escapeString)(encodedLines[0])}) Tj`+" ET Q EMC";}const prevInfo={shift:0};const renderedText=this._renderText(encodedLines[0],font,fontSize,totalWidth,alignment,prevInfo,defaultHPadding,bottomPadding);return `/Tx BMC q ${colors}BT `+defaultAppearance+` 1 0 0 1 0 0 Tm ${renderedText}`+" ET Q EMC";}static async _getFontData(evaluator,task,appearanceData,resources){const operatorList=new _operator_list.OperatorList();const initialState={font:null,clone(){return this;}};const{fontName,fontSize}=appearanceData;await evaluator.handleSetFont(resources,[fontName&&_primitives.Name.get(fontName),fontSize],null,operatorList,task,initialState,null);return initialState.font;}_getTextWidth(text,font){return font.charsToGlyphs(text).reduce((width,glyph)=>width+glyph.width,0)/1000;}_computeFontSize(height,width,text,font,lineCount){let{fontSize}=this.data.defaultAppearanceData;let lineHeight=(fontSize||12)*_util.LINE_FACTOR,numberOfLines=Math.round(height/lineHeight);if(!fontSize){const roundWithTwoDigits=x=>Math.floor(x*100)/100;if(lineCount===-1){const textWidth=this._getTextWidth(text,font);fontSize=roundWithTwoDigits(Math.min(height/_util.LINE_FACTOR,textWidth>width?width/textWidth:Infinity));numberOfLines=1;}else {const lines=text.split(/\r\n?|\n/);const cachedLines=[];for(const line of lines){const encoded=font.encodeString(line).join("");const glyphs=font.charsToGlyphs(encoded);const positions=font.getCharPositions(encoded);cachedLines.push({line:encoded,glyphs,positions});}const isTooBig=fsize=>{let totalHeight=0;for(const cache of cachedLines){const chunks=this._splitLine(null,font,fsize,width,cache);totalHeight+=chunks.length*fsize;if(totalHeight>height){return true;}}return false;};numberOfLines=Math.max(numberOfLines,lineCount);while(true){lineHeight=height/numberOfLines;fontSize=roundWithTwoDigits(lineHeight/_util.LINE_FACTOR);if(isTooBig(fontSize)){numberOfLines++;continue;}break;}}const{fontName,fontColor}=this.data.defaultAppearanceData;this._defaultAppearance=(0, _default_appearance.createDefaultAppearance)({fontSize,fontName,fontColor});}return [this._defaultAppearance,fontSize,height/numberOfLines];}_renderText(text,font,fontSize,totalWidth,alignment,prevInfo,hPadding,vPadding){let shift;if(alignment===1){const width=this._getTextWidth(text,font)*fontSize;shift=(totalWidth-width)/2;}else if(alignment===2){const width=this._getTextWidth(text,font)*fontSize;shift=totalWidth-width-hPadding;}else {shift=hPadding;}const shiftStr=(0, _core_utils.numberToString)(shift-prevInfo.shift);prevInfo.shift=shift;vPadding=(0, _core_utils.numberToString)(vPadding);return `${shiftStr} ${vPadding} Td (${(0, _core_utils.escapeString)(text)}) Tj`;}_getSaveFieldResources(xref){const{localResources,appearanceResources,acroFormResources}=this._fieldResources;const fontName=this.data.defaultAppearanceData&&this.data.defaultAppearanceData.fontName;if(!fontName){return localResources||_primitives.Dict.empty;}for(const resources of [localResources,appearanceResources]){if(resources instanceof _primitives.Dict){const localFont=resources.get("Font");if(localFont instanceof _primitives.Dict&&localFont.has(fontName)){return resources;}}}if(acroFormResources instanceof _primitives.Dict){const acroFormFont=acroFormResources.get("Font");if(acroFormFont instanceof _primitives.Dict&&acroFormFont.has(fontName)){const subFontDict=new _primitives.Dict(xref);subFontDict.set(fontName,acroFormFont.getRaw(fontName));const subResourcesDict=new _primitives.Dict(xref);subResourcesDict.set("Font",subFontDict);return _primitives.Dict.merge({xref,dictArray:[subResourcesDict,localResources],mergeSubDicts:true});}}return localResources||_primitives.Dict.empty;}getFieldObject(){return null;}}class TextWidgetAnnotation extends WidgetAnnotation{constructor(params){super(params);this._hasText=true;const dict=params.dict;if(typeof this.data.fieldValue!=="string"){this.data.fieldValue="";}let alignment=(0, _core_utils.getInheritableProperty)({dict,key:"Q"});if(!Number.isInteger(alignment)||alignment<0||alignment>2){alignment=null;}this.data.textAlignment=alignment;let maximumLength=(0, _core_utils.getInheritableProperty)({dict,key:"MaxLen"});if(!Number.isInteger(maximumLength)||maximumLength<0){maximumLength=0;}this.data.maxLen=maximumLength;this.data.multiLine=this.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE);this.data.comb=this.hasFieldFlag(_util.AnnotationFieldFlag.COMB)&&!this.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE)&&!this.hasFieldFlag(_util.AnnotationFieldFlag.PASSWORD)&&!this.hasFieldFlag(_util.AnnotationFieldFlag.FILESELECT)&&this.data.maxLen!==0;this.data.doNotScroll=this.hasFieldFlag(_util.AnnotationFieldFlag.DONOTSCROLL);}_getCombAppearance(defaultAppearance,font,text,fontSize,width,height,hPadding,vPadding,descent,lineHeight,annotationStorage){const combWidth=width/this.data.maxLen;const colors=this.getBorderAndBackgroundAppearances(annotationStorage);const buf=[];const positions=font.getCharPositions(text);for(const[start,end]of positions){buf.push(`(${(0, _core_utils.escapeString)(text.substring(start,end))}) Tj`);}const renderedComb=buf.join(` ${(0, _core_utils.numberToString)(combWidth)} 0 Td `);return `/Tx BMC q ${colors}BT `+defaultAppearance+` 1 0 0 1 ${(0, _core_utils.numberToString)(hPadding)} ${(0, _core_utils.numberToString)(vPadding+descent)} Tm ${renderedComb}`+" ET Q EMC";}_getMultilineAppearance(defaultAppearance,lines,font,fontSize,width,height,alignment,hPadding,vPadding,descent,lineHeight,annotationStorage){const buf=[];const totalWidth=width-2*hPadding;const prevInfo={shift:0};for(let i=0,ii=lines.length;i<ii;i++){const line=lines[i];const chunks=this._splitLine(line,font,fontSize,totalWidth);for(let j=0,jj=chunks.length;j<jj;j++){const chunk=chunks[j];const vShift=i===0&&j===0?-vPadding-(lineHeight-descent):-lineHeight;buf.push(this._renderText(chunk,font,fontSize,width,alignment,prevInfo,hPadding,vShift));}}const colors=this.getBorderAndBackgroundAppearances(annotationStorage);const renderedText=buf.join("\n");return `/Tx BMC q ${colors}BT `+defaultAppearance+` 1 0 0 1 0 ${(0, _core_utils.numberToString)(height)} Tm ${renderedText}`+" ET Q EMC";}_splitLine(line,font,fontSize,width){let cache=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};line=cache.line||line;const glyphs=cache.glyphs||font.charsToGlyphs(line);if(glyphs.length<=1){return [line];}const positions=cache.positions||font.getCharPositions(line);const scale=fontSize/1000;const chunks=[];let lastSpacePosInStringStart=-1,lastSpacePosInStringEnd=-1,lastSpacePos=-1,startChunk=0,currentWidth=0;for(let i=0,ii=glyphs.length;i<ii;i++){const[start,end]=positions[i];const glyph=glyphs[i];const glyphWidth=glyph.width*scale;if(glyph.unicode===" "){if(currentWidth+glyphWidth>width){chunks.push(line.substring(startChunk,start));startChunk=start;currentWidth=glyphWidth;lastSpacePosInStringStart=-1;lastSpacePos=-1;}else {currentWidth+=glyphWidth;lastSpacePosInStringStart=start;lastSpacePosInStringEnd=end;lastSpacePos=i;}}else {if(currentWidth+glyphWidth>width){if(lastSpacePosInStringStart!==-1){chunks.push(line.substring(startChunk,lastSpacePosInStringEnd));startChunk=lastSpacePosInStringEnd;i=lastSpacePos+1;lastSpacePosInStringStart=-1;currentWidth=0;}else {chunks.push(line.substring(startChunk,start));startChunk=start;currentWidth=glyphWidth;}}else {currentWidth+=glyphWidth;}}}if(startChunk<line.length){chunks.push(line.substring(startChunk,line.length));}return chunks;}getFieldObject(){return {id:this.data.id,value:this.data.fieldValue,defaultValue:this.data.defaultFieldValue||"",multiline:this.data.multiLine,password:this.hasFieldFlag(_util.AnnotationFieldFlag.PASSWORD),charLimit:this.data.maxLen,comb:this.data.comb,editable:!this.data.readOnly,hidden:this.data.hidden,name:this.data.fieldName,rect:this.data.rect,actions:this.data.actions,page:this.data.pageIndex,strokeColor:this.data.borderColor,fillColor:this.data.backgroundColor,rotation:this.rotation,type:"text"};}}class ButtonWidgetAnnotation extends WidgetAnnotation{constructor(params){super(params);this.checkedAppearance=null;this.uncheckedAppearance=null;this.data.checkBox=!this.hasFieldFlag(_util.AnnotationFieldFlag.RADIO)&&!this.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);this.data.radioButton=this.hasFieldFlag(_util.AnnotationFieldFlag.RADIO)&&!this.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);this.data.pushButton=this.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);this.data.isTooltipOnly=false;if(this.data.checkBox){this._processCheckBox(params);}else if(this.data.radioButton){this._processRadioButton(params);}else if(this.data.pushButton){this.data.hasOwnCanvas=true;this._processPushButton(params);}else {(0, _util.warn)("Invalid field flags for button widget annotation");}}async getOperatorList(evaluator,task,intent,renderForms,annotationStorage){if(this.data.pushButton){return super.getOperatorList(evaluator,task,intent,false,annotationStorage);}let value=null;let rotation=null;if(annotationStorage){const storageEntry=annotationStorage.get(this.data.id);value=storageEntry?storageEntry.value:null;rotation=storageEntry?storageEntry.rotation:null;}if(value===null&&this.appearance){return super.getOperatorList(evaluator,task,intent,renderForms,annotationStorage);}if(value===null||value===undefined){if(this.data.checkBox){value=this.data.fieldValue===this.data.exportValue;}else {value=this.data.fieldValue===this.data.buttonValue;}}const appearance=value?this.checkedAppearance:this.uncheckedAppearance;if(appearance){const savedAppearance=this.appearance;const savedMatrix=appearance.dict.getArray("Matrix")||_util.IDENTITY_MATRIX;if(rotation){appearance.dict.set("Matrix",this.getRotationMatrix(annotationStorage));}this.appearance=appearance;const operatorList=super.getOperatorList(evaluator,task,intent,renderForms,annotationStorage);this.appearance=savedAppearance;appearance.dict.set("Matrix",savedMatrix);return operatorList;}return {opList:new _operator_list.OperatorList(),separateForm:false,separateCanvas:false};}async save(evaluator,task,annotationStorage){if(this.data.checkBox){return this._saveCheckbox(evaluator,task,annotationStorage);}if(this.data.radioButton){return this._saveRadioButton(evaluator,task,annotationStorage);}return null;}async _saveCheckbox(evaluator,task,annotationStorage){if(!annotationStorage){return null;}const storageEntry=annotationStorage.get(this.data.id);let rotation=storageEntry&&storageEntry.rotation;let value=storageEntry&&storageEntry.value;if(rotation===undefined){if(value===undefined){return null;}const defaultValue=this.data.fieldValue===this.data.exportValue;if(defaultValue===value){return null;}}const dict=evaluator.xref.fetchIfRef(this.ref);if(!(dict instanceof _primitives.Dict)){return null;}if(rotation===undefined){rotation=this.rotation;}if(value===undefined){value=this.data.fieldValue===this.data.exportValue;}const xfa={path:this.data.fieldName,value:value?this.data.exportValue:""};const name=_primitives.Name.get(value?this.data.exportValue:"Off");dict.set("V",name);dict.set("AS",name);dict.set("M",`D:${(0, _util.getModificationDate)()}`);const maybeMK=this._getMKDict(rotation);if(maybeMK){dict.set("MK",maybeMK);}const encrypt=evaluator.xref.encrypt;let originalTransform=null;if(encrypt){originalTransform=encrypt.createCipherTransform(this.ref.num,this.ref.gen);}const buffer=[`${this.ref.num} ${this.ref.gen} obj\n`];(0, _writer.writeDict)(dict,buffer,originalTransform);buffer.push("\nendobj\n");return [{ref:this.ref,data:buffer.join(""),xfa}];}async _saveRadioButton(evaluator,task,annotationStorage){if(!annotationStorage){return null;}const storageEntry=annotationStorage.get(this.data.id);let rotation=storageEntry&&storageEntry.rotation;let value=storageEntry&&storageEntry.value;if(rotation===undefined){if(value===undefined){return null;}const defaultValue=this.data.fieldValue===this.data.buttonValue;if(defaultValue===value){return null;}}const dict=evaluator.xref.fetchIfRef(this.ref);if(!(dict instanceof _primitives.Dict)){return null;}if(value===undefined){value=this.data.fieldValue===this.data.buttonValue;}if(rotation===undefined){rotation=this.rotation;}const xfa={path:this.data.fieldName,value:value?this.data.buttonValue:""};const name=_primitives.Name.get(value?this.data.buttonValue:"Off");let parentBuffer=null;const encrypt=evaluator.xref.encrypt;if(value){if(this.parent instanceof _primitives.Ref){const parent=evaluator.xref.fetch(this.parent);let parentTransform=null;if(encrypt){parentTransform=encrypt.createCipherTransform(this.parent.num,this.parent.gen);}parent.set("V",name);parentBuffer=[`${this.parent.num} ${this.parent.gen} obj\n`];(0, _writer.writeDict)(parent,parentBuffer,parentTransform);parentBuffer.push("\nendobj\n");}else if(this.parent instanceof _primitives.Dict){this.parent.set("V",name);}}dict.set("AS",name);dict.set("M",`D:${(0, _util.getModificationDate)()}`);const maybeMK=this._getMKDict(rotation);if(maybeMK){dict.set("MK",maybeMK);}let originalTransform=null;if(encrypt){originalTransform=encrypt.createCipherTransform(this.ref.num,this.ref.gen);}const buffer=[`${this.ref.num} ${this.ref.gen} obj\n`];(0, _writer.writeDict)(dict,buffer,originalTransform);buffer.push("\nendobj\n");const newRefs=[{ref:this.ref,data:buffer.join(""),xfa}];if(parentBuffer!==null){newRefs.push({ref:this.parent,data:parentBuffer.join(""),xfa:null});}return newRefs;}_getDefaultCheckedAppearance(params,type){const width=this.data.rect[2]-this.data.rect[0];const height=this.data.rect[3]-this.data.rect[1];const bbox=[0,0,width,height];const FONT_RATIO=0.8;const fontSize=Math.min(width,height)*FONT_RATIO;let metrics,char;if(type==="check"){metrics={width:0.755*fontSize,height:0.705*fontSize};char="\x33";}else if(type==="disc"){metrics={width:0.791*fontSize,height:0.705*fontSize};char="\x6C";}else {(0, _util.unreachable)(`_getDefaultCheckedAppearance - unsupported type: ${type}`);}const xShift=(0, _core_utils.numberToString)((width-metrics.width)/2);const yShift=(0, _core_utils.numberToString)((height-metrics.height)/2);const appearance=`q BT /PdfJsZaDb ${fontSize} Tf 0 g ${xShift} ${yShift} Td (${char}) Tj ET Q`;const appearanceStreamDict=new _primitives.Dict(params.xref);appearanceStreamDict.set("FormType",1);appearanceStreamDict.set("Subtype",_primitives.Name.get("Form"));appearanceStreamDict.set("Type",_primitives.Name.get("XObject"));appearanceStreamDict.set("BBox",bbox);appearanceStreamDict.set("Matrix",[1,0,0,1,0,0]);appearanceStreamDict.set("Length",appearance.length);const resources=new _primitives.Dict(params.xref);const font=new _primitives.Dict(params.xref);font.set("PdfJsZaDb",this.fallbackFontDict);resources.set("Font",font);appearanceStreamDict.set("Resources",resources);this.checkedAppearance=new _stream.StringStream(appearance);this.checkedAppearance.dict=appearanceStreamDict;this._streams.push(this.checkedAppearance);}_processCheckBox(params){const customAppearance=params.dict.get("AP");if(!(customAppearance instanceof _primitives.Dict)){return;}const normalAppearance=customAppearance.get("N");if(!(normalAppearance instanceof _primitives.Dict)){return;}const asValue=this._decodeFormValue(params.dict.get("AS"));if(typeof asValue==="string"){this.data.fieldValue=asValue;}const yes=this.data.fieldValue!==null&&this.data.fieldValue!=="Off"?this.data.fieldValue:"Yes";const exportValues=normalAppearance.getKeys();if(exportValues.length===0){exportValues.push("Off",yes);}else if(exportValues.length===1){if(exportValues[0]==="Off"){exportValues.push(yes);}else {exportValues.unshift("Off");}}else if(exportValues.includes(yes)){exportValues.length=0;exportValues.push("Off",yes);}else {const otherYes=exportValues.find(v=>v!=="Off");exportValues.length=0;exportValues.push("Off",otherYes);}if(!exportValues.includes(this.data.fieldValue)){this.data.fieldValue="Off";}this.data.exportValue=exportValues[1];const checkedAppearance=normalAppearance.get(this.data.exportValue);this.checkedAppearance=checkedAppearance instanceof _base_stream.BaseStream?checkedAppearance:null;const uncheckedAppearance=normalAppearance.get("Off");this.uncheckedAppearance=uncheckedAppearance instanceof _base_stream.BaseStream?uncheckedAppearance:null;if(this.checkedAppearance){this._streams.push(this.checkedAppearance);}else {this._getDefaultCheckedAppearance(params,"check");}if(this.uncheckedAppearance){this._streams.push(this.uncheckedAppearance);}this._fallbackFontDict=this.fallbackFontDict;}_processRadioButton(params){this.data.fieldValue=this.data.buttonValue=null;const fieldParent=params.dict.get("Parent");if(fieldParent instanceof _primitives.Dict){this.parent=params.dict.getRaw("Parent");const fieldParentValue=fieldParent.get("V");if(fieldParentValue instanceof _primitives.Name){this.data.fieldValue=this._decodeFormValue(fieldParentValue);}}const appearanceStates=params.dict.get("AP");if(!(appearanceStates instanceof _primitives.Dict)){return;}const normalAppearance=appearanceStates.get("N");if(!(normalAppearance instanceof _primitives.Dict)){return;}for(const key of normalAppearance.getKeys()){if(key!=="Off"){this.data.buttonValue=this._decodeFormValue(key);break;}}const checkedAppearance=normalAppearance.get(this.data.buttonValue);this.checkedAppearance=checkedAppearance instanceof _base_stream.BaseStream?checkedAppearance:null;const uncheckedAppearance=normalAppearance.get("Off");this.uncheckedAppearance=uncheckedAppearance instanceof _base_stream.BaseStream?uncheckedAppearance:null;if(this.checkedAppearance){this._streams.push(this.checkedAppearance);}else {this._getDefaultCheckedAppearance(params,"disc");}if(this.uncheckedAppearance){this._streams.push(this.uncheckedAppearance);}this._fallbackFontDict=this.fallbackFontDict;}_processPushButton(params){if(!params.dict.has("A")&&!params.dict.has("AA")&&!this.data.alternativeText){(0, _util.warn)("Push buttons without action dictionaries are not supported");return;}this.data.isTooltipOnly=!params.dict.has("A")&&!params.dict.has("AA");_catalog.Catalog.parseDestDictionary({destDict:params.dict,resultObj:this.data,docBaseUrl:params.pdfManager.docBaseUrl,docAttachments:params.attachments});}getFieldObject(){let type="button";let exportValues;if(this.data.checkBox){type="checkbox";exportValues=this.data.exportValue;}else if(this.data.radioButton){type="radiobutton";exportValues=this.data.buttonValue;}return {id:this.data.id,value:this.data.fieldValue||"Off",defaultValue:this.data.defaultFieldValue,exportValues,editable:!this.data.readOnly,name:this.data.fieldName,rect:this.data.rect,hidden:this.data.hidden,actions:this.data.actions,page:this.data.pageIndex,strokeColor:this.data.borderColor,fillColor:this.data.backgroundColor,rotation:this.rotation,type};}get fallbackFontDict(){const dict=new _primitives.Dict();dict.set("BaseFont",_primitives.Name.get("ZapfDingbats"));dict.set("Type",_primitives.Name.get("FallbackType"));dict.set("Subtype",_primitives.Name.get("FallbackType"));dict.set("Encoding",_primitives.Name.get("ZapfDingbatsEncoding"));return (0, _util.shadow)(this,"fallbackFontDict",dict);}}class ChoiceWidgetAnnotation extends WidgetAnnotation{constructor(params){super(params);const{dict,xref}=params;this.indices=dict.getArray("I");this.hasIndices=Array.isArray(this.indices)&&this.indices.length>0;this.data.options=[];const options=(0, _core_utils.getInheritableProperty)({dict,key:"Opt"});if(Array.isArray(options)){for(let i=0,ii=options.length;i<ii;i++){const option=xref.fetchIfRef(options[i]);const isOptionArray=Array.isArray(option);this.data.options[i]={exportValue:this._decodeFormValue(isOptionArray?xref.fetchIfRef(option[0]):option),displayValue:this._decodeFormValue(isOptionArray?xref.fetchIfRef(option[1]):option)};}}if(!this.hasIndices){if(typeof this.data.fieldValue==="string"){this.data.fieldValue=[this.data.fieldValue];}else if(!this.data.fieldValue){this.data.fieldValue=[];}}else {this.data.fieldValue=[];const ii=this.data.options.length;for(const i of this.indices){if(Number.isInteger(i)&&i>=0&&i<ii){this.data.fieldValue.push(this.data.options[i].exportValue);}}}this.data.combo=this.hasFieldFlag(_util.AnnotationFieldFlag.COMBO);this.data.multiSelect=this.hasFieldFlag(_util.AnnotationFieldFlag.MULTISELECT);this._hasText=true;}getFieldObject(){const type=this.data.combo?"combobox":"listbox";const value=this.data.fieldValue.length>0?this.data.fieldValue[0]:null;return {id:this.data.id,value,defaultValue:this.data.defaultFieldValue,editable:!this.data.readOnly,name:this.data.fieldName,rect:this.data.rect,numItems:this.data.fieldValue.length,multipleSelection:this.data.multiSelect,hidden:this.data.hidden,actions:this.data.actions,items:this.data.options,page:this.data.pageIndex,strokeColor:this.data.borderColor,fillColor:this.data.backgroundColor,rotation:this.rotation,type};}amendSavedDict(annotationStorage,dict){if(!this.hasIndices){return;}const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;let values=storageEntry&&storageEntry.value;if(!Array.isArray(values)){values=[values];}const indices=[];const{options}=this.data;for(let i=0,j=0,ii=options.length;i<ii;i++){if(options[i].exportValue===values[j]){indices.push(i);j+=1;}}dict.set("I",indices);}async _getAppearance(evaluator,task,intent,annotationStorage){if(this.data.combo){return super._getAppearance(evaluator,task,intent,annotationStorage);}let exportedValue,rotation;const storageEntry=annotationStorage?annotationStorage.get(this.data.id):undefined;if(storageEntry){rotation=storageEntry.rotation;exportedValue=storageEntry.value;}if(rotation===undefined&&exportedValue===undefined&&!this._needAppearances){return null;}if(exportedValue===undefined){exportedValue=this.data.fieldValue;}else if(!Array.isArray(exportedValue)){exportedValue=[exportedValue];}const defaultPadding=1;const defaultHPadding=2;let totalHeight=this.data.rect[3]-this.data.rect[1];let totalWidth=this.data.rect[2]-this.data.rect[0];if(rotation===90||rotation===270){[totalWidth,totalHeight]=[totalHeight,totalWidth];}const lineCount=this.data.options.length;const valueIndices=[];for(let i=0;i<lineCount;i++){const{exportValue}=this.data.options[i];if(exportedValue.includes(exportValue)){valueIndices.push(i);}}if(!this._defaultAppearance){this.data.defaultAppearanceData=(0, _default_appearance.parseDefaultAppearance)(this._defaultAppearance="/Helvetica 0 Tf 0 g");}const font=await WidgetAnnotation._getFontData(evaluator,task,this.data.defaultAppearanceData,this._fieldResources.mergedResources);let defaultAppearance;let{fontSize}=this.data.defaultAppearanceData;if(!fontSize){const lineHeight=(totalHeight-defaultPadding)/lineCount;let lineWidth=-1;let value;for(const{displayValue}of this.data.options){const width=this._getTextWidth(displayValue,font);if(width>lineWidth){lineWidth=width;value=displayValue;}}[defaultAppearance,fontSize]=this._computeFontSize(lineHeight,totalWidth-2*defaultHPadding,value,font,-1);}else {defaultAppearance=this._defaultAppearance;}const lineHeight=fontSize*_util.LINE_FACTOR;const vPadding=(lineHeight-fontSize)/2;const numberOfVisibleLines=Math.floor(totalHeight/lineHeight);let firstIndex;if(valueIndices.length===1){const valuePosition=valueIndices[0];const indexInPage=valuePosition%numberOfVisibleLines;firstIndex=valuePosition-indexInPage;}else {firstIndex=valueIndices.length?valueIndices[0]:0;}const end=Math.min(firstIndex+numberOfVisibleLines+1,lineCount);const buf=["/Tx BMC q",`1 1 ${totalWidth} ${totalHeight} re W n`];if(valueIndices.length){buf.push("0.600006 0.756866 0.854904 rg");for(const index of valueIndices){if(firstIndex<=index&&index<end){buf.push(`1 ${totalHeight-(index-firstIndex+1)*lineHeight} ${totalWidth} ${lineHeight} re f`);}}}buf.push("BT",defaultAppearance,`1 0 0 1 0 ${totalHeight} Tm`);const prevInfo={shift:0};for(let i=firstIndex;i<end;i++){const{displayValue}=this.data.options[i];const vpadding=i===firstIndex?vPadding:0;buf.push(this._renderText(displayValue,font,fontSize,totalWidth,0,prevInfo,defaultHPadding,-lineHeight+vpadding));}buf.push("ET Q EMC");return buf.join("\n");}}class SignatureWidgetAnnotation extends WidgetAnnotation{constructor(params){super(params);this.data.fieldValue=null;}getFieldObject(){return {id:this.data.id,value:null,page:this.data.pageIndex,type:"signature"};}}class TextAnnotation extends MarkupAnnotation{constructor(params){const DEFAULT_ICON_SIZE=22;super(params);const{dict}=params;this.data.annotationType=_util.AnnotationType.TEXT;if(this.data.hasAppearance){this.data.name="NoIcon";}else {this.data.rect[1]=this.data.rect[3]-DEFAULT_ICON_SIZE;this.data.rect[2]=this.data.rect[0]+DEFAULT_ICON_SIZE;this.data.name=dict.has("Name")?dict.get("Name").name:"Note";}if(dict.has("State")){this.data.state=dict.get("State")||null;this.data.stateModel=dict.get("StateModel")||null;}else {this.data.state=null;this.data.stateModel=null;}}}class LinkAnnotation extends Annotation{constructor(params){super(params);this.data.annotationType=_util.AnnotationType.LINK;const quadPoints=getQuadPoints(params.dict,this.rectangle);if(quadPoints){this.data.quadPoints=quadPoints;}this.data.borderColor=this.data.borderColor||this.data.color;_catalog.Catalog.parseDestDictionary({destDict:params.dict,resultObj:this.data,docBaseUrl:params.pdfManager.docBaseUrl,docAttachments:params.attachments});}}class PopupAnnotation extends Annotation{constructor(params){super(params);const{dict}=params;this.data.annotationType=_util.AnnotationType.POPUP;let parentItem=dict.get("Parent");if(!parentItem){(0, _util.warn)("Popup annotation has a missing or invalid parent annotation.");return;}const parentSubtype=parentItem.get("Subtype");this.data.parentType=parentSubtype instanceof _primitives.Name?parentSubtype.name:null;const rawParent=dict.getRaw("Parent");this.data.parentId=rawParent instanceof _primitives.Ref?rawParent.toString():null;const parentRect=parentItem.getArray("Rect");if(Array.isArray(parentRect)&&parentRect.length===4){this.data.parentRect=_util.Util.normalizeRect(parentRect);}else {this.data.parentRect=[0,0,0,0];}const rt=parentItem.get("RT");if((0, _primitives.isName)(rt,_util.AnnotationReplyType.GROUP)){parentItem=parentItem.get("IRT");}if(!parentItem.has("M")){this.data.modificationDate=null;}else {this.setModificationDate(parentItem.get("M"));this.data.modificationDate=this.modificationDate;}if(!parentItem.has("C")){this.data.color=null;}else {this.setColor(parentItem.getArray("C"));this.data.color=this.color;}if(!this.viewable){const parentFlags=parentItem.get("F");if(this._isViewable(parentFlags)){this.setFlags(parentFlags);}}this.setTitle(parentItem.get("T"));this.data.titleObj=this._title;this.setContents(parentItem.get("Contents"));this.data.contentsObj=this._contents;if(parentItem.has("RC")){this.data.richText=_factory.XFAFactory.getRichTextAsHtml(parentItem.get("RC"));}}}exports.PopupAnnotation=PopupAnnotation;class FreeTextAnnotation extends MarkupAnnotation{constructor(params){super(params);const{xref}=params;this.data.annotationType=_util.AnnotationType.FREETEXT;this.setDefaultAppearance(params);if(!this.appearance&&this._isOffscreenCanvasSupported){const strokeAlpha=params.dict.get("CA");const fakeUnicodeFont=new _default_appearance.FakeUnicodeFont(xref,"sans-serif");const fontData=this.data.defaultAppearanceData;this.appearance=fakeUnicodeFont.createAppearance(this._contents.str,this.rectangle,this.rotation,fontData.fontSize||10,fontData.fontColor,strokeAlpha);this._streams.push(this.appearance,_default_appearance.FakeUnicodeFont.toUnicodeStream);}else if(!this._isOffscreenCanvasSupported){(0, _util.warn)("FreeTextAnnotation: OffscreenCanvas is not supported, annotation may not render correctly.");}}get hasTextContent(){return !!this.appearance;}static createNewDict(annotation,xref,_ref4){let{apRef,ap}=_ref4;const{color,fontSize,rect,rotation,user,value}=annotation;const freetext=new _primitives.Dict(xref);freetext.set("Type",_primitives.Name.get("Annot"));freetext.set("Subtype",_primitives.Name.get("FreeText"));freetext.set("CreationDate",`D:${(0, _util.getModificationDate)()}`);freetext.set("Rect",rect);const da=`/Helv ${fontSize} Tf ${(0, _default_appearance.getPdfColor)(color,true)}`;freetext.set("DA",da);freetext.set("Contents",(0, _core_utils.isAscii)(value)?value:(0, _core_utils.stringToUTF16String)(value,true));freetext.set("F",4);freetext.set("Border",[0,0,0]);freetext.set("Rotate",rotation);if(user){freetext.set("T",(0, _core_utils.isAscii)(user)?user:(0, _core_utils.stringToUTF16String)(user,true));}if(apRef||ap){const n=new _primitives.Dict(xref);freetext.set("AP",n);if(apRef){n.set("N",apRef);}else {n.set("N",ap);}}return freetext;}static async createNewAppearanceStream(annotation,xref,params){const{baseFontRef,evaluator,task}=params;const{color,fontSize,rect,rotation,value}=annotation;const resources=new _primitives.Dict(xref);const font=new _primitives.Dict(xref);if(baseFontRef){font.set("Helv",baseFontRef);}else {const baseFont=new _primitives.Dict(xref);baseFont.set("BaseFont",_primitives.Name.get("Helvetica"));baseFont.set("Type",_primitives.Name.get("Font"));baseFont.set("Subtype",_primitives.Name.get("Type1"));baseFont.set("Encoding",_primitives.Name.get("WinAnsiEncoding"));font.set("Helv",baseFont);}resources.set("Font",font);const helv=await WidgetAnnotation._getFontData(evaluator,task,{fontName:"Helvetica",fontSize},resources);const[x1,y1,x2,y2]=rect;let w=x2-x1;let h=y2-y1;if(rotation%180!==0){[w,h]=[h,w];}const lines=value.split("\n");const scale=fontSize/1000;let totalWidth=-Infinity;const encodedLines=[];for(let line of lines){const encoded=helv.encodeString(line);if(encoded.length>1){return null;}line=encoded.join("");encodedLines.push(line);let lineWidth=0;const glyphs=helv.charsToGlyphs(line);for(const glyph of glyphs){lineWidth+=glyph.width*scale;}totalWidth=Math.max(totalWidth,lineWidth);}let hscale=1;if(totalWidth>w){hscale=w/totalWidth;}let vscale=1;const lineHeight=_util.LINE_FACTOR*fontSize;const lineDescent=_util.LINE_DESCENT_FACTOR*fontSize;const totalHeight=lineHeight*lines.length;if(totalHeight>h){vscale=h/totalHeight;}const fscale=Math.min(hscale,vscale);const newFontSize=fontSize*fscale;const buffer=["q",`0 0 ${(0, _core_utils.numberToString)(w)} ${(0, _core_utils.numberToString)(h)} re W n`,`BT`,`1 0 0 1 0 ${(0, _core_utils.numberToString)(h+lineDescent)} Tm 0 Tc ${(0, _default_appearance.getPdfColor)(color,true)}`,`/Helv ${(0, _core_utils.numberToString)(newFontSize)} Tf`];const vShift=(0, _core_utils.numberToString)(lineHeight);for(const line of encodedLines){buffer.push(`0 -${vShift} Td (${(0, _core_utils.escapeString)(line)}) Tj`);}buffer.push("ET","Q");const appearance=buffer.join("\n");const appearanceStreamDict=new _primitives.Dict(xref);appearanceStreamDict.set("FormType",1);appearanceStreamDict.set("Subtype",_primitives.Name.get("Form"));appearanceStreamDict.set("Type",_primitives.Name.get("XObject"));appearanceStreamDict.set("BBox",[0,0,w,h]);appearanceStreamDict.set("Resources",resources);if(rotation){const matrix=(0, _core_utils.getRotationMatrix)(rotation,w,h);appearanceStreamDict.set("Matrix",matrix);}const ap=new _stream.StringStream(appearance);ap.dict=appearanceStreamDict;return ap;}}class LineAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.LINE;const lineCoordinates=dict.getArray("L");this.data.lineCoordinates=_util.Util.normalizeRect(lineCoordinates);this.setLineEndings(dict.getArray("LE"));this.data.lineEndings=this.lineEndings;if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");const interiorColor=getRgbColor(dict.getArray("IC"),null);const fillColor=interiorColor?getPdfColorArray(interiorColor):null;const fillAlpha=fillColor?strokeAlpha:null;const borderWidth=this.borderStyle.width||1,borderAdjust=2*borderWidth;const bbox=[this.data.lineCoordinates[0]-borderAdjust,this.data.lineCoordinates[1]-borderAdjust,this.data.lineCoordinates[2]+borderAdjust,this.data.lineCoordinates[3]+borderAdjust];if(!_util.Util.intersect(this.rectangle,bbox)){this.rectangle=bbox;}this._setDefaultAppearance({xref,extra:`${borderWidth} w`,strokeColor,fillColor,strokeAlpha,fillAlpha,pointsCallback:(buffer,points)=>{buffer.push(`${lineCoordinates[0]} ${lineCoordinates[1]} m`,`${lineCoordinates[2]} ${lineCoordinates[3]} l`,"S");return [points[0].x-borderWidth,points[1].x+borderWidth,points[3].y-borderWidth,points[1].y+borderWidth];}});}}}class SquareAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.SQUARE;if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");const interiorColor=getRgbColor(dict.getArray("IC"),null);const fillColor=interiorColor?getPdfColorArray(interiorColor):null;const fillAlpha=fillColor?strokeAlpha:null;if(this.borderStyle.width===0&&!fillColor){return;}this._setDefaultAppearance({xref,extra:`${this.borderStyle.width} w`,strokeColor,fillColor,strokeAlpha,fillAlpha,pointsCallback:(buffer,points)=>{const x=points[2].x+this.borderStyle.width/2;const y=points[2].y+this.borderStyle.width/2;const width=points[3].x-points[2].x-this.borderStyle.width;const height=points[1].y-points[3].y-this.borderStyle.width;buffer.push(`${x} ${y} ${width} ${height} re`);if(fillColor){buffer.push("B");}else {buffer.push("S");}return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}}class CircleAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.CIRCLE;if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");const interiorColor=getRgbColor(dict.getArray("IC"),null);const fillColor=interiorColor?getPdfColorArray(interiorColor):null;const fillAlpha=fillColor?strokeAlpha:null;if(this.borderStyle.width===0&&!fillColor){return;}const controlPointsDistance=4/3*Math.tan(Math.PI/(2*4));this._setDefaultAppearance({xref,extra:`${this.borderStyle.width} w`,strokeColor,fillColor,strokeAlpha,fillAlpha,pointsCallback:(buffer,points)=>{const x0=points[0].x+this.borderStyle.width/2;const y0=points[0].y-this.borderStyle.width/2;const x1=points[3].x-this.borderStyle.width/2;const y1=points[3].y+this.borderStyle.width/2;const xMid=x0+(x1-x0)/2;const yMid=y0+(y1-y0)/2;const xOffset=(x1-x0)/2*controlPointsDistance;const yOffset=(y1-y0)/2*controlPointsDistance;buffer.push(`${xMid} ${y1} m`,`${xMid+xOffset} ${y1} ${x1} ${yMid+yOffset} ${x1} ${yMid} c`,`${x1} ${yMid-yOffset} ${xMid+xOffset} ${y0} ${xMid} ${y0} c`,`${xMid-xOffset} ${y0} ${x0} ${yMid-yOffset} ${x0} ${yMid} c`,`${x0} ${yMid+yOffset} ${xMid-xOffset} ${y1} ${xMid} ${y1} c`,"h");if(fillColor){buffer.push("B");}else {buffer.push("S");}return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}}class PolylineAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.POLYLINE;this.data.vertices=[];if(!(this instanceof PolygonAnnotation)){this.setLineEndings(dict.getArray("LE"));this.data.lineEndings=this.lineEndings;}const rawVertices=dict.getArray("Vertices");if(!Array.isArray(rawVertices)){return;}for(let i=0,ii=rawVertices.length;i<ii;i+=2){this.data.vertices.push({x:rawVertices[i],y:rawVertices[i+1]});}if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");const borderWidth=this.borderStyle.width||1,borderAdjust=2*borderWidth;const bbox=[Infinity,Infinity,-Infinity,-Infinity];for(const vertex of this.data.vertices){bbox[0]=Math.min(bbox[0],vertex.x-borderAdjust);bbox[1]=Math.min(bbox[1],vertex.y-borderAdjust);bbox[2]=Math.max(bbox[2],vertex.x+borderAdjust);bbox[3]=Math.max(bbox[3],vertex.y+borderAdjust);}if(!_util.Util.intersect(this.rectangle,bbox)){this.rectangle=bbox;}this._setDefaultAppearance({xref,extra:`${borderWidth} w`,strokeColor,strokeAlpha,pointsCallback:(buffer,points)=>{const vertices=this.data.vertices;for(let i=0,ii=vertices.length;i<ii;i++){buffer.push(`${vertices[i].x} ${vertices[i].y} ${i===0?"m":"l"}`);}buffer.push("S");return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}}class PolygonAnnotation extends PolylineAnnotation{constructor(params){super(params);this.data.annotationType=_util.AnnotationType.POLYGON;}}class CaretAnnotation extends MarkupAnnotation{constructor(params){super(params);this.data.annotationType=_util.AnnotationType.CARET;}}class InkAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.INK;this.data.inkLists=[];const rawInkLists=dict.getArray("InkList");if(!Array.isArray(rawInkLists)){return;}for(let i=0,ii=rawInkLists.length;i<ii;++i){this.data.inkLists.push([]);for(let j=0,jj=rawInkLists[i].length;j<jj;j+=2){this.data.inkLists[i].push({x:xref.fetchIfRef(rawInkLists[i][j]),y:xref.fetchIfRef(rawInkLists[i][j+1])});}}if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");const borderWidth=this.borderStyle.width||1,borderAdjust=2*borderWidth;const bbox=[Infinity,Infinity,-Infinity,-Infinity];for(const inkLists of this.data.inkLists){for(const vertex of inkLists){bbox[0]=Math.min(bbox[0],vertex.x-borderAdjust);bbox[1]=Math.min(bbox[1],vertex.y-borderAdjust);bbox[2]=Math.max(bbox[2],vertex.x+borderAdjust);bbox[3]=Math.max(bbox[3],vertex.y+borderAdjust);}}if(!_util.Util.intersect(this.rectangle,bbox)){this.rectangle=bbox;}this._setDefaultAppearance({xref,extra:`${borderWidth} w`,strokeColor,strokeAlpha,pointsCallback:(buffer,points)=>{for(const inkList of this.data.inkLists){for(let i=0,ii=inkList.length;i<ii;i++){buffer.push(`${inkList[i].x} ${inkList[i].y} ${i===0?"m":"l"}`);}buffer.push("S");}return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}static createNewDict(annotation,xref,_ref5){let{apRef,ap}=_ref5;const{paths,rect,rotation}=annotation;const ink=new _primitives.Dict(xref);ink.set("Type",_primitives.Name.get("Annot"));ink.set("Subtype",_primitives.Name.get("Ink"));ink.set("CreationDate",`D:${(0, _util.getModificationDate)()}`);ink.set("Rect",rect);ink.set("InkList",paths.map(p=>p.points));ink.set("F",4);ink.set("Border",[0,0,0]);ink.set("Rotate",rotation);const n=new _primitives.Dict(xref);ink.set("AP",n);if(apRef){n.set("N",apRef);}else {n.set("N",ap);}return ink;}static async createNewAppearanceStream(annotation,xref,params){const{color,rect,rotation,paths,thickness,opacity}=annotation;const[x1,y1,x2,y2]=rect;let w=x2-x1;let h=y2-y1;if(rotation%180!==0){[w,h]=[h,w];}const appearanceBuffer=[`${thickness} w 1 J 1 j`,`${(0, _default_appearance.getPdfColor)(color,false)}`];if(opacity!==1){appearanceBuffer.push("/R0 gs");}const buffer=[];for(const{bezier}of paths){buffer.length=0;buffer.push(`${(0, _core_utils.numberToString)(bezier[0])} ${(0, _core_utils.numberToString)(bezier[1])} m`);for(let i=2,ii=bezier.length;i<ii;i+=6){const curve=bezier.slice(i,i+6).map(_core_utils.numberToString).join(" ");buffer.push(`${curve} c`);}buffer.push("S");appearanceBuffer.push(buffer.join("\n"));}const appearance=appearanceBuffer.join("\n");const appearanceStreamDict=new _primitives.Dict(xref);appearanceStreamDict.set("FormType",1);appearanceStreamDict.set("Subtype",_primitives.Name.get("Form"));appearanceStreamDict.set("Type",_primitives.Name.get("XObject"));appearanceStreamDict.set("BBox",[0,0,w,h]);appearanceStreamDict.set("Length",appearance.length);if(rotation){const matrix=(0, _core_utils.getRotationMatrix)(rotation,w,h);appearanceStreamDict.set("Matrix",matrix);}if(opacity!==1){const resources=new _primitives.Dict(xref);const extGState=new _primitives.Dict(xref);const r0=new _primitives.Dict(xref);r0.set("CA",opacity);r0.set("Type",_primitives.Name.get("ExtGState"));extGState.set("R0",r0);resources.set("ExtGState",extGState);appearanceStreamDict.set("Resources",resources);}const ap=new _stream.StringStream(appearance);ap.dict=appearanceStreamDict;return ap;}}class HighlightAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.HIGHLIGHT;const quadPoints=this.data.quadPoints=getQuadPoints(dict,null);if(quadPoints){const resources=this.appearance&&this.appearance.dict.get("Resources");if(!this.appearance||!(resources&&resources.has("ExtGState"))){if(this.appearance){(0, _util.warn)("HighlightAnnotation - ignoring built-in appearance stream.");}const fillColor=this.color?getPdfColorArray(this.color):[1,1,0];const fillAlpha=dict.get("CA");this._setDefaultAppearance({xref,fillColor,blendMode:"Multiply",fillAlpha,pointsCallback:(buffer,points)=>{buffer.push(`${points[0].x} ${points[0].y} m`,`${points[1].x} ${points[1].y} l`,`${points[3].x} ${points[3].y} l`,`${points[2].x} ${points[2].y} l`,"f");return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}else {this.data.hasPopup=false;}}}class UnderlineAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.UNDERLINE;const quadPoints=this.data.quadPoints=getQuadPoints(dict,null);if(quadPoints){if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");this._setDefaultAppearance({xref,extra:"[] 0 d 1 w",strokeColor,strokeAlpha,pointsCallback:(buffer,points)=>{buffer.push(`${points[2].x} ${points[2].y} m`,`${points[3].x} ${points[3].y} l`,"S");return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}else {this.data.hasPopup=false;}}}class SquigglyAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.SQUIGGLY;const quadPoints=this.data.quadPoints=getQuadPoints(dict,null);if(quadPoints){if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");this._setDefaultAppearance({xref,extra:"[] 0 d 1 w",strokeColor,strokeAlpha,pointsCallback:(buffer,points)=>{const dy=(points[0].y-points[2].y)/6;let shift=dy;let x=points[2].x;const y=points[2].y;const xEnd=points[3].x;buffer.push(`${x} ${y+shift} m`);do{x+=2;shift=shift===0?dy:0;buffer.push(`${x} ${y+shift} l`);}while(x<xEnd);buffer.push("S");return [points[2].x,xEnd,y-2*dy,y+2*dy];}});}}else {this.data.hasPopup=false;}}}class StrikeOutAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;this.data.annotationType=_util.AnnotationType.STRIKEOUT;const quadPoints=this.data.quadPoints=getQuadPoints(dict,null);if(quadPoints){if(!this.appearance){const strokeColor=this.color?getPdfColorArray(this.color):[0,0,0];const strokeAlpha=dict.get("CA");this._setDefaultAppearance({xref,extra:"[] 0 d 1 w",strokeColor,strokeAlpha,pointsCallback:(buffer,points)=>{buffer.push(`${(points[0].x+points[2].x)/2} `+`${(points[0].y+points[2].y)/2} m`,`${(points[1].x+points[3].x)/2} `+`${(points[1].y+points[3].y)/2} l`,"S");return [points[0].x,points[1].x,points[3].y,points[1].y];}});}}else {this.data.hasPopup=false;}}}class StampAnnotation extends MarkupAnnotation{constructor(params){super(params);this.data.annotationType=_util.AnnotationType.STAMP;}}class FileAttachmentAnnotation extends MarkupAnnotation{constructor(params){super(params);const{dict,xref}=params;const file=new _file_spec.FileSpec(dict.get("FS"),xref);this.data.annotationType=_util.AnnotationType.FILEATTACHMENT;this.data.file=file.serializable;const name=dict.get("Name");this.data.name=name instanceof _primitives.Name?(0, _util.stringToPDFString)(name.name):"PushPin";}}/***/},/* 144 */ /***/(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.FakeUnicodeFont=void 0;exports.createDefaultAppearance=createDefaultAppearance;exports.getPdfColor=getPdfColor;exports.parseDefaultAppearance=parseDefaultAppearance;var _primitives=__w_pdfjs_require__(137);var _core_utils=__w_pdfjs_require__(136);var _util=__w_pdfjs_require__(2);var _colorspace=__w_pdfjs_require__(145);var _evaluator=__w_pdfjs_require__(146);var _stream=__w_pdfjs_require__(141);class DefaultAppearanceEvaluator extends _evaluator.EvaluatorPreprocessor{constructor(str){super(new _stream.StringStream(str));}parse(){const operation={fn:0,args:[]};const result={fontSize:0,fontName:"",fontColor:new Uint8ClampedArray(3)};try{while(true){operation.args.length=0;if(!this.read(operation)){break;}if(this.savedStatesDepth!==0){continue;}const{fn,args}=operation;switch(fn|0){case _util.OPS.setFont:const[fontName,fontSize]=args;if(fontName instanceof _primitives.Name){result.fontName=fontName.name;}if(typeof fontSize==="number"&&fontSize>0){result.fontSize=fontSize;}break;case _util.OPS.setFillRGBColor:_colorspace.ColorSpace.singletons.rgb.getRgbItem(args,0,result.fontColor,0);break;case _util.OPS.setFillGray:_colorspace.ColorSpace.singletons.gray.getRgbItem(args,0,result.fontColor,0);break;case _util.OPS.setFillColorSpace:_colorspace.ColorSpace.singletons.cmyk.getRgbItem(args,0,result.fontColor,0);break;}}}catch(reason){(0, _util.warn)(`parseDefaultAppearance - ignoring errors: "${reason}".`);}return result;}}function parseDefaultAppearance(str){return new DefaultAppearanceEvaluator(str).parse();}function getPdfColor(color,isFill){if(color[0]===color[1]&&color[1]===color[2]){const gray=color[0]/255;return `${(0, _core_utils.numberToString)(gray)} ${isFill?"g":"G"}`;}return Array.from(color,c=>(0, _core_utils.numberToString)(c/255)).join(" ")+` ${isFill?"rg":"RG"}`;}function createDefaultAppearance(_ref){let{fontSize,fontName,fontColor}=_ref;return `/${(0, _core_utils.escapePDFName)(fontName)} ${fontSize} Tf ${getPdfColor(fontColor,true)}`;}class FakeUnicodeFont{constructor(xref,fontFamily){this.xref=xref;this.widths=null;this.firstChar=Infinity;this.lastChar=-Infinity;this.fontFamily=fontFamily;const canvas=new OffscreenCanvas(1,1);this.ctxMeasure=canvas.getContext("2d");if(!FakeUnicodeFont._fontNameId){FakeUnicodeFont._fontNameId=1;}this.fontName=_primitives.Name.get(`InvalidPDFjsFont_${fontFamily}_${FakeUnicodeFont._fontNameId++}`);}get toUnicodeRef(){if(!FakeUnicodeFont._toUnicodeRef){const toUnicode=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo
<< /Registry (Adobe)
/Ordering (UCS) /Supplement 0 >> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000> <FFFF>
endcodespacerange
1 beginbfrange
<0000> <FFFF> <0000>
endbfrange
    	/******/var __webpack_module_cache__={};/******/ /******/ // The require function
    	/******/function __w_pdfjs_require__(moduleId){/******/ // Check if module is in cache
    	/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
    	/******/var module=__webpack_module_cache__[moduleId]={/******/ // no module.id needed
    	/******/ // no module.loaded needed
    	/******/exports:{}/******/};/******/ /******/ // Execute the module function
    	/******/__webpack_modules__[moduleId](module,module.exports,__w_pdfjs_require__);/******/ /******/ // Return the exports of the module
    	/******/return module.exports;/******/}/******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/(()=>{/******/ // define getter functions for harmony exports
    	/******/__w_pdfjs_require__.d=(exports,definition)=>{/******/for(var key in definition){/******/if(__w_pdfjs_require__.o(definition,key)&&!__w_pdfjs_require__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/})();/******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/(()=>{/******/__w_pdfjs_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop);/******/})();/******/ /******/ /* webpack/runtime/make namespace object */ /******/(()=>{/******/ // define __esModule on exports
    	/******/__w_pdfjs_require__.r=exports=>{/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/})();/******/ /************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be in strict mode.
    	(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"WorkerMessageHandler",{enumerable:true,get:function(){return _worker.WorkerMessageHandler;}});var _worker=__w_pdfjs_require__(1);})();/******/return __webpack_exports__;/******/})());});
    } (pdf_worker));

    /* Copyright 2022 Mozilla Foundation
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    (typeof window !== "undefined" ? window : {}).pdfjsWorker = pdf_workerExports;

    const global$1 = window;
    class PdfController {
        constructor(wrapper, onError, onSuccess) {
            this.wrapper = wrapper;
            this.onError = onError;
            this.onSuccess = onSuccess;
            pdfExports.GlobalWorkerOptions.workerSrc = global$1.pdfjsWorker;
        }
        init(url) {
            return __awaiter(this, void 0, void 0, function* () {
                this.url = url;
                yield this.fetchData();
            });
        }
        fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield fetch(this.url);
                this.pdfBuffer = yield res.arrayBuffer();
                this.fetchPdf();
            });
        }
        fetchPdf() {
            return __awaiter(this, void 0, void 0, function* () {
                const pdfDocConfig = {
                    cMapUrl: "../../node_modules/pdfjs-dist/cmaps/",
                    cMapPacked: true,
                    rangeChunkSize: 65536,
                    pdfBug: false,
                    useSystemFonts: true,
                    data: this.pdfBuffer,
                };
                pdfExports.getDocument(pdfDocConfig)
                    .promise.then((pdf) => __awaiter(this, void 0, void 0, function* () {
                    this.pdf = pdf;
                    this.onSuccess(pdf);
                    yield this.initPages();
                }))
                    .catch((e) => {
                    this.onError(e);
                });
            });
        }
        initPages() {
            return __awaiter(this, void 0, void 0, function* () {
                const numbers = this.pdf.numPages;
                const promises = [...Array(numbers)].map((_, index) => {
                    var _a;
                    return (_a = this.pdf) === null || _a === void 0 ? void 0 : _a.getPage(index + 1);
                });
                yield Promise.all(promises)
                    .then((pages) => {
                    this.pages = pages;
                    this.renderPdf();
                })
                    .catch((err) => {
                    this.onError(err);
                });
            });
        }
        schedular(frameId) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.preFrame === undefined) {
                    this.preFrame = frameId;
                    yield this.renderPdf();
                }
                else {
                    this.preFrame = frameId;
                }
            });
        }
        renderPdf(num = 0) {
            return __awaiter(this, void 0, void 0, function* () {
                while (this.pdf && this.pages && num < this.pdf.numPages) {
                    const page = this.pages[num];
                    // 获取原pdf大小
                    let viewport = page.getViewport({ scale: 1 });
                    const size = this.wrapper.getBoundingClientRect();
                    const rate = size.width / viewport.width;
                    let canvas = document.createElement("canvas");
                    let context = canvas.getContext("2d");
                    canvas.style.backgroundColor = "#fff";
                    canvas.width = Math.floor(viewport.width * rate);
                    canvas.height = Math.floor(viewport.height * rate);
                    let renderContext = {
                        transform: [rate, 0, 0, rate, 0, 0],
                        canvasContext: context,
                        viewport: viewport,
                    };
                    yield page.render(renderContext).promise;
                    if (num === 0) {
                        this.clear();
                    }
                    this.wrapper.appendChild(canvas);
                    num++;
                }
                this.preFrame = undefined;
            });
        }
        clear() {
            this.wrapper.innerHTML = "";
        }
    }

    class PdfView extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: "open" });
            this.wrapper = document.createElement("div");
            shadow.appendChild(this.wrapper);
            this.controller = new PdfController(this.wrapper, this.onError, this.onSuccess);
            this.observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    if (entry.contentBoxSize) {
                        this.frameId && window.cancelAnimationFrame(this.frameId);
                        this.frameId = window.requestAnimationFrame(() => __awaiter(this, void 0, void 0, function* () {
                            yield this.controller.schedular(this.frameId);
                        }));
                    }
                }
            });
            this.observer.observe(this.wrapper);
        }
        onError(e) {
            console.log(e);
        }
        onSuccess(pdf) { }
        connectedCallback() {
            var _a;
            const style = (_a = this.getAttribute("style")) !== null && _a !== void 0 ? _a : "";
            this.wrapper.setAttribute("style", style);
        }
        disconnectedCallback() {
            var _a, _b;
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.unobserve(this.wrapper);
            (_b = this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
            this.frameId && window.cancelAnimationFrame(this.frameId);
        }
        static get observedAttributes() {
            return ["url"];
        }
        attributeChangedCallback(name, oldValue, newValue) {
            var _a;
            (_a = this.controller) === null || _a === void 0 ? void 0 : _a.init(newValue);
        }
    }
    customElements.define("pdf-view", PdfView);

}));
//# sourceMappingURL=bundle.js.map