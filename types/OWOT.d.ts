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

declare var menu: Menu;

declare function writeChar(
    char: string,
    doNotMoveCursor: boolean,
    color: number,
    noNewline: boolean,
    undoCursorOffset: boolean,
    bgColor: number,
    dB: boolean,
    dI: boolean,
    dU: boolean,
    dS: boolean,
);

/**
 * The OWOT DOM <canvas> element. Initialized in {@link init_dom}. Its selector is #owot.
 *
 * @example
 * Hide the OWOT canvas:
 * ```js
 * owot.style.opacity = 0;
 * ```
 */
declare var owot: HTMLCanvasElement | null;
/**
 * The CanvasRenderingContext2D of the OWOT canvas. Initialized in {@link init_dom}.
 *
 * @example
 * Clear all the rendered tiles from the view:
 * ```js
 * owotCtx.clearRect(0, 0, owotWidth, owotHeight);
 * ```
 */
declare var owotCtx: CanvasRenderingContext2D | null;
/**
 * The DOM <textarea> element used for writing and pasting to the OWOT canvas.
 *
 * @example
 * Paste "hello world" at the current cursor position:
 * ```js
 * textInput.value = `hello world`;
 * ```
 */
declare var textInput: HTMLTextAreaElement | null;

/**
 * The DOM <a> anchor element. It is used for user link clicks and changes the href upon hovering on a link.
 *
 * Upon hovering, it also changes the {@link linkParams} global variable to match the metadata of the hovered link.
 *
 * @example
 * Log to the console whenever a JavaScript link is clicked:
 * ```js
 * linkElm.addEventListener("click", () => {
 *   if(linkParams.protocol === "javascript") console.log(linkParams.protocol)
 * })
 */
declare var linkElm: HTMLAnchorElement | null;

/**
 * The DOM <div> element used to scale the linkElm to the same size as a cell (character) within the OWOT canvas.
 *
 * @example
 * Highlights the URL being hovered over.
 * ```js
 * linkDiv.style.background = `rgba(22, 208, 233, 0.5)`
 */
declare var linkDiv: HTMLDivElement | null;

/**
 * The metadata of {@link linkElm}. Upon hovering on a link on canvas, this global variable changes its properties.
 */
declare var linkParams: {
    /**
     * The protocol of the link. (comu for {@link Cmd | cmd} links, javascript for JavaScript links) Empty when the link is a real website link.
     */
    protocol: string;
    /**
     * The URL portion of the link for custom links, and the entire URL for website links.
     */
    url: string;
    /**
     * Similar to the HTTP Host header. Empty for custom links.
     */
    host: string;
    /**
     * Determines whether or not the link is a coordinate link.
     */
    coord: boolean;
};

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
declare function getCharInfoXY(x: number, y: number): -1 | Character;

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
    dB?: number | boolean,
    dI?: number | boolean,
    dU?: number | boolean,
    dS?: number | boolean,
): void;

declare interface wGlobals {
    acceptOwnEdits: boolean;
    menu: Menu;
    backgroundInfo: {
        x: number;
        y: number;
        w: number;
        h: number;
        alpha: number;
        rmod: number;
    };
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
    on(eventName: "cmd", callback: (e: Cmd) => void): void;
    /**
     * Removes "comu event" listeners.
     */
    off(eventName: "cmd", callback: (e: Cmd) => void): void;

    /**
     * Fired after a write to the canvas.
     */
    on(eventName: "write", callback: (e: OWOTCharacterData) => void): void;
    /**
     * Removes "after write" listeners.
     */
    off(eventName: "write", callback: (e: OWOTCharacterData) => void): void;

    /**
     * Fired before a write to the canvas.
     */
    on(
        eventName: "writeBefore",
        callback: (e: OWOTCharacterData) => void,
    ): void;
    /**
     * Removes "before write" listeners.
     */
    off(
        eventName: "writeBefore",
        callback: (e: OWOTCharacterData) => void,
    ): void;
}

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

declare var colorClasses: {
    qprot0: "#DDD"; // owner
    qprot1: "#EEE"; // member
    qprot2: "#FFF"; // public
    qprot3: "#FFF"; // default
    qlink0: "#0000FF"; // url
    qlink1: "#008000"; // coord
    link: "#AAF";
    prot: "#000";
    reg: "#00F";
    err: "#BBC";
};

declare var writeBuffer: any[];
