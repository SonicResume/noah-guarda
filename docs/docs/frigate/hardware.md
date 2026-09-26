---

id: hardware
title: Recommended hardware
---------------------------

import CommunityBadge from '@site/src/components/CommunityBadge';

## Cameras

Cameras that output H.264 video and AAC audio offer broad compatibility with NOAH Guardra and Home Assistant. Cameras that support multiple substreams are also useful because they allow different resolutions to be used for detection, streaming, and recording without unnecessary re-encoding.

For camera deployments, prioritize:

* Reliable RTSP or compatible video streams
* H.264 support for broad compatibility
* Multiple configurable streams
* Adjustable resolution and frame rate
* Good low-light performance
* Wired Ethernet connectivity where possible
* Stable firmware and long-term availability

Larger image sensors are generally more important than simply choosing a higher resolution, especially for nighttime performance.

Wi-Fi cameras are generally not recommended for larger deployments because wireless interference and connection instability can result in dropped video or unreliable streams.

For the most reliable deployments, use wired Ethernet cameras connected to a dedicated or isolated camera network when possible.

## Server

NOAH Guardra can run on a range of modern x86 and ARM-based systems depending on the number of cameras, resolution, recording requirements, and AI models being used.

For a typical installation, look for:

* Modern Intel or AMD CPU
* AVX/AVX2 support where available
* Hardware video decoding support
* Sufficient RAM for the number of cameras
* SSD storage for the operating system and application data
* Dedicated storage for recordings
* Gigabit Ethernet
* Optional PCIe or M.2 expansion for AI accelerators

A small modern mini PC can be sufficient for smaller deployments. Larger installations may benefit from additional CPU cores, dedicated GPUs, or dedicated AI accelerators.

### Recommended server characteristics

| Hardware          | Recommended characteristics            |
| ----------------- | -------------------------------------- |
| CPU               | Modern Intel or AMD processor          |
| RAM               | 8 GB minimum for smaller deployments   |
| Storage           | SSD for system and application data    |
| Recording storage | Dedicated HDD/SSD/NAS storage          |
| Network           | Gigabit Ethernet                       |
| GPU/NPU           | Optional depending on AI workload      |
| Expansion         | M.2 or PCIe useful for AI accelerators |
