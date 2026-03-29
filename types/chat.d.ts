declare interface wGlobals {
    /**
     * Fired when a chat message is sent.
     */
    on(type: "chat", call: (e: ChatMessageData) => void): void;
    /**
     * Removes every "chat message" event listener with this specific callback.
     */
    off(type: "chat", call: (e: ChatMessageData) => void): void;
    /**
     * Emits a "chat message" event.
     */
    emit(type: "chat", call: ChatMessageData): void;

    /**
     * Fired when a chat message is sent.
     */
    on(type: "chatMod", call: (e: ChatMessageData) => void): void;
    /**
     * Removes every "chat message" event listener with this specific callback.
     */
    off(type: "chatMod", call: (e: ChatMessageData) => void): void;
    /**
     * Emits a "chat message" event.
     */
    emit(type: "chatMod", call: ChatMessageData): void;

    /**
     * Fired when a chat message is sent by the user using api_chat_send.
     */
    on(type: "chatSend", call: (e: ChatSendEvent) => void): void;
    /**
     * Removes every "user-sent chat message" event listener with this specific callback.
     */
    off(type: "chatSend", call: (e: ChatSendEvent) => void): void;
    /**
     * Emits a "user-sent chat message" event.
     */
    emit(type: "chatSend", call: ChatSendEvent): void;

    /**
     * Fired when the chat window is closed.
     */
    on(type: "chatClose", call: () => void): void;
    /**
     * Removes every "chat window closed" event listener with this specific callback.
     */
    off(type: "chatClose", call: () => void): void;
    /**
     * Emitted when the chat window is closed.
     */
    emit(type: "chatClose"): void;

    /**
     * Fired when the chat window is opened.
     */
    on(type: "chatOpen", call: () => void): void;
    /**
     * Removes every "chat window opened" event listener with this specific callback.
     */
    off(type: "chatOpen", call: () => void): void;
    /**
     * Emitted when the chat window is opened.
     */
    emit(type: "chatOpen"): void;
}

/**
 * The selected chat tab. 0 is the local page chat, 1 is the global chat.
 */
declare var selectedChatTab: 0 | 1;
/**
 * Whether the chat is open. 0 when the chat has never been opened.
 */
declare var chatOpen: 0 | boolean;
/**
 * How many messsages were unread in the local page chat.
 */
declare var chatPageUnread: number;
/**
 * How many messsages were unread in the global chat.
 */
declare var chatGlobalUnread: number;
/**
 * Whether the page chat was opened at all.
 */
declare var initPageTabOpen: boolean;
/**
 * Whether the global chat was opened at all.
 */
declare var initGlobalTabOpen: boolean;
/**
 * Whether chat was opened at all.
 */
declare var initChatOpen: boolean;
/**
 * History of user's chats.
 */
declare var chatWriteHistory: string[];
/**
 * A list of every world chat message, in HTML/DOM.
 */
declare var chatRecordsPage: ChatElement[];
/**
 * A list of every global chat message, in HTML/DOM.
 */
declare var chatRecordsGlobal: ChatElement[];
/**
 * A list of unread world chat messages.
 */
declare var chatAdditionsPage: ChatMessageData[];
/**
 * A list of unread global chat messages.
 */
declare var chatAdditionsGlobal: ChatMessageData[];
/**
 * A registry of every chat command.
 */
declare var chatCommandRegistry: Record<string, ChatCommand>;
/**
 * The maximum chat write history backlog length.
 */
declare var chatWriteHistoryMax: number;
/**
 * The maximum chat element backlog length.
 */
declare var chatHistoryLimit: number;
/**
 * The chat write history backlog index.
 */
declare var chatWriteHistoryIdx: number;
/**
 * Whether to replace (and limit to one) wide Unicode characters from the chat message.
 */
declare var chatLimitCombChars: boolean;
/**
 * The previous/next message when pressing Up/Down.
 */
declare var chatWriteTmpBuffer: string;
/**
 * The set chat color. If nothing is in local storage, use "null". Uses 0xrrggbb color.
 */
declare var defaultChatColor: number;
/**
 * A "New messages" unread bar for scrolling up, specifically for the world chat field. The {@link addUnreadChatBar | function} this modifies is unused.
 */
declare var chatPageUnreadBar: null;
/**
 * A "New messages" unread bar for scrolling up, specifically for the global chat field. The {@link addUnreadChatBar | function} this modifies is unused.
 */
declare var chatGlobalUnreadBar: null;
/**
 * Whether the chat can include greentexts.
 */
declare var chatGreentext: boolean;
/**
 * Whether the chat can include emotes.
 */
declare var chatEmotes: boolean;
/**
 * Whether deleting chats client-side works.
 */
declare var acceptChatDeletions: boolean;
/**
 * An old way of entering chat commands. Replaced by {@link chatCommandRegistry}.
 * @deprecated
 */
declare var client_commands: ((...args: string[]) => void)[];

/**
 * Whether the user has the ability to chat.
 */
declare var canChat: boolean;

/**
 * Sends a message.
 * @param message The message to send.
 * @param opts Its options.
 * @example
 * Sending a regular message into the world chat:
 * ```js
 * api_chat_send("beep boop", {location: "page"})
 * ```
 */
declare function api_chat_send(message: string, opts: ApiChatOpts): void;

/**
 * Adds a client-side message to the chat field.
 * @param message The client message to add.
 */
declare function clientChatResponse(message: string): void;

/**
 * Adds a command to the chat command registry.
 * @param command The command name (case-insensitive).
 * @param callback The callback to call when the command is ran.
 * @param params The command's parameters.
 * @param desc The command's description.
 * @param example An example of every argument.
 */
declare function register_chat_command(
    command: string,
    callback: (args: string[]) => void,
    params: string[],
    desc: string,
    example: string,
): void;

/**
 * Sends the chat message in the chat bar. Uses the default color.
 */
declare function sendChat(): void;

/**
 * Updates the inner text of the chat button (or tab buttons inside the chat) to reflect the number of unread messages.
 */
declare function updateUnread(): void;

/**
 * Called when a chat event occurs (line 55 of chat.js). Updates the unread number for the tab you are not on and adds the chat to the DOM.
 * @param data The message data.
 */
declare function event_on_chat(data: ChatMessageData): void;

/**
 * Moves the cursor (caret) to the end of the input field's value.
 * @param elm The HTMLInputElement to move the cursor to the end of.
 */
declare function moveCaretEnd(elm: HTMLInputElement): void;

/**
 * Sets the minimum width of an element to 32px.
 * @param elm The element to set the minimum width of.
 */
declare function setChatTabPadding(elm: HTMLElement): void;

/**
 * Makes the chat window resizable via adding multiple event listeners and changing the cursor for feedback.
 */
declare function resizable_chat(): void;

/**
 * Gets the chat field element for both world chat and global chat.
 * @param chatfield The chatfield type (location). If this is undefined, the function gets the currently selected chat field element.
 */
declare function evaluateChatfield(chatfield?: ChatLocation): void;

/**
 * A lookup table between the emote name and its atlas location in /static/emotes.png.
 */
declare var emoteList: {
    /* blobs */
    OHHELLNO: [0, 0];
    ohno: [32, 0];
    notcool: [64, 0];
    bad: [96, 0];
    bruh: [128, 0];
    huh: [160, 0];
    derp: [192, 0];
    heh: [224, 0];
    lol: [256, 0];
    neat: [288, 0];
    awesome2: [320, 0];
    beepboop: [352, 0];
    erhb: [384, 0];
    what: [416, 0];
    zzz: [448, 0];
    shock: [480, 0];
    glare: [512, 0];
    watchyotone: [544, 0];
    blob_pride: [576, 0];
    blob_ally: [608, 0];
    blob_trans: [640, 0];
    /* 16px faces */
    ded: [0, 32];
    mad: [32, 32];
    sad: [64, 32];
    areyoukidding: [96, 32];
    sadsmug: [128, 32];
    ouch: [160, 32];
    meh: [192, 32];
    okthen: [224, 32];
    void: [256, 32];
    teef: [288, 32];
    mmm: [320, 32];
    durr: [352, 32];
    lenny: [384, 32];
    smug: [416, 32];
    oOoo: [448, 32];
    chaos: [480, 32];
    bootiful: [512, 32];
    omg: [544, 32];
    stahp: [576, 32];
    thinq: [608, 32];
    thunk: [640, 32];
    cringe: [672, 32];
    /* misc */
    yeesh: [0, 64];
    aaaHD: [32, 64];
    "403": [64, 64, 39];
    awesome: [103, 64];
    catthinkaaa: [135, 64, 45];
    like: [180, 64, 31];
    dislike: [211, 64, 31];
    failwhale: [242, 64, 70];
    karp: [312, 64, 35];
    no: [347, 64];
    scruffy: [379, 64, 38];
    tri: [417, 64, 34];
    troll: [451, 64];
    critter: [483, 64, 41];
    ballcat: [524, 64, 28];
    wart: [552, 64];
    catspeak: [584, 64];
    horsespeak: [616, 64, 30];
    fireboard: [646, 64];
    /* fp */
    fp: [0, 96];
    fpthinkaaa: [32, 96];
    fplikeaaa: [64, 96];
    fpdislikeaaa: [96, 96];
    fppinchaaa: [128, 96];
    [key: string]: Point | PointWithWidth;
};

/**
 * Adds a chat element to the specified chatfield.
 * @param chatfield The chat location of the field to send the message to.
 * @param id The ID of the user who sent the message.
 * @param type The type of the user that sent the message.
 * @param nickname The nickname of the user that sent the message.
 * @param message The content of the message.
 * @param realUsername
 * @param op Whether the user is a server-wide operator.
 * @param admin Whether the user is a server-wide administrator.
 * @param staff Whether the user is server-wide staff.
 * @param color The user's CSS color.
 * @param date The date of the sent message.
 * @param dataObj The WS chat message (source of the data).
 */
declare function addChat(
    chatfield: ChatLocation,
    id: number,
    type: ChatType,
    nickname: string,
    message: string,
    realUsername: string,
    op: boolean,
    admin: boolean,
    staff: boolean,
    color: string,
    date: number,
    dataObj: WSChatMessage,
): void;

/**
/**
 * Builds and adds a chat element to the specified chatfield in DOM.
 * @param field The DOM element of the chatfield to send the message to.
 * @param id The ID of the user who sent the message.
 * @param type The type of the user that sent the message.
 * @param nickname The nickname of the user that sent the message.
 * @param message The content of the message.
 * @param realUsername 
 * @param op Whether the user is a server-wide operator.
 * @param admin Whether the user is a server-wide administrator.
 * @param staff Whether the user is server-wide staff.
 * @param color The user's CSS color.
 * @param date The date of the sent message.
 * @param dataObj The WS chat message (source of the data).
 */
declare function buildChatElement(
    field: HTMLDivElement,
    id: number,
    type: ChatType,
    nickname: string,
    message: string,
    realUsername: string,
    op: boolean,
    admin: boolean,
    staff: boolean,
    color: string,
    date: number,
    dataObj: WSChatMessage,
): void;

/**
 * Inserts chat elements into the DOM chat field element.
 * @param chatfield The DOM element of the chatfield to insert the messages into.
 * @param messageQueue The messages to insert.
 */
declare function insertNewChatElementsIntoChatfield(
    chatfield: HTMLDivElement,
    messageQueue: ChatMessageData[],
): void;

/**
 * Inserts new chat elements (additions) into the DOM chatfield.
 */
declare function insertNewChatElements(): void;

/**
 * Removes a specific message from every chat field, identified by user ID and the date & time.
 * @param id The ID of the user who sent the message.
 * @param date When the message was sent (Unix epoch, in milliseconds)
 */
declare function removeChatByIdAndDate(id: number, date: number): void;

/**
 * Adds a "new messages" bar when you have scrolled up.
 * @remarks This function is unused.
 * @param chatfield The type of the chatfield to add the unread chat bar to.
 * @param message An override for the default "New messages" this function uses.
 * @param checkSituation If true, this will check if we have scrolled up, the current chat tab, if the unread bar is present...
 */
declare function addUnreadChatBar(
    chatfield: ChatLocation,
    message?: string,
    checkSituation?: boolean,
): HTMLDivElement;

/**
 * Checks if a given character code is wide-character Unicode.
 * @param x The character code to check.
 */
declare function isLongWidthChar(x: number): x is LongWidthChar;

/**
 * Filters wide Unicode characters from a string. It limits all wide chars to one and replaces the rest with dots.
 * @param str The string to filter wide chars from.
 */
declare function filterChatMessage(str: string): string;

/**
 * Gets the DOM chat field from the currently selected chat tab.
 */
declare function getChatField(): HTMLDivElement;

/**
 * Updates the user count on the current world (in the usr_online element).
 */
declare function updateUserCount(): void;

/**
 * Determines the type of a user in the chat.
 * @param registered Whether the user is registered.
 * @param nickname The user's nickname.
 * @param realUsername The user's Uvias username, if registered.
 */
declare function chatType(
    registered: boolean,
    nickname: string | undefined,
    realUsername: string,
);
