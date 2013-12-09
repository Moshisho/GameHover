void startup(data, reason); 

//reason = APP_STARTUP, ADDON_ENABLE, ADDON_INSTALL, ADDON_UPGRADE, or ADDON_DOWNGRADE.

void shutdown(data, reason);

//reason = APP_SHUTDOWN, ADDON_DISABLE, ADDON_UNINSTALL, ADDON_UPGRADE, or ADDON_DOWNGRADE.

void install(data, reason);

//reason = ADDON_INSTALL, ADDON_UPGRADE, or ADDON_DOWNGRADE.

void uninstall(data, reason);

//reason = ADDON_UNINSTALL, ADDON_UPGRADE, or ADDON_DOWNGRADE.
