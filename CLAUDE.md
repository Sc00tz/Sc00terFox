# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository builds custom Firefox distributions (desktop and Android) with self-hosted Firefox Accounts support and privacy enhancements. Builds are fully automated via GitHub Actions, downloading Firefox source from Mozilla, applying custom patches, and packaging binaries for distribution.

## Key Architecture

### Build System Structure

This is NOT a traditional codebase with source code to compile. Instead, it's a build automation system that:

1. Downloads official Firefox source code from Mozilla archives (desktop) or clones gecko-dev (Android)
2. Applies optional custom patches from `patches/desktop/` or `patches/android/`
3. Configures the build using mozconfig files in `configs/`
4. Builds Firefox using Mozilla's mach build system
5. Packages and releases the binaries via GitHub Actions

### Directory Structure

- `configs/` - Mozilla build configuration files (mozconfig) for each platform
  - `mozconfig-linux` - Linux desktop build configuration
  - `mozconfig-macos` - macOS desktop build configuration
  - `mozconfig-android` - Android build configuration
- `patches/` - Custom patch files applied to Firefox source before building
  - `desktop/` - Patches for desktop builds (currently empty except .gitkeep)
  - `android/` - Patches for Android builds (currently empty except .gitkeep)
- `.github/workflows/` - GitHub Actions automation
  - `build-desktop.yml` - Builds Linux and macOS desktop Firefox
  - `build-android.yml` - Builds Android APK (Fenix)
  - `check-updats.yml` - Daily check for new Firefox releases

### Build Workflows

**Desktop Build Process:**
- Downloads specific Firefox version source tarball from Mozilla
- Applies patches from `patches/desktop/*.patch` if any exist
- Copies appropriate mozconfig to source directory
- Runs `./mach bootstrap` to setup build environment
- Runs `./mach build` to compile Firefox
- Runs `./mach package` to create distributable archives
- Creates GitHub release with Linux (.tar.bz2) and macOS (.dmg) builds

**Android Build Process:**
- Clones mozilla-central (gecko-dev) at master branch HEAD
- Applies patches from `patches/android/*.patch` if any exist
- Configures build with mozconfig-android
- Builds GeckoView engine via `./mach build`
- Builds Fenix APK using Gradle (debug or release)
- Creates GitHub release with APK for release builds

### Customizations

**Current Configuration:**
- Self-hosted Firefox Accounts URLs: accounts.scootz.net, sync.scootz.net
- Telemetry disabled
- Crash reporter disabled
- Auto-updates disabled
- Uses unofficial branding (not official Firefox branding)

## Common Commands

### Triggering Builds

Builds run automatically via schedule, or can be manually triggered:

```bash
# Trigger desktop build via GitHub CLI
gh workflow run build-desktop.yml

# Trigger desktop build for specific version
gh workflow run build-desktop.yml -f firefox_version=132.0

# Trigger Android build
gh workflow run build-android.yml -f build_type=debug
gh workflow run build-android.yml -f build_type=release

# Check latest Firefox version
gh workflow run check-updats.yml
```

### Working with Releases

```bash
# List releases
gh release list

# View specific release
gh release view v132.0

# Download release assets
gh release download v132.0
```

### Local Testing (Advanced)

This repo doesn't support local builds - builds are designed to run in GitHub Actions. For local Firefox development, follow [Mozilla's official documentation](https://firefox-source-docs.mozilla.org/).

## Making Changes

### Adding Custom Patches

1. Create `.patch` file in `patches/desktop/` or `patches/android/`
2. Patches should be in unified diff format compatible with `patch -p1`
3. For Android, patches can also use `git apply` format
4. Commit and push - next build will automatically apply patches
5. Patch application happens BEFORE mozconfig setup

### Modifying Build Configuration

Edit the appropriate mozconfig file in `configs/`:
- `mozconfig-linux` - Linux build options
- `mozconfig-macos` - macOS build options (includes x86_64 target)
- `mozconfig-android` - Android build options (aarch64 target)

Common mozconfig options:
- `ac_add_options --enable-application=browser|mobile/android`
- `ac_add_options --enable-optimize` / `--disable-debug`
- `ac_add_options --with-branding=browser/branding/unofficial`
- `ac_add_options --disable-crashreporter`
- `ac_add_options --disable-updater`

### Modifying Workflow Behavior

The build workflows are in `.github/workflows/`:
- Desktop builds skip if version already has a release
- Desktop builds run weekly Sunday 2 AM UTC
- Android builds run weekly Sunday 4 AM UTC
- Check-updates runs daily at 6 AM UTC and creates issues for new versions

## Important Notes

### Version Management

Desktop builds are version-specific and tied to official Firefox releases. The workflow:
1. Determines Firefox version (from input or "latest" from Mozilla API)
2. Checks if `v{VERSION}` release already exists
3. Skips build if release exists, otherwise proceeds
4. Creates release tagged as `v{VERSION}`

Android builds use mozilla-central HEAD and tag releases as `android-{run_number}`.

### Build Times

- Desktop builds: 2-4 hours per platform
- Android builds: Up to 7 hours (420 min timeout)
- Workflows use aggressive caching for mozbuild, gradle, and SDK components

### Disk Space Management

Workflows include cleanup steps to free disk space:
- Remove .NET, Android SDK, GHC, CodeQL, Docker images
- This is necessary because Firefox builds require 30+ GB of disk space

### Custom FxA Configuration

The builds are pre-configured for self-hosted Firefox Accounts at:
- Accounts server: https://accounts.scootz.net
- Sync server: https://sync.scootz.net

These are configured via patches or mozconfig preferences (exact mechanism depends on patches).
