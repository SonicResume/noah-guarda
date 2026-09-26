---

id: planning_setup
title: Planning a New Installation
----------------------------------

Choosing the right hardware for your **NOAH Guardra** NVR installation is important for optimal performance and a smooth experience. This guide walks through the key considerations, with a focus on camera count, simultaneous activity, video decoding, object detection, storage, CPU, and memory requirements.

## Key Considerations

### Number of Cameras and Simultaneous Activity

The most fundamental factor in your hardware decision is the number of cameras you plan to use. However, raw camera count is only part of the equation. You should also consider how many cameras are likely to detect activity simultaneously and require AI processing at the same time.

When motion is detected in a camera feed, regions of that frame are sent to your selected [object detection hardware](/configuration/object_detectors).

* **Low Simultaneous Activity (1–6 cameras with occasional motion)**: A small installation with limited activity, such as a quiet backyard or lightly used interior areas, places less demand on the detection hardware. A single entry-level AI accelerator is generally sufficient.
* **Moderate Simultaneous Activity (6–12 cameras with overlapping motion)**: Larger installations, especially those covering busy streets, driveways, entrances, or multiple access points, are more likely to process several cameras simultaneously. Additional detection capacity may be required.
* **High Simultaneous Activity (12+ cameras or highly active zones)**: Large installations or highly active areas may require multiple entry-level AI accelerators or a more powerful single device such as a discrete GPU.
* **Commercial Installations (40+ cameras)**: Commercial deployments with substantial simultaneous activity will generally require robust AI processing capabilities and may benefit from a modern discrete GPU.

### Video Decoding

Modern CPUs with integrated GPUs, such as Intel Quick Sync or AMD VCN, and dedicated GPUs can significantly offload video decoding from the main CPU.

Hardware video decoding is strongly recommended for installations with multiple cameras because it preserves CPU resources for detection, recording, processing, and other system tasks.
