define('settings_local', [], function() {
    return {
        api_url: 'https://marketplace-dev.allizom.org',
        body_classes: 'package',
        media_url: 'https://marketplace-dev.mozflare.net/media/',
        newsletter_enabled: false,
        payments_enabled: false,
        tracking_enabled: true,
        potatolytics_enabled: true,
        package_version: '{fireplace_package_version}'
    };
});