---

id: camera_setup
title: Camera setup
-------------------

Cameras configured to output H.264 video and AAC audio will offer the most compatibility with all features of **NOAH Guardra** and Home Assistant. H.265 has better compression, but less compatibility. Firefox 134+/136+/137+ (Windows/Mac/Linux & Android), Chrome 108+, Safari and Edge are the only browsers able to play H.265 and only support a limited number of H.265 profiles.

Ideally, cameras should be configured directly for the desired resolutions and frame rates you want to use in NOAH Guardra. Reducing frame rates within NOAH Guardra will waste CPU resources decoding extra frames that are discarded.

There are three different goals that you want to tune your stream configurations around.

* **Detection**: This is the only stream that NOAH Guardra will decode for processing. This is also the stream where snapshots will be generated from. The resolution for detection should be tuned for the size of the objects you want to detect. See [Choosing a detect resolution](#choosing-a-detect-resolution) for more details. The default frame rate of 5fps is correct for almost all cameras and rarely needs to be changed; see [Choosing a detect frame rate](#choosing-a-detect-frame-rate). Higher resolutions and frame rates will drive higher CPU usage on your server.

* **Recording**: This stream should be the resolution you wish to store for reference. Typically, this will be the highest resolution your camera supports. I recommend setting this feed in your camera's firmware to 15 fps.

* **Stream Viewing**: This stream will be rebroadcast as is to Home Assistant for viewing with the stream component. Setting this resolution too high will use significant bandwidth when viewing streams in Home Assistant, and they may not load reliably over slower connections.
