---

id: updating
title: Updating
---------------

# Updating NOAH Guardra

Keeping NOAH Guardra up to date ensures you benefit from the latest features, performance improvements, security updates, and bug fixes.

The update process varies depending on your installation method, such as Docker or a Home Assistant App. Always review the release notes for the specific version you are installing before upgrading.

## Before You Begin

* **Stop NOAH Guardra**: For most installation methods, stop the running instance before backing up and updating.
* **Back Up Your Configuration**: Always back up your `/config` directory, including configuration files and the NOAH Guardra SQLite database, before updating.
* **Check Release Notes**: Review the release notes for the version you are installing and check for configuration changes, migrations, or breaking changes.
* **Verify Hardware Compatibility**: If you use a hardware AI accelerator or GPU, confirm that the new version supports your existing configuration.

## Updating with Docker

Docker is the recommended deployment method for NOAH Guardra.

### 1. Stop the Container

If using Docker Compose:

```bash
docker compose down <service-name>
```

If using `docker run`:

```bash
docker stop noah-guardra
```

### 2. Update and Pull th
