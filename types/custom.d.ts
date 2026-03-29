/* global block */
/**
 * An abstract type for every WS message.
 */
declare interface WSMessage {
    /**
     * The type of the message.
     */
    kind: string;
}

/* helpers.js/d.ts block */

/**
 * An internal object for storing enums. Used in helpers.js. Always has two objects: `edit` and `position`.
 */
declare interface JSEnum {
    [key: string]: number;
}

/**
 * A {@link Vector2} point, but as an array. Represented as [x, y].
 */
type Point = [number, number];

/**
 * A {@link TileCoords} point, but as an array. Represented as [tileX, tileY, charX, charY].
 */
type TileCharPoint = [number, number, number, number];

declare interface AjaxSettings {
    /**
     * HTTP method. (GET or POST)
     */
    type: "GET" | "POST";
    /**
     * The request URL.
     */
    url: string;
    /**
     * The payload to send (will be URL-encoded).
     */
    data?: Record<string, any>;
    /**
     * Determines if the request should be asynchronous (defaults to `true`).
     */
    async?: boolean;
    /**
     * The success callback. Receives the response text and the request object.
     * @param response The response text.
     * @param req The `XMLHttpRequest` object.
     */
    done?: (response: string, req: XMLHttpRequest) => void;
    /**
     * The error callback. Called if the AJAX request returns an error.
     * @param req The `XMLHttpRequest` object that failed.
     */
    error?: (req: XMLHttpRequest) => void;
}

declare type AssignedColors = [
    "#660066",
    "#003366",
    "#ff9900",
    "#ff0066",
    "#003300",
    "#ff0000",
    "#3a3a3a",
    "#006666",
    "#3399ff",
    "#3333ff",
    "#000000",
];

type KeyCode = (typeof keyCodeTbl)[keyof typeof keyCodeTbl];

type HexChar =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "a"
    | "A"
    | "b"
    | "B"
    | "c"
    | "C"
    | "d"
    | "D"
    | "e"
    | "E"
    | "f"
    | "F";
type HexString = `${HexChar}${string}` | "";

type RGBArray = [number, number, number];

type SafeLinkHost = [
    "yourworldoftext.com",
    "ourworldofpixels.com",
    "ourworldoftext.com",
    "dir.ourworldoftext.com",
    "test.ourworldoftext.com",
    "wiki.ourworldoftext.com",
    "owot.me",
    "spooks.me",
    "youtube.com",
    "discord.com",
    "discord.gg",
    "discordapp.com",
    "reddit.com",
    "old.reddit.com",
    string,
][number];

type FixedLengthArray<T, L extends number> = [T, ...T[]] & { length: L };

/* chat.js/.d.ts block */

/**
 * Where the chat was sent (page - world chat, global - global chat).
 */
type ChatLocation = "page" | "global";

/**
 * A WebSocket chat message.
 */
declare interface WSChatMessage extends WSMessage {
    /**
     * The type of the message.
     */
    kind: "chat";
    /**
     * Whether the user is a server-wide admin.
     */
    admin: boolean;
    /**
     * The user's CSS color.
     */
    color: string;
    /**
     * The Unix date, in milliseconds, when the message was sent.
     */
    date: number;
    /**
     * The ID of the person who sent the message.
     */
    id: number;
    /**
     * Where the chat was sent (page - world chat, global - global chat).
     */
    location: ChatLocation;
    /**
     * The content of the message.
     */
    message: string;
    /**
     * The user's nickname (same as realUsername if there is no nickname).
     */
    nickname: string;
    /**
     * Whether the user is a server-wide operator.
     */
    op: boolean;
    /**
     * The user's Uvias username, if any.
     */
    realUsername: string;
    /**
     * Whether the user is registered via Uvias.
     */
    registered: boolean;
    /**
     * Whether the user is server-wide staff.
     */
    staff: boolean;
    /**
     * A custom rank name.
     */
    rankName?: string;
    /**
     * The direction of /tell PMs (to me or from me). Undefined if the message isn't a PM.
     */
    privateMessage?: PrivateMessageType;
}

/**
 * The type of the user that sent the message.
 * * "user"	     :: registered non-renamed nick
 * * "anon_nick" :: unregistered nick
 * * "anon"	     :: unregistered
 * * "user_nick" :: registered renamed nick
 */
type ChatType = "user_nick" | "user" | "anon" | "anon_nick";

/**
 * Message data, used in {@link addChat}.
 */
declare interface ChatMessageData {
    /**
     * The ID of the user who sent the message.
     */
    id: number;
    /**
     * The type of the user that sent the message.
     */
    type: ChatType;
    /**
     * The nickname of the user that sent the message.
     */
    nickname: string;
    /**
     * The content of the message.
     */
    message: string;
    /**
     * The user's Uvias username, if any.
     */
    realUsername: string;
    /**
     * Whether the user is a server-wide operator.
     */
    op: boolean;
    /**
     * Whether the user is a server-wide administrator.
     */
    admin: boolean;
    /**
     * Whether the user is server-wide staff.
     */
    staff: boolean;
    /**
     * The user's CSS color.
     */
    color: string;
    /**
     * The date of the sent message.
     */
    date: number;
    /**
     * The WS chat message (source of the data).
     */
    dataObj: WSChatMessage;
    /**
     * Whether the message is hidden.
     */
    hide?: boolean;
}

type PrivateMessageType = "from_me" | "to_me";

/**
 * A chat record which contains the HTML element of the message and its parent chat field.
 */
declare interface ChatElement {
    /**
     * The Unix date, in milliseconds, when the chat message was sent.
     */
    date: number;
    /**
     * The \<div\> which contains the message.
     */
    element: HTMLDivElement;
    /**
     * The \<div\> field which contains all of the messages.
     */
    field: HTMLDivElement;
    /**
     * The ID of the person who wrote the message.
     */
    id: number;
}

/**
 * A command from the {@link chatCommandRegistry | chat command registry}.
 */
declare interface ChatCommand {
    /**
     * The callback to call when the command is ran.
     * @param args The callback's arguments/parameters.
     */
    callback: (args: string[]) => void;
    /**
     * The names of the command's parameters.
     */
    params: string[];
    /**
     * The description of the command.
     */
    desc: string;
    /**
     * An example of its arguments.
     */
    example: string;
}

declare interface ApiChatOpts {
    /**
     * Whether to treat commands as normal messages.
     */
    exclude_commands: boolean;
    /**
     * The nickname to use.
     */
    nick: string;
    /**
     * In number format: 0 - global chat, 1 - world chat. In string format - self-explanatory.
     */
    location: 0 | 1 | ChatLocation;
    /**
     * The user's prefix color.
     */
    color: string;
    /**
     * A custom string to include with the message.
     */
    customMeta: string;
}

/**
 * An array Vector2 with a width, used in {@link emoteList}.
 */
declare type PointWithWidth = [number, number, number];

declare type LongWidthChar = [
    3061,
    11835,
    65021,
    73776,
    73795,
    73807,
    74017,
    74022,
    74059,
    74060,
    74065,
    74265,
    74382,
    74588,
    74611,
    74788,
    74791,
    74792,
    74793,
    74794,
    74795,
    74798,
    74801,
    43461,
][number];

declare interface ChatSendEvent {
    message: string;
    opts: ApiChatOpts;
    cancel: boolean;
}

/* renderer.js/.d.ts block */

declare type StringPoint = `${number},${number}`;

declare interface CachedTile {
    pool: TilePool;
    x: number;
    y: number;
    idx?: number;
    poolX: number;
    poolY: number;
    clampW: number;
    clampH: number;
}

declare interface TilePool {
    canv: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    map: Record<number, CachedTile>;
    tileWidth: number;
    tileHeight: number;
    maxWidth: number;
    maxHeight: number;
    width: number;
    height: number;
    size: number;
}

declare interface AvailablePool {
    pool: TilePool;
    index: number;
}

declare interface WorldTile
{
    content: FixedLengthArray<string, 128>;
    properties: WorldTileProperties;
    redraw: boolean;
    serial?: number;
    fastQueue?: boolean;
    backgroundColor?: number;
}

declare interface WorldTileProperties
{
    bgcolor: FixedLengthArray<number, 128>;
    color: FixedLengthArray<number, 128>;
    writability: Protections | null;
}

declare type ShardGridManipulableChar =
    | 0x1fb3e
    | 0x1fb3f
    | 0x1fb43
    | 0x14b44
    | 0x1fb49
    | 0x1fb4a
    | 0x1fb4e
    | 0x1fb4f
    | 0x1fb54
    | 0x1fb55
    | 0x1fb59
    | 0x1fb5a
    | 0x1fb5f
    | 0x1fb60
    | 0x1fb64
    | 0x1fb65;

declare type LinkType = "url" | "coord" | "note";

/* owot.js block */
/**
 * Protections are levels of protection that a character can have. It is also used for permissions.
 */
declare const enum Protections {
    /**
     * Public - writable by anyone.
     */
    Public = 0,
    /**
     * Member - writable by the world owner and members.
     */
    Members = 1,
    /**
     * Owner - writable only by the world owner.
     */
    Admin = 2,
}
/**
 * The meaningful parameters to writeCharTo().
 */
declare interface OWOTCharacterData {
    /**
     * The character to write.
     */
    char: string;
    /**
     * The character color.
     */
    color: number;
    /**
     * The character's cell color.
     */
    bgColor: number;
    /**
     * The character's tile X position.
     */
    tileX: number;
    /**
     * The character's tile Y position.
     */
    tileY: number;
    /**
     * The character's X position within the tile.
     */
    charX: number;
    /**
     * The character's Y position within the tile.
     */
    charY: number;
    /**
     * Whether the character is bold.
     */
    bold: boolean;
    /**
     * Whether the character is italic.
     */
    italic: boolean;
    /**
     * Whether the character is underlined.
     */
    underline: boolean;
    /**
     * Whether the character is strikethrough'd.
     */
    strikethrough: boolean;
}
/**
 * Every character decoration.
 */
declare interface Decorations {
    /**
     * 1 if bold, 0 otherwise.
     */
    bold: NumBoolean;
    /**
     * 1 if italic, 0 otherwise.
     */
    italic: NumBoolean;
    /**
     * 1 if underline, 0 otherwise.
     */
    under: NumBoolean;
    /**
     * 1 if strikethrough, 0 otherwise.
     */
    strike: NumBoolean;
}
/**
 * cmd is a feature of OWOT that allows scripts to exchange string messages.
 */
declare interface Cmd extends WSMessage {
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
    decoration: number | Decorations | null;
}

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

interface Vector2 {
    x: number;
    y: number;
}

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
