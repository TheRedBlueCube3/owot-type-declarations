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

type PointWithWidth = [number, number, number];

type LongWidthChar = [
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

interface ChatSendEvent {
    message: string;
    opts: ApiChatOpts;
    cancel: boolean;
}
