/*
 Copyright (C) 2016 Lightbend, Inc <http://www.lightbend.com>
 */
define([
  "main/plugins",
  "text!./console.html",
  "css!./console",
  "css!widgets/modules/modules"
], function(
  plugins,
  tpl
) {

  var State = {}

  return {
    render: function(){
      return ko.bindhtml(tpl, State)
    }
  }

});
