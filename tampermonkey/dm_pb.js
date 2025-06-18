// source: dm.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.bilibili.community.service.dm.v1.Avatar', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.AvatarType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Bubble', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.BubbleType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.BubbleV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Button', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.BuzzwordConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.BuzzwordShowConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.CheckBox', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.CheckBoxV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.CheckboxType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ClickButton', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ClickButtonV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.CommandDm', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DMAttrBit', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmakuAIFlag', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmakuElem', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmakuFlag', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmakuFlagConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuPlayerConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmColorful', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmColorfulType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmExpoReportReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmExpoReportRes', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmPlayerConfigReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegMobileReply', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegMobileReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegOttReply', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegOttReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegSDKReply', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmSegSDKReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmViewReply', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmViewReq', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.DmWebViewReply', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ExpoReport', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ExposureType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Expression', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Expressions', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Label', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.LabelV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Period', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PostPanel', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PostPanelBizType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PostPanelV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.PostStatus', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.RenderType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Response', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.SubtitleAiStatus', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.SubtitleAiType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.SubtitleItem', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.SubtitleType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.TextInput', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.TextInputV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.Toast', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ToastButtonV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ToastFunctionType', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.ToastV2', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.UserInfo', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.VideoMask', null, global);
goog.exportSymbol('proto.bilibili.community.service.dm.v1.VideoSubtitle', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Avatar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Avatar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Avatar.displayName = 'proto.bilibili.community.service.dm.v1.Avatar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Bubble = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Bubble, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Bubble.displayName = 'proto.bilibili.community.service.dm.v1.Bubble';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.BubbleV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.BubbleV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.BubbleV2.displayName = 'proto.bilibili.community.service.dm.v1.BubbleV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Button.displayName = 'proto.bilibili.community.service.dm.v1.Button';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.BuzzwordConfig.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.BuzzwordConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.BuzzwordConfig.displayName = 'proto.bilibili.community.service.dm.v1.BuzzwordConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.BuzzwordShowConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.displayName = 'proto.bilibili.community.service.dm.v1.BuzzwordShowConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.CheckBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.CheckBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.CheckBox.displayName = 'proto.bilibili.community.service.dm.v1.CheckBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.CheckBoxV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.CheckBoxV2.displayName = 'proto.bilibili.community.service.dm.v1.CheckBoxV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.ClickButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.ClickButton.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.ClickButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.ClickButton.displayName = 'proto.bilibili.community.service.dm.v1.ClickButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.ClickButtonV2.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.ClickButtonV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.ClickButtonV2.displayName = 'proto.bilibili.community.service.dm.v1.ClickButtonV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.CommandDm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.CommandDm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.CommandDm.displayName = 'proto.bilibili.community.service.dm.v1.CommandDm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DanmakuAIFlag.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmakuAIFlag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmakuAIFlag.displayName = 'proto.bilibili.community.service.dm.v1.DanmakuAIFlag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmakuElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmakuElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmakuElem.displayName = 'proto.bilibili.community.service.dm.v1.DanmakuElem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmakuFlag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmakuFlag.displayName = 'proto.bilibili.community.service.dm.v1.DanmakuFlag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmakuFlagConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmakuFlagConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuPlayerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmuPlayerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.displayName = 'proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.displayName = 'proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmColorful = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmColorful, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmColorful.displayName = 'proto.bilibili.community.service.dm.v1.DmColorful';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmExpoReportReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmExpoReportReq.displayName = 'proto.bilibili.community.service.dm.v1.DmExpoReportReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmExpoReportRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmExpoReportRes.displayName = 'proto.bilibili.community.service.dm.v1.DmExpoReportRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmPlayerConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.displayName = 'proto.bilibili.community.service.dm.v1.DmPlayerConfigReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegConfig.displayName = 'proto.bilibili.community.service.dm.v1.DmSegConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DmSegMobileReply.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegMobileReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegMobileReply.displayName = 'proto.bilibili.community.service.dm.v1.DmSegMobileReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegMobileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegMobileReq.displayName = 'proto.bilibili.community.service.dm.v1.DmSegMobileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DmSegOttReply.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegOttReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegOttReply.displayName = 'proto.bilibili.community.service.dm.v1.DmSegOttReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegOttReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegOttReq.displayName = 'proto.bilibili.community.service.dm.v1.DmSegOttReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DmSegSDKReply.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegSDKReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegSDKReply.displayName = 'proto.bilibili.community.service.dm.v1.DmSegSDKReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmSegSDKReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmSegSDKReq.displayName = 'proto.bilibili.community.service.dm.v1.DmSegSDKReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmViewReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DmViewReply.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmViewReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmViewReply.displayName = 'proto.bilibili.community.service.dm.v1.DmViewReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmViewReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmViewReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmViewReq.displayName = 'proto.bilibili.community.service.dm.v1.DmViewReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.DmWebViewReply.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.DmWebViewReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.DmWebViewReply.displayName = 'proto.bilibili.community.service.dm.v1.DmWebViewReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.ExpoReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.ExpoReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.ExpoReport.displayName = 'proto.bilibili.community.service.dm.v1.ExpoReport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Expression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.Expression.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Expression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Expression.displayName = 'proto.bilibili.community.service.dm.v1.Expression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Expressions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.Expressions.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Expressions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Expressions.displayName = 'proto.bilibili.community.service.dm.v1.Expressions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.displayName = 'proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.Label.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Label.displayName = 'proto.bilibili.community.service.dm.v1.Label';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.LabelV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.LabelV2.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.LabelV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.LabelV2.displayName = 'proto.bilibili.community.service.dm.v1.LabelV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Period = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Period, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Period.displayName = 'proto.bilibili.community.service.dm.v1.Period';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.displayName = 'proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PostPanel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PostPanel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PostPanel.displayName = 'proto.bilibili.community.service.dm.v1.PostPanel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.PostPanelV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.PostPanelV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.PostPanelV2.displayName = 'proto.bilibili.community.service.dm.v1.PostPanelV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Response.displayName = 'proto.bilibili.community.service.dm.v1.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.SubtitleItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.SubtitleItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.SubtitleItem.displayName = 'proto.bilibili.community.service.dm.v1.SubtitleItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.TextInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.TextInput.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.TextInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.TextInput.displayName = 'proto.bilibili.community.service.dm.v1.TextInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.TextInputV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.TextInputV2.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.TextInputV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.TextInputV2.displayName = 'proto.bilibili.community.service.dm.v1.TextInputV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.Toast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.Toast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.Toast.displayName = 'proto.bilibili.community.service.dm.v1.Toast';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.ToastButtonV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.ToastButtonV2.displayName = 'proto.bilibili.community.service.dm.v1.ToastButtonV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.ToastV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.ToastV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.ToastV2.displayName = 'proto.bilibili.community.service.dm.v1.ToastV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.UserInfo.displayName = 'proto.bilibili.community.service.dm.v1.UserInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.VideoMask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.VideoMask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.VideoMask.displayName = 'proto.bilibili.community.service.dm.v1.VideoMask';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.community.service.dm.v1.VideoSubtitle.repeatedFields_, null);
};
goog.inherits(proto.bilibili.community.service.dm.v1.VideoSubtitle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.community.service.dm.v1.VideoSubtitle.displayName = 'proto.bilibili.community.service.dm.v1.VideoSubtitle';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Avatar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Avatar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Avatar.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatarType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Avatar}
 */
proto.bilibili.community.service.dm.v1.Avatar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Avatar;
  return proto.bilibili.community.service.dm.v1.Avatar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Avatar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Avatar}
 */
proto.bilibili.community.service.dm.v1.Avatar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.AvatarType} */ (reader.readEnum());
      msg.setAvatarType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Avatar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Avatar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Avatar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatarType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Avatar} returns this
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Avatar} returns this
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvatarType avatar_type = 3;
 * @return {!proto.bilibili.community.service.dm.v1.AvatarType}
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.getAvatarType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.AvatarType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.AvatarType} value
 * @return {!proto.bilibili.community.service.dm.v1.Avatar} returns this
 */
proto.bilibili.community.service.dm.v1.Avatar.prototype.setAvatarType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Bubble.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Bubble} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Bubble.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Bubble}
 */
proto.bilibili.community.service.dm.v1.Bubble.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Bubble;
  return proto.bilibili.community.service.dm.v1.Bubble.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Bubble} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Bubble}
 */
proto.bilibili.community.service.dm.v1.Bubble.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Bubble.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Bubble} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Bubble.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Bubble} returns this
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Bubble} returns this
 */
proto.bilibili.community.service.dm.v1.Bubble.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.BubbleV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.BubbleV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BubbleV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bubbleType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    exposureOnce: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    exposureType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.BubbleV2;
  return proto.bilibili.community.service.dm.v1.BubbleV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.BubbleV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.BubbleType} */ (reader.readEnum());
      msg.setBubbleType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExposureOnce(value);
      break;
    case 5:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.ExposureType} */ (reader.readEnum());
      msg.setExposureType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.BubbleV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.BubbleV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BubbleV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBubbleType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getExposureOnce();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getExposureType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2} returns this
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2} returns this
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BubbleType bubble_type = 3;
 * @return {!proto.bilibili.community.service.dm.v1.BubbleType}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.getBubbleType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.BubbleType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.BubbleType} value
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2} returns this
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.setBubbleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool exposure_once = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.getExposureOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2} returns this
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.setExposureOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ExposureType exposure_type = 5;
 * @return {!proto.bilibili.community.service.dm.v1.ExposureType}
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.getExposureType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.ExposureType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.ExposureType} value
 * @return {!proto.bilibili.community.service.dm.v1.BubbleV2} returns this
 */
proto.bilibili.community.service.dm.v1.BubbleV2.prototype.setExposureType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Button} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Button}
 */
proto.bilibili.community.service.dm.v1.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Button;
  return proto.bilibili.community.service.dm.v1.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Button}
 */
proto.bilibili.community.service.dm.v1.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Button} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Button.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Button} returns this
 */
proto.bilibili.community.service.dm.v1.Button.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 action = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.Button.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.Button} returns this
 */
proto.bilibili.community.service.dm.v1.Button.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.BuzzwordConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    keywordsList: jspb.Message.toObjectList(msg.getKeywordsList(),
    proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordConfig}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.BuzzwordConfig;
  return proto.bilibili.community.service.dm.v1.BuzzwordConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordConfig}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.community.service.dm.v1.BuzzwordShowConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.deserializeBinaryFromReader);
      msg.addKeywords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.BuzzwordConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BuzzwordShowConfig keywords = 1;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig>}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.getKeywordsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.BuzzwordShowConfig, 1));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig>} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordConfig} returns this
*/
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.setKeywordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig}
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.addKeywords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.community.service.dm.v1.BuzzwordShowConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordConfig.prototype.clearKeywordsList = function() {
  return this.setKeywordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    source: jspb.Message.getFieldWithDefault(msg, 3, 0),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    buzzwordId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    schemaType: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.BuzzwordShowConfig;
  return proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSource(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuzzwordId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSchemaType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSource();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBuzzwordId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSchemaType();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 source = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setSource = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 id = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 buzzword_id = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getBuzzwordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setBuzzwordId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 schema_type = 6;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.getSchemaType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.BuzzwordShowConfig} returns this
 */
proto.bilibili.community.service.dm.v1.BuzzwordShowConfig.prototype.setSchemaType = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.CheckBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.CheckBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CheckBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    defaultValue: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    show: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox}
 */
proto.bilibili.community.service.dm.v1.CheckBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.CheckBox;
  return proto.bilibili.community.service.dm.v1.CheckBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.CheckBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox}
 */
proto.bilibili.community.service.dm.v1.CheckBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.CheckboxType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.CheckBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.CheckBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CheckBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDefaultValue();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getShow();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CheckboxType type = 2;
 * @return {!proto.bilibili.community.service.dm.v1.CheckboxType}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.getType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.CheckboxType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.CheckboxType} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool default_value = 3;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.getDefaultValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.setDefaultValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool show = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.getShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBox} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBox.prototype.setShow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.CheckBoxV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.CheckBoxV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    defaultValue: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.CheckBoxV2}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.CheckBoxV2;
  return proto.bilibili.community.service.dm.v1.CheckBoxV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.CheckBoxV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.CheckBoxV2}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.CheckBoxV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.CheckBoxV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDefaultValue();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBoxV2} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBoxV2} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool default_value = 3;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.getDefaultValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.CheckBoxV2} returns this
 */
proto.bilibili.community.service.dm.v1.CheckBoxV2.prototype.setDefaultValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.ClickButton.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.ClickButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.ClickButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ClickButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    portraitTextList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    landscapeTextList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    portraitTextFocusList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    landscapeTextFocusList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    renderType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    show: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    bubble: (f = msg.getBubble()) && proto.bilibili.community.service.dm.v1.Bubble.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton}
 */
proto.bilibili.community.service.dm.v1.ClickButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.ClickButton;
  return proto.bilibili.community.service.dm.v1.ClickButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.ClickButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton}
 */
proto.bilibili.community.service.dm.v1.ClickButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapeText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitTextFocus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapeTextFocus(value);
      break;
    case 5:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (reader.readEnum());
      msg.setRenderType(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShow(value);
      break;
    case 7:
      var value = new proto.bilibili.community.service.dm.v1.Bubble;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Bubble.deserializeBinaryFromReader);
      msg.setBubble(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.ClickButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.ClickButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ClickButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortraitTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLandscapeTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPortraitTextFocusList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getLandscapeTextFocusList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getRenderType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getShow();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getBubble();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.community.service.dm.v1.Bubble.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string portrait_text = 1;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getPortraitTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setPortraitTextList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.addPortraitText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.clearPortraitTextList = function() {
  return this.setPortraitTextList([]);
};


/**
 * repeated string landscape_text = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getLandscapeTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setLandscapeTextList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.addLandscapeText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.clearLandscapeTextList = function() {
  return this.setLandscapeTextList([]);
};


/**
 * repeated string portrait_text_focus = 3;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getPortraitTextFocusList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setPortraitTextFocusList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.addPortraitTextFocus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.clearPortraitTextFocusList = function() {
  return this.setPortraitTextFocusList([]);
};


/**
 * repeated string landscape_text_focus = 4;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getLandscapeTextFocusList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setLandscapeTextFocusList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.addLandscapeTextFocus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.clearLandscapeTextFocusList = function() {
  return this.setLandscapeTextFocusList([]);
};


/**
 * optional RenderType render_type = 5;
 * @return {!proto.bilibili.community.service.dm.v1.RenderType}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getRenderType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.RenderType} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setRenderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool show = 6;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setShow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Bubble bubble = 7;
 * @return {?proto.bilibili.community.service.dm.v1.Bubble}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.getBubble = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.Bubble} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.Bubble, 7));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.Bubble|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
*/
proto.bilibili.community.service.dm.v1.ClickButton.prototype.setBubble = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButton} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.clearBubble = function() {
  return this.setBubble(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ClickButton.prototype.hasBubble = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.ClickButtonV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.ClickButtonV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    portraitTextList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    landscapeTextList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    portraitTextFocusList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    landscapeTextFocusList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    renderType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    textInputPost: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    exposureOnce: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    exposureType: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.ClickButtonV2;
  return proto.bilibili.community.service.dm.v1.ClickButtonV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.ClickButtonV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapeText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitTextFocus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapeTextFocus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRenderType(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTextInputPost(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExposureOnce(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExposureType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.ClickButtonV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.ClickButtonV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortraitTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLandscapeTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPortraitTextFocusList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getLandscapeTextFocusList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getRenderType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTextInputPost();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getExposureOnce();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getExposureType();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * repeated string portrait_text = 1;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getPortraitTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setPortraitTextList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.addPortraitText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.clearPortraitTextList = function() {
  return this.setPortraitTextList([]);
};


/**
 * repeated string landscape_text = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getLandscapeTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setLandscapeTextList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.addLandscapeText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.clearLandscapeTextList = function() {
  return this.setLandscapeTextList([]);
};


/**
 * repeated string portrait_text_focus = 3;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getPortraitTextFocusList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setPortraitTextFocusList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.addPortraitTextFocus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.clearPortraitTextFocusList = function() {
  return this.setPortraitTextFocusList([]);
};


/**
 * repeated string landscape_text_focus = 4;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getLandscapeTextFocusList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setLandscapeTextFocusList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.addLandscapeTextFocus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.clearLandscapeTextFocusList = function() {
  return this.setLandscapeTextFocusList([]);
};


/**
 * optional int32 render_type = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getRenderType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setRenderType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool text_input_post = 6;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getTextInputPost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setTextInputPost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool exposure_once = 7;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getExposureOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setExposureOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 exposure_type = 8;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.getExposureType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.ClickButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ClickButtonV2.prototype.setExposureType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.CommandDm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.CommandDm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CommandDm.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    command: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    progress: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ctime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mtime: jspb.Message.getFieldWithDefault(msg, 8, ""),
    extra: jspb.Message.getFieldWithDefault(msg, 9, ""),
    idstr: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm}
 */
proto.bilibili.community.service.dm.v1.CommandDm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.CommandDm;
  return proto.bilibili.community.service.dm.v1.CommandDm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.CommandDm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm}
 */
proto.bilibili.community.service.dm.v1.CommandDm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMtime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtra(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdstr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.CommandDm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.CommandDm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.CommandDm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getExtra();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIdstr();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string mid = 3;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getMid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setMid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string command = 4;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 progress = 6;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string ctime = 7;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getCtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setCtime = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string mtime = 8;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getMtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setMtime = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string extra = 9;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getExtra = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setExtra = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string idStr = 10;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.getIdstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm} returns this
 */
proto.bilibili.community.service.dm.v1.CommandDm.prototype.setIdstr = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmakuAIFlag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.toObject = function(includeInstance, msg) {
  var f, obj = {
    dmFlagsList: jspb.Message.toObjectList(msg.getDmFlagsList(),
    proto.bilibili.community.service.dm.v1.DanmakuFlag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmakuAIFlag;
  return proto.bilibili.community.service.dm.v1.DanmakuAIFlag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuFlag;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuFlag.deserializeBinaryFromReader);
      msg.addDmFlags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmakuAIFlag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDmFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuFlag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DanmakuFlag dm_flags = 1;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DanmakuFlag>}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.getDmFlagsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DanmakuFlag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuFlag, 1));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DanmakuFlag>} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag} returns this
*/
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.setDmFlagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlag}
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.addDmFlags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.community.service.dm.v1.DanmakuFlag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuAIFlag} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuAIFlag.prototype.clearDmFlagsList = function() {
  return this.setDmFlagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmakuElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    progress: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fontsize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    color: jspb.Message.getFieldWithDefault(msg, 5, 0),
    midhash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    content: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ctime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    weight: jspb.Message.getFieldWithDefault(msg, 9, 0),
    action: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pool: jspb.Message.getFieldWithDefault(msg, 11, 0),
    idstr: jspb.Message.getFieldWithDefault(msg, 12, ""),
    attr: jspb.Message.getFieldWithDefault(msg, 13, 0),
    animation: jspb.Message.getFieldWithDefault(msg, 22, ""),
    colorful: jspb.Message.getFieldWithDefault(msg, 24, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmakuElem;
  return proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFontsize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMidhash(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPool(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdstr(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttr(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnimation(value);
      break;
    case 24:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.DmColorfulType} */ (reader.readEnum());
      msg.setColorful(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmakuElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFontsize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMidhash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPool();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getIdstr();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAttr();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getAnimation();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getColorful();
  if (f !== 0.0) {
    writer.writeEnum(
      24,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 progress = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 mode = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setMode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 fontsize = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getFontsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setFontsize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 color = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string midHash = 6;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getMidhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setMidhash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string content = 7;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 ctime = 8;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 weight = 9;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string action = 10;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 pool = 11;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getPool = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setPool = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string idStr = 12;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getIdstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setIdstr = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 attr = 13;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getAttr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setAttr = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string animation = 22;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getAnimation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setAnimation = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional DmColorfulType colorful = 24;
 * @return {!proto.bilibili.community.service.dm.v1.DmColorfulType}
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.getColorful = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.DmColorfulType} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DmColorfulType} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuElem.prototype.setColorful = function(value) {
  return jspb.Message.setProto3EnumField(this, 24, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmakuFlag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.toObject = function(includeInstance, msg) {
  var f, obj = {
    dmid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    flag: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlag}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmakuFlag;
  return proto.bilibili.community.service.dm.v1.DanmakuFlag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlag}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDmid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmakuFlag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDmid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional int64 dmid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.getDmid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlag} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.setDmid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 flag = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlag} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuFlag.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    recFlag: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recText: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recSwitch: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmakuFlagConfig;
  return proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecFlag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecSwitch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecFlag();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRecText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecSwitch();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 rec_flag = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.getRecFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.setRecFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string rec_text = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.getRecText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.setRecText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 rec_switch = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.getRecSwitch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.prototype.setRecSwitch = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerDanmakuUseDefaultConfig: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    playerDanmakuAiRecommendedSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    playerDanmakuAiRecommendedLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerDanmakuBlocktop: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    playerDanmakuBlockscroll: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    playerDanmakuBlockbottom: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    playerDanmakuBlockcolorful: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    playerDanmakuBlockrepeat: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    playerDanmakuBlockspecial: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    playerDanmakuOpacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    playerDanmakuScalingfactor: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    playerDanmakuDomain: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    playerDanmakuSpeed: jspb.Message.getFieldWithDefault(msg, 15, 0),
    inlinePlayerDanmakuSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    playerDanmakuSeniorModeSwitch: jspb.Message.getFieldWithDefault(msg, 17, 0),
    playerDanmakuAiRecommendedLevelV2: jspb.Message.getFieldWithDefault(msg, 18, 0),
    playerDanmakuAiRecommendedLevelV2MapMap: (f = msg.getPlayerDanmakuAiRecommendedLevelV2MapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig;
  return proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuUseDefaultConfig(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuAiRecommendedSwitch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuAiRecommendedLevel(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlocktop(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockscroll(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockbottom(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockcolorful(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockrepeat(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockspecial(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuOpacity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuScalingfactor(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuDomain(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuSpeed(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInlinePlayerDanmakuSwitch(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuSeniorModeSwitch(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuAiRecommendedLevelV2(value);
      break;
    case 19:
      var value = msg.getPlayerDanmakuAiRecommendedLevelV2MapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readInt32, null, 0, 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerDanmakuUseDefaultConfig();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedSwitch();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevel();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPlayerDanmakuBlocktop();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPlayerDanmakuBlockscroll();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPlayerDanmakuBlockbottom();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPlayerDanmakuBlockcolorful();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPlayerDanmakuBlockrepeat();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPlayerDanmakuBlockspecial();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPlayerDanmakuOpacity();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getPlayerDanmakuScalingfactor();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getPlayerDanmakuDomain();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getPlayerDanmakuSpeed();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getInlinePlayerDanmakuSwitch();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getPlayerDanmakuSeniorModeSwitch();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevelV2();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevelV2MapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * optional bool player_danmaku_use_default_config = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuUseDefaultConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuUseDefaultConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool player_danmaku_ai_recommended_switch = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuAiRecommendedSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuAiRecommendedSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 player_danmaku_ai_recommended_level = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuAiRecommendedLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool player_danmaku_blocktop = 6;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlocktop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlocktop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool player_danmaku_blockscroll = 7;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlockscroll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlockscroll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool player_danmaku_blockbottom = 8;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlockbottom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlockbottom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool player_danmaku_blockcolorful = 9;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlockcolorful = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlockcolorful = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool player_danmaku_blockrepeat = 10;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlockrepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlockrepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool player_danmaku_blockspecial = 11;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuBlockspecial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuBlockspecial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional float player_danmaku_opacity = 12;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuOpacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuOpacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float player_danmaku_scalingfactor = 13;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuScalingfactor = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuScalingfactor = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float player_danmaku_domain = 14;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuDomain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuDomain = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional int32 player_danmaku_speed = 15;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuSpeed = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool inline_player_danmaku_switch = 16;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getInlinePlayerDanmakuSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setInlinePlayerDanmakuSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional int32 player_danmaku_senior_mode_switch = 17;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuSeniorModeSwitch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuSeniorModeSwitch = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 player_danmaku_ai_recommended_level_v2 = 18;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevelV2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.setPlayerDanmakuAiRecommendedLevelV2 = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * map<int32, int32> player_danmaku_ai_recommended_level_v2_map = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevelV2MapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.prototype.clearPlayerDanmakuAiRecommendedLevelV2MapMap = function() {
  this.getPlayerDanmakuAiRecommendedLevelV2MapMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerDanmakuSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    playerDanmakuSwitchSave: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    playerDanmakuUseDefaultConfig: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    playerDanmakuAiRecommendedSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    playerDanmakuAiRecommendedLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerDanmakuBlocktop: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    playerDanmakuBlockscroll: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    playerDanmakuBlockbottom: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    playerDanmakuBlockcolorful: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    playerDanmakuBlockrepeat: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    playerDanmakuBlockspecial: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    playerDanmakuOpacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    playerDanmakuScalingfactor: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    playerDanmakuDomain: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    playerDanmakuSpeed: jspb.Message.getFieldWithDefault(msg, 15, 0),
    playerDanmakuEnableblocklist: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    inlinePlayerDanmakuSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    inlinePlayerDanmakuConfig: jspb.Message.getFieldWithDefault(msg, 18, 0),
    playerDanmakuIosSwitchSave: jspb.Message.getFieldWithDefault(msg, 19, 0),
    playerDanmakuSeniorModeSwitch: jspb.Message.getFieldWithDefault(msg, 20, 0),
    playerDanmakuAiRecommendedLevelV2: jspb.Message.getFieldWithDefault(msg, 21, 0),
    playerDanmakuAiRecommendedLevelV2MapMap: (f = msg.getPlayerDanmakuAiRecommendedLevelV2MapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuPlayerConfig;
  return proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuSwitch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuSwitchSave(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuUseDefaultConfig(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuAiRecommendedSwitch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuAiRecommendedLevel(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlocktop(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockscroll(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockbottom(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockcolorful(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockrepeat(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuBlockspecial(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuOpacity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuScalingfactor(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuDomain(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuSpeed(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayerDanmakuEnableblocklist(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInlinePlayerDanmakuSwitch(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInlinePlayerDanmakuConfig(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuIosSwitchSave(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuSeniorModeSwitch(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerDanmakuAiRecommendedLevelV2(value);
      break;
    case 22:
      var value = msg.getPlayerDanmakuAiRecommendedLevelV2MapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readInt32, null, 0, 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerDanmakuSwitch();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPlayerDanmakuSwitchSave();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPlayerDanmakuUseDefaultConfig();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedSwitch();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevel();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPlayerDanmakuBlocktop();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPlayerDanmakuBlockscroll();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPlayerDanmakuBlockbottom();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPlayerDanmakuBlockcolorful();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPlayerDanmakuBlockrepeat();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPlayerDanmakuBlockspecial();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPlayerDanmakuOpacity();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getPlayerDanmakuScalingfactor();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getPlayerDanmakuDomain();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getPlayerDanmakuSpeed();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getPlayerDanmakuEnableblocklist();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getInlinePlayerDanmakuSwitch();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getInlinePlayerDanmakuConfig();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getPlayerDanmakuIosSwitchSave();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getPlayerDanmakuSeniorModeSwitch();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevelV2();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = message.getPlayerDanmakuAiRecommendedLevelV2MapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(22, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * optional bool player_danmaku_switch = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool player_danmaku_switch_save = 2;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuSwitchSave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuSwitchSave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool player_danmaku_use_default_config = 3;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuUseDefaultConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuUseDefaultConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool player_danmaku_ai_recommended_switch = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuAiRecommendedSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuAiRecommendedSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 player_danmaku_ai_recommended_level = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuAiRecommendedLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool player_danmaku_blocktop = 6;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlocktop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlocktop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool player_danmaku_blockscroll = 7;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlockscroll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlockscroll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool player_danmaku_blockbottom = 8;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlockbottom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlockbottom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool player_danmaku_blockcolorful = 9;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlockcolorful = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlockcolorful = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool player_danmaku_blockrepeat = 10;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlockrepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlockrepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool player_danmaku_blockspecial = 11;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuBlockspecial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuBlockspecial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional float player_danmaku_opacity = 12;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuOpacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuOpacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float player_danmaku_scalingfactor = 13;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuScalingfactor = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuScalingfactor = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float player_danmaku_domain = 14;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuDomain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuDomain = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional int32 player_danmaku_speed = 15;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuSpeed = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool player_danmaku_enableblocklist = 16;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuEnableblocklist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuEnableblocklist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool inline_player_danmaku_switch = 17;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getInlinePlayerDanmakuSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setInlinePlayerDanmakuSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional int32 inline_player_danmaku_config = 18;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getInlinePlayerDanmakuConfig = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setInlinePlayerDanmakuConfig = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 player_danmaku_ios_switch_save = 19;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuIosSwitchSave = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuIosSwitchSave = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 player_danmaku_senior_mode_switch = 20;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuSeniorModeSwitch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuSeniorModeSwitch = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int32 player_danmaku_ai_recommended_level_v2 = 21;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevelV2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.setPlayerDanmakuAiRecommendedLevelV2 = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * map<int32, int32> player_danmaku_ai_recommended_level_v2_map = 22;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.getPlayerDanmakuAiRecommendedLevelV2MapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 22, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.prototype.clearPlayerDanmakuAiRecommendedLevelV2MapMap = function() {
  this.getPlayerDanmakuAiRecommendedLevelV2MapMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectionText: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel;
  return proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectionText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectionText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string selection_text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.prototype.getSelectionText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.prototype.setSelectionText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerDanmakuDomain: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig;
  return proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPlayerDanmakuDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayerDanmakuDomain();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
};


/**
 * optional int32 progress = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float player_danmaku_domain = 14;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.getPlayerDanmakuDomain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.prototype.setPlayerDanmakuDomain = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    danmukuDefaultPlayerConfig: (f = msg.getDanmukuDefaultPlayerConfig()) && proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.toObject(includeInstance, f),
    danmukuPlayerConfig: (f = msg.getDanmukuPlayerConfig()) && proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.toObject(includeInstance, f),
    danmukuPlayerDynamicConfigList: jspb.Message.toObjectList(msg.getDanmukuPlayerDynamicConfigList(),
    proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.toObject, includeInstance),
    danmukuPlayerConfigPanel: (f = msg.getDanmukuPlayerConfigPanel()) && proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig;
  return proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.deserializeBinaryFromReader);
      msg.setDanmukuDefaultPlayerConfig(value);
      break;
    case 2:
      var value = new proto.bilibili.community.service.dm.v1.DanmuPlayerConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.deserializeBinaryFromReader);
      msg.setDanmukuPlayerConfig(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.deserializeBinaryFromReader);
      msg.addDanmukuPlayerDynamicConfig(value);
      break;
    case 4:
      var value = new proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.deserializeBinaryFromReader);
      msg.setDanmukuPlayerConfigPanel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDanmukuDefaultPlayerConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.serializeBinaryToWriter
    );
  }
  f = message.getDanmukuPlayerConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.community.service.dm.v1.DanmuPlayerConfig.serializeBinaryToWriter
    );
  }
  f = message.getDanmukuPlayerDynamicConfigList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.serializeBinaryToWriter
    );
  }
  f = message.getDanmukuPlayerConfigPanel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel.serializeBinaryToWriter
    );
  }
};


/**
 * optional DanmuDefaultPlayerConfig danmuku_default_player_config = 1;
 * @return {?proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.getDanmukuDefaultPlayerConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig, 1));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
*/
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.setDanmukuDefaultPlayerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.clearDanmukuDefaultPlayerConfig = function() {
  return this.setDanmukuDefaultPlayerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.hasDanmukuDefaultPlayerConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DanmuPlayerConfig danmuku_player_config = 2;
 * @return {?proto.bilibili.community.service.dm.v1.DanmuPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.getDanmukuPlayerConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmuPlayerConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuPlayerConfig, 2));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmuPlayerConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
*/
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.setDanmukuPlayerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.clearDanmukuPlayerConfig = function() {
  return this.setDanmukuPlayerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.hasDanmukuPlayerConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DanmuPlayerDynamicConfig danmuku_player_dynamic_config = 3;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig>}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.getDanmukuPlayerDynamicConfigList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig, 3));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig>} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
*/
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.setDanmukuPlayerDynamicConfigList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.addDanmukuPlayerDynamicConfig = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.clearDanmukuPlayerDynamicConfigList = function() {
  return this.setDanmukuPlayerDynamicConfigList([]);
};


/**
 * optional DanmuPlayerConfigPanel danmuku_player_config_panel = 4;
 * @return {?proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.getDanmukuPlayerConfigPanel = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel, 4));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmuPlayerConfigPanel|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
*/
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.setDanmukuPlayerConfigPanel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.clearDanmukuPlayerConfigPanel = function() {
  return this.setDanmukuPlayerConfigPanel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.prototype.hasDanmukuPlayerConfigPanel = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    dmSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    aiSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    aiLevel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    blocktop: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    blockscroll: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    blockbottom: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    blockcolor: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    blockspecial: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    preventshade: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    dmask: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    opacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    dmarea: jspb.Message.getFieldWithDefault(msg, 12, 0),
    speedplus: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    fontsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    screensync: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    speedsync: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    fontfamily: jspb.Message.getFieldWithDefault(msg, 17, ""),
    bold: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    fontborder: jspb.Message.getFieldWithDefault(msg, 19, 0),
    drawType: jspb.Message.getFieldWithDefault(msg, 20, ""),
    seniorModeSwitch: jspb.Message.getFieldWithDefault(msg, 21, 0),
    aiLevelV2: jspb.Message.getFieldWithDefault(msg, 22, 0),
    aiLevelV2MapMap: (f = msg.getAiLevelV2MapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;
  return proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDmSwitch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAiSwitch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAiLevel(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocktop(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockscroll(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockbottom(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockcolor(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockspecial(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreventshade(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDmask(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOpacity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDmarea(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeedplus(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFontsize(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScreensync(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpeedsync(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setFontfamily(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBold(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFontborder(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrawType(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeniorModeSwitch(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAiLevelV2(value);
      break;
    case 23:
      var value = msg.getAiLevelV2MapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readInt32, null, 0, 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDmSwitch();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAiSwitch();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAiLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBlocktop();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBlockscroll();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBlockbottom();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getBlockcolor();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getBlockspecial();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPreventshade();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDmask();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getOpacity();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getDmarea();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getSpeedplus();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getFontsize();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getScreensync();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getSpeedsync();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getFontfamily();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getBold();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getFontborder();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getDrawType();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getSeniorModeSwitch();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = message.getAiLevelV2();
  if (f !== 0) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = message.getAiLevelV2MapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(23, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * optional bool dm_switch = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getDmSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setDmSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool ai_switch = 2;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getAiSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setAiSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 ai_level = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getAiLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setAiLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool blocktop = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBlocktop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBlocktop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool blockscroll = 5;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBlockscroll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBlockscroll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool blockbottom = 6;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBlockbottom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBlockbottom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool blockcolor = 7;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBlockcolor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBlockcolor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool blockspecial = 8;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBlockspecial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBlockspecial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool preventshade = 9;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getPreventshade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setPreventshade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool dmask = 10;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getDmask = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setDmask = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional float opacity = 11;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getOpacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setOpacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional int32 dmarea = 12;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getDmarea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setDmarea = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional float speedplus = 13;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getSpeedplus = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setSpeedplus = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float fontsize = 14;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getFontsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setFontsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional bool screensync = 15;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getScreensync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setScreensync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool speedsync = 16;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getSpeedsync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setSpeedsync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional string fontfamily = 17;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getFontfamily = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setFontfamily = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool bold = 18;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getBold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setBold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional int32 fontborder = 19;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getFontborder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setFontborder = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string draw_type = 20;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getDrawType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setDrawType = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int32 senior_mode_switch = 21;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getSeniorModeSwitch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setSeniorModeSwitch = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int32 ai_level_v2 = 22;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getAiLevelV2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.setAiLevelV2 = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * map<int32, int32> ai_level_v2_map = 23;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.getAiLevelV2MapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 23, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.prototype.clearAiLevelV2MapMap = function() {
  this.getAiLevelV2MapMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmColorful.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmColorful} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmColorful.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    src: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmColorful}
 */
proto.bilibili.community.service.dm.v1.DmColorful.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmColorful;
  return proto.bilibili.community.service.dm.v1.DmColorful.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmColorful} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmColorful}
 */
proto.bilibili.community.service.dm.v1.DmColorful.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.DmColorfulType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmColorful.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmColorful} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmColorful.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSrc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional DmColorfulType type = 1;
 * @return {!proto.bilibili.community.service.dm.v1.DmColorfulType}
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.getType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.DmColorfulType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DmColorfulType} value
 * @return {!proto.bilibili.community.service.dm.v1.DmColorful} returns this
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string src = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.getSrc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmColorful} returns this
 */
proto.bilibili.community.service.dm.v1.DmColorful.prototype.setSrc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmExpoReportReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spmid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportReq}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmExpoReportReq;
  return proto.bilibili.community.service.dm.v1.DmExpoReportReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportReq}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpmid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmExpoReportReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSpmid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string spmid = 4;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.getSpmid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmExpoReportReq.prototype.setSpmid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmExpoReportRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportRes}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmExpoReportRes;
  return proto.bilibili.community.service.dm.v1.DmExpoReportRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmExpoReportRes}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmExpoReportRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmExpoReportRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmExpoReportRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ts: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pb_switch: (f = msg.getSwitch()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.toObject(includeInstance, f),
    switchSave: (f = msg.getSwitchSave()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.toObject(includeInstance, f),
    useDefaultConfig: (f = msg.getUseDefaultConfig()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.toObject(includeInstance, f),
    aiRecommendedSwitch: (f = msg.getAiRecommendedSwitch()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.toObject(includeInstance, f),
    aiRecommendedLevel: (f = msg.getAiRecommendedLevel()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.toObject(includeInstance, f),
    blocktop: (f = msg.getBlocktop()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.toObject(includeInstance, f),
    blockscroll: (f = msg.getBlockscroll()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.toObject(includeInstance, f),
    blockbottom: (f = msg.getBlockbottom()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.toObject(includeInstance, f),
    blockcolorful: (f = msg.getBlockcolorful()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.toObject(includeInstance, f),
    blockrepeat: (f = msg.getBlockrepeat()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.toObject(includeInstance, f),
    blockspecial: (f = msg.getBlockspecial()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.toObject(includeInstance, f),
    opacity: (f = msg.getOpacity()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.toObject(includeInstance, f),
    scalingfactor: (f = msg.getScalingfactor()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.toObject(includeInstance, f),
    domain: (f = msg.getDomain()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.toObject(includeInstance, f),
    enableblocklist: (f = msg.getEnableblocklist()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.toObject(includeInstance, f),
    inlineplayerdanmakuswitch: (f = msg.getInlineplayerdanmakuswitch()) && proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.toObject(includeInstance, f),
    seniorModeSwitch: (f = msg.getSeniorModeSwitch()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.toObject(includeInstance, f),
    aiRecommendedLevelV2: (f = msg.getAiRecommendedLevelV2()) && proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmPlayerConfigReq;
  return proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTs(value);
      break;
    case 2:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.deserializeBinaryFromReader);
      msg.setSwitch(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.deserializeBinaryFromReader);
      msg.setSwitchSave(value);
      break;
    case 4:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.deserializeBinaryFromReader);
      msg.setUseDefaultConfig(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.deserializeBinaryFromReader);
      msg.setAiRecommendedSwitch(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.deserializeBinaryFromReader);
      msg.setAiRecommendedLevel(value);
      break;
    case 7:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.deserializeBinaryFromReader);
      msg.setBlocktop(value);
      break;
    case 8:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.deserializeBinaryFromReader);
      msg.setBlockscroll(value);
      break;
    case 9:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.deserializeBinaryFromReader);
      msg.setBlockbottom(value);
      break;
    case 10:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.deserializeBinaryFromReader);
      msg.setBlockcolorful(value);
      break;
    case 11:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.deserializeBinaryFromReader);
      msg.setBlockrepeat(value);
      break;
    case 12:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.deserializeBinaryFromReader);
      msg.setBlockspecial(value);
      break;
    case 13:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.deserializeBinaryFromReader);
      msg.setOpacity(value);
      break;
    case 14:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.deserializeBinaryFromReader);
      msg.setScalingfactor(value);
      break;
    case 15:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.deserializeBinaryFromReader);
      msg.setDomain(value);
      break;
    case 16:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 17:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.deserializeBinaryFromReader);
      msg.setEnableblocklist(value);
      break;
    case 18:
      var value = new proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.deserializeBinaryFromReader);
      msg.setInlineplayerdanmakuswitch(value);
      break;
    case 19:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.deserializeBinaryFromReader);
      msg.setSeniorModeSwitch(value);
      break;
    case 20:
      var value = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.deserializeBinaryFromReader);
      msg.setAiRecommendedLevelV2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTs();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSwitch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.serializeBinaryToWriter
    );
  }
  f = message.getSwitchSave();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.serializeBinaryToWriter
    );
  }
  f = message.getUseDefaultConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.serializeBinaryToWriter
    );
  }
  f = message.getAiRecommendedSwitch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.serializeBinaryToWriter
    );
  }
  f = message.getAiRecommendedLevel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.serializeBinaryToWriter
    );
  }
  f = message.getBlocktop();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.serializeBinaryToWriter
    );
  }
  f = message.getBlockscroll();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.serializeBinaryToWriter
    );
  }
  f = message.getBlockbottom();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.serializeBinaryToWriter
    );
  }
  f = message.getBlockcolorful();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.serializeBinaryToWriter
    );
  }
  f = message.getBlockrepeat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.serializeBinaryToWriter
    );
  }
  f = message.getBlockspecial();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.serializeBinaryToWriter
    );
  }
  f = message.getOpacity();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.serializeBinaryToWriter
    );
  }
  f = message.getScalingfactor();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.serializeBinaryToWriter
    );
  }
  f = message.getDomain();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.serializeBinaryToWriter
    );
  }
  f = message.getEnableblocklist();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.serializeBinaryToWriter
    );
  }
  f = message.getInlineplayerdanmakuswitch();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.serializeBinaryToWriter
    );
  }
  f = message.getSeniorModeSwitch();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.serializeBinaryToWriter
    );
  }
  f = message.getAiRecommendedLevelV2();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ts = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setTs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PlayerDanmakuSwitch switch = 2;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getSwitch = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch, 2));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setSwitch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearSwitch = function() {
  return this.setSwitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasSwitch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PlayerDanmakuSwitchSave switch_save = 3;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getSwitchSave = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave, 3));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setSwitchSave = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearSwitchSave = function() {
  return this.setSwitchSave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasSwitchSave = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PlayerDanmakuUseDefaultConfig use_default_config = 4;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getUseDefaultConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig, 4));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setUseDefaultConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearUseDefaultConfig = function() {
  return this.setUseDefaultConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasUseDefaultConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PlayerDanmakuAiRecommendedSwitch ai_recommended_switch = 5;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getAiRecommendedSwitch = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch, 5));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setAiRecommendedSwitch = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearAiRecommendedSwitch = function() {
  return this.setAiRecommendedSwitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasAiRecommendedSwitch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PlayerDanmakuAiRecommendedLevel ai_recommended_level = 6;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getAiRecommendedLevel = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel, 6));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setAiRecommendedLevel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearAiRecommendedLevel = function() {
  return this.setAiRecommendedLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasAiRecommendedLevel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PlayerDanmakuBlocktop blocktop = 7;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlocktop = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop, 7));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlocktop = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlocktop = function() {
  return this.setBlocktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlocktop = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PlayerDanmakuBlockscroll blockscroll = 8;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlockscroll = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll, 8));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlockscroll = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlockscroll = function() {
  return this.setBlockscroll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlockscroll = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PlayerDanmakuBlockbottom blockbottom = 9;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlockbottom = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom, 9));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlockbottom = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlockbottom = function() {
  return this.setBlockbottom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlockbottom = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PlayerDanmakuBlockcolorful blockcolorful = 10;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlockcolorful = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful, 10));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlockcolorful = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlockcolorful = function() {
  return this.setBlockcolorful(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlockcolorful = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PlayerDanmakuBlockrepeat blockrepeat = 11;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlockrepeat = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat, 11));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlockrepeat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlockrepeat = function() {
  return this.setBlockrepeat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlockrepeat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional PlayerDanmakuBlockspecial blockspecial = 12;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getBlockspecial = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial, 12));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setBlockspecial = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearBlockspecial = function() {
  return this.setBlockspecial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasBlockspecial = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PlayerDanmakuOpacity opacity = 13;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getOpacity = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity, 13));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setOpacity = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearOpacity = function() {
  return this.setOpacity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasOpacity = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PlayerDanmakuScalingfactor scalingfactor = 14;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getScalingfactor = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor, 14));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setScalingfactor = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearScalingfactor = function() {
  return this.setScalingfactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasScalingfactor = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PlayerDanmakuDomain domain = 15;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getDomain = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain, 15));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setDomain = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearDomain = function() {
  return this.setDomain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasDomain = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PlayerDanmakuSpeed speed = 16;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getSpeed = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed, 16));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PlayerDanmakuEnableblocklist enableblocklist = 17;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getEnableblocklist = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist, 17));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setEnableblocklist = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearEnableblocklist = function() {
  return this.setEnableblocklist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasEnableblocklist = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional InlinePlayerDanmakuSwitch inlinePlayerDanmakuSwitch = 18;
 * @return {?proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getInlineplayerdanmakuswitch = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch, 18));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setInlineplayerdanmakuswitch = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearInlineplayerdanmakuswitch = function() {
  return this.setInlineplayerdanmakuswitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasInlineplayerdanmakuswitch = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional PlayerDanmakuSeniorModeSwitch senior_mode_switch = 19;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getSeniorModeSwitch = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch, 19));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setSeniorModeSwitch = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearSeniorModeSwitch = function() {
  return this.setSeniorModeSwitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasSeniorModeSwitch = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional PlayerDanmakuAiRecommendedLevelV2 ai_recommended_level_v2 = 20;
 * @return {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.getAiRecommendedLevelV2 = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2, 20));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
*/
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.setAiRecommendedLevelV2 = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmPlayerConfigReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.clearAiRecommendedLevelV2 = function() {
  return this.setAiRecommendedLevelV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmPlayerConfigReq.prototype.hasAiRecommendedLevelV2 = function() {
  return jspb.Message.getField(this, 20) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegConfig}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegConfig;
  return proto.bilibili.community.service.dm.v1.DmSegConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegConfig}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 page_size = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegConfig} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegConfig.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.repeatedFields_ = [1,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegMobileReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    elemsList: jspb.Message.toObjectList(msg.getElemsList(),
    proto.bilibili.community.service.dm.v1.DanmakuElem.toObject, includeInstance),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    aiFlag: (f = msg.getAiFlag()) && proto.bilibili.community.service.dm.v1.DanmakuAIFlag.toObject(includeInstance, f),
    colorfulsrcList: jspb.Message.toObjectList(msg.getColorfulsrcList(),
    proto.bilibili.community.service.dm.v1.DmColorful.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegMobileReply;
  return proto.bilibili.community.service.dm.v1.DmSegMobileReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuElem;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinaryFromReader);
      msg.addElems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuAIFlag;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuAIFlag.deserializeBinaryFromReader);
      msg.setAiFlag(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.DmColorful;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DmColorful.deserializeBinaryFromReader);
      msg.addColorfulsrc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegMobileReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuElem.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAiFlag();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuAIFlag.serializeBinaryToWriter
    );
  }
  f = message.getColorfulsrcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.DmColorful.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DanmakuElem elems = 1;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.getElemsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuElem, 1));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.setElemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.addElems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.community.service.dm.v1.DanmakuElem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.clearElemsList = function() {
  return this.setElemsList([]);
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DanmakuAIFlag ai_flag = 3;
 * @return {?proto.bilibili.community.service.dm.v1.DanmakuAIFlag}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.getAiFlag = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmakuAIFlag} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuAIFlag, 3));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmakuAIFlag|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.setAiFlag = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.clearAiFlag = function() {
  return this.setAiFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.hasAiFlag = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated DmColorful colorfulSrc = 5;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DmColorful>}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.getColorfulsrcList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DmColorful>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DmColorful, 5));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DmColorful>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.setColorfulsrcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DmColorful=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmColorful}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.addColorfulsrc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bilibili.community.service.dm.v1.DmColorful, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReply.prototype.clearColorfulsrcList = function() {
  return this.setColorfulsrcList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegMobileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    segmentIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    teenagersMode: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ps: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pe: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pullMode: jspb.Message.getFieldWithDefault(msg, 8, 0),
    fromScene: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegMobileReq;
  return proto.bilibili.community.service.dm.v1.DmSegMobileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSegmentIndex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeenagersMode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPs(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPe(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPullMode(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFromScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegMobileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSegmentIndex();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTeenagersMode();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPs();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPe();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPullMode();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getFromScene();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional int64 pid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 segment_index = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getSegmentIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setSegmentIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 teenagers_mode = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getTeenagersMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setTeenagersMode = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 ps = 6;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getPs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setPs = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 pe = 7;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getPe = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setPe = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 pull_mode = 8;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getPullMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setPullMode = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 from_scene = 9;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.getFromScene = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegMobileReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegMobileReq.prototype.setFromScene = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegOttReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    closed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    elemsList: jspb.Message.toObjectList(msg.getElemsList(),
    proto.bilibili.community.service.dm.v1.DanmakuElem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReply}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegOttReply;
  return proto.bilibili.community.service.dm.v1.DmSegOttReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReply}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    case 2:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuElem;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinaryFromReader);
      msg.addElems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegOttReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getElemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuElem.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool closed = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.setClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated DanmakuElem elems = 2;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.getElemsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuElem, 2));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.setElemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.addElems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bilibili.community.service.dm.v1.DanmakuElem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReply.prototype.clearElemsList = function() {
  return this.setElemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegOttReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    segmentIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegOttReq;
  return proto.bilibili.community.service.dm.v1.DmSegOttReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSegmentIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegOttReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegOttReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSegmentIndex();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 pid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 segment_index = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.getSegmentIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegOttReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegOttReq.prototype.setSegmentIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegSDKReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    closed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    elemsList: jspb.Message.toObjectList(msg.getElemsList(),
    proto.bilibili.community.service.dm.v1.DanmakuElem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReply}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegSDKReply;
  return proto.bilibili.community.service.dm.v1.DmSegSDKReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReply}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    case 2:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuElem;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuElem.deserializeBinaryFromReader);
      msg.addElems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegSDKReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getElemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuElem.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool closed = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.setClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated DanmakuElem elems = 2;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.getElemsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuElem, 2));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.DanmakuElem>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.setElemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.DanmakuElem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DanmakuElem}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.addElems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bilibili.community.service.dm.v1.DanmakuElem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReply.prototype.clearElemsList = function() {
  return this.setElemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmSegSDKReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    segmentIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmSegSDKReq;
  return proto.bilibili.community.service.dm.v1.DmSegSDKReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSegmentIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmSegSDKReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSegmentIndex();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 pid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 segment_index = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.getSegmentIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmSegSDKReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmSegSDKReq.prototype.setSegmentIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DmViewReply.repeatedFields_ = [4,13,16,17,18,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmViewReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmViewReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    closed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    mask: (f = msg.getMask()) && proto.bilibili.community.service.dm.v1.VideoMask.toObject(includeInstance, f),
    subtitle: (f = msg.getSubtitle()) && proto.bilibili.community.service.dm.v1.VideoSubtitle.toObject(includeInstance, f),
    specialDmsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    aiFlag: (f = msg.getAiFlag()) && proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(includeInstance, f),
    playerConfig: (f = msg.getPlayerConfig()) && proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.toObject(includeInstance, f),
    sendBoxStyle: jspb.Message.getFieldWithDefault(msg, 7, 0),
    allow: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    checkBox: jspb.Message.getFieldWithDefault(msg, 9, ""),
    checkBoxShowMsg: jspb.Message.getFieldWithDefault(msg, 10, ""),
    textPlaceholder: jspb.Message.getFieldWithDefault(msg, 11, ""),
    inputPlaceholder: jspb.Message.getFieldWithDefault(msg, 12, ""),
    reportFilterContentList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    expoReport: (f = msg.getExpoReport()) && proto.bilibili.community.service.dm.v1.ExpoReport.toObject(includeInstance, f),
    buzzwordConfig: (f = msg.getBuzzwordConfig()) && proto.bilibili.community.service.dm.v1.BuzzwordConfig.toObject(includeInstance, f),
    expressionsList: jspb.Message.toObjectList(msg.getExpressionsList(),
    proto.bilibili.community.service.dm.v1.Expressions.toObject, includeInstance),
    postPanelList: jspb.Message.toObjectList(msg.getPostPanelList(),
    proto.bilibili.community.service.dm.v1.PostPanel.toObject, includeInstance),
    activityMetaList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    postPanel2List: jspb.Message.toObjectList(msg.getPostPanel2List(),
    proto.bilibili.community.service.dm.v1.PostPanelV2.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmViewReply;
  return proto.bilibili.community.service.dm.v1.DmViewReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    case 2:
      var value = new proto.bilibili.community.service.dm.v1.VideoMask;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.VideoMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.VideoSubtitle;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.VideoSubtitle.deserializeBinaryFromReader);
      msg.setSubtitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpecialDms(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuFlagConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.deserializeBinaryFromReader);
      msg.setAiFlag(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.deserializeBinaryFromReader);
      msg.setPlayerConfig(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSendBoxStyle(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllow(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckBox(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckBoxShowMsg(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextPlaceholder(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputPlaceholder(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addReportFilterContent(value);
      break;
    case 14:
      var value = new proto.bilibili.community.service.dm.v1.ExpoReport;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.ExpoReport.deserializeBinaryFromReader);
      msg.setExpoReport(value);
      break;
    case 15:
      var value = new proto.bilibili.community.service.dm.v1.BuzzwordConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.BuzzwordConfig.deserializeBinaryFromReader);
      msg.setBuzzwordConfig(value);
      break;
    case 16:
      var value = new proto.bilibili.community.service.dm.v1.Expressions;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Expressions.deserializeBinaryFromReader);
      msg.addExpressions(value);
      break;
    case 17:
      var value = new proto.bilibili.community.service.dm.v1.PostPanel;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PostPanel.deserializeBinaryFromReader);
      msg.addPostPanel(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addActivityMeta(value);
      break;
    case 19:
      var value = new proto.bilibili.community.service.dm.v1.PostPanelV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PostPanelV2.deserializeBinaryFromReader);
      msg.addPostPanel2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmViewReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmViewReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.community.service.dm.v1.VideoMask.serializeBinaryToWriter
    );
  }
  f = message.getSubtitle();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.VideoSubtitle.serializeBinaryToWriter
    );
  }
  f = message.getSpecialDmsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAiFlag();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.serializeBinaryToWriter
    );
  }
  f = message.getPlayerConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.serializeBinaryToWriter
    );
  }
  f = message.getSendBoxStyle();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getAllow();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCheckBox();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCheckBoxShowMsg();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTextPlaceholder();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getInputPlaceholder();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getReportFilterContentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getExpoReport();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bilibili.community.service.dm.v1.ExpoReport.serializeBinaryToWriter
    );
  }
  f = message.getBuzzwordConfig();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bilibili.community.service.dm.v1.BuzzwordConfig.serializeBinaryToWriter
    );
  }
  f = message.getExpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.bilibili.community.service.dm.v1.Expressions.serializeBinaryToWriter
    );
  }
  f = message.getPostPanelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.bilibili.community.service.dm.v1.PostPanel.serializeBinaryToWriter
    );
  }
  f = message.getActivityMetaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getPostPanel2List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.bilibili.community.service.dm.v1.PostPanelV2.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool closed = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional VideoMask mask = 2;
 * @return {?proto.bilibili.community.service.dm.v1.VideoMask}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getMask = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.VideoMask} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.VideoMask, 2));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.VideoMask|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VideoSubtitle subtitle = 3;
 * @return {?proto.bilibili.community.service.dm.v1.VideoSubtitle}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getSubtitle = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.VideoSubtitle} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.VideoSubtitle, 3));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.VideoSubtitle|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setSubtitle = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearSubtitle = function() {
  return this.setSubtitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasSubtitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string special_dms = 4;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getSpecialDmsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setSpecialDmsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addSpecialDms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearSpecialDmsList = function() {
  return this.setSpecialDmsList([]);
};


/**
 * optional DanmakuFlagConfig ai_flag = 5;
 * @return {?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getAiFlag = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuFlagConfig, 5));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setAiFlag = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearAiFlag = function() {
  return this.setAiFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasAiFlag = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DanmuPlayerViewConfig player_config = 6;
 * @return {?proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getPlayerConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig, 6));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmuPlayerViewConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setPlayerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearPlayerConfig = function() {
  return this.setPlayerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasPlayerConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 send_box_style = 7;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getSendBoxStyle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setSendBoxStyle = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool allow = 8;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getAllow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setAllow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string check_box = 9;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getCheckBox = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setCheckBox = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string check_box_show_msg = 10;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getCheckBoxShowMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setCheckBoxShowMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string text_placeholder = 11;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getTextPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setTextPlaceholder = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string input_placeholder = 12;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getInputPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setInputPlaceholder = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated string report_filter_content = 13;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getReportFilterContentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setReportFilterContentList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addReportFilterContent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearReportFilterContentList = function() {
  return this.setReportFilterContentList([]);
};


/**
 * optional ExpoReport expo_report = 14;
 * @return {?proto.bilibili.community.service.dm.v1.ExpoReport}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getExpoReport = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.ExpoReport} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.ExpoReport, 14));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.ExpoReport|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setExpoReport = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearExpoReport = function() {
  return this.setExpoReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasExpoReport = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional BuzzwordConfig buzzword_config = 15;
 * @return {?proto.bilibili.community.service.dm.v1.BuzzwordConfig}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getBuzzwordConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.BuzzwordConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.BuzzwordConfig, 15));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.BuzzwordConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setBuzzwordConfig = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearBuzzwordConfig = function() {
  return this.setBuzzwordConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.hasBuzzwordConfig = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated Expressions expressions = 16;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Expressions>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getExpressionsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Expressions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Expressions, 16));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Expressions>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setExpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Expressions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Expressions}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addExpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.bilibili.community.service.dm.v1.Expressions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearExpressionsList = function() {
  return this.setExpressionsList([]);
};


/**
 * repeated PostPanel post_panel = 17;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.PostPanel>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getPostPanelList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.PostPanel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.PostPanel, 17));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.PostPanel>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setPostPanelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.PostPanel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addPostPanel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.bilibili.community.service.dm.v1.PostPanel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearPostPanelList = function() {
  return this.setPostPanelList([]);
};


/**
 * repeated string activity_meta = 18;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getActivityMetaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setActivityMetaList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addActivityMeta = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearActivityMetaList = function() {
  return this.setActivityMetaList([]);
};


/**
 * repeated PostPanelV2 post_panel2 = 19;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.PostPanelV2>}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.getPostPanel2List = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.PostPanelV2>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.PostPanelV2, 19));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.PostPanelV2>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.setPostPanel2List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.PostPanelV2=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2}
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.addPostPanel2 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.bilibili.community.service.dm.v1.PostPanelV2, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReply.prototype.clearPostPanel2List = function() {
  return this.setPostPanel2List([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmViewReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmViewReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    spmid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isHardBoot: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmViewReq;
  return proto.bilibili.community.service.dm.v1.DmViewReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpmid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsHardBoot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmViewReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmViewReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmViewReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSpmid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsHardBoot();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 pid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 oid = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.getOid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.setOid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string spmid = 4;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.getSpmid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.setSpmid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 is_hard_boot = 5;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.getIsHardBoot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmViewReq} returns this
 */
proto.bilibili.community.service.dm.v1.DmViewReq.prototype.setIsHardBoot = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.repeatedFields_ = [6,9,11,12,13,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.DmWebViewReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.DmWebViewReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    textSide: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dmSge: (f = msg.getDmSge()) && proto.bilibili.community.service.dm.v1.DmSegConfig.toObject(includeInstance, f),
    flag: (f = msg.getFlag()) && proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(includeInstance, f),
    specialDmsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    checkBox: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    count: jspb.Message.getFieldWithDefault(msg, 8, 0),
    commanddmsList: jspb.Message.toObjectList(msg.getCommanddmsList(),
    proto.bilibili.community.service.dm.v1.CommandDm.toObject, includeInstance),
    playerConfig: (f = msg.getPlayerConfig()) && proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.toObject(includeInstance, f),
    reportFilterContentList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    expressionsList: jspb.Message.toObjectList(msg.getExpressionsList(),
    proto.bilibili.community.service.dm.v1.Expressions.toObject, includeInstance),
    postPanelList: jspb.Message.toObjectList(msg.getPostPanelList(),
    proto.bilibili.community.service.dm.v1.PostPanel.toObject, includeInstance),
    activityMetaList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.DmWebViewReply;
  return proto.bilibili.community.service.dm.v1.DmWebViewReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.DmWebViewReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextSide(value);
      break;
    case 4:
      var value = new proto.bilibili.community.service.dm.v1.DmSegConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DmSegConfig.deserializeBinaryFromReader);
      msg.setDmSge(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.DanmakuFlagConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.deserializeBinaryFromReader);
      msg.setFlag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpecialDms(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckBox(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 9:
      var value = new proto.bilibili.community.service.dm.v1.CommandDm;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.CommandDm.deserializeBinaryFromReader);
      msg.addCommanddms(value);
      break;
    case 10:
      var value = new proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.deserializeBinaryFromReader);
      msg.setPlayerConfig(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addReportFilterContent(value);
      break;
    case 12:
      var value = new proto.bilibili.community.service.dm.v1.Expressions;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Expressions.deserializeBinaryFromReader);
      msg.addExpressions(value);
      break;
    case 13:
      var value = new proto.bilibili.community.service.dm.v1.PostPanel;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.PostPanel.deserializeBinaryFromReader);
      msg.addPostPanel(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addActivityMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.DmWebViewReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.DmWebViewReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextSide();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDmSge();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.community.service.dm.v1.DmSegConfig.serializeBinaryToWriter
    );
  }
  f = message.getFlag();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.DanmakuFlagConfig.serializeBinaryToWriter
    );
  }
  f = message.getSpecialDmsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCheckBox();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCommanddmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.bilibili.community.service.dm.v1.CommandDm.serializeBinaryToWriter
    );
  }
  f = message.getPlayerConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.serializeBinaryToWriter
    );
  }
  f = message.getReportFilterContentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getExpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.bilibili.community.service.dm.v1.Expressions.serializeBinaryToWriter
    );
  }
  f = message.getPostPanelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.bilibili.community.service.dm.v1.PostPanel.serializeBinaryToWriter
    );
  }
  f = message.getActivityMetaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text_side = 3;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getTextSide = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setTextSide = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DmSegConfig dm_sge = 4;
 * @return {?proto.bilibili.community.service.dm.v1.DmSegConfig}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getDmSge = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DmSegConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DmSegConfig, 4));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DmSegConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setDmSge = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearDmSge = function() {
  return this.setDmSge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.hasDmSge = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DanmakuFlagConfig flag = 5;
 * @return {?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getFlag = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmakuFlagConfig, 5));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmakuFlagConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setFlag = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearFlag = function() {
  return this.setFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.hasFlag = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string special_dms = 6;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getSpecialDmsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setSpecialDmsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addSpecialDms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearSpecialDmsList = function() {
  return this.setSpecialDmsList([]);
};


/**
 * optional bool check_box = 7;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getCheckBox = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setCheckBox = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int64 count = 8;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated CommandDm commandDms = 9;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.CommandDm>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getCommanddmsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.CommandDm>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.CommandDm, 9));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.CommandDm>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setCommanddmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.CommandDm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.CommandDm}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addCommanddms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.bilibili.community.service.dm.v1.CommandDm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearCommanddmsList = function() {
  return this.setCommanddmsList([]);
};


/**
 * optional DanmuWebPlayerConfig player_config = 10;
 * @return {?proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getPlayerConfig = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig, 10));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.DanmuWebPlayerConfig|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setPlayerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearPlayerConfig = function() {
  return this.setPlayerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.hasPlayerConfig = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string report_filter_content = 11;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getReportFilterContentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setReportFilterContentList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addReportFilterContent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearReportFilterContentList = function() {
  return this.setReportFilterContentList([]);
};


/**
 * repeated Expressions expressions = 12;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Expressions>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getExpressionsList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Expressions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Expressions, 12));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Expressions>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setExpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Expressions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Expressions}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addExpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.bilibili.community.service.dm.v1.Expressions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearExpressionsList = function() {
  return this.setExpressionsList([]);
};


/**
 * repeated PostPanel post_panel = 13;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.PostPanel>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getPostPanelList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.PostPanel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.PostPanel, 13));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.PostPanel>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
*/
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setPostPanelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.PostPanel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addPostPanel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.bilibili.community.service.dm.v1.PostPanel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearPostPanelList = function() {
  return this.setPostPanelList([]);
};


/**
 * repeated string activity_meta = 14;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.getActivityMetaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.setActivityMetaList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.addActivityMeta = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.DmWebViewReply} returns this
 */
proto.bilibili.community.service.dm.v1.DmWebViewReply.prototype.clearActivityMetaList = function() {
  return this.setActivityMetaList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.ExpoReport.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.ExpoReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.ExpoReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ExpoReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    shouldReportAtEnd: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.ExpoReport}
 */
proto.bilibili.community.service.dm.v1.ExpoReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.ExpoReport;
  return proto.bilibili.community.service.dm.v1.ExpoReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.ExpoReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.ExpoReport}
 */
proto.bilibili.community.service.dm.v1.ExpoReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldReportAtEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.ExpoReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.ExpoReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.ExpoReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ExpoReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShouldReportAtEnd();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool should_report_at_end = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ExpoReport.prototype.getShouldReportAtEnd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.ExpoReport} returns this
 */
proto.bilibili.community.service.dm.v1.ExpoReport.prototype.setShouldReportAtEnd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.Expression.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Expression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Expression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Expression.toObject = function(includeInstance, msg) {
  var f, obj = {
    keywordList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    periodList: jspb.Message.toObjectList(msg.getPeriodList(),
    proto.bilibili.community.service.dm.v1.Period.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Expression}
 */
proto.bilibili.community.service.dm.v1.Expression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Expression;
  return proto.bilibili.community.service.dm.v1.Expression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Expression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Expression}
 */
proto.bilibili.community.service.dm.v1.Expression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.Period;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Period.deserializeBinaryFromReader);
      msg.addPeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Expression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Expression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Expression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeywordList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeriodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.Period.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string keyword = 1;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.getKeywordList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.setKeywordList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.addKeyword = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.clearKeywordList = function() {
  return this.setKeywordList([]);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Period period = 3;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Period>}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.getPeriodList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Period>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Period, 3));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Period>} value
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
*/
proto.bilibili.community.service.dm.v1.Expression.prototype.setPeriodList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Period=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Period}
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.addPeriod = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.community.service.dm.v1.Period, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.Expression} returns this
 */
proto.bilibili.community.service.dm.v1.Expression.prototype.clearPeriodList = function() {
  return this.setPeriodList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.Expressions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Expressions.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Expressions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Expressions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Expressions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.bilibili.community.service.dm.v1.Expression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Expressions}
 */
proto.bilibili.community.service.dm.v1.Expressions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Expressions;
  return proto.bilibili.community.service.dm.v1.Expressions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Expressions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Expressions}
 */
proto.bilibili.community.service.dm.v1.Expressions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.community.service.dm.v1.Expression;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Expression.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Expressions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Expressions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Expressions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Expressions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.community.service.dm.v1.Expression.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Expression data = 1;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Expression>}
 */
proto.bilibili.community.service.dm.v1.Expressions.prototype.getDataList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Expression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Expression, 1));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Expression>} value
 * @return {!proto.bilibili.community.service.dm.v1.Expressions} returns this
*/
proto.bilibili.community.service.dm.v1.Expressions.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Expression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Expression}
 */
proto.bilibili.community.service.dm.v1.Expressions.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.community.service.dm.v1.Expression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.Expressions} returns this
 */
proto.bilibili.community.service.dm.v1.Expressions.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch;
  return proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} returns this
 */
proto.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.Label.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Label}
 */
proto.bilibili.community.service.dm.v1.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Label;
  return proto.bilibili.community.service.dm.v1.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Label}
 */
proto.bilibili.community.service.dm.v1.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Label.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Label} returns this
 */
proto.bilibili.community.service.dm.v1.Label.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string content = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.Label.prototype.getContentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.Label} returns this
 */
proto.bilibili.community.service.dm.v1.Label.prototype.setContentList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Label} returns this
 */
proto.bilibili.community.service.dm.v1.Label.prototype.addContent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.Label} returns this
 */
proto.bilibili.community.service.dm.v1.Label.prototype.clearContentList = function() {
  return this.setContentList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.LabelV2.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.LabelV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.LabelV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.LabelV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    exposureOnce: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    exposureType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2}
 */
proto.bilibili.community.service.dm.v1.LabelV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.LabelV2;
  return proto.bilibili.community.service.dm.v1.LabelV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.LabelV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2}
 */
proto.bilibili.community.service.dm.v1.LabelV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addContent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExposureOnce(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExposureType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.LabelV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.LabelV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.LabelV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getExposureOnce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getExposureType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string content = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.getContentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.setContentList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.addContent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.clearContentList = function() {
  return this.setContentList([]);
};


/**
 * optional bool exposure_once = 3;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.getExposureOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.setExposureOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 exposure_type = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.getExposureType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.LabelV2} returns this
 */
proto.bilibili.community.service.dm.v1.LabelV2.prototype.setExposureType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Period.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Period.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Period} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Period.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Period}
 */
proto.bilibili.community.service.dm.v1.Period.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Period;
  return proto.bilibili.community.service.dm.v1.Period.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Period} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Period}
 */
proto.bilibili.community.service.dm.v1.Period.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Period.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Period.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Period} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Period.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.Period.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.Period} returns this
 */
proto.bilibili.community.service.dm.v1.Period.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 end = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.Period.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.Period} returns this
 */
proto.bilibili.community.service.dm.v1.Period.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevelV2.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuDomain.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSeniorModeSwitch.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    canIgnore: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanIgnore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCanIgnore();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool can_ignore = 2;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.getCanIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.prototype.setCanIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig;
  return proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} returns this
 */
proto.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PostPanel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PostPanel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PostPanel.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bizId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bizType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    clickButton: (f = msg.getClickButton()) && proto.bilibili.community.service.dm.v1.ClickButton.toObject(includeInstance, f),
    textInput: (f = msg.getTextInput()) && proto.bilibili.community.service.dm.v1.TextInput.toObject(includeInstance, f),
    checkBox: (f = msg.getCheckBox()) && proto.bilibili.community.service.dm.v1.CheckBox.toObject(includeInstance, f),
    toast: (f = msg.getToast()) && proto.bilibili.community.service.dm.v1.Toast.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel}
 */
proto.bilibili.community.service.dm.v1.PostPanel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PostPanel;
  return proto.bilibili.community.service.dm.v1.PostPanel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PostPanel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel}
 */
proto.bilibili.community.service.dm.v1.PostPanel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBizId(value);
      break;
    case 5:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.PostPanelBizType} */ (reader.readEnum());
      msg.setBizType(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.ClickButton;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.ClickButton.deserializeBinaryFromReader);
      msg.setClickButton(value);
      break;
    case 7:
      var value = new proto.bilibili.community.service.dm.v1.TextInput;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.TextInput.deserializeBinaryFromReader);
      msg.setTextInput(value);
      break;
    case 8:
      var value = new proto.bilibili.community.service.dm.v1.CheckBox;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.CheckBox.deserializeBinaryFromReader);
      msg.setCheckBox(value);
      break;
    case 9:
      var value = new proto.bilibili.community.service.dm.v1.Toast;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Toast.deserializeBinaryFromReader);
      msg.setToast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PostPanel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PostPanel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PostPanel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBizId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBizType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getClickButton();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.ClickButton.serializeBinaryToWriter
    );
  }
  f = message.getTextInput();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.community.service.dm.v1.TextInput.serializeBinaryToWriter
    );
  }
  f = message.getCheckBox();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.community.service.dm.v1.CheckBox.serializeBinaryToWriter
    );
  }
  f = message.getToast();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.community.service.dm.v1.Toast.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 end = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 priority = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 biz_id = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getBizId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setBizId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional PostPanelBizType biz_type = 5;
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelBizType}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getBizType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.PostPanelBizType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.PostPanelBizType} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setBizType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ClickButton click_button = 6;
 * @return {?proto.bilibili.community.service.dm.v1.ClickButton}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getClickButton = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.ClickButton} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.ClickButton, 6));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.ClickButton|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setClickButton = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.clearClickButton = function() {
  return this.setClickButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.hasClickButton = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextInput text_input = 7;
 * @return {?proto.bilibili.community.service.dm.v1.TextInput}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getTextInput = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.TextInput} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.TextInput, 7));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.TextInput|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setTextInput = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.clearTextInput = function() {
  return this.setTextInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.hasTextInput = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CheckBox check_box = 8;
 * @return {?proto.bilibili.community.service.dm.v1.CheckBox}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getCheckBox = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.CheckBox} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.CheckBox, 8));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.CheckBox|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setCheckBox = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.clearCheckBox = function() {
  return this.setCheckBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.hasCheckBox = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Toast toast = 9;
 * @return {?proto.bilibili.community.service.dm.v1.Toast}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.getToast = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.Toast} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.Toast, 9));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.Toast|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanel.prototype.setToast = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanel} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.clearToast = function() {
  return this.setToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanel.prototype.hasToast = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.PostPanelV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.PostPanelV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    end: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bizType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clickButton: (f = msg.getClickButton()) && proto.bilibili.community.service.dm.v1.ClickButtonV2.toObject(includeInstance, f),
    textInput: (f = msg.getTextInput()) && proto.bilibili.community.service.dm.v1.TextInputV2.toObject(includeInstance, f),
    checkBox: (f = msg.getCheckBox()) && proto.bilibili.community.service.dm.v1.CheckBoxV2.toObject(includeInstance, f),
    toast: (f = msg.getToast()) && proto.bilibili.community.service.dm.v1.ToastV2.toObject(includeInstance, f),
    bubble: (f = msg.getBubble()) && proto.bilibili.community.service.dm.v1.BubbleV2.toObject(includeInstance, f),
    label: (f = msg.getLabel()) && proto.bilibili.community.service.dm.v1.LabelV2.toObject(includeInstance, f),
    postStatus: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.PostPanelV2;
  return proto.bilibili.community.service.dm.v1.PostPanelV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.PostPanelV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBizType(value);
      break;
    case 4:
      var value = new proto.bilibili.community.service.dm.v1.ClickButtonV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.ClickButtonV2.deserializeBinaryFromReader);
      msg.setClickButton(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.TextInputV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.TextInputV2.deserializeBinaryFromReader);
      msg.setTextInput(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.CheckBoxV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.CheckBoxV2.deserializeBinaryFromReader);
      msg.setCheckBox(value);
      break;
    case 7:
      var value = new proto.bilibili.community.service.dm.v1.ToastV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.ToastV2.deserializeBinaryFromReader);
      msg.setToast(value);
      break;
    case 8:
      var value = new proto.bilibili.community.service.dm.v1.BubbleV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.BubbleV2.deserializeBinaryFromReader);
      msg.setBubble(value);
      break;
    case 9:
      var value = new proto.bilibili.community.service.dm.v1.LabelV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.LabelV2.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPostStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.PostPanelV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.PostPanelV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBizType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClickButton();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.community.service.dm.v1.ClickButtonV2.serializeBinaryToWriter
    );
  }
  f = message.getTextInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.TextInputV2.serializeBinaryToWriter
    );
  }
  f = message.getCheckBox();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.CheckBoxV2.serializeBinaryToWriter
    );
  }
  f = message.getToast();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.community.service.dm.v1.ToastV2.serializeBinaryToWriter
    );
  }
  f = message.getBubble();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.community.service.dm.v1.BubbleV2.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.community.service.dm.v1.LabelV2.serializeBinaryToWriter
    );
  }
  f = message.getPostStatus();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 end = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 biz_type = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getBizType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setBizType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ClickButtonV2 click_button = 4;
 * @return {?proto.bilibili.community.service.dm.v1.ClickButtonV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getClickButton = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.ClickButtonV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.ClickButtonV2, 4));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.ClickButtonV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setClickButton = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearClickButton = function() {
  return this.setClickButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasClickButton = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TextInputV2 text_input = 5;
 * @return {?proto.bilibili.community.service.dm.v1.TextInputV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getTextInput = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.TextInputV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.TextInputV2, 5));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.TextInputV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setTextInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearTextInput = function() {
  return this.setTextInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasTextInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CheckBoxV2 check_box = 6;
 * @return {?proto.bilibili.community.service.dm.v1.CheckBoxV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getCheckBox = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.CheckBoxV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.CheckBoxV2, 6));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.CheckBoxV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setCheckBox = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearCheckBox = function() {
  return this.setCheckBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasCheckBox = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ToastV2 toast = 7;
 * @return {?proto.bilibili.community.service.dm.v1.ToastV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getToast = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.ToastV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.ToastV2, 7));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.ToastV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setToast = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearToast = function() {
  return this.setToast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasToast = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BubbleV2 bubble = 8;
 * @return {?proto.bilibili.community.service.dm.v1.BubbleV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getBubble = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.BubbleV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.BubbleV2, 8));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.BubbleV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setBubble = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearBubble = function() {
  return this.setBubble(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasBubble = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LabelV2 label = 9;
 * @return {?proto.bilibili.community.service.dm.v1.LabelV2}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getLabel = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.LabelV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.LabelV2, 9));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.LabelV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
*/
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 post_status = 10;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.getPostStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.PostPanelV2} returns this
 */
proto.bilibili.community.service.dm.v1.PostPanelV2.prototype.setPostStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Response}
 */
proto.bilibili.community.service.dm.v1.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Response;
  return proto.bilibili.community.service.dm.v1.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Response}
 */
proto.bilibili.community.service.dm.v1.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.Response.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.Response} returns this
 */
proto.bilibili.community.service.dm.v1.Response.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Response.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Response} returns this
 */
proto.bilibili.community.service.dm.v1.Response.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.SubtitleItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idStr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lan: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lanDoc: jspb.Message.getFieldWithDefault(msg, 4, ""),
    subtitleUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    author: (f = msg.getAuthor()) && proto.bilibili.community.service.dm.v1.UserInfo.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    lanDocBrief: jspb.Message.getFieldWithDefault(msg, 8, ""),
    aiType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    aiStatus: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.SubtitleItem;
  return proto.bilibili.community.service.dm.v1.SubtitleItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdStr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLan(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanDoc(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitleUrl(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.UserInfo;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.UserInfo.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 7:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.SubtitleType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanDocBrief(value);
      break;
    case 9:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.SubtitleAiType} */ (reader.readEnum());
      msg.setAiType(value);
      break;
    case 10:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.SubtitleAiStatus} */ (reader.readEnum());
      msg.setAiStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.SubtitleItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLan();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanDoc();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubtitleUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLanDocBrief();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAiType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAiStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string id_str = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getIdStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setIdStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lan = 3;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getLan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setLan = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string lan_doc = 4;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getLanDoc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setLanDoc = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string subtitle_url = 5;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getSubtitleUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setSubtitleUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional UserInfo author = 6;
 * @return {?proto.bilibili.community.service.dm.v1.UserInfo}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getAuthor = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.UserInfo, 6));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.UserInfo|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
*/
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SubtitleType type = 7;
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleType}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.SubtitleType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleType} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string lan_doc_brief = 8;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getLanDocBrief = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setLanDocBrief = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional SubtitleAiType ai_type = 9;
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleAiType}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getAiType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.SubtitleAiType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleAiType} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setAiType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional SubtitleAiStatus ai_status = 10;
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleAiStatus}
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.getAiStatus = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.SubtitleAiStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleAiStatus} value
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem} returns this
 */
proto.bilibili.community.service.dm.v1.SubtitleItem.prototype.setAiStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.TextInput.repeatedFields_ = [1,2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.TextInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.TextInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.TextInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    portraitPlaceholderList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    landscapePlaceholderList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    renderType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    placeholderPost: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    show: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    avatarList: jspb.Message.toObjectList(msg.getAvatarList(),
    proto.bilibili.community.service.dm.v1.Avatar.toObject, includeInstance),
    postStatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    label: (f = msg.getLabel()) && proto.bilibili.community.service.dm.v1.Label.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput}
 */
proto.bilibili.community.service.dm.v1.TextInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.TextInput;
  return proto.bilibili.community.service.dm.v1.TextInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.TextInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput}
 */
proto.bilibili.community.service.dm.v1.TextInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitPlaceholder(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapePlaceholder(value);
      break;
    case 3:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (reader.readEnum());
      msg.setRenderType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaceholderPost(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShow(value);
      break;
    case 6:
      var value = new proto.bilibili.community.service.dm.v1.Avatar;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Avatar.deserializeBinaryFromReader);
      msg.addAvatar(value);
      break;
    case 7:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.PostStatus} */ (reader.readEnum());
      msg.setPostStatus(value);
      break;
    case 8:
      var value = new proto.bilibili.community.service.dm.v1.Label;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Label.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.TextInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.TextInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.TextInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortraitPlaceholderList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLandscapePlaceholderList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRenderType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPlaceholderPost();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getShow();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAvatarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bilibili.community.service.dm.v1.Avatar.serializeBinaryToWriter
    );
  }
  f = message.getPostStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.community.service.dm.v1.Label.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string portrait_placeholder = 1;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getPortraitPlaceholderList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setPortraitPlaceholderList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.addPortraitPlaceholder = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.clearPortraitPlaceholderList = function() {
  return this.setPortraitPlaceholderList([]);
};


/**
 * repeated string landscape_placeholder = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getLandscapePlaceholderList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setLandscapePlaceholderList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.addLandscapePlaceholder = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.clearLandscapePlaceholderList = function() {
  return this.setLandscapePlaceholderList([]);
};


/**
 * optional RenderType render_type = 3;
 * @return {!proto.bilibili.community.service.dm.v1.RenderType}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getRenderType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.RenderType} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setRenderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool placeholder_post = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getPlaceholderPost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setPlaceholderPost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool show = 5;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setShow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated Avatar avatar = 6;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Avatar>}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getAvatarList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Avatar>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Avatar, 6));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Avatar>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
*/
proto.bilibili.community.service.dm.v1.TextInput.prototype.setAvatarList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Avatar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Avatar}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.addAvatar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bilibili.community.service.dm.v1.Avatar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.clearAvatarList = function() {
  return this.setAvatarList([]);
};


/**
 * optional PostStatus post_status = 7;
 * @return {!proto.bilibili.community.service.dm.v1.PostStatus}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getPostStatus = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.PostStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.PostStatus} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.setPostStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional Label label = 8;
 * @return {?proto.bilibili.community.service.dm.v1.Label}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.getLabel = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.Label} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.Label, 8));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.Label|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
*/
proto.bilibili.community.service.dm.v1.TextInput.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.TextInput} returns this
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.TextInput.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.TextInputV2.repeatedFields_ = [1,2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.TextInputV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.TextInputV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.TextInputV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    portraitPlaceholderList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    landscapePlaceholderList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    renderType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    placeholderPost: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    avatarList: jspb.Message.toObjectList(msg.getAvatarList(),
    proto.bilibili.community.service.dm.v1.Avatar.toObject, includeInstance),
    textInputLimit: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.TextInputV2;
  return proto.bilibili.community.service.dm.v1.TextInputV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.TextInputV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPortraitPlaceholder(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLandscapePlaceholder(value);
      break;
    case 3:
      var value = /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (reader.readEnum());
      msg.setRenderType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaceholderPost(value);
      break;
    case 5:
      var value = new proto.bilibili.community.service.dm.v1.Avatar;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Avatar.deserializeBinaryFromReader);
      msg.addAvatar(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTextInputLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.TextInputV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.TextInputV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.TextInputV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortraitPlaceholderList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLandscapePlaceholderList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRenderType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPlaceholderPost();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAvatarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bilibili.community.service.dm.v1.Avatar.serializeBinaryToWriter
    );
  }
  f = message.getTextInputLimit();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * repeated string portrait_placeholder = 1;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getPortraitPlaceholderList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setPortraitPlaceholderList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.addPortraitPlaceholder = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.clearPortraitPlaceholderList = function() {
  return this.setPortraitPlaceholderList([]);
};


/**
 * repeated string landscape_placeholder = 2;
 * @return {!Array<string>}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getLandscapePlaceholderList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setLandscapePlaceholderList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.addLandscapePlaceholder = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.clearLandscapePlaceholderList = function() {
  return this.setLandscapePlaceholderList([]);
};


/**
 * optional RenderType render_type = 3;
 * @return {!proto.bilibili.community.service.dm.v1.RenderType}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getRenderType = function() {
  return /** @type {!proto.bilibili.community.service.dm.v1.RenderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.RenderType} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setRenderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool placeholder_post = 4;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getPlaceholderPost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setPlaceholderPost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Avatar avatar = 5;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.Avatar>}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getAvatarList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.Avatar>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.Avatar, 5));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.Avatar>} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
*/
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setAvatarList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.Avatar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.Avatar}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.addAvatar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bilibili.community.service.dm.v1.Avatar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.clearAvatarList = function() {
  return this.setAvatarList([]);
};


/**
 * optional int32 text_input_limit = 6;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.getTextInputLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.TextInputV2} returns this
 */
proto.bilibili.community.service.dm.v1.TextInputV2.prototype.setTextInputLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.Toast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.Toast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Toast.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    show: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    button: (f = msg.getButton()) && proto.bilibili.community.service.dm.v1.Button.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.Toast}
 */
proto.bilibili.community.service.dm.v1.Toast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.Toast;
  return proto.bilibili.community.service.dm.v1.Toast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.Toast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.Toast}
 */
proto.bilibili.community.service.dm.v1.Toast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShow(value);
      break;
    case 4:
      var value = new proto.bilibili.community.service.dm.v1.Button;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.Button.deserializeBinaryFromReader);
      msg.setButton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.Toast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.Toast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.Toast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getShow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getButton();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.community.service.dm.v1.Button.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.Toast} returns this
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 duration = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.Toast} returns this
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool show = 3;
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.getShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.community.service.dm.v1.Toast} returns this
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.setShow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Button button = 4;
 * @return {?proto.bilibili.community.service.dm.v1.Button}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.getButton = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.Button} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.Button, 4));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.Button|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.Toast} returns this
*/
proto.bilibili.community.service.dm.v1.Toast.prototype.setButton = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.Toast} returns this
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.clearButton = function() {
  return this.setButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.Toast.prototype.hasButton = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.ToastButtonV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.ToastButtonV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.ToastButtonV2}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.ToastButtonV2;
  return proto.bilibili.community.service.dm.v1.ToastButtonV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.ToastButtonV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.ToastButtonV2}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.ToastButtonV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.ToastButtonV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.ToastButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 action = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.ToastButtonV2} returns this
 */
proto.bilibili.community.service.dm.v1.ToastButtonV2.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.ToastV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.ToastV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ToastV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    toastButtonV2: (f = msg.getToastButtonV2()) && proto.bilibili.community.service.dm.v1.ToastButtonV2.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2}
 */
proto.bilibili.community.service.dm.v1.ToastV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.ToastV2;
  return proto.bilibili.community.service.dm.v1.ToastV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.ToastV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2}
 */
proto.bilibili.community.service.dm.v1.ToastV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.ToastButtonV2;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.ToastButtonV2.deserializeBinaryFromReader);
      msg.setToastButtonV2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.ToastV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.ToastV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.ToastV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToastButtonV2();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.ToastButtonV2.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2} returns this
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 duration = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2} returns this
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ToastButtonV2 toast_button_v2 = 3;
 * @return {?proto.bilibili.community.service.dm.v1.ToastButtonV2}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.getToastButtonV2 = function() {
  return /** @type{?proto.bilibili.community.service.dm.v1.ToastButtonV2} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.community.service.dm.v1.ToastButtonV2, 3));
};


/**
 * @param {?proto.bilibili.community.service.dm.v1.ToastButtonV2|undefined} value
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2} returns this
*/
proto.bilibili.community.service.dm.v1.ToastV2.prototype.setToastButtonV2 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.community.service.dm.v1.ToastV2} returns this
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.clearToastButtonV2 = function() {
  return this.setToastButtonV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.community.service.dm.v1.ToastV2.prototype.hasToastButtonV2 = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 3, ""),
    face: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sign: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rank: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo}
 */
proto.bilibili.community.service.dm.v1.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.UserInfo;
  return proto.bilibili.community.service.dm.v1.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo}
 */
proto.bilibili.community.service.dm.v1.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFace(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSign(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSex();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSign();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int64 mid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getMid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setMid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sex = 3;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setSex = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string face = 4;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getFace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setFace = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sign = 5;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setSign = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 rank = 6;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.UserInfo} returns this
 */
proto.bilibili.community.service.dm.v1.UserInfo.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.VideoMask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.VideoMask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.VideoMask.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    plat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fps: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maskUrl: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask}
 */
proto.bilibili.community.service.dm.v1.VideoMask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.VideoMask;
  return proto.bilibili.community.service.dm.v1.VideoMask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.VideoMask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask}
 */
proto.bilibili.community.service.dm.v1.VideoMask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFps(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaskUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.VideoMask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.VideoMask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.VideoMask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPlat();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFps();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMaskUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 cid = 1;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask} returns this
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 plat = 2;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.getPlat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask} returns this
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.setPlat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 fps = 3;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.getFps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask} returns this
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.setFps = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 time = 4;
 * @return {number}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask} returns this
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string mask_url = 5;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.getMaskUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoMask} returns this
 */
proto.bilibili.community.service.dm.v1.VideoMask.prototype.setMaskUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.community.service.dm.v1.VideoSubtitle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.community.service.dm.v1.VideoSubtitle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.toObject = function(includeInstance, msg) {
  var f, obj = {
    lan: jspb.Message.getFieldWithDefault(msg, 1, ""),
    landoc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subtitlesList: jspb.Message.toObjectList(msg.getSubtitlesList(),
    proto.bilibili.community.service.dm.v1.SubtitleItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.community.service.dm.v1.VideoSubtitle;
  return proto.bilibili.community.service.dm.v1.VideoSubtitle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.community.service.dm.v1.VideoSubtitle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLandoc(value);
      break;
    case 3:
      var value = new proto.bilibili.community.service.dm.v1.SubtitleItem;
      reader.readMessage(value,proto.bilibili.community.service.dm.v1.SubtitleItem.deserializeBinaryFromReader);
      msg.addSubtitles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.community.service.dm.v1.VideoSubtitle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.community.service.dm.v1.VideoSubtitle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLan();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLandoc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubtitlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.community.service.dm.v1.SubtitleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string lan = 1;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.getLan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle} returns this
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.setLan = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lanDoc = 2;
 * @return {string}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.getLandoc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle} returns this
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.setLandoc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated SubtitleItem subtitles = 3;
 * @return {!Array<!proto.bilibili.community.service.dm.v1.SubtitleItem>}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.getSubtitlesList = function() {
  return /** @type{!Array<!proto.bilibili.community.service.dm.v1.SubtitleItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.community.service.dm.v1.SubtitleItem, 3));
};


/**
 * @param {!Array<!proto.bilibili.community.service.dm.v1.SubtitleItem>} value
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle} returns this
*/
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.setSubtitlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.community.service.dm.v1.SubtitleItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.community.service.dm.v1.SubtitleItem}
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.addSubtitles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.community.service.dm.v1.SubtitleItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.community.service.dm.v1.VideoSubtitle} returns this
 */
proto.bilibili.community.service.dm.v1.VideoSubtitle.prototype.clearSubtitlesList = function() {
  return this.setSubtitlesList([]);
};


/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.AvatarType = {
  AVATARTYPENONE: 0,
  AVATARTYPENFT: 1
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.BubbleType = {
  BUBBLETYPENONE: 0,
  BUBBLETYPECLICKBUTTON: 1,
  BUBBLETYPEDMSETTINGPANEL: 2
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.CheckboxType = {
  CHECKBOXTYPENONE: 0,
  CHECKBOXTYPEENCOURAGE: 1,
  CHECKBOXTYPECOLORDM: 2
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.DMAttrBit = {
  DMATTRBITPROTECT: 0,
  DMATTRBITFROMLIVE: 1,
  DMATTRHIGHLIKE: 2
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.DmColorfulType = {
  NONETYPE: 0,
  VIPGRADUALCOLOR: 60001
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.ExposureType = {
  EXPOSURETYPENONE: 0,
  EXPOSURETYPEDMSEND: 1
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.PostPanelBizType = {
  POSTPANELBIZTYPENONE: 0,
  POSTPANELBIZTYPEENCOURAGE: 1,
  POSTPANELBIZTYPECOLORDM: 2,
  POSTPANELBIZTYPENFTDM: 3,
  POSTPANELBIZTYPEFRAGCLOSE: 4,
  POSTPANELBIZTYPERECOMMEND: 5
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.PostStatus = {
  POSTSTATUSNORMAL: 0,
  POSTSTATUSCLOSED: 1
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.RenderType = {
  RENDERTYPENONE: 0,
  RENDERTYPESINGLE: 1,
  RENDERTYPEROTATION: 2
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.SubtitleAiStatus = {
  NONE: 0,
  EXPOSURE: 1,
  ASSIST: 2
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.SubtitleAiType = {
  NORMAL: 0,
  TRANSLATE: 1
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.SubtitleType = {
  CC: 0,
  AI: 1
};

/**
 * @enum {number}
 */
proto.bilibili.community.service.dm.v1.ToastFunctionType = {
  TOASTFUNCTIONTYPENONE: 0,
  TOASTFUNCTIONTYPEPOSTPANEL: 1
};

goog.object.extend(exports, proto.bilibili.community.service.dm.v1);
