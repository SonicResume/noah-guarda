---

id: index
title: Introduction
slug: /
-------

**NOAH Guardra** is a complete, local network video recorder (NVR) designed for Home Assistant with real-time AI object detection.

NOAH Guardra processes camera streams locally, providing object detection, recording, motion detection, tracking, notifications, MQTT integration, and live camera viewing without requiring cloud processing.

Use of a [Recommended Detector](/hardware#detectors) is optional, but strongly recommended for production deployments. CPU-only detection is best suited for testing and smaller workloads.

* Tight integration with Home Assistant through the NOAH Guardra integration
* Designed to minimize resource usage while maximizing detection performance by processing objects only when and where necessary
* Uses multiprocessing extensively with an emphasis on real-time processing
* Uses low-overhead motion detection to determine where object detection should run
* Runs object detection in dedicated processes for efficient AI inference
* Communicates over MQTT for easy integration with Home Assistant and other systems
* Recording with retention based on detected activity
* Re-streaming via RTSP to reduce the number of connections to your cameras
* A dynamic combined camera view for monitoring tracked cameras
* Local processing designed to keep camera data and AI analysis on your own hardware

## Screenshots

![Live View](/img/live-view.png)

![Review Items](/img/review-items.png)

![Media Browser](/img/media_browser-min.png)

![Notification](/img/notification-min.png)
