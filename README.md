# Firefox Custom Builds

Automated custom Firefox builds with self-hosted Firefox Accounts support and privacy enhancements.

## Features

- 🔒 Self-hosted Firefox Accounts integration
- 🛡️ Privacy-enhanced defaults
- 🚫 Telemetry disabled
- 📦 Automated builds via GitHub Actions
- 🖥️ Linux, macOS, and Android support

## Downloads

Download the latest builds from [Releases](../../releases).

### Linux
```bash
tar -xf firefox-custom-*-linux-x86_64.tar.bz2
./firefox/firefox
```

### macOS
1. Download the .dmg file
2. Open and drag to Applications
3. Right-click → Open (first time only)

### Android
1. Enable "Unknown sources" in settings
2. Download and install APK
3. First run: Settings → About → Tap logo 5x
4. Configure custom FxA servers

## Building

Builds happen automatically weekly, or you can trigger manually:

1. Go to [Actions](../../actions)
2. Select "Build Firefox Desktop" or "Build Firefox Android"
3. Click "Run workflow"
4. Wait 2-4 hours

## Custom FxA Servers

This build is pre-configured for:
- Accounts: `https://accounts.scootz.net`
- Sync: `https://sync.scootz.net`

## Development

### Adding Patches

1. Create patch file in `patches/desktop/` or `patches/android/`
2. Commit and push
3. Trigger new build

### Testing Locally

Follow Mozilla's [Firefox build documentation](https://firefox-source-docs.mozilla.org/).

## License

MPL-2.0 (same as Firefox)