# Online Meetings plugin for converse.js

This plugin used to be known as _JitsiMeet Plugin_

<img src="https://github.com/conversejs/community-plugins/blob/master/packages/olmeet/olmeet.png?raw=true" />

## Overview
This plugin uses any hosted video conferencing service like Jitsi, Galene, etc to deliver an online meeting (audio/video conferencing) user experience. It can:

* **auto-discover** what audio/video conferencing service is available and configured on any XMPP server ([jitsi](https://meet.jit.si/), [galene](https://galene.org:8443/) or [*broadcastbox*](https://b.siobud.com/)) that supports [XEP-0483: HTTP Online Meetings](https://xmpp.org/extensions/xep-0483.html), 
* **request** for a web app URL and use it to 
* **invite** others to the meeting. If their client supports XEP-0483, the web app can be opened in the client otherwise, it will be opened in the desktop web browser.
* **fallback** on a static base URL configured in client if their XMPP server does not yet support xep-0483.

## Install
see https://m.conversejs.org/docs/html/plugin_development.html on how to install this plugin

## Configure
To configure, edit the converse settings and modify all the olmeet_  values. See index.html for an example

```
converse.initialize({
    ....
    olmeet_modal: false,
    olmeet_url: 'https://meet.jit.si',
    ....
});
```

Default setting will use the public meet.ji.si service.

## How to use
Click on the video icon on the conversation toolbar to turn a chat or groupchat into an audio/video conference
