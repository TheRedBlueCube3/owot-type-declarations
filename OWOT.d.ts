/**
 * @module Tiles
 *
 * OWOT worlds are divided into 16x8 character grids, known as tiles. These tiles are used in many OWOT functions like {@link getChar}.
 *
 * OWOT worlds are also indexed into possibly negative coordinates. `0,0` is the bottom-right quadrant, `-1,-1` is the top-left, `-1,0` is the bottom-left, and `0,-1` is the top-right.
 */
declare interface Tiles {
    /** This interface exists only for documentation linking. */
    readonly _documentation: unique symbol;
}

/**
 * Gets a character from a specific location. Uses the {@link Tiles | tile-char} coordinate system.
 * @param tileX Tile X.
 * @param tileY Tile Y.
 * @param charX The character X inside of the tile.
 * @param charY The character Y inside of the tile.
 * @returns The character at that location.
 * @see {@link getCharInfoXY} for complete character data.
 */
declare function getChar(
    tileX: number,
    tileY: number,
    charX: number,
    charY: number,
): string;

/**
 * Gets the character and its info from a specific location.
 * @returns The character and its info at that location.
 */
declare function getCharInfoXY(x: number, y: number): Character;

/**
 * Gets the character color from a specific location. Uses the {@link Tiles | tile} coordinate system.
 * @param tileX Tile X.
 * @param tileY Tile Y.
 * @param charX The character X inside of the tile.
 * @param charY The character Y inside of the tile.
 * @returns The character's color, in `0xrrggbb` format.
 */
declare function getCharColor(
    tileX: number,
    tileY: number,
    charX: number,
    charY: number,
): number;

/**
 * Gets the character background color from a specific location. Uses the {@link Tiles | tile} coordinate system.
 * @param tileX Tile X.
 * @param tileY Tile Y.
 * @param charX The character X inside of the tile.
 * @param charY The character Y inside of the tile.
 * @returns The character's background color, in `0xrrggbb` format. -1 if the background color is not set.
 */
declare function getCharBgColor(
    tileX: number,
    tileY: number,
    charX: number,
    charY: number,
): number;

/**
 * Writes a character to a specific location.
 * @param char The character to write.
 * @param charColor The color (in hex-numbers like `0xff0000`.)
 * @param x X location.
 * @param y Y location.
 * @param charBgColor The background color (in hex-numbers like `0xff0000`.)
 * @param dB Bold (1 if bold, 0 otherwise.).
 * @param dI Italic (1 if italic, 0 otherwise.).
 * @param dU Underline (1 if underline, 0 otherwise.).
 * @param dS Strikethrough (1 if strikethrough, 0 otherwise.).
 */
declare function writeCharToXY(
    char: string,
    charColor: number,
    x: number,
    y: number,
    charBgColor?: number,
    dB?: number,
    dI?: number,
    dU?: number,
    dS?: number,
): void;

/**
 * An object containing the user's current text color, cell background color, and chat nick name.
 */
declare var YourWorld: {
    /**
     * User's current text color.
     * @remarks The color format is in `0xrrggbb`, meaning you have to bit-shift colors to get the R, G, and B values inside the color.
     * @example
     * Setting the user color to a random one:
     * ```js
     * YourWorld.Color = Math.round(Math.random() * 0xFFFFFF)
     * ```
     * @example
     * Packing an RGB value inside the color value:
     * ```js
     * let r = 64,
     *     g = 64,
     *     b = 64
     *
     * YourWorld.Color = (r << 16) | (g << 8) | b
     * ```
     */
    Color: number | null;
    /**
     * User's current background color. -1 if not set. Uses the `0xrrggbb` color format.
     * @example
     * Clearing the user's background color:
     * ```js
     * YourWorld.BgColor = -1;
     * ```
     * @see {@link YourWorld.Color}
     */
    BgColor: number;
    /**
     * User's current nickname. `null` if not set.
     */
    Nickname: string | null;
};

/**
 * An object containing various OWOT scripting functions. It's also inherited from EventEmitter.
 */
declare var w: {
    /**
     * Sets the interval, in milliseconds, between text flushes after writing.
     * @param t The time between each flush.
     */
    setFlushInterval: (t: number) => void;
    /**
     * Broadcasts a comu/cmd message across everyone on the same world. cmd is a feature of OWOT that allows scripts to exchange string messages.
     *
     * This is a wrapper around {@link network.cmd}.
     * @param message Message to send.
     * @param includeUserInfo If true, comu will include a username and Uvias user ID in the message.
     */
    broadcastMessage: (message: string, includeUserInfo: boolean) => void;
    /**
     * Gets OWOT ready for receiving comu events via w.on("cmd").
     */
    broadcastReceive: () => void;
    /**
     * Listens for comu events.
     */
    on: (eventName: "cmd", callback: (e: Cmd) => void) => void;
};

/**
 * An object containing various network commands.
 */
declare var network: {
    /**
     * Broadcasts a comu/cmd message across everyone on the same world. cmd is a feature of OWOT that allows scripts to exchange string messages.
     * @param message Message to send.
     * @param includeUserInfo To include a username and Uvias user ID.
     */
    cmd: (message: string, includeUserInfo: boolean) => void;
    link: {
        /**
         * Creates a URL link.
         * @param position The position of the link.
         * @param type The type of the link (URL).
         * @param args The URL.
         */
        (position: TileCoords, type: "url", args: { url: string }): void;
        /**
         * Creates a coordinate link.
         * @param position The position of the link.
         * @param type The type of the link (coordinate).
         * @param args The x and y coordinates.
         */
        (position: TileCoords, type: "coord", args: Vector2): void;
    };
};

interface Vector2 {
    x: number;
    y: number;
}

/**
 * An object containing various HTTP network commands.
 */
declare var networkHTTP: {
    /**
     * Creates a URL link.
     * @param tileX Tile X.
     * @param tileY Tile Y.
     * @param charX Character X.
     * @param charY Character Y.
     * @param link The link to create.
     */
    urllink: (
        tileX: number,
        tileY: number,
        charX: number,
        charY: number,
        link: string,
    ) => void;
};

/**
 * Tile coordinate system.
 * @see {@link Tiles}
 */
declare interface TileCoords {
    tileX: number;
    tileY: number;
    charX: number;
    charY: number;
}

/**
 * cmd is a feature of OWOT that allows scripts to exchange string messages.
 */
declare interface Cmd {
    /**
     * Kind of message - always "cmd".
     */
    kind: "cmd";
    /**
     * The actual message payload.
     */
    data: string;
    /**
     * The sender's channel ID.
     */
    sender: number;
    /**
     * Module source identifier.
     * @remarks Always appears as "cmd" in observed messages
     */
    source: "cmd";
    /**
     * The sender's Uvias display name.
     */
    username?: string;
    /**
     * The sender's Uvias ID.
     */
    id?: number;
}

/**
 * An interface for character information. Returned by {@link getCharInfoXY}.
 */
declare interface Character {
    /**
     * If the character is loaded in the world, this is true.
     */
    loaded: boolean;
    /**
     * The character.
     */
    char: string;
    /**
     * The character color, in `0xrrggbb` format.
     */
    color: number;
    /**
     * The character background color, in `0xrrggbb` format. -1 if not set.
     */
    bgColor: number | -1;
    /**
     * The character protection status.
     */
    protection: Protections;
    /**
     * Text decorations that this character has.
     */
    decoration: Decorations;
}
/**
 * Every character decoration.
 */
declare interface Decorations {
    /**
     * 1 if bold, 0 otherwise.
     */
    bold: number;
    /**
     * 1 if italic, 0 otherwise.
     */
    italic: number;
    /**
     * 1 if underline, 0 otherwise.
     */
    underline: number;
    /**
     * 1 if strikethrough, 0 otherwise.
     */
    strikethrough: number;
}
/**
 * Protections are levels of protection that a character can have.
 */
declare const enum Protections {
    /**
     * Public - writable by anyone.
     */
    Public = 0,
    /**
     * Member - writable by the world owner and members.
     */
    Member = 1,
    /**
     * Owner - writable only by the world owner.
     */
    Owner = 2,
}
