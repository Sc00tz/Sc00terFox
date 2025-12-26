// ========================================
// Sc00terFox Custom Firefox Android Configuration
// Based on LibreWolf privacy settings
// ========================================

// ============================================
// SELF-HOSTED FIREFOX ACCOUNTS CONFIGURATION
// ============================================

// Firefox Accounts server URLs
pref("identity.fxaccounts.autoconfig.uri", "https://accounts.scootz.net");
pref("identity.fxaccounts.remote.root", "https://accounts.scootz.net");
pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.scootz.net");
pref("identity.fxaccounts.remote.oauth.uri", "https://accounts.scootz.net/oauth");
pref("identity.fxaccounts.remote.profile.uri", "https://accounts.scootz.net/profile/v1");

// Sync server URL
pref("identity.sync.tokenserver.uri", "https://sync.scootz.net/token/1.0/sync/1.5");

// ============================================
// PRIVACY & SECURITY SETTINGS
// ============================================

// PREF: Enable HTTPS-Only Mode
pref("dom.security.https_only_mode", true);
pref("dom.security.https_only_mode_ever_enabled", true);
pref("dom.security.https_only_mode_pbm", true);

// PREF: Disable Telemetry
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.coverage.endpoint.base", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("app.shield.optoutstudies.enabled", false);

// PREF: Disable Normandy/Studies
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");

// PREF: Content Blocking
pref("browser.contentblocking.category", "strict");

// PREF: Enable Fingerprint Protection (RFP)
pref("privacy.resistFingerprinting", true);
pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// PREF: Disable WebGL (fingerprinting vector)
pref("webgl.disabled", true);
pref("dom.webgpu.enabled", false);

// PREF: Global Privacy Control
pref("privacy.globalprivacycontrol.enabled", true);
pref("privacy.globalprivacycontrol.pbmode.enabled", true);
pref("privacy.globalprivacycontrol.functionality.enabled", true);

// PREF: Cookie Behavior - Total Cookie Protection
pref("network.cookie.cookieBehavior", 5);
pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);

// PREF: WebRTC IP Leak Protection
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// PREF: Disable Geolocation
pref("geo.provider.network.url", "");
pref("geo.provider.use_corelocation", false);

// PREF: Disable Form Autofill
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.creditCards.enabled", false);

// PREF: Disable Media Autoplay
pref("media.autoplay.blocking_policy", 2);
pref("media.autoplay.default", 5);

// PREF: DNS over HTTPS
pref("network.trr.mode", 3);
pref("network.trr.custom_uri", "https://mozilla.cloudflare-dns.com/dns-query");

// PREF: Query Parameter Stripping
pref("privacy.query_stripping.enabled", true);
pref("privacy.query_stripping.enabled.pbmode", true);

// PREF: Referrer Policy
pref("network.http.referer.XOriginPolicy", 2);
pref("network.http.referer.XOriginTrimmingPolicy", 2);

// PREF: Disable Link Prefetching
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.predictor.enabled", false);
pref("network.http.speculative-parallel-limit", 0);

// PREF: Disable Hyperlink Auditing
pref("browser.send_pings", false);

// PREF: Disable Beacon API
pref("beacon.enabled", false);

// PREF: Disable Battery API
pref("dom.battery.enabled", false);

// PREF: Enhanced Tracking Protection
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.pbmode.enabled", true);
pref("privacy.trackingprotection.socialtracking.enabled", true);

// PREF: Search Suggestions
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.suggest.searches", false);

// PREF: Disable Password Manager
pref("signon.rememberSignons", false);
pref("signon.autofillForms", false);

// PREF: Session & History
pref("browser.sessionstore.privacy_level", 2);
pref("browser.formfill.enable", false);
