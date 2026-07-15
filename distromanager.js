const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// TODO: Replace this with the URL where YOU host your own distribution.json
// This file tells the launcher which modpacks/servers exist, which mods to
// install, and where to download them from. See the Helios Launcher docs
// ("Distribution.json") for the schema. Until you set this, the launcher
// will fail to load any server/modpack list.
exports.REMOTE_DISTRO_URL = 'https://test332.mcsh.io/hustlerroleplay/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api