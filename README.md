# Firefox Custom Builds

Automated custom Firefox builds with self-hosted Firefox Accounts support and LibreWolf-based privacy enhancements.

## Features

- 🔒 **Self-hosted Firefox Accounts** - Pre-configured for accounts.scootz.net and sync.scootz.net
- 🛡️ **LibreWolf Privacy Settings** - Based on LibreWolf's comprehensive privacy configuration
- 🚫 **Telemetry Completely Disabled** - No data sent to Mozilla
- 🔐 **Fingerprint Protection** - Resist Fingerprinting (RFP) enabled
- 🍪 **Total Cookie Protection** - Enhanced tracking protection in strict mode
- 🌐 **HTTPS-Only Mode** - Enforced by default
- 📦 **Automated Builds** - Weekly builds via GitHub Actions
- 🖥️ **Platform Support** - macOS ARM64 and Android ARM64

## Downloads

Download the latest builds from [Releases](../../releases).

### macOS (ARM64)
1. Download the .dmg file from releases
2. Open and drag Firefox.app to Applications
3. Remove quarantine: `sudo xattr -cr /Applications/Firefox.app`
4. Ad-hoc sign: `sudo codesign --force --deep --sign - /Applications/Firefox.app`
5. Launch Firefox

### Android (ARM64)
1. Enable "Unknown sources" in Android settings
2. Download and install the APK
3. Firefox Accounts will automatically use accounts.scootz.net
4. Sync will automatically use sync.scootz.net

## Building

Builds happen automatically weekly, or you can trigger manually:

1. Go to [Actions](../../actions)
2. Select "Build Firefox Desktop" or "Build Firefox Android"
3. Click "Run workflow"
4. Wait 2-4 hours

## Privacy Features (Based on LibreWolf)

This build includes comprehensive privacy enhancements inspired by [LibreWolf](https://librewolf.net):

### Security & Privacy
- 🔒 HTTPS-Only Mode enforced
- 🛡️ Resist Fingerprinting (RFP) enabled
- 🚫 WebGL disabled (fingerprinting vector)
- 🌐 DNS over HTTPS (DoH) enabled
- 🔐 Total Cookie Protection (dFPI)
- 🎯 Global Privacy Control enabled

### Tracking Protection
- ✅ Enhanced Tracking Protection (strict mode)
- ✅ Query parameter stripping
- ✅ Social media tracking blocked
- ✅ Fingerprinting scripts blocked
- ✅ Cryptomining scripts blocked

### Data Collection
- ❌ All telemetry disabled
- ❌ Crash reports disabled
- ❌ Studies/experiments disabled
- ❌ Pocket integration removed
- ❌ Sponsored content removed

### Additional Protections
- No disk cache (memory only)
- WebRTC IP leak protection
- Geolocation disabled by default
- Battery API disabled
- Beacon API disabled
- Link prefetching disabled
- Form autofill disabled
- Password manager disabled by default

## Custom Firefox Accounts Servers

Pre-configured to use self-hosted servers:
- **Accounts:** `https://accounts.scootz.net`
- **Sync:** `https://sync.scootz.net`

No configuration needed - just sign in with your account and start syncing!

## Development

### Privacy Configuration

Privacy settings are defined in:
- Desktop: `patches/desktop/001-privacy-fxa-config.patch`
- Android: `patches/android/001-privacy-fxa-config.patch`

Settings are based on [LibreWolf's configuration](https://codeberg.org/librewolf/settings).

### Adding Custom Patches

1. Create patch file in `patches/desktop/` or `patches/android/`
2. Use standard unified diff format
3. Commit and push changes
4. Trigger new build via GitHub Actions

### Building Locally

Follow [Mozilla's Firefox build documentation](https://firefox-source-docs.mozilla.org/).

## License

MPL-2.0 (same as Firefox)