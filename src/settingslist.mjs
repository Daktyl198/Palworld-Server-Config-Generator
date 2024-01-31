export const categories = {
    core: 'General server settings',
    world: 'General settings related to the in-game world',
    players: 'Settings related to the Players',
    pals: 'Settings related to captured Pals',
    unsure: 'Settings who\'s purpose or requirements are unknown'
}

export let settingslist = {
    core: [
        {
            label: 'Server Name',
            name: 'ServerDescription',
            type: 'string',
            default: 'Change Me!',
            description: 'Description of the server in the in-game server browser'
        },
        {
            label: 'Server Description',
            name: 'ServerName',
            type: 'string',
            default: 'Change Me!',
            description: 'Name for the server in the in-game server browser'
        },
        {
            label: 'Server Password',
            name: 'ServerNameServerPassword',
            type: 'string',
            default: '',
            description: 'Password required to enter the server. Leave blank for no password. CANNOT USE in conjunction with direct IP connections.'
        },
        {
            label: 'Admin Password',
            name: 'AdminPassword',
            type: 'string',
            default: 'Change Me!',
            description: 'Password for editing game settings from the in-game console.'
        },
        {
            label: 'IP Address',
            name: 'PublicIP',
            type: 'string',
            default: '',
            description: 'IP address to bind the server to. Leave blank to use the default IP for your physical server.'
        },
        {
            label: 'Port',
            name: 'PublicPort',
            type: 'number',
            default: 8211,
            min: 0,
            max: 99999,
            description: 'Port used to access the server. Best left default unless you are required to change it.'
        },
        {
            label: 'Max Players',
            name: 'ServerPlayerMaxNum',
            type: 'number',
            default: 32,
            min: 1,
            max: 9999,
            description: 'Maximum amount of players allowed on the server at one time.'
        },
        {
            label: 'Enable Server Authentication',
            name: 'bUseAuth',
            type: 'select',
            default: 'True',
            options: [
                'True', 'False'
            ],
            description: 'Require users to be verified owners to connect to the server. Essentially stops pirated copies from connecting.'
        },
        {
            label: 'Enable RCON',
            name: 'RCONEnabled',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Enable RCON remote management'
        },
        {
            label: 'RCON Port',
            name: 'RCONPort',
            type: 'number',
            default: 25575,
            min: 1,
            max: 99999,
            description: 'Port for connecting using the RCON protocol'
        },
        {
            label: 'Ban List',
            name: 'BanListURL',
            type: 'string',
            default: 'https://api.palworldgame.com/api/banlist.txt',
            description: 'URL to file containing the list of SteamIDs banned from accessing your server. Defaults to a global banlist.'
        },
    ],
    world : [
        {
            label: 'Death Penalty',
            name: 'DeathPenalty',
            type: 'select',
            default: 'All',
            options: [
                'All', 'None'
            ],
            description: 'Determines what drops on player death. All = Inventory + Pals. None = nothing (respawn with everything). Unsure of other values.'
        },
        {
            label: 'Day Length',
            name: 'DayTimeSpeedRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Length of day multiplier. Higher numbers mean longer days. Min: 0.1, Max: 5'
        },
        {
            label: 'Night Length',
            name: 'NightTimeSpeedRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Length of night multiplier. Higher numbers mean longer nights. Min: 0.1, Max: 5'
        },
        {
            label: 'EXP Rate',
            name: 'ExpRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 20,
            description: 'Multiplier for amount of EXP earned by both players and pals. Min: 0.1, Max: 20'
        },
        {
            label: 'Enable Fast Travel',
            name: 'bEnableFastTravel',
            type: 'select',
            default: 'True',
            options: [
                'True', 'False'
            ],
            description: 'Enable fast travel via statues and the PalBox'
        },
        {
            label: 'Choosable Starting Location',
            name: 'bIsStartLocationSelectByMap',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Determines whether or not you are able to choose your starting location the first time you connect to the server. Defaults to False.'
        },
        {
            label: 'Enable Non-login Penalty',
            name: 'bEnableNonLoginPenalty',
            type: 'select',
            default: 'True',
            options: [
                'True', 'False'
            ],
            description: 'Setting to True enables a penalty to players who do not log in after a set period of time.'
        },
        {
            label: 'Enable Raids',
            name: 'bEnableInvaderEnemy',
            type: 'select',
            default: 'True',
            options: [
                'True', 'False'
            ],
            description: 'Enables enemy raids on your base(s).'
        },
        {
            label: 'Max Base Camps Allowed',
            name: 'BaseCampMaxNum',
            type: 'number',
            default: 128,
            min: 0,
            max: 9999,
            description: 'Max number of base camps allowed on the server.'
        },
        {
            label: 'Max Workers At Base',
            name: 'BaseCampWorkerMaxNum',
            type: 'number',
            default: 15,
            min: 1,
            max: 20,
            description: 'Max number of workers that can be deployed at each base. Higher numbers impact performance. Min: 1, Max: 20'
        },
        {
            label: 'Building Damage Multiplier',
            name: 'BuildObjectDamageRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Multiplier for amount of damage done to player-made buildings. Min: 0.5, Max: 3'
        },
        {
            label: 'Building Deterioration Rate',
            name: 'BuildObjectDeteriorationDamageRate',
            type: 'number',
            default: 1,
            min: 0,
            max: 10,
            description: 'Rate at which player-made buildings naturally lose health and require repairs. Setting to 0 disables this effect. Min: 0, Max: 10'
        },
        {
            label: 'Resource Node Drop Multiplier',
            name: 'CollectionDropRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Multiplier for items dropped from a resource node. Higher is more. Min: 0.5, Max: 3'
        },
        {
            label: 'Resource Node HP Multiplier',
            name: 'CollectionObjectHpRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Multiplier for resource node HP. Higher is more. Min: 0.5, Max: 3'
        },
        {
            label: 'Resource Node Respawn Multiplier',
            name: 'CollectionObjectRespawnSpeedRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Multiplier for resource node HP. Higher is faster. Min: 0.5, Max: 3'
        },
        {
            label: 'Enemy Loot Multiplier',
            name: 'EnemyDropItemRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Higher numbers mean enemies drop more loot upon capture or kill. Min: 0.5, Max: 3'
        },
        {
            label: 'Enable Aim Assist on Controllers',
            name: 'bEnableAimAssistPad',
            type: 'select',
            default: 'True',
            options: [
                'True', 'False'
            ],
            description: 'Enables aim assist on controllers and gamepads'
        },
        {
            label: 'Enable Aim Assist on Keyboard and Mouse',
            name: 'bEnableAimAssistKeyboard',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Enables aim assist on keyboard and mouse setups.'
        },
        {
            label: 'Max Number of Dropped Items',
            name: 'DropItemMaxNum',
            type: 'number',
            default: 3000,
            min: 0,
            max: 5000,
            description: 'Max number of dropped items able to exist in the world at one time. Higer numbers may impact performance. Max: 5000'
        },
        {
            label: 'Dropped Item Despaw Timer (hours)',
            name: 'DropItemAliveMaxHours',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 9999,
            description: 'Time (in hours) it takes for a dropped item to despawn from the world. Higher numbers will impact performance'
        },
        {
            label: 'Work Speed Rate',
            name: 'WorkSpeedRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 9999,
            description: 'Higher numbers increase the rate at which all work (player and pals) is done at camp buildings.'
        },
        {
            label: 'Large Egg Hatching Rate (x15 Minutes)',
            name: 'PalEggDefaultHatchingTime',
            type: 'number',
            default: 72,
            min: 1,
            max: 9999,
            description: 'Time it takes large eggs to hatch. Multiply setting by 15 minutes to get real-world time. Server default is 24 hours (72 units), single player default is 30 minutes (2 units).'
        },
        {
            label: 'Max Players in Guild',
            name: 'GuildPlayerMaxNum',
            type: 'number',
            default: 20,
            min: 1,
            max: 9999,
            description: 'Maximum number of players in a guild'
        },
        {
            label: 'Reset Guild if All Players are Offline',
            name: 'bAutoResetGuildNoOnlinePlayers',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Resets a guild if all of it\'s players are offline'
        },
        {
            label: 'Hours Required Before Guilds Reset',
            name: 'GuildPlayerMaxNum',
            type: 'number',
            default: 72,
            min: 1,
            max: 9999,
            description: 'Time in hours required to pass with all members of a guild offline before it resets.'
        },
        {
            label: 'Enable Pickup of Other Guild\'s Death Bag',
            name: 'bCanPickupOtherGuildDeathPenaltyDrop',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Allows players to pick up death penalty drops of players in other guilds.'
        },
        {
            label: 'Enable Defending Other Guild\'s Bases',
            name: 'bEnableDefenseOtherGuildPlayer',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Allows players to help defend other guild\'s bases from raids.'
        },
    ],
    players: [
        {
            label: 'Player Damage Multiplier',
            name: 'PlayerDamageRateAttack',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase player damage to enemies. Min: 0.1, Max: 5'
        },
        {
            label: 'Player Armor Multiplier',
            name: 'PlayerDamageRateDefense',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase damage to player from enemies. Min: 0.1, Max: 5'
        },
        {
            label: 'Player Hunger Depletion',
            name: 'PlayerStomachDecreaceRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which the player becomes hungry. Min: 0.1, Max: 5'
        },
        {
            label: 'Player Stamina Usage Multiplier',
            name: 'PlayerStaminaDecreaceRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which the player uses stamina. Min: 0.1, Max: 5'
        },
        {
            label: 'Player Health Regen Rate',
            name: 'PlayerAutoHPRegeneRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which the player regens health. Min: 0.1, Max: 5'
        },
        {
            label: 'Player Health Regen Rate While Sleeping',
            name: 'PlayerAutoHpRegeneRateInSleep',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which the player regens health while sleeping. Min: 0.1, Max: 5'
        },
        {
            label: 'Character persists after logout',
            name: 'bExistPlayerAfterLogout',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'If true, your character will remain in the world while you are logged out.'
        },
    ],
    pals: [
        {
            label: 'Pal Hunger Rate',
            name: 'PalStomachDecreaceRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which pals become hungry. Min: 0.1, Max: 5'
        },
        {
            label: 'Pal Spawn Rate',
            name: 'PalSpawnNumRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 3,
            description: 'Higher numbers increase the rate at which pals spawn in the world. Min: 0.5, Max: 3'
        },
        {
            label: 'Pal Capture Rate',
            name: 'PalCaptureRate',
            type: 'number',
            default: 1,
            min: 0.5,
            max: 2,
            description: 'Higher numbers increase the chance to capture pals. Min: 0.5, Max: 2'
        },
        {
            label: 'Pal Damage Multiplier',
            name: 'PalDamageRateAttack',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the damage Pals do. Min: 0.1, Max: 5'
        },
        {
            label: 'Pal Armor Multiplier',
            name: 'PalDamageRateDefense',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the damage Pals take. Min: 0.1, Max: 5'
        },
        {
            label: 'Pal Stamina Usage',
            name: 'PalStaminaDecreaceRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which pals use stamina (e.g. Mounts). Min: 0.1, Max: 5'
        },
        {
            label: 'Pal HP Regeneration Rate',
            name: 'PalAutoHPRegeneRate',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which pals regenerate HP. Min: 0.1, Max: 5'
        },
        {
            label: 'Pal HP Regeneration Rate During Sleep',
            name: 'PalAutoHpRegeneRateInSleep',
            type: 'number',
            default: 1,
            min: 0.1,
            max: 5,
            description: 'Higher numbers increase the rate at which pals regenerate HP while sleeping or inside the PalBox. Min: 0.1, Max: 5'
        },
    ],
    unsure: [
        {
            label: 'Region',
            name: 'Region',
            type: 'string',
            default: '',
            description: 'Setting related to server regions. Unsure if implemented at all, and if so what the values are.'
        },
        {
            label: 'Enable Multiplayer',
            name: 'bIsMultiplay',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Setting seems to do nothing. Requires further testing.'
        },
        {
            label: 'Max Coop Players',
            name: 'CoopPlayerMaxNum',
            type: 'number',
            default: 4,
            min: 1,
            max: 9999,
            description: 'Setting related to some maximum player count, but changing it seems to do nothing.'
        },
        {
            label: 'Difficulty',
            name: 'Difficulty',
            type: 'select',
            default: 'None',
            options: [
                'None'
            ],
            description: 'Unsure what valid options there are for this setting, aside from default.'
        },
        {
            label: 'Enable Player to Player Damage',
            name: 'bEnablePlayerToPlayerDamage',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Has another setting that is basically the same. Needs testing to know which is which.'
        },
        {
            label: 'Enable PvP',
            name: 'bIsPvP',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Has another setting that is basically the same. Needs testing to know which is which.'
        },
        {
            label: 'Enable Friendly Fire',
            name: 'bIbEnableFriendlyFire',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Unsure if setting works, or which of the previous settings it requires. Needs testing.'
        },
        {
            label: 'Enable UNKO',
            name: 'bActiveUNKO',
            type: 'select',
            default: 'False',
            options: [
                'True', 'False'
            ],
            description: 'Enables Unidentified Nocturnal Knock-off. Unsure of setting\'s actual purpose.'
        },
        {
            label: 'Max Number of Dropped Items (UNKO)',
            name: 'DropItemMaxNum_UNKO',
            type: 'number',
            default: 100,
            min: 0,
            max: 9999, //unknown
            description: 'Max number of dropped items able to exist in the world at one time, related to UNKO. Higer numbers may impact performance.'
        },
    ]
}