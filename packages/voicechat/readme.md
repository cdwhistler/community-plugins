# Voice Chat plugin for converse.js

<img src="https://github.com/conversejs/community-plugins/blob/master/packages/voicechat/voicechat.png" />

## Overview
This plugin enables you to have a voice chat using WHIP and WHEP. It uses the morning.fm web client hosted on talk.4ng.net (deleolajide.github.io/morning.fm) which in turn connects to an Openfire XMPP server running a WHIP/WHEP service at https://pade.chat:5443
The plugin is currently accessing the media streams directly with HTTP. I plan to modify it later to use XMPP using this media streams XEP  - https://igniterealtime.github.io/openfire-orinayo-plugin/xep/

## Install
see https://m.conversejs.org/docs/html/plugin_development.html on how to install this plugin. Please note that the plugin has a dependency on rpc.kraken.fm and github.io.

## How to use
Click on disk icon on the conversation toolbar to display the modal form and join the conversation and see other participants.
