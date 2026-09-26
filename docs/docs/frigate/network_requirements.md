---

id: network_requirements
title: Network Requirements
---------------------------

# Network Requirements

NOAH Guardra is designed to run locally and does not require a persistent internet connection for core functionality. However, certain features need internet access for initial setup or ongoing operation. This page describes what connects to the internet, when, and how to control it.

## How NOAH Guardra Uses the Internet

NOAH Guardra's internet usage falls into three categories:

1. **One-time model downloads**: ML models are downloaded the first time a feature is enabled, then cached locally. No internet is needed on subsequent startups.
2. **Optional cloud services**: Features such as cloud-based AI providers connect to external APIs only when explicitly configured.
3. **Build-time dependencies**: Components bundled into the Docker image during the build process. These require no internet at runtime.
